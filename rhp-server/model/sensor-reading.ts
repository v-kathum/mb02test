import { AlarmStatus, RAG } from "./alarm-status";

export class TelemetryType {
    public name: string;
    public databaseField: string;

    constructor(name: string, databaseField: string) {
        this.name = name;
        this.databaseField = databaseField;
    }
}

export const TEMP: TelemetryType = new TelemetryType("temp", "temp");
export const HUMID: TelemetryType = new TelemetryType("humid", "hum");
export const LIGHT: TelemetryType = new TelemetryType("light", "light");
export const MOTION: TelemetryType = new TelemetryType("motion", "motion");
export const AUDIO: TelemetryType = new TelemetryType("audio", "audio");
export const MIN_TEMP: TelemetryType = new TelemetryType("minTemp", "minTemp");
export const MAX_TEMP: TelemetryType = new TelemetryType("maxTemp", "maxTemp");
export const MIN_AUDIO: TelemetryType = new TelemetryType("minAudio", "minAudio");
export const MAX_AUDIO: TelemetryType = new TelemetryType("maxAudio", "maxAudio");

//TODO refactor this should not have SensorType, also decouple value from alarm status
export class SensorReading {
    public sensorType: TelemetryType;
	public currentReading: number;
    public currentStatus: AlarmStatus;

    constructor(sensorType: TelemetryType, reading: number) {
        this.sensorType = sensorType;
        this.currentReading = reading;
        this.currentStatus = new AlarmStatus(RAG.G, []);
    }
}

export class SensorType {
    public telemetry: TelemetryType[];

    constructor(telemetry: TelemetryType[]) {
        this.telemetry = telemetry;
    }


}

export const RHP_ONE: SensorType = new SensorType([MIN_TEMP, TEMP, MAX_TEMP, MIN_AUDIO, AUDIO, MAX_AUDIO, HUMID]);
export const RHP_TWO: SensorType = new SensorType([TEMP, HUMID, LIGHT, MOTION]);

export function getSensorType(sensorTypeStr: string): SensorType {
    if (sensorTypeStr == 'S1') {
        return RHP_ONE;
    } else if (sensorTypeStr == 'S2') {
        return RHP_TWO;
    } else {
        throw new Error("No such sensor type for " + sensorTypeStr);
    }

}