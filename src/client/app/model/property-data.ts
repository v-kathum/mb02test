export class PropertyData {
  id: string;
  name: string;
  sensorType: string; // 'S1' = Safehouse1 sensors with alerts, 'S2' = Safehouse2 sensor without alerts
  lat: number;
  lng: number;
  status: string; // RAG
  messages: {}; // e.g. {'temp': {rag:'A', message:'Too hot'}, humid etc.}
  lastUpdateTime: number; // TODO factor Date into telemtry and do formatting on client-side
  rhpID: string;
  rhpName: string;
  buildingID: string;
  buildingName: string;
  sensorTelemetry: SensorTelemetry;
}

export class PropertyRawData {
  deviceid: string;
  timestamp: string;
  temp: number;
  humid: number;
  light: number;
  motion: number;
}

export interface SensorTelemetry {
  timeLabel: string;
}

export class RhpOneTelemetry implements SensorTelemetry {
  timeLabel: string;
  minTemp: number;
  temp: number;
  maxTemp: number;
  minAudio: number;
  audio: number;
  maxAudio: number;
  humid: number;
}

export class RhpTwoTelemetry implements SensorTelemetry {
  timeLabel: string;
  temp: number;
  humid: number;
  light: number;
  motion: number;
}

export class SensorForecast {
  deviceid: string;
  temp: any[]; // {timestamp: string, val: number, forecast_lower: number, forecast_upper: number}
  humid: any[]; // {timestamp: string, val: number, forecast_lower: number, forecast_upper: number}
}
