import { Component, OnInit, Input } from '@angular/core';
import { RhpTwoTelemetry } from '../../model/property-data';

@Component({
  selector: 'app-rhp-two-telemetry-tickers',
  templateUrl: './rhp-two-telemetry-tickers.component.html'
})
export class RhpTwoTelemetryTickersComponent implements OnInit {

  @Input() telemetry: RhpTwoTelemetry;
  @Input() messages: any;

  constructor() { }

  ngOnInit() {
  }

}
