import { Component, OnInit, Input } from '@angular/core';
import { SensorForecast } from '../../model/property-data';

@Component({
  selector: 'app-forecast-graphs',
  templateUrl: './forecast-graphs.component.html'
})

export class ForecastGraphsComponent implements OnInit {

  @Input()
  forecast: SensorForecast;
  tempLabels: string[];
  tempData: number[];
  tempUpperData: number[];
  tempLowerData: number[];
  humidLabels: string[];
  humidData: number[];
  humidUpperData: number[];
  humidLowerData: number[];

  constructor() { }

  ngOnInit() {
    this.setGraphData();
  }

  ngOnChange() {
    this.setGraphData();
  }

  setGraphData(): void {
    this.tempLabels = [], this.tempData = [], this.tempUpperData = [], this.tempLowerData = [];
    this.humidLabels = [], this.humidData = [], this.humidUpperData = [], this.humidLowerData = [];

    if (this.forecast) {
      for (const t of this.forecast.temp) {
        this.tempLabels.push(t.timestamp);
        this.tempData.push(t.val);
        this.tempUpperData.push(t.upper);
        this.tempLowerData.push(t.lower);
      }
      for (const t of this.forecast.humid) {
        this.humidLabels.push(t.timestamp);
        this.humidData.push(t.val);
        this.humidUpperData.push(t.upper);
        this.humidLowerData.push(t.lower);
      }
    }
  }

}
