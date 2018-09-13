import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Building } from '../../model/building';
import { PropertyData, SensorTelemetry, SensorForecast } from '../../model/property-data';
import * as _ from 'lodash';
import { NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-search-side-menu',
  templateUrl: './search-side-menu.component.html',
  styleUrls: ['./search-side-menu.component.css']
})
export class SearchSideMenuComponent implements OnInit {

  @ViewChild(NgbTabset) tabs;

  building: Building;

  buildingsList: Building[];
  sensorType: string;
  @Input() showBuildingName: boolean;

  @Input()
  set buildings(buildings: Building[]) {

    this.buildingsList = _.map(buildings, (building) => {
      const properties = _.map(building.properties, (property) => {

        return {
          ...property,
          name: _.startCase(property.name)
        };
      });
      // properties is array of {property: property, name: property.name}
      properties.sort(this.naturalCompare);

      // in the mode where we are showing only 1 building,
      // restrict columns shown by sensor type
      if (!this.showBuildingName) {
        this.sensorType = properties[0].sensorType;
      }
      return {
        ...building,
        properties
      };
    });
  }

  /**
   * Nicked from https://stackoverflow.com/questions/15478954/sort-array-elements-string-with-numbers-natural-sort#15479354
   */
  naturalCompare(a, b) {
    let ax = [], bx = [];

    a.name.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { ax.push([$1 || Infinity, $2 || ""]); });
    b.name.replace(/(\d+)|(\D+)/g, function (_, $1, $2) { bx.push([$1 || Infinity, $2 || ""]); });

    while (ax.length && bx.length) {
      let an = ax.shift();
      let bn = bx.shift();
      let nn = (an[0] - bn[0]) || an[1].localeCompare(bn[1]);
      if (nn) return nn;
    }

    return ax.length - bx.length;
}

  constructor() { }

  ngOnInit() {
  }

}
