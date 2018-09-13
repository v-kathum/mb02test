import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import 'materialize-css';
import {MaterializeAction} from 'angular2-materialize';
import { Building } from '../../model/building';
import * as _ from 'lodash';

@Component({
  selector: 'app-incident-management',
  templateUrl: './incident-management.component.html',
  styleUrls: ['./incident-management.component.css']
})
export class IncidentManagementComponent implements OnInit {

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

  public cellClass(status: string): string {

    if (status == 'R') {
      return 'danger-cell';
    } else if (status == 'A') {
      return 'warning-cell';
    } else {
      // status == 'G' or no status
      return 'fine-cell';
    }

  }

  public cellTtip(message: string) {
    if (message) {
      return message;
    } else {
      return '';
    }
  }

  // tslint:disable-next-line:member-ordering
  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action: 'modal', params: ['open']});
  }
  closeModal() {
    this.modalActions.emit({action: 'modal', params: ['close']});
  }

  constructor() { }

  ngOnInit() {
  }

}
