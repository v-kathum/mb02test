import { TelemetryType, SensorReading, LIGHT, HUMID, TEMP, MOTION } from '../model/sensor-reading';

interface MockDataGenerator {
    generateDataElement(): number;
}
class LightDataGenerator implements MockDataGenerator {
    generateDataElement(): number {
        return Math.floor(Math.random() * 40) + 35;
    }
}
class HumidDataGenerator implements MockDataGenerator {
    generateDataElement(): number {
        return Math.floor(Math.random() * 35) + 55;
    }
}
class TempDataGenerator implements MockDataGenerator {
    generateDataElement(): number {
        return Math.floor(Math.random() * 10) + 20;
    }
}
class MotionDataGenerator implements MockDataGenerator {
    generateDataElement(): number {
        if (Math.random() < 0.5) {
            return 0;
        } else {
            return 1;
        }
    }
}

let dataGens: Map<TelemetryType, MockDataGenerator> = new Map();
dataGens.set(LIGHT, new LightDataGenerator());
dataGens.set(HUMID, new HumidDataGenerator());
dataGens.set(TEMP, new TempDataGenerator());
dataGens.set(MOTION, new MotionDataGenerator());

export function generateSensorArray():SensorReading[] {

    let sensors: SensorReading[] = [];

    dataGens.forEach((dataGen, sensorType, map) => {
        sensors.push(new SensorReading(sensorType, dataGen.generateDataElement()));
    });

    return sensors;
}

/**
 * Given a property, add random data for each of the data types using the labels.
 */
//propertyDataType.addRandomData = function (property, labels) {

//    // for each data type
//    for (var i = 0; i < dataTypes.length; i++) {

//        var dataType = dataTypes[i];
//        // calculate random data
//        var randomisedData = dataType.generateRandomData(labels); //returns an array of data

//        var averageOfLastSixty = randomisedData.slice(randomisedData.length - 12).reduce(function (currentTotal, next) {
//            return currentTotal + next;
//        }) / 12;

//        // status = {status: R/A/G, message: optional_str}
//        var status = dataType.determineStatus(randomisedData);

//        // append to property
//        property[dataType.key] = {
//            data: randomisedData,
//            latestReading: randomisedData[randomisedData.length - 1],
//            averageOfLastSixty: averageOfLastSixty.toFixed(0),
//            status: status
//        };

//        overallStatus = updateOverallStatus(overallStatus, status.status);
//        if (status.message != null && status.message != '') {
//            overallMessages.push(status.message);
//        }

//    }

//    // append overallStatus
//    property.overallStatus = { status: overallStatus, messages: overallMessages };


//}