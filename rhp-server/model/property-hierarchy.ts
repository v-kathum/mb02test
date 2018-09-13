import { RAG, AlarmStatus } from './alarm-status'
import { SensorReading, TelemetryType, SensorType, getSensorType } from './sensor-reading';
import * as moment from 'moment';

export class Rhp {

    private id: string;
    private name: string;
    private buildings: Building[];
    private singleProperties: Property[];

    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.buildings = [];
        this.singleProperties = [];
    }

    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getBuildings(): Building[] { return this.buildings; }
    public addBuilding(bldg: Building) { this.buildings.push(bldg); }
    public getProperties(): Property[] { return this.singleProperties; }
    public addProperty(prop: Property) { this.singleProperties.push(prop); }

    public flatten(): Object {

        // has to be a better way of doing this...
        let flattenedBuildings: Object[] = [];
        for (let bldg of this.buildings) {
            flattenedBuildings.push(bldg.flatten());
        }

        let flattenedProps: Object[] = [];
        for (let prop of this.singleProperties) {
            flattenedProps.push(prop.flatten());
        }

        return {
            id: this.id,
            name: this.name,
            buildings: flattenedBuildings,
            singleProperties: flattenedProps
        };
    }

}

export class Building {

    private id: string;
    private name: string;
    private properties: Property[];
    private rhpID: string;
    private rhpName: string;

    constructor(id: string, name: string, rhpID: string, rhpName: string) {
        this.id = id;
        this.name = name;
        this.properties = [];
        this.rhpID = rhpID;
        this.rhpName = rhpName;
    }

    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getProperties(): Property[] { return this.properties; }
    public addProperty(prop: Property) { this.properties.push(prop); }

    public flatten(): Object {

        // has to be a better way of doing this...
        let flattenedProps: Object[] = [];
        for (let prop of this.properties) {
            flattenedProps.push(prop.flatten());
        }
        return {
            id: this.id,
            name: this.name,
            haID: this.rhpID,
            haName: this.rhpName,
            properties: flattenedProps,
        };
    }
}

export class Property {

    private id: string;
    private name: string;
    private sensorType: string; // S1 or S2
    private lat: number;
    private lng: number;
    //TODO factor this out
    private rhpID: string;
    private rhpName: string;
    private buildingID: string|undefined;
    private buildingName: string | undefined;

    private status: AlarmStatus;
    private telemetry: Map<TelemetryType, SensorReading>;
    private lastUpdateTime: Date;

    constructor(
        id: string, name: string, sensorType: string, lat: number, lng: number, lastUpdateTime: Date,
        rhpID: string, rhpName: string, buildingID: string | undefined, buildingName: string | undefined) {

        this.id = id;
        this.status = new AlarmStatus(RAG.G, []);
        this.telemetry = new Map();
        this.sensorType = sensorType;
        this.name = name;
        this.lat = lat;
        this.lng = lng;
        this.lastUpdateTime = lastUpdateTime;
        this.rhpID = rhpID;
        this.rhpName = rhpName;
        this.buildingID = buildingID;
        this.buildingName = buildingName;
    }

    public getId(): string { return this.id; }
    public getName(): string { return this.name; }
    public getSensorType(): string { return this.sensorType; }
    public getLat(): number { return this.lat; }
    public getLng(): number { return this.lng; }

    public getRhpID(): string { return this.rhpID };

    public getLastUpdateTime(): Date { return this.lastUpdateTime; }
    public getStatus(): AlarmStatus { return this.status; }

    public getSensorReading(sensorType: TelemetryType): SensorReading|undefined {
        let sensorReading: SensorReading | undefined = this.telemetry.get(sensorType);
        if (sensorReading) {
            return sensorReading;
        } else {
            return undefined;
            //throw new Error("No reading defined for " + sensorType.toString());
        }
    }

    public setSensorReadings(lastReadingTime: moment.Moment|undefined, sensorReadings: SensorReading[]) {
        // overwrite existing sensor reading
        for (let sensorReading of sensorReadings) {
            this.telemetry.set(sensorReading.sensorType, sensorReading);
        }
        // calculate status based on all status
        this.status = calculateOverallStatus(this.telemetry.values());
        this.lastUpdateTime = lastReadingTime? lastReadingTime.toDate() : new Date(0); // TODO better null handling
    }

    public flatten(): Object {

        // get sensor type
        let sensor: SensorType = getSensorType(this.sensorType);
        let readings: any = {};
        let messages: any = {};

        for (let telemType of sensor.telemetry) {
            let reading: number = 0; // add defaults to TelemetryType?
            let readingObj: any = this.getSensorReading(telemType);
            if (readingObj) {
                reading = readingObj.currentReading;
                let status = readingObj.currentStatus.rag;
                if (status == RAG.A || status == RAG.R) {
                    messages[telemType.name] = { rag: status, message: readingObj.currentStatus.messages.join(',') };
                }
            }
            readings[telemType.name] = reading;

        }

        return {
            id: this.id,
            name: this.name,
            sensorType: this.sensorType,
            lat: this.lat,
            lng: this.lng,
            status: this.status.rag,
            messages: messages,
            sensorTelemetry: readings,
            lastUpdateTime: this.lastUpdateTime.getTime(),
            haID: this.rhpID,
            haName: this.rhpName,
            buildingID: this.buildingID,
            buildingName: this.buildingName
        };
    }

}

/**
 * Helper function to calculate overall status
 */
function calculateOverallStatus(sensors: IterableIterator<SensorReading>): AlarmStatus {

    let messages: string[] = [];
    let ragArray: string[] = [];

    // build rag array && messages
    for (let sensor of sensors) {
        for (let message of sensor.currentStatus.messages) {
            messages.push(message);
        }
        ragArray.push(sensor.currentStatus.rag);
    }

    // find overall status
    let overallStatus: RAG = RAG.G;

    if (ragArray.indexOf('R') != -1) {
        overallStatus = RAG.R;
    } else if (ragArray.indexOf('A') != -1) {
        overallStatus = RAG.A;
    }

    return new AlarmStatus(overallStatus, messages);
}