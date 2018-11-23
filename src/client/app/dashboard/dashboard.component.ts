
import { Component, ElementRef, Input, ViewChild, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { PropertyService } from '../_services/property.service';
import { Alert } from '../model/alert';
import { PropertyData } from '../model/property-data';
import { Rhp } from '../model/rhp';
import { Building } from '../model/building';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {


  rhp: Rhp[] = [];
  buildings: Building[] = [];
  singleProperties: PropertyData[] = [];
  buildingsWithFake: Building[] = [];

  currentFilter: string = null;

  selectedRhp: Rhp;
  selectedRhpName: string = "Select Location";
  selectedBuildingCount: number = 0;
  rag: number[] = [0,0,0];

  constructor(private propertyService: PropertyService, private authService: AuthService) { }

  ngOnInit(): void {
    this.propertyService.getRhp().subscribe(rhp => {
      this.rhp = rhp;
    // special handling for case when only one housing assoc
    if (this.rhp.length == 1) {
      this.selectedRhp = this.rhp[0];
      this.selectedRhpName = this.rhp[0].name;
    } else {
      this.selectedRhp =  null;
    }
    this.setProperties(this.selectedRhp);
  });
}
  setProperties(selectedRhp: Rhp): void {
    this.buildings = [];
    this.singleProperties = [];

    if (selectedRhp) {
      this.buildings = selectedRhp.buildings;
      this.singleProperties = selectedRhp.singleProperties;
    } else {
      for (const rhps of this.rhp) {
        this.buildings.push.apply(this.buildings, rhps.buildings);
        this.singleProperties.push.apply(this.singleProperties, rhps.singleProperties);
      }
    }

    this.buildingsWithFake = this.buildings.slice(); //make a copy
    if (this.singleProperties.length > 0) {
      // tslint:disable-next-line:max-line-length
      this.buildingsWithFake.push({ id: '-1', name: 'Other properties', properties: this.singleProperties, rhpID: undefined, rhpName: undefined });
    }

    this.selectedBuildingCount = this.buildings.length;

    // calculate RAG
    this.rag = [0, 0, 0];
    for (const building of this.buildingsWithFake) {
      for (const prop of building.properties) {
        const status: string = prop.status;

        switch (status) {
          case 'R':
            this.rag[0]++;
            break;
          case 'A':
            this.rag[1]++;
            break;
          case 'G':
            this.rag[2]++;
            break;
        }
      }
    }
  }

  filterSelected(rag: string): string {
    if (rag === this.currentFilter) {
      return 'message rag-number filter-button-selected';
    } else {
      return 'message rag-number';
    }
  }

  filterClicked(rag: string): void {
    if (rag === this.currentFilter) {
      this.currentFilter = null;
    } else {
      this.currentFilter = rag;
    }
  }

  onSelect(rhps: Rhp): void {
    this.selectedRhp = rhps;
    this.setProperties(this.selectedRhp);
    if (rhps) {
      this.selectedRhpName = rhps.name;
    } else {
      this.selectedRhpName = 'ALL';
    }
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
}
