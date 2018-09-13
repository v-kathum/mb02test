import { Colors } from '../app-colors';

// TODO rename this Telemetry or something similar
export interface TelemetryType {
  formatValue(value: number): string;
  title(): string;
  mdiIcon(): string;
  amberLines(): number[] | undefined;
  redLines(): number[] | undefined;
  suggestedMin(): number;
  suggestedMax(): number;
  color(): string;
  getAxisLabel(): string
}

export function getSensorType(type: string): TelemetryType {

  switch (type) {
    case 'T':
      return new Temp();
    case 'TF':
      return new TempForecast();
    case 'H':
      return new Humid();
    case 'HF':
      return new HumidForecast();
    case 'L':
      return new Light();
    case 'M':
      return new Motion();
    case 'A':
      return new Audio();
    default:
      throw new Error("unknown type: " + type);
  }
}

export class Temp implements TelemetryType {

  formatValue(value: number): string {
    return Math.round(value * 10) / 10 + ("&#176;");
  }
  title(): string {
    return "Temperature";
  }
  mdiIcon(): string {
    return "mdi-thermometer-lines";
  }
  amberLines(): number[] {
    return [20,24];
  }
  redLines(): number[] {
    return [16,28];
  }
  suggestedMin(): number {
    return 15;
  }
  suggestedMax(): number {
    return 25;
  }
  color(): string {
    return Colors.DANGER;
  }
  getAxisLabel(): string {
    return "degrees C";
  }
}

export class TempForecast implements TelemetryType {

  formatValue(value: number): string {
    return Math.round(value * 10) / 10 + ("&#176;");
  }
  title(): string {
    return "Temperature Forecast";
  }
  mdiIcon(): string {
    return "mdi-thermometer-lines";
  }
  amberLines(): number[] {
    return [];
  }
  redLines(): number[] {
    return [];
  }
  suggestedMin(): number {
    return 18;
  }
  suggestedMax(): number {
    return 20;
  }
  color(): string {
    return Colors.DANGER;
  }
  getAxisLabel(): string {
    return "degrees C";
  }
}

export class Humid implements TelemetryType {
  formatValue(value: number): string {
    return Math.round(value * 10) / 10 + ("%");
  }
  title(): string {
    return "Humidity";
  }
  mdiIcon(): string {
    return "mdi-weather-rainy";
  }
  amberLines(): number[] {
    return [40,70];
  }
  redLines(): number[] {
    return [30,80];
  }
  suggestedMin(): number {
    return 25;
  }
  suggestedMax(): number {
    return 85;
  }
  color(): string {
    return Colors.PRIMARY;
  }
  getAxisLabel(): string {
    return "Humidity %";
  }
}
export class HumidForecast implements TelemetryType {
  formatValue(value: number): string {
    return Math.round(value * 10) / 10 + ("%");
  }
  title(): string {
    return "Humidity Forecast";
  }
  mdiIcon(): string {
    return 'mdi-weather-rainy';
  }
  amberLines(): number[] {
    return [];
  }
  redLines(): number[] {
    return [];
  }
  suggestedMin(): number {
    return 35;
  }
  suggestedMax(): number {
    return 45;
  }
  color(): string {
    return Colors.PRIMARY;
  }
  getAxisLabel(): string {
    return 'Humidity %';
  }
}


export class Light implements TelemetryType {
  formatValue(value: number): string {
    return String(Math.round(value * 10) / 10);
  }
  title(): string {
    return 'Light';
  }
  mdiIcon(): string {
    return 'mdi-lightbulb-on-outline';
  }
  amberLines(): number[] {
    return [50];
  }
  redLines(): number[] {
    return [40];
  }
  suggestedMin(): number {
    return 0;
  }
  suggestedMax(): number {
    return 75;
  }
  color(): string {
    return Colors.AMBER;
  }
  getAxisLabel(): string {
    return 'Lux';
  }
}

export class Motion implements TelemetryType {
  formatValue(value: number): string {
    return String(Math.round(value * 10) / 10);
  }
  title(): string {
    return 'Motion Count';
  }
  mdiIcon(): string {
    return 'mdi-run';
  }
  amberLines(): number[] {
    return null;
  }
  redLines(): number[] {
    return null;
  }
  suggestedMin(): number {
    return 0;
  }
  suggestedMax(): number {
    return 100;
  }
  color(): string {
    return Colors.GREY;
  }
  getAxisLabel(): string {
    return 'Count';
  }
}

export class Audio implements TelemetryType {
  formatValue(value: number): string {
    return String(Math.round(value * 10) / 10);
  }
  title(): string {
    return 'Audio';
  }
  mdiIcon(): string {
    return 'mdi-hearing';
  }
  amberLines(): number[] {
    return null;
  }
  redLines(): number[] {
    return null;
  }
  suggestedMin(): number {
    return 0;
  }
  suggestedMax(): number {
    return 100;
  }
  color(): string {
    return Colors.GREY;
  }
  getAxisLabel(): string {
    return 'Audio';
  }
}
