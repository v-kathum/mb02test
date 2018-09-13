/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RhpTwoTelemetryTickersComponent } from './rhp-two-telemetry-tickers.component';

describe('RhpTwoTelemetryTickersComponent', () => {
  let component: RhpTwoTelemetryTickersComponent;
  let fixture: ComponentFixture<RhpTwoTelemetryTickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhpTwoTelemetryTickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhpTwoTelemetryTickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
