var DocumentDBClient = require('documentdb').DocumentClient;
var TaskModel = require('./models/task-model');
var indexRouter = require('./routes/index');
var config = require('./config');
var Device = require('./models/device-model');
var mongo = require('./mongo-server');
var azure = require('./azure');

const async = require('async');
const moment = require('moment');
const lodash = require('lodash');
var https = require("https");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var { ObjectID } = require('mongodb');
exports.__esModule = true;
var qs = require("qs");

var app = express();

app.set('view engine', 'hbs');

"use strict";
/**
 * The server.
 *
 * @class Server
 */
var MinutLogin = /** @class */ (function () {
    //private minutPort: number = 8080;
    function MinutLogin() {
        this.minutHost = 'api.minut.com';
        this.minutAuthPath = '/v1/oauth/token';
        this.minutDevicesPath = '/draft1/admin/devices';
        this.minutTempPath = '/draft1/admin/devices/5ab27262b933c045e709ea9f/temperature';
        this.minutHumiPath = '/draft1/admin/devices/id/humidity';
        this.minutSoundPath = '/draft1/admin/devices/id/sound_level';
    }

    // office device ID
    var idOffice = '5ab27262b933c045e709ea9f';

    // LOGIN
    MinutLogin.prototype.login = function (callback) {
        // send login message
        console.log("Attempting Minut login...");
        var options = {
            method: "POST",
            hostname: this.minutHost,
            path: this.minutAuthPath,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Cache-Control": "no-cache"
            }
        };
        var req = https.request(options, (res) => {
            var chunks = [];
            res.on("error", (err) => {
                console.log("error " + err);
            });
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                callback(JSON.parse(Buffer.concat(chunks)).access_token);
            });
        });
        req.write(qs.stringify({
            client_id: 'b2476a2909f68667',
            redirect_uri: 'http://localhost:8080',
            client_secret: '8c23a4179c932071a2ff9f6f7fc828f8',
            password: 'sn5wLV0lCGHj7A',
            grant_type: 'password',
            username: 'rhp@example.com'
        }));
        req.end();
    };

    // GET DEVICES
    MinutLogin.prototype.getDevices = (accessToken, callback) => {
        console.log("Getting device list from Minut...");
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: '/draft1/admin/devices',
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        };
        var req = https.request(options, (res) => {
            var chunks = [];
            res.on("error", (err) => {
                console.log("error " + err);
            });
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                var body = Buffer.concat(chunks);
                var data = JSON.parse(body.toString());
                callback(data.devices);
            });
        });
        req.end();
    };

    // GET TEMPERATURE
    MinutLogin.prototype.getTemperature = (accessToken, deviceId, callback) => {
        console.log(`Getting temperture from Minut for ${deviceId}...`);
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: '/draft1/admin/devices/' + deviceId + '/temperature',
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        };
        var req = https.request(options, (res) => {
            var chunks = [];
            res.on("error", (err) => {
                console.log("error " + err);
            });
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                callback(JSON.parse(Buffer.concat(chunks)));
            });
        });
        req.end();
    };

    // GET HUMIDITY
    MinutLogin.prototype.getHumidity = (accessToken, deviceId, callback) => {
        console.log(`Getting humidity from Minut for ${deviceId}...`);
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: '/draft1/admin/devices/' + deviceId + '/humidity',
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        };
        var req = https.request(options, (res) => {
            var chunks = [];
            res.on("error", (err) => {
                console.log("error " + err);
            });
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                callback(JSON.parse(Buffer.concat(chunks)));
            });
        });
        req.end();
    };

    // GET AUDIO
    MinutLogin.prototype.getSound = (accessToken, deviceId, callback) => {
        console.log(`Getting audio from Minut for ${deviceId}...`);
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: '/draft1/admin/devices/' + deviceId + '/sound_level',
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        };
        var req = https.request(options, (res) => {
            var chunks = [];
            res.on("error", (err) => {
                console.log("error " + err);
            });
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                callback(JSON.parse(Buffer.concat(chunks)));
            });
        });
        req.end();
    };

    MinutLogin.prototype.getLight = (accessToken, deviceId, callback) => {
        console.log(`Getting light from Minut for ${deviceId}...`);
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: '/draft1/admin/devices/' + deviceId + '/part_als',
            headers: {
                "Authorization": "Bearer " + accessToken
            }
        };
        var req = https.request(options, (res) => {
            var chunks = [];
            res.on("error", (err) => {
                console.log("error " + err);
            });
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                callback(JSON.parse(Buffer.concat(chunks)));
            });
        });
        req.end();
    };

    return MinutLogin;
}());

// Calls to get DEVICES, TEMP, HUMI, SOUND, LIGHT
function main() {
    //vars
    var login = new MinutLogin();
    var at = null;

    //functions
    function doLogin(token) {
        at = token;
        login.getDevices(token, doDevices);
    }

    //Builds object to be sent to cosmos
    function doDevices(devices) {
        if (devices != null) {
            var d = null;
            devices.forEach(device => {
                //Create device object to be saved to mongo
                var data = Object.create(Device);
                //Set fields
                data._id = device.device_id;// Set ID
                data._ts = new Date().getTime();// Set timestamp to current time
                data.home_id = device.home_id;
                data.battery = {};
                data.battery.percent = device.battery.percent;
                data.location = device.location;
                login.getTemperature(at, device.device_id, doTemperature);
                function doTemperature(temps) {
                    temps.values = temps.values[temps.values.length-1];
                    data.temperature = temps;
                    login.getHumidity(at, device.device_id, doHumidity);
                    function doHumidity(humidity) {
                        humidity.values = humidity.values[humidity.values.length-1];
                        data.humidity = humidity;
                        login.getSound(at, device.device_id, doSound);
                        function doSound(sound) {
                            sound.values = sound.values[sound.values.length-1];
                            data.sound = sound;
                            login.getLight(at, device.device_id, doLight);
                            function doLight(light) {
                                light.values = light.values[light.values.length-1];
                                data.light = light;
                                //Save to cosmos
                                mongo.insertOne("devices",data);
                                azure.insertIntoDataLake(device.device_id+"_"+new Date().getTime(),data);
                            }
                        }
                    }
                }
            });
        }
    }

    //Lifecycle
    login.login(doLogin);
}

//Runs backend service every x minutes
//Currently set to 5min (300000ms)
setInterval(function(){ main(); }, 300000);
main();

module.exports = app;
