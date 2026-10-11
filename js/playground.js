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
/******/ 		"playground": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({"addons":"addons","iframe-extension-worker":"iframe-extension-worker","library-backdrops":"library-backdrops","library-costumes":"library-costumes","library-sounds":"library-sounds","library-sprites":"library-sprites","sb":"sb","addon-default-entry":"addon-default-entry","addon-entry-2d-color-picker":"addon-entry-2d-color-picker","addon-entry-better-img-uploads":"addon-entry-better-img-uploads","addon-entry-block-count":"addon-entry-block-count","addon-entry-block-palette-icons":"addon-entry-block-palette-icons","addon-entry-blocks2image":"addon-entry-blocks2image","addon-entry-cat-blocks":"addon-entry-cat-blocks","addon-entry-clones":"addon-entry-clones","addon-entry-columns":"addon-entry-columns","addon-entry-custom-block-shape":"addon-entry-custom-block-shape","addon-entry-custom-block-text":"addon-entry-custom-block-text","addon-entry-custom-zoom":"addon-entry-custom-zoom","addon-entry-debugger":"addon-entry-debugger","addon-entry-default-costume-editor-color":"addon-entry-default-costume-editor-color","addon-entry-disable-paste-offset":"addon-entry-disable-paste-offset","addon-entry-disable-stage-drag-select":"addon-entry-disable-stage-drag-select","addon-entry-editor-buttons-reverse-order":"addon-entry-editor-buttons-reverse-order","addon-entry-editor-colored-context-menus":"addon-entry-editor-colored-context-menus","addon-entry-editor-extra-keys":"addon-entry-editor-extra-keys","addon-entry-editor-sounds":"addon-entry-editor-sounds","addon-entry-editor-stage-left":"addon-entry-editor-stage-left","addon-entry-editor-theme3":"addon-entry-editor-theme3","addon-entry-fullscreen":"addon-entry-fullscreen","addon-entry-gamepad":"addon-entry-gamepad","addon-entry-hide-delete-button":"addon-entry-hide-delete-button","addon-entry-hide-flyout":"addon-entry-hide-flyout","addon-entry-hide-new-variables":"addon-entry-hide-new-variables","addon-entry-hide-stage":"addon-entry-hide-stage","addon-entry-initialise-sprite-position":"addon-entry-initialise-sprite-position","addon-entry-load-extensions":"addon-entry-load-extensions","addon-entry-mediarecorder":"addon-entry-mediarecorder","addon-entry-mouse-pos":"addon-entry-mouse-pos","addon-entry-no-script-bumping":"addon-entry-no-script-bumping","addon-entry-number-pad":"addon-entry-number-pad","addon-entry-paint-by-default":"addon-entry-paint-by-default","addon-entry-paint-snap":"addon-entry-paint-snap","addon-entry-remove-curved-stage-border":"addon-entry-remove-curved-stage-border","addon-entry-remove-sprite-confirm":"addon-entry-remove-sprite-confirm","addon-entry-scratch2":"addon-entry-scratch2","addon-entry-script-snap":"addon-entry-script-snap","addon-entry-search-sprites":"addon-entry-search-sprites","addon-entry-sprite-properties":"addon-entry-sprite-properties","addon-entry-swap-local-global":"addon-entry-swap-local-global","addon-entry-transparent-orphans":"addon-entry-transparent-orphans","addon-entry-tw-disable-cloud-variables":"addon-entry-tw-disable-cloud-variables","addon-entry-tw-remove-backpack":"addon-entry-tw-remove-backpack","addon-entry-tw-remove-feedback":"addon-entry-tw-remove-feedback","addon-entry-tw-straighten-comments":"addon-entry-tw-straighten-comments","addon-entry-vol-slider":"addon-entry-vol-slider","addon-entry-zebra-striping":"addon-entry-zebra-striping","addon-l10n-de":"addon-l10n-de","addon-l10n-es":"addon-l10n-es","addon-l10n-fr":"addon-l10n-fr","addon-l10n-hu":"addon-l10n-hu","addon-l10n-it":"addon-l10n-it","addon-l10n-ja":"addon-l10n-ja","addon-l10n-ko":"addon-l10n-ko","addon-l10n-nl":"addon-l10n-nl","addon-l10n-pl":"addon-l10n-pl","addon-l10n-pt":"addon-l10n-pt","addon-l10n-ro":"addon-l10n-ro","addon-l10n-ru":"addon-l10n-ru","addon-l10n-sl":"addon-l10n-sl","addon-l10n-tr":"addon-l10n-tr"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
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
/******/ 	deferredModules.push(["./src/playground/playground.jsx","vendors~addon-settings~credits~editor~embed~fullscreen~player~playground","vendors~editor~embed~fullscreen~player~playground","addon-settings~addons~editor~fullscreen~player~playground","editor~embed~fullscreen~player~playground"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/interface.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--5-1!./node_modules/css-loader??ref--5-2!./node_modules/postcss-loader/src??postcss!./src/playground/interface.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Base styles used by Scratch https://github.com/LLK/scratch-www/blob/develop/src/main.scss */\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n    margin: 0;\n    padding: 0;\n    border: 0;\n}\nh1,\nh2,\nh3,\nh4,\nh5 {\n    font-weight: bold;\n    line-height: 1.7em;\n}\nh1 {\n    font-weight: 2.5rem;\n}\nh2 {\n    font-weight: 2rem;\n}\nh3 {\n    font-size: 1.4rem;\n}\nh4 {\n    font-size: 1rem;\n}\na {\n    color: #25d;\n    cursor: pointer;\n    text-decoration: underline;\n}\n.interface_container_2nBns {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n}\n.interface_editor_3jGyG {\n    min-width: 1024px;\n    min-height: 640px;\n    height: 100%;\n}\n.interface_editor_3jGyG .interface_center_2d9_b {\n    height: 100%;\n}\n.interface_player-only_38SyA .interface_center_2d9_b {\n    margin: auto;\n}\n.interface_homepage-editor_3J3i8 {\n    display: contents;\n}\n.interface_split-homepage_3fMdP {\n    position: fixed;\n    display: grid;\n    grid-template-columns: minmax(240px, min(var(--stage-column-width), calc(100vw - 328px))) 8px minmax(0, 1fr);\n    grid-template-rows: auto minmax(0, 1fr);\n    width: 100vw;\n    height: 100vh;\n    overflow: hidden;\n}\n.interface_site-menu_gWdUs {\n    z-index: 2;\n    grid-column: 1 / -1;\n    grid-row: 1;\n}\n.interface_split-homepage_3fMdP .interface_homepage-editor_3J3i8 {\n    grid-column: 1;\n    grid-row: 2;\n    display: flex;\n    height: 100%;\n    min-width: 0;\n    min-height: 0;\n    flex-direction: column;\n    overflow-y: auto;\n}\n.interface_split-homepage_3fMdP .interface_center_2d9_b {\n    flex: 1 1 auto;\n    width: 100% !important;\n    min-height: 640px;\n    margin: 0;\n    overflow-y: auto;\n}\n.interface_dashboard-pane_10P_C {\n    grid-column: 3;\n    grid-row: 2;\n    min-width: 0;\n    height: 100%;\n    overflow: hidden;\n}\n.interface_resize-handle_32rG_ {\n    grid-column: 2;\n    grid-row: 2;\n    z-index: 1;\n    width: 8px;\n    height: 100%;\n    background: transparent;\n    cursor: ew-resize;\n    touch-action: none;\n}\n.interface_resize-handle_32rG_::after {\n    display: block;\n    width: 2px;\n    height: 100%;\n    margin: 0 auto;\n    background: rgba(0, 0, 0, 0.16);\n    content: '';\n}\n.interface_resize-handle_32rG_:hover::after,\n.interface_resize-handle_32rG_:focus::after {\n    background: #4c97ff;\n}\n.interface_resize-handle_32rG_:focus {\n    outline: none;\n}\n@media (max-width: 960px) {\n    .interface_split-homepage_3fMdP {\n        position: absolute;\n        display: block;\n        height: auto;\n        min-height: 100vh;\n        overflow: visible;\n    }\n\n    .interface_split-homepage_3fMdP .interface_homepage-editor_3J3i8 {\n        grid-column: 1;\n        grid-row: auto;\n        min-height: 100vh;\n        overflow: visible;\n    }\n\n    .interface_split-homepage_3fMdP .interface_center_2d9_b {\n        flex: none;\n        min-height: 100vh;\n        overflow: visible;\n    }\n\n    .interface_dashboard-pane_10P_C {\n        grid-column: 1;\n        grid-row: auto;\n        height: 100vh;\n    }\n\n    .interface_resize-handle_32rG_ {\n        display: none;\n    }\n}\n.interface_menu_3K-Q2 {\n    margin-bottom: 8px;\n}\n.interface_section_3pFkT {\n    margin: 8px 0 8px 0;\n}\n.interface_footer_3JeCN {\n    padding: 10px 0;\n    margin-top: 10px;\n    border-top: 2px solid #ddd;\n}\n.interface_footer_3JeCN a {\n    font-weight: bold;\n    text-decoration: none;\n}\n[theme=\"dark\"] .interface_footer_3JeCN {\n    border-color: #1a1a1a;\n}\n.interface_footer-content_1aIC- {\n    max-width: 600px;\n    margin: auto;\n}\n.interface_footer-text_IgwDU {\n    text-align: center;\n    margin: 5px 0 10px 0;\n}\n.interface_footer-columns_1SUSg {\n    display: flex;\n    justify-content: center;\n    justify-items: center;\n    flex-wrap: wrap;\n}\n.interface_footer-section_11lCO {\n    display: flex;\n    flex-direction: column;\n    width: 200px;\n    margin-bottom: 10px;\n}\n.interface_footer-section_11lCO > * {\n    margin-bottom: 10px;\n}\n[theme=\"dark\"] .interface_container_2nBns {\n    background-color: #111;\n}\n[theme=\"dark\"] .interface_player-only_38SyA {\n    color: #ddd;\n}\n[theme=\"dark\"] a {\n    color: #4af;\n}\n.interface_unshared-update_i7deb,\n.interface_infobox_1B2Hp {\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n    border-radius: 0.5rem;\n    border: 1px solid #b9d6ff;\n    background-color: #dbebff;\n}\n[theme=\"dark\"] .interface_infobox_1B2Hp {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.interface_infobox_1B2Hp p {\n    margin: 4px 0;\n}\n.interface_infobox_1B2Hp a {\n    font-weight: bold;\n    text-decoration: none;\n}\n/* .unshared-update {\n    border-color: #ffb9b9;\n    background-color: #ffdbdb;\n} */\n[theme=\"dark\"] .interface_unshared-update_i7deb {\n    border-color: #203652;\n    background-color: #16202c;\n}\n.interface_unshared-update_i7deb p {\n    margin: 4px 0;\n}\n.interface_unshared-update_i7deb a {\n    font-weight: bold;\n    text-decoration: none;\n}\n.interface_remix-warning-box_3ELA7 {\n    line-height: 1.5em;\n    padding: 0.5rem;\n    margin: 5px 0 8px 0;\n    border: 1px solid #ffdbb9;\n    background-color: #ffecdb;\n    border-radius: 0.5rem;\n}\n[theme=\"dark\"] .interface_remix-warning-box_3ELA7 {\n    border-color: #523720;\n    background-color: #2c2016;\n}\n.interface_remix-warning-box_3ELA7 p {\n    margin: 4px 0;\n}\n.interface_remix-warning-box_3ELA7 a {\n    font-weight: bold;\n    text-decoration: none;\n}\n.interface_remix-author-image_3CKj8 {\n    width: 32px;\n    height: 32px;\n    margin-right: 4px;\n    border-radius: 4px;\n}\n.interface_project-details_23Y3L {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin: 8px 0;\n}\n.interface_project-metadata_1yR_m {\n    display: flex;\n    flex-direction: column;\n}\n.interface_project-author-image_1iGP9 {\n    width: 50px;\n    height: 50px;\n    border-radius: 4px;\n    margin-right: 8px;\n}\n.interface_project-metadata_1yR_m h2 {\n    line-height: 1.4em;\n}\n.interface_project-metadata_1yR_m p {\n    font-size: 0.85rem;\n}\n.interface_project-metadata_1yR_m p a,\n.interface_project-metadata_1yR_m a {\n    text-decoration: none;\n    font-weight: bold;\n}\n.interface_center-sector_98TDt {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n.interface_report-link_1GiD4,\n.interface_share-link_2ousG {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n.interface_share-link_2ousG > img,\n.interface_report-link_1GiD4 > img {\n    height: 16px;\n    margin-right: 4px;\n}\n.interface_report-link_1GiD4 {\n    color: red !important;\n}\n.interface_share-link_2ousG {\n    background: transparent;\n    padding: 0;\n    margin: 0;\n    border: 0;\n    color: rgb(90, 90, 90) !important;\n    text-decoration: underline;\n    cursor: pointer;\n}\n.interface_share-link_2ousG:active {\n    filter: brightness(0.8);\n}\n.interface_share-link_2ousG > img {\n    filter: brightness(0.3529411765);\n}\n[theme=\"dark\"] .interface_share-link_2ousG {\n    color: rgb(202, 202, 202) !important;\n}\n[theme=\"dark\"] .interface_share-link_2ousG > img {\n    filter: brightness(0.7921568627);\n}\n.interface_remixList_2_l80 {\n    overflow-x: auto;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    height: 128px;\n    background-color: rgba(0, 0, 0, 10%);\n}\n.interface_remixProject_3TfIu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    background-color: white;\n    margin-left: 3px;\n    margin-right: 3px;\n    text-decoration: none;\n    color: black;\n    font-size: 0.8em;\n}\n[theme=\"dark\"] .interface_remixProject_3TfIu {\n    background-color: #111;\n    color: white;\n}\n.interface_remixProject_3TfIu:hover {\n    background-color: hsl(0, 0%, 95%);\n}\n[theme=\"dark\"] .interface_remixProject_3TfIu:hover {\n    background-color: rgba(0, 0, 0, 5%);\n}\n", ""]);

// exports
exports.locals = {
	"container": "interface_container_2nBns",
	"editor": "interface_editor_3jGyG",
	"center": "interface_center_2d9_b",
	"player-only": "interface_player-only_38SyA",
	"playerOnly": "interface_player-only_38SyA",
	"homepage-editor": "interface_homepage-editor_3J3i8",
	"homepageEditor": "interface_homepage-editor_3J3i8",
	"split-homepage": "interface_split-homepage_3fMdP",
	"splitHomepage": "interface_split-homepage_3fMdP",
	"site-menu": "interface_site-menu_gWdUs",
	"siteMenu": "interface_site-menu_gWdUs",
	"dashboard-pane": "interface_dashboard-pane_10P_C",
	"dashboardPane": "interface_dashboard-pane_10P_C",
	"resize-handle": "interface_resize-handle_32rG_",
	"resizeHandle": "interface_resize-handle_32rG_",
	"menu": "interface_menu_3K-Q2",
	"section": "interface_section_3pFkT",
	"footer": "interface_footer_3JeCN",
	"footer-content": "interface_footer-content_1aIC-",
	"footerContent": "interface_footer-content_1aIC-",
	"footer-text": "interface_footer-text_IgwDU",
	"footerText": "interface_footer-text_IgwDU",
	"footer-columns": "interface_footer-columns_1SUSg",
	"footerColumns": "interface_footer-columns_1SUSg",
	"footer-section": "interface_footer-section_11lCO",
	"footerSection": "interface_footer-section_11lCO",
	"unshared-update": "interface_unshared-update_i7deb",
	"unsharedUpdate": "interface_unshared-update_i7deb",
	"infobox": "interface_infobox_1B2Hp",
	"remix-warning-box": "interface_remix-warning-box_3ELA7",
	"remixWarningBox": "interface_remix-warning-box_3ELA7",
	"remix-author-image": "interface_remix-author-image_3CKj8",
	"remixAuthorImage": "interface_remix-author-image_3CKj8",
	"project-details": "interface_project-details_23Y3L",
	"projectDetails": "interface_project-details_23Y3L",
	"project-metadata": "interface_project-metadata_1yR_m",
	"projectMetadata": "interface_project-metadata_1yR_m",
	"project-author-image": "interface_project-author-image_1iGP9",
	"projectAuthorImage": "interface_project-author-image_1iGP9",
	"center-sector": "interface_center-sector_98TDt",
	"centerSector": "interface_center-sector_98TDt",
	"report-link": "interface_report-link_1GiD4",
	"reportLink": "interface_report-link_1GiD4",
	"share-link": "interface_share-link_2ousG",
	"shareLink": "interface_share-link_2ousG",
	"remixList": "interface_remixList_2_l80",
	"remixProject": "interface_remixProject_3TfIu"
};

/***/ }),

/***/ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sw.js";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/tw-theme-dark.css":
/*!*************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/tw-theme-dark.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* GUI */\n:root {\n    background: #0d1117;\n    color: #eee;\n    color-scheme: dark;\n    /* see colors.csss */\n    --ui-primary: #0d1117;\n    --ui-secondary: #121824;\n    --ui-tertiary: #1b2433;\n    --ui-modal-overlay: #333a;\n    --ui-black-transparent: rgba(255, 255, 255, 0.15);\n    --text-primary: #eee;\n    /* scratch-paint */\n    --paint-ui-pane-border: var(--ui-black-transparent);\n    --paint-text-primary: #eee;\n    --paint-form-border: var(--ui-black-transparent);\n}\n\n/* Blockly */\n.blocklySvg {\n    background-color: var(--ui-secondary) !important;\n    color-scheme: light;\n}\n[id^=\"blocklyGridPattern\"] > line {\n    stroke: #484848;\n}\n.blocklyFlyoutBackground {\n    fill: #111;\n}\n.blocklyFlyoutLabelText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton .blocklyText {\n    fill: #ccc;\n}\n.blocklyFlyoutButton:hover {\n    fill: #111;\n}\n/* blocklyFlyoutCheckboxPath stroke and blocklyFlyoutCheckbox fill must match */\n.blocklyFlyoutCheckboxPath {\n    stroke: #111;\n}\n.blocklyFlyoutCheckbox {\n    fill: #111;\n}\n.checked > .blocklyFlyoutCheckbox {\n    stroke: #a1c6fa;\n}\n.checked > .blocklyFlyoutCheckboxPath {\n    stroke: white;\n}\n.scratchCategoryMenu {\n    color: #ccc;\n}\n.blocklyToolboxDiv,\n.scratchCategoryMenu {\n    background: #111 !important;\n}\n.blocklyScrollbarHandle {\n    fill: #666;\n}\n.blocklyZoom {\n    filter: invert(100%);\n}\n.scratchCategoryMenuItem.categorySelected {\n    background: var(--ui-secondary);\n}\n.valueReportBox {\n    color: black;\n}\n.blocklyWidgetDiv {\n    color-scheme: light;\n}\n.blocklyWidgetDiv .goog-menu {\n    background: var(--ui-primary);\n    border-color: var(--ui-black-transparent);\n}\n.blocklyWidgetDiv .goog-menuitem {\n    color: var(--text-primary);\n}\n.blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {\n    color: hsla(0, 0%, 100%, .35) !important;\n}\n.sa-blockly-menu-item-border {\n    border-top-color: var(--ui-black-transparent) !important;\n}\n.blocklyWidgetDiv .goog-menuitem.goog-menuitem-highlight {\n    background-color: var(--ui-tertiary);\n    border-color: transparent; /* remove border */\n}\n.scratchCommentText {\n    color: black;\n}\n.blocklyInsertionMarker > .blocklyPath {\n    fill: #ccc;\n}\n\n/* Other / Multipurpose */\n.Popover {\n    /* weird Chrome bug displays white bar above popovers with color-scheme: dark */\n    color-scheme: light;\n}\n.Popover-body {\n    background: var(--ui-secondary);\n    border-color: var(--ui-black-transparent);\n    color: var(--text-primary);\n}\n.Popover-tipShape {\n    fill: var(--ui-secondary);\n    stroke: var(--ui-black-transparent);\n}\n"

/***/ }),

/***/ "./src/addons/channels.js":
/*!********************************!*\
  !*** ./src/addons/channels.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let changeChannel;
let reloadChannel;
if (typeof BroadcastChannel !== 'undefined') {
  changeChannel = new BroadcastChannel('addons-change');
  reloadChannel = new BroadcastChannel('addons-reload');
}
/* harmony default export */ __webpack_exports__["default"] = ({
  changeChannel,
  reloadChannel
});

/***/ }),

/***/ "./src/lib/tw-fix-history-api.js":
/*!***************************************!*\
  !*** ./src/lib/tw-fix-history-api.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");

const originalReplaceState = history.replaceState;
history.replaceState = function () {
  try {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return originalReplaceState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};
const originalPushState = history.pushState;
history.pushState = function () {
  try {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return originalPushState.call(this, ...args);
  } catch (e) {
    _log__WEBPACK_IMPORTED_MODULE_0__["default"].error(e);
  }
};

/***/ }),

/***/ "./src/lib/tw-packager-integration-hoc.jsx":
/*!*************************************************!*\
  !*** ./src/lib/tw-packager-integration-hoc.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackagerIntegrationHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");
/* harmony import */ var _reducers_project_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/project-state */ "./src/reducers/project-state.js");
const _excluded = ["canOpenPackager"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }





const PACKAGER_URL = 'https://permafy.github.io/compiler';
const PACKAGER_ORIGIN = "https://permafy.github.io";
const PackagerIntegrationHOC = function PackagerIntegrationHOC(WrappedComponent) {
  class PackagerIntegrationComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    constructor(props) {
      super(props);
      this.handleClickPackager = this.handleClickPackager.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
    }
    componentDidMount() {
      window.addEventListener('message', this.handleMessage);
    }
    componentWillUnmount() {
      window.removeEventListener('message', this.handleMessage);
    }
    handleClickPackager() {
      if (this.props.canOpenPackager) {
        window.open("".concat(PACKAGER_URL, "/?import_from=").concat(location.origin));
      }
    }
    handleMessage(e) {
      if (e.origin !== PACKAGER_ORIGIN) {
        return;
      }
      if (!this.props.canOpenPackager) {
        return;
      }
      if (!e.data.p4) {
        return;
      }
      const packagerData = e.data.p4;
      if (packagerData.type !== 'ready-for-import') {
        return;
      }

      // The packager needs to know that we will be importing something so it can display a loading screen
      e.source.postMessage({
        p4: {
          type: 'start-import'
        }
      }, e.origin);
      this.props.vm.saveProjectSb3('arraybuffer').then(buffer => {
        const name = "".concat(this.props.reduxProjectTitle, ".pmf");
        e.source.postMessage({
          p4: {
            type: 'finish-import',
            data: buffer,
            name
          }
        }, e.origin, [buffer]);
      }).catch(err => {
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].error(err);
        e.source.postMessage({
          p4: {
            type: 'cancel-import'
          }
        }, e.origin);
      });
    }
    render() {
      const _this$props = this.props,
        {
          /* eslint-disable no-unused-vars */
          canOpenPackager
          /* eslint-enable no-unused-vars */
        } = _this$props,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        onClickPackager: this.handleClickPackager
      }, props));
    }
  }
  PackagerIntegrationComponent.propTypes = {
    canOpenPackager: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
    reduxProjectTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    vm: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      saveProjectSb3: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
    })
  };
  const mapStateToProps = state => ({
    canOpenPackager: Object(_reducers_project_state__WEBPACK_IMPORTED_MODULE_4__["getIsShowingProject"])(state.scratchGui.projectState.loadingState),
    reduxProjectTitle: state.scratchGui.projectTitle,
    vm: state.scratchGui.vm
  });
  const mapDispatchToProps = () => ({});
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(PackagerIntegrationComponent);
};


/***/ }),

/***/ "./src/lib/tw-project-meta-fetcher-hoc.jsx":
/*!*************************************************!*\
  !*** ./src/lib/tw-project-meta-fetcher-hoc.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TWProjectMetaFetcherHOC; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log */ "./src/lib/log.js");
/* harmony import */ var _reducers_project_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/project-title */ "./src/reducers/project-title.js");
/* harmony import */ var _reducers_tw__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/tw */ "./src/reducers/tw.js");
const _excluded = ["projectId", "onSetAuthor", "onSetDescription", "onSetProjectTitle", "vm"];
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }






const API_URL = 'https://projects.penguinmod.com/api/v1/projects/getproject?projectID=$id&requestType=metadata';
const API_REMIX_URL = 'https://projects.penguinmod.com/api/v1/projects/getremixes?projectId=$id';
function APIProjectToReadableProject(apiProject) {
  return {
    id: apiProject.id,
    name: apiProject.title,
    desc: apiProject.instructions,
    notes: apiProject.notes,
    author: {
      id: apiProject.author.id,
      username: apiProject.author.username
    }
  };
}
const fetchProjectMeta = projectId => fetch(API_URL.replace('$id', projectId)).then(r => {
  if (r.status === 404) {
    throw new Error('Probably unshared (API returned 404)');
  }
  if (r.status !== 200) {
    throw new Error("Unexpected status code: ".concat(r.status));
  }
  return r.json();
});
const fetchProjectRemixes = projectId => fetch(API_REMIX_URL.replace('$id', projectId)).then(r => {
  if (r.status !== 200) {
    throw new Error("Unexpected status code: ".concat(r.status));
  }
  return r.json();
});
const getNoIndexTag = () => document.querySelector('meta[name="robots"][content="noindex"]');
const setIndexable = indexable => {
  if (indexable) {
    const tag = getNoIndexTag();
    if (tag) {
      tag.remove();
    }
  } else if (!getNoIndexTag()) {
    const tag = document.createElement('meta');
    tag.name = 'robots';
    tag.content = 'noindex';
    document.head.appendChild(tag);
  }
};
const TWProjectMetaFetcherHOC = function TWProjectMetaFetcherHOC(WrappedComponent) {
  class ProjectMetaFetcherComponent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    shouldComponentUpdate(nextProps) {
      return this.props.projectId !== nextProps.projectId;
    }
    componentDidMount() {
      this.fetchProjectMeta();
    }
    componentDidUpdate(prevProps) {
      if (this.props.projectId !== prevProps.projectId) {
        this.fetchProjectMeta();
      }
    }
    fetchProjectMeta() {
      var _this$props$vm$runtim;
      // project title resetting is handled in titled-hoc.jsx
      if ((_this$props$vm$runtim = this.props.vm.runtime.renderer) !== null && _this$props$vm$runtim !== void 0 && _this$props$vm$runtim.setPrivateSkinAccess) this.props.vm.runtime.renderer.setPrivateSkinAccess(true);
      this.props.onSetAuthor('', '');
      this.props.onSetDescription('', '');
      this.props.onSetRemixedProjectInfo(false, '', '');
      const projectId = this.props.projectId;
      // Don't try to load metadata for empty projects.
      if (projectId === '0') {
        return;
      }
      fetchProjectMeta(projectId).then(data => {
        /* todo: fix this and make it work properly */
        // window.LastFetchedProject = data
        // window.FetchedProjectRemixes = null
        // window.CurrentRemixFetchRequestId += 1
        // let currentReq = window.CurrentRemixFetchRequestId
        // fetchProjectRemixes(projectId).then(remixes => {
        //     if (!currentReq == window.CurrentRemixFetchRequestId) return console.log("abandoned request");
        //     if (remixes.length <= 0) {
        //         window.FetchedProjectRemixes = null;
        //         return;
        //     }
        //     window.FetchedProjectRemixes = remixes
        //     window.ForceProjectRemixListUpdate += 1
        // })
        const rawData = data;
        data = APIProjectToReadableProject(data);
        // If project ID changed, ignore the results.
        if (this.props.projectId !== projectId) {
          return;
        }
        const title = data.name;
        if (title) {
          this.props.onSetProjectTitle(title);
        }
        const authorName = data.author.username;
        const authorThumbnail = "https://projects.penguinmod.com/api/v1/users/getpfp?username=".concat(data.author.username);
        this.props.onSetAuthor(authorName, authorThumbnail);
        const instructions = data.desc || '';
        const credits = data.notes || '';
        if (instructions || credits) {
          this.props.onSetDescription(instructions, credits);
        }
        if (rawData.public === true) {
          this.props.onSetExtraProjectInfo(!rawData.softRejected, String(rawData.remix) !== '0', String(rawData.remix), false, authorName, new Date(rawData.lastUpdate), new Date(rawData.date), rawData.lastUpdate !== rawData.date);
          if (String(rawData.remix) !== '0') {
            // this is a remix, find the original project
            fetchProjectMeta(rawData.remix).then(remixProject => {
              // If project ID changed, ignore the results.
              if (this.props.projectId !== projectId) {
                return;
              }
              this.props.onSetRemixedProjectInfo(true,
              // loaded
              remixProject.title, remixProject.author.username);
            }).catch(err => {
              // this isnt fatal, just log
              _log__WEBPACK_IMPORTED_MODULE_3__["default"].warn('cannot fetch remixed project meta for this project;', err);
            });
          }
        }
        setIndexable(true);
      }).catch(err => {
        var _this$props$vm$runtim2;
        if ((_this$props$vm$runtim2 = this.props.vm.runtime.renderer) !== null && _this$props$vm$runtim2 !== void 0 && _this$props$vm$runtim2.setPrivateSkinAccess) this.props.vm.runtime.renderer.setPrivateSkinAccess(false);
        setIndexable(false);
        if ("".concat(err).includes('unshared')) {
          this.props.onSetDescription('unshared', 'unshared');
        }
        _log__WEBPACK_IMPORTED_MODULE_3__["default"].warn('cannot fetch project meta', err);
      });
    }
    render() {
      const _this$props = this.props,
        {
          /* eslint-disable no-unused-vars */
          projectId,
          onSetAuthor,
          onSetDescription,
          onSetProjectTitle,
          vm
          /* eslint-enable no-unused-vars */
        } = _this$props,
        props = _objectWithoutProperties(_this$props, _excluded);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, props);
    }
  }
  ProjectMetaFetcherComponent.propTypes = {
    projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    onSetAuthor: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onSetDescription: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    onSetProjectTitle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
    vm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
      runtime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
        renderer: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
          setPrivateSkinAccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
        })
      })
    })
  };
  const mapStateToProps = state => ({
    projectId: state.scratchGui.projectState.projectId,
    vm: state.scratchGui.vm
  });
  const mapDispatchToProps = dispatch => ({
    onSetAuthor: (username, thumbnail) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setAuthor"])({
      username,
      thumbnail
    })),
    onSetDescription: (instructions, credits) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setDescription"])({
      instructions,
      credits
    })),
    onSetExtraProjectInfo: (accepted, isRemix, remixId, tooLarge, author, releaseDate, uploadDate, isUpdated) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setExtraProjectInfo"])({
      accepted,
      isRemix,
      remixId,
      tooLarge,
      author,
      releaseDate,
      uploadDate,
      isUpdated
    })),
    onSetRemixedProjectInfo: (loaded, name, author) => dispatch(Object(_reducers_tw__WEBPACK_IMPORTED_MODULE_5__["setRemixedProjectInfo"])({
      loaded,
      name,
      author
    })),
    onSetProjectTitle: title => dispatch(Object(_reducers_project_title__WEBPACK_IMPORTED_MODULE_4__["setProjectTitle"])(title))
  });
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(ProjectMetaFetcherComponent);
};


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

/***/ "./src/playground/interface.css":
/*!**************************************!*\
  !*** ./src/playground/interface.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/cache-loader/dist/cjs.js??ref--5-1!../../node_modules/css-loader??ref--5-2!../../node_modules/postcss-loader/src??postcss!./interface.css */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/interface.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/load-service-worker.js":
/*!***********************************************!*\
  !*** ./src/playground/load-service-worker.js ***!
  \***********************************************/
/*! exports provided: loadServiceWorker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadServiceWorker", function() { return loadServiceWorker; });
/* harmony import */ var _lib_log__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/log */ "./src/lib/log.js");
/* harmony import */ var _file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !file-loader?name=sw.js!./service-worker.js */ "./node_modules/file-loader/dist/cjs.js?name=sw.js!./src/playground/service-worker.js");
/* harmony import */ var _file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1__);


let loaded = false;
const actuallyLoadServiceWorker = () => {
  navigator.serviceWorker.register(_file_loader_name_sw_js_service_worker_js__WEBPACK_IMPORTED_MODULE_1___default.a).catch(err => {
    _lib_log__WEBPACK_IMPORTED_MODULE_0__["default"].error('sw error', err);
  });
};
const loadServiceWorker = () => {
  if (false) {}
};


/***/ }),

/***/ "./src/playground/playground-interface.jsx":
/*!*************************************************!*\
  !*** ./src/playground/playground-interface.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-intl */ "./node_modules/react-intl/lib/index.es.js");
/* harmony import */ var _reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/project-state.js */ "./src/reducers/project-state.js");
/* harmony import */ var _containers_dom_element_renderer_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/dom-element-renderer.jsx */ "./src/containers/dom-element-renderer.jsx");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/error-boundary-hoc.jsx */ "./src/lib/error-boundary-hoc.jsx");
/* harmony import */ var _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/tw-project-meta-fetcher-hoc.jsx */ "./src/lib/tw-project-meta-fetcher-hoc.jsx");
/* harmony import */ var _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/tw-state-manager-hoc.jsx */ "./src/lib/tw-state-manager-hoc.jsx");
/* harmony import */ var _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/tw-theme-hoc.jsx */ "./src/lib/tw-theme-hoc.jsx");
/* harmony import */ var _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../lib/tw-packager-integration-hoc.jsx */ "./src/lib/tw-packager-integration-hoc.jsx");
/* harmony import */ var _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../addons/settings-store-singleton */ "./src/addons/settings-store-singleton.js");
/* harmony import */ var _lib_tw_fix_history_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../lib/tw-fix-history-api */ "./src/lib/tw-fix-history-api.js");
/* harmony import */ var _render_gui_jsx__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx");
/* harmony import */ var _addons_channels__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../addons/channels */ "./src/addons/channels.js");
/* harmony import */ var _load_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./load-service-worker */ "./src/playground/load-service-worker.js");
/* harmony import */ var _addons_entry__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../addons/entry */ "./src/addons/entry.js");
/* harmony import */ var _interface_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./interface.css */ "./src/playground/interface.css");
/* harmony import */ var _interface_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_interface_css__WEBPACK_IMPORTED_MODULE_20__);
const _excluded = ["intl", "hasCloudVariables", "description", "isFullScreen", "isLoading", "isPlayerOnly", "isRtl", "onClickTheme", "projectId"];
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */






















const messages = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["defineMessages"])({
  defaultTitle: {
    "id": "pm.playgroundDefaultTitle",
    "defaultMessage": "Playground"
  }
});
if (_addons_channels__WEBPACK_IMPORTED_MODULE_17__["default"].reloadChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_17__["default"].reloadChannel.addEventListener('message', () => {
    location.reload();
  });
}
if (_addons_channels__WEBPACK_IMPORTED_MODULE_17__["default"].changeChannel) {
  _addons_channels__WEBPACK_IMPORTED_MODULE_17__["default"].changeChannel.addEventListener('message', e => {
    _addons_settings_store_singleton__WEBPACK_IMPORTED_MODULE_14__["default"].setStoreWithVersionCheck(e.data);
  });
}
Object(_addons_entry__WEBPACK_IMPORTED_MODULE_19__["default"])();
class Interface extends react__WEBPACK_IMPORTED_MODULE_2___default.a.Component {
  constructor(props) {
    super(props);
    this.handleUpdateProjectTitle = this.handleUpdateProjectTitle.bind(this);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.isLoading && !this.props.isLoading) {
      Object(_load_service_worker__WEBPACK_IMPORTED_MODULE_18__["loadServiceWorker"])();
    }
  }
  handleUpdateProjectTitle(title, isDefault) {
    if (isDefault || !title) {
      document.title = "Permafy - ".concat(this.props.intl.formatMessage(messages.defaultTitle));
    } else {
      document.title = "".concat(title, " - Permafy");
    }
  }
  render() {
    const _this$props = this.props,
      {
        /* eslint-disable no-unused-vars */
        intl,
        hasCloudVariables,
        description,
        isFullScreen,
        isLoading,
        isPlayerOnly,
        isRtl,
        onClickTheme,
        projectId
        /* eslint-enable no-unused-vars */
      } = _this$props,
      props = _objectWithoutProperties(_this$props, _excluded);
    const isHomepage = false;
    const isEditor = true;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(_interface_css__WEBPACK_IMPORTED_MODULE_20___default.a.container, {
        [_interface_css__WEBPACK_IMPORTED_MODULE_20___default.a.playerOnly]: isHomepage,
        [_interface_css__WEBPACK_IMPORTED_MODULE_20___default.a.editor]: isEditor
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: _interface_css__WEBPACK_IMPORTED_MODULE_20___default.a.center,
      style: isPlayerOnly ? {
        // add a couple pixels to account for border (TODO: remove weird hack)
        width: "".concat(Math.max(480, props.customStageSize.width) + 2, "px")
      } : null
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_render_gui_jsx__WEBPACK_IMPORTED_MODULE_16__["default"], _extends({
      onClickTheme: onClickTheme,
      isPlayground: true,
      onUpdateProjectTitle: this.handleUpdateProjectTitle,
      backpackVisible: true,
      backpackHost: "_local_"
    }, props))));
  }
}
Interface.propTypes = {
  intl: react_intl__WEBPACK_IMPORTED_MODULE_5__["intlShape"],
  hasCloudVariables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  customStageSize: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
  }),
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    credits: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    instructions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  isFullScreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isPlayerOnly: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isRtl: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onClickTheme: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  projectId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
const mapStateToProps = state => ({
  hasCloudVariables: state.scratchGui.tw.hasCloudVariables,
  customStageSize: state.scratchGui.customStageSize,
  description: state.scratchGui.tw.description,
  isFullScreen: state.scratchGui.mode.isFullScreen,
  isLoading: Object(_reducers_project_state_js__WEBPACK_IMPORTED_MODULE_6__["getIsLoading"])(state.scratchGui.projectState.loadingState),
  isPlayerOnly: state.scratchGui.mode.isPlayerOnly,
  isRtl: state.locales.isRtl,
  projectId: state.scratchGui.projectState.projectId
});
const mapDispatchToProps = () => ({});
const ConnectedInterface = Object(react_intl__WEBPACK_IMPORTED_MODULE_5__["injectIntl"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Interface));
const WrappedInterface = Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_lib_error_boundary_hoc_jsx__WEBPACK_IMPORTED_MODULE_9__["default"])('TW Interface'), _lib_tw_project_meta_fetcher_hoc_jsx__WEBPACK_IMPORTED_MODULE_10__["default"], _lib_tw_state_manager_hoc_jsx__WEBPACK_IMPORTED_MODULE_11__["default"], _lib_tw_theme_hoc_jsx__WEBPACK_IMPORTED_MODULE_12__["default"], _lib_tw_packager_integration_hoc_jsx__WEBPACK_IMPORTED_MODULE_13__["default"])(ConnectedInterface);
/* harmony default export */ __webpack_exports__["default"] = (WrappedInterface);

/***/ }),

/***/ "./src/playground/playground.jsx":
/*!***************************************!*\
  !*** ./src/playground/playground.jsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import-first */ "./src/playground/import-first.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _playground_interface_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./playground-interface.jsx */ "./src/playground/playground-interface.jsx");
/* harmony import */ var _app_target__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-target */ "./src/playground/app-target.js");
/**
 * Copyright (C) 2021 Thomas Weber
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */







Object(react_modal__WEBPACK_IMPORTED_MODULE_3__["setAppElement"])(_app_target__WEBPACK_IMPORTED_MODULE_5__["default"]);
react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_playground_interface_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), _app_target__WEBPACK_IMPORTED_MODULE_5__["default"]);

/***/ })

/******/ });
//# sourceMappingURL=playground.js.map