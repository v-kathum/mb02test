import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { PropertyService } from '../_services/property.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';
import * as _ from 'lodash';
import { PropertyData, SensorTelemetry, SensorForecast } from '../model/property-data';
import { Alert } from '../model/alert';


@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  @ViewChild(NgbTabset) tabs;

  property: PropertyData;
  dayWeekMonth = 'D';
  forecastDayWeekMonth = 'W';
  history: SensorTelemetry[];
  forecast: SensorForecast;
  alerts: Alert[];
  buildingsList: any;

  // tslint:disable-next-line:max-line-length
  constructor(private location: Location, private authService: AuthService, private propertyService: PropertyService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProperty();
    this.getHistoricalData();
    this.getForecastData();
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  graphSelectorChanged() {
    this.getHistoricalData();
  }

  forecastSelectorChanged() {
    this.getForecastData();
  }

  getProperty(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.propertyService.findProperty(paramMap.get('id')).subscribe(property => {
        this.property = property;
        this.alerts = _.values(this.property.messages);
        return _.startCase(property.name);
      });
    });
  }

  getHistoricalData(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.propertyService
        .getPropertyHistory([paramMap.get('id')], '', this.dayWeekMonth)
        .subscribe(history => {
        this.history = history;
      });
    });
  }

  getForecastData(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.propertyService
        .getPropertyForecast([paramMap.get('id')], '', this.forecastDayWeekMonth)
        .subscribe(forecast => {
        this.forecast = forecast;
      });
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
