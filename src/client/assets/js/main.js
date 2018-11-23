document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, options);
});

// Materialize Initialization
$(document).ready(function(){
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
    $('.sidenav').sidenav();
    $('.tabs').tabs();
  });



// Materialize action button direction top
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, {
      direction: 'top',
      toolbarEnabled: true,
      hoverEnabled: false
    });
});

// WOW initializer
new WOW().init();





// var app = {
//     loginURL: 'http://api.minut.com/v1/oauth/token',
//     loginUserDataObject: { user: "rhp@example.com", password: "sn5wLV0lCGHj7A", client_id: "b2476a2909f68667", client_secret: "8c23a4179c932071a2ff9f6f7fc828f8", grant_type: "password_credentials" },
//     tempURL: 'http://api.minut.com/draft1/admin/devices/5ab27262b933c045e709ea9f/temperature',
//     authentication: null,
//     temperatures: [],
//     averagesFiveMinutes: []
// };


// function doLogin() {
//     $.post(app.loginURL, JSON.stringify(app.loginUserDataObject))
//     .done(function (tokenData) {
//         app.authentication = tokenData
//         alert('Login success!');
//     })
//     .fail(function () {
//         $(alert('Error during login to sensor').text('erro'));
//     });
// }


// function getTemperature() {
//     if (app.authentication == null) {
//         alert('You are not authenticated. Press LOGIN first!');
//         return false;
//     }

//     var getParamWithToken = {
//         type: 'GET',
//         contentType: 'json',
//         url: app.tempURL,
//         beforeSend: function(xhr, settings) {
//             xhr.setRequestHeader('Authorization','Bearer ' + app.authentication);
//         }
//     };
//     $.ajax(getParamWithToken)
//     .done(function (responseData) {
//         var temperatureData = Object.assign({ dateTime: moment() }, responseData);
//         app.temperatures.push(temperatureData);
//     })
//     .fail(function () {
//         alert('Error to retrieve temperature data');
//     });
// }

// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function generateFakeData() {
//     app.temperatures = [];
//     for (var h = 0; h < 24; h++) {
//         for (var m = 0; m < 60; m++) {
//             app.temperatures.push({
//                 dateTime: moment({ hour: h, minute: m }),
//                 temp: getRandomInt(15, 25) // office temperature
//             });
//         }
//     }
// }

// //date
// // var d = new Date();
// // var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// // document.getElementById("formatMomentDate").innerHTML = "Last Updated: " + d.getDate() + "/" + months[d.getMonth()] + "/" + d.getFullYear() + " - " + d.getHours() + ":" + (d.getMinutes()<10?'0':' ') + d.getMinutes();




// //temp

// function formatMomentDate(momentDate) {
//     return momentDate.format('DD/MM/YYYY HH:mm');
// }


// //NEED TODO

// function temperatureTest() {
//     var $container = $('#temperatureTest');
//     $container.empty();

//     if(app.temperature.length == 0) {
//         $container.append('No data');
//         return;
//     }
//     for (var i = 0; i < app.temperatures.length; i++) {
//         $container.append(app.temperatures[i].temp + ' °C');
//     }

// }



// function refreshTemperatures() {
//     var $container = $('#temperatureDataContainer');
//     $container.empty();

//     if (app.temperatures.length == 0) {
//         $container.append('There is no data to show');
//         return;
//     }

//     for (var i = 0; i < app.temperatures.length; i++) {
//         $container.append('Date: ' + formatMomentDate(app.temperatures[i].dateTime) + ' => ' + app.temperatures[i].temp + ' degrees <br />');
//     }
// }

// function findAverageTemperature(dateReference) {
//     var fiveMinutesBefore = dateReference.clone().subtract(5, 'minutes');
//     var sumOfFiveMinutes = 0;
//     var temperatures = app.temperatures.filter(function (temperatureObject) {
//         return temperatureObject.dateTime.isSameOrAfter(fiveMinutesBefore) && temperatureObject.dateTime.isSameOrBefore(dateReference);
//     });

//     for (var i = 0; i < temperatures.length; i++) {
//         sumOfFiveMinutes += temperatures[i].temp;
//     }

//     return { dateTime: dateReference, temp: Math.round(sumOfFiveMinutes / 6) };
// }


// function refreshAverageTemperatures() {
//     var $container = $('#temperatureDataResultContainer');
//     $container.empty();

//     if (app.temperatures.length == 0) {
//         $container.append('There is no data to show');
//         return;
//     }

//     for (var h = 0; h < 24; h++) {
//         for (var m = 0; m < 60; m++) {
//             if (h == 0 && m == 0) {
//                 continue;
//             }

//             if (m % 5 == 0) {
//                 var actualDateTime = moment({ hour: h, minute: m });
//                 var averageTemperature = findAverageTemperature(actualDateTime);
//                 $container.append('Date: ' + formatMomentDate(averageTemperature.dateTime) + ' => ' + averageTemperature.temp + ' degrees <br />');
//             }
//             // Check if is too hot

//         }
//     }
// }

// // refresh each second
// setInterval(function() {
//     refreshTemperatures();
//     refreshAverageTemperatures();
// }, 1000);


// // Canvas Temperature

// var DailyLine = ['05/06 3:00', '05/06 6:00', '05/06 9:00', '05/06 12:00', '05/06 15:00', '05/06 18:00', '05/06 21:00', '05/06 0:00'];
// var config = {
//     type: 'line',
//     data: {
//         labels: ['05/06 3:00', '05/06 6:00', '05/06 9:00', '05/06 12:00', '05/06 15:00', '05/06 18:00', '05/06 21:00', '05/06 0:00'],
//         datasets: [{
//             label: 'Upper',
//             backgroundColor: window.chartColors.red,
//             borderColor: window.chartColors.red,
//             data: [
//                 { x: new Date(2017,6,24), y: 20.8 },
//                 { x: new Date(2017,6,25), y: 20 },
//                 { x: new Date(2017,6,26), y: 25 },
//                 { x: new Date(2017,6,27), y: 21.5 },
//                 { x: new Date(2017,6,28), y: 19},
//                 { x: new Date(2017,6,25), y: 18.5 },
//                 { x: new Date(2017,6,29), y: 25 },
//                 { x: new Date(2017,6,30), y: 25 }
//             ],
//             fill: false,
//         }, {
//             label: 'Temperature Forecast',
//             fill: false,
//             backgroundColor: window.chartColors.yellow,
//             borderColor: window.chartColors.yellow,
//             data: [
//                 { x: new Date(2017,6,24), y: 18 },
//                 { x: new Date(2017,6,25), y: 18.5 },
//                 { x: new Date(2017,6,26), y: 23 },
//                 { x: new Date(2017,6,27), y: 20.2 },
//                 { x: new Date(2017,6,28), y: 16},
//                 { x: new Date(2017,6,25), y: 16.5 },
//                 { x: new Date(2017,6,29), y: 22 },
//                 { x: new Date(2017,6,30), y: 24 }
//             ],
//         }, {
//             label: 'Lower',
//             backgroundColor: window.chartColors.blue,
//             borderColor: window.chartColors.blue,
//             data: [
//                 { x: new Date(2017,6,24), y: 15 },
//                 { x: new Date(2017,6,25), y: 15.5 },
//                 { x: new Date(2017,6,26), y: 20 },
//                 { x: new Date(2017,6,27), y: 17.2 },
//                 { x: new Date(2017,6,28), y: 14},
//                 { x: new Date(2017,6,25), y: 15.5 },
//                 { x: new Date(2017,6,29), y: 20 },
//                 { x: new Date(2017,6,30), y: 22 }
//             ],
//             fill: false,
//         }]
//     },
//     options: {
//         responsive: true,
//         title: {
//             display: true,
//             text: 'Temperature Forecast'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Time'
//                 }
//             }],
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Degrees °C'
//                 }
//             }]
//         }
//     }
// };

// // Canvas Humidity
// var config2 = {
//     type: 'line',
//     data: {
//         labels: ['05/06 3:00', '05/06 6:00', '05/06 9:00', '05/06 12:00', '05/06 15:00', '05/06 18:00', '05/06 21:00', '05/06 0:00'],
//         datasets: [{
//             label: 'Lower',
//             backgroundColor: window.chartColors.red,
//             borderColor: window.chartColors.red,
//             data: [
//                 { x: new Date(2017,6,24), y: 40.8 },
//                 { x: new Date(2017,6,25), y: 60 },
//                 { x: new Date(2017,6,26), y: 55 },
//                 { x: new Date(2017,6,27), y: 41.5 },
//                 { x: new Date(2017,6,28), y: 67},
//                 { x: new Date(2017,6,25), y: 48.5 },
//                 { x: new Date(2017,6,29), y: 45 },
//                 { x: new Date(2017,6,30), y: 55 }
//             ],
//             fill: false,
//         }, {
//             label: 'Humidity Forecast',
//             fill: false,
//             backgroundColor: window.chartColors.yellow,
//             borderColor: window.chartColors.yellow,
//             data: [
//                 { x: new Date(2017,6,24), y: 38 },
//                 { x: new Date(2017,6,25), y: 48.5 },
//                 { x: new Date(2017,6,26), y: 52 },
//                 { x: new Date(2017,6,27), y: 38.2 },
//                 { x: new Date(2017,6,28), y: 60.8},
//                 { x: new Date(2017,6,25), y: 42.5 },
//                 { x: new Date(2017,6,29), y: 40 },
//                 { x: new Date(2017,6,30), y: 54 }
//             ],
//         }, {
//             label: 'Upper',
//             backgroundColor: window.chartColors.blue,
//             borderColor: window.chartColors.blue,
//             data: [
//                 { x: new Date(2017,6,24), y: 30 },
//                 { x: new Date(2017,6,25), y: 35.5 },
//                 { x: new Date(2017,6,26), y: 31 },
//                 { x: new Date(2017,6,27), y: 27.2 },
//                 { x: new Date(2017,6,28), y: 39},
//                 { x: new Date(2017,6,25), y: 30.5 },
//                 { x: new Date(2017,6,29), y: 30 },
//                 { x: new Date(2017,6,30), y: 32 }
//             ],
//             fill: false,
//         }]
//     },
//     options: {
//         responsive: true,
//         title: {
//             display: true,
//             text: 'Humidity Forecast'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Time'
//                 }
//             }],
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Humidity %'
//                 }
//             }]
//         }
//     }
// };

// // Canvas Sound
// var config3 = {
//     type: 'line',
//     data: {
//         labels: ['05/06 3:00', '05/06 6:00', '05/06 9:00', '05/06 12:00', '05/06 15:00', '05/06 18:00', '05/06 21:00', '05/06 0:00'],
//         datasets: [{
//             label: 'Lower',
//             backgroundColor: window.chartColors.red,
//             borderColor: window.chartColors.red,
//             data: [
//                 { x: new Date(2017,6,24), y: 4.8 },
//                 { x: new Date(2017,6,25), y: 6 },
//                 { x: new Date(2017,6,26), y: 5 },
//                 { x: new Date(2017,6,27), y: 4.5 },
//                 { x: new Date(2017,6,28), y: 6},
//                 { x: new Date(2017,6,25), y: 4.5 },
//                 { x: new Date(2017,6,29), y: 4 },
//                 { x: new Date(2017,6,30), y: 5 }
//             ],
//             fill: false,
//         }, {
//             label: 'Sound Forecast',
//             fill: false,
//             backgroundColor: window.chartColors.yellow,
//             borderColor: window.chartColors.yellow,
//             data: [
//                 { x: new Date(2017,6,24), y: 3 },
//                 { x: new Date(2017,6,25), y: 4.5 },
//                 { x: new Date(2017,6,26), y: 5 },
//                 { x: new Date(2017,6,27), y: 3.2 },
//                 { x: new Date(2017,6,28), y: 4.8},
//                 { x: new Date(2017,6,25), y: 3.5 },
//                 { x: new Date(2017,6,29), y: 3.5 },
//                 { x: new Date(2017,6,30), y: 4 }
//             ],
//         }, {
//             label: 'Upper',
//             backgroundColor: window.chartColors.blue,
//             borderColor: window.chartColors.blue,
//             data: [
//                 { x: new Date(2017,6,24), y: 3 },
//                 { x: new Date(2017,6,25), y: 3.5 },
//                 { x: new Date(2017,6,26), y: 3 },
//                 { x: new Date(2017,6,27), y: 2.2 },
//                 { x: new Date(2017,6,28), y: 3},
//                 { x: new Date(2017,6,25), y: 3.5 },
//                 { x: new Date(2017,6,29), y: 3 },
//                 { x: new Date(2017,6,30), y: 3 }
//             ],
//             fill: false,
//         }]
//     },
//     options: {
//         responsive: true,
//         title: {
//             display: true,
//             text: 'Sound Forecast'
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'nearest',
//             intersect: true
//         },
//         scales: {
//             xAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Time'
//                 }
//             }],
//             yAxes: [{
//                 display: true,
//                 scaleLabel: {
//                     display: true,
//                     labelString: 'Sound in dB'
//                 }
//             }]
//         }
//     }
// };

// window.onload = function() {
//     var ctx = document.getElementById('canvas1').getContext('2d');
//     window.myLine = new Chart(ctx, config);
//     var ctx = document.getElementById('canvas2').getContext('2d');
//     window.myLine = new Chart(ctx, config2);
//     var ctx = document.getElementById('canvas3').getContext('2d');
//     window.myLine = new Chart(ctx, config3);
// };

// var colorNames = Object.keys(window.chartColors);




