var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var snaptime = lunchtime + 2;
var partytime;
var evening = 10;

// Getting it to show the current time on the page

var showCurrentTime = function () {
    // display the string on the webpage
    var clock = document.getElementById("clock");

    var currentTime = newDate();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
};
