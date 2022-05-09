/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/avatar.png":
/*!************************!*\
  !*** ./src/avatar.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"data:image/png;base64,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\");\n\n//# sourceURL=webpack:///./src/avatar.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _avatar_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.png */ \"./src/avatar.png\");\n\r\nvar img = new Image();\r\nimg.src = _avatar_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\nvar root = document.getElementById('root')\r\nroot.append(img);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });