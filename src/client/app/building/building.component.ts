import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Building } from '../model/building';
import { SensorTelemetry, SensorForecast, RhpOneTelemetry, RhpTwoTelemetry } from '../model/property-data';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../_services/property.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {

  @ViewChild(NgbTabset) tabs;

  building: Building;

  // telemetry
  sensorType: string;
  sensorTelemetry: SensorTelemetry;

  // graph
  dayWeekMonth: string = "D";
  averageHistory: SensorTelemetry[];

  // forecast graph
  forecastDayWeekMonth: string = "W";
  averageForecast: SensorForecast;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private propertyService: PropertyService) { }

  ngOnInit() {
    this.getBuilding();
  }

  graphSelectorChanged() {
    this.getGraphData();
  }

  forecastSelectorChanged() {
    this.getForecastData();
  }

  getBuilding(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.propertyService.findBuilding(paramMap.get('id')).subscribe(building => {
        this.building = building;

        const properties = building.properties;
        const length = properties.length;

        // TODO this may not be the case always, but need to figure out different summary info if different sensor types in same building
        this.sensorType = properties[0].sensorType;

        // TODO factor this out to the telemetry class themselves, as per server
        if (this.sensorType === 'S1') {
          const rhpOneTelemetry: RhpOneTelemetry = new RhpOneTelemetry();
          rhpOneTelemetry.minTemp = (properties.reduce((p, v: any) => p + v.sensorTelemetry.minTemp, 0) / length);
          rhpOneTelemetry.temp = (properties.reduce((p, v: any) => p + v.sensorTelemetry.temp, 0) / length);
          rhpOneTelemetry.maxTemp = (properties.reduce((p, v: any) => p + v.sensorTelemetry.maxTemp, 0) / length);
          rhpOneTelemetry.minAudio = (properties.reduce((p, v: any) => p + v.sensorTelemetry.minAudio, 0) / length);
          rhpOneTelemetry.audio = (properties.reduce((p, v: any) => p + v.sensorTelemetry.audio, 0) / length);
          rhpOneTelemetry.maxAudio = (properties.reduce((p, v: any) => p + v.sensorTelemetry.maxAudio, 0) / length);
          rhpOneTelemetry.humid = (properties.reduce((p, v: any) => p + v.sensorTelemetry.humid, 0) / length);

          this.sensorTelemetry = rhpOneTelemetry;

        } else if (this.sensorType === 'S2') {
          const rhpTwoTelemetry: RhpTwoTelemetry = new RhpTwoTelemetry();
          rhpTwoTelemetry.temp = (properties.reduce((p, v: any) => p + v.sensorTelemetry.temp, 0) / length);
          rhpTwoTelemetry.humid = (properties.reduce((p, v: any) => p + v.sensorTelemetry.humid, 0) / length);
          rhpTwoTelemetry.light = (properties.reduce((p, v: any) => p + v.sensorTelemetry.light, 0) / length);
          rhpTwoTelemetry.motion = (properties.reduce((p, v: any) => p + v.sensorTelemetry.motion, 0) / length);
          this.sensorTelemetry = rhpTwoTelemetry;
        }

        this.getGraphData();
        this.getForecastData();

      });
    });
  }

  getGraphData(): void {
    //let ids: string[] = [];
    //for (let prop of this.building.properties) { ids.push(prop.id) };

    this.propertyService.getPropertyHistory(null, this.building.id, this.dayWeekMonth).subscribe(history => {
      this.averageHistory = history;
    });

  }

  getForecastData(): void {
    //let ids: string[] = [];
    //for (let prop of this.building.properties) { ids.push(prop.id) };

    this.propertyService.getPropertyForecast(null, this.building.id, this.forecastDayWeekMonth).subscribe(forecast => {
      this.averageForecast = forecast;
    });

  }

  selectedTabTitleClass(tabId: string) {
    if (this.tabs && this.tabs.activeId === tabId) {
      return 'tab-title-selected';
    } else {
      return 'tab-title';
    }
  }

}
