import { PropertyDataService } from "../property-data-service";
import { AlarmService } from "../alarm-service";
import { generateSensorArray } from "./mock-data-generator";
import { Rhp, Building, Property } from "../model/property-hierarchy";

// edit this to change the display names
let propertyNames: string[] = ['1 CHURCHILL MANSIONS', 'EMERY STREET', 'JOHN BAGOT CLOSE', 'DUMBREES GARDENS',
    '34, LONGREACH ROAD', 'GRENVILLE STREET GRENVILLE ST S', 'MARYBONE MARYBONE', 'COBALT HOUSING',
    'CITIZENS ADVICE BUREAU', 'STEC SPEKE TRAINING UNIT HOUSE STEC', 'SANCTUARY HOUSING MARYBONE',
    'COLLINS & CO LTD', 'CUNARD BUILDING WATER STREET', 'UNIT G03 JORDAN STREET',
    'SENSORCITY RUSSELL STREET', 'Block A Floor 1, Kitchen A', 'Block A Floor 1, Kitchen B',
    'Block A Floor 1, Kitchen C', 'Block A Floor 1, Kitchen D', 'Block A Floor 1, Kitchen E'
];
// edit this to vary the number of properties provided
let numberOfProperties: number = 20;

let propertyList: [string, string, string][] = [
    ['1 CHURCHILL MANSIONS', 'BUILDING 1', 'HA_1'],
    ['EMERY STREET', 'BUILDING 1', 'HA_1'],
    ['JOHN BAGOT CLOSE', 'BUILDING 2', 'HA_1'],
    ['DUMBREES GARDENS', 'BUILDING_3', 'HA_2'],
    ['34, LONGREACH ROAD', 'BUILDING_4', 'HA_3'],
    ['GRENVILLE STREET GRENVILLE ST S', 'BUILDING_4', 'HA_3'],
    ['MARYBONE MARYBONE', 'BUILDING_4', 'HA_3']
];

function generateTimeLabels(): string[] {

    let timeLabels: string[] = [];
    let startTime: Date = new Date();
    startTime.setHours(startTime.getHours() - 2);
    let mins: number = startTime.getMinutes();
    startTime.setMinutes(Math.floor(mins / 5) * 5);

    for (var i = 0; i < 23; i++) {
        startTime.setMinutes(startTime.getMinutes() + 5);
        let currentMin: number = startTime.getMinutes();
        let minStr: string = currentMin.toString();
        if (currentMin < 10) {
            minStr = "0" + minStr;
        }
        timeLabels.push(startTime.getHours().toString() + ":" + minStr);
    }

    return timeLabels;
}

function generateProperties(): Property[] {

    let properties: Property[] = [];
    // recalculate data
    for (let i:number = 0; i < numberOfProperties; i++) {

        // for each data type generate random data
        //     current value, 'R/A/G', array of historical values
        //let property = new Property(i.toString(), propertyNames[i], "S1", 1.0, 2.0, new Date());
        ////property.setSensorReadings(generateSensorArray());
        //properties.push(property);
    }
    return properties;
};

function generateRhp(): Rhp[] {

    let rhp: Rhp[] = [];

    for (let propIdx in propertyList) {

        let prop = propertyList[propIdx];

        let rhpName = prop[2];
        let rhps: Rhp | undefined = rhp.find((rhp) => {
            return (rhp.getName() == rhpName);
        });
        if (!rhp) {
            rhps = new Rhp(rhp.length.toString(), rhpName);
            rhp.push(rhps);
        }

        let buildingName = prop[1];
        let bldg: Building | undefined = rhps.getBuildings().find((building) => {
            return (building.getName() == buildingName);
        });
        if (!bldg) {
            //bldg = new Building(ha.getBuildings.length.toString(), buildingName);
            //ha.addBuilding(bldg);
        }

        //let newProperty = new Property(propIdx, "S1", prop[0], 0,1, new Date());
        //bldg.addProperty(newProperty);

    }

    return rhp;
}

//function generateData(): Property[] {

//    let properties: Property[] = [];
//    // recalculate data
//    for(var i = 0; i<numberOfProperties; i++) {

//    // for each data type generate random data
//        //     current value, 'R/A/G', array of historical values
//        let property = {
//            id: i,
//            name: propertyNames[i],
//            labels: this.timeLabels
//        };

//        dataTypes.addRandomData(property, time_labels);

//        properties.push(property);
//    }
//    return properties;
// };

//export class MockPropertyDataService extends PropertyDataService {

//    private timeLabels: string[];

//    constructor(alarmService: AlarmService) {
//        super(generateHousingAssocs(), generateProperties(), alarmService);
//        this.timeLabels = generateTimeLabels();
//        this.refreshData();
//    }

//    refreshData(): void {
//        this.properties.forEach((property) => {
//                super.updateSensorReadings(property.getId(), generateSensorArray());
//            }
//        );
//    }


//}