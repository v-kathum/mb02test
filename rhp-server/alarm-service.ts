import { SensorReading } from "./model/sensor-reading";

/**
* Responsible for alarm state checking alarm status.
* In the future, will have editable alarms etc.
*/
export interface AlarmService {

    updateAlarmStatus(sensors: SensorReading[]): void;
}