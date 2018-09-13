import { Rhp, Building, Property } from "./model/property-hierarchy";
import { AlarmService } from "./alarm-service";
import { Alarm } from "./model/alarm";
import { SensorReading } from "./model/sensor-reading";
import { SensorDataHistory } from "./model/sensor-data-history";
import * as moment from "moment";

/**
 * All filtering at user level done here
 */
export abstract class PropertyDataService {
  private userPermissions: Map<string, string[]>;
  private rhp: Rhp[];
  private properties: Map<string, Property>;
  private alarmService: AlarmService;
  private alarms: Alarm[] = [];

  // TODO this is shonky fix
  constructor(alarmService: AlarmService) {
    this.alarmService = alarmService;
  }

  // SETTER methods
  setRhp(rhp: Rhp[]): void {
    this.rhp = rhp;
    this.properties = new Map();
    for (let rhps of this.rhp) {
      for (let bldg of rhps.getBuildings()) {
        for (let prop of bldg.getProperties()) {
          this.properties.set(prop.getId(), prop);
        }
      }
    }
  }

  //TODO we map from the string names in the db to IDs in the server
  // better would be to store proper ref data
  setUserPermissions(userPermissionsOnStrName: string[][]) {
    if (this.userPermissions) {
      throw new Error("user perms already set");
    }

    this.userPermissions = new Map<string, string[]>();
    for (let userPermPair of userPermissionsOnStrName) {
      let permissions: string[] | undefined = this.userPermissions.get(
        userPermPair[0]
      );
      if (!permissions) {
        permissions = [];
        this.userPermissions.set(userPermPair[0], permissions);
      }

      let rhpName = userPermPair[1];
      if (rhpName == "ALL") {
        this.rhp.forEach(rhps => {
          if (permissions) permissions.push(rhps.getId());
        });
      } else {
        let rhps: Rhp | undefined = this.rhp.find(rhps => {
          return rhps.getName() == rhpName;
        });
        if (rhps) {
          permissions.push(rhps.getId());
        }
      }
    }
  }

  rhpAllowed(rhpID: string, userID: string): boolean {
    let permissions: string[] | undefined = this.userPermissions.get(userID);
    if (permissions) {
      return permissions.indexOf(rhpID) != -1;
    } else {
      return false;
    }
  }

  updateSensorReadings(
    id: string,
    sensors: SensorReading[],
    timestamp: moment.Moment | undefined
  ): void {
    let property: Property | undefined = this.properties.get(id);
    // check alarms
    this.alarmService.updateAlarmStatus(sensors);
    if (property) {
      property.setSensorReadings(timestamp, sensors);
    } else {
      console.error("No property for id", id, "cannot set sensor values.");
    }
  }

  setAlarms(alarms: Alarm[]): void {
    this.alarms = alarms;
  }

  // GETTER methods - called by API
  getPropertyList(userID: string): Rhp[] {
    return this.rhp.filter(rhps => {
      return this.rhpAllowed(rhps.getId(), userID);
    });
  }

  // allows undefined userID means any user
  getProperty(id: string, userID: string | undefined): Property | undefined {
    let property: Property | undefined = this.properties.get(id);
    if (
      property &&
      (!userID ||
        this.rhpAllowed(property.getRhpID(), userID))
    ) {
      return property;
    }
  }

  getBuilding(id: string, userID: string): Building | undefined {
    for (let rhp of this.getPropertyList(userID)) {
      for (let building of rhp.getBuildings()) {
        if (building.getId() == id) {
          return building;
        }
      }
    }
  }

  getAllProperties(userID: string): Property[] {
    // flattens map values to an array
    let props: Property[] = [];
    for (let prop of this.properties.values()) {
      if (this.rhpAllowed(prop.getRhpID(), userID)) {
        props.push(prop);
      }
    }
    return props;
  }

  getPropertyHistory(
    propertyIds: string[],
    timeframe: string,
    callback: Function,
    userID: string
  ): void {
    let checkPropsExist: boolean = true;
    let allowedPropIds: string[] = [];
    for (let id of propertyIds) {
      let property: Property | undefined = this.properties.get(id);
      if (!property) {
        checkPropsExist = false;
      } else if (
        this.rhpAllowed(property.getRhpID(), userID)
      ) {
        allowedPropIds.push(id);
      }
    }

    if (checkPropsExist) {
      this.getHistoricalSensorReadings(allowedPropIds, timeframe, callback);
    } else {
      console.error("No property found for ids " + propertyIds);
    }
  }

  getPropertyForecast(
    propertyIds: string[],
    timeframe: string,
    callback: Function,
    userID: string
  ): void {
    let checkPropsExist: boolean = true;
    let allowedPropIds: string[] = [];
    for (let id of propertyIds) {
      let property: Property | undefined = this.properties.get(id);
      if (!property) {
        checkPropsExist = false;
      } else if (
        this.rhpAllowed(property.getRhpID(), userID)
      ) {
        allowedPropIds.push(id);
      }
    }

    if (checkPropsExist) {
      this.getSensorReadingForecasts(allowedPropIds, timeframe, callback);
    } else {
      console.error("No property found for ids " + propertyIds);
    }
  }

  getPropertyRawData(
    propertyIds: string[],
    startTime: number,
    endTime: number,
    callback: Function,
    userID: string
  ) {
    let checkPropsExist: boolean = true;
    let allowedPropIds: string[] = [];
    for (let id of propertyIds) {
      let property: Property | undefined = this.properties.get(id);
      if (!property) {
        checkPropsExist = false;
      } else if (
        this.rhpAllowed(property.getRhpID(), userID)
      ) {
        allowedPropIds.push(id);
      }
    }
    this.getRawSensorData(allowedPropIds, startTime, endTime, callback);
  }

  getAlarms(userID: string): Alarm[] {
    let visibleAlarms: Alarm[] = [];

    for (let alarm of this.alarms) {
      let property: Property | undefined = this.properties.get(
        alarm.propertyId
      );
      if (
        property &&
        this.rhpAllowed(property.getRhpID(), userID)
      ) {
        visibleAlarms.push(alarm);
      }
    }

    return visibleAlarms;
  }

  abstract getHistoricalSensorReadings(
    ids: string[],
    timeframe: string,
    callback: Function
  ): void;
  abstract getSensorReadingForecasts(
    ids: string[],
    timeframe: string,
    callback: Function
  ): void;
  abstract getRawSensorData(
    ids: string[],
    startTime: number,
    endTime: number,
    callback: Function
  ): void;

  // POST methods
  //setAlarmStatus(alarmID: string, userMsg: string, userID: string): void {
  //}

  abstract refreshData(): void;
}
