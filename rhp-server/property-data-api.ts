//import { Property } from "./model/property";
import { PropertyDataService } from "./property-data-service";
import { AlarmService } from "./alarm-service";
import { Rhp, Building, Property } from "./model/property-hierarchy";
import { TelemetryType } from "./model/sensor-reading";
import { SensorDataHistory } from "./model/sensor-data-history";
import { Alarm } from "./model/alarm";

// at some point
export enum DAY_WEEK_MONTH { D = "D", W = "W", M = "M", SIX_M = "6M" };

/**
 * Public facing API for providing property data.
*  Converts from internal object model to suitable JSON-able objects
 */
export class PropertyDataAPI {

    private pds: PropertyDataService;

    constructor(pds: PropertyDataService) {
        this.pds = pds;
    }

    /**
     * Returns list of housing associations
     * TODO do we need to flatten for purposes of menu? at the moment the dashboard only calls it once
     */
    getPropertyList(userID: string): Rhp[] {
        let rhpObjArr: any[] = [];
        for (let rhps of this.pds.getPropertyList(userID)) {

            rhpObjArr.push(rhps.flatten());
        }
        return rhpObjArr;
    }

    /**
     * Returns property data for a specific ID.
     * If no ID supplied, returns property data for all.
     * @param id
     */
    getPropertyData(id: string, userID: string): Object[]|Object {
        if (id == null) {
            let propertyObjArr: any[] = [];
            for (let property of this.pds.getAllProperties(userID)) {

                propertyObjArr.push(property.flatten());
            }
            return propertyObjArr;
        } else {
            // array of one
            let property: Property | undefined = this.pds.getProperty(id, userID);
            if (property) {
                return property.flatten();
            } else {
                console.error("No property found for id " + id);
                return {};
            }
        }
    }

    getBuilding(id: string, userId: string): Object {

        for (let rhp of this.pds.getPropertyList(userId)) {
            for (let building of rhp.getBuildings()) {
                if (building.getId() == id) {
                    return building.flatten();
                }
            }
        }
        throw new Error("No building for id " + id);
    }

    getPropertyHistory(
        ids: string[],
        bldgId: string,
        timeframe: DAY_WEEK_MONTH,
        callback: Function,
        userID: string): void {

        if (bldgId && bldgId.length > 0) {
            let building: Building|undefined = this.pds.getBuilding(bldgId, userID);
            if (building) {
                ids = building.getProperties().map(property => { return property.getId() });
            } else {
                console.error("No building found for ID " + bldgId);
                return;
            }
        }

        console.log("Fetching history for ids ", ids, " for ", timeframe);
        this.pds.getPropertyHistory(ids, timeframe, callback, userID);
        //this.pds.getHistoricalSensorReadings(ids, timeframe, callback, userID);
    }

    getPropertyRawData(ids: string[], startTime: number, endTime: number, callback: Function, userID: string) {
        console.log("Fetching raw sensor data for ids ", ids, "from", startTime, "to", endTime);
        this.pds.getPropertyRawData(ids, startTime, endTime, callback, userID);
    };

    getAlarms(userID: string): Alarm[] {
        console.log("Fetching alarms");
        return this.pds.getAlarms(userID);
    }

    getPropertyForecast(
        ids: string[],
        bldgId: string,
        timeframe: DAY_WEEK_MONTH,
        callback: Function,
        userID: string): void {

        if (bldgId && bldgId.length > 0) {
            let building: Building | undefined = this.pds.getBuilding(bldgId, userID);
            if (building) {
                ids = building.getProperties().map(property => { return property.getId() });
            } else {
                console.error("No building found for ID " + bldgId);
                return;
            }
        }

        console.log("Fetching property forecast for ids ", ids, " for ", timeframe);
        this.pds.getPropertyForecast(ids, timeframe, callback, userID);
    }

    //setAlarmStatus(alarmID: string, userMsg: string, userID: string): void {
    //    console.log("Setting alarm status for " + alarmID + " to " + userMsg);
    //    this.pds.setAlarmStatus(alarmID, userMsg, userID);
    //}

    refreshPropertytData(): void {
        this.pds.refreshData();
    }

};