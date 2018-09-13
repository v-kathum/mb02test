/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RhpOneTelemetryTickersComponent } from './rhp-one-telemetry-tickers.component';

describe('RhpOneTelemetryTickersComponent', () => {
  let component: RhpOneTelemetryTickersComponent;
  let fixture: ComponentFixture<RhpOneTelemetryTickersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhpOneTelemetryTickersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhpOneTelemetryTickersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
