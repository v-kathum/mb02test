import { Component, OnInit, Input } from '@angular/core';
import { RhpOneTelemetry } from '../../model/property-data';

@Component({
  selector: 'app-rhp-one-telemetry-tickers',
  templateUrl: './rhp-one-telemetry-tickers.component.html'
})
export class RhpOneTelemetryTickersComponent implements OnInit {

  @Input() telemetry: RhpOneTelemetry;
  @Input() messages: any;

  constructor() { }

  ngOnInit() {
  }

}
