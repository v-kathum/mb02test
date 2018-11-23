import { Building } from '../model/building';
import { Rhp } from '../model/rhp';
import { PropertyData, RhpOneTelemetry, RhpTwoTelemetry, SensorForecast } from '../model/property-data';
import { Alarm } from '../model/alarm';

export const S2_PROPERTY_TEL: RhpTwoTelemetry[] = [
  { timeLabel: "", temp: 19.2, humid: 10, light: 5, motion: 1 },
  { timeLabel: "", temp: 18.2, humid: 15, light: 6, motion: 1 },
  { timeLabel: "", temp: 22.4, humid: 0, light: 80, motion: 0 },
  { timeLabel: "", temp: 24.5, humid: 10, light: 2, motion: 11 },
  { timeLabel: "", temp: 25.1, humid: 30, light: 12, motion: 3 },
  { timeLabel: "", temp: 20.1, humid: 2, light: 1, motion: 0 },
  { timeLabel: "", temp: 19.0, humid: 19, light: 2, motion: 0 },
  { timeLabel: "", temp: 16.7, humid: 12, light: 2, motion: 11 },
  { timeLabel: "", temp: 16.7, humid: 12, light: 2, motion: 7 },
];

export const S1_PROPERTY_TEL: RhpOneTelemetry[] = [
  { timeLabel: "", minTemp: 19.0, temp: 21.0, maxTemp: 23.0, minAudio:2, audio: 21, maxAudio: 24, humid: 10 },
  { timeLabel: "", minTemp: 19.0, temp: 21.0, maxTemp: 23.0, minAudio:2, audio: 21, maxAudio: 24, humid: 10 },
  { timeLabel: "", minTemp: 19.0, temp: 21.0, maxTemp: 23.0, minAudio:0, audio: 0, maxAudio: 0, humid: 10}
];

export const DAY_FORECAST: SensorForecast = {
  deviceid: '0', temp: [], humid: []
};

export const PROPERTY_DATA: PropertyData[] = [
  { id: '0', name: 'zero', sensorType: 'S2', lat: 51.461313, lng: -0.296408, status: 'R', messages: { 'temp': { rag: 'A', message: 'Temp too high' }, 'light': { rag: 'R', message: 'Light too low' } }, sensorTelemetry: S2_PROPERTY_TEL[0], lastUpdateTime: 1517749198000, rhpID: "0", rhpName: 'Office', buildingID: "0", buildingName: '12 Acacia Avenue' },
  { id: "1", name: 'one', sensorType: 'S2', lat: 51.461313, lng: -0.296408, status: 'A', messages: { 'temp': { rag: 'A', message: 'Temp too high' } }, sensorTelemetry: S2_PROPERTY_TEL[1], lastUpdateTime: 1517749198000, rhpID: "0", rhpName: 'Office', buildingID: "0", buildingName: '12 Acacia Avenue' },
  { id: "2", name: 'two', sensorType: 'S2', lat: 51.460551, lng: -0.295505, status: 'G', messages: {}, sensorTelemetry: S2_PROPERTY_TEL[2], lastUpdateTime: 1517749198000, rhpID: "0", rhpName: 'Office', buildingID: "1", buildingName: '166 Dalston Lane' },
  { id: "3", name: 'Flat 68 Block C', sensorType: 'S2', lat: 51.463733, lng: -0.291911, status: 'A', messages: { 'audio': { rag: 'A', message: 'audio too high' } }, sensorTelemetry: S2_PROPERTY_TEL[3], lastUpdateTime: 1517749198000, rhpID: "1", rhpName: 'RHP Demo', buildingID: "2", buildingName: 'Brook House' },
  { id: "4", name: 'Flat 62 Block C', sensorType: 'S2', lat: 51.463733, lng: -0.291911, status: 'G', messages: {}, sensorTelemetry: S2_PROPERTY_TEL[4], lastUpdateTime: 1517749198000, rhpID: "1", rhpName: 'RHP Demo', buildingID: "2", buildingName: 'Brook House'},
  { id: "5", name: 'Room 16 Block A', sensorType: 'S2', lat: 51.463733, lng: -0.291911, status: 'G', messages: {}, sensorTelemetry: S2_PROPERTY_TEL[5], lastUpdateTime: 1517749198000, rhpID: "1", rhpName: 'RHP Demo', buildingID: "2", buildingName: 'Brook House'},
  { id: "6", name: 'six', sensorType: 'S2', lat: 51.460866, lng: -0.300655, status: 'G', messages: {}, sensorTelemetry: S2_PROPERTY_TEL[6], lastUpdateTime: 1517749198000, rhpID: "1", rhpName: 'RHP Demo', buildingID: "3", buildingName: 'Grenville'},
  { id: "7", name: 'seven', sensorType: 'S2', lat: 51.464188, lng: -0.296408, status: 'G', messages: {}, sensorTelemetry: S2_PROPERTY_TEL[7], lastUpdateTime: 1517749198000, rhpID: "1", rhpName: 'RHP Demo', buildingID: "3", buildingName: 'Grenville'},
  { id: "8", name: 'eight', sensorType: 'S2', lat: 51.464188, lng: -0.296408, status: 'G', messages: {}, sensorTelemetry: S2_PROPERTY_TEL[8], lastUpdateTime: 1517749198000, rhpID: "1", rhpName: 'RHP Demo', buildingID: "4", buildingName: 'Marybone' },
  { id: "9", name: 'nine', sensorType: 'S1', lat: 51.463005, lng: -0.298391, status: 'G', messages: {}, sensorTelemetry: S1_PROPERTY_TEL[0], lastUpdateTime: 1517749198000, rhpID: "1", rhpName: 'RHP Demo', buildingID: undefined, buildingName: undefined },
  { id: "10", name: 'ten', sensorType: 'S1', lat: 51.463005, lng: -0.298391, status: 'G', messages: {}, sensorTelemetry: S1_PROPERTY_TEL[1], lastUpdateTime: 1517749198000, rhpID: "0", rhpName: 'Office', buildingID: undefined, buildingName: undefined },
  { id: "11", name: 'eleven', sensorType: 'S1', lat: 51.461313, lng: -0.298391, status: 'A', messages: { 'humid': { rag: 'A', message: 'Humidity too high' } }, sensorTelemetry: S1_PROPERTY_TEL[2], lastUpdateTime: 1517749198000, rhpID: "0", rhpName: 'Office', buildingID: undefined, buildingName: undefined } // test that it works with no matching ref data
];

export const PROPERTY_RAW_DATA = [
  {
    "deviceid": "a81758fffe032773",
    "humid": 43,
    "light": 0,
    "motion": 1,
    "temp": 12.1,
    "timestamp": "2018-02-04T13:19:58.000Z"
  },
  {
    "deviceid": "a81758fffe032773",
    "humid": 42,
    "light": 0,
    "motion": 2,
    "temp": 12.1,
    'timestamp': '2018-02-04T14:19:58.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 0,
    'motion': 1,
    'temp': 12.2,
    'timestamp': '2018-02-04T15:19:59.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 42,
    'light': 0,
    'motion': 2,
    'temp': 12.1,
    'timestamp': '2018-02-04T16:19:58.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 0,
    'motion': 1,
    'temp': 11.9,
    'timestamp': '2018-02-04T17:19:57.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 11.7,
    'timestamp': '2018-02-04T18:19:57.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 1,
    'temp': 11.4,
    'timestamp': '2018-02-04T19:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 11.2,
    'timestamp': '2018-02-04T20:19:57.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 1,
    'temp': 11,
    'timestamp': '2018-02-04T21:19:57.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 11,
    'timestamp': '2018-02-04T22:19:57.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 1,
    'temp': 10.9,
    'timestamp': '2018-02-04T23:19:57.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 2,
    'temp': 10.8,
    'timestamp': '2018-02-05T00:20:00.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 1,
    'temp': 10.9,
    'timestamp': '2018-02-05T01:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 2,
    'temp': 10.8,
    'timestamp': '2018-02-05T02:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 1,
    'temp': 10.7,
    'timestamp': '2018-02-05T03:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 2,
    'temp': 10.6,
    'timestamp': '2018-02-05T04:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 1,
    'temp': 10.4,
    'timestamp': '2018-02-05T05:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 2,
    'temp': 10.4,
    'timestamp': '2018-02-05T06:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 0,
    'motion': 1,
    'temp': 10.2,
    'timestamp': '2018-02-05T07:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 47,
    'light': 0,
    'motion': 2,
    'temp': 10.2,
    'timestamp': '2018-02-05T08:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 48,
    'light': 1,
    'motion': 3,
    'temp': 11,
    'timestamp': '2018-02-05T09:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 1,
    'motion': 2,
    'temp': 13.2,
    'timestamp': '2018-02-05T10:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 42,
    'light': 1,
    'motion': 1,
    'temp': 14.8,
    'timestamp': '2018-02-05T11:20:05.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 40,
    'light': 1,
    'motion': 2,
    'temp': 16.3,
    'timestamp': '2018-02-05T12:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 39,
    'light': 1,
    'motion': 1,
    'temp': 17.3,
    'timestamp': '2018-02-05T13:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 39,
    'light': 1,
    'motion': 2,
    'temp': 17.2,
    'timestamp': '2018-02-05T14:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 41,
    'light': 1,
    'motion': 1,
    'temp': 16.2,
    'timestamp': '2018-02-05T15:20:09.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 42,
    'light': 1,
    'motion': 2,
    'temp': 15.5,
    'timestamp': '2018-02-05T16:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 1,
    'motion': 1,
    'temp': 16.5,
    'timestamp': '2018-02-05T17:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 40,
    'light': 0,
    'motion': 3,
    'temp': 17,
    'timestamp': '2018-02-05T18:20:05.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 38,
    'light': 0,
    'motion': 1,
    'temp': 16.6,
    'timestamp': '2018-02-05T19:20:10.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 37,
    'light': 0,
    'motion': 2,
    'temp': 16.6,
    'timestamp': '2018-02-05T20:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 36,
    'light': 1,
    'motion': 1,
    'temp': 16.8,
    'timestamp': '2018-02-05T21:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 36,
    'light': 0,
    'motion': 2,
    'temp': 16.6,
    'timestamp': '2018-02-05T22:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 36,
    'light': 0,
    'motion': 1,
    'temp': 16.6,
    'timestamp': '2018-02-05T23:19:53.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 36,
    'light': 0,
    'motion': 2,
    'temp': 16.5,
    'timestamp': '2018-02-06T00:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 36,
    'light': 0,
    'motion': 1,
    'temp': 16.9,
    'timestamp': '2018-02-06T01:20:05.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 35,
    'light': 0,
    'motion': 2,
    'temp': 17.5,
    'timestamp': '2018-02-06T02:19:57.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 34,
    'light': 0,
    'motion': 1,
    'temp': 17.9,
    'timestamp': '2018-02-06T03:20:00.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 34,
    'light': 0,
    'motion': 2,
    'temp': 18.1,
    'timestamp': '2018-02-06T04:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 33,
    'light': 0,
    'motion': 1,
    'temp': 18.3,
    'timestamp': '2018-02-06T05:19:59.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 32,
    'light': 0,
    'motion': 2,
    'temp': 18.1,
    'timestamp': '2018-02-06T06:19:59.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 33,
    'light': 0,
    'motion': 1,
    'temp': 18,
    'timestamp': '2018-02-06T07:20:02.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 33,
    'light': 0,
    'motion': 2,
    'temp': 18.1,
    'timestamp': '2018-02-06T08:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 34,
    'light': 1,
    'motion': 2,
    'temp': 18.1,
    'timestamp': '2018-02-06T09:20:00.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 37,
    'light': 1,
    'motion': 6,
    'temp': 17.2,
    'timestamp': '2018-02-06T10:19:58.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 39,
    'light': 2,
    'motion': 9,
    'temp': 17.1,
    'timestamp': '2018-02-06T11:20:08.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 39,
    'light': 2,
    'motion': 13,
    'temp': 18.6,
    'timestamp': '2018-02-06T12:20:23.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 41,
    'light': 2,
    'motion': 12,
    'temp': 19.2,
    'timestamp': '2018-02-06T13:20:03.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 1,
    'motion': 3,
    'temp': 19,
    'timestamp': '2018-02-06T14:19:51.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 1,
    'motion': 3,
    'temp': 18.3,
    'timestamp': '2018-02-06T15:19:53.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 1,
    'motion': 4,
    'temp': 17.8,
    'timestamp': '2018-02-06T16:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 1,
    'motion': 2,
    'temp': 17.3,
    'timestamp': '2018-02-06T17:19:50.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 1,
    'motion': 3,
    'temp': 16.8,
    'timestamp': '2018-02-06T18:19:49.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 0,
    'motion': 2,
    'temp': 16.2,
    'timestamp': '2018-02-06T19:19:59.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 0,
    'motion': 3,
    'temp': 15.3,
    'timestamp': '2018-02-06T20:19:49.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 14.8,
    'timestamp': '2018-02-06T21:19:48.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 14.3,
    'timestamp': '2018-02-06T22:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 14,
    'timestamp': '2018-02-06T23:20:04.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 13.5,
    'timestamp': '2018-02-07T00:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 13.2,
    'timestamp': '2018-02-07T01:19:53.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 12.8,
    'timestamp': '2018-02-07T02:20:05.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 12.4,
    'timestamp': '2018-02-07T03:19:47.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 12,
    'timestamp': '2018-02-07T04:20:00.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 11.8,
    'timestamp': '2018-02-07T05:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 11.6,
    'timestamp': '2018-02-07T06:19:46.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 11.3,
    'timestamp': '2018-02-07T07:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 11.2,
    'timestamp': '2018-02-07T08:19:58.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 47,
    'light': 1,
    'motion': 3,
    'temp': 11.9,
    'timestamp': '2018-02-07T09:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 42,
    'light': 1,
    'motion': 2,
    'temp': 14.5,
    'timestamp': '2018-02-07T10:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 1,
    'motion': 3,
    'temp': 16.7,
    'timestamp': '2018-02-07T11:19:46.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 38,
    'light': 1,
    'motion': 3,
    'temp': 17.7,
    'timestamp': '2018-02-07T12:19:46.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 39,
    'light': 1,
    'motion': 2,
    'temp': 17.2,
    'timestamp': '2018-02-07T13:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 42,
    'light': 1,
    'motion': 2,
    'temp': 17.2,
    'timestamp': '2018-02-07T14:19:58.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 1,
    'motion': 3,
    'temp': 17.1,
    'timestamp': '2018-02-07T15:19:47.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 1,
    'motion': 2,
    'temp': 17.1,
    'timestamp': '2018-02-07T16:19:48.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 1,
    'motion': 4,
    'temp': 17,
    'timestamp': '2018-02-07T17:19:49.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 0,
    'motion': 2,
    'temp': 16.2,
    'timestamp': '2018-02-07T18:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 0,
    'motion': 3,
    'temp': 15.3,
    'timestamp': '2018-02-07T19:19:56.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 14.5,
    'timestamp': '2018-02-07T20:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 0,
    'motion': 2,
    'temp': 14.1,
    'timestamp': '2018-02-07T21:19:49.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 13.5,
    'timestamp': '2018-02-07T22:19:51.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 13.2,
    'timestamp': '2018-02-07T23:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.9,
    'timestamp': '2018-02-08T00:19:47.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.5,
    'timestamp': '2018-02-08T01:19:53.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.4,
    'timestamp': '2018-02-08T02:19:55.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.2,
    'timestamp': '2018-02-08T03:19:53.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.1,
    'timestamp': '2018-02-08T04:19:54.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.1,
    'timestamp': '2018-02-08T05:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.2,
    'timestamp': '2018-02-08T06:19:50.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.2,
    'timestamp': '2018-02-08T07:19:45.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 12.3,
    'timestamp': '2018-02-08T08:19:48.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 50,
    'light': 1,
    'motion': 3,
    'temp': 13.1,
    'timestamp': '2018-02-08T09:19:52.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 1,
    'motion': 3,
    'temp': 15.8,
    'timestamp': '2018-02-08T10:19:50.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 1,
    'motion': 2,
    'temp': 17.6,
    'timestamp': '2018-02-08T11:19:45.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 50,
    'light': 1,
    'motion': 2,
    'temp': 19.1,
    'timestamp': '2018-02-08T12:19:45.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 4,
    'motion': 3,
    'temp': 20.4,
    'timestamp': '2018-02-08T13:19:47.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 4,
    'motion': 2,
    'temp': 21,
    'timestamp': '2018-02-08T14:19:45.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 46,
    'light': 4,
    'motion': 3,
    'temp': 21.5,
    'timestamp': '2018-02-08T15:19:40.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 47,
    'light': 3,
    'motion': 1,
    'temp': 21.7,
    'timestamp': '2018-02-08T16:19:41.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 50,
    'light': 3,
    'motion': 8,
    'temp': 21.4,
    'timestamp': '2018-02-08T17:19:50.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 49,
    'light': 0,
    'motion': 5,
    'temp': 20.2,
    'timestamp': '2018-02-08T18:19:40.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 49,
    'light': 0,
    'motion': 2,
    'temp': 18.6,
    'timestamp': '2018-02-08T19:19:41.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 50,
    'light': 0,
    'motion': 2,
    'temp': 17.8,
    'timestamp': '2018-02-08T20:19:41.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 50,
    'light': 0,
    'motion': 2,
    'temp': 17.1,
    'timestamp': '2018-02-08T21:19:44.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 16.5,
    'timestamp': '2018-02-08T22:19:44.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 16.2,
    'timestamp': '2018-02-08T23:19:41.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 15.9,
    'timestamp': '2018-02-09T00:19:40.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 3,
    'temp': 15.6,
    'timestamp': '2018-02-09T01:19:39.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 2,
    'temp': 15.4,
    'timestamp': '2018-02-09T02:19:39.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 15.2,
    'timestamp': '2018-02-09T03:20:12.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 14.8,
    'timestamp': '2018-02-09T04:19:39.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 3,
    'temp': 14.4,
    'timestamp': '2018-02-09T05:19:39.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 2,
    'temp': 13.9,
    'timestamp': '2018-02-09T06:19:38.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 2,
    'temp': 13.5,
    'timestamp': '2018-02-09T07:19:39.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 1,
    'motion': 2,
    'temp': 13.1,
    'timestamp': '2018-02-09T08:19:38.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 4,
    'motion': 5,
    'temp': 13.8,
    'timestamp': '2018-02-09T09:19:40.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 1,
    'motion': 4,
    'temp': 15.1,
    'timestamp': '2018-02-09T11:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 48,
    'light': 1,
    'motion': 2,
    'temp': 16.4,
    'timestamp': '2018-02-09T12:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 50,
    'light': 1,
    'motion': 6,
    'temp': 17.2,
    'timestamp': '2018-02-09T13:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 47,
    'light': 1,
    'motion': 7,
    'temp': 17.5,
    'timestamp': '2018-02-09T14:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 44,
    'light': 1,
    'motion': 10,
    'temp': 17.6,
    'timestamp': '2018-02-09T15:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 40,
    'light': 1,
    'motion': 17,
    'temp': 17.7,
    'timestamp': '2018-02-09T16:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 41,
    'light': 0,
    'motion': 1,
    'temp': 16.5,
    'timestamp': '2018-02-09T17:19:36.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 42,
    'light': 0,
    'motion': 2,
    'temp': 14.8,
    'timestamp': '2018-02-09T18:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 43,
    'light': 0,
    'motion': 1,
    'temp': 13.8,
    'timestamp': '2018-02-09T19:19:39.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 2,
    'temp': 13,
    'timestamp': '2018-02-09T20:19:38.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 45,
    'light': 0,
    'motion': 1,
    'temp': 12.4,
    'timestamp': '2018-02-09T21:19:36.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 47,
    'light': 0,
    'motion': 2,
    'temp': 11.9,
    'timestamp': '2018-02-09T22:19:38.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 48,
    'light': 0,
    'motion': 1,
    'temp': 11.6,
    'timestamp': '2018-02-09T23:19:36.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 47,
    'light': 0,
    'motion': 2,
    'temp': 11.6,
    'timestamp': '2018-02-10T00:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 48,
    'light': 0,
    'motion': 1,
    'temp': 11.4,
    'timestamp': '2018-02-10T01:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 48,
    'light': 0,
    'motion': 2,
    'temp': 11.2,
    'timestamp': '2018-02-10T02:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 1,
    'temp': 11.3,
    'timestamp': '2018-02-10T03:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 11.7,
    'timestamp': '2018-02-10T04:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 1,
    'temp': 11.9,
    'timestamp': '2018-02-10T05:19:34.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 12,
    'timestamp': '2018-02-10T06:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 1,
    'temp': 12,
    'timestamp': '2018-02-10T07:19:34.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 2,
    'temp': 12.2,
    'timestamp': '2018-02-10T08:19:34.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 1,
    'temp': 12.1,
    'timestamp': '2018-02-10T09:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 2,
    'temp': 12.3,
    'timestamp': '2018-02-10T10:19:37.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 1,
    'motion': 1,
    'temp': 12.5,
    'timestamp': '2018-02-10T11:19:34.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 0,
    'motion': 2,
    'temp': 12.9,
    'timestamp': '2018-02-10T12:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 1,
    'motion': 1,
    'temp': 13.1,
    'timestamp': '2018-02-10T13:19:35.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 1,
    'motion': 1,
    'temp': 12,
    'timestamp': '2018-02-12T10:19:26.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 1,
    'motion': 3,
    'temp': 14.3,
    'timestamp': '2018-02-12T11:19:26.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 2,
    'motion': 2,
    'temp': 16.3,
    'timestamp': '2018-02-12T12:19:25.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 48,
    'light': 25,
    'motion': 6,
    'temp': 19.5,
    'timestamp': '2018-02-12T16:19:25.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 55,
    'light': 0,
    'motion': 1,
    'temp': 6.1,
    'timestamp': '2018-02-15T10:19:14.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 55,
    'light': 0,
    'motion': 2,
    'temp': 6.6,
    'timestamp': '2018-02-15T14:19:14.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 56,
    'light': 0,
    'motion': 5,
    'temp': 7.1,
    'timestamp': '2018-02-15T15:19:16.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 58,
    'light': 0,
    'motion': 5,
    'temp': 10.2,
    'timestamp': '2018-02-15T20:19:13.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 77,
    'light': 0,
    'motion': 9,
    'temp': 3,
    'timestamp': '2018-02-16T10:19:10.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 70,
    'light': 0,
    'motion': 1,
    'temp': 13.1,
    'timestamp': '2018-02-16T11:19:10.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 60,
    'light': 0,
    'motion': 3,
    'temp': 17.7,
    'timestamp': '2018-02-16T12:19:10.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 56,
    'light': 0,
    'motion': 1,
    'temp': 19.9,
    'timestamp': '2018-02-16T13:19:08.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 0,
    'motion': 2,
    'temp': 20.9,
    'timestamp': '2018-02-16T14:19:09.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 0,
    'motion': 2,
    'temp': 0,
    'timestamp': '2018-02-20T16:16:42.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 0,
    'motion': 2,
    'temp': 0,
    'timestamp': '2018-02-20T16:17:14.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 55,
    'light': 0,
    'motion': 1,
    'temp': 0,
    'timestamp': '2018-02-20T16:17:48.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 1,
    'motion': 2,
    'temp': 0,
    'timestamp': '2018-02-20T16:19:07.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 51,
    'light': 1,
    'motion': 1,
    'temp': 0,
    'timestamp': '2018-02-20T16:19:12.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 3,
    'temp': 0,
    'timestamp': '2018-02-20T16:19:29.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 52,
    'light': 0,
    'motion': 2,
    'temp': 0,
    'timestamp': '2018-02-20T16:20:17.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 0,
    'motion': 0,
    'temp': 0,
    'timestamp': '2018-02-20T16:20:51.000Z'
  },
  {
    'deviceid': 'a81758fffe032773',
    'humid': 53,
    'light': 0,
    'motion': 0,
    'temp': 0,
    'timestamp': '2018-02-20T16:20:51.000Z'
  }
];

function generateRandomProp(howMany: number): PropertyData[] {

  const randoProps: PropertyData[] = [];

  for (let idx = 0; idx < howMany; idx++) {

    randoProps.push(
      {
        id: String(idx + 100),
        name: 'Flat A, Room ' + String(idx),
        sensorType: 'S1',
        lat: 53.503131, lng: -2.896578,
        status: 'G', messages: {},
        sensorTelemetry: S1_PROPERTY_TEL[1],
        lastUpdateTime: 1517749198000,
        rhpID: '2', rhpName: 'Hallway', buildingID: '5', buildingName: 'Marybone Students'
      }
    );

  }

  return randoProps;
}

export const BUILDINGS: Building[] = [
  { id: '0', name: '12 Acacia Avenue', properties: [PROPERTY_DATA[0], PROPERTY_DATA[1]], rhpID: '0', rhpName: 'Office'},
  { id: '1', name: '166 Dalston Lane', properties: [PROPERTY_DATA[2]], rhpID: '0', rhpName: 'Office'},
  { id: '2', name: 'Brook House', properties: [PROPERTY_DATA[3], PROPERTY_DATA[4], PROPERTY_DATA[5]], rhpID: '1', rhpName: 'RHP Demo'},
  { id: '3', name: 'Grenville', properties: [PROPERTY_DATA[6]], rhpID: '1', rhpName: 'RHP Demo'},
  { id: '4', name: 'Marybone', properties: [PROPERTY_DATA[7], PROPERTY_DATA[8]], rhpID: '1', rhpName: 'RHP Demo'},
  { id: '5', name: 'Marybone Students', properties: generateRandomProp(40), rhpID: '2', rhpName: 'Hallway'},
];

export const RHP: Rhp[] = [
  // { id: "0", name: 'Sanctuary', buildings: [BUILDINGS[1]], singleProperties: []  },
  { id: '0', name: 'Office', buildings: [BUILDINGS[0], BUILDINGS[1]], singleProperties: [PROPERTY_DATA[10], PROPERTY_DATA[11] ] },
  { id: '1', name: 'RHP Demo', buildings: [BUILDINGS[2], BUILDINGS[3], BUILDINGS[4]], singleProperties: [PROPERTY_DATA[9]] },
  { id: '2', name: 'Hallway', buildings: [BUILDINGS[4]], singleProperties: [] }
];

function generateRandomAlarm(howMany: number): Alarm[] {

  const randoAlarms: Alarm[] = [];

  for (let idx = 0; idx < howMany; idx++) {

    randoAlarms.push(
      { propertyId: '3', propertyName: 'three', time: new Date(), message: 'AUDIO' }
    );

  }

  return randoAlarms;
}


export const MANY_ALARMS: Alarm[] = generateRandomAlarm(30);

export const ALARMS: Alarm[] = [
  { propertyId: '3', propertyName: 'three', time: new Date(), message: 'AUDIO'},
  { propertyId: '3', propertyName: 'three', time: new Date(), message: 'HEAT'},
  { propertyId: '8', propertyName: 'eight', time: new Date(), message: 'AUDIO'}
];

export const DAY_HISTORY_S1: RhpOneTelemetry[] = [
  { timeLabel: '14:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '15:19', minTemp: 12.0, temp: 14.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '16:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40},
  { timeLabel: '17:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '18:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '19:19', minTemp: 12.0, temp: 14.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '20:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '21:19', minTemp: 12.0, temp: 16.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '22:19', minTemp: 12.0, temp: 20.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 80 },
  { timeLabel: '23:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '00:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 2, maxAudio: 0, humid: 40 },
  { timeLabel: '01:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '02:19', minTemp: 12.0, temp: 10.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '03:19', minTemp: 12.0, temp: 20.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '04:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '05:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 80 },
  { timeLabel: '06:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '07:19', minTemp: 12.0, temp: 10.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '08:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 4, maxAudio: 0, humid: 40 },
  { timeLabel: '09:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '10:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '11:19', minTemp: 12.0, temp: 19.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '12:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '13:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 }
];

export const DAY_HISTORY_S2: RhpTwoTelemetry[] = [
  { timeLabel: '14:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '15:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '16:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '17:19', temp: 13.8, humid: 40, light: 37, motion: 5 },
  { timeLabel: '18:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '19:19', temp: 18.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '20:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '21:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '22:19', temp: 13.8, humid: 40, light: 2, motion: 1 },
  { timeLabel: '23:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '00:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '01:19', temp: 20.8, humid: 80, light: 27, motion: 1 },
  { timeLabel: '02:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '03:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '04:19', temp: 13.8, humid: 40, light: 27, motion: 6 },
  { timeLabel: '05:19', temp: 13.8, humid: 40, light: 3, motion: 1 },
  { timeLabel: '06:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '07:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '08:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '09:19', temp: 13.8, humid: 60, light: 27, motion: 1 },
  { timeLabel: '10:19', temp: 17.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '11:19', temp: 13.8, humid: 40, light: 27, motion: 3 },
  { timeLabel: '12:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '13:19', temp: 13.8, humid: 40, light: 27, motion: 1 }
];

export const WEEK_HISTORY_S1: RhpOneTelemetry[] = [
  { timeLabel: '14:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '15:19', minTemp: 12.0, temp: 14.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '16:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40},
  { timeLabel: '17:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '18:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '19:19', minTemp: 12.0, temp: 14.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '20:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '21:19', minTemp: 12.0, temp: 16.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '22:19', minTemp: 12.0, temp: 20.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 80 },
  { timeLabel: '23:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '00:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 2, maxAudio: 0, humid: 40 },
  { timeLabel: '01:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '02:19', minTemp: 12.0, temp: 10.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '03:19', minTemp: 12.0, temp: 20.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '04:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '05:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 80 },
  { timeLabel: '06:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '07:19', minTemp: 12.0, temp: 10.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '08:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 4, maxAudio: 0, humid: 40 },
  { timeLabel: '09:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '10:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '11:19', minTemp: 12.0, temp: 19.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '12:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '13:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 }
];

export const WEEK_HISTORY_S2: RhpTwoTelemetry[] = [
  { timeLabel: '14:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '15:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '16:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '17:19', temp: 13.8, humid: 40, light: 37, motion: 5 },
  { timeLabel: '18:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '19:19', temp: 18.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '20:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '21:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '22:19', temp: 13.8, humid: 40, light: 2, motion: 1 },
  { timeLabel: '23:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '00:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '01:19', temp: 20.8, humid: 80, light: 27, motion: 1 },
  { timeLabel: '02:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '03:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '04:19', temp: 13.8, humid: 40, light: 27, motion: 6 },
  { timeLabel: '05:19', temp: 13.8, humid: 40, light: 3, motion: 1 },
  { timeLabel: '06:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '07:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '08:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '09:19', temp: 13.8, humid: 60, light: 27, motion: 1 },
  { timeLabel: '10:19', temp: 17.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '11:19', temp: 13.8, humid: 40, light: 27, motion: 3 },
  { timeLabel: '12:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '13:19', temp: 13.8, humid: 40, light: 27, motion: 1 }
];

export const MONTH_HISTORY_S1: RhpOneTelemetry[] = [
  { timeLabel: '14:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '15:19', minTemp: 12.0, temp: 14.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '16:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40},
  { timeLabel: '17:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '18:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '19:19', minTemp: 12.0, temp: 14.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '20:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '21:19', minTemp: 12.0, temp: 16.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '22:19', minTemp: 12.0, temp: 20.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 80 },
  { timeLabel: '23:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '00:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 2, maxAudio: 0, humid: 40 },
  { timeLabel: '01:19', minTemp: 12.0, temp: 15.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '02:19', minTemp: 12.0, temp: 10.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '03:19', minTemp: 12.0, temp: 20.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '04:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '05:19', minTemp: 12.0, temp: 18.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 80 },
  { timeLabel: '06:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '07:19', minTemp: 12.0, temp: 10.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '08:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 4, maxAudio: 0, humid: 40 },
  { timeLabel: '09:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '10:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '11:19', minTemp: 12.0, temp: 19.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 },
  { timeLabel: '12:19', minTemp: 12.0, temp: 17.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 70 },
  { timeLabel: '13:19', minTemp: 12.0, temp: 13.8, maxTemp: 18.1, minAudio: 0, audio: 0, maxAudio: 0, humid: 40 }
];

export const MONTH_HISTORY_S2: RhpTwoTelemetry[] = [
  { timeLabel: '14:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '15:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '16:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '17:19', temp: 13.8, humid: 40, light: 37, motion: 5 },
  { timeLabel: '18:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '19:19', temp: 18.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '20:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '21:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '22:19', temp: 13.8, humid: 40, light: 2, motion: 1 },
  { timeLabel: '23:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '00:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '01:19', temp: 20.8, humid: 80, light: 27, motion: 1 },
  { timeLabel: '02:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '03:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '04:19', temp: 13.8, humid: 40, light: 27, motion: 6 },
  { timeLabel: '05:19', temp: 13.8, humid: 40, light: 3, motion: 1 },
  { timeLabel: '06:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '07:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '08:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '09:19', temp: 13.8, humid: 60, light: 27, motion: 1 },
  { timeLabel: '10:19', temp: 17.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '11:19', temp: 13.8, humid: 40, light: 27, motion: 3 },
  { timeLabel: '12:19', temp: 13.8, humid: 40, light: 27, motion: 1 },
  { timeLabel: '13:19', temp: 13.8, humid: 40, light: 27, motion: 1 }
];
