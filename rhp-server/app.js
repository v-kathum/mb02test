var DocumentDBClient = require('documentdb').DocumentClient;
var TaskModel = require('./model/task-model');
var indexRouter = require('./routes/index');
var config = require('./config');
var mongo = require('./mongo-server');

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
var ObjectID  = require('mongodb');
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
        this.minutTempPath = '/draft1/admin/devices/id/temperature';
        this.minutHumiPath = '/draft1/admin/devices/id/humidity';
        this.minutSoundPath = '/draft1/admin/devices/id/sound_level';
    }

    // office device ID
    var idOffice = '5aedfeede892cb659e47f58f';

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
                var body = Buffer.concat(chunks);
                var accessToken = JSON.parse(body).access_token;
                callback(accessToken);
            });
        });
        //req.write("client_id=b2476a2909f68667&redirect_uri=http%3A%2F%2Flocalhost%3A8080&client_secret=8c23a4179c932071a2ff9f6f7fc828f8&password=sn5wLV0lCGHj7A&grant_type=password&username=rhp%40example.com");
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
    MinutLogin.prototype.getDevices = (accessToken) => {
        // send login message
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
                //console.log(data);
                mongo.insertMany("devices", data.devices);
            });
        });
        req.end();
    };

    // GET TEMPERATURE
    MinutLogin.prototype.getTemperature = (accessToken) => {
        console.log("Getting temperture from Minut...");
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: `/draft1/admin/devices/${idOffice}/temperature`,
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
                var values = data.values;
                var finalValues = values.map(function (el) {
                    var o = Object.assign({}, el);
                    o.locationId = idOffice;
                    o.unit = data.unit;
                    return o;
                });
                // console.log(data);
                mongo.insertMany("temperature-data", finalValues);
            });
        });
        req.end();
    };

    // GET HUMIDITY
    MinutLogin.prototype.getHumidity = (accessToken) => {
        console.log("Getting humidity from Minut...");
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: `/draft1/admin/devices/${idOffice}/humidity`,
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
                var values = data.values;
                var finalValues = values.map(function (el) {
                    var o = Object.assign({}, el);
                    o.locationId = idOffice;
                    o.unit = data.unit;
                    return o;
                });
                // console.log(data);
                mongo.insertMany("humidity-data", finalValues);
            });
        });
        req.end();
    };

    // GET AUDIO
    MinutLogin.prototype.getSound = (accessToken) => {
        console.log("Getting audio from Minut...");
        var options = {
            method: "GET",
            hostname: 'api.minut.com',
            path: `/draft1/admin/devices/${idOffice}/sound_level`,
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
                var values = data.values;
                var finalValues = values.map(function (el) {
                    var o = Object.assign({}, el);
                    o.locationId = idOffice;
                    o.unit = data.unit;
                    return o;
                });
                mongo.insertMany("sound-data", finalValues);
                return new Promise(resolve => {
                    resolve();
                });
            });
        });
        req.end();
    };

    return MinutLogin;
}());

// Calls to get DEVICES, TEMP, HUMI, SOUND
var login = new MinutLogin();
login.login(login.getDevices);
login.login(login.getTemperature);
login.login(login.getHumidity);
login.login(login.getSound);

// app.get('/', (req, res) => {
//     res.send('Hello Express!');
// });

// app.listen(3000, () => {
//     console.log('Running on port 3000');
// });

module.exports = app;
