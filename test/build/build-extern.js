/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!********************!*\
  !*** ./js/test.js ***!
  \********************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	// import ol = require("custom-ol");
	var ol = __webpack_require__(/*! custom-ol */ 1);
	/**
	 * Created by glenn on 3/7/2017.
	 */
	// import * as ol from 'custom-ol';
	//
	// import ol = require('custom-ol');
	//
	// ol
	//
	console.log(ol.Map);
	console.log('here');
	console.log('here');
	console.log('here');
	//# sourceMappingURL=test.js.map

/***/ },
/* 1 */
/*!*********************!*\
  !*** external "ol" ***!
  \*********************/
/***/ function(module, exports) {

	module.exports = ol;

/***/ }
/******/ ]);
//# sourceMappingURL=build-extern.js.map