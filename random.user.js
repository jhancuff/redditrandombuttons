// ==UserScript==
// @name       Reddit Random
// @version    0.1
// @description  Add random button
// @match      https://www.reddit.com/*
// @author     everyone
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
   var rand = document.getElementById('header');
  $(rand).append('<a href="http://www.reddit.com/r/random">random</a>&nbsp;&nbsp;');
});
