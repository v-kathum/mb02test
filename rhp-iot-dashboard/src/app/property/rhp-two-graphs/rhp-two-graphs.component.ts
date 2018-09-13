import { Component, OnInit, Input } from '@angular/core';
import { RhpTwoTelemetry } from '../../model/property-data';

@Component({
  selector: 'app-rhp-two-graphs',
  templateUrl: './rhp-two-graphs.component.html'
})

export class RhpTwoGraphsComponent implements OnInit {

  @Input() telemetry: RhpTwoTelemetry[];
  labels: string[];
  tempData: number[];
  lightData: number[];
  humidData: number[];
  motionData: number[];

  constructor() {}

  ngOnInit() {
    this.setGraphData();
  }

  ngOnChanges() {
    this.setGraphData();
  }

  setGraphData(): void {
    this.labels = [], this.tempData = [], this.lightData = [], this.humidData = [], this.motionData = [];

    if (this.telemetry) {
      for (let t in this.telemetry) {
        this.labels[t] = this.telemetry[t].timeLabel;
        this.tempData[t] = this.telemetry[t].temp;
        this.lightData[t] = this.telemetry[t].light;
        this.humidData[t] = this.telemetry[t].humid;
        this.motionData[t] = this.telemetry[t].motion;
      }
    }

  }

}
