import { Component, ElementRef, Input, ViewChild, OnInit, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import { PropertyService } from '../../_services/property.service';
import { PropertyData } from '../../model/property-data';
import { Building } from '../../model/building';
import * as _ from 'lodash';

@Component({
  selector: 'app-property-map',
  templateUrl: './property-map.component.html',
  styleUrls: ['./property-map.component.css']
})
export class PropertyMapComponent implements OnInit {

  @Input() buildings: Building[];
  @Input() singleProps: PropertyData[];
  @Input() ragFilter: string;

  circles: {}[] = [];

  // TOOD config these - initial map data
  lat: number = 51.461313;
  lng: number = -0.296408;
  zoom: number = 14;
  maxClusterZoom: number = 18;

  radius: number = 500.0;
  fillOpacity: number = 1.0;

  redColor: string = '#eb6357';
  amberColor: string = '#ffff00';
  greenColor = '#37b358';

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges) {
    this.circles = [];

    // handle building
    for (const building of this.buildings) {

      // TODO refactor the model to handle this : Building -> sensors
      const lat: number = building.properties[0].lat;
      const lng: number = building.properties[0].lng;
      const rag: string = this.calculateRag(building.properties);
      // exclude ones that dont match the filter
      if (this.ragFilter && rag !== this.ragFilter) {
        continue;
      }

      const color: string = this.getColorFromRag(rag);

      const allMessages: string[][] = [];
      for (const prop of building.properties) {
        const id: string = prop.id;
        const name: string = _.startCase(prop.name);
        let messages = '';
        if (prop.messages) {
          messages = _.values(_.mapValues(prop.messages, 'message')).map(_.startCase).join(', ');
          // _.values(prop.messages).filter((status) => status['message'] != null && status['message'].length > 0).map(_.g)
        }
        allMessages.push([id, name, messages]);
      }

      const circle: {} = {
        id: building.id,
        name: _.startCase(building.name),
        lat: lat,
        lng: lng,
        icon: {
          path: 0,
          scale: 10,
          strokeColor: color
        },
        propMessages: allMessages
      };

      this.circles.push(circle);
    }

    // handle single props
    for (const property of this.singleProps) {

      // TODO refactor the model to handle this : Building -> sensors
      const lat: number = property.lat;
      const lng: number = property.lng;
      // exclude ones that dont match the filter
      if (this.ragFilter && property.status !== this.ragFilter) {
        continue;
      }
      const color: string = this.getColorFromRag(property.status);

      let messages: string[] = [];
      if (property.messages) {
        messages = _.values(_.mapValues(property.messages, 'message')).map(_.startCase);
      }

      const circle: {} = {
        id: property.id,
        name: _.startCase(property.name),
        lat: lat,
        lng: lng,
        icon: {
          path: 0,
          scale: 8,
          strokeColor: color
        },
        singlePropMessages: messages
      };

      this.circles.push(circle);
    }


  }

  private getColorFromRag(rag: string): string {
    switch (rag) {
      case 'R':
        return this.redColor;
      case 'A':
        return this.amberColor;
      case 'G':
      default :
        return this.greenColor;
    }
  }

  private calculateRag(properties: PropertyData[]): string {

    let rag = 'G';

    for (const prop of properties) {
      switch (prop.status) {
        case 'R':
          return 'R';
        case 'A':
          if (rag === 'G') {
            rag = 'A';
          }
          break;
      }
    }
    return rag;
  }

}
