import { Component, OnInit, Input } from '@angular/core';
import { RhpOneTelemetry } from '../../model/property-data';

@Component({
  selector: 'app-rhp-one-graphs',
  templateUrl: './rhp-one-graphs.component.html',
  styleUrls: ['./rhp-one-graphs.component.css']
})
export class RhpOneGraphsComponent implements OnInit {

  @Input() telemetry: RhpOneTelemetry[];
  labels: string[];
  minTempData: number[];
  tempData: number[];
  maxTempData: number[];
  minAudioData: number[];
  audioData: number[];
  maxAudioData: number[];
  humidData: number[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChange() {
    this.setGraphData();
  }

  setGraphData() {
    this.labels = [], this.minTempData = [], this.tempData = [], this.maxTempData = [];
    this.minAudioData = [], this.audioData = [], this.maxAudioData = [], this.humidData = [];

    if (this.telemetry) {
      // tslint:disable-next-line:forin
      for (let t in this.telemetry) {
        this.labels[t] = this.telemetry[t].timeLabel;
        this.minTempData[t] = this.telemetry[t].minTemp;
        this.tempData[t] = this.telemetry[t].temp;
        this.maxTempData[t] = this.telemetry[t].maxTemp;
        this.minAudioData[t] = this.telemetry[t].minAudio;
        this.audioData[t] = this.telemetry[t].audio;
        this.maxAudioData[t] = this.telemetry[t].maxAudio;
        this.humidData[t] = this.telemetry[t].humid;
      }
    }
  }
}
