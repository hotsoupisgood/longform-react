/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// import React from 'react';
	// import ReactDOM from 'react-dom';

	var Navigation = __webpack_require__(1);
	var AddPodcast = __webpack_require__(3);
	var PodcastPlayer = __webpack_require__(4);

	// require('./AddPodcast');
	// require('./PodcastLink');
	// require('./PodcastPage');
	// require('./PodcastPlayer');

	//
	var Layout = React.createClass({
	  displayName: 'Layout',

	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'container-col' },
	      React.createElement(Navigation, null),
	      React.createElement(AddPodcast, null),
	      React.createElement(PodcastPlayer, null)
	    )
	    // <AddPodcast/>

	    ;
	  }
	});

	ReactDOM.render(React.createElement(Layout, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var PodcastLink = __webpack_require__(2);
	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "nav",
	      null,
	      React.createElement(
	        "div",
	        { className: "container-row" },
	        React.createElement(
	          "ul",
	          null,
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "a",
	              { href: "page.html" },
	              "Longform"
	            )
	          ),
	          React.createElement(
	            "li",
	            null,
	            React.createElement(
	              "button",
	              { id: "refresh" },
	              " refresh "
	            )
	          ),
	          React.createElement(
	            PodcastLink,
	            null,
	            "Now Playing: "
	          )
	        )
	      )
	    );
	  }
	});
	function Start() {
	  $('#refresh').click(function () {
	    $.ajax({ url: "php/refresh.php",
	      success: function success(result) {
	        console.log('result: ' + result);
	      },
	      error: function error(XMLHttpRequest, textStatus, errorThrown) {
	        console.log('error: ' + errorThrown);
	      }
	    });
	  });
	}

	$(Start);

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "li",
	      { className: "container-row" },
	      React.createElement(
	        "h2",
	        null,
	        this.props.children.toString()
	      )
	    );
	  }
	});

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { id: "addPodcastForm", className: "padding-a container-col center-horizontal border-thin-black" },
	      React.createElement(
	        "div",
	        { className: "padding-a container-row center-horizontal" },
	        React.createElement(
	          "label",
	          null,
	          "add podcast: "
	        ),
	        React.createElement("input", { id: "location", className: "fill-space", placeholder: "(ex: http://feeds.gimletmedia.com/hearstartup)", type: "text", name: "location", required: true })
	      ),
	      React.createElement(
	        "div",
	        { className: "padding-a container-row center-horizontal" },
	        React.createElement(
	          "button",
	          { id: "addPodcastButton", type: "submit", className: "fill-space" },
	          "submit"
	        )
	      )
	    );
	  }
	});
	$(document).ready(function () {
	  $('#addPodcastButton').click(function () {
	    var podcastLocation = $('#location').val();
	    console.log('pre: ' + podcastLocation + '\n');
	    $.post("php/addPodcast.php", {
	      location: podcastLocation
	    }, function (data, status) {
	      console.log("Data: " + data + "\nStatus: " + status);
	    });
	    // $.ajax({
	    //         url: "php/addPodcast.php",
	    //         params: {'location': $('#location').val()},
	    //         success: function(result){
	    //           console.log('result: ' + result);
	    //         },
	    //         error: function(XMLHttpRequest, textStatus, errorThrown) {
	    //           console.log('error: ' + errorThrown);
	    //         }
	    //       });
	  });
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var audioElement = document.createElement('audio');

	module.exports = React.createClass({
	  displayName: "exports",

	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "container-col border-thin-black fill-space" },
	      React.createElement(
	        "div",
	        { className: "padding-a container-row center-horizontal" },
	        React.createElement(
	          "button",
	          { id: "ToggleStart", type: "button" },
	          "play"
	        ),
	        React.createElement(
	          "button",
	          { id: "ToggleStop", type: "button" },
	          "pause"
	        )
	      )
	    );
	  }
	});
	function Start() {

	  audioElement.setAttribute('src', 'http://www.mfiles.co.uk/mp3-downloads/Toccata-and-Fugue-Dm.mp3');

	  $('#ToggleStart').click(function () {
	    audioElement.play();
	  });

	  $('#ToggleStop').click(function () {
	    audioElement.pause();
	  });
	}

	$(Start);

/***/ }
/******/ ]);