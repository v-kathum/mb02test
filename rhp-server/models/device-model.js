//Device Model
var Device = {
    _id: null, // Device ID - device_id
    _ts: null, // Timestamp the record was writen to cosmos
    home_id: null,
    name: null,
    location: {
        longitude: 0,
        latitude: 0
    },
    battery: {
        percent: null
    },
    temperature: {
        unit: null,
        values: [
            {
                value: null,
                datetime: null
            }
        ]
    },
    humidity: {
        unit: null,
        values: [
            {
                value: null,
                datetime: null
            }
        ]
    },
    sound: {
        unit: null,
        values: [
            {
                value: null,
                datetime: null
            }
        ]
    },
    light: { // ambient light
        unit: null,
        values: [
            {
                value: null,
                datetime: null
            }
        ]
    }
}