import { TelemetryType } from './sensor-reading';

export class SensorDataHistory {

    private id: string;
    private timeLabels: string[];
    private sensorReadings: Map<TelemetryType, number[]>;

    constructor(id: string, timeLabels: string[], sensorReadings: Map<TelemetryType, number[]>) {

        // sanitise that the number of readings and number of labels are the same length
        for (let reading in sensorReadings.values()) {
            if (reading.length != timeLabels.length) {
                throw new Error("Mismatch between number of time labels and number of sensor readings");
            }
        }

        this.id = id;
        this.timeLabels = timeLabels;
        this.sensorReadings = sensorReadings;
    }

    public getId(): string { return this.id; }
    public getTimeLabels(): string[] { return this.timeLabels; }
    public getSensorReadings(): Map<TelemetryType, number[]> { return this.sensorReadings; }

    public flatten(): Object {

        let flattened: any[] = []
        //TODO this is a bit ugly here could be better elsewehre
        for (let labelIdx in this.timeLabels) {
            let nextReading: any = { timeLabel: this.timeLabels[labelIdx] };
            for (let tType of this.sensorReadings.keys()) {
                let values: number[] | undefined = this.sensorReadings.get(tType)
                nextReading[tType.name] = values ? values[labelIdx] : 0;
            }
            flattened.push(nextReading);
        }
        return flattened;
    }
}