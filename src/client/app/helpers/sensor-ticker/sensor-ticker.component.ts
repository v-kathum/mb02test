import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { TelemetryType, getSensorType } from '../../model/telemetry-type';

@Component({
  selector: 'app-sensor-ticker',
  templateUrl: './sensor-ticker.component.html',
  styleUrls: ['./sensor-ticker.component.css']
})
export class SensorTickerComponent implements OnInit {

  @Input() type: string; // T, H, L, M, A
  @Input() value: number;
  @Input() rag: string;
  @Input() message: string = "";
  formattedValue: string = "-";
  private sensorType: TelemetryType;

  constructor() { }

  ngOnInit() {
    this.sensorType = getSensorType(this.type);
    this.setFormattedValue();
  }

  public get name(): string {
    return this.sensorType.title();
  }

  public get sensorClass(): string {
    return "mdi " + this.sensorType.mdiIcon();
  }

  public get sensorColor(): string {
    return this.sensorType.color();
  }

  setFormattedValue() {
    if (this.value && this.sensorType) {
      this.formattedValue = this.sensorType.formatValue(this.value);

    } else {
      this.formattedValue = "-";
    }
  }

  ngOnchanges(changes: SimpleChanges) {
    this.setFormattedValue();
  }

}
