import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Rhp } from '../model/rhp';
import { PropertyData, PropertyRawData, SensorTelemetry, SensorForecast } from '../model/property-data';
import { Building } from '../model/building';
import { RHP, BUILDINGS, PROPERTY_DATA, DAY_FORECAST, PROPERTY_RAW_DATA, DAY_HISTORY_S1, WEEK_HISTORY_S1, MONTH_HISTORY_S1, DAY_HISTORY_S2, WEEK_HISTORY_S2, MONTH_HISTORY_S2, ALARMS, MANY_ALARMS } from './mock-properties';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Alarm } from '../model/alarm';
import { environment } from '../../environments/environment';

@Injectable()
export class PropertyService {

  // if id specified returns a single, otherwise returns an array
  private propertiesRawUrl = '/property-raw-data';
  private propertiesUrl = '/property-data';
  private buildingUrl = '/building-data';
  private propertyHierarchyUrl = '/property-list';
  private propertyHistoryUrl = '/property-history';
  private propertyForecastUrl = '/property-forecast';
  private alarmsUrl = '/alarm-data';
  private mock = false;

  constructor(private http: HttpClient) {
    // TODO figure out how to make a MockPropertyService instead
    this.mock = environment.mock;
  }

  // TODO error handling on this

  getPropertyRawData(startTime, endTime, ids): Observable<PropertyRawData[]> {
    if (this.mock) {
      return of(PROPERTY_RAW_DATA);
    } else {
      return this.http.get<PropertyRawData[]>(this.propertiesRawUrl, {
        params: {
          startTime,
          endTime,
          ids
        }
      }).pipe(
      tap(properties => {  }),
      catchError(this.handleError('getPropertyRawData', [])));
    }
  }

  getProperties(): Observable<PropertyData[]> {
    if (this.mock) {
      return of(PROPERTY_DATA);
    } else {
      return this.http.get<PropertyData[]>(this.propertiesUrl).pipe(
      tap(properties => {  }),
      catchError(this.handleError('getPropertyData', [])));
    }
  }

  getRhp(): Observable<Rhp[]> {
    if (this.mock) {
      return of(RHP);
    } else {
      return this.http.get<Rhp[]>(this.propertyHierarchyUrl);
    }
  }

  getPropertiesById(ids: string[]): Observable<PropertyData[]> {
    if (this.mock) {
      return of(PROPERTY_DATA.filter((prop) => (ids.indexOf(prop.id) !== -1)));
    } else {
      return this.http.get<PropertyData[]>(this.propertiesUrl, { params: { ids: ids } });
    }
  }

  // TODO this should only return 1
  findProperty(id: string): Observable<PropertyData> {
    if (this.mock) {
      return of(PROPERTY_DATA.find((prop) => (prop.id === id)));
    } else {
      return this.http.get<PropertyData>(this.propertiesUrl, { params: { id: id } });
    }
  }

  findBuilding(id: string): Observable<Building> {
    if (this.mock) {
      return of(BUILDINGS.find((building) => (building.id.toString() === id)));
    } else {
      return this.http.get<Building>(this.buildingUrl, { params: { id: id } });
    }
  }

  getPropertyHistory(ids: string[], buildingId: string, timeframe: string): Observable<SensorTelemetry[]> {
    if (this.mock) {
      if (buildingId) {
        ids = BUILDINGS.find((building) => (building.id.toString() === buildingId)).properties
          .map(prop => prop.id);
      }

      const sensorType: string = PROPERTY_DATA.find((prop) => (prop.id === ids[0])).sensorType;
      const s1: boolean = sensorType === 'S1';
      switch (timeframe) {
        case 'W':
          return of(s1 ? WEEK_HISTORY_S1 : WEEK_HISTORY_S2);
        case 'M':
          return of(s1 ? MONTH_HISTORY_S1 : MONTH_HISTORY_S2);
        case 'D':
        default:
          return of(s1 ? DAY_HISTORY_S1 : DAY_HISTORY_S2);
      }
    } else {
      return this.http.get<SensorTelemetry[]>(
        this.propertyHistoryUrl,
        { params: { ids: ids ? ids.join(',') : '', buildingId: buildingId, timeframe: timeframe } });
    }
  }

  getPropertyForecast(ids: string[], buildingId: string, timeframe: string): Observable<SensorForecast> {
    if (this.mock) {
      if (buildingId) {
        ids = BUILDINGS.find((building) => (building.id.toString() === buildingId)).properties
          .map(prop => prop.id);
      }

      const sensorType: string = PROPERTY_DATA.find((prop) => (prop.id === ids[0])).sensorType;
      const s1: boolean = sensorType === 'S1';
      switch (timeframe) {
        case 'W':
        case 'M':
        case 'D':
        default:
          return of(DAY_FORECAST);
      }
    } else {
      return this.http.get<SensorForecast>(
        this.propertyForecastUrl,
        { params: { ids: ids ? ids.join(',') : '', buildingId: buildingId, timeframe: timeframe } });
    }
  }

  getAlarms(): Observable<Alarm[]> {
    if (this.mock) {
      return of(ALARMS);
    } else {
      return this.http.get<Alarm[]>(this.alarmsUrl);
    }
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // TODO: better job of transforming error for user consumption
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
