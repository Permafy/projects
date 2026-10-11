var GUI =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"credits": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/playground/credits/credits.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player~playground"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/postcss-loader/src??postcss!./src/playground/credits/credits.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body[coloraccent=\"Gaia Blue\"] {\n--ui-modal-overlay: hsla(240, 100%, 65%, 0.9); /* 90% transparent version of motion-primary */\n\n--motion-primary: #8cafff;\n--motion-tertiary: hsla(240, 65%, 30%, 1); /* #007bc7 */\n--motion-transparent: hsla(240, 100%, 50%, 0.35); /* 35% transparent version of motion-primary */\n--motion-light-transparent: hsla(237, 100%, 39%, 0.15); /* 15% transparent version of motion-primary */\n\n/* opt-in theme overrides */\n--motion-primary-dark: #8cafff;\n--motion-dark-transparent: hsla(240, 65%, 40%, 0.40); /*top bar color when in dark mode*/\n\n--red-primary: hsla(240, 65%, 50%, 1); /* #00c3ff */\n--red-tertiary: hsla(240, 65%, 30%, 1); /* #007bc7 */\n\n--extensions-primary: hsla(240, 100%, 50%, 1);\n--extensions-tertiary: hsla(237, 100%, 39%, 1);\n--extensions-transparent: hsla(240, 100%, 50%, 0.35); /* 35% transparent version of extensions-primary */\n--extensions-light: hsla(237, 100%, 39%, 1); /* opaque version of extensions-transparent, on white bg */\n\n--drop-highlight: hsla(240, 100%, 77%, 1); /* lighter than motion-primary */\n\n--menu-bar-background: var(--motion-primary);\n--menu-bar-background-dark: var(--motion-primary-dark);\n\n--menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Lime Green\"] {\n    --motion-primary: hsla(92, 91%, 53%, 1); /* #00c3ff */\n    --motion-tertiary: hsla(92, 80%, 43%, 1); /* #007bc7 */\n    --motion-transparent: hsla(92, 92%, 53%, 0.35); /* 35% transparent version of motion-primary */\n    --motion-light-transparent: hsla(92, 80%, 43%, 0.15); /* 15% transparent version of motion-primary */\n\n    --paint-motion-primary: hsla(92, 91%, 53%, 1); /* #00c3ff */\n    --paint-motion-tertiary: hsla(92, 80%, 43%, 1); /* #007bc7 */\n    --paint-motion-transparent: hsla(92, 92%, 53%, 0.35); /* 35% transparent version of motion-primary */\n\n    /* opt-in theme overrides */\n    --motion-primary-dark: hsla(84, 100%, 41%, 1); /*top bar color when in dark mode*/ /*when it doesn't work. change back: hsla(92, 91%, 53%, 1)*/\n    --motion-dark-transparent: hsla(84, 100%, 41%, 0.40); /*top bar color when in dark mode*/ /*when it doesn't work. change back: hsla(92, 91%, 53%, 1)*/\n\n    --extensions-primary: hsla(92, 91%, 53%, 1);\n    --extensions-tertiary: hsla(92, 80%, 43%, 1);\n    --extensions-transparent: hsla(92, 91%, 53%, 0.35); /* 35% transparent version of extensions-primary */\n    --extensions-light: hsla(92, 80%, 43%, 1); /* opaque version of extensions-transparent, on white bg */\n\n    --drop-highlight: hsla(92, 91%, 59%, 1); /* lighter than motion-primary */\n\n    /* menu bar colors */\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Light Blue\"] {\n    --motion-primary: hsla(194, 100%, 50%, 1);\n    --motion-tertiary: hsla(203, 100%, 39%, 1);\n    --motion-transparent: hsla(203, 100%, 39%, 0.35);\n    --motion-light-transparent: hsla(203, 100%, 39%, 0.15);\n\n    --paint-motion-primary: hsla(194, 100%, 50%, 1);\n    --paint-motion-tertiary: hsla(203, 100%, 39%, 1);\n    --paint-motion-transparent: hsla(203, 100%, 39%, 0.35);\n\n    --motion-primary-dark: #009CCC;\n    --motion-dark-transparent: #009CCC57;\n\n    --extensions-primary: hsla(194, 100%, 50%, 1);\n    --extensions-tertiary: hsla(203, 100%, 39%, 1);\n    --extensions-transparent: hsla(194, 100%, 50%, 0.35);\n    --extensions-light: hsla(203, 100%, 39%, 1);\n    \n    --drop-highlight: hsla(203, 100%, 39%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Red\"] {\n    --motion-primary: #ff4c4c;\n    --motion-tertiary: #cc3333;\n    --motion-transparent: #ff4c4c57;\n    --motion-light-transparent: #cc333326;\n\n    --paint-motion-primary: #ff4c4c;\n    --paint-motion-tertiary: #cc3333;\n    --paint-motion-transparent: #ff4c4c57;\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: hsla(10, 85%, 65%, 1);\n    --extensions-tertiary: hsla(10, 85%, 40%, 1);\n    --extensions-transparent: hsla(10, 85%, 65%, 0.35);\n    --extensions-light: hsla(10, 57%, 85%, 1);\n    \n    --drop-highlight: #ff8c8c;\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Blue\"] {\n    --motion-primary: hsla(215, 100%, 65%, 1);\n    --motion-tertiary: hsla(215, 60%, 50%, 1);\n    --motion-transparent: hsla(215, 100%, 65%, 0.35);\n    --motion-light-transparent: hsla(215, 60%, 50%, 0.15);\n\n    --paint-motion-primary: hsla(215, 100%, 65%, 1);\n    --paint-motion-tertiary: hsla(215, 60%, 50%, 1);\n    --paint-motion-transparent: hsla(215, 100%, 65%, 0.35);\n\n    --motion-primary-dark: #333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: hsla(163, 85%, 40%, 1);\n    --extensions-tertiary: hsla(163, 85%, 30%, 1);\n    --extensions-transparent: hsla(163, 85%, 40%, 0.35);\n    --extensions-light: hsla(163, 57%, 85%, 1);\n    \n    --drop-highlight: hsla(215, 100%, 77%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Corrupted Blue\"] {\n    --motion-primary: #625e97;\n    --motion-tertiary: hsla(203, 100%, 17%, 1);\n    --motion-transparent: hsla(215, 100%, 11%, 0.35);\n    --motion-light-transparent: hsla(203, 100%, 17%, 0.15);\n\n    --paint-motion-primary: #625e97;\n    --paint-motion-tertiary: hsla(203, 100%, 17%, 1);\n    --paint-motion-transparent: hsla(215, 100%, 11%, 0.35);\n\n    --motion-primary-dark: #2a293f;\n    --motion-dark-transparent: #2a293f57;\n\n    --extensions-primary: hsla(194, 100%, 50%, 1);\n    --extensions-tertiary: hsla(203, 100%, 39%, 1);\n    --extensions-transparent: hsla(194, 100%, 50%, 0.35);\n    --extensions-light: hsla(203, 100%, 39%, 1);\n    \n    --drop-highlight: hsla(240, 100%, 77%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Scratch\"] {\n    --motion-primary: hsla(260, 60%, 60%, 1);\n    --motion-tertiary: hsla(260, 42%, 51%, 1);\n    --motion-transparent: hsla(260, 60%, 60%, 0.35);\n    --motion-light-transparent: hsla(260, 42%, 51%, 0.15);\n\n    --paint-motion-primary: hsla(260, 60%, 60%, 1);\n    --paint-motion-tertiary: hsla(260, 42%, 51%, 1);\n    --paint-motion-transparent: hsla(260, 60%, 60%, 0.35);\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: hsla(163, 85%, 40%, 1);\n    --extensions-tertiary: hsla(163, 85%, 30%, 1);\n    --extensions-transparent: hsla(163, 85%, 40%, 0.35);\n    --extensions-light: hsla(163, 57%, 85%, 1);\n    \n    --drop-highlight: hsla(215, 100%, 77%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Magenta\"] {\n    --motion-primary: hsla(289, 100%, 54%, 1);\n    --motion-tertiary: hsla(289, 100%, 39%, 1);\n    --motion-transparent: hsla(289, 100%, 54%, 0.35);\n    --motion-light-transparent: hsla(289, 100%, 39%, 0.15);\n\n    --paint-motion-primary: hsla(289, 100%, 54%, 1);\n    --paint-motion-tertiary: hsla(289, 100%, 39%, 1);\n    --paint-motion-transparent: hsla(289, 100%, 54%, 0.35);\n\n    --motion-primary-dark: #57039c;\n    --motion-dark-transparent: #57039c57;\n\n    --extensions-primary: hsla(289, 100%, 50%, 1);\n    --extensions-tertiary: hsla(289, 100%, 39%, 1);\n    --extensions-transparent: hsla(289, 100%, 50%, 0.35);\n    --extensions-light: hsla(289, 100%, 39%, 1);\n    \n    --drop-highlight: hsla(289, 100%, 64%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Pink\"] {\n    --motion-primary: hsla(325, 60%, 60%, 1);\n    --motion-tertiary: hsla(325, 60%, 40%, 0.9);\n    --motion-transparent: hsla(325, 42%, 51%, 0.35);\n    --motion-light-transparent: hsla(325, 60%, 83%, 0.15);\n\n    --paint-motion-primary: hsla(289, 100%, 54%, 1);\n    --paint-motion-tertiary: hsla(289, 100%, 39%, 1);\n    --paint-motion-transparent: hsla(289, 100%, 54%, 0.35);\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: hsla(325, 60%, 60%, 1);\n    --extensions-tertiary: hsla(325, 60%, 60%, 1);\n    --extensions-transparent: hsla(325, 42%, 51%, 0.35);\n    --extensions-light: hsla(325, 60%, 83%, 1);\n    \n    --drop-highlight: hsla(325, 60%, 64%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Serene Blue\"] {\n    --motion-primary: hsla(261, 100%, 50%, 1);\n    --motion-tertiary: hsla(261, 100%, 39%, 1);\n    --motion-transparent: hsla(261, 100%, 50%, 0.35);\n    --motion-light-transparent: hsla(261, 100%, 50%, 0.15);\n\n    --motion-primary-dark: rgba(89, 0, 255);\n    --motion-dark-transparent: rgba(89, 0, 255, 57);\n\n    --extensions-primary: hsla(261, 100%, 50%, 1));\n    --extensions-tertiary: hsla(261, 100%, 39%, 1);\n    --extensions-transparent: hsla(261, 100%, 50%, 0.35);\n    --extensions-light: hsla(261, 100%, 50%, 1);\n    \n    --drop-highlight: hsla(261, 100%, 77%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Gray Purple\"] {\n    --motion-primary: hsla(244, 23%, 48%, 1);\n    --motion-tertiary: hsla(244, 23%, 38%, 0.9);\n    --motion-transparent: hsla(244, 23%, 48%, 0.35);\n    --motion-light-transparent: hsla(262, 22%, 59%, 0.15);\n\n    --paint-motion-primary: hsla(244, 23%, 48%, 1);\n    --paint-motion-tertiary: hsla(244, 23%, 39%, 1);\n    --paint-motion-transparent: hsla(244, 23%, 54%, 0.35);\n\n    --motion-primary-dark: hsla(243, 21%, 20%, 1);\n    --motion-dark-transparent: hsla(243, 21%, 20%, 0.40);\n\n    --extensions-primary: hsla(244, 23%, 48%, 1);\n    --extensions-tertiary: hsla(244, 23%, 38%, 0.9);\n    --extensions-transparent: hsla(244, 23%, 48%, 0.35);\n    --extensions-light: hsla(262, 22%, 59%, 1);\n    \n    --drop-highlight: hsla(262, 25%, 58%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Gold\"] {\n    --motion-primary: hsla(46, 100%, 64%, 1);\n    --motion-tertiary: hsla(46, 100%, 50%, 0.9);\n    --motion-transparent: hsla(46, 100%, 64%, 0.35);\n    --motion-light-transparent: hsla(46, 100%, 83%, 0.15);\n\n    --motion-primary-dark: hsla(46, 100%, 42%, 1);\n    --motion-dark-transparent: hsla(46, 100%, 42%, 0.40);\n\n    --extensions-primary: hsla(46, 100%, 60%, 1);\n    --extensions-tertiary: hsla(46, 100%, 50%, 1);\n    --extensions-transparent: hsla(46, 100%, 64%, 0.35);\n    --extensions-light: hsla(46, 100%, 83%, 1);\n    \n    --drop-highlight: hsla(46, 100%, 64%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Silver\"] {\n    --motion-primary: hsla(268, 0%, 73%, 1);\n    --motion-tertiary: hsla(268, 0%, 50%, 0.9);\n    --motion-transparent: hsla(268, 0%, 64%, 0.35);\n    --motion-light-transparent: hsla(268, 0%, 83%, 0.15);\n\n    --motion-primary-dark: hsla(268, 0%, 42%, 1);\n    --motion-dark-transparent: hsla(268, 0%, 42%, 0.40);\n\n    --extensions-primary: hsla(268, 0%, 60%, 1);\n    --extensions-tertiary: hsla(268, 0%, 50%, 1);\n    --extensions-transparent: hsla(268, 0%, 64%, 0.35);\n    --extensions-light: hsla(268, 0%, 83%, 1);\n    \n    --drop-highlight: hsla(268, 0%, 64%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Black\"] {\n    --motion-primary: hsla(268, 0%, 24%, 1);\n    --motion-tertiary: hsla(268, 0%, 20%, 0.9);\n    --motion-transparent: hsla(268, 0%, 23%, 0.35);\n    --motion-light-transparent: hsla(268, 0%, 30% 0.15);\n\n    --motion-primary-dark: hsla(268, 0%, 10%, 1);\n    --motion-dark-transparent: hsla(268, 0%, 10%, 0.40);\n\n    --extensions-primary: hsla(268, 0%, 24%, 1);\n    --extensions-tertiary: hsla(268, 0%, 20%, 1);\n    --extensions-transparent: hsla(268, 0%, 23%, 0.35);\n    --extensions-light: hsla(268, 0%, 30%, 1);\n    \n    --drop-highlight: hsla(268, 0%, 28%, 1);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Rainbow\"] {\n    --motion-primary: #ff4c4c;\n    --motion-tertiary: #cc3333;\n    --motion-transparent: #ff4c4c57;\n    --motion-light-transparent: #cc333326;\n\n    --paint-motion-primary: #ff4c4c;\n    --paint-motion-tertiary: #cc3333;\n    --paint-motion-transparent: #ff4c4c57;\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: hsla(10, 85%, 65%, 1);\n    --extensions-tertiary: hsla(10, 85%, 40%, 1);\n    --extensions-transparent: hsla(10, 85%, 65%, 0.35);\n    --extensions-light: hsla(10, 57%, 85%, 1);\n    \n    --drop-highlight: #ff8c8c;\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: linear-gradient(90deg, rgba(255, 0, 0, 0.75) 0%, rgba(255, 154, 0, 0.75) 10%, rgba(208, 222, 33, 0.75) 20%, rgba(79, 220, 74, 0.75) 30%, rgba(63, 218, 216, 0.75) 40%, rgba(47, 201, 226, 0.75) 50%, rgba(28, 127, 238, 0.75) 60%, rgba(95, 21, 242, 0.75) 70%, rgba(186, 12, 248, 0.75) 80%, rgba(251, 7, 217, 0.75) 90%, rgba(255, 0, 0, 0.75) 100%);\n}\n\nbody[coloraccent=\"Cotton Candy\"] {\n    --motion-primary: #FF80C4;\n    --motion-tertiary: #DB61A2;\n    --motion-transparent: #FF80C4e6;\n    --motion-light-transparent: #FF73B026;\n\n    --paint-motion-primary: #FF80C4;\n    --paint-motion-tertiary: #DB61A2;\n    --paint-motion-transparent: #FF80C4e6;\n\n    --motion-primary-dark: #BF4888;\n    --motion-dark-transparent: #BF488857;\n\n    --extensions-primary: #88D4F2;\n    --extensions-tertiary: #6C97D4;\n    --extensions-transparent: #74D3F235;\n    --extensions-light: #BAE2F2;\n    \n    --drop-highlight: #FF94DA;\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: linear-gradient(to right, #91d3ff 0%, #ff91e2 100%);\n}\n\nbody[coloraccent=\"Nebula\"] {\n    --motion-primary: oklab(0.55 0.08 -0.12);\n    --motion-tertiary: oklab(0.60 0.06 -0.10);\n    --motion-transparent: oklab(0.60 0.06 -0.12 / 0.75);\n    --motion-light-transparent: oklab(0.66 0.08 -0.12 / 0.75);\n\n    --paint-motion-primary: #865AF8;\n    --paint-motion-tertiary: #693FD6;\n    --paint-motion-transparent: #865AF857;\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: oklab(0.60 0.06 -0.10);\n    --extensions-tertiary: oklab(0.50 0.12 0.04);\n    --extensions-transparent: oklab(0.60 0.06 -0.10 / 0.35);\n    --extensions-light: oklab(0.70 0.04 -0.08);\n    \n    --drop-highlight: oklab(0.55 0.08 -0.12);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: linear-gradient(90deg, oklab(0.25 0.02 -0.08 / 0.9) 0%, oklab(0.35 0.08 -0.12 / 0.85) 15%, oklab(0.45 0.12 -0.08 / 0.8) 30%, oklab(0.55 0.15 0.02 / 0.8) 50%, oklab(0.65 0.08 0.08 / 0.8) 70%, oklab(0.75 0.02 0.12 / 0.8) 85%, oklab(0.85 -0.02 0.08 / 0.8) 100%);\n}\n\nbody[coloraccent=\"Cosmic\"] {\n    --motion-primary: oklab(0.68 0.15 -0.08);\n    --motion-tertiary: oklab(0.72 0.12 -0.06);\n    --motion-transparent: oklab(0.68 0.15 -0.08 / 0.75);\n    --motion-light-transparent: oklab(0.78 0.15 -0.08 / 0.75);\n\n    --paint-motion-primary: #D36CC6;\n    --paint-motion-tertiary: #A8459C;\n    --paint-motion-transparent: #D36CC657;\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: oklab(0.72 0.12 -0.06);\n    --extensions-tertiary: oklab(0.65 0.08 -0.12);\n    --extensions-transparent: oklab(0.72 0.12 -0.06 / 0.35);\n    --extensions-light: oklab(0.78 0.08 -0.04);\n    \n    --drop-highlight: oklab(0.68 0.15 -0.08);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: linear-gradient(90deg, oklab(0.45 0.08 -0.15 / 0.8) 0%, oklab(0.55 0.12 -0.12 / 0.8) 20%, oklab(0.65 0.15 -0.08 / 0.8) 40%, oklab(0.70 0.12 -0.04 / 0.8) 60%, oklab(0.65 0.05 -0.10 / 0.8) 80%, oklab(0.60 -0.02 -0.12 / 0.8) 100%);\n}\n\nbody[coloraccent=\"Aurora\"] {\n    --motion-primary: oklab(0.70 -0.10 0.08);\n    --motion-primary-transparent: oklab(0.70 -0.10 0.08 / 0.75);\n    --motion-tertiary: oklab(0.75 -0.08 0.06);\n\t--motion-light-transparent: oklab(0.80 -0.10 0.08 / 0.75);\n\n    --paint-motion-primary: #6FB265;\n    --paint-motion-tertiary: #4B8C41;\n    --paint-motion-transparent: #6FB26557;\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: oklab(0.75 -0.08 0.06);\n    --extensions-tertiary: oklab(0.65 -0.06 -0.08);\n    --extensions-transparent: oklab(0.75 -0.08 0.06 / 0.35);\n    --extensions-light: oklab(0.80 -0.04 0.04);\n    \n    --drop-highlight: oklab(0.70 -0.10 0.08);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: linear-gradient(90deg, oklab(0.65 -0.12 0.10 / 0.8) 0%, oklab(0.70 -0.10 0.05 / 0.8) 20%, oklab(0.65 -0.08 -0.05 / 0.8) 40%, oklab(0.60 -0.06 -0.10 / 0.8) 60%, oklab(0.55 0.02 -0.12 / 0.8) 80%, oklab(0.60 0.08 -0.08 / 0.8) 100%);\n}\n\nbody[coloraccent=\"Mint\"] {\n    --motion-primary: oklab(0.78 -0.12 0.08);\n    --motion-primary-transparent: oklab(0.78 -0.12 0.08 / 0.75);\n    --motion-tertiary: oklab(0.80 -0.10 0.06);\n\t--motion-light-transparent: oklab(0.85 -0.12 0.08 / 0.75);\n\n    --paint-motion-primary: #75D07E;\n    --paint-motion-tertiary: #50A859;\n    --paint-motion-transparent: #75D07E57;\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: oklab(0.80 -0.10 0.06);\n    --extensions-tertiary: oklab(0.75 -0.08 -0.02);\n    --extensions-transparent: oklab(0.80 -0.10 0.06 / 0.35);\n    --extensions-light: oklab(0.85 -0.06 0.04);\n    \n    --drop-highlight: oklab(0.78 -0.12 0.08);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: linear-gradient(90deg, oklab(0.75 -0.14 0.10 / 0.8) 0%, oklab(0.78 -0.12 0.08 / 0.8) 20%, oklab(0.80 -0.10 0.04 / 0.8) 40%, oklab(0.82 -0.08 0.00 / 0.8) 60%, oklab(0.80 -0.06 -0.04 / 0.8) 80%, oklab(0.75 -0.04 -0.08 / 0.8) 100%);\n}\n\nbody[coloraccent=\"Cherry\"] {\n    --motion-primary: oklab(0.70 0.18 0.08);\n    --motion-primary-transparent: oklab(0.70 0.18 0.08 / 0.75);\n    --motion-tertiary: oklab(0.72 0.16 0.10);\n\t--motion-light-transparent: oklab(0.82 0.18 0.08 / 0.75);\n\n    --paint-motion-primary: #FF605F;\n    --paint-motion-tertiary: #C43130;\n    --paint-motion-transparent: #FF605F57;\n\n    --motion-primary-dark: #333333;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: oklab(0.72 0.16 0.10);\n    --extensions-tertiary: oklab(0.68 0.14 0.04);\n    --extensions-transparent: oklab(0.72 0.16 0.10 / 0.35);\n    --extensions-light: oklab(0.78 0.12 0.12);\n    \n     --drop-highlight: oklab(0.70 0.18 0.08);\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image:\n        linear-gradient(90deg, oklab(0.65 0.20 0.06 / 0.8) 0%, oklab(0.70 0.18 0.08 / 0.8) 20%, oklab(0.72 0.16 0.12 / 0.8) 40%, oklab(0.75 0.14 0.14 / 0.8) 60%, oklab(0.78 0.12 0.08 / 0.8) 80%, oklab(0.80 0.08 0.04 / 0.8) 100%);\n}\n\nbody[coloraccent=\"NIGHTMARE\"] {\n--motion-primary: #5E0000;\n--motion-tertiary: #470000; /* #007bc7 */\n--motion-transparent: #540000; /* 35% transparent version of motion-primary */\n--motion-light-transparent: #8F0000; /* 15% transparent version of motion-primary */\n\n    --paint-motion-primary: #ff0000;\n    --paint-motion-tertiary: #d60000;\n    --paint-motion-transparent: #ff000057;\n\n    --motion-primary-dark: #3D0000;\n    --motion-dark-transparent: #33333357;\n\n    --extensions-primary: rgb(0, 0, 0);\n    --extensions-tertiary: rgb(47, 8, 0);\n    --extensions-transparent: hsla(0, 0%, 0%, 0.35);\n    --extensions-light: rgb(255, 141, 119);\n    \n    --drop-highlight: #000000;\n\n    --menu-bar-background: var(--motion-primary);\n    --menu-bar-background-dark: var(--motion-primary-dark);\n\n    --menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"Partytime\"] {\n--ui-modal-overlay: #FF5EFC90; /* 90% transparent version of motion-primary */\n\n--motion-primary: #CAB5F5; /* #00c3ff */\n--motion-tertiary: #9E7FDE; /* #007bc7 */\n--motion-transparent: #CAB5F535; /* 35% transparent version of motion-primary */\n--motion-light-transparent: #DFD4F515; /* 15% transparent version of motion-primary */\n\n/* opt-in theme overrides */\n--motion-primary-dark: #866ABF; /*top bar color when in dark mode*/\n--motion-dark-transparent: #866ABF40; /*top bar color when in dark mode*/\n\n--red-primary: #CAB5F5; /* #00c3ff */\n--red-tertiary: #9E7FDE; /* #007bc7 */\n\n--extensions-primary: #FF00CC;\n--extensions-tertiary: #CC009E;\n--extensions-transparent: #FF00CC35; /* 35% transparent version of extensions-primary */\n--extensions-light: #FF73E3; /* opaque version of extensions-transparent, on white bg */\n\n--drop-highlight: #DFD4F5; /* lighter than motion-primary */\n\n--menu-bar-background: var(--motion-primary);\n--menu-bar-background-dark: var(--motion-primary-dark);\n\n--menu-bar-background-image: none;\n}\n\nbody[coloraccent=\"custom\"] {\n    \n}\n\n/* #E5F0FF */\n\n/* #E9F1FC */\n\n/* #D9E3F2 */\n\n/* 90% transparent version of motion-primary */\n\n/* #FFFFFF */\n\n/* 25% transparent version of ui-white */\n\n/* 25% transparent version of ui-white */\n\n/* 25% transparent version of ui-white */\n\n/* #FFFFFF */\n\n/* #FFFFFF */\n\n/* 15% transparent version of black */\n\n/* #FFFFFF */\n\n/* #FFFFFF */\n\n/* 15% transparent version of black */\n\n/* #575E75 */\n\n/* #007bc7 */\n\n/* 35% transparent version of motion-primary */\n\n/* 15% transparent version of motion-primary */\n\n/* opt-in theme overrides */\n\n/*top bar color when in dark mode*/\n\n/*when it doesn't work. change back: hsla(92, 91%, 53%, 1)*/\n\n/* #00c3ff */\n\n/* #007bc7 */\n\n/* #CF63CF */\n\n/* #BD42BD */\n\n/* #FFAB19 */\n\n/* #FF8C1A */\n\n/* #0FBD8C */\n\n/* #0FBD8C */\n\n/* #FF8C1A */\n\n/* #FFB366 */\n\n/* #FF8C1A */\n\n/* 35% transparent version of extensions-primary */\n\n/* opaque version of extensions-transparent, on white bg */\n\n/* lighter than motion-primary */\n\n* {\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n    background: white;\n}\n\nbody[theme=\"dark\"] {\n    background-color: #111;\n    color: #eee;\n}\n\na {\n    color: blue;\n}\n\n[theme=\"dark\"] a {\n    color: #4af;\n}\n\n.credits_main_1Rb15 section {\n    max-width: 900px;\n    margin: auto;\n    margin-bottom: 30px;\n}\n\n.credits_header-container_10IXn {\n    color: white;\n    background-color: var(--motion-primary, #8cafff);\n    padding: 20px 0;\n    text-align: center;\n    margin-bottom: 30px;\n}\n\n.credits_header-text_2vWAl {\n\n}\n\n.credits_users_2AuwB {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.credits_user-image_2rw9X {\n    margin-right: 12px;\n}\n\n.credits_user_2nYLS {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    padding: 4px;\n    border-radius: 4px;\n    font-size: 1.25rem;\n    color: inherit !important;\n    text-decoration: none;\n    transition: background .2s;\n}\n\n.credits_user_2nYLS:link:hover {\n    background: #eee;\n}\n\n[theme=\"dark\"] .credits_user_2nYLS:link:hover {\n    background: #222;\n}\n\n.credits_user-info_2xO9N {\n    width: 100%;\n    \n    overflow-wrap: anywhere;\n}\n\n@keyframes credits_gradient_3bze_ {\n    0% {\n        background-position: 0% 0%;\n    }\n\n    100% {\n        background-position: 100% 100%;\n    }\n}\n\n.credits_users-golden_1pxaP .credits_user_2nYLS {\n    width: 296px;\n    margin: 2px;\n\n    color: #a237db !important;\n    background-color: #ffc400;\n    background: linear-gradient(\n        145deg,\n        rgba(255, 196, 0, 1) 0%,\n        rgba(255, 196, 0, 1) 45%,\n        rgba(255, 255, 255, 1) 50%,\n        rgba(255, 196, 0, 1) 54%,\n        rgba(255, 196, 0, 1) 100%\n    );\n    background-size: 300% 300%;\n    animation: credits_gradient_3bze_ 3s ease infinite;\n\n    transition-property: none !important;\n    transition-duration: 0 !important;\n}\n\n.credits_users-golden_1pxaP .credits_user_2nYLS:link:hover {\n    background: #ffae00;\n    \n    transition-property: none !important;\n    transition-duration: 0 !important;\n}", ""]);

// exports
exports.locals = {
	"main": "credits_main_1Rb15",
	"header-container": "credits_header-container_10IXn",
	"headerContainer": "credits_header-container_10IXn",
	"header-text": "credits_header-text_2vWAl",
	"headerText": "credits_header-text_2vWAl",
	"users": "credits_users_2AuwB",
	"user-image": "credits_user-image_2rw9X",
	"userImage": "credits_user-image_2rw9X",
	"user": "credits_user_2nYLS",
	"user-info": "credits_user-info_2xO9N",
	"userInfo": "credits_user-info_2xO9N",
	"users-golden": "credits_users-golden_1pxaP",
	"usersGolden": "credits_users-golden_1pxaP",
	"gradient": "credits_gradient_3bze_"
};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #0d1117;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.csss */\n    --ui-primary: #0d1117;\n    --ui-secondary: #121824;\n    --ui-tertiary: #1b2433;\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n/* blocklyFlyoutCheckboxPath stroke and blocklyFlyoutCheckbox fill must match */\n.blocklyFlyoutCheckboxPath {\n    stroke: #111;\n}\n.blocklyFlyoutCheckbox {\n    fill: #111;\n}\n.checked > .blocklyFlyoutCheckbox {\n    stroke: #a1c6fa;\n}\n.checked > .blocklyFlyoutCheckboxPath {\n    stroke: white;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: hsla(0, 0%, 100%, .35) !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n"

/***/ }),

/***/ "./src/lib/tw-theme-hoc.jsx":
/*!**********************************!*\
  !*** ./src/lib/tw-theme-hoc.jsx ***!
  \**********************************/
/*! exports provided: getInitialDarkMode, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialDarkMode", function() { return getInitialDarkMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ThemeHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tw-theme-dark.css */ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css");
/* harmony import */ var _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }


const THEME_KEY = 'tw:theme';
const darkMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const getInitialDarkMode = () => {
  try {
    localStorage.setItem(THEME_KEY, 'dark');
  } catch (e) {
    // ignore
  }
  return true;
};
const darkModeStylesheet = document.createElement('style');
darkModeStylesheet.textContent = _raw_loader_tw_theme_dark_css__WEBPACK_IMPORTED_MODULE_1___default.a;
const ThemeHOC = function ThemeHOC(WrappedComponent) {
  class ThemeComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleQueryChange = this.handleQueryChange.bind(this);
      this.handleClickTheme = this.handleClickTheme.bind(this);
      this.state = {
        dark: getInitialDarkMode()
      };
    }
    componentDidMount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.addEventListener) {
        darkMediaQuery.addEventListener('change', this.handleQueryChange);
      }
      this.updateDark();
    }
    componentDidUpdate() {
      try {
        localStorage.setItem(THEME_KEY, this.state.dark ? 'dark' : 'light');
      } catch (e) {
        // ignore
      }
      this.updateDark();
    }
    componentWillUnmount() {
      // media query does not have listeners in legacy edge
      if (darkMediaQuery.removeEventListener) {
        darkMediaQuery.removeEventListener('change', this.handleQueryChange);
      }
    }
    updateDark() {
      const dark = true;
      document.body.setAttribute('theme', dark ? 'dark' : 'light');
      if (dark && !darkModeStylesheet.parentNode) {
        // Append at the start of <body> we override scratch-gui styles in <head>
        // but are overridden by addon styles at the end of <body>
        document.body.insertBefore(darkModeStylesheet, document.body.firstChild);
      } else if (!dark && darkModeStylesheet.parentNode) {
        darkModeStylesheet.parentNode.removeChild(darkModeStylesheet);
      }
      try {
        localStorage.setItem(THEME_KEY, 'dark');
      } catch (e) {
        // ignore
      }
    }
    handleQueryChange() {
      this.setState({
        dark: true
      });
    }
    handleClickTheme() {
      this.setState({
        dark: true
      });
    }
    render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickTheme: this.handleClickTheme,
        isDark: this.state.dark
      }, this.props));
    }
  }
  return ThemeComponent;
};


/***/ }),

/***/ "./src/playground/app-target.js":
/*!**************************************!*\
  !*** ./src/playground/app-target.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const appTarget = document.getElementById('app');

// Remove everything from the target to fix macOS Safari "Save Page As",
while (appTarget.firstChild) {
  appTarget.removeChild(appTarget.firstChild);
}
document.body.classList.add('tw-loaded');
/* harmony default export */ __webpack_exports__["default"] = (appTarget);

/***/ }),

/***/ "./src/playground/credits/credits.css":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/cache-loader/dist/cjs.js??ref--5-1!../../../node_modules/css-loader??ref--5-2!../../../node_modules/postcss-loader/src??postcss!./credits.css */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/credits/credits.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/credits/credits.jsx":
/*!********************************************!*\
  !*** ./src/playground/credits/credits.jsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-target */ "./src/playground/app-target.js");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./credits.css */ "./src/playground/credits/credits.css");
/* harmony import */ var _credits_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_credits_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users */ "./src/playground/credits/users.js");
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }








// import fosshostLogo from './fosshost-light.png';


/* eslint-disable react/jsx-no-literals */

document.documentElement.lang = 'en';
const User = _ref => {
  let {
    image,
    text,
    href
  } = _ref;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: href,
    target: "_blank",
    rel: "noreferrer",
    className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.user
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.userImage,
    src: image,
    width: "60",
    height: "60"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.userInfo
  }, text));
};
User.propTypes = {
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  href: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
const UserList = _ref2 => {
  let {
    users,
    golden
  } = _ref2;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(_credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.users, {
      [_credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.usersGolden]: golden
    })
  }, users.map((data, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(User, _extends({
    key: index
  }, data))));
};
UserList.propTypes = {
  users: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object),
  golden: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
const Credits = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.main
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerContainer
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: _credits_css__WEBPACK_IMPORTED_MODULE_4___default.a.headerText
}, "Permafy Credits")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Permafy")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Thank you"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Without PenguinMod, Permafy may have never existed. Thank you to everyone who worked on PenguinMod, Scratch and TurboWarp, you have made many people finally be able to make whatever they can imagine."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Our Supporters"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We rely on the support of our users to keep running parts of the website for free. You do not need to support Permafy if you do not want to, but it will help us run the services that power our project sharing and other online features."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://permafy.github.io/coffee"
}, "Support Permafy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmSupporters,
  golden: true
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Contributors"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Permafy is made by a guy and his alts. A list is below, but you can also check ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/orgs/Permafy/people"
}, "our GitHub"), " incase this one is out of date."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "There are even community members who have helped develop Permafy. People like ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "you!")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmPullRequestDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We've also included work from other open-source projects inside of Permafy. Here's a list of some other projects you should check out:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmCodeUsedFrom
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Code for \"Center\" option in Costume editor is from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/Nitro-Bolt/scratch-paint/blob/develop/src/containers/mode-tools.jsx#L203-L216"
}, "Cubester@Nitro-Bolt")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "GitHub Pages"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We currently use ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://pages.github.com/"
}, "GitHub Pages"), " to host Permafy."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://pages.github.com/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/collections/github-pages-examples/github-pages-examples.png",
  width: "160",
  height: "160"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Domain Provider"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://permafy.github.io/coffee"
}, "permafy.github.io"), " (and any subdomains) are currently provided by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/aynonyaz"
}, "aynonyaz"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/AynoLOL"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "https://avatars.githubusercontent.com/u/216462140",
  style: {
    width: "128px"
  }
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Server Host"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PenguinMod's Project Sharing server is currently hosted by", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/ianyourgod"
}, "ianyourgod"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/ianyourgod"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: "https://avatars.githubusercontent.com/u/104151459?v=4",
  style: {
    width: "128px"
  }
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The PenguinMod Server API is maintained by many people. A list is below, but you can also check", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/PenguinMod/PenguinMod-BackendAPI/graphs/contributors?all=1"
}, "the GitHub repository"), " ", "incase this one is out of date."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmApiDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Costumes"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Some Permafy costumes are downloaded or created from (purr was made by aynonyaz btw):", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://publicdomainvectors.org/"
}, "https://publicdomainvectors.org/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://discord.gg/NZ9MBMYTZh"
}, "User-submissions from the PenguinMod Discord Server")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The PenguinMod Developers")), "All costumes exclusive to PenguinMod are included under Public Domain licenses or licenses such as MIT and CC0."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is the current list of user-submitted costume creators:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmCostumeSubmittors
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Sound Effects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "All Permafy sounds are downloaded or created from:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://freesound.org/"
}, "https://freesound.org/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://opengameart.org/"
}, "https://opengameart.org/"), " (only Public Domain ones)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://archive.org/"
}, "https://archive.org/")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://discord.gg/NZ9MBMYTZh"
}, "User-submissions from the PenguinMod Discord Server")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The PenguinMod Developers")), "All sounds exclusive to PenguinMod are included under Public Domain licenses or licenses such as MIT and CC0."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This is the current list of user-submitted sound creators:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmSoundSubmittors
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Accounts"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Scratch login on Permafy is managed with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://oauth2.scratch-wiki.info/"
}, "ScratchOAuth2"), ", see their ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/ScratchVerifier/ScratchOAuth2"
}, "GitHub repository"), ".", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\"ScratchOAuth2\" is not actually affiliated with Scratch, the Scratch Team, or the Scratch Foundation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Permafy & TurboWarp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Extensions"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "If you are an extension developer who wants their extension removed from PenguinMod's extensions list, contact us as soon as you can. We'll get it removed as soon as we are able to.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We use some MIT licensed extensions from TurboWarp as they are really useful! Check out the full list of TurboWarp extensions ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://extensions.turbowarp.org/"
}, "here"), ", and see individual contributors below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].extensionDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Permafy also has a few people who made and submitted extensions too! This list may get outdated sometimes, but here they are listed below:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmExtensionDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The Scratch Auth extension has a login system managed with ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://auth.itinerary.eu.org/"
}, "Scratch Auth"), ", created by ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/users/Looky1173/"
}, "Looky1173"), ". (thanks for adding us to the user list!)", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "\"Scratch Auth\" is not actually affiliated with Scratch, the Scratch Team, or the Scratch Foundation."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Addons"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are the developers that made the addons from ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratchaddons.com/"
}, "Scratch Addons"), " available."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].addonDevelopers
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Permafy-exclusive addons are created by the contributors listed in the Contributors section.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "TurboWarp")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The TurboWarp project is made possible by the work of many volunteers.", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "You can check out TurboWarp's individual credits ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://turbowarp.org/credits.html"
}, "here"), ".")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Scratch"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "TurboWarp is based on the work of the ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/credits"
}, "Scratch contributors"), " but is not endorsed by Scratch in any way."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://scratch.mit.edu/donate"
}, "Donate to support Scratch."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Translators"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "More than 100 people have helped translate TurboWarp and its addons into many languages \u2014 far more than we could hope to list here."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "PenguinMod is also (very very slowly) getting translated into other languages, in the future hopefully the same number of languages can be supported. It'll take a while until we get there though."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here is the current list of Permafy Translators:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserList, {
  users: _users__WEBPACK_IMPORTED_MODULE_7__["default"].pmTranslators
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "The list order is randomized on each refresh."))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", null, "Individual contributors are listed in no particular order. The order is randomized each visit."))));
document.body.setAttribute('theme', Object(_lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_6__["getInitialDarkMode"])() ? 'dark' : 'light');
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credits, null), _app_target__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/playground/credits/users.js":
/*!*****************************************!*\
  !*** ./src/playground/credits/users.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const shuffle = list => {
  for (let i = list.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    const tmp = list[i];
    list[i] = list[random];
    list[random] = tmp;
  }
  return list;
};
const fromHardcoded = _ref => {
  let {
    userId,
    username,
    name
  } = _ref;
  return {
    image: "https://trampoline.turbowarp.org/avatars/".concat(userId),
    href: "https://scratch.mit.edu/users/".concat(username, "/"),
    text: name || username
  };
};
const fromHardcodedGithub = username => ({
  image: "https://github.com/".concat(username, ".png"),
  href: "https://github.com/".concat(username, "/"),
  text: username
});
const fromHardcodedNamed = username => ({
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#",
  text: username
});

// doing it like this for now since this is how we have it in the disc server
const pmSupportersText = "\naynonyaz (https://github.com/aynonyaz)\n";
const pmSupporterImage = username => {
  switch (username) {
    case "mralien7893":
      return "https://projects.penguinmod.com/api/v1/users/getpfp?username=mralien7893";
    case "electricfuzzball_pm":
      return "https://projects.penguinmod.com/api/v1/users/getpfp?username=electricfuzzball_pm";
    case "kylomaskgamer":
      return "https://projects.penguinmod.com/api/v1/users/getpfp?username=kylomaskgamer";
    case "MrRedstonia":
      return "https://projects.penguinmod.com/api/v1/users/getpfp?username=mrredstonia";
    default:
      return "https://penguinmod.com/unknown_user.png";
  }
};
const pmSupporterImageFromLine = line => {
  const match = line.match(/penguinmod\.com\/profile\?user=([a-zA-Z0-9_-]+)/);
  return match ? "https://projects.penguinmod.com/api/v1/users/getpfp?username=".concat(match[1]) : null;
};
const pmSupporters = pmSupportersText.replace(/\r/g, "").split('\n').map(line => line.trim()).filter(line => !!line).map(line => {
  const bracketSection = line.indexOf(" [");
  const linkSection = line.indexOf(" (");

  // use full text if no "name [fullname]" or "name (link) (etc)"
  const username = linkSection === -1 && bracketSection === -1 ? line : line.slice(0, bracketSection === -1 ? linkSection : bracketSection);
  const image = pmSupporterImageFromLine(line) || pmSupporterImage(username);

  // getting url has ( at the start with this regex
  const linkMatch = line.match(/\(([^\)]+)/gm);
  const potentialLink = !linkMatch ? "https://studio.penguinmod.com/credits.html#" : "".concat(linkMatch[0]).slice(1);
  return {
    text: username,
    image,
    href: potentialLink.startsWith("https://") ? potentialLink : "https://studio.penguinmod.com/credits.html#"
  };
});
const addonDevelopers = [{
  userId: '34018398',
  username: 'Jeffalo'
}, {
  userId: '64184234',
  username: 'ErrorGamer2000'
}, {
  userId: '41616512',
  username: 'pufferfish101007'
}, {
  userId: '61409215',
  username: 'TheColaber'
}, {
  userId: '1882674',
  username: 'griffpatch'
}, {
  userId: '10817178',
  username: 'apple502j'
}, {
  userId: '16947341',
  username: '--Explosion--'
}, {
  userId: '14880401',
  username: 'Sheep_maker'
}, {
  userId: '9981676',
  username: 'NitroCipher'
}, {
  userId: '2561680',
  username: 'lisa_wolfgang'
}, {
  userId: '60000111',
  username: 'GDUcrash'
}, {
  userId: '4648559',
  username: 'World_Languages'
}, {
  userId: '17340565',
  username: 'GarboMuffin'
}, {
  userId: '5354974',
  username: 'Chrome_Cat'
}, {
  // actual ID is 34455896 but their avatar is the wrong resolution and looks really weird
  userId: '0',
  username: 'summerscar'
}, {
  userId: '55742784',
  username: 'RedGuy7'
}, {
  userId: '9636514',
  username: 'Tacodiva7729'
}, {
  userId: '14792872',
  username: '_nix'
}, {
  userId: '30323614',
  username: 'BarelySmooth'
}, {
  userId: '64691048',
  username: 'CST1229'
}, {
  userId: '12498592',
  username: 'LilyMakesThings'
}].map(fromHardcoded);
const pmDevelopers = ['enderhacker', 'FreshPenguin112', 'Ianyourgod', 'JoshAtticus', 'JeremyGamer13', 'jwklong', 'tnix100', 'RedMan13', 'SharkPool-SP', 'showierdata9978', 'DogeisCut'].map(fromHardcodedGithub);
const pmPullRequestDevelopers = [
// these people made a PR that got merged, or got a dev to add something they made
{
  text: 'NexusKitten',
  image: "https://github.com/NexusKitten.png",
  href: "https://github.com/NexusKitten/"
}, {
  text: 'LilyMakesThings',
  image: "https://github.com/LilyMakesThings.png",
  href: "https://github.com/LilyMakesThings/"
}, {
  text: 'MikeDev101',
  image: "https://github.com/MikeDev101.png",
  href: "https://github.com/MikeDev101/"
}, {
  text: 'kokofixcomputers',
  image: "https://github.com/kokofixcomputers.png",
  href: "https://github.com/kokofixcomputers/"
}, {
  text: 'PPPDUD',
  image: "https://github.com/PPPDUD.png",
  href: "https://github.com/PPPDUD/"
}, {
  text: 'qbjl',
  image: "https://github.com/qbjl.png",
  href: "https://github.com/qbjl/"
}, {
  text: 'minidogg',
  image: "https://github.com/minidogg.png",
  href: "https://github.com/minidogg/"
}, {
  text: 'concertalyis',
  image: "https://github.com/concertalyis.png",
  href: "https://github.com/concertalyis/"
}, {
  text: 'Steve0Greatness',
  image: "https://github.com/Steve0Greatness.png",
  href: "https://github.com/Steve0Greatness/"
}, {
  text: 'ilikecoding-197',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://github.com/ilikecoding-197/"
}, {
  text: 'NotEmbin',
  image: "https://github.com/NotEmbin.png",
  href: "https://github.com/NotEmbin/"
}, {
  text: 'ddededodediamante',
  image: "https://github.com/ddededodediamante.png",
  href: "https://github.com/ddededodediamante/"
}, {
  // rx or ry single fix
  text: 'NotCryptid',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://github.com/NotCryptid/"
}, {
  text: 'thekeura',
  image: "https://github.com/thekeura.png",
  href: "https://github.com/thekeura/"
}
// list could be missing some people, but theres not really a way to tell
];
const pmApiDevelopers = ['JeremyGamer13', 'RedMan13', 'tnix100', 'Ianyourgod', 'Jwklong'].map(fromHardcodedGithub);
const pmTranslators = [{
  text: 'Mildanner',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://github.com/mildannerofc"
}, {
  text: 'kolikiscool',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'n0name',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'onetoanother',
  image: "https://trampoline.turbowarp.org/avatars/by-username/onetoanother",
  href: "https://scratch.mit.edu/users/onetoanother/"
}, {
  text: 'NamelessCat',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=cat",
  href: "https://penguinmod.com/profile?user=cat"
}, {
  text: 'Just-Noone',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Just-Noone",
  href: "https://scratch.mit.edu/users/Just-Noone/"
}, {
  text: 'goose_but_smart',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'Le_Blob77',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Le_Blob77",
  href: "https://scratch.mit.edu/users/Le_Blob77/"
}, {
  text: 'MrRedstonia',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=mrredstonia",
  href: "https://penguinmod.com/profile?user=mrredstonia"
}, {
  text: 'TheShovel',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=TheShovel",
  href: "https://penguinmod.com/profile?user=TheShovel"
}, {
  text: 'SmolBoi37',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'GigantTech',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=GigantTech",
  href: "https://penguinmod.com/profile?user=GigantTech"
}, {
  text: 'hacker_anonimo',
  image: "https://trampoline.turbowarp.org/avatars/by-username/hacker_anonimo",
  href: "https://scratch.mit.edu/users/hacker_anonimo/"
}, {
  text: 'zaaxd52',
  image: "https://trampoline.turbowarp.org/avatars/by-username/zaaxd52",
  href: "https://scratch.mit.edu/users/zaaxd52/"
}, {
  text: 'G1nX',
  image: "https://trampoline.turbowarp.org/avatars/by-username/G1nX",
  href: "https://scratch.mit.edu/users/G1nX/"
}, {
  text: 'FNFFortune',
  image: "https://trampoline.turbowarp.org/avatars/by-username/FNFFortune",
  href: "https://scratch.mit.edu/users/FNFFortune/"
}, {
  text: 'Gabberythethughunte',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'keriyo',
  image: "https://trampoline.turbowarp.org/avatars/by-username/keriyo",
  href: "https://scratch.mit.edu/users/keriyo/"
}, {
  text: 'DenPlayTS',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=denplayts",
  href: "https://penguinmod.com/profile?user=denplayts"
}, {
  text: 'Tsalbre',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Tsalbre",
  href: "https://scratch.mit.edu/users/Tsalbre/"
}, {
  text: 'MubiLop',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=MubiLop",
  href: "https://penguinmod.com/profile?user=MubiLop"
}, {
  text: 'TLP136',
  image: "https://trampoline.turbowarp.org/avatars/by-username/TLP136",
  href: "https://scratch.mit.edu/users/TLP136/"
}, {
  text: 'Cymock',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Cymock",
  href: "https://scratch.mit.edu/users/Cymock/"
}, {
  text: 'ItzzEndr',
  image: "https://trampoline.turbowarp.org/avatars/by-username/ItzzEndr",
  href: "https://scratch.mit.edu/users/ItzzEndr/"
}, {
  text: 'Capysussa',
  image: "https://trampoline.turbowarp.org/avatars/by-username/Capysussa",
  href: "https://scratch.mit.edu/users/Capysussa/"
}, {
  text: 'con-zie',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ImNotScratchY_lolol',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=ImNotScratchY_lolol",
  href: "https://penguinmod.com/profile?user=ImNotScratchY_lolol"
}, {
  text: 'justablock',
  image: "https://trampoline.turbowarp.org/avatars/by-username/justablock",
  href: "https://scratch.mit.edu/users/justablock/"
}, {
  text: 'inventionpro',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=inventionpro",
  href: "https://penguinmod.com/profile?user=inventionpro"
}, {
  text: 'SkyBuilder1717',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=SkyBuilder1717",
  href: "https://penguinmod.com/profile?user=SkyBuilder1717"
}, {
  text: 'Parham1258',
  image: "https://avatars.githubusercontent.com/u/95162943?v=4",
  href: "https://github.com/Parham1258"
}, {
  text: 'lem0n0fficial',
  image: "https://trampoline.turbowarp.org/avatars/by-username/lem0n0fficial",
  href: "https://scratch.mit.edu/users/lem0n0fficial/"
}, {
  text: 'Oldcoinmania',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=Oldcoinmania",
  href: "https://penguinmod.com/profile?user=Oldcoinmania"
}, {
  text: 'mariocraft987',
  image: "https://avatars.githubusercontent.com/u/154646419?v=4",
  href: "https://github.com/mariocraft987"
}, {
  text: 'Chip',
  image: "https://avatars.githubusercontent.com/u/116580105?s=96&v=4",
  href: "https://github.com/triisdang"
}, {
  text: 'enduh',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=enduh",
  href: "https://penguinmod.com/profile?user=enduh"
}, {
  text: 'riwataNOUVEAU',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=riwataNOUVEAU",
  href: "https://penguinmod.com/profile?user=riwataNOUVEAU"
}, {
  text: 'Prode',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=Prode",
  href: "https://penguinmod.com/profile?user=Prode"
}, {
  text: 'dotun',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=dotun",
  href: "https://penguinmod.com/profile?user=dotun"
}, {
  text: 'phi_wpentomino',
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=phi_wpentomino",
  href: "https://penguinmod.com/profile?user=phi_wpentomino"
}];
const pmCostumeSubmittors = [{
  text: 'budc123',
  image: "https://github.com/budc123.png",
  href: "https://github.com/budc123/"
}, {
  text: 'concertalyis',
  image: "https://github.com/concertalyis.png",
  href: "https://github.com/concertalyis/"
}, {
  text: 'WojtekCodesToday',
  image: "https://github.com/WojtekCodesToday.png",
  href: "https://github.com/WojtekCodesToday/"
}, {
  text: 'ddededodediamante',
  image: "https://github.com/ddededodediamante.png",
  href: "https://github.com/ddededodediamante/"
}, {
  text: 'G1nX',
  image: "https://trampoline.turbowarp.org/avatars/by-username/G1nX",
  href: "https://scratch.mit.edu/users/G1nX/"
}, {
  text: 'maroonmball',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'eviepepsi',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: '1340073',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cubeycreator',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'novaspiderultra',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'poundpound0209',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'gdplayer1035',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cognitixsammy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'thebusyman',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'skyglide5',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cxnnie09',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'hoveras',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'blockgamer904',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: "Anonygoose's Dog (Max)",
  image: "https://projects.penguinmod.com/api/v1/users/getpfp?username=anonygoosedog",
  href: "https://penguinmod.com/profile?user=anonygoosedog"
}, {
  text: 'mildannerofc',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'bonemaster96',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'phicicle',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ron027257',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'fur1na__',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: '00ee8a',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'alf2003_14729',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'pedrotheawsomeguy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'david342013',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'applecode_official',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'harrymations3000',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'yodaugly67_13290',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'splitthread',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'miningminer27',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'gatoc_dev',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'solar_asteri',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'greencube7',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'igorcord',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'abo_notebook',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'broguyf',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'brocant__73748',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'itz_premium',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'kirda132',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'maybe.asdf',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'atomicoperations',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'notapolishcow_52995',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'funster10123',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'jlgri',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'neo_nottro',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'wyfixp',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'blablabluhbluh',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'moony_mon.e',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'thatibrahimguy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'somerandomguuuy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'noteezteez',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: "FloppyDisk_OSC",
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: "dogstudiostuff",
  image: "https://github.com/dogstudiostuff.png",
  href: "https://github.com/dogstudiostuff/"
}, {
  text: "oldalx2020",
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: "DogeIsCut",
  image: "https://github.com/DogeIsCut.png",
  href: "https://github.com/DogeIsCut/"
}, {
  text: "SharkZubat",
  image: "https://github.com/SharkZubat.png",
  href: "https://github.com/SharkZubat/"
}, {
  text: "KylomaskGamer",
  image: "https://github.com/KylomaskGamer.png",
  href: "https://github.com/KylomaskGamer/"
}, {
  text: "Anonymous-cat1",
  image: "https://github.com/Anonymous-cat1.png",
  href: "https://github.com/Anonymous-cat1/"
}, {
  text: "GreedyAllay",
  image: "https://github.com/GreedyAllay.png",
  href: "https://github.com/GreedyAllay/"
}];
const pmSoundSubmittors = [{
  text: 'ddededodediamante',
  image: "https://github.com/ddededodediamante.png",
  href: "https://github.com/ddededodediamante/"
}, {
  text: 'concertalyis',
  image: "https://github.com/concertalyis.png",
  href: "https://github.com/concertalyis/"
}, {
  text: 'G1nX',
  image: "https://trampoline.turbowarp.org/avatars/by-username/G1nX",
  href: "https://scratch.mit.edu/users/G1nX/"
}, {
  text: 'maroonmball',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'jn567',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'lukepuke311',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ma_01',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'poundpound0209',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cognitixsammy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'mememaster9000',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'rydia_theawesome',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'jackunavailable',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'hammouda101010',
  image: "https://github.com/hammouda101010.png",
  href: "https://github.com/hammouda101010/"
}, {
  text: 'gdplayer1035',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ztedsgaming',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: '_zackplayz',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: '_mya.factorial',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'funster10123',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'solar_asteri',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'Anonymous-cat1',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'hablethedev',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'ad1340',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'GlitchedSpirit',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: '.pinksus',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'wyfixp',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'atomicoperations',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'orangeluigi414',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'vojtabubela11',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'light227',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'bubgamer072',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'rugman_3',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'halliementos',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'kurrmailence',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'applecode_official',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'furbyguy',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: 'cynicmusic',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://opengameart.org/users/cynicmusic"
}, {
  text: 'lushogames',
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://opengameart.org/users/lushogames"
}, {
  text: "ScratchFakemon",
  image: "https://github.com/ScratchFakemon.png",
  href: "https://github.com/ScratchFakemon/"
}, {
  text: "budc123",
  image: "https://github.com/budc123.png",
  href: "https://github.com/budc123/"
}, {
  text: "mildannerofc",
  image: "https://penguinmod.com/unknown_user.png",
  href: "https://studio.penguinmod.com/credits.html#"
}, {
  text: "nataliexists",
  image: "https://github.com/nataliexists.png",
  href: "https://github.com/nataliexists/"
}, {
  text: "DogeIsCut",
  image: "https://github.com/DogeIsCut.png",
  href: "https://github.com/DogeIsCut/"
}];
const extensionDevelopers = ['GarboMuffin', 'griffpatch', 'DT-is-not-available', 'Xeltalliv', 'MikeDev101', 'LilyMakesThings'].map(fromHardcodedGithub);
const pmExtensionDevelopers = ['qbjl', 'NexusKitten', 'Gen1x-ALT', 'SharkPool-SP', 'DogeisCut',
// listed as a collaborator on a SharkPool extension
'David-Orangemoon', 'pooiod', 'WAYLIVES', 'MrRedstonia', 'MikeDev101', 'liablelua', 'AlexSchoolOH', 'Monochromasity', 'LilyMakesThings', 'TheShovel', 'skyhigh173', 'Ruby-Devs', 'oc9x97', 'lego7set', 'mariocraft987', 'AshimeeAlt', 'ddededodediamante'].map(fromHardcodedGithub);
const pmCodeUsedFrom = [{
  text: "Gandi-IDE",
  image: "https://github.com/Gandi-IDE.png",
  href: "https://github.com/Gandi-IDE/"
}, {
  text: "TurboWarp",
  image: "https://github.com/TurboWarp.png",
  href: "https://github.com/TurboWarp/"
}, {
  text: "scratchfoundation",
  image: "https://github.com/scratchfoundation.png",
  href: "https://github.com/scratchfoundation/"
}, {
  text: "Nitro-Bolt",
  image: "https://github.com/Nitro-Bolt.png",
  href: "https://github.com/Nitro-Bolt/"
}
// TODO: There are 1000% more projects we've used some stuff from but I don't remember
];
/* harmony default export */ __webpack_exports__["default"] = ({
  addonDevelopers: shuffle(addonDevelopers),
  pmDevelopers: shuffle(pmDevelopers),
  extensionDevelopers: shuffle(extensionDevelopers),
  pmExtensionDevelopers: shuffle(pmExtensionDevelopers),
  pmApiDevelopers: shuffle(pmApiDevelopers),
  pmTranslators: shuffle(pmTranslators),
  pmSoundSubmittors: shuffle(pmSoundSubmittors),
  pmCostumeSubmittors: shuffle(pmCostumeSubmittors),
  pmPullRequestDevelopers: shuffle(pmPullRequestDevelopers),
  pmCodeUsedFrom: shuffle(pmCodeUsedFrom),
  pmSupporters: shuffle(pmSupporters)
});

/***/ })

/******/ });
//# sourceMappingURL=credits.js.map