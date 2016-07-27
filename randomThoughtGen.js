'use strict';

// FILTERS THAT'LL BE USED WHILE FETCHING RANDOM THOUGHTS
var time = ["hour", "day", "week", "month", "year", "all"];
var sort = ["relevance", "hot", "top", "new"];

// FLAG THAT'LL PREVENT THE USER FROM DEMOLISHING THE REFRESH BUTTON
var hasClicked = 0;

window.onload = positionShareButton;
window.onresize = positionShareButton;

// POSITION THE SHARE BUTTON RIGHT BENEATH THE QUOTE -- SHOULD BE CROSS BROWSER COMPATIBLE (TBD) 
function positionShareButton() {
  var el = document.getElementById("data");

  document.getElementById("fb-share").style.top = el.clientHeight + el.offsetTop + "px";
  $("#fb-share").fadeIn("slow");
};

// GENERATE RANDOM COLOR ON PAGE LOAD
document.getElementById("container").style.backgroundColor = generateRandomBackgroundColor();

var snoowrap = require('snoowrap');

// THE DEVELOPER MUST FILL THE BELOW FIELDS
const r = new snoowrap({
    user_agent: 'randomThoughtGen',
    client_id: 'G-Fiylcbwxf7KQ',
    client_secret: 'mqA5dMpge5oyHy7C1BllU7SuKkY',
    username: 'my_biscuit',
    password: 'h1dustan'
  });

function getRandomThought() {
  fadeOut(fadeIn);
  var timeIndex = Math.floor(Math.random() * time.length);
  var sortIndex = Math.floor(Math.random() * sort.length);

  r.get_subreddit("Showerthoughts").search({query: "", time: ""+timeIndex, sort: ""+sortIndex}).then(function(value) {
    var index = Math.floor(Math.random() * value.length);
    document.getElementById("data").innerHTML = value[index].title;
    hasClicked = 0;
  });
}

// FADE OUT EFFECT FOR THE BACKGROUND CONTAINER
function fadeOut(fadeIn) {
  var elem = document.getElementById("container");
  var opacity = 10;
  var id = setInterval(frame, 120);
  function frame() {
    if (opacity == 0) {
      clearInterval(id);
    } else {
      opacity--;
      elem.style.opacity = opacity / 10;
    }
  }
  if(typeof fadeIn == 'function')
    fadeIn();
}

// FADE IN EFFECT FOR THE BACKGROUND CONTAINER
function fadeIn() {
  var elem = document.getElementById("container");
  var opacity = 0;
  var id = setInterval(frame, 120);
  function frame() {
    if (opacity == 10) {
      clearInterval(id);
    } else {
      opacity++;
      elem.style.opacity = opacity / 10;
    }
  }
}

// RESPOND TO REFRESH
document.getElementById("clickMe").onclick = function() {
  if(hasClicked == 0) {
    getRandomThought();
    hasClicked = 1;
  } else {
    // A MESSAGE NOTIFYING THE USER TO HOLD THE PHONE
  }
}

// GENERATE A RANDOM COLOR FOR THE BACKGROUND
function generateRandomBackgroundColor() {
  var hexVal =  Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hexVal.toString(16)).substr(-6);
}