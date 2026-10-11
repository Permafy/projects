(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-default-entry"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/color-picker/style.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-color-picker {\n  display: flex;\n}\n\n.sa-color-picker-code {\n  margin: 8px 0;\n}\n\n.sa-color-picker-paint {\n  margin-top: 16px;\n  margin-bottom: 4px;\n}\n\n.sa-color-picker > .sa-color-picker-color {\n  border: none;\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  padding: 0;\n  padding-left: 0.6rem;\n  padding-right: 0.4rem;\n  margin-left: 0.5rem;\n  outline: none;\n  box-sizing: border-box;\n  width: 3rem;\n  height: 2rem;\n}\n[theme=\"dark\"] .sa-color-picker > .sa-color-picker-color {\n  background: var(--ui-secondary);\n}\n\n.sa-color-picker > .sa-color-picker-text {\n  box-sizing: border-box;\n  width: calc(150px - 3rem);\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-color {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-top-right-radius: 1rem;\n  border-bottom-right-radius: 1rem;\n  margin-left: 0;\n  margin-right: 0.5rem;\n}\n\n[dir=\"rtl\"] .sa-color-picker > .sa-color-picker-text {\n  border-top-left-radius: 1rem;\n  border-bottom-left-radius: 1rem;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\nbody.sa-hide-eye-dropper-background div[class*=\"stage_color-picker-background\"] {\n  /* Do not show eye dropper background if the color picker is \"fake\" */\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/copy-reporter/style.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/copy-reporter/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-copy-reporter-icon {\n  cursor: pointer;\n  float: right;\n  display: block;\n  user-select: none;\n  filter: var(--editorDarkMode-accent-filter, none);\n  width: 100%;\n  height: 14px;\n  margin-top: 2px;\n  padding-top: 2px;\n  border-top: dashed 1px #575e75;\n}\n\n.valueReportBox {\n  user-select: text;\n  display: block;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-comment-previews/userstyle.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-comment-preview-outer {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100000000;\n  pointer-events: none;\n}\n\n.sa-comment-preview-inner {\n  width: calc(200px - 16px);\n  max-height: calc(132px - 8px);\n  padding: 8px;\n  overflow: hidden;\n\n  font-size: 12px;\n  white-space: pre-wrap;\n  pointer-events: none;\n\n  color: rgb(87, 94, 117);\n  background-color: rgb(255 255 255 / 90%);\n  border-style: none;\n  border-radius: 8px;\n  filter: drop-shadow(0px 5px 5px rgb(0 0 0 / 10%));\n\n  transform: perspective(200px);\n}\n\n@supports (backdrop-filter: blur(16px)) {\n  .sa-comment-preview-inner {\n    background-color: rgb(255 255 255 / 75%);\n    backdrop-filter: blur(16px);\n  }\n}\n\n.sa-comment-preview-fade {\n  transition: opacity 0.1s, filter 0.1s, transform 0.1s linear;\n}\n\n.sa-comment-preview-hidden {\n  opacity: 0;\n  filter: none;\n  transform: perspective(200px) translateZ(-20px);\n}\n\n.sa-comment-preview-reduce-transparency {\n  background-color: rgb(255 255 255);\n  backdrop-filter: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-searchable-dropdowns/userscript.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".u-dropdown-searchbar {\n  width: 100%;\n  box-sizing: border-box;\n  /* based on styles for the title input */\n  color: white;\n  background-color: hsla(0, 100%, 100%, 0.25);\n  border: 1px solid hsla(0, 0%, 0%, 0.15);\n  padding: 0.5rem;\n  outline: none;\n  transition: 0.25s ease-out;\n  font-size: 13px;\n  font-weight: bold;\n  border-radius: 4px;\n}\n.u-dropdown-searchbar:hover {\n  background-color: hsla(0, 100%, 100%, 0.5);\n}\n.u-dropdown-searchbar:focus {\n  background-color: white;\n  color: black;\n}\n.blocklyDropDownDiv .goog-menu {\n  overflow-x: hidden;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-theme3/compatibility.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Imported by other addons */\n\n.sa-block-color {\n  --sa-block-colored-background: var(--sa-block-background-primary);\n  --sa-block-colored-background-secondary: var(--sa-block-field-background);\n  --sa-block-bright-background: var(--sa-block-background-primary);\n  --sa-block-text: white;\n  --sa-block-gray-text: white;\n  --sa-block-colored-text: var(--sa-block-background-primary);\n  --sa-block-text-on-bright-background: white;\n}\n\n.sa-block-color-motion {\n  --sa-block-background-primary: var(--editorTheme3-motion-primary, #4c97ff);\n  --sa-block-background-secondary: var(--editorTheme3-motion-secondary, #4280d7);\n  --sa-block-background-tertiary: var(--editorTheme3-motion-tertiary, #3373cc);\n  --sa-block-field-background: var(--editorTheme3-motion-field, #3373cc);\n}\n\n.sa-block-color-looks {\n  --sa-block-background-primary: var(--editorTheme3-looks-primary, #9966ff);\n  --sa-block-background-secondary: var(--editorTheme3-looks-secondary, #855cd6);\n  --sa-block-background-tertiary: var(--editorTheme3-looks-tertiary, #774dcb);\n  --sa-block-field-background: var(--editorTheme3-looks-field, #774dcb);\n}\n\n.sa-block-color-sounds {\n  --sa-block-background-primary: var(--editorTheme3-sounds-primary, #cf63cf);\n  --sa-block-background-secondary: var(--editorTheme3-sounds-secondary, #c94fc9);\n  --sa-block-background-tertiary: var(--editorTheme3-sounds-tertiary, #bd42bd);\n  --sa-block-field-background: var(--editorTheme3-sounds-field, #bd42bd);\n}\n\n.sa-block-color-events {\n  --sa-block-background-primary: var(--editorTheme3-event-primary, #ffbf00);\n  --sa-block-background-secondary: var(--editorTheme3-event-secondary, #e6ac00);\n  --sa-block-background-tertiary: var(--editorTheme3-event-tertiary, #cc9900);\n  --sa-block-field-background: var(--editorTheme3-event-field, #cc9900);\n}\n\n.sa-block-color-control {\n  --sa-block-background-primary: var(--editorTheme3-control-primary, #ffab19);\n  --sa-block-background-secondary: var(--editorTheme3-control-secondary, #ec9c13);\n  --sa-block-background-tertiary: var(--editorTheme3-control-tertiary, #cf8b17);\n  --sa-block-field-background: var(--editorTheme3-control-field, #cf8b17);\n}\n\n.sa-block-color-sensing {\n  --sa-block-background-primary: var(--editorTheme3-sensing-primary, #5cb1d6);\n  --sa-block-background-secondary: var(--editorTheme3-sensing-secondary, #47a8d1);\n  --sa-block-background-tertiary: var(--editorTheme3-sensing-tertiary, #2e8eb8);\n  --sa-block-field-background: var(--editorTheme3-sensing-field, #2e8eb8);\n}\n\n.sa-block-color-operators {\n  --sa-block-background-primary: var(--editorTheme3-operators-primary, #59c059);\n  --sa-block-background-secondary: var(--editorTheme3-operators-secondary, #46b946);\n  --sa-block-background-tertiary: var(--editorTheme3-operators-tertiary, #389438);\n  --sa-block-field-background: var(--editorTheme3-operators-field, #389438);\n}\n\n.sa-block-color-data {\n  --sa-block-background-primary: var(--editorTheme3-data-primary, #ff8c1a);\n  --sa-block-background-secondary: var(--editorTheme3-data-secondary, #ff8000);\n  --sa-block-background-tertiary: var(--editorTheme3-data-tertiary, #db6e00);\n  --sa-block-field-background: var(--editorTheme3-data-field, #db6e00);\n}\n\n.sa-block-color-data-lists,\n.sa-block-color-list {\n  --sa-block-background-primary: var(--editorTheme3-data_lists-primary, #ff661a);\n  --sa-block-background-secondary: var(--editorTheme3-data_lists-secondary, #ff5500);\n  --sa-block-background-tertiary: var(--editorTheme3-data_lists-tertiary, #e64d00);\n  --sa-block-field-background: var(--editorTheme3-data_lists-field, #e64d00);\n}\n\n.sa-block-color-more,\n.sa-block-color-null {\n  --sa-block-background-primary: var(--editorTheme3-more-primary, #ff6680);\n  --sa-block-background-secondary: var(--editorTheme3-more-secondary, #ff4d6a);\n  --sa-block-background-tertiary: var(--editorTheme3-more-tertiary, #ff3355);\n  --sa-block-field-background: var(--editorTheme3-more-field, #ff3355);\n}\n\n.sa-block-color-pen {\n  --sa-block-background-primary: var(--editorTheme3-pen-primary, #0fbd8c);\n  --sa-block-background-secondary: var(--editorTheme3-pen-secondary, #0da57a);\n  --sa-block-background-tertiary: var(--editorTheme3-pen-tertiary, #0b8e69);\n  --sa-block-field-background: var(--editorTheme3-pen-field, #0b8e69);\n}\n\n.sa-block-color-addon-custom-block {\n  --sa-block-background-primary: var(--editorTheme3-sa-primary, #29beb8);\n  --sa-block-background-secondary: var(--editorTheme3-sa-secondary, #3aa8a4);\n  --sa-block-background-tertiary: var(--editorTheme3-sa-tertiary, #3aa8a4);\n  --sa-block-field-background: var(--editorTheme3-sa-field, #3aa8a4);\n}\n\n.sa-block-color-TurboWarp {\n  --sa-block-background-primary: var(--editorTheme3-tw-primary, #ff4c4c);\n  --sa-block-background-secondary: var(--editorTheme3-tw-secondary, #e64444);\n  --sa-block-background-tertiary: var(--editorTheme3-tw-tertiary, #e64444);\n  --sa-block-field-background: var(--editorTheme3-tw-field, #e64444);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/find-bar/userstyle.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, ".sa-find-bar {\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  width: 100%;\n  height: 100%;\n  margin-left: 1em;\n}\n.sa-find-bar[hidden] {\n  /* !important to override displayNoneWhileDisabled */\n  display: none !important;\n}\n\n.sa-find-wrapper {\n  overflow: visible;\n  position: relative;\n  height: 2rem;\n  width: 100%;\n  max-width: 16em;\n}\n\n.sa-find-dropdown-out {\n  display: block;\n  top: -6px;\n  z-index: 100;\n  width: 100%;\n  max-width: 16em;\n  position: relative;\n  padding: 4px;\n  border: none;\n  border-radius: 4px;\n  margin-top: 6px;\n}\n\n.sa-find-dropdown-out.visible {\n  position: absolute;\n  width: 16em;\n  box-shadow: 0px 0px 8px 1px var(--ui-black-transparent, rgba(0, 0, 0, 0.3));\n  background-color: var(--ui-primary, white);\n}\n\n/* We need to modify Scratch styles so that the place where the find bar is injected */\n/* has actually correct size information, which is used to make the find bar not cover up controls */\n[class*=\"gui_tab-list_\"] {\n  width: 100%;\n}\n[class*=\"gui_tab_\"] {\n  flex-grow: 0;\n}\n\n.sa-find-input {\n  width: 100%;\n  box-sizing: border-box !important;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.4em;\n}\n\n.sa-find-input:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n.sa-find-dropdown {\n  display: none;\n  position: relative;\n  padding: 0.2em 0;\n  font-size: 0.75rem;\n  line-height: 1;\n  overflow-y: auto;\n  min-height: 128px;\n  max-height: 65vh;\n  user-select: none;\n  max-width: 100%;\n  margin-top: 6px;\n  border: none;\n}\n\n.sa-find-dropdown-out.visible > .sa-find-dropdown {\n  display: block;\n}\n\n.sa-find-dropdown > li {\n  display: block;\n  padding: 0.5em 0.3em;\n  white-space: nowrap;\n  margin: 0;\n  font-weight: bold;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n\n.sa-find-dropdown > li > b {\n  background-color: #aaffaa;\n  color: black;\n}\n\n/* Drop down items */\n.sa-find-dropdown > li:hover,\n.sa-find-dropdown > li.sel {\n  color: var(--sa-block-text-on-bright-background);\n  cursor: pointer;\n}\n\n.sa-find-dropdown > li::before {\n  content: \"\\25CF   \"; /* ● */\n}\n\n.sa-find-flag {\n  color: #4cbf56;\n}\n/* .sa-find-dropdown added for specificity */\n.sa-find-dropdown > .sa-find-flag:hover,\n.sa-find-dropdown > .sa-find-flag.sel {\n  background-color: #4cbf56;\n  color: white;\n}\n\n.sa-find-dropdown .sa-block-color {\n  color: var(--sa-block-colored-text);\n}\n.sa-find-dropdown .sa-block-color:hover,\n.sa-find-dropdown .sa-block-color.sel {\n  background-color: var(--sa-block-bright-background);\n}\n\n.sa-find-carousel {\n  font-weight: normal;\n  position: absolute;\n  right: 0;\n  white-space: nowrap;\n  background-color: inherit;\n  z-index: 1;\n  padding: 0;\n}\n\n.sa-find-carousel-control {\n  padding: 0 6px;\n}\n\n.sa-find-carousel-control:hover {\n  color: #ffff80;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/folders/style.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-folders-contextmenu-item {\n  max-width: 250px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n[sa-folders-context-type=\"folder\"] .react-contextmenu > :not(.sa-ctx-menu) {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/middle-click-popup/userstyle.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../../node_modules/css-loader!../editor-theme3/compatibility.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-theme3/compatibility.css"), "");

// module
exports.push([module.i, ".sa-mcp-root {\n  display: flex;\n  white-space: nowrap;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n\n  position: absolute;\n  min-width: 100px;\n  background-color: white;\n  border-radius: 4px;\n  box-shadow:\n    rgba(0, 0, 0, 0.3) 0 0 3px,\n    rgba(0, 0, 0, 0.2) 0 3px 10px;\n\n  z-index: 999;\n}\n\n.sa-mcp-container {\n  display: flex;\n  flex-flow: column;\n  top: -6px;\n  z-index: 100;\n  position: absolute;\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  background-color: white;\n  border: none;\n  border-radius: 4px;\n  overflow: auto;\n  resize: both;\n}\n[theme=\"dark\"] .sa-mcp-container {\n  background-color: #222;\n}\n\n.sa-mcp-input-wrapper {\n  position: relative;\n  margin: 4px;\n  /* !important required for extension, because CSS injection method (and hence order) differs from addon */\n  box-sizing: border-box !important;\n  height: 1.5rem;\n  min-height: 1.5rem;\n\n  /* Change Scratch default styles */\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  padding-left: 0.2rem;\n  padding-right: 0.2rem;\n}\n\n.sa-mcp-input-wrapper:focus {\n  /* Change Scratch default styles */\n  box-shadow: none;\n}\n\n.sa-mcp-input-wrapper[data-error=\"true\"] {\n  border-color: red;\n}\n\n.sa-mcp-input-wrapper > input {\n  position: absolute;\n  border: 0;\n  background-color: transparent;\n  outline: none;\n  width: 100%;\n  height: 100%;\n  line-height: 100%;\n  box-sizing: border-box;\n}\n\n.sa-mcp-input-suggestion {\n  color: hsla(225, 15%, 40%, 0.65);\n}\n\n.sa-mcp-preview-container {\n  flex: auto;\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n\n.sa-mcp-preview-container::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n.sa-mcp-preview-blocks {\n  width: 100%;\n  min-height: 100%;\n  /* https://stackoverflow.com/a/22166728/8448397 */\n  float: left;\n}\n\n.sa-mcp-preview-scrollbar {\n  position: absolute;\n  width: 11px;\n  right: 0;\n  bottom: 0;\n}\n\n.sa-mcp-preview-block-bg {\n  width: 100%;\n  fill: transparent;\n  cursor: grab;\n}\n\n.sa-mcp-preview-block {\n  filter: brightness(95%);\n  cursor: grab;\n}\n\n.sa-mcp-preview-block-selection {\n  filter: brightness(103%);\n}\n\n.sa-mcp-preview-block-bg-selection {\n  fill: #7774;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/multi-tab-code/userstyle.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/multi-tab-code/userstyle.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-scroller {\n  width: max-content;\n  display: flex;\n  position: absolute;\n}\n.tab-scrollbar {\n  position: absolute;\n  background-color: black;\n  height: 1px;\n  width: 20px;\n  bottom: 0;\n}\n.tab-scrollbar:hover { height: 3px; }\n.tab-wrapper {\n  position: absolute;\n  right: 0;\n  height: 17px;\n  overflow-x: hidden;\n  overflow-y: visible;\n  scrollbar-width: thin;\n}\n.tab-wrapper.copying {\n  height: 29px;\n}\n.tab-adder-button {\n  width: 12px;\n  height: 12px;\n  margin: 1px;\n  margin-right: 11px;\n  border-radius: 3px;\n  border: none;\n}\n[theme=dark] .tab-adder-button {\n  filter: invert(1);\n}\n.tab-adder-button:hover {\n  background-color: rgba(0 0 0 / 15%);\n}\n.tab-bounds {\n  height: 14px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: max-content;\n}\n.tab-bounds.copying {\n  height: 28px;\n}\n.tab {\n  border-radius: 3px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  padding: 1px 4px;\n  min-width: 20px;\n  font-size: 10px;\n  text-align: center;\n  cursor: pointer;\n  overflow-y: hidden;\n  user-select: none;\n  background-color: var(--ui-primary, hsla(215, 100%, 95%, 1));\n  border: 1px solid var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15));\n  color: var(--text-primary, hsla(225, 15%, 40%, 1));\n  border-top: none;\n  transition: height 100ms ease-in, color 100ms ease-in;\n}\n.tab.unselected {\n  height: 7px;\n  color: transparent;\n}\n.tab.hover {\n  height: 10px;\n  color: #333;\n}\n.tab.selected {\n  height: 14px;\n  color: var(--text-primary, hsla(225, 15%, 40%, 1));\n}\n.tab.copying {\n  height: 28px;\n  color: var(--text-primary, hsla(225, 15%, 40%, 1));\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/onion-skinning/style.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-onion-button {\n  position: relative;\n}\n.sa-onion-button:focus-within {\n  background-color: hsla(194, 100%, 50%, 0.2);\n}\n[theme=\"dark\"] .sa-onion-image {\n  filter: brightness(0) invert(0.8);\n}\n.sa-onion-button[data-enabled=\"true\"] .sa-onion-image {\n  filter: brightness(0) invert(1);\n}\n.sa-onion-button[data-enabled=\"true\"] {\n  background-color: #00c3ff;\n}\n\n.sa-onion-group {\n  position: relative;\n  flex-direction: row;\n}\n\n.sa-onion-settings-wrapper {\n  position: absolute;\n  justify-items: center;\n  left: 50%;\n  width: 1.95rem;\n  height: 1.95rem;\n  display: grid;\n}\n\n.sa-onion-settings {\n  position: absolute;\n  bottom: 100%;\n  /* based on the styles for the color dropdown */\n  padding: 4px;\n  border-radius: 4px;\n  border: 1px solid var(--paint-ui-pane-border, #ddd);\n  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.3);\n  transition-property: bottom, opacity;\n  transition-duration: 500ms;\n  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);\n  opacity: 0;\n  pointer-events: none;\n  background: var(--ui-primary, white);\n  min-height: 100%;\n  min-width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25em;\n}\n.sa-onion-settings[data-visible=\"true\"] {\n  bottom: calc(100% + 22px);\n  pointer-events: auto;\n  opacity: 1;\n}\n\n.sa-onion-settings-line {\n  display: flex;\n  justify-content: flex-end;\n  align-items: baseline;\n  gap: 0.25em;\n}\n\n.sa-onion-settings-input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  text-align: center;\n  border: 0;\n  background: transparent;\n  -moz-appearance: textfield;\n  border: 0;\n  outline: 0;\n}\n\n.sa-onion-settings-input::-webkit-outer-spin-button,\n.sa-onion-settings-input::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.sa-onion-settings-tip {\n  position: absolute;\n  bottom: 0;\n  transform: translateY(100%);\n  right: calc(50% - 7px);\n}\n.sa-onion-settings-polygon {\n  fill: var(--ui-primary, white);\n  stroke: var(--paint-ui-pane-border, #ddd);\n}\n\n.sa-onion-settings-label {\n  white-space: nowrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/pick-colors-from-stage/style.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-stage-color-picker-picking [class^=\"stage_color-picker-background_\"] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css":
/*!**************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/reorder-custom-inputs/arrows.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blocklyTextShiftArrow {\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  margin-left: -12.5px;\n  cursor: pointer;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/toolbox-category-drag/userstyle.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/toolbox-category-drag/userstyle.css ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div[class=\"scratchCategoryMenuRow\"][data-dragger=\"true\"] > div {\n    background: white;\n    font-size: 0.65rem;\n}\n\n[theme=\"dark\"] div[class=\"scratchCategoryMenuRow\"][data-dragger=\"true\"] > div {\n    background: var(--ui-secondary);\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/toolbox-full-blocks-on-hover/userstyle.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/toolbox-full-blocks-on-hover/userstyle.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[class*=\"blocks_blocks_\"] .blocklyFlyout:has(.blocklyDraggable:hover) {\n    overflow: visible;\n    z-index: 31;\n}\n\n[class*=\"blocks_blocks_\"] .blocklyFlyout:has(.blocklyDraggable:hover) .blocklyWorkspace {\n    clip-path: unset !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/copy-reporter/copy.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/copy-reporter/copy.svg ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTIxLDguOTRhMS4zMSwxLjMxLDAsMCwwLS4wNi0uMjdsMC0uMDlhMS4wNywxLjA3LDAsMCwwLS4xOS0uMjhoMGwtNi02aDBhMS4wNywxLjA3LDAsMCwwLS4yOC0uMTkuMzIuMzIsMCwwLDAtLjA5LDBBLjg4Ljg4LDAsMCwwLDE0LjA1LDJIMTBBMywzLDAsMCwwLDcsNVY2SDZBMywzLDAsMCwwLDMsOVYxOWEzLDMsMCwwLDAsMywzaDhhMywzLDAsMCwwLDMtM1YxOGgxYTMsMywwLDAsMCwzLTNWOVMyMSw5LDIxLDguOTRaTTE1LDUuNDEsMTcuNTksOEgxNmExLDEsMCwwLDEtMS0xWk0xNSwxOWExLDEsMCwwLDEtMSwxSDZhMSwxLDAsMCwxLTEtMVY5QTEsMSwwLDAsMSw2LDhIN3Y3YTMsMywwLDAsMCwzLDNoNVptNC00YTEsMSwwLDAsMS0xLDFIMTBhMSwxLDAsMCwxLTEtMVY1YTEsMSwwLDAsMSwxLTFoM1Y3YTMsMywwLDAsMCwzLDNoM1oiIGZpbGw9IiM1NzVlNzUiLz48L3N2Zz4K");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg":
/*!*************************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3LjQ4IDcuNDgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZmZmO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGU+aWNvbi0tYWRkPC90aXRsZT48bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIzLjc0IiB5MT0iNi40OCIgeDI9IjMuNzQiIHkyPSIxIi8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iMSIgeTE9IjMuNzQiIHgyPSI2LjQ4IiB5Mj0iMy43NCIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg":
/*!************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0xMCA0SDRjLTEuMSAwLTEuOTkuOS0xLjk5IDJMMiAxOGMwIDEuMS45IDIgMiAyaDE2YzEuMSAwIDItLjkgMi0yVjhjMC0xLjEtLjktMi0yLTJoLThsLTItMnoiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/multi-tab-code/add.svg":
/*!****************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/multi-tab-code/add.svg ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZwogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICAgd2lkdGg9IjE0IgogICAgaGVpZ2h0PSIxNCIKICAgIHZpZXdCb3g9IjAgMCAxMCAxMCIKICAgIHN0cm9rZT0iYmxhY2siCiAgICBzdHJva2UtbGluZWNhcD0icm91bmQiCj4KICAgIDxsaW5lIHgxPSI1IiB5MT0iMS41IiB4Mj0iNSIgeTI9IjguNSI+PC9saW5lPgogICAgPGxpbmUgeDE9IjEuNSIgeTE9IjUiIHgyPSI4LjUiIHkyPSI1Ij48L2xpbmU+Cjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg":
/*!**********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHdpZHRoPSIyNCI+PHBhdGggc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUgMTEuMzU4aDE3LjUwMXYxLjI4NUgzLjI1eiIvPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwKSIgc3R5bGU9ImZpbGw6IzU3NWU3NTtzdHJva2Utd2lkdGg6LjczNDczNiIgZD0iTTMuMjUtMTIuNjQyaDE3LjUwMXYxLjI4NUgzLjI1eiIvPjwvc3ZnPg==");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg":
/*!*********************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggc3R5bGU9Im9wYWNpdHk6Ljc1O2ZpbGw6bm9uZTtzdHJva2U6IzAwMDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgZD0iTTU2IDE2djk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4zNzYgLTIuMzc2KSBzY2FsZSguMjI0NjIpIi8+PHBhdGggc3R5bGU9Im9wYWNpdHk6LjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNDAgMzJ2NjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouMjU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNMjQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNzU7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiBkPSJNNzIgMTZ2OTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik04OCAzMnY2NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMzc2IC0yLjM3Nikgc2NhbGUoLjIyNDYyKSIvPjxwYXRoIHN0eWxlPSJvcGFjaXR5Oi4yNTtmaWxsOm5vbmU7c3Ryb2tlOiMwMDA7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIGQ9Ik0xMDQgNDh2MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjM3NiAtMi4zNzYpIHNjYWxlKC4yMjQ2MikiLz48L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg":
/*!*******************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PGcgc3Ryb2tlLXdpZHRoPSIxLjIiIHN0cm9rZT0iIzAwMTAyNiI+PGcgc3R5bGU9Im9wYWNpdHk6LjU7c3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lIj48cGF0aCBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZmlsbD0iI2JmYmZiZiIgZD0iTTY4LjQ1IDMyLjQ1N2MuMy0uMi44LS4xLjkuM2wyLjYgMTAuN3M2LjQgNC43IDguMyA4YzMuMiA1LjUgMy4zIDEwIDMuMyAxMHM3LjEgMi4xIDguMyA3LjhjMS4yIDUuNy0zLjIgMTYuNS0yMiAyMC4yLTE4LjggMy43LTMzLjktMS40LTQxLTEyLjgtNy4xLTExLjQgNC4xLTI1IDMuNS0yNC4ybC0yLjEtMTcuOWMtLjEtLjQuNC0uNy44LS41bDEyLjEgNy45czQuNS0xLjcgOS4yLTEuOWMyLjgtLjIgNS4yIDAgNy41LjR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNC42NTIgLTQuNjUpIHNjYWxlKC4yMzI5KSIvPjxwYXRoIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9Ik0xMDEuNjUgNjIuOTU3Yy00LjcgMy44LTExLjkgMy45LTExLjkgMy45bTEwLjYgNy4zYy02LjMuNS0xMC4yLTEuNC0xMC4yLTEuNG0tNjguOC0xMC4xczguNiAyLjggMTIuMSA1LjltLjMgMy41Yy00LjMgMS43LTExLjcuNi0xMS43LjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00LjY1MiAtNC42NSkgc2NhbGUoLjIzMjkpIi8+PC9nPjxnIHN0eWxlPSJvcGFjaXR5Oi43NTtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmUiPjxwYXRoIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBmaWxsPSIjYmZiZmJmIiBkPSJNNjguNDUgMzIuNDU3Yy4zLS4yLjgtLjEuOS4zbDIuNiAxMC43czYuNCA0LjcgOC4zIDhjMy4yIDUuNSAzLjMgMTAgMy4zIDEwczcuMSAyLjEgOC4zIDcuOGMxLjIgNS43LTMuMiAxNi41LTIyIDIwLjItMTguOCAzLjctMzMuOS0xLjQtNDEtMTIuOC03LjEtMTEuNCA0LjEtMjUgMy41LTI0LjJsLTIuMS0xNy45Yy0uMS0uNC40LS43LjgtLjVsMTIuMSA3LjlzNC41LTEuNyA5LjItMS45YzIuOC0uMiA1LjIgMCA3LjUuNHoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjMyMyAtMi4zMjEpIHNjYWxlKC4yMzI5KSIvPjxwYXRoIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTpub3JtYWw7ZmlsbDpub25lO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZS13aWR0aDo0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiIGZpbGw9Im5vbmUiIGQ9Ik0xMDEuNjUgNjIuOTU3Yy00LjcgMy44LTExLjkgMy45LTExLjkgMy45bTEwLjYgNy4zYy02LjMuNS0xMC4yLTEuNC0xMC4yLTEuNG0tNjguOC0xMC4xczguNiAyLjggMTIuMSA1LjltLjMgMy41Yy00LjMgMS43LTExLjcuNi0xMS43LjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjMyMyAtMi4zMjEpIHNjYWxlKC4yMzI5KSIvPjwvZz48ZyBzdHlsZT0ic3Ryb2tlLXdpZHRoOjQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7c3Ryb2tlLWRhc2hhcnJheTpub25lIj48cGF0aCBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6I2ZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgZmlsbD0iI2JmYmZiZiIgZD0iTTczLjQ1IDM3LjQ1N2MuMy0uMi44LS4xLjkuM2wyLjYgMTAuN3M2LjQgNC43IDguMyA4YzMuMiA1LjUgMy4zIDEwIDMuMyAxMHM3LjEgMi4xIDguMyA3LjhjMS4yIDUuNy0zLjIgMTYuNS0yMiAyMC4yLTE4LjggMy43LTMzLjktMS40LTQxLTEyLjgtNy4xLTExLjQgNC4xLTI1IDMuNS0yNC4ybC0yLjEtMTcuOWMtLjEtLjQuNC0uNy44LS41bDEyLjEgNy45czQuNS0xLjcgOS4yLTEuOWMyLjgtLjIgNS4yIDAgNy41LjR6IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNTkgLTEuMTU3KSBzY2FsZSguMjMyOSkiLz48cGF0aCBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6bm9ybWFsO2ZpbGw6bm9uZTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2Utd2lkdGg6NDtzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBmaWxsPSJub25lIiBkPSJNMTA2LjY1IDY3Ljk1N2MtNC43IDMuOC0xMS45IDMuOS0xMS45IDMuOW0xMC42IDcuM2MtNi4zLjUtMTAuMi0xLjQtMTAuMi0xLjRtLTY4LjgtMTAuMXM4LjYgMi44IDEyLjEgNS45bS4zIDMuNWMtNC4zIDEuNy0xMS43LjYtMTEuNy42IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4xNTkgLTEuMTU3KSBzY2FsZSguMjMyOSkiLz48L2c+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/_runtime_entry.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/_runtime_entry.js ***!
  \*********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/bitmap-copy/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/bitmap-copy/userscript.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/bitmap-copy/userscript.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let {
    addon,
    console
  } = _ref;
  if (!addon.tab.redux.state) return console.warn("Redux is not available!");
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", _ref2 => {
    let {
      detail
    } = _ref2;
    if (addon.self.disabled) return;
    const e = detail;
    if (!e.action || e.action.type !== "scratch-paint/clipboard/SET") return;
    const items = e.next.scratchPaint.clipboard.items;
    if (items.length !== 1) return;
    const firstItem = items[0];
    // TODO vector support
    if (!Array.isArray(firstItem) || firstItem[0] !== "Raster") return console.log("copied element is vector");
    const dataURL = firstItem[1].source;
    addon.tab.copyImage(dataURL).then(() => console.log("Image successfully copied")).catch(e => console.error("Image could not be copied: ".concat(e)));
  });
});

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/_runtime_entry.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/_runtime_entry.js ***!
  \******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-cherry-picking/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-cherry-picking/userscript.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/block-cherry-picking/userscript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../block-duplicate/module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const update = () => {
    _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["setCherryPicking"](!addon.self.disabled, addon.settings.get("invertDrag"));
  };
  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  addon.settings.addEventListener("change", update);
  update();
  _block_duplicate_module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-duplicate/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-duplicate/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-duplicate/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-duplicate/module.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/block-duplicate/module.js ***!
  \*****************************************************/
/*! exports provided: setCherryPicking, setDuplication, load */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCherryPicking", function() { return setCherryPicking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDuplication", function() { return setDuplication; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
let enableCherryPicking = false;
let invertCherryPicking = false;
function setCherryPicking(newEnabled, newInverted) {
  enableCherryPicking = newEnabled;
  // If cherry picking is disabled, also disable invert. Duplicating blocks can still cause
  // this setting to be used.
  invertCherryPicking = newEnabled && newInverted;
}
let enableDuplication = false;
function setDuplication(newEnabled) {
  enableDuplication = newEnabled;
}

// mostRecentEvent_ is sometimes a fake event, so we can't rely on reading its properties.
let ctrlOrMetaPressed = false;
let altPressed = false;
document.addEventListener("mousedown", function (e) {
  ctrlOrMetaPressed = e.ctrlKey || e.metaKey;
  altPressed = e.altKey;
}, {
  capture: true
});
let loaded = false;
async function load(addon) {
  if (loaded) {
    return;
  }
  loaded = true;
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  // https://github.com/LLK/scratch-blocks/blob/912b8cc728bea8fd91af85078c64fcdbfe21c87a/core/gesture.js#L454
  const originalStartDraggingBlock = ScratchBlocks.Gesture.prototype.startDraggingBlock_;
  ScratchBlocks.Gesture.prototype.startDraggingBlock_ = function () {
    let block = this.targetBlock_;

    // Scratch uses fake mouse events to implement right click > duplicate
    const isRightClickDuplicate = !(this.mostRecentEvent_ instanceof MouseEvent);
    const isDuplicating = enableDuplication && altPressed && !isRightClickDuplicate && !this.flyout_ && !this.shouldDuplicateOnDrag_ && (this.targetBlock_.type !== "procedures_definition" || this.targetBlock_.type !== "procedures_definition_return");
    const isCherryPickingInverted = invertCherryPicking && !isRightClickDuplicate && block.getParent();
    const canCherryPick = enableCherryPicking || isDuplicating;
    const isCherryPicking = canCherryPick && ctrlOrMetaPressed === !isCherryPickingInverted && !block.isShadow();
    if (isDuplicating || isCherryPicking) {
      if (!ScratchBlocks.Events.getGroup()) {
        // Scratch will disable grouping on its own later.
        ScratchBlocks.Events.setGroup(true);
      }
    }
    if (isDuplicating) {
      // Based on https://github.com/LLK/scratch-blocks/blob/feda366947432b9d82a4f212f43ff6d4ab6f252f/core/scratch_blocks_utils.js#L171
      // Setting this.shouldDuplicateOnDrag_ = true does NOT work because it doesn't call changeObscuredShadowIds
      this.startWorkspace_.setResizesEnabled(false);
      ScratchBlocks.Events.disable();
      let newBlock;
      try {
        const xmlBlock = ScratchBlocks.Xml.blockToDom(block);
        newBlock = ScratchBlocks.Xml.domToBlock(xmlBlock, this.startWorkspace_);
        ScratchBlocks.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
        const xy = block.getRelativeToSurfaceXY();
        newBlock.moveBy(xy.x, xy.y);
      } catch (e) {
        console.error(e);
      }
      ScratchBlocks.Events.enable();
      if (newBlock) {
        block = newBlock;
        this.targetBlock_ = newBlock;
        if (ScratchBlocks.Events.isEnabled()) {
          ScratchBlocks.Events.fire(new ScratchBlocks.Events.BlockCreate(newBlock));
        }
      }
    }
    if (isCherryPicking) {
      if (isRightClickDuplicate || isDuplicating) {
        const nextBlock = block.getNextBlock();
        if (nextBlock) {
          nextBlock.dispose();
        }
      }
      block.unplug(true);
    }
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return originalStartDraggingBlock.call(this, ...args);
  };
}

/***/ }),

/***/ "./src/addons/addons/block-duplicate/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-duplicate/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/block-duplicate/module.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const update = () => {
    _module_js__WEBPACK_IMPORTED_MODULE_0__["setDuplication"](!addon.self.disabled);
  };
  addon.self.addEventListener("disabled", update);
  addon.self.addEventListener("reenabled", update);
  update();
  _module_js__WEBPACK_IMPORTED_MODULE_0__["load"](addon);
});

/***/ }),

/***/ "./src/addons/addons/block-pins/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/block-pins/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-pins/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-pins/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/block-pins/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Block Pinning
// By: SharkPool

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const categoryIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MC42OTIiIGhlaWdodD0iNzAuNjkyIiB2aWV3Qm94PSIwIDAgNzAuNjkyIDcwLjY5MiI+PHBhdGggZD0iTTAgMzUuMzQ2QzAgMTUuODI1IDE1LjgyNSAwIDM1LjM0NiAwczM1LjM0NiAxNS44MjUgMzUuMzQ2IDM1LjM0Ni0xNS44MjUgMzUuMzQ2LTM1LjM0NiAzNS4zNDZTMCA1NC44NjcgMCAzNS4zNDYiIGZpbGw9IiNjNWJmOTYiLz48cGF0aCBkPSJNNC42NTYgMzUuMzQ2YzAtMTYuOTUgMTMuNzQtMzAuNjkgMzAuNjktMzAuNjlzMzAuNjkgMTMuNzQgMzAuNjkgMzAuNjktMTMuNzQgMzAuNjktMzAuNjkgMzAuNjktMzAuNjktMTMuNzQtMzAuNjktMzAuNjkiIGZpbGw9IiNmZmY3YzIiLz48cGF0aCBkPSJNNDguOTU2IDQ0LjAwMyA1MSA1MC4wMmwtNi4wMTctMi4wNDVMMzQuMTY4IDM3LjE2Yy0xLjg3MyAxLjY1NS02LjAwNyA1LjE1MS03LjMwMyA1LjAxOS0yLjM4Ny0uMjQ0LTEuODg5LTIuOTQ3LTIuMDQ4LTUuMzc2LS4xNTgtMi40MyAxLjQ3MS0zLjQ0IDEuNDcxLTMuNDRsLTUuODc5LTUuODhhMi40NSAyLjQ1IDAgMCAxIDAtMy40NjFsNC42MzMtNC42MzNhMi40NSAyLjQ1IDAgMCAxIDMuNDYxIDBsNi4wNyA2LjA3czIuMTQ5LTIuMDAzIDMuOTAyLTJjMS43NTMuMDAyIDUuNjY0LjA3NSA1LjMyMyAyLjAxMy0uMjM1IDEuMzMyLTQuMTExIDUuOTYtNS42MzkgNy43MzV6IiBmaWxsPSIjNDQ1MjczIi8+PC9zdmc+";
  const category = document.createElementNS("http://www.w3.org/1999/xml", "category");
  category.setAttribute("name", "Pinned");
  category.setAttribute("id", "pinned");
  category.setAttribute("colour", "#ffffff");
  category.setAttribute("secondaryColour", "#ffffff");
  category.setAttribute("iconURI", categoryIcon);
  const gap = document.createElementNS("http://www.w3.org/1999/xml", "sep");
  gap.setAttribute("gap", "36");
  let populateInit = 0; // counts up to 3, any 'populate' call while this is less than 3 will update the toolbox
  let pins = loadPins();
  const autoLoadExtPins = addon.settings.get("autoLoadExts");
  function findExtensionPins() {
    const extUrls = [];
    const manager = vm.extensionManager;
    const loadedExts = manager._loadedExtensions;
    loadedExts.keys().forEach(id => {
      if (pins.some(b => b.startsWith(id))) {
        const meta = loadedExts.get(id);
        if (meta.startsWith("extension_")) {
          // built-in extension
          extUrls.push(id);
        } else {
          // external extension
          const index = parseInt(meta.split(".")[1]);
          extUrls.push(manager.workerURLs[index]);
        }
      }
    });
    return extUrls;
  }
  function loadPins() {
    try {
      const item = localStorage.getItem("ADDONS_BLOCK-PINS");
      if (!item) return [];
      const testPins = JSON.parse(item);
      if (Array.isArray(testPins.blocks) && Array.isArray(testPins.exts)) {
        // load required extensions
        const manager = vm.extensionManager;
        for (const ext of testPins.exts) {
          try {
            const isURL = new URL(ext);
            manager.securityManager.canLoadExtensionFromProject(ext).then(isUnsandbox => {
              manager.loadExtensionURL(ext);
            });
          } catch (_unused) {
            // not a URL, must be a built-in
            manager.loadExtensionIdSync(ext);
          }
        }
        return testPins.blocks;
      } else {
        return [];
      }
    } catch (_unused2) {
      console.warn("Malformed Block Pins!");
      localStorage.removeItem("ADDONS_BLOCK-PINS");
      return [];
    }
  }
  function storePins() {
    const requiredExtensions = autoLoadExtPins ? findExtensionPins() : [];
    localStorage.setItem("ADDONS_BLOCK-PINS", JSON.stringify({
      blocks: pins,
      exts: requiredExtensions
    }));
  }
  const createMenuItem = (text, enabled, callback) => {
    // so amazing, saves like, 20 lines
    return {
      text,
      enabled,
      callback
    };
  };
  const createLabel = text => {
    const label = document.createElementNS("http://www.w3.org/1999/xml", "label");
    label.setAttribute("text", text);
    return label;
  };
  const specifyType = block => {
    let type = block.type;
    if (type === "data_variable" || type === "data_listcontents") {
      type += "||v||" + block.getVars()[0];
    } else if (type === "procedures_call") {
      type += "||p||" + block.getProcCode();
    }
    return type;
  };
  const getBlockByType = (type, ws) => {
    const typeMeta = type.split("||");
    const blocks = Object.values(ws.blockDB_);
    if (typeMeta.length === 1) return blocks.find(b => b.type === type);else {
      const candidates = blocks.filter(b => b.type === typeMeta[0]);
      for (const test of candidates) {
        if (typeMeta[1] === "p") {
          if (test.getProcCode() === typeMeta[2]) return test;
        }
        if (typeMeta[1] === "v") {
          if (test.getVars()[0] === typeMeta[2]) return test;
        }
      }
      return null;
    }
  };
  const populateCategory = () => {
    category.innerHTML = ""; // flush out blocks

    if (pins.length) {
      const flyoutWS = Blockly.mainWorkspace.getFlyout().workspace_;
      const blocksXML = [];
      let successes = 0;
      for (const type of pins) {
        const block = getBlockByType(type, flyoutWS);
        if (block) {
          successes++;
          blocksXML.push(Blockly.Xml.blockToDom(block));
        } else {
          console.warn("Pins Addon -- Could not find block with type: " + type);
        }
      }
      if (blocksXML.length === 0) blocksXML.push(createLabel("No Pinned Blocks!"));else if (successes !== pins.length) blocksXML.push(createLabel("Some Pins Could Not Load!"));
      category.append(...blocksXML, gap);
    } else {
      category.append(createLabel("No Pinned Blocks!"), gap);
    }
  };
  const updatePinCategory = () => {
    populateCategory();
    const toolbox = Blockly.mainWorkspace.getToolbox();
    toolbox.populate_(toolbox.workspace_.options.languageTree);
    storePins();
  };
  const toggleBlockPin = (block, isPinning, forceOrder) => {
    const oldLength = pins.length;
    const type = specifyType(block);
    const index = pins.indexOf(type);
    if (isPinning) {
      switch (forceOrder) {
        case "top":
          pins.splice(index, 1);
          pins = [type, ...pins];
          break;
        case "bottom":
          pins.splice(index, 1);
          pins.push(type);
          break;
        case "category":
          {
            const toolbox = Blockly.mainWorkspace.getToolbox();
            const flyoutWS = Blockly.mainWorkspace.getFlyout().workspace_;
            const categories = toolbox.categoryMenu_.categories_.map(c => c.id_);
            const getCategoryInd = id => {
              const block = getBlockByType(id, flyoutWS);
              let cateID = block.category_;
              if (cateID === "data") cateID = "variables";else if (cateID === "data-lists") cateID = "lists";else if (cateID === null) cateID = "myBlocks";
              return categories.indexOf(cateID);
            };
            pins = pins.sort((a, b) => getCategoryInd(a) - getCategoryInd(b));
            break;
          }
        default:
          if (index === -1) pins.push(type);
      }
    } else if (index > -1) {
      pins.splice(index, 1);
    }
    if (oldLength !== pins.length || forceOrder) updatePinCategory();
  };
  const ogShowCtxMenu = Blockly.BlockSvg.prototype.showContextMenu_;
  Blockly.BlockSvg.prototype.showContextMenu_ = function (e) {
    if (this.workspace.options.readOnly || !this.contextMenu) return;
    let shouldPatchClasses = false;

    // Save the current block in a variable for use in closures.
    var block = this;
    var menuOptions = [];
    if (this.isDeletable() && this.isMovable() && block.isInFlyout) {
      if (pins.includes(specifyType(block))) {
        shouldPatchClasses = true;
        menuOptions.push(createMenuItem("Move to Top", true, () => toggleBlockPin(block, true, "top")), createMenuItem("Move to Bottom", true, () => toggleBlockPin(block, true, "bottom")), createMenuItem("Organize by Category", true, () => toggleBlockPin("", true, "category")), createMenuItem("Pin", false, () => {}), createMenuItem("Unpin", true, () => toggleBlockPin(block, false)));
      } else {
        menuOptions.push(createMenuItem("Pin", true, () => toggleBlockPin(block, true)), createMenuItem("Unpin", false, () => {}));
      }
      menuOptions.push(createMenuItem("Unpin All", pins.length, () => {
        pins = [];
        updatePinCategory();
      }));
    } else {
      ogShowCtxMenu.call(this, e);
      return;
    }
    if (this.customContextMenu) this.customContextMenu(menuOptions);
    Blockly.ContextMenu.show(e, menuOptions, this.RTL);
    Blockly.ContextMenu.currentBlock = this;
    if (shouldPatchClasses) {
      // since we have to patch the context meny generator, we cant use
      // addon apis to fancify the menu. So, recreate it here:
      const menuItems = Blockly.WidgetDiv.DIV.querySelectorAll("div[class^=\"goog-menuitem-content\"]");
      /* Unpin item */
      menuItems[3].parentNode.style.borderTop = "1px solid rgba(0, 0, 0, 0.15)";
    }
    ;
  };
  const ogPopulate = Blockly.Toolbox.CategoryMenu.prototype.populate;
  Blockly.Toolbox.CategoryMenu.prototype.populate = function (newTree) {
    if (populateInit < 3) {
      populateInit++;
      setTimeout(() => {
        // 1 second is a good buffer
        populateCategory();
        const toolbox = Blockly.mainWorkspace.getToolbox();
        if (!toolbox) return;
        toolbox.populate_(toolbox.workspace_.options.languageTree);
      }, 1000);
    }
    newTree.insertBefore(category, newTree.firstElementChild);
    ogPopulate.call(this, newTree);
  };
  vm.runtime.on("PROJECT_LOADED", () => {
    populateInit = 0;
  });
  if (!autoLoadExtPins) vm.runtime.on("EXTENSION_ADDED", () => {
    populateInit = 2;
  });
  vm.runtime.on("EXTENSION_REMOVED", extId => {
    // remove blocks in the removed extension from pins
    pins = pins.filter(t => !t.startsWith(extId));
    populateInit = 2;
  });
  addon.self.addEventListener("disabled", () => {
    localStorage.removeItem("ADDONS_BLOCK-PINS");
  });
});

/***/ }),

/***/ "./src/addons/addons/block-switching/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/block-switching/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/block-switching/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/block-switching/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/block-switching/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  let blockSwitches = {};
  let procedureSwitches = {};
  const noopSwitch = {
    isNoop: true
  };
  const randomColor = () => {
    const num = Math.floor(Math.random() * 256 * 256 * 256);
    return "#".concat(num.toString(16).padStart(6, "0"));
  };
  const buildSwitches = () => {
    blockSwitches = {};
    procedureSwitches = {};
    if (addon.settings.get("motion")) {
      blockSwitches["motion_turnright"] = [noopSwitch, {
        opcode: "motion_turnleft"
      }];
      blockSwitches["motion_turnleft"] = [{
        opcode: "motion_turnright"
      }, noopSwitch];
      blockSwitches["motion_gotoxy"] = [noopSwitch, {
        opcode: "motion_changebyxy",
        remapInputName: {
          X: "DX",
          Y: "DY"
        }
      }];
      blockSwitches["motion_changebyxy"] = [{
        opcode: "motion_gotoxy",
        remapInputName: {
          DX: "X",
          DY: "Y"
        }
      }, noopSwitch];
      blockSwitches["motion_setx"] = [noopSwitch, {
        opcode: "motion_changexby",
        remapInputName: {
          X: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          X: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          X: "DY"
        }
      }];
      blockSwitches["motion_changexby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DX: "X"
        }
      }, noopSwitch, {
        opcode: "motion_sety",
        remapInputName: {
          DX: "Y"
        }
      }, {
        opcode: "motion_changeyby",
        remapInputName: {
          DX: "DY"
        }
      }];
      blockSwitches["motion_sety"] = [{
        opcode: "motion_setx",
        remapInputName: {
          Y: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          Y: "DX"
        }
      }, noopSwitch, {
        opcode: "motion_changeyby",
        remapInputName: {
          Y: "DY"
        }
      }];
      blockSwitches["motion_changeyby"] = [{
        opcode: "motion_setx",
        remapInputName: {
          DY: "X"
        }
      }, {
        opcode: "motion_changexby",
        remapInputName: {
          DY: "DX"
        }
      }, {
        opcode: "motion_sety",
        remapInputName: {
          DY: "Y"
        }
      }, noopSwitch];
      blockSwitches["motion_xposition"] = [noopSwitch, {
        opcode: "motion_yposition"
      }];
      blockSwitches["motion_yposition"] = [{
        opcode: "motion_xposition"
      }, noopSwitch];
    }
    if (addon.settings.get("looks")) {
      blockSwitches["looks_seteffectto"] = [noopSwitch, {
        opcode: "looks_changeeffectby",
        remapInputName: {
          VALUE: "CHANGE"
        }
      }];
      blockSwitches["looks_changeeffectby"] = [{
        opcode: "looks_seteffectto",
        remapInputName: {
          CHANGE: "VALUE"
        }
      }, noopSwitch];
      blockSwitches["looks_setsizeto"] = [noopSwitch, {
        opcode: "looks_changesizeby",
        remapInputName: {
          SIZE: "CHANGE"
        }
      }];
      blockSwitches["looks_changesizeby"] = [{
        opcode: "looks_setsizeto",
        remapInputName: {
          CHANGE: "SIZE"
        }
      }, noopSwitch];
      blockSwitches["looks_costumenumbername"] = [noopSwitch, {
        opcode: "looks_backdropnumbername"
      }];
      blockSwitches["looks_backdropnumbername"] = [{
        opcode: "looks_costumenumbername"
      }, noopSwitch];
      blockSwitches["looks_show"] = [noopSwitch, {
        opcode: "looks_hide"
      }];
      blockSwitches["looks_hide"] = [{
        opcode: "looks_show"
      }, noopSwitch];
      blockSwitches["looks_setShape"] = [{
        opcode: "looks_setShape"
      }, noopSwitch];
      blockSwitches["looks_setColor"] = [{
        opcode: "looks_setColor"
      }, noopSwitch];
      blockSwitches["looks_setFont"] = [{
        opcode: "looks_setFont"
      }, noopSwitch];
      blockSwitches["looks_nextcostume"] = [noopSwitch, {
        opcode: "looks_nextbackdrop"
      }];
      blockSwitches["looks_nextbackdrop"] = [{
        opcode: "looks_nextcostume"
      }, noopSwitch];
      blockSwitches["looks_say"] = [noopSwitch, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, {
        opcode: "looks_think"
      }, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_think"] = [{
        opcode: "looks_say"
      }, {
        opcode: "looks_sayforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }, noopSwitch, {
        opcode: "looks_thinkforsecs",
        createInputs: {
          SECS: {
            shadowType: "math_number",
            value: "2"
          }
        }
      }];
      blockSwitches["looks_sayforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, noopSwitch, {
        opcode: "looks_thinkforsecs"
      }];
      blockSwitches["looks_thinkforsecs"] = [{
        opcode: "looks_say",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_think",
        splitInputs: ["SECS"]
      }, {
        opcode: "looks_sayforsecs"
      }, noopSwitch];
      blockSwitches["looks_switchbackdropto"] = [noopSwitch, {
        opcode: "looks_switchbackdroptoandwait"
      }];
      blockSwitches["looks_switchbackdroptoandwait"] = [{
        opcode: "looks_switchbackdropto"
      }, noopSwitch];
      blockSwitches["looks_gotofrontback"] = [noopSwitch, {
        opcode: "looks_goforwardbackwardlayers",
        remapInputName: {
          FRONT_BACK: "FORWARD_BACKWARD"
        },
        mapFieldValues: {
          FRONT_BACK: {
            front: "forward",
            back: "backward"
          }
        },
        createInputs: {
          NUM: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }];
      blockSwitches["looks_goforwardbackwardlayers"] = [{
        opcode: "looks_gotofrontback",
        splitInputs: ["NUM"],
        remapInputName: {
          FORWARD_BACKWARD: "FRONT_BACK"
        },
        mapFieldValues: {
          FORWARD_BACKWARD: {
            forward: "front",
            backward: "back"
          }
        }
      }, noopSwitch];
    }
    if (addon.settings.get("sound")) {
      blockSwitches["sound_play"] = [noopSwitch, {
        opcode: "sound_playuntildone"
      }];
      blockSwitches["sound_playuntildone"] = [{
        opcode: "sound_play"
      }, noopSwitch];
      blockSwitches["sound_seteffectto"] = [noopSwitch, {
        opcode: "sound_changeeffectby"
      }];
      blockSwitches["sound_changeeffectby"] = [{
        opcode: "sound_seteffectto"
      }, noopSwitch];
      blockSwitches["sound_setvolumeto"] = [noopSwitch, {
        opcode: "sound_changevolumeby"
      }];
      blockSwitches["sound_changevolumeby"] = [{
        opcode: "sound_setvolumeto"
      }, noopSwitch];
    }
    if (addon.settings.get("event")) {
      blockSwitches["event_broadcast"] = [noopSwitch, {
        opcode: "event_broadcastandwait"
      }];
      blockSwitches["event_broadcastandwait"] = [{
        opcode: "event_broadcast"
      }, noopSwitch];
    }
    if (addon.settings.get("control")) {
      blockSwitches["control_if"] = [noopSwitch, {
        opcode: "control_if_else"
      }];
      blockSwitches["control_if_else"] = [{
        opcode: "control_if",
        splitInputs: ["SUBSTACK2"]
      }, noopSwitch];
      blockSwitches["control_repeat_until"] = [noopSwitch, {
        opcode: "control_while"
      }, {
        opcode: "control_wait_until",
        splitInputs: ["SUBSTACK"]
      }, {
        opcode: "control_forever",
        splitInputs: ["CONDITION"]
      }];
      blockSwitches["control_forever"] = [{
        opcode: "control_repeat_until"
      }, {
        opcode: "control_while"
      }, noopSwitch];
      blockSwitches["control_wait_until"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch];
      blockSwitches["control_while"] = [{
        opcode: "control_repeat_until"
      }, noopSwitch, {
        opcode: "control_forever",
        splitInputs: ["CONDITION"]
      }];
    }
    if (addon.settings.get("operator")) {
      blockSwitches["operator_equals"] = [{
        opcode: "operator_gt"
      }, {
        opcode: "operator_gtorequal"
      }, {
        opcode: "operator_lt"
      }, {
        opcode: "operator_ltorequal"
      }, noopSwitch, {
        opcode: "operator_notequal"
      }];
      blockSwitches["operator_gt"] = [noopSwitch, {
        opcode: "operator_gtorequal"
      }, {
        opcode: "operator_lt"
      }, {
        opcode: "operator_ltorequal"
      }, {
        opcode: "operator_equals"
      }, {
        opcode: "operator_notequal"
      }];
      blockSwitches["operator_lt"] = [{
        opcode: "operator_gt"
      }, {
        opcode: "operator_gtorequal"
      }, noopSwitch, {
        opcode: "operator_ltorequal"
      }, {
        opcode: "operator_equals"
      }, {
        opcode: "operator_notequal"
      }];
      blockSwitches["operator_notequal"] = [{
        opcode: "operator_gt"
      }, {
        opcode: "operator_gtorequal"
      }, {
        opcode: "operator_lt"
      }, {
        opcode: "operator_ltorequal"
      }, {
        opcode: "operator_equals"
      }, noopSwitch];
      blockSwitches["operator_gtorequal"] = [{
        opcode: "operator_gt"
      }, noopSwitch, {
        opcode: "operator_lt"
      }, {
        opcode: "operator_ltorequal"
      }, {
        opcode: "operator_equals"
      }, {
        opcode: "operator_notequal"
      }];
      blockSwitches["operator_ltorequal"] = [{
        opcode: "operator_gt"
      }, {
        opcode: "operator_gtorequal"
      }, {
        opcode: "operator_lt"
      }, noopSwitch, {
        opcode: "operator_equals"
      }, {
        opcode: "operator_notequal"
      }];
      blockSwitches["operator_add"] = [noopSwitch, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_power"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_subtract"] = [{
        opcode: "operator_add"
      }, noopSwitch, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_power"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_multiply"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, noopSwitch, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_power"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_divide"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, noopSwitch, {
        opcode: "operator_power"
      }, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_power"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, noopSwitch, {
        opcode: "operator_mod"
      }];
      blockSwitches["operator_mod"] = [{
        opcode: "operator_add"
      }, {
        opcode: "operator_subtract"
      }, {
        opcode: "operator_multiply"
      }, {
        opcode: "operator_divide"
      }, {
        opcode: "operator_power"
      }, noopSwitch];
      blockSwitches["operator_and"] = [noopSwitch, {
        opcode: "operator_or"
      }];
      blockSwitches["operator_or"] = [{
        opcode: "operator_and"
      }, noopSwitch];
      blockSwitches["operator_trueBoolean"] = [noopSwitch, {
        opcode: "operator_falseBoolean"
      }];
      blockSwitches["operator_falseBoolean"] = [{
        opcode: "operator_trueBoolean"
      }, noopSwitch];
    }
    if (addon.settings.get("sensing")) {
      blockSwitches["sensing_mousex"] = [noopSwitch, {
        opcode: "sensing_mousey"
      }];
      blockSwitches["sensing_mousey"] = [{
        opcode: "sensing_mousex"
      }, noopSwitch];
      blockSwitches["sensing_touchingcolor"] = [noopSwitch, {
        opcode: "sensing_coloristouchingcolor",
        createInputs: {
          COLOR2: {
            shadowType: "colour_picker",
            value: randomColor
          }
        }
      }];
      blockSwitches["sensing_coloristouchingcolor"] = [{
        opcode: "sensing_touchingcolor",
        splitInputs: ["COLOR2"]
      }, noopSwitch];
    }
    if (addon.settings.get("data")) {
      blockSwitches["data_setvariableto"] = [noopSwitch, {
        opcode: "data_changevariableby",
        remapShadowType: {
          VALUE: "math_number"
        }
      }];
      blockSwitches["data_changevariableby"] = [{
        opcode: "data_setvariableto",
        remapShadowType: {
          VALUE: "text"
        }
      }, noopSwitch];
      blockSwitches["data_showvariable"] = [noopSwitch, {
        opcode: "data_hidevariable"
      }];
      blockSwitches["data_hidevariable"] = [{
        opcode: "data_showvariable"
      }, noopSwitch];
      blockSwitches["data_showlist"] = [noopSwitch, {
        opcode: "data_hidelist"
      }];
      blockSwitches["data_hidelist"] = [{
        opcode: "data_showlist"
      }, noopSwitch];
      blockSwitches["data_replaceitemoflist"] = [noopSwitch, {
        opcode: "data_insertatlist"
      }];
      blockSwitches["data_insertatlist"] = [{
        opcode: "data_replaceitemoflist"
      }, noopSwitch];
      blockSwitches["data_deleteoflist"] = [noopSwitch, {
        opcode: "data_deletealloflist",
        splitInputs: ["INDEX"]
      }];
      blockSwitches["data_deletealloflist"] = [{
        opcode: "data_deleteoflist",
        createInputs: {
          INDEX: {
            shadowType: "math_integer",
            value: "1"
          }
        }
      }, noopSwitch];
    }
    if (addon.settings.get("extension")) {
      blockSwitches["pen_penDown"] = [noopSwitch, {
        opcode: "pen_penUp"
      }];
      blockSwitches["pen_penUp"] = [{
        opcode: "pen_penDown"
      }, noopSwitch];
      blockSwitches["pen_setPenColorParamTo"] = [noopSwitch, {
        opcode: "pen_changePenColorParamBy"
      }];
      blockSwitches["pen_changePenColorParamBy"] = [{
        opcode: "pen_setPenColorParamTo"
      }, noopSwitch];
      blockSwitches["pen_setPenHueToNumber"] = [noopSwitch, {
        opcode: "pen_changePenHueBy"
      }];
      blockSwitches["pen_changePenHueBy"] = [{
        opcode: "pen_setPenHueToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenShadeToNumber"] = [noopSwitch, {
        opcode: "pen_changePenShadeBy"
      }];
      blockSwitches["pen_changePenShadeBy"] = [{
        opcode: "pen_setPenShadeToNumber"
      }, noopSwitch];
      blockSwitches["pen_setPenSizeTo"] = [noopSwitch, {
        opcode: "pen_changePenSizeBy"
      }];
      blockSwitches["pen_changePenSizeBy"] = [{
        opcode: "pen_setPenSizeTo"
      }, noopSwitch];
      blockSwitches["music_setTempo"] = [noopSwitch, {
        opcode: "music_changeTempo"
      }];
      blockSwitches["music_changeTempo"] = [{
        opcode: "music_setTempo"
      }, noopSwitch];
      if (vm.extensionManager) {
        const switches = vm.extensionManager.getAddonBlockSwitches();
        Object.getOwnPropertyNames(switches).forEach(extID => {
          Object.getOwnPropertyNames(switches[extID]).forEach(block => {
            blockSwitches["".concat(extID, "_").concat(block)] = switches[extID][block];
          });
        });
      }
      vm.runtime.on("EXTENSION_ADDED", () => {
        const switches = vm.extensionManager.getAddonBlockSwitches();
        Object.getOwnPropertyNames(switches).forEach(extID => {
          Object.getOwnPropertyNames(switches[extID]).forEach(block => {
            blockSwitches["".concat(extID, "_").concat(block)] = switches[extID][block];
          });
        });
      });
    }
    if (addon.settings.get("sa")) {
      const logProc = "\u200B\u200Blog\u200B\u200B %s";
      const warnProc = "\u200B\u200Bwarn\u200B\u200B %s";
      const errorProc = "\u200B\u200Berror\u200B\u200B %s";
      const logMessage = msg("debugger_log");
      const warnMessage = msg("debugger_warn");
      const errorMessage = msg("debugger_error");
      const logSwitch = {
        mutate: {
          proccode: logProc
        },
        msg: logMessage
      };
      const warnSwitch = {
        mutate: {
          proccode: warnProc
        },
        msg: warnMessage
      };
      const errorSwitch = {
        mutate: {
          proccode: errorProc
        },
        msg: errorMessage
      };
      procedureSwitches[logProc] = [{
        msg: logMessage,
        isNoop: true
      }, warnSwitch, errorSwitch];
      procedureSwitches[warnProc] = [logSwitch, {
        msg: warnMessage,
        isNoop: true
      }, errorSwitch];
      procedureSwitches[errorProc] = [logSwitch, warnSwitch, {
        msg: errorMessage,
        isNoop: true
      }];
    }

    // Switching for these is implemented by Scratch. We only define them here to optionally add a border.
    // Because we don't implement the switching ourselves, this is not controlled by the data category option.
    blockSwitches["data_variable"] = [];
    blockSwitches["data_listcontents"] = [];
  };
  buildSwitches();
  addon.settings.addEventListener("change", buildSwitches);

  /**
   * @param {*} workspace
   * @param {Element} xmlBlock
   */
  const pasteBlockXML = (workspace, xmlBlock) => {
    // Similar to https://github.com/LLK/scratch-blocks/blob/7575c9a0f2c267676569c4b102b76d77f35d9fd6/core/workspace_svg.js#L1020
    // but without the collision checking.
    const block = ScratchBlocks.Xml.domToBlock(xmlBlock, workspace);
    const x = +xmlBlock.getAttribute("x");
    const y = +xmlBlock.getAttribute("y");
    // Don't need to handle RTL here
    block.moveBy(x, y);
    return block;
  };

  /**
   * @param {string} shadowType The type of shadow eg. "math_number"
   * @returns {string} The name of the shadow's inner field that contains the user-visible value
   */
  const getShadowFieldName = shadowType => {
    // This is non-comprehensive.
    if (shadowType === "text") {
      return "TEXT";
    }
    if (shadowType === "colour_picker") {
      return "COLOUR";
    }
    return "NUM";
  };

  /**
   * @template T
   * @param {T|()=>T} value
   * @returns {T}
   */
  const callIfFunction = value => {
    if (typeof value === "function") {
      return value();
    }
    return value;
  };
  const menuCallbackFactory = (block, opcodeData) => () => {
    if (opcodeData.isNoop) {
      return;
    }
    if (opcodeData.fieldValue) {
      block.setFieldValue(opcodeData.fieldValue, "VALUE");
      return;
    }
    try {
      var _block$nextConnection, _block$nextConnection2, _block$nextConnection3;
      ScratchBlocks.Events.setGroup(true);
      const workspace = block.workspace;
      const blocksToBringToForeground = [];
      // Split inputs before we clone the block.
      if (opcodeData.splitInputs) {
        for (const inputName of opcodeData.splitInputs) {
          const input = block.getInput(inputName);
          if (!input) {
            continue;
          }
          const connection = input.connection;
          if (!connection) {
            continue;
          }
          if (connection.isConnected()) {
            const targetBlock = connection.targetBlock();
            if (targetBlock.isShadow()) {
              // Deleting shadows is handled later.
            } else {
              connection.disconnect();
              blocksToBringToForeground.push(targetBlock);
            }
          }
        }
      }

      // Make a copy of the block with the proper type set.
      // It doesn't seem to be possible to change a Block's type after it's created, so we'll just make a new block instead.
      const xml = ScratchBlocks.Xml.blockToDom(block);
      // blockToDomWithXY's handling of RTL is strange, so we encode the position ourselves.
      const position = block.getRelativeToSurfaceXY();
      xml.setAttribute("x", position.x);
      xml.setAttribute("y", position.y);
      if (opcodeData.opcode) {
        xml.setAttribute("type", opcodeData.opcode);
      }
      const parentBlock = block.getParent();
      let parentConnection;
      let blockConnectionType;
      if (parentBlock) {
        // If the block has a parent, find the parent -> child connection that will be reattached later.
        const parentConnections = parentBlock.getConnections_();
        parentConnection = parentConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === block);
        // There's two types of connections from child -> parent. We need to figure out which one is used.
        const blockConnections = block.getConnections_();
        const blockToParentConnection = blockConnections.find(c => c.targetConnection && c.targetConnection.sourceBlock_ === parentBlock);
        blockConnectionType = blockToParentConnection.type;
      }

      // Array.from creates a clone of the children list. This is important as we may remove
      // children as we iterate.
      for (const child of Array.from(xml.children)) {
        const oldName = child.getAttribute("name");

        // Any inputs that were supposed to be split that were not should be removed.
        // (eg. shadow inputs)
        if (opcodeData.splitInputs && opcodeData.splitInputs.includes(oldName)) {
          xml.removeChild(child);
          continue;
        }
        const newName = opcodeData.remapInputName && opcodeData.remapInputName[oldName];
        if (newName) {
          child.setAttribute("name", newName);
        }
        const newShadowType = opcodeData.remapShadowType && opcodeData.remapShadowType[oldName];
        if (newShadowType) {
          const valueNode = child.firstChild;
          const fieldNode = valueNode.firstChild;
          valueNode.setAttribute("type", newShadowType);
          fieldNode.setAttribute("name", getShadowFieldName(newShadowType));
        }
        const fieldValueMap = opcodeData.mapFieldValues && opcodeData.mapFieldValues[oldName];
        if (fieldValueMap && child.tagName === "FIELD") {
          const oldValue = child.innerText;
          const newValue = fieldValueMap[oldValue];
          if (typeof newValue === "string") {
            child.innerText = newValue;
          }
        }
        if (child.tagName === 'NEXT') child.remove();
      }
      if (opcodeData.mutate) {
        const mutation = xml.querySelector("mutation");
        for (const [key, value] of Object.entries(opcodeData.mutate)) {
          mutation.setAttribute(key, value);
        }
      }
      if (opcodeData.createInputs) {
        for (const [inputName, inputData] of Object.entries(opcodeData.createInputs)) {
          const valueElement = document.createElement("value");
          valueElement.setAttribute("name", inputName);
          if (inputData.shadowType) {
            const shadowElement = document.createElement("shadow");
            shadowElement.setAttribute("type", inputData.shadowType);
            const shadowFieldElement = document.createElement("field");
            shadowFieldElement.setAttribute("name", getShadowFieldName(inputData.shadowType));
            shadowFieldElement.innerText = callIfFunction(inputData.value);
            shadowElement.appendChild(shadowFieldElement);
            valueElement.appendChild(shadowElement);
          }
          xml.appendChild(valueElement);
        }
      }

      // Remove the old block and insert the new one.
      const oldTarget = (_block$nextConnection = block.nextConnection) === null || _block$nextConnection === void 0 ? void 0 : _block$nextConnection.targetConnection;
      if (oldTarget) (_block$nextConnection2 = block.nextConnection) === null || _block$nextConnection2 === void 0 ? void 0 : (_block$nextConnection3 = _block$nextConnection2.disconnect) === null || _block$nextConnection3 === void 0 ? void 0 : _block$nextConnection3.call(_block$nextConnection2);
      block.dispose();
      const newBlock = pasteBlockXML(workspace, xml);
      if (newBlock.nextConnection && oldTarget) newBlock.nextConnection.connect(oldTarget);
      if (parentConnection) {
        // Search for the same type of connection on the new block as on the old block.
        const newBlockConnections = newBlock.getConnections_();
        const newBlockConnection = newBlockConnections.find(c => c.type === blockConnectionType);
        newBlockConnection.connect(parentConnection);
      }
      for (const otherBlock of blocksToBringToForeground) {
        // By re-appending the element, we move it to the end, which will make it display
        // on top.
        const svgRoot = otherBlock.getSvgRoot();
        svgRoot.parentNode.appendChild(svgRoot);
      }
    } finally {
      ScratchBlocks.Events.setGroup(false);
    }
  };
  const uniques = array => [...new Set(array)];
  addon.tab.createBlockContextMenu((items, block) => {
    if (!addon.self.disabled) {
      const type = block.type;
      let switches = blockSwitches[block.type] || [];
      const customArgsMode = addon.settings.get("customargs") ? addon.settings.get("customargsmode") : "off";
      if (customArgsMode !== "off" && ["argument_reporter_boolean", "argument_reporter_string_number"].includes(type) &&
      // if the arg is a shadow, it's in a procedures_prototype so we don't want it to be switchable
      !block.isShadow()) {
        const customBlocks = getCustomBlocks();
        if (customArgsMode === "all") {
          switch (type) {
            case "argument_reporter_string_number":
              switches = Object.values(customBlocks).map(cb => cb.stringArgs).flat(1);
              break;
            case "argument_reporter_boolean":
              switches = Object.values(customBlocks).map(cb => cb.boolArgs).flat(1);
              break;
          }
        } else if (customArgsMode === "defOnly") {
          const root = block.getRootBlock();
          if (root.type !== "procedures_definition" || root.type !== "procedures_definition_return") return items;
          const customBlockObj = customBlocks[root.getChildren(true)[0].getProcCode()];
          switch (type) {
            case "argument_reporter_string_number":
              switches = customBlockObj.stringArgs;
              break;
            case "argument_reporter_boolean":
              switches = customBlockObj.boolArgs;
              break;
          }
        }
        const currentValue = block.getFieldValue("VALUE");
        switches = uniques(switches).map(i => ({
          isNoop: i === currentValue,
          fieldValue: i,
          msg: i
        }));
      }
      if (block.type === "procedures_call") {
        const proccode = block.getProcCode();
        if (procedureSwitches[proccode]) {
          switches = procedureSwitches[proccode];
        }
      }
      if (!addon.settings.get("noop")) {
        switches = switches.filter(i => !i.isNoop);
      }
      switches.forEach((opcodeData, i) => {
        const makeSpaceItemIndex = items.findIndex(obj => obj._isDevtoolsFirstItem);
        const insertBeforeIndex = makeSpaceItemIndex !== -1 ?
        // If "make space" button exists, add own items before it
        makeSpaceItemIndex :
        // If there's no such button, insert at end
        items.length;
        const text = opcodeData.msg ? opcodeData.msg : opcodeData.opcode ? msg(opcodeData.opcode) : msg(block.type);
        items.splice(insertBeforeIndex, 0, {
          enabled: true,
          text,
          callback: menuCallbackFactory(block, opcodeData),
          separator: i === 0
        });
      });
      if (block.type === "data_variable" || block.type === "data_listcontents") {
        // Add top border to first variable (if it exists)
        const delBlockIndex = items.findIndex(item => item.text === ScratchBlocks.Msg.DELETE_BLOCK);
        // firstVariableItem might be undefined, a variable to switch to,
        // or an item added by editor-devtools (or any addon before this one)
        const firstVariableItem = items[delBlockIndex + 1];
        if (firstVariableItem) firstVariableItem.separator = true;
      }
    }
    return items;
  }, {
    blocks: true
  });

  // https://github.com/LLK/scratch-blocks/blob/abbfe93136fef57fdfb9a077198b0bc64726f012/blocks_vertical/procedures.js#L207-L215
  // Returns a list like ["%s", "%d"]
  const parseArguments = code => code.split(/(?=[^\\]%[nbs])/g).map(i => i.trim()).filter(i => i.charAt(0) === "%").map(i => i.substring(0, 2));
  const getCustomBlocks = () => {
    const customBlocks = {};
    const target = vm.editingTarget;
    Object.values(target.blocks._blocks).filter(block => block.opcode === "procedures_prototype").forEach(block => {
      const procCode = block.mutation.proccode;
      const argumentNames = JSON.parse(block.mutation.argumentnames);
      // argumentdefaults is unreliable, so we have to parse the procedure code to determine argument types
      const parsedArguments = parseArguments(procCode);
      const stringArgs = [];
      const boolArgs = [];
      for (let i = 0; i < argumentNames.length; i++) {
        if (parsedArguments[i] === "%b") {
          boolArgs.push(argumentNames[i]);
        } else {
          stringArgs.push(argumentNames[i]);
        }
      }
      customBlocks[procCode] = {
        stringArgs,
        boolArgs
      };
    });
    return customBlocks;
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/_runtime_entry.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/color-picker/_runtime_entry.js ***!
  \**********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/color-picker/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/color-picker/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/color-picker/code-editor.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/color-picker/code-editor.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../libraries/common/cs/normalize-color.js */ "./src/addons/libraries/common/cs/normalize-color.js");
/* harmony import */ var _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libraries/common/cs/rate-limiter.js */ "./src/addons/libraries/common/cs/rate-limiter.js");
/* harmony import */ var _libraries_thirdparty_cs_tinycolor_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libraries/thirdparty/cs/tinycolor-min.js */ "./src/addons/libraries/thirdparty/cs/tinycolor-min.js");



/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let {
    addon,
    console,
    msg
  } = _ref;
  // 250-ms rate limit
  const rateLimiter = new _libraries_common_cs_rate_limiter_js__WEBPACK_IMPORTED_MODULE_1__["default"](250);
  const getColor = element => {
    const {
      children
    } = element.parentElement;
    // h: 0 - 360
    const h = children[1].getAttribute("aria-valuenow");
    // s: 0 - 1
    const s = children[3].getAttribute("aria-valuenow");
    // v: 0 - 255, divide by 255
    const vMultipliedBy255 = children[5].getAttribute("aria-valuenow");
    const v = Number(vMultipliedBy255) / 255;
    return Object(_libraries_thirdparty_cs_tinycolor_min_js__WEBPACK_IMPORTED_MODULE_2__["default"])("hsv(".concat(h, ", ").concat(s, ", ").concat(v || 0, ")")).toHexString();
  };
  const setColor = (hex, element) => {
    hex = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(hex);
    if (!addon.tab.redux.state || !addon.tab.redux.state.scratchGui) return;
    // The only way to reliably set color is to invoke eye dropper via click()
    // then faking that the eye dropper reported the value.
    const onEyeDropperClosed = _ref2 => {
      let {
        detail
      } = _ref2;
      if (detail.action.type !== "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        document.body.classList.remove("sa-hide-eye-dropper-background");
      }, 50);
    };
    const onEyeDropperOpened = _ref3 => {
      let {
        detail
      } = _ref3;
      if (detail.action.type !== "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER") return;
      addon.tab.redux.removeEventListener("statechanged", onEyeDropperOpened);
      addon.tab.redux.addEventListener("statechanged", onEyeDropperClosed);
      setTimeout(() => {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          color: hex
        });
      }, 50);
    };
    addon.tab.redux.addEventListener("statechanged", onEyeDropperOpened);
    document.body.classList.add("sa-hide-eye-dropper-background");
    element.click();
  };
  const addColorPicker = () => {
    const element = document.querySelector("button.scratchEyedropper");
    rateLimiter.abort(false);
    addon.tab.redux.initialize();
    const defaultColor = getColor(element);
    const saColorPicker = Object.assign(document.createElement("div"), {
      className: "sa-color-picker sa-color-picker-code"
    });
    addon.tab.displayNoneWhileDisabled(saColorPicker, {
      display: "flex"
    });
    const saColorPickerColor = Object.assign(document.createElement("input"), {
      className: "sa-color-picker-color sa-color-picker-code-color",
      type: "color",
      value: defaultColor || "#000000"
    });
    const saColorPickerText = Object.assign(document.createElement("input"), {
      className: addon.tab.scratchClass("input_input-form", {
        others: "sa-color-picker-text sa-color-picker-code-text"
      }),
      type: "text",
      pattern: "^#?([0-9a-fA-F]{3}){1,2}$",
      placeholder: msg("hex"),
      value: defaultColor || ""
    });
    saColorPickerColor.addEventListener("input", () => rateLimiter.limit(() => setColor(saColorPickerText.value = saColorPickerColor.value, element)));
    saColorPickerText.addEventListener("change", () => {
      const {
        value
      } = saColorPickerText;
      if (!Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["getHexRegex"])().test(value)) return;
      setColor(saColorPickerColor.value = Object(_libraries_common_cs_normalize_color_js__WEBPACK_IMPORTED_MODULE_0__["normalizeHex"])(value), element);
    });
    saColorPicker.appendChild(saColorPickerColor);
    saColorPicker.appendChild(saColorPickerText);
    element.parentElement.insertBefore(saColorPicker, element);
  };
  const ScratchBlocks = await addon.tab.traps.getBlockly();
  const originalShowEditor = ScratchBlocks.FieldColourSlider.prototype.showEditor_;
  ScratchBlocks.FieldColourSlider.prototype.showEditor_ = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const r = originalShowEditor.call(this, ...args);
    addColorPicker();
    return r;
  };
});

/***/ }),

/***/ "./src/addons/addons/color-picker/userscript.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/color-picker/userscript.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_editor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-editor.js */ "./src/addons/addons/color-picker/code-editor.js");

/* harmony default export */ __webpack_exports__["default"] = (async api => {
  Object(_code_editor_js__WEBPACK_IMPORTED_MODULE_0__["default"])(api);
});

/***/ }),

/***/ "./src/addons/addons/copy-reporter/_runtime_entry.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/copy-reporter/_runtime_entry.js ***!
  \***********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/copy-reporter/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/copy-reporter/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_copy_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./copy.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/copy-reporter/copy.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "copy.svg": _url_loader_copy_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/copy-reporter/userscript.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/copy-reporter/userscript.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  addon.tab.createEditorContextMenu(ctx => {
    const className = ctx.type === "monitor_large" ? "monitor_large-value" : "monitor_value";
    const element = ctx.target.querySelector("[class*='".concat(className, "_']"));
    if (element.innerText.length !== 0) {
      navigator.clipboard.writeText(element.innerText);
    }
  }, {
    className: "copy",
    types: ["monitor_default", "monitor_large", "monitor_slider"],
    position: "monitor",
    order: 0,
    label: msg("copy-value")
  });

  // add button to reporter bubble
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  // https://github.com/PenguinMod/PenguinMod-Blocks/blob/develop/core/workspace_svg.js#L1017C1
  ScratchBlocks.WorkspaceSvg.prototype.reportValue = function (id, value, isError) {
    var block = this.getBlockById(id);
    if (!block) {
      throw 'Tried to report value on block that does not exist.';
    }
    ScratchBlocks.DropDownDiv.hideWithoutAnimation();
    ScratchBlocks.DropDownDiv.clearContent();
    var contentDiv = ScratchBlocks.DropDownDiv.getContentDiv();
    var valueReportBox = ScratchBlocks.goog.dom.createElement('div');
    valueReportBox.setAttribute('class', 'valueReportBox');
    if (typeof value !== 'object' || value === null || typeof value.toReporterContent !== 'function') {
      valueReportBox.textContent = String(value);
    } else {
      valueReportBox.appendChild(value.toReporterContent());
    }
    if (!addon.self.disabled) {
      // use to get focus and event priority
      valueReportBox.setAttribute("tabindex", "0");
      // if the user pressed Ctrl+C, prevent propagation to Blockly
      valueReportBox.onkeydown = event => {
        if ((event.altKey || event.ctrlKey || event.metaKey) && event.code === "KeyC") {
          event.stopPropagation();
        }
      };
      if (value && value.length !== 0) {
        const copyButton = document.createElement("img");
        copyButton.setAttribute("role", "button");
        copyButton.setAttribute("tabindex", "0");
        copyButton.setAttribute("alt", msg("copy-to-clipboard"));
        copyButton.setAttribute("src", addon.self.getResource("/copy.svg")) /* rewritten by pull.js */;
        copyButton.classList.add("sa-copy-reporter-icon");
        addon.tab.displayNoneWhileDisabled(copyButton);
        copyButton.onclick = () => navigator.clipboard.writeText(value);
        valueReportBox.appendChild(copyButton);
      }
    }
    contentDiv.appendChild(valueReportBox);
    ScratchBlocks.DropDownDiv.setColour(ScratchBlocks.Colours.valueReportBackground, isError ? ScratchBlocks.Colours.blockError : ScratchBlocks.Colours.valueReportBorder);
    ScratchBlocks.DropDownDiv.showPositionedByBlock(this, block);
  };
});

/***/ }),

/***/ "./src/addons/addons/editor-animations/_runtime_entry.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/editor-animations/_runtime_entry.js ***!
  \***************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-animations/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-animations/userscript.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/editor-animations/userscript.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Editor Animations (remake of Reactive Animation by <https://github.com/mmmmaaaaarrrrrrkkkkkkkk>)
// By: SharkPool
// By: reflow <https://github.com/mgikdev>

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const addonKey = "addonAnimations-";
  const animationTypes = {
    "default": "cubic-bezier(0.63, 0.32, 0.08, 0.95)",
    "easeIn": "cubic-bezier(0.42, 0, 1.0, 1.0)",
    "easeOut": "cubic-bezier(0, 0, 0.58, 1.0)",
    "easeInOut": "cubic-bezier(0.42, 0, 0.58, 1.0)",
    "smoothStep": "cubic-bezier(0.25, 0.1, 0.25, 1.0)",
    "fastInSlowOut": "cubic-bezier(0.4, 0.0, 0.2, 1.0)",
    "sineIn": "cubic-bezier(0.47, 0, 0.745, 0.715)",
    "sineOut": "cubic-bezier(0.39, 0.575, 0.565, 1)",
    "sineInOut": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
    "quadIn": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
    "quadOut": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    "quadInOut": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
    "cubicIn": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
    "cubicOut": "cubic-bezier(0.215, 0.61, 0.355, 1)",
    "cubicInOut": "cubic-bezier(0.645, 0.045, 0.355, 1)",
    "quartIn": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    "quartOut": "cubic-bezier(0.165, 0.84, 0.44, 1)",
    "quartInOut": "cubic-bezier(0.77, 0, 0.175, 1)",
    "quintIn": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
    "quintOut": "cubic-bezier(0.23, 1, 0.32, 1)",
    "quintInOut": "cubic-bezier(0.86, 0, 0.07, 1)",
    "backIn": "cubic-bezier(0.6, -0.28, 0.74, 0.05)",
    "backOut": "cubic-bezier(0.18, 0.89, 0.32, 1.28)",
    "backInOut": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    "elastic": "linear(0 0%, 0.22 2.1%, 0.86 6.5%, 1.11 8.6%, 1.3 10.7%, 1.35 11.8%, 1.37 12.9%, 1.37 13.7%, 1.36 14.5%, 1.32 16.2%, 1.03 21.8%, 0.94 24%, 0.89 25.9%, 0.88 26.85%, 0.87 27.8%, 0.87 29.25%, 0.88 30.7%, 0.91 32.4%, 0.98 36.4%, 1.01 38.3%, 1.04 40.5%, 1.05 42.7%, 1.05 44.1%, 1.04 45.7%, 1 53.3%, 0.99 55.4%, 0.98 57.5%, 0.99 60.7%, 1 68.1%, 1.01 72.2%, 1 86.7%, 1 100%)",
    "bounce": "linear(0 0%, 0 2.27%, 0.02 4.53%, 0.04 6.8%, 0.06 9.07%, 0.1 11.33%, 0.14 13.6%, 0.25 18.15%, 0.39 22.7%, 0.56 27.25%, 0.77 31.8%, 1 36.35%, 0.89 40.9%, 0.85 43.18%, 0.81 45.45%, 0.79 47.72%, 0.77 50%, 0.75 52.27%, 0.75 54.55%, 0.75 56.82%, 0.77 59.1%, 0.79 61.38%, 0.81 63.65%, 0.85 65.93%, 0.89 68.2%, 1 72.7%, 0.97 74.98%, 0.95 77.25%, 0.94 79.53%, 0.94 81.8%, 0.94 84.08%, 0.95 86.35%, 0.97 88.63%, 1 90.9%, 0.99 93.18%, 0.98 95.45%, 0.99 97.73%, 1 100%)",
    "emphasis": "linear(0 0%, 0 1.8%, 0.01 3.6%, 0.03 6.35%, 0.07 9.1%, 0.13 11.4%, 0.19 13.4%, 0.27 15%, 0.34 16.1%, 0.54 18.35%, 0.66 20.6%, 0.72 22.4%, 0.77 24.6%, 0.81 27.3%, 0.85 30.4%, 0.88 35.1%, 0.92 40.6%, 0.94 47.2%, 0.96 55%, 0.98 64%, 0.99 74.4%, 1 86.4%, 1 100%)"
  };
  const hasNoVariation = ["default", "fastInSlowOut", "smoothStep", "elastic", "bounce", "emphasis"];
  let needsInit = true,
    animateModals = true,
    animateLibraries = true,
    animateButtons = true,
    animationSpeed = 1,
    animationType = "default",
    animationDir = "InOut";
  let patchedBody = false,
    sbPatched = false,
    sbEverPatched = false,
    listenerAttached = false;
  const genStyles = () => "\n/* Top Bar Items */\n.".concat(addonKey, "top-bar-scaler {\n    transition: transform ").concat(getAnim(.1), ";\n    transform-origin: center center;\n    transform-box: fill-box;\n}\n.").concat(addonKey, "top-bar-scaler:hover:not([addon-scale-stop=\"true\"]) {\n    transform: scale(1.05);\n}\n.").concat(addonKey, "top-bar-scaler:active:not([addon-scale-stop=\"true\"]) {\n    transform: scale(.95);\n}\n\n/*\n  Assets, Blockly Button Texts\n  Costume/Extension/Sprite/Sound Library UI\n*/\n.").concat(addonKey, "static-scaler {\n    transition: transform ").concat(getAnim(.1), ";\n    transform-origin: center center;\n    transform-box: fill-box;\n}\n.").concat(addonKey, "static-scaler:hover:not([addon-scale-stop=\"true\"]) {\n    transform: scale(1.05);\n}\n.").concat(addonKey, "static-scaler:active:not([addon-scale-stop=\"true\"]) {\n    transform: scale(.95);\n}\n\n/*\n  Sound & Costume Editor Buttons,\n  Project Controls, Blockly Zoom\n*/\n.").concat(addonKey, "static-scaler-big {\n    transition: transform ").concat(getAnim(.2), " !important;\n    transform-origin: center center;\n    transform-box: fill-box;\n}\n.").concat(addonKey, "static-scaler-big:hover {\n    transform: scale(1.1);\n}\n.").concat(addonKey, "static-scaler-big:active {\n    transform: scale(.9);\n}\n\n/* Custom Extension Button (Library) */\n.").concat(addonKey, "custom-ext-hover {\n  transition: transform ").concat(getAnim(.2), ", border ").concat(getAnim(.5), ";\n  justify-content: center;\n  border: none;\n}\n.").concat(addonKey, "custom-ext-hover:hover {\n  border: solid 3px #00000050;\n}\n.").concat(addonKey, "custom-ext-hover:active {\n  transform: scale(.95);\n  border: none;\n}\n\n/* Library Items */\n.").concat(addonKey, "library-item-scaler div[class^=\"library-item_library-item\"] {\n    transition: transform ").concat(getAnim(.1), ";\n    transform-origin: center center;\n    transform-box: fill-box;\n}\n.").concat(addonKey, "library-item-scaler div[class^=\"library-item_library-item\"]:hover {\n    transform: scale(1.05);\n}\n.").concat(addonKey, "library-item-scaler div[class^=\"library-item_library-item\"]:active {\n    transform: scale(.95);\n}\n\n/* Categories */\n.").concat(addonKey, "category-scaler div div[class=\"scratchCategoryMenuRow\"] {\n    transition: transform ").concat(getAnim(.1), ";\n    transform-origin: center center;\n    transform-box: fill-box;\n}\n.").concat(addonKey, "category-scaler div div[class=\"scratchCategoryMenuRow\"]:hover {\n    transform: scale(1.05);\n}\n.").concat(addonKey, "category-scaler div div[class=\"scratchCategoryMenuRow\"]:active {\n    transform: scale(.95);\n}\n");
  const styleElement = document.createElement("style");
  styleElement.classList.add("addon-editorAnimations");
  styleElement.textContent = genStyles();
  document.head.appendChild(styleElement);
  let animationEnabled = !mediaQuery.matches;
  mediaQuery.addEventListener("change", e => {
    animationEnabled = !e.matches;
  });
  function requestAddonState() {
    animateModals = addon.settings.get("animateModals");
    animateLibraries = addon.settings.get("animateLibraries");
    animateButtons = addon.settings.get("animateButtons");
    animationType = addon.settings.get("animationType");
    animationDir = addon.settings.get("animationDir");
    const oldSpeed = animationSpeed;
    animationSpeed = 1 / (Number(addon.settings.get("animateSpeed")) / 100);
    if (oldSpeed !== animationSpeed) styleElement.textContent = genStyles();
  }
  function getEasing() {
    if (hasNoVariation.includes(animationType)) {
      return animationTypes[animationType];
    } else {
      return animationTypes[animationType + animationDir];
    }
  }
  function getAnim(time) {
    time *= animationSpeed;
    return "".concat(time, "s ").concat(getEasing());
  }
  ;
  function observeMenuScalers(element, observerSub, observerAtt) {
    if (!animateModals) return;
    if (element.hasAttribute("addon-scale-listeners-bound")) return;
    const onMouseOver = () => element.setAttribute("addon-scale-stop", true);
    const onMouseOut = () => element.setAttribute("addon-scale-stop", false);
    element.addEventListener("mouseover", onMouseOver);
    element.addEventListener("mouseout", onMouseOut);
    element.setAttribute("addon-scale-listeners-bound", "true");
    element.setAttribute("addon-scale-stop", true);
    const observer = new MutationObserver(() => {
      var _element$querySelecto, _element$querySelecto2;
      if (!element.classList.contains("menu-bar_active") && ((_element$querySelecto = element.querySelector("nav")) === null || _element$querySelecto === void 0 ? void 0 : (_element$querySelecto2 = _element$querySelecto.style) === null || _element$querySelecto2 === void 0 ? void 0 : _element$querySelecto2.opacity) !== "1") {
        element.removeEventListener("mouseover", onMouseOver);
        element.removeEventListener("mouseout", onMouseOut);
        element.removeAttribute("addon-scale-listeners-bound");
        element.setAttribute("addon-scale-stop", false);
        observer.disconnect();
      }
    });
    observer.observe(element, {
      subtree: observerSub,
      attributes: true,
      attributeFilter: observerAtt
    });
  }
  function handleOpenAnimation(elementName) {
    var _document$querySelect;
    const type = elementName.endsWith("Library") ? "library" : elementName.endsWith("Menu") ? "menu" : "modal";
    if (!animateLibraries && type === "library") return;
    if (!animateModals && type !== "library") return;
    let element;
    let animTime = 200;
    if (type === "menu") {
      if (elementName === "ctxMenu") element = document.querySelector("div[class*=\"blocklyContextMenu\"]");else if (elementName === "guiCtxMenu") element = document.querySelector("nav[class*=\"context-menu_context-menu\"][class*=\"react-contextmenu--visible\"]");else {
        element = Array.from(document.querySelectorAll("div[class*=\"menu-bar_menu-bar-menu_\"] ul[class*=\"menu_menu_\"]"));
        if (!element.length) return;
        element = element.find(e => !e.hasAttribute("style"));
      }
      if (!element) return;
      if (type === "menu") {
        const menuItem = element.parentNode.parentNode;
        setTimeout(() => observeMenuScalers(menuItem, false, ["class"]), 10);
      }
      const ogHeight = element.getBoundingClientRect().height;
      element.style.overflow = "hidden";
      element.style.transition = "transform ".concat(getAnim(.2));
      element.style.transformOrigin = "left top";
      if (elementName === "guiCtxMenu") animTime = 500;else element.style.transform = "translateY(-2px) scale(.999)";
      const animation = element.animate([{
        height: "0px",
        opacity: 0
      }, {
        height: "".concat(ogHeight, "px"),
        opacity: 1
      }], {
        duration: animTime * animationSpeed,
        easing: getEasing()
      });
      animation.onfinish = () => {
        element.style.overflow = "";
      };
      return;
    }
    element = elementName === "addonModal" ? document.querySelector("div[class^=\"modal_modal-overlay\"] div[class*=\"modal_modal-content\"]") : (_document$querySelect = document.querySelector("div[class=\"ReactModalPortal\"] div[class*=\"ReactModal__Overlay\"]")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.firstChild;
    if (!element) return;
    if (type === "library") {
      animTime = 500;
      if (elementName === "extensionLibrary" || elementName === "costumeLibrary") element.style.transformOrigin = "left bottom";else element.style.transformOrigin = "center bottom";
    }
    element.animate([{
      transform: "scale(0)",
      opacity: 0
    }, {
      transform: "scale(1)",
      opacity: 1
    }], {
      duration: animTime * animationSpeed,
      easing: getEasing()
    });
  }
  function attachCloseHijack(elementName) {
    const type = elementName.endsWith("Library") ? "library" : elementName.endsWith("Menu") ? "menu" : "modal";
    if (type === "menu" || patchedBody) return;
    if (!animateLibraries && type === "library") return;
    if (!animateModals && type !== "library") return;

    // Monkey Patch
    const ogRemoveChild = document.body.constructor.prototype.removeChild;
    document.body.constructor.prototype.removeChild = function (child) {
      const element = elementName === "addonModal" ? document.querySelector("div[class^=\"modal_modal-overlay\"]") : document.querySelector("div[class=\"ReactModalPortal\"]");
      if (!element) return ogRemoveChild.call(this, child);
      let animTime = 200;
      patchedBody = true;
      if (child === element) {
        const child = element.firstChild;
        if (child) {
          const animClone = child.cloneNode(true);
          animClone.style.position = "fixed";
          animClone.style.top = child.getBoundingClientRect().top + "px";
          animClone.style.left = child.getBoundingClientRect().left + "px";
          animClone.style.zIndex = "99999";
          animClone.style.pointerEvents = "none";
          if (type === "library") {
            animTime = 500;
            if (elementName === "extensionLibrary" || elementName === "costumeLibrary") animClone.style.transformOrigin = "left bottom";else animClone.style.transformOrigin = "center bottom";
          }
          document.body.appendChild(animClone);
          animClone.animate([{
            opacity: 1
          }, {
            opacity: 0
          }], {
            duration: animTime * animationSpeed,
            easing: getEasing()
          });
          const animation = animClone.firstChild.animate([{
            transform: "scale(1)",
            opacity: 1
          }, {
            transform: "scale(0)",
            opacity: 0
          }], {
            duration: animTime * animationSpeed,
            easing: getEasing()
          });
          animation.onfinish = () => {
            animClone.remove();
            ogRemoveChild.call(element.parentNode, element);
          };
          document.body.constructor.prototype.removeChild = ogRemoveChild;
          patchedBody = false;
          return child;
        }
      }
      return ogRemoveChild.call(this, child);
    };
  }
  function compileClasses(optLibrary) {
    if (!animateButtons) return;
    const classMapper = new Map();
    if (optLibrary) {
      const collapser = document.querySelector("button[class^=\"library_library-filter-collapse\"]");
      const filterDiv = document.querySelector("div[class^=\"library_library-filter-bar\"]");
      collapser.style.transform = "rotateY(180deg)";
      collapser.addEventListener("click", e => {
        e.preventDefault();
        const isClosed = collapser.hasAttribute("closed");
        if (isClosed) {
          collapser.style.transform = "rotateY(180deg)";
          collapser.removeAttribute("closed");
          filterDiv.style.display = "";
          filterDiv.animate([{
            width: "0px",
            opacity: 0
          }, {
            width: "342px",
            opacity: 1
          }], {
            duration: 300,
            easing: getEasing()
          });
        } else {
          collapser.style.transform = "rotateY(0deg)";
          const animation = filterDiv.animate([{
            width: "342px",
            opacity: 1
          }, {
            width: "0px",
            opacity: 0
          }], {
            duration: 300,
            easing: getEasing()
          });
          animation.onfinish = () => {
            collapser.setAttribute("closed", "true");
            filterDiv.style.display = "none";
          };
        }
        e.stopPropagation();
      });
      if (optLibrary === "extensionLibrary") {
        classMapper.set("custom-ext-hover", [document.querySelector("span[class*=\"button_outlined-button\"][class*=\"tag-button_tag-button\"]")]);
      }
      classMapper.set("library-item-scaler", [document.querySelector("div[class*=\"library_library-scroll-grid\"]")]);
      classMapper.set("static-scaler", [document.querySelector("span[class*=\"modal_back-button_\"]"), collapser]);
    } else {
      classMapper.set("top-bar-scaler", document.querySelectorAll("div[class*=\"menu-bar_main-menu\"] div[class*=\"menu-bar_menu-bar-item\"][class*=\"hoverable\"]"));
      classMapper.set("category-scaler", [document.querySelector("div[class=\"blocklyToolboxDiv\"]")]);
      classMapper.set("static-scaler", [/* Blockly Button Texts */
      ...document.querySelectorAll("g[class=\"blocklyFlyoutButton\"] text[class=\"blocklyText\"]"), /* Costume & Sound Assets */
      ...document.querySelectorAll("div[class*=\"selector_list-item\"][class*=\"sprite-selector-item\"]"), /* Sprite Selector */
      ...document.querySelectorAll("div[class*=\"sprite-selector_sprite\"][class*=\"sprite-selector-item\"]"), /* Backpack Selector */
      ...document.querySelectorAll("div[class*=\"backpack_backpack-item\"][class*=\"sprite-selector-item\"]")]);
      classMapper.set("static-scaler-big", [/* Sound & Costume Editor Buttons */
      ...document.querySelectorAll("div[class*=\"sound-editor_effect-button\"]"), ...document.querySelectorAll("div[class*=\"sound-editor_tool-button\"]"), ...document.querySelectorAll("button[class*=\"sound-editor_round-button\"]"), ...document.querySelectorAll("span[class*=\"tool-select-base_mod-tool-select\"]"), /* Project Controls */
      ...document.querySelectorAll("div[class^=\"controls_controls-container\"] img"), /* Blockly Zoom */
      ...document.querySelectorAll("g[class=\"blocklyZoom\"] image")]);
    }
    classMapper.forEach((elements, classN) => {
      for (const element of elements) {
        if (!element) continue;
        element.classList.add(addonKey + classN);
      }
    });
    needsInit = false;
  }
  function tryPatchScratchBlocks() {
    if (typeof ScratchBlocks !== "object") return;
    sbPatched = true;

    // some modals are from ScratchBlocks, patch them!
    queueMicrotask(() => {
      const ogSBPrompt = ScratchBlocks.prompt;
      ScratchBlocks.prompt = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        ogSBPrompt.call(this, ...args);
        handleOpenAnimation("modal");
        attachCloseHijack("modal");
      };
      const ogSBCustomPrompt = ScratchBlocks.customPrompt;
      ScratchBlocks.customPrompt = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        const modal = ogSBCustomPrompt.call(this, ...args);
        if (modal) handleOpenAnimation("modal");else queueMicrotask(() => handleOpenAnimation("modal"));
        attachCloseHijack("modal");
        return modal;
      };
      if (sbEverPatched) return;
      sbEverPatched = true;
      const ogSBProcCreate = ScratchBlocks.Procedures.createProcedureDefCallback_;
      ScratchBlocks.Procedures.createProcedureDefCallback_ = function () {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }
        ogSBProcCreate.call(this, ...args);
        handleOpenAnimation("modal");
        attachCloseHijack("modal");
      };
      const ogSBProcEdit = ScratchBlocks.Procedures.editProcedureCallback_;
      ScratchBlocks.Procedures.editProcedureCallback_ = function () {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }
        ogSBProcEdit.call(this, ...args);
        handleOpenAnimation("modal");
        attachCloseHijack("modal");
      };
      const ogContextMenuShow = ScratchBlocks.ContextMenu.show;
      ScratchBlocks.ContextMenu.show = function () {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }
        ogContextMenuShow.call(this, ...args);
        handleOpenAnimation("ctxMenu");
      };

      /* this isnt a modal, but we still want to patch it for animations */
      const ogInitButton = ScratchBlocks.FlyoutButton.prototype.show;
      ScratchBlocks.FlyoutButton.prototype.show = function () {
        for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          args[_key6] = arguments[_key6];
        }
        ogInitButton.call(this, ...args);
        queueMicrotask(() => compileClasses());
      };

      /* addon modal API */
      window.vm.on("ADDON_WORKER_MODAL", () => {
        handleOpenAnimation("addonModal");
        attachCloseHijack("addonModal");
      });
    });
  }
  function attachListeners() {
    const spriteRow = document.querySelector("div[class^=\"sprite-selector_items-wrapper\"]");
    if (!spriteRow) return;
    document.addEventListener("contextmenu", event => {
      let element = event.target.closest("div[class*=\"sprite-selector_sprite-wrapper\"]");
      if (element) element = element.firstChild;else element = event.target.closest("div[class^=\"react-contextmenu-wrapper\"][class*=\"sprite-selector-item_sprite-selector\"]");
      if (element) {
        setTimeout(() => {
          element.querySelector("nav").style.opacity = 1;
          handleOpenAnimation("guiCtxMenu");
          observeMenuScalers(element, true, ["class", "style"]);
        }, 10);
      }
    });
    listenerAttached = true;
  }
  function startListenerWorker() {
    const checkInEditor = () => !ReduxStore.getState().scratchGui.mode.isPlayerOnly;
    window.vm.on("workspaceUpdate", () => {
      queueMicrotask(() => compileClasses());
    });
    let lastModalStateID, inEditor;
    ReduxStore.subscribe(() => {
      const reduxState = ReduxStore.getState().scratchGui;
      let entries = Object.entries(reduxState.modals);
      entries.push(...Object.entries(reduxState.menus));
      const genID = [...entries, ["tab", reduxState.editorTab.activeTabIndex]];
      const modalStateID = genID.map(entry => entry[1]).join(".");
      const currentlyInEditor = checkInEditor();
      if (inEditor !== currentlyInEditor) {
        inEditor = currentlyInEditor;
        if (inEditor) {
          sbPatched = false;
          listenerAttached = false;
        }
      }
      if (!sbPatched) tryPatchScratchBlocks();
      if (!listenerAttached) attachListeners();
      if (!needsInit && lastModalStateID === modalStateID) return;
      lastModalStateID = modalStateID;
      queueMicrotask(() => {
        compileClasses();
        for (const entry of entries) {
          if (entry[1] === true) {
            const name = entry[0];
            handleOpenAnimation(name);
            attachCloseHijack(name);
            compileClasses(name.endsWith("Library") ? name : undefined);
            break;
          }
        }
      });
    });
  }
  if (typeof scaffolding === "undefined") startListenerWorker();
  addon.settings.addEventListener("change", requestAddonState);
  addon.self.addEventListener("disabled", () => {
    animateModals = false;
    animateLibraries = false;
    animateButtons = false;
  });
  addon.self.addEventListener("reenabled", () => {
    animateModals = true;
    animateLibraries = true;
    animateButtons = true;
  });
});

/***/ }),

/***/ "./src/addons/addons/editor-block-chomping/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/editor-block-chomping/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-block-chomping/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-block-chomping/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/editor-block-chomping/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  // Rerender the dragged block when updating the insertion marker
  const ogConnectMarker = ScratchBlocks.InsertionMarkerManager.prototype.connectMarker_;
  ScratchBlocks.InsertionMarkerManager.prototype.connectMarker_ = function () {
    ogConnectMarker.call(this);
    if (!addon.self.disabled && this.firstMarker_) {
      var _this$workspace_, _this$workspace_$curr, _this$workspace_$curr2;
      const block = this === null || this === void 0 ? void 0 : (_this$workspace_ = this.workspace_) === null || _this$workspace_ === void 0 ? void 0 : (_this$workspace_$curr = _this$workspace_.currentGesture_) === null || _this$workspace_$curr === void 0 ? void 0 : (_this$workspace_$curr2 = _this$workspace_$curr.blockDragger_) === null || _this$workspace_$curr2 === void 0 ? void 0 : _this$workspace_$curr2.draggingBlock_;
      block.noMoveConnection = true;
      if (block) block.render(false);
    }
  };
  const ogDisconnectMarker = ScratchBlocks.InsertionMarkerManager.prototype.disconnectMarker_;
  ScratchBlocks.InsertionMarkerManager.prototype.disconnectMarker_ = function () {
    ogDisconnectMarker.call(this);
    if (!addon.self.disabled && this.firstMarker_) {
      var _this$workspace_2, _this$workspace_2$cur, _this$workspace_2$cur2;
      const block = this === null || this === void 0 ? void 0 : (_this$workspace_2 = this.workspace_) === null || _this$workspace_2 === void 0 ? void 0 : (_this$workspace_2$cur = _this$workspace_2.currentGesture_) === null || _this$workspace_2$cur === void 0 ? void 0 : (_this$workspace_2$cur2 = _this$workspace_2$cur.blockDragger_) === null || _this$workspace_2$cur2 === void 0 ? void 0 : _this$workspace_2$cur2.draggingBlock_;
      block.noMoveConnection = true;
      if (block) block.render(false);
    }
  };
  const ogDraw = ScratchBlocks.BlockSvg.prototype.renderDraw_;
  const ogMoveConnections = ScratchBlocks.BlockSvg.prototype.renderMoveConnections_;
  ScratchBlocks.BlockSvg.prototype.renderDraw_ = function (iconWidth, inputRows) {
    var _this$workspace, _this$workspace$curre, _this$workspace$curre2;
    if (addon.self.disabled) return ogDraw.call(this, iconWidth, inputRows);

    // If the block contains a statement (C) input and has an insertion marker,
    // use that to calculate the height of the statement inputs
    let computeBlock = this;
    if (this !== null && this !== void 0 && (_this$workspace = this.workspace) !== null && _this$workspace !== void 0 && (_this$workspace$curre = _this$workspace.currentGesture_) !== null && _this$workspace$curre !== void 0 && (_this$workspace$curre2 = _this$workspace$curre.blockDragger_) !== null && _this$workspace$curre2 !== void 0 && _this$workspace$curre2.draggedConnectionManager_) {
      const dragger = this.workspace.currentGesture_.blockDragger_;
      const manager = dragger.draggedConnectionManager_;
      if (manager.markerConnection_ && manager.firstMarker_ && dragger.draggingBlock_ == this && dragger.draggingBlock_.type == manager.firstMarker_.type) {
        if (inputRows.some(row => row.some(input => input.type === ScratchBlocks.NEXT_STATEMENT))) {
          computeBlock = manager.firstMarker_;
        }
      }
    }

    // Change the height of substacks
    // (If we set inputRows to computeBlock.renderCompute_,
    // the references to the inputs would be wrong
    // so they just won't update properly)
    if (computeBlock !== this) {
      const _inputRows = computeBlock.renderCompute_(iconWidth);
      for (let i = 0; i < inputRows.length; i++) {
        const row = inputRows[i];
        let update = false;
        for (const input of row) {
          if (input.type === ScratchBlocks.NEXT_STATEMENT) update = true;
        }
        if (update) row.height = Math.max(row.height, _inputRows[i].height);
      }
    }
    ogDraw.call(this, iconWidth, inputRows);

    // Moving the connections of a block while it's being dragged breaks it,
    // so don't
    if (computeBlock === this && !this.noMoveConnection) ogMoveConnections.call(this);
    this.noMoveConnection = false;
  };
  ScratchBlocks.BlockSvg.prototype.renderMoveConnections_ = function () {
    if (addon.self.disabled) return ogMoveConnections.call(this);
    // Do nothing (this function is instead called by renderDraw_)
  };
});

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/_runtime_entry.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/_runtime_entry.js ***!
  \*********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-comment-previews/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-comment-previews/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-comment-previews/userscript.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/editor-comment-previews/userscript.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  const vm = addon.tab.traps.vm;
  const updateStyles = () => {
    previewInner.classList.toggle("sa-comment-preview-delay", addon.settings.get("delay") !== "none");
    previewInner.classList.toggle("sa-comment-preview-reduce-transparency", addon.settings.get("reduce-transparency"));
    previewInner.classList.toggle("sa-comment-preview-fade", !addon.settings.get("reduce-animation"));
  };
  const afterDelay = cb => {
    if (!previewInner.classList.contains("sa-comment-preview-hidden")) {
      // If not hidden, updating immediately is preferred
      cb();
      return;
    }
    const delay = addon.settings.get("delay");
    if (delay === "long") return setTimeout(cb, 500);
    if (delay === "short") return setTimeout(cb, 300);
    cb();
  };
  let hoveredElement = null;
  let showTimeout = null;
  let mouseX = 0;
  let mouseY = 0;
  let doNotShowUntilMoveMouse = false;
  const previewOuter = document.createElement("div");
  previewOuter.classList.add("sa-comment-preview-outer");
  const previewInner = document.createElement("div");
  previewInner.classList.add("sa-comment-preview-inner");
  previewInner.classList.add("sa-comment-preview-hidden");
  updateStyles();
  addon.settings.addEventListener("change", updateStyles);
  previewOuter.appendChild(previewInner);
  document.body.appendChild(previewOuter);
  const getBlock = id => vm.editingTarget.blocks.getBlock(id) || vm.runtime.flyoutBlocks.getBlock(id);
  const getComment = block => block && block.comment && vm.editingTarget.comments[block.comment];
  const getProcedureDefinitionBlock = procCode => {
    const procedurePrototype = Object.values(vm.editingTarget.blocks._blocks).find(i => i.opcode === "procedures_prototype" && i.mutation.proccode === procCode);
    if (procedurePrototype) {
      // Usually `parent` will exist but sometimes it doesn't
      if (procedurePrototype.parent) {
        return getBlock(procedurePrototype.parent);
      }
      const id = procedurePrototype.id;
      return Object.values(vm.editingTarget.blocks._blocks).find(i => (i.opcode === "procedures_definition" || i.opcode === "procedures_definition_return") && i.inputs.custom_block && i.inputs.custom_block.block === id);
    }
    return null;
  };
  const setText = text => {
    previewInner.innerText = text;
    previewInner.classList.remove("sa-comment-preview-hidden");
    updateMousePosition();
  };
  const updateMousePosition = () => {
    previewOuter.style.transform = "translate(".concat(mouseX + 8, "px, ").concat(mouseY + 8, "px)");
  };
  const hidePreview = () => {
    if (hoveredElement) {
      hoveredElement = null;
      previewInner.classList.add("sa-comment-preview-hidden");
    }
  };
  document.addEventListener("mouseover", e => {
    if (addon.self.disabled) {
      return;
    }
    clearTimeout(showTimeout);
    if (doNotShowUntilMoveMouse) {
      return;
    }
    const el = e.target.closest(".blocklyBubbleCanvas > g, .blocklyBlockCanvas .blocklyDraggable[data-id]");
    if (el === hoveredElement) {
      // Nothing to do.
      return;
    }
    if (!el) {
      hidePreview();
      return;
    }
    let text = null;
    if (addon.settings.get("hover-view") && e.target.closest(".blocklyBubbleCanvas > g") &&
    // Hovering over the thin line that connects comments to blocks should never show a preview
    !e.target.closest("line")) {
      const collapsedText = el.querySelector("text.scratchCommentText");
      if (!collapsedText) return;
      if (collapsedText.getAttribute("display") !== "none") {
        const textarea = el.querySelector("textarea");
        text = textarea.value;
      }
    } else if (e.target.closest(".blocklyBlockCanvas .blocklyDraggable[data-id]")) {
      const id = el.dataset.id;
      const block = getBlock(id);
      const comment = getComment(block);
      if (addon.settings.get("hover-view-block") && comment) {
        text = comment.text;
      } else if (block && block.opcode === "procedures_call" && addon.settings.get("hover-view-procedure")) {
        const procCode = block.mutation.proccode;
        const procedureDefinitionBlock = getProcedureDefinitionBlock(procCode);
        const procedureComment = getComment(procedureDefinitionBlock);
        if (procedureComment) {
          text = procedureComment.text;
        }
      }
    }
    if (text !== null && text.trim() !== "") {
      showTimeout = afterDelay(() => {
        hoveredElement = el;
        setText(text);
      });
    } else {
      hidePreview();
    }
  });
  document.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    doNotShowUntilMoveMouse = false;
    if (addon.settings.get("follow-mouse") && !previewInner.classList.contains("sa-comment-preview-hidden")) {
      updateMousePosition();
    }
  });
  document.addEventListener("mousedown", () => {
    hidePreview();
    doNotShowUntilMoveMouse = true;
  }, {
    capture: true
  });
});

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DevTools.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DevTools.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DevTools; });
/* harmony import */ var _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DomHelpers.js */ "./src/addons/addons/editor-devtools/DomHelpers.js");
/* harmony import */ var _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UndoGroup.js */ "./src/addons/addons/editor-devtools/UndoGroup.js");
// import ShowBroadcast from "./show-broadcast.js";


class DevTools {
  constructor(addon, msg, m) {
    this.addon = addon;
    this.msg = msg;
    this.m = m;
    /**
     * @type {VirtualMachine}
     */
    this.domHelpers = new _DomHelpers_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon);
    this.codeTab = null;
    this.costTab = null;
    this.costTabBody = null;
    this.selVarID = null;
    this.canShare = false;
    this.mouseXY = {
      x: 0,
      y: 0
    };
  }
  async init() {
    this.addContextMenus();
    while (true) {
      const root = await this.addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
        reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
      });
      this.initInner(root);
    }
  }
  async addContextMenus() {
    const blockly = await this.addon.tab.traps.getBlockly();
    const oldCleanUpFunc = blockly.WorkspaceSvg.prototype.cleanUp;
    const self = this;
    blockly.WorkspaceSvg.prototype.cleanUp = function () {
      if (self.addon.settings.get("enableCleanUpPlus")) {
        self.doCleanUp();
      } else {
        oldCleanUpFunc.call(this);
      }
    };
    let originalMsg = blockly.Msg.CLEAN_UP;
    if (this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = this.m("clean-plus");
    this.addon.settings.addEventListener("change", () => {
      if (this.addon.settings.get("enableCleanUpPlus")) blockly.Msg.CLEAN_UP = this.m("clean-plus");else blockly.Msg.CLEAN_UP = originalMsg;
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: blockly.clipboardXml_,
        text: this.m("paste"),
        separator: true,
        _isDevtoolsFirstItem: true,
        callback: () => {
          let ids = this.getTopBlockIDs();
          document.dispatchEvent(new KeyboardEvent("keydown", {
            keyCode: 86,
            ctrlKey: true,
            griff: true
          }));
          setTimeout(() => {
            this.beginDragOfNewBlocksNotInIDs(ids);
          }, 10);
        }
      });
      return items;
    }, {
      workspace: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      items.push({
        enabled: true,
        text: this.m("make-space"),
        _isDevtoolsFirstItem: true,
        callback: () => {
          this.doCleanUp(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m("copy-all"),
        callback: () => {
          this.eventCopyClick(block);
        },
        separator: true
      }, {
        enabled: true,
        text: this.m("copy-block"),
        callback: () => {
          this.eventCopyClick(block, 1);
        }
      }, {
        enabled: true,
        text: this.m("cut-block"),
        callback: () => {
          this.eventCopyClick(block, 2);
        }
      });
      // const BROADCAST_BLOCKS = ["event_whenbroadcastreceived", "event_broadcast", "event_broadcastandwait"];
      // if (BROADCAST_BLOCKS.includes(block.type)) {
      //   // Show Broadcast
      //   const broadcastId = this.showBroadcastSingleton.getAssociatedBroadcastId(block.id);
      //   if (broadcastId) {
      //     ["Senders", "Receivers"].forEach((showKey, i) => {
      //       items.push({
      //         enabled: true,
      //         text: this.msg(`show-${showKey}`.toLowerCase()),
      //         callback: () => {
      //           this.showBroadcastSingleton[`show${showKey}`](broadcastId);
      //         },
      //         separator: i == 0,
      //       });
      //     });
      //   }
      // }
      return items;
    }, {
      blocks: true
    });
    this.addon.tab.createBlockContextMenu((items, block) => {
      if (block.getCategory() === "data" || block.getCategory() === "data-lists") {
        this.selVarID = block.getVars()[0];
        items.push({
          enabled: true,
          text: this.m("swap", {
            var: block.getCategory() === "data" ? this.m("variables") : this.m("lists")
          }),
          callback: async () => {
            let wksp = this.getWorkspace();
            let v = wksp.getVariableById(this.selVarID);
            // prompt() returns Promise in desktop app
            let varName = await window.prompt(this.msg("replace", {
              name: v.name
            }));
            if (varName) {
              this.doReplaceVariable(this.selVarID, varName, v.type);
            }
          },
          separator: true
        });
      }
      return items;
    }, {
      blocks: true,
      flyout: true
    });
  }
  getWorkspace() {
    return Blockly.getMainWorkspace();
  }
  isCostumeEditor() {
    return this.costTab.className.indexOf("gui_is-selected") >= 0;
  }

  /**
   * A nicely ordered version of the top blocks
   * @returns {[Blockly.Block]}
   */
  getTopBlocks() {
    let result = this.getOrderedTopBlockColumns();
    let columns = result.cols;
    /**
     * @type {[[Blockly.Block]]}
     */
    let topBlocks = [];
    for (const col of columns) {
      topBlocks = topBlocks.concat(col.blocks);
    }
    return topBlocks;
  }

  /**
   * A much nicer way of laying out the blocks into columns
   */
  doCleanUp(block) {
    let workspace = this.getWorkspace();
    let makeSpaceForBlock = block && block.getRootBlock();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(workspace);
    let result = this.getOrderedTopBlockColumns(true);
    let columns = result.cols;
    let orphanCount = result.orphans.blocks.length;
    if (orphanCount > 0 && !block) {
      let message = this.msg("orphaned", {
        count: orphanCount
      });
      if (confirm(message)) {
        for (const block of result.orphans.blocks) {
          block.dispose();
        }
      } else {
        columns.unshift(result.orphans);
      }
    }
    let cursorX = 48;
    let maxWidths = result.maxWidths;
    for (const column of columns) {
      let cursorY = 64;
      let maxWidth = 0;
      for (const block of column.blocks) {
        let extraWidth = block === makeSpaceForBlock ? 380 : 0;
        let extraHeight = block === makeSpaceForBlock ? 480 : 72;
        let xy = block.getRelativeToSurfaceXY();
        if (cursorX - xy.x !== 0 || cursorY - xy.y !== 0) {
          block.moveBy(cursorX - xy.x, cursorY - xy.y);
        }
        let heightWidth = block.getHeightWidth();
        cursorY += heightWidth.height + extraHeight;
        let maxWidthWithComments = maxWidths[block.id] || 0;
        maxWidth = Math.max(maxWidth, Math.max(heightWidth.width + extraWidth, maxWidthWithComments));
      }
      cursorX += maxWidth + 96;
    }
    let topComments = workspace.getTopComments();
    for (const comment of topComments) {
      if (comment.setVisible) {
        comment.setVisible(false);
        comment.needsAutoPositioning_ = true;
        comment.setVisible(true);
      }
    }
    setTimeout(() => {
      // Locate unused local variables...
      let workspace = this.getWorkspace();
      let map = workspace.getVariableMap();
      let vars = map.getVariablesOfType("");
      let unusedLocals = [];
      for (const row of vars) {
        if (row.isLocal) {
          let usages = map.getVariableUsesById(row.getId());
          if (!usages || usages.length === 0) {
            unusedLocals.push(row);
          }
        }
      }
      if (unusedLocals.length > 0) {
        const unusedCount = unusedLocals.length;
        let message = this.msg("unused-var", {
          count: unusedCount
        });
        for (let i = 0; i < unusedLocals.length; i++) {
          let orphan = unusedLocals[i];
          if (i > 0) {
            message += ", ";
          }
          message += orphan.name;
        }
        if (confirm(message)) {
          for (const orphan of unusedLocals) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      }

      // Locate unused local lists...
      let lists = map.getVariablesOfType("list");
      let unusedLists = [];
      for (const row of lists) {
        if (row.isLocal) {
          let usages = map.getVariableUsesById(row.getId());
          if (!usages || usages.length === 0) {
            unusedLists.push(row);
          }
        }
      }
      if (unusedLists.length > 0) {
        const unusedCount = unusedLists.length;
        let message = this.msg("unused-list", {
          count: unusedCount
        });
        for (let i = 0; i < unusedLists.length; i++) {
          let orphan = unusedLists[i];
          if (i > 0) {
            message += ", ";
          }
          message += orphan.name;
        }
        if (confirm(message)) {
          for (const orphan of unusedLists) {
            workspace.deleteVariableById(orphan.getId());
          }
        }
      }
      _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(workspace);
    }, 100);
  }

  /**
   * Badly Orphaned - might want to delete these!
   * @param topBlock
   * @returns {boolean}
   */
  isBlockAnOrphan(topBlock) {
    return !!topBlock.outputConnection;
  }

  /**
   * Split the top blocks into ordered columns
   * @param separateOrphans true to keep all orphans separate
   * @returns {{orphans: {blocks: [Block], x: number, count: number}, cols: [Col]}}
   */
  getOrderedTopBlockColumns(separateOrphans) {
    let w = this.getWorkspace();
    let topBlocks = w.getTopBlocks();
    let maxWidths = {};
    if (separateOrphans) {
      let topComments = w.getTopComments();

      // todo: tie comments to blocks... find widths and width of block stack row...
      for (const comment of topComments) {
        // comment.autoPosition_();
        // Hiding and showing repositions the comment right next to it's block - nice!
        if (comment.setVisible) {
          comment.setVisible(false);
          comment.needsAutoPositioning_ = true;
          comment.setVisible(true);

          // let bb = comment.block_.svgPath_.getBBox();
          let right = comment.getBoundingRectangle().bottomRight.x;

          // Get top block for stack...
          let root = comment.block_.getRootBlock();
          let left = root.getBoundingRectangle().topLeft.x;
          maxWidths[root.id] = Math.max(right - left, maxWidths[root.id] || 0);
        }
      }
    }

    // Default scratch ordering is horrid... Lets try something more clever.

    /**
     * @type {Col[]}
     */
    let cols = [];
    const TOLERANCE = 256;
    let orphans = {
      x: -999999,
      count: 0,
      blocks: []
    };
    for (const topBlock of topBlocks) {
      // let r = b.getBoundingRectangle();
      let position = topBlock.getRelativeToSurfaceXY();
      /**
       * @type {Col}
       */
      let bestCol = null;
      let bestError = TOLERANCE;
      if (separateOrphans && this.isBlockAnOrphan(topBlock)) {
        orphans.blocks.push(topBlock);
        continue;
      }

      // Find best columns
      for (const col of cols) {
        let err = Math.abs(position.x - col.x);
        if (err < bestError) {
          bestError = err;
          bestCol = col;
        }
      }
      if (bestCol) {
        // We found a column that we fitted into
        bestCol.x = (bestCol.x * bestCol.count + position.x) / ++bestCol.count; // re-average the columns as more items get added...
        bestCol.blocks.push(topBlock);
      } else {
        // Create a new column
        cols.push(new Col(position.x, 1, [topBlock]));
      }
    }

    // if (orphans.blocks.length > 0) {
    //     cols.push(orphans);
    // }

    // Sort columns, then blocks inside the columns
    cols.sort((a, b) => a.x - b.x);
    for (const col of cols) {
      col.blocks.sort((a, b) => a.getRelativeToSurfaceXY().y - b.getRelativeToSurfaceXY().y);
    }
    return {
      cols: cols,
      orphans: orphans,
      maxWidths: maxWidths
    };
  }

  /**
   * Find all the uses of a named variable.
   * @param {string} id ID of the variable to find.
   * @return {!Array.<!Blockly.Block>} Array of block usages.
   */
  getVariableUsesById(id) {
    let uses = [];
    let topBlocks = this.getTopBlocks(true); // todo: Confirm this was the right getTopBlocks?
    for (const topBlock of topBlocks) {
      /** @type {!Array<!Blockly.Block>} */
      let kids = topBlock.getDescendants();
      for (const block of kids) {
        /** @type {!Array<!Blockly.VariableModel>} */
        let blockVariables = block.getVarModels();
        if (blockVariables) {
          for (const blockVar of blockVariables) {
            if (blockVar.getId() === id) {
              uses.push(block);
            }
          }
        }
      }
    }
    return uses;
  }

  /**
   * Quick and dirty replace all instances of one variable / list with another variable / list
   * @param varId original variable name
   * @param newVarName new variable name
   * @param type type of variable ("" = variable, anything else is a list?
   */
  doReplaceVariable(varId, newVarName, type) {
    let wksp = this.getWorkspace();
    let v = wksp.getVariable(newVarName, type);
    if (!v) {
      alert(this.msg("var-not-exist"));
      return;
    }
    let newVId = v.getId();
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
    let blocks = this.getVariableUsesById(varId);
    for (const block of blocks) {
      try {
        if (type === "") {
          block.getField("VARIABLE").setValue(newVId);
        } else {
          block.getField("LIST").setValue(newVId);
        }
      } catch (e) {
        // ignore
      }
    }
    _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
  }

  /*
    function doInjectScripts(codeString) {
      let w = getWorkspace();
      let xml = new XML(); // document.implementation.createDocument(null, "xml");
      let x = xml.xmlDoc.firstChild;
       let tree = math.parse(codeString);
      console.log(tree);
       const binaryOperatorTypes = {
        add: "operator_add",
        subtract: "operator_subtract",
        this.multiply: "operator_multiply",
        divide: "operator_divide",
      };
       const BLOCK_TYPE = {
        number: "math_number",
        text: "text",
      };
       function translateMathToXml(x, tree, shadowType) {
        let xShadowField = null;
        if (shadowType) {
          let xShadow = xml.newXml(x, "shadow", { type: shadowType });
          if (shadowType === BLOCK_TYPE.number) {
            xShadowField = xml.newXml(xShadow, "field", { name: "NUM" });
          } else if (shadowType === BLOCK_TYPE.text) {
            xShadowField = xml.newXml(xShadow, "field", { name: "TEXT" });
          }
        }
         if (!tree || !tree.type) {
          return;
        }
         if (tree.type === "OperatorNode") {
          let operatorType = binaryOperatorTypes[tree.fn];
          if (operatorType) {
            let xOp = newXml(x, "block", { type: operatorType });
            translateMathToXml(xml.newXml(xOp, "value", { name: "NUM1" }), tree.args[0], BLOCK_TYPE.number);
            translateMathToXml(xml.newXml(xOp, "value", { name: "NUM2" }), tree.args[1], BLOCK_TYPE.number);
            return;
          }
           return;
        }
         if (tree.type === "ConstantNode") {
          // number or text in quotes
          if (xShadowField) {
            xml.setAttr(xShadowField, { text: tree.value });
          }
          return;
        }
         if (tree.type === "SymbolNode") {
          // variable
          let xVar = xml.newXml(x, "block", { type: "data_variable" });
          xml.newXml(xVar, "field", { name: "VARIABLE", text: tree.name });
          return;
        }
         if (tree.type === "FunctionNode") {
          // Method Call
          if (tree.fn.name === "join") {
            let xOp = newXml(x, "block", { type: "operator_join" });
            translateMathToXml(xml.newXml(xOp, "value", { name: "STRING1" }), tree.args[0], BLOCK_TYPE.text);
            translateMathToXml(xml.newXml(xOp, "value", { name: "STRING2" }), tree.args[1], BLOCK_TYPE.text);
            return;
          }
        }
      }
       translateMathToXml(x, tree);
      console.log(x);
       let ids = Blockly.Xml.domToWorkspace(x, w);
      console.log(ids);
    }
     */
  /*
    function clickInject(e) {
      let codeString = window.prompt("Griffpatch: Enter an expression (i.e. a+2*3)");
      if (codeString) {
        doInjectScripts(codeString);
      }
      e.preventDefault();
      return false;
    }
    */

  /**
   * Returns a Set of the top blocks in this workspace / sprite
   * @returns {Set<any>} Set of top blocks
   */
  getTopBlockIDs() {
    let wksp = this.getWorkspace();
    let topBlocks = wksp.getTopBlocks();
    let ids = new Set();
    for (const block of topBlocks) {
      ids.add(block.id);
    }
    return ids;
  }

  /**
   * Initiates a drag event for all block stacks except those in the set of ids.
   * But why? - Because we know all the ids of the existing stacks before we paste / duplicate - so we can find the
   * new stack by excluding all the known ones.
   * @param ids Set of previously known ids
   */
  beginDragOfNewBlocksNotInIDs(ids) {
    if (!this.addon.settings.get("enablePasteBlocksAtMouse")) {
      return;
    }
    let wksp = this.getWorkspace();
    let topBlocks = wksp.getTopBlocks();
    for (const block of topBlocks) {
      if (!ids.has(block.id)) {
        // console.log("I found a new block!!! - " + block.id);
        // todo: move the block to the mouse pointer?
        let mouseXYClone = {
          x: this.mouseXY.x,
          y: this.mouseXY.y
        };
        block.setIntersects(true); // fixes offscreen block pasting in Turbo Warp
        this.domHelpers.triggerDragAndDrop(block.svgPath_, null, mouseXYClone);
      }
    }
  }
  updateMousePosition(e) {
    this.mouseXY.x = e.clientX;
    this.mouseXY.y = e.clientY;
  }
  eventMouseMove(e) {
    this.updateMousePosition(e);
  }
  eventKeyDown(e) {
    const switchCostume = up => {
      // todo: select previous costume
      let selected = this.costTabBody.querySelector("div[class*='sprite-selector-item_is-selected']");
      let node = up ? selected.parentNode.previousSibling : selected.parentNode.nextSibling;
      if (node) {
        let wrapper = node.closest("div[class*=gui_flex-wrapper]");
        node.querySelector("div[class^='sprite-selector-item_sprite-name']").click();
        node.scrollIntoView({
          behavior: "auto",
          block: "center",
          inline: "start"
        });
        wrapper.scrollTop = 0;
      }
    };
    if (document.URL.indexOf("editor") <= 0) {
      return;
    }
    let ctrlKey = e.ctrlKey || e.metaKey;
    if (e.keyCode === 37 && ctrlKey) {
      // Ctrl + Left Arrow Key
      if (document.activeElement.tagName === "INPUT") {
        return;
      }
      if (this.isCostumeEditor()) {
        switchCostume(true);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }
    if (e.keyCode === 39 && ctrlKey) {
      // Ctrl + Right Arrow Key
      if (document.activeElement.tagName === "INPUT") {
        return;
      }
      if (this.isCostumeEditor()) {
        switchCostume(false);
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
    }
    if (e.keyCode === 86 && ctrlKey && !e.griff) {
      // Ctrl + V
      // Set a timeout so we can take control of the paste after the event
      let ids = this.getTopBlockIDs();
      setTimeout(() => {
        this.beginDragOfNewBlocksNotInIDs(ids);
      }, 10);
    }

    // if (e.keyCode === 220 && (!document.activeElement || document.activeElement.tagName === 'INPUT')) {
    //
    // }
  }
  eventCopyClick(block, blockOnly) {
    let wksp = this.getWorkspace();
    if (block) {
      block.select();
      let next = blockOnly ? block.getNextBlock() : null;
      if (next) {
        next.unplug(false); // setParent(null);
      }

      // separate child temporarily
      document.dispatchEvent(new KeyboardEvent("keydown", {
        keyCode: 67,
        ctrlKey: true
      }));
      if (next || blockOnly === 2) {
        setTimeout(() => {
          if (next) {
            wksp.undo(); // undo the unplug above...
          }
          if (blockOnly === 2) {
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].startUndoGroup(wksp);
            block.dispose(true);
            _UndoGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"].endUndoGroup(wksp);
          }
        }, 0);
      }
    }
  }
  eventMouseDown(e) {
    this.updateMousePosition(e);
  }
  eventMouseUp(e) {
    this.updateMousePosition(e);
  }
  initInner(root) {
    var _this = this;
    let guiTabs = root.childNodes;
    if (this.codeTab && guiTabs[0] !== this.codeTab) {
      // We have been CHANGED!!! - Happens when going to project page, and then back inside again!!!
      this.domHelpers.unbindAllEvents();
    }
    this.codeTab = guiTabs[0];
    this.costTab = guiTabs[1];
    this.costTabBody = document.querySelector("div[aria-labelledby=" + this.costTab.id + "]");
    this.domHelpers.bindOnce(document, "keydown", function () {
      return _this.eventKeyDown(...arguments);
    }, true);
    this.domHelpers.bindOnce(document, "mousemove", function () {
      return _this.eventMouseMove(...arguments);
    }, true);
    this.domHelpers.bindOnce(document, "mousedown", function () {
      return _this.eventMouseDown(...arguments);
    }, true); // true to capture all mouse downs 'before' the dom events handle them
    this.domHelpers.bindOnce(document, "mouseup", function () {
      return _this.eventMouseUp(...arguments);
    }, true);
  }
}
class Col {
  /**
   * @param x {Number} x position (for ordering)
   * @param count {Number}
   * @param blocks {[Block]}
   */
  constructor(x, count, blocks) {
    /**
     * x position (for ordering)
     * @type {Number}
     */
    this.x = x;
    /**
     * @type {Number}
     */
    this.count = count;
    /**
     * @type {[Blockly.Block]}
     */
    this.blocks = blocks;
  }
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/DomHelpers.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/DomHelpers.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DomHelpers; });
class DomHelpers {
  constructor(addon) {
    this.addon = addon;
    this.vm = addon.tab.traps.vm;
    /**
     * @type {eventDetails[]}
     */
    this.events = [];
  }

  /**
   * Simulate a drag and drop programmatically through javascript
   * @param selectorDrag
   * @param selectorDrop
   * @param mouseXY
   * @param [shiftKey=false]
   * @returns {boolean}
   */
  triggerDragAndDrop(selectorDrag, selectorDrop, mouseXY, shiftKey) {
    // function for triggering mouse events
    shiftKey = shiftKey || false;
    let fireMouseEvent = function fireMouseEvent(type, elem, centerX, centerY) {
      let evt = document.createEvent("MouseEvents");
      evt.initMouseEvent(type, true, true, window, 1, 1, 1, centerX, centerY, shiftKey, false, false, false, 0, elem);
      elem.dispatchEvent(evt);
    };

    // fetch target elements
    let elemDrag = selectorDrag; // document.querySelector(selectorDrag);
    let elemDrop = selectorDrop; // document.querySelector(selectorDrop);
    if (!elemDrag /* || !elemDrop*/) {
      return false;
    }

    // calculate positions
    let pos = elemDrag.getBoundingClientRect();
    let center1X = Math.floor((pos.left + pos.right) / 2);
    let center1Y = Math.floor((pos.top + pos.bottom) / 2);

    // mouse over dragged element and mousedown
    fireMouseEvent("mouseover", elemDrag, center1X, center1Y);
    fireMouseEvent("mousedown", elemDrag, center1X, center1Y);

    // start dragging process over to drop target
    fireMouseEvent("dragstart", elemDrag, center1X, center1Y);
    fireMouseEvent("drag", elemDrag, center1X, center1Y);
    fireMouseEvent("mousemove", elemDrag, center1X, center1Y);
    if (!elemDrop) {
      if (mouseXY) {
        // console.log(mouseXY);
        let center2X = mouseXY.x;
        let center2Y = mouseXY.y;
        fireMouseEvent("drag", elemDrag, center2X, center2Y);
        fireMouseEvent("mousemove", elemDrag, center2X, center2Y);
      }
      return false;
    }
    pos = elemDrop.getBoundingClientRect();
    let center2X = Math.floor((pos.left + pos.right) / 2);
    let center2Y = Math.floor((pos.top + pos.bottom) / 2);
    fireMouseEvent("drag", elemDrag, center2X, center2Y);
    fireMouseEvent("mousemove", elemDrop, center2X, center2Y);

    // trigger dragging process on top of drop target
    fireMouseEvent("mouseenter", elemDrop, center2X, center2Y);
    fireMouseEvent("dragenter", elemDrop, center2X, center2Y);
    fireMouseEvent("mouseover", elemDrop, center2X, center2Y);
    fireMouseEvent("dragover", elemDrop, center2X, center2Y);

    // release dragged element on top of drop target
    fireMouseEvent("drop", elemDrop, center2X, center2Y);
    fireMouseEvent("dragend", elemDrag, center2X, center2Y);
    fireMouseEvent("mouseup", elemDrag, center2X, center2Y);
    return true;
  }
  bindOnce(dom, event, func, capture) {
    capture = !!capture;
    dom.removeEventListener(event, func, capture);
    dom.addEventListener(event, func, capture);
    this.events.push(new eventDetails(dom, event, func, capture));
  }
  unbindAllEvents() {
    for (const event of this.events) {
      event.dom.removeEventListener(event.event, event.func, event.capture);
    }
    this.events = [];
  }
}

/**
 * A record of an event
 */
class eventDetails {
  constructor(dom, event, func, capture) {
    this.dom = dom;
    this.event = event;
    this.func = func;
    this.capture = capture;
  }
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/UndoGroup.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/UndoGroup.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UndoGroup; });
/**
 * This class is dedicated to maintaining the Undo stack of Blockly
 * It allows us to initiate an undo group such that all subsequent operations are recorded as a single
 * undoable transaction.
 */
class UndoGroup {
  /**
   * Start an Undo group - begin recording
   * @param workspace the workspace
   */
  static startUndoGroup(workspace) {
    const undoStack = workspace.undoStack_;
    if (undoStack.length) {
      undoStack[undoStack.length - 1]._devtoolsLastUndo = true;
    }
  }

  /**
   * End an Undo group - stops recording
   * @param workspace the workspace
   */
  static endUndoGroup(workspace) {
    const undoStack = workspace.undoStack_;
    // Events (responsible for undoStack updates) are delayed with a setTimeout(f, 0)
    // https://github.com/LLK/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
    setTimeout(() => {
      const group = generateUID();
      for (let i = undoStack.length - 1; i >= 0 && !undoStack[i]._devtoolsLastUndo; i--) {
        undoStack[i].group = group;
      }
    }, 0);
  }
}

/**
 * https://github.com/LLK/scratch-blocks/blob/f159a1779e5391b502d374fb2fdd0cb5ca43d6a2/core/events.js#L182
 * @returns {string}
 * @private
 */
function generateUID() {
  const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%()*+,-./:;=?@[]^_`{|}~";
  let result = "";
  for (let i = 0; i < 20; i++) {
    result += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
  }
  return result;
}

/***/ }),

/***/ "./src/addons/addons/editor-devtools/_runtime_entry.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/editor-devtools/_runtime_entry.js ***!
  \*************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-devtools/userscript.js");
/* harmony import */ var _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url-loader!./icon--close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/editor-devtools/icon--close.svg");
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "icon--close.svg": _url_loader_icon_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-devtools/userscript.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/editor-devtools/userscript.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DevTools_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DevTools.js */ "./src/addons/addons/editor-devtools/DevTools.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg,
    safeMsg: m
  } = _ref;
  const devTools = new _DevTools_js__WEBPACK_IMPORTED_MODULE_0__["default"](addon, msg, m);
  devTools.init();
});

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js":
/*!*************************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/_runtime_entry.js ***!
  \*************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-searchable-dropdowns/userscript.js");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userscript.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-searchable-dropdowns/userscript.css");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userscript.css": _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-searchable-dropdowns/userscript.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/editor-searchable-dropdowns/userscript.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable */
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const SCRATCH_ITEMS_TO_HIDE = ["RENAME_VARIABLE_ID", "DELETE_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID",
  // From rename-broadcasts addon
  "RENAME_BROADCAST_MESSAGE_ID"];
  const canUseAsGlobalVariableName = (name, type) => {
    return !vm.runtime.getAllVarNamesOfType(type).includes(name);
  };
  const canUseAsLocalVariableName = (name, type) => {
    return !vm.editingTarget.lookupVariableByNameAndType(name, type);
  };
  const ADDON_ITEMS = {
    createGlobalVariable: {
      enabled: name => canUseAsGlobalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name)
    },
    createLocalVariable: {
      enabled: name => canUseAsLocalVariableName(name, ""),
      createVariable: (workspace, name) => workspace.createVariable(name, "", null, true)
    },
    createGlobalList: {
      enabled: name => canUseAsGlobalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list")
    },
    createLocalList: {
      enabled: name => canUseAsLocalVariableName(name, "list"),
      createVariable: (workspace, name) => workspace.createVariable(name, "list", null, true)
    },
    createBroadcast: {
      enabled: name => canUseAsGlobalVariableName(name, "broadcast_msg"),
      createVariable: (workspace, name) => workspace.createVariable(name, "broadcast_msg")
    }
  };
  let blocklyDropDownContent = null;
  let blocklyDropdownMenu = null;
  let searchBar = null;
  // Contains DOM and addon state
  let items = [];
  let searchedItems = [];
  // Tracks internal Scratch state
  let currentDropdownOptions = [];
  let resultOfLastGetOptions = [];
  const oldDropDownDivShow = Blockly.DropDownDiv.show;
  Blockly.DropDownDiv.show = function () {
    blocklyDropdownMenu = document.querySelector(".blocklyDropdownMenu");
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!blocklyDropdownMenu) {
      return oldDropDownDivShow.call(this, ...args);
    }
    blocklyDropdownMenu.focus = () => {}; // no-op focus() so it can't steal it from the search bar

    searchBar = document.createElement("input");
    addon.tab.displayNoneWhileDisabled(searchBar, {
      display: "flex"
    });
    searchBar.type = "text";
    searchBar.addEventListener("input", updateSearch);
    searchBar.addEventListener("keydown", handleKeyDownEvent);
    searchBar.classList.add("u-dropdown-searchbar");
    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    items = Array.from(blocklyDropdownMenu.children).filter(child => child.tagName !== "INPUT").map(element => ({
      element,
      text: element.textContent
    }));
    currentDropdownOptions = resultOfLastGetOptions;
    updateSearch();

    // Call the original show method after adding everything so that it can perform the correct size calculations
    const ret = oldDropDownDivShow.call(this, ...args);

    // Lock the size of the dropdown
    blocklyDropDownContent = Blockly.DropDownDiv.getContentDiv();
    blocklyDropDownContent.style.width = getComputedStyle(blocklyDropDownContent).width;
    blocklyDropDownContent.style.height = getComputedStyle(blocklyDropDownContent).height;

    // This is really strange, but if you don't reinsert the search bar into the DOM then focus() doesn't work
    blocklyDropdownMenu.insertBefore(searchBar, blocklyDropdownMenu.firstChild);
    searchBar.focus();
    return ret;
  };
  const oldDropDownDivClearContent = Blockly.DropDownDiv.clearContent;
  Blockly.DropDownDiv.clearContent = function () {
    oldDropDownDivClearContent.call(this);
    items = [];
    searchedItems = [];
    Blockly.DropDownDiv.content_.style.height = "";
  };
  const oldFieldDropdownGetOptions = Blockly.FieldDropdown.prototype.getOptions;
  Blockly.FieldDropdown.prototype.getOptions = function () {
    const options = oldFieldDropdownGetOptions.call(this);
    const block = this.sourceBlock_;
    const isStage = vm.editingTarget && vm.editingTarget.isStage;
    if (block) {
      if (block.category_ === "data") {
        options.push(getMenuItemMessage("createGlobalVariable"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalVariable"));
        }
      } else if (block.category_ === "data-lists") {
        options.push(getMenuItemMessage("createGlobalList"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalList"));
        }
      } else if (block.type === "event_broadcast_menu" || block.type === "event_whenbroadcastreceived") {
        options.push(getMenuItemMessage("createBroadcast"));
      }
    }
    // Options aren't normally stored anywhere, so we'll store them ourselves.
    resultOfLastGetOptions = options;
    return options;
  };
  const oldFieldTextDropdownGetOptions = Blockly.FieldTextDropdown.prototype.getOptions;
  Blockly.FieldTextDropdown.prototype.getOptions = function () {
    const options = oldFieldTextDropdownGetOptions.call(this);
    const block = this.sourceBlock_;
    const isStage = vm.editingTarget && vm.editingTarget.isStage;
    if (block) {
      if (block.category_ === "data") {
        options.push(getMenuItemMessage("createGlobalVariable"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalVariable"));
        }
      } else if (block.category_ === "data-lists") {
        options.push(getMenuItemMessage("createGlobalList"));
        if (!isStage) {
          options.push(getMenuItemMessage("createLocalList"));
        }
      } else if (block.type === "event_broadcast_menu" || block.type === "event_whenbroadcastreceived") {
        options.push(getMenuItemMessage("createBroadcast"));
      }
    }
    // Options aren't normally stored anywhere, so we'll store them ourselves.
    resultOfLastGetOptions = options;
    return options;
  };
  const oldFieldVariableOnItemSelected = Blockly.FieldVariable.prototype.onItemSelected;
  Blockly.FieldVariable.prototype.onItemSelected = function (menu, menuItem) {
    const sourceBlock = this.sourceBlock_;
    if (sourceBlock && sourceBlock.workspace && searchBar.value.length !== 0) {
      const workspace = sourceBlock.workspace;
      const optionId = menuItem.getValue();
      if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        const addonItem = ADDON_ITEMS[optionId];
        Blockly.Events.setGroup(true);
        const variable = addonItem.createVariable(workspace, searchBar.value.trim());
        if (this.sourceBlock_) this.setValue(variable.getId());
        Blockly.Events.setGroup(false);
        return;
      }
    }
    return oldFieldVariableOnItemSelected.call(this, menu, menuItem);
  };
  function selectItem(item, click) {
    // You can't just use click() or focus() because Blockly uses mousedown and mouseup handlers, not click handlers.
    item.dispatchEvent(new MouseEvent("mousedown", {
      relatedTarget: item,
      bubbles: true
    }));
    if (click) item.dispatchEvent(new MouseEvent("mouseup", {
      relatedTarget: item,
      bubbles: true
    }));

    // Scroll the item into view if it is offscreen.
    const itemTop = item.offsetTop;
    const itemEnd = itemTop + item.offsetHeight;
    const scrollTop = blocklyDropDownContent.scrollTop;
    const scrollHeight = blocklyDropDownContent.offsetHeight;
    const scrollEnd = scrollTop + scrollHeight;
    if (scrollTop > itemTop) {
      blocklyDropDownContent.scrollTop = itemTop;
    } else if (itemEnd > scrollEnd) {
      blocklyDropDownContent.scrollTop = itemEnd - scrollHeight;
    }
  }
  function performSearch() {
    const rawQuery = searchBar.value.trim();
    const query = rawQuery.trim().toLowerCase();
    const rank = (item, index) => {
      // Negative number will hide
      // Higher numbers will appear first
      const option = currentDropdownOptions[index];
      const optionId = option[1];
      if (SCRATCH_ITEMS_TO_HIDE.includes(optionId)) {
        return query ? -1 : 0;
      } else if (Object.prototype.hasOwnProperty.call(ADDON_ITEMS, optionId)) {
        if (!query) {
          return -1;
        }
        const addonInfo = ADDON_ITEMS[optionId];
        if (addonInfo.enabled(rawQuery)) {
          item.element.lastChild.lastChild.textContent = getMenuItemMessage(optionId)[0];
          return 0;
        }
        return -1;
      }
      const itemText = item.text.toLowerCase();
      if (query === itemText) {
        return 2;
      }
      if (itemText.startsWith(query)) {
        return 1;
      }
      if (itemText.includes(query)) {
        return 0;
      }
      return -1;
    };
    return items.map((item, index) => ({
      item,
      score: rank(item, index)
    })).sort((_ref2, _ref3) => {
      let {
        score: scoreA
      } = _ref2;
      let {
        score: scoreB
      } = _ref3;
      return Math.max(0, scoreB) - Math.max(0, scoreA);
    });
  }
  function updateSearch() {
    const previousSearchedItems = searchedItems;
    searchedItems = performSearch();
    let needToUpdateDOM = previousSearchedItems.length !== searchedItems.length;
    if (!needToUpdateDOM) {
      for (let i = 0; i < searchedItems.length; i++) {
        if (searchedItems[i].item !== previousSearchedItems[i].item) {
          needToUpdateDOM = true;
          break;
        }
      }
    }
    if (needToUpdateDOM && previousSearchedItems.length > 0) {
      for (const {
        item
      } of previousSearchedItems) {
        item.element.remove();
      }
      for (const {
        item
      } of searchedItems) {
        blocklyDropdownMenu.appendChild(item.element);
      }
    }
    for (const {
      item,
      score
    } of searchedItems) {
      item.element.hidden = score < 0;
    }
  }
  function handleKeyDownEvent(event) {
    if (event.key === "Enter") {
      // Reimplement enter to select item to account for hidden items and default to the top item.
      event.stopPropagation();
      event.preventDefault();
      const selectedItem = document.querySelector(".goog-menuitem-highlight");
      if (selectedItem && !selectedItem.hidden) {
        selectItem(selectedItem, true);
        return;
      }
      const selectedBlock = Blockly.selected;
      if (searchBar.value === "" && selectedBlock) {
        if (selectedBlock.type === "event_broadcast" || selectedBlock.type === "event_broadcastandwait" || selectedBlock.type === "event_whenbroadcastreceived") {
          // The top item of these dropdowns is always "New message"
          // When pressing enter on an empty search bar, we close the dropdown instead of making a new broadcast.
          Blockly.DropDownDiv.hide();
          return;
        }
      }
      for (const {
        item
      } of searchedItems) {
        if (!item.element.hidden) {
          selectItem(item.element, true);
          break;
        }
      }
      // If there is no top value, do nothing and leave the dropdown open
    } else if (event.key === "Escape") {
      Blockly.DropDownDiv.hide();
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      // Reimplement keyboard navigation to account for hidden items.
      event.preventDefault();
      event.stopPropagation();
      const items = searchedItems.filter(i => i.score >= 0).map(i => i.item);
      if (items.length === 0) {
        return;
      }
      let selectedIndex = -1;
      for (let i = 0; i < items.length; i++) {
        if (items[i].element.classList.contains("goog-menuitem-highlight")) {
          selectedIndex = i;
          break;
        }
      }
      const lastIndex = items.length - 1;
      let newIndex = 0;
      if (event.key === "ArrowDown") {
        if (selectedIndex === -1 || selectedIndex === lastIndex) {
          newIndex = 0;
        } else {
          newIndex = selectedIndex + 1;
        }
      } else {
        if (selectedIndex === -1 || selectedIndex === 0) {
          newIndex = lastIndex;
        } else {
          newIndex = selectedIndex - 1;
        }
      }
      selectItem(items[newIndex].element, false);
    }
  }
  function getMenuItemMessage(message) {
    var _searchBar;
    // Format used internally by Scratch:
    // [human readable name, internal name]
    return [msg(message, {
      name: ((_searchBar = searchBar) === null || _searchBar === void 0 ? void 0 : _searchBar.value.trim()) || ""
    }), message];
  }
});

/***/ }),

/***/ "./src/addons/addons/editor-tweaks/_runtime_entry.js":
/*!***********************************************************!*\
  !*** ./src/addons/addons/editor-tweaks/_runtime_entry.js ***!
  \***********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-tweaks/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/editor-tweaks/userscript.js":
/*!*******************************************************!*\
  !*** ./src/addons/addons/editor-tweaks/userscript.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Editor Tweaks
// By: SharkPool

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;

  // addon settings
  let oldCkbxEnabled = true,
    oldToolboxScrolls = true,
    oldBlocksGlow = true,
    oldExpandBtnSz = 1;
  let ckbxEnabled = true,
    toolboxScrolls = true,
    blocksGlow = true,
    expandBtnSz = 1;
  let workspaceRefreshCache = 0;

  // patch variables and functions
  const ogWS2Dom = Blockly.Xml.workspaceToDom;
  const ogMutatorBuilder = Blockly.scratchBlocksUtils.generateMutatorShadow;
  const ogSetShadowDom = ScratchBlocks.RenderedConnection.prototype.setShadowDom;
  const ogStartScrollAnim = Blockly.Flyout.prototype.startScrollAnimation;
  const ogGlowFuncs = {
    run: Blockly.BlockSvg.prototype.setGlowStack,
    error: Blockly.BlockSvg.prototype.setErrorStack,
    replace1: Blockly.BlockSvg.prototype.highlightForReplacement,
    replace2: Blockly.BlockSvg.prototype.highlightShapeForInput
  };
  const fixedWorkspace2Dom = function fixedWorkspace2Dom() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const dom = ogWS2Dom.call(this, ...args);
    if (!args[0].isFlyout) return dom;

    // we only want to edit the flyout
    const domArray = Array.from(dom.children);
    for (const item of domArray) {
      if (item.localName !== "block") continue;
      for (const input of Array.from(item.children)) {
        // clear checkboxes
        if (input.localName !== "value") continue;
        const shadow = input.firstChild;
        if (shadow.getAttribute("type") === "checkbox") shadow.remove();
      }
    }
    return dom;
  };
  const fixedSetShadowDom = function fixedSetShadowDom() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    // prevent checkboxes from respawning
    if (this.sourceBlock_.isInFlyout) {
      if (args[0] && args[0].getAttribute("type") === "checkbox") {
        this.shadowDom_ = null;
        queueMicrotask(() => {
          const shadowBlock = this.targetBlock();
          if (shadowBlock) shadowBlock.dispose();
        });
        return;
      }
    }
    return ogSetShadowDom.call(this, ...args);
  };

  // internals
  function updateAllBlocks(flyoutOnly) {
    const workspace = Blockly.getMainWorkspace();
    if (workspace) {
      if (!flyoutOnly && vm.editingTarget) vm.emitWorkspaceUpdate();
      const flyout = workspace.getFlyout();
      if (flyout) {
        const flyoutWorkspace = flyout.getWorkspace();
        Blockly.Xml.clearWorkspaceAndLoadFromXml(Blockly.Xml.workspaceToDom(flyoutWorkspace), flyoutWorkspace);
        workspace.getToolbox().refreshSelection();
        workspace.toolboxRefreshEnabled_ = true;
      }
    }
  }
  function requestAddonState() {
    ckbxEnabled = addon.settings.get("checkboxesEnabled");
    toolboxScrolls = addon.settings.get("toolboxScrolling");
    blocksGlow = addon.settings.get("blocksGlow");
    expandBtnSz = addon.settings.get("expandableButtonSize") / 100;
    Blockly.Procedures.ADDON_SP_CHECKBOXES_DISABLED = !ckbxEnabled;
  }
  function applyChanges() {
    requestAddonState();
    toggleCheckboxes();
    toggleToolBoxScroll();
    toggleBlockGlow();
    setExpandableSize();
    if (workspaceRefreshCache > 0) updateAllBlocks(2 > workspaceRefreshCache);
    workspaceRefreshCache = 0;
  }
  function toggleCheckboxes() {
    if (oldCkbxEnabled === ckbxEnabled) return;
    oldCkbxEnabled = ckbxEnabled;
    workspaceRefreshCache++;
    Blockly.Xml.workspaceToDom = ckbxEnabled ? ogWS2Dom : fixedWorkspace2Dom;
    Blockly.RenderedConnection.prototype.setShadowDom = ckbxEnabled ? ogSetShadowDom : fixedSetShadowDom;
    Blockly.scratchBlocksUtils.generateMutatorShadow = ckbxEnabled ? ogMutatorBuilder : function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      if (args[1] === "checkbox") return;
      ogCheckboxBlockInit.call(this, ...args);
    };
    Blockly.Blocks["control_expandableIf"].fillInBlock = Blockly.scratchBlocksUtils.generateMutatorShadow;
    Blockly.Blocks["operator_expandableBool"].fillInBlock = Blockly.scratchBlocksUtils.generateMutatorShadow;
  }
  function toggleToolBoxScroll() {
    if (oldToolboxScrolls === toolboxScrolls) return;
    oldToolboxScrolls = toolboxScrolls;
    Blockly.Flyout.prototype.startScrollAnimation = toolboxScrolls ? ogStartScrollAnim : function () {
      this.scrollTime = -1;
      this.scrollStart = this.scrollTarget;
      this.stepScrollAnimation(performance.now());
    };
  }
  function toggleBlockGlow() {
    if (oldBlocksGlow === blocksGlow) return;
    oldBlocksGlow = blocksGlow;
    if (blocksGlow) return;
    const workspace = Blockly.getMainWorkspace();
    if (!workspace) {
      console.warn("Editor Tweaks: Error -- Could not remove glow from workspace");
      oldBlocksGlow = undefined;
      return;
    }

    // these are shared across workspaces, remove to save RAM
    workspace.options.stackGlowBlur.parentNode.remove();
    workspace.options.stackGlowBlurError.parentNode.remove();
    workspace.options.stackReplaceGlow.remove();
    const applyToOuterStack = (topBlock, func) => {
      func(topBlock);
      let nextBlock = topBlock.getNextBlock();
      while (nextBlock !== null) {
        func(nextBlock);
        nextBlock = nextBlock.getNextBlock();
      }
    };

    // patch glow functions to not... glow. Instead give a lighter indicator
    const BlockSvgProto = Blockly.BlockSvg.prototype;
    BlockSvgProto.setGlowStack = blocksGlow ? ogGlowFuncs.run : function (isGlowingStack) {
      this.isGlowingStack_ = isGlowingStack;
      this.getSvgRoot().removeAttribute("filter"); //remove old glow

      if (isGlowingStack) applyToOuterStack(this, block => {
        block.svgPath_.classList.remove("blocklyPath");
        block.svgPath_.setAttribute("stroke", "#fff200");
        block.svgPath_.setAttribute("stroke-width", "5");
      });else applyToOuterStack(this, block => {
        block.svgPath_.classList.add("blocklyPath");
        block.svgPath_.setAttribute("stroke", block.colourTertiary_);
        block.svgPath_.removeAttribute("stroke-width");
      });
    };
    BlockSvgProto.setErrorStack = blocksGlow ? ogGlowFuncs.error : function (isGlowingStack) {
      this.isGlowingStack_ = isGlowingStack;
      this.getSvgRoot().removeAttribute("filter"); //remove old glow

      if (isGlowingStack) applyToOuterStack(this, block => {
        block.svgPath_.classList.remove("blocklyPath");
        block.svgPath_.setAttribute("stroke", "#ff0000");
        block.svgPath_.setAttribute("stroke-width", "5");
      });else applyToOuterStack(this, block => {
        block.svgPath_.classList.add("blocklyPath");
        block.svgPath_.setAttribute("stroke", block.colourTertiary_);
        block.svgPath_.removeAttribute("stroke-width");
      });
    };
    BlockSvgProto.highlightForReplacement = blocksGlow ? ogGlowFuncs.replace1 : function (adding) {
      this.getSvgRoot().removeAttribute("filter"); //remove old glow
      if (adding) {
        this.svgPath_.classList.remove("blocklyPath");
        this.svgPath_.setAttribute("stroke", "#fff");
        this.svgPath_.setAttribute("stroke-width", "6");
      } else {
        this.svgPath_.classList.add("blocklyPath");
        this.svgPath_.setAttribute("stroke", this.colourTertiary_);
        this.svgPath_.removeAttribute("stroke-width");
      }
    };
    BlockSvgProto.highlightShapeForInput = blocksGlow ? ogGlowFuncs.replace2 : function (connection, adding) {
      const input = this.getInputWithConnection(connection);
      if (!input) throw 'No input found for the connection';
      if (!input.outlinePath) return;
      input.outlinePath.removeAttribute("filter"); //remove old glow
      if (adding) {
        input.outlinePath.classList.remove("blocklyPath");
        input.outlinePath.setAttribute("stroke", "#fff");
        input.outlinePath.setAttribute("stroke-width", "5");
      } else {
        input.outlinePath.classList.add("blocklyPath");
        input.outlinePath.setAttribute("stroke", this.colourTertiary_);
        input.outlinePath.removeAttribute("stroke-width");
      }
    };
  }
  function setExpandableSize() {
    if (oldExpandBtnSz === expandBtnSz) return;
    oldExpandBtnSz = expandBtnSz;
    workspaceRefreshCache = 2;

    // override these, ripped from the Blocks Repo with minor changes
    const addImg = Blockly.FieldExpandableAdd.prototype.BTN_IMG;
    Blockly.FieldExpandableAdd.prototype.init = function () {
      if (this.fieldGroup_) return;
      Blockly.FieldExpandableAdd.superClass_.init.call(this);
      if (expandBtnSz === 0 && this.sourceBlock_) {
        const input = this.sourceBlock_.inputList.find(i => i.fieldRow.includes(this));
        if (input) {
          // we dont want to hide labels or other fields:
          if (input.fieldRow.length > 2) {
            for (const field of input.fieldRow) {
              if (field instanceof Blockly.FieldExpandableAdd || field instanceof Blockly.FieldExpandableRemove) field.setVisible(false);
            }
          } else {
            input.setVisible(false);
          }
        }
      }
      const ratio = Blockly.BlockSvg.FIELD_HEIGHT / 32 * expandBtnSz;
      this.size_.width = Blockly.BlockSvg.FIELD_HEIGHT * expandBtnSz;
      this.size_.height *= expandBtnSz;
      this.overrideSep = 1;
      this.boxGroup_ = Blockly.utils.createSvgElement('g', {}, null);
      this.box_ = Blockly.utils.createSvgElement('rect', {
        'x': 0,
        'y': 0,
        'rx': 4,
        'ry': 4,
        'width': this.size_.width,
        'height': this.size_.height,
        'fill': "#00000000",
        'stroke': "#00000035",
        'cursor': this.CURSOR
      }, this.boxGroup_);
      this.icon_ = Blockly.utils.createSvgElement('image', {
        'x': 5 * ratio,
        'y': 5 * ratio,
        'width': this.size_.width / 1.5,
        'height': this.size_.height / 1.5,
        'xlink:href': addImg,
        'href': addImg
      }, this.boxGroup_);
      this.fieldGroup_.insertBefore(this.boxGroup_, this.textElement_);
    };
    const removeImg = Blockly.FieldExpandableRemove.prototype.BTN_IMG;
    Blockly.FieldExpandableRemove.prototype.init = function () {
      if (this.fieldGroup_) return;
      Blockly.FieldExpandableRemove.superClass_.init.call(this);
      const ratio = Blockly.BlockSvg.FIELD_HEIGHT / 32 * expandBtnSz;
      this.size_.width = Blockly.BlockSvg.FIELD_HEIGHT * expandBtnSz;
      this.size_.height *= expandBtnSz;
      this.overrideSep = 1;
      this.boxGroup_ = Blockly.utils.createSvgElement('g', {}, null);
      this.box_ = Blockly.utils.createSvgElement('rect', {
        'x': 0,
        'y': 0,
        'rx': 4,
        'ry': 4,
        'width': this.size_.width,
        'height': this.size_.height,
        'fill': "#00000000",
        'stroke': "#00000035",
        'cursor': this.CURSOR
      }, this.boxGroup_);
      this.icon_ = Blockly.utils.createSvgElement('image', {
        'x': 5 * ratio,
        'y': 5 * ratio,
        'width': this.size_.width / 1.5,
        'height': this.size_.height / 1.5,
        'xlink:href': removeImg,
        'href': removeImg
      }, this.boxGroup_);
      this.fieldGroup_.insertBefore(this.boxGroup_, this.textElement_);
    };

    // fix block chin height
    Blockly.Blocks['control_expandableIf'].fixupButtons = function () {
      const expandableInput = this.getInput("");
      this.inputList.splice(this.inputList.indexOf(expandableInput), 1);
      this.inputList.push(expandableInput);
      expandableInput.setAlign(1);
      const hiddenBtn = expandableInput.fieldRow[0];
      hiddenBtn.size_.width = 0.5;
      hiddenBtn.size_.height = (Blockly.BlockSvg.INPUT_SHAPE_HEIGHT + 16) * expandBtnSz;
      hiddenBtn.setVisible(false);
    };
  }
  addon.self.addEventListener("reenabled", applyChanges);
  addon.settings.addEventListener("change", applyChanges);
  addon.self.addEventListener("disabled", () => {
    ckbxEnabled = true, expandBtnSz = 1;
    applyChanges();
  });
  applyChanges();
});

/***/ }),

/***/ "./src/addons/addons/find-bar/_runtime_entry.js":
/*!******************************************************!*\
  !*** ./src/addons/addons/find-bar/_runtime_entry.js ***!
  \******************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/find-bar/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/find-bar/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/find-bar/blockly/BlockItem.js":
/*!*********************************************************!*\
  !*** ./src/addons/addons/find-bar/blockly/BlockItem.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlockItem; });
class BlockItem {
  constructor(cls, procCode, labelID, y) {
    this.cls = cls;
    this.procCode = procCode;
    this.labelID = labelID;
    this.y = y;
    this.lower = procCode.toLowerCase();
    /**
     * An Array of block ids
     * @type {Array.<string>}
     */
    this.clones = null;
    this.eventName = null;
  }

  /**
   * True if the blockID matches a black represented by this BlockItem
   * @param id
   * @returns {boolean}
   */
  matchesID(id) {
    if (this.labelID === id) {
      return true;
    }
    if (this.clones) {
      for (const cloneID of this.clones) {
        if (cloneID === id) {
          return true;
        }
      }
    }
    return false;
  }
}

/***/ }),

/***/ "./src/addons/addons/find-bar/userscript.js":
/*!**************************************************!*\
  !*** ./src/addons/addons/find-bar/userscript.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blockly/BlockItem.js */ "./src/addons/addons/find-bar/blockly/BlockItem.js");
/* harmony import */ var _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockly/BlockInstance.js */ "./src/addons/addons/find-bar/blockly/BlockInstance.js");
/* harmony import */ var _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blockly/Utils.js */ "./src/addons/addons/find-bar/blockly/Utils.js");



/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  class FindBar {
    constructor() {
      this.utils = new _blockly_Utils_js__WEBPACK_IMPORTED_MODULE_2__["default"](addon);
      this.prevValue = "";
      this.findBarOuter = null;
      this.findWrapper = null;
      this.findInput = null;
      this.dropdownOut = null;
      this.dropdown = new Dropdown(this.utils);
      document.addEventListener("keydown", e => this.eventKeyDown(e), true);
    }
    get workspace() {
      return Blockly.getMainWorkspace();
    }
    createDom(root) {
      this.findBarOuter = document.createElement("div");
      this.findBarOuter.className = "sa-find-bar";
      addon.tab.displayNoneWhileDisabled(this.findBarOuter, {
        display: "flex"
      });
      root.appendChild(this.findBarOuter);
      this.findWrapper = this.findBarOuter.appendChild(document.createElement("span"));
      this.findWrapper.className = "sa-find-wrapper";
      this.dropdownOut = this.findWrapper.appendChild(document.createElement("label"));
      this.dropdownOut.className = "sa-find-dropdown-out";
      this.findInput = this.dropdownOut.appendChild(document.createElement("input"));
      this.findInput.className = addon.tab.scratchClass("input_input-form", {
        others: "sa-find-input"
      });
      // for <label>
      this.findInput.id = "sa-find-input";
      this.findInput.type = "search";
      this.findInput.placeholder = msg("find-placeholder");
      this.findInput.autocomplete = "off";
      this.dropdownOut.appendChild(this.dropdown.createDom());
      this.bindEvents();
      this.tabChanged();
    }
    bindEvents() {
      this.findInput.addEventListener("focus", () => this.inputChange());
      this.findInput.addEventListener("keydown", e => this.inputKeyDown(e));
      this.findInput.addEventListener("keyup", () => this.inputChange());
      this.findInput.addEventListener("focusout", () => this.hideDropDown());
    }
    tabChanged() {
      if (!this.findBarOuter) {
        return;
      }
      const tab = addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
      const visible = tab === 0 || tab === 1 || tab === 2;
      this.findBarOuter.hidden = !visible;
    }
    inputChange() {
      this.showDropDown();

      // Filter the list...
      let val = (this.findInput.value || "").toLowerCase();
      if (val === this.prevValue) {
        // No change so don't re-filter
        return;
      }
      this.prevValue = val;
      this.dropdown.blocks = null;

      // Hide items in list that do not contain filter text
      let listLI = this.dropdown.items;
      for (const li of listLI) {
        let procCode = li.data.procCode;
        let i = li.data.lower.indexOf(val);
        if (i >= 0) {
          li.style.display = "block";
          while (li.firstChild) {
            li.removeChild(li.firstChild);
          }
          if (i > 0) {
            li.appendChild(document.createTextNode(procCode.substring(0, i)));
          }
          let bText = document.createElement("b");
          bText.appendChild(document.createTextNode(procCode.substr(i, val.length)));
          li.appendChild(bText);
          if (i + val.length < procCode.length) {
            li.appendChild(document.createTextNode(procCode.substr(i + val.length)));
          }
        } else {
          li.style.display = "none";
        }
      }
    }
    inputKeyDown(e) {
      this.dropdown.inputKeyDown(e);

      // Enter
      if (e.keyCode === 13) {
        this.findInput.blur();
        return;
      }

      // Escape
      if (e.keyCode === 27) {
        if (this.findInput.value.length > 0) {
          this.findInput.value = ""; // Clear search first, then close on second press
          this.inputChange();
        } else {
          this.findInput.blur();
        }
        e.preventDefault();
        return;
      }
    }
    eventKeyDown(e) {
      if (addon.self.disabled || !this.findBarOuter) return;
      let ctrlKey = e.ctrlKey || e.metaKey;
      if (e.key === "f" && ctrlKey && !e.shiftKey) {
        // Ctrl + F (Override default Ctrl+F find)
        this.findInput.focus();
        this.findInput.select();
        e.cancelBubble = true;
        e.preventDefault();
        return true;
      }
      if (e.keyCode === 37 && ctrlKey) {
        // Ctrl + Left Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }
        if (this.selectedTab === 0) {
          this.utils.navigationHistory.goBack();
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }
      if (e.keyCode === 39 && ctrlKey) {
        // Ctrl + Right Arrow Key
        if (document.activeElement.tagName === "INPUT") {
          return;
        }
        if (this.selectedTab === 0) {
          this.utils.navigationHistory.goForward();
          e.cancelBubble = true;
          e.preventDefault();
          return true;
        }
      }
    }
    showDropDown(focusID, instanceBlock) {
      if (!focusID && this.dropdownOut.classList.contains("visible")) {
        return;
      }

      // special '' vs null... - null forces a reevaluation
      this.prevValue = focusID ? "" : null; // Clear the previous value of the input search

      this.dropdownOut.classList.add("visible");
      let scratchBlocks = this.selectedTab === 0 ? this.getScratchBlocks() : this.selectedTab === 1 ? this.getScratchCostumes() : this.selectedTab === 2 ? this.getScratchSounds() : [];
      this.dropdown.empty();
      for (const proc of scratchBlocks) {
        let item = this.dropdown.addItem(proc);
        if (focusID) {
          if (proc.matchesID(focusID)) {
            this.dropdown.onItemClick(item, instanceBlock);
          } else {
            item.style.display = "none";
          }
        }
      }
      this.utils.offsetX = this.dropdownOut.getBoundingClientRect().width + 32;
      this.utils.offsetY = 32;
    }
    hideDropDown() {
      this.dropdownOut.classList.remove("visible");
    }
    get selectedTab() {
      return addon.tab.redux.state.scratchGui.editorTab.activeTabIndex;
    }
    getScratchBlocks() {
      let myBlocks = [];
      let myBlocksByProcCode = {};
      let topBlocks = this.workspace.getTopBlocks();
      let labelBlocks = Object.values(this.workspace.blockDB_).filter(b => b.type.startsWith("jwProto_") || b.type.startsWith("lmscomments_"));

      /**
       * @param cls
       * @param txt
       * @param root
       * @returns BlockItem
       */
      function addBlock(cls, txt, root, optData) {
        let id = root.id ? root.id : root.getId ? root.getId() : null;
        let clone = myBlocksByProcCode[txt];
        if (clone) {
          if (!clone.clones) {
            clone.clones = [];
          }
          clone.clones.push(id);
          return clone;
        }
        let items = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"](cls, txt, id, 0);
        if (optData) items.customData = optData;
        items.y = root.getRelativeToSurfaceXY ? root.getRelativeToSurfaceXY().y : null;
        myBlocks.push(items);
        myBlocksByProcCode[txt] = items;
        return items;
      }
      function getDescFromField(root, optRecurse) {
        let desc = "";
        if (optRecurse) desc = root.toString();else {
          let fields = root.inputList[0];
          for (const fieldRow of fields.fieldRow) {
            desc += fieldRow.getText() + " ";
          }
        }
        return desc.trim();
      }
      for (const root of topBlocks) {
        if (root.type === "procedures_definition" || root.type === "procedures_definition_return") {
          const label = root.getChildren()[0];
          const procCode = label.getProcCode();
          if (!procCode) {
            continue;
          }
          const indexOfLabel = root.inputList.findIndex(i => i.fieldRow.length > 0);
          if (indexOfLabel === -1) {
            continue;
          }
          const translatedDefine = root.inputList[indexOfLabel].fieldRow[0].getText();
          const message = indexOfLabel === 0 ? "".concat(translatedDefine, " ").concat(procCode) : "".concat(procCode, " ").concat(translatedDefine);
          addBlock("define", message, root);
          continue;
        }
        if (root.type === "event_whenflagclicked") {
          addBlock("flag", getDescFromField(root), root); // "When Flag Clicked"
          continue;
        }
        if (root.type === "event_whenbroadcastreceived") {
          const fieldRow = root.inputList[0].fieldRow;
          let eventName = fieldRow.find(input => input.name === "BROADCAST_OPTION").getText();
          addBlock("receive", "event " + eventName, root).eventName = eventName;
          continue;
        }
        if (root.type.substr(0, 10) === "event_when") {
          addBlock("event", getDescFromField(root), root); // "When Flag Clicked"
          continue;
        }
        if (root.type === "control_start_as_clone") {
          addBlock("event", getDescFromField(root), root); // "when I start as a clone"
          continue;
        }

        // fall through
        if (root.type.startsWith("jwProto_") || root.type.startsWith("lmscomments_")) {
          continue;
        }
        if (root.startHat_) {
          // custom, unrecognized hat
          addBlock("customHat", getDescFromField(root, true), root, {
            color: root.colour_
          });
          continue;
        }

        // orphan block stack/reporter
        addBlock(root.outputConnection ? "customOutput" : "customStack", getDescFromField(root, true), root, {
          color: root.colour_
        });
      }
      let map = this.workspace.getVariableMap();
      let vars = map.getVariablesOfType("");
      for (const row of vars) {
        addBlock(row.isLocal ? "var" : "VAR", (row.isLocal ? "var " : "VAR ") + row.name, row);
      }
      let lists = map.getVariablesOfType("list");
      for (const row of lists) {
        addBlock(row.isLocal ? "list" : "LIST", (row.isLocal ? "list " : "LIST ") + row.name, row);
      }
      const events = this.getCallsToEvents();
      for (const event of events) {
        addBlock("receive", "event " + event.eventName, event.block).eventName = event.eventName;
      }
      for (const root of labelBlocks) {
        addBlock("label", getDescFromField(root, true), root, {
          color: "#707070"
        });
      }
      const clsOrder = {
        flag: 0,
        receive: 1,
        event: 2,
        customHat: 3,
        define: 4,
        var: 5,
        VAR: 6,
        list: 7,
        LIST: 8,
        label: 9,
        customStack: 10,
        customOutput: 11
      };
      myBlocks.sort((a, b) => {
        let t = clsOrder[a.cls] - clsOrder[b.cls];
        if (t !== 0) {
          return t;
        }
        if (a.lower < b.lower) {
          return -1;
        }
        if (a.lower > b.lower) {
          return 1;
        }
        return a.y - b.y;
      });
      return myBlocks;
    }
    getScratchCostumes() {
      let costumes = this.utils.getEditingTarget().getCostumes();
      let items = [];
      let i = 0;
      for (const costume of costumes) {
        let item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("costume", costume.name, costume.assetId, i);
        items.push(item);
        i++;
      }
      return items;
    }
    getScratchSounds() {
      let sounds = this.utils.getEditingTarget().getSounds();
      let items = [];
      let i = 0;
      for (const sound of sounds) {
        let item = new _blockly_BlockItem_js__WEBPACK_IMPORTED_MODULE_0__["default"]("sound", sound.name, sound.assetId, i);
        items.push(item);
        i++;
      }
      return items;
    }
    getCallsToEvents() {
      const uses = [];
      const alreadyFound = new Set();
      for (const block of this.workspace.getAllBlocks()) {
        if (block.type !== "event_broadcast" && block.type !== "event_broadcastandwait") {
          continue;
        }
        const broadcastInput = block.getChildren()[0];
        if (!broadcastInput) {
          continue;
        }
        let eventName = "";
        if (broadcastInput.type === "event_broadcast_menu") {
          eventName = broadcastInput.inputList[0].fieldRow[0].getText();
        } else {
          eventName = msg("complex-broadcast");
        }
        if (!alreadyFound.has(eventName)) {
          alreadyFound.add(eventName);
          uses.push({
            eventName: eventName,
            block: block
          });
        }
      }
      return uses;
    }
  }
  class Dropdown {
    constructor(utils) {
      this.utils = utils;
      this.el = null;
      this.items = [];
      this.selected = null;
      this.carousel = new Carousel(this.utils);
    }
    get workspace() {
      return Blockly.getMainWorkspace();
    }
    createDom() {
      this.el = document.createElement("ul");
      this.el.className = "sa-find-dropdown";
      return this.el;
    }
    inputKeyDown(e) {
      // Up Arrow
      if (e.keyCode === 38) {
        this.navigateFilter(-1);
        e.preventDefault();
        return;
      }

      // Down Arrow
      if (e.keyCode === 40) {
        this.navigateFilter(1);
        e.preventDefault();
        return;
      }

      // Enter
      if (e.keyCode === 13) {
        // Any selected on enter? if not select now
        if (this.selected) {
          this.navigateFilter(1);
        }
        e.preventDefault();
        return;
      }
      this.carousel.inputKeyDown(e);
    }
    navigateFilter(dir) {
      let nxt;
      if (this.selected && this.selected.style.display !== "none") {
        nxt = dir === -1 ? this.selected.previousSibling : this.selected.nextSibling;
      } else {
        nxt = this.items[0];
        dir = 1;
      }
      while (nxt && nxt.style.display === "none") {
        nxt = dir === -1 ? nxt.previousSibling : nxt.nextSibling;
      }
      if (nxt) {
        nxt.scrollIntoView({
          block: "nearest"
        });
        this.onItemClick(nxt);
      }
    }
    addItem(proc) {
      const item = document.createElement("li");
      item.innerText = proc.procCode;
      item.data = proc;
      const colorIds = {
        receive: "events",
        event: "events",
        define: "more",
        var: "data",
        VAR: "data",
        list: "data-lists",
        LIST: "data-lists",
        costume: "looks",
        sound: "sounds"
      };
      if (proc.cls === "flag") {
        item.className = "sa-find-flag";
      } else if (proc.customData) {
        var _proc$customData$colo;
        const color = (_proc$customData$colo = proc.customData.color) !== null && _proc$customData$colo !== void 0 ? _proc$customData$colo : "#ff0000";
        item.style.color = color;
        item.onmouseenter = () => {
          item.style.color = "#fff";
          item.style.background = color;
        };
        item.onmouseleave = () => {
          item.style.color = color;
          item.style.background = "transparent";
        };
      } else {
        const colorId = colorIds[proc.cls];
        item.className = "sa-block-color sa-block-color-".concat(colorId);
      }
      item.addEventListener("mousedown", e => {
        this.onItemClick(item);
        e.preventDefault();
        e.cancelBubble = true;
        return false;
      });
      this.items.push(item);
      this.el.appendChild(item);
      return item;
    }
    onItemClick(item, instanceBlock) {
      if (this.selected && this.selected !== item) {
        this.selected.classList.remove("sel");
        this.selected = null;
      }
      if (this.selected !== item) {
        item.classList.add("sel");
        this.selected = item;
      }
      let cls = item.data.cls;
      if (cls === "costume" || cls === "sound") {
        // Viewing costumes/sounds - jump to selected costume/sound
        const assetPanel = document.querySelector("[class^=asset-panel_wrapper]");
        if (assetPanel) {
          const reactInstance = assetPanel[addon.tab.traps.getInternalKey(assetPanel)];
          const reactProps = reactInstance.child.stateNode.props;
          reactProps.onItemClick(item.data.y);
          const selectorList = assetPanel.firstChild.firstChild;
          selectorList.children[item.data.y].scrollIntoView({
            behavior: "auto",
            block: "center",
            inline: "start"
          });
          // The wrapper seems to scroll when we use the function above.
          let wrapper = assetPanel.closest("div[class*=gui_flex-wrapper]");
          wrapper.scrollTop = 0;
        }
      } else if (cls === "var" || cls === "VAR" || cls === "list" || cls === "LIST") {
        // Search now for all instances
        let blocks = this.getVariableUsesById(item.data.labelID);
        this.carousel.build(item, blocks, instanceBlock);
      } else if (cls === "define") {
        let blocks = this.getCallsToProcedureById(item.data.labelID);
        this.carousel.build(item, blocks, instanceBlock);
      } else if (cls === "receive") {
        /*
          let blocks = [this.workspace.getBlockById(li.data.labelID)];
          if (li.data.clones) {
              for (const cloneID of li.data.clones) {
                  blocks.push(this.workspace.getBlockById(cloneID))
              }
          }
          blocks = blocks.concat(getCallsToEventsByName(li.data.eventName));
        */
        // Now, fetch the events from the scratch runtime instead of blockly
        let blocks = this.getCallsToEventsByName(item.data.eventName);
        if (!instanceBlock) {
          // Can we start by selecting the first block on 'this' sprite
          const currentTargetID = this.utils.getEditingTarget().id;
          for (const block of blocks) {
            if (block.targetId === currentTargetID) {
              instanceBlock = block;
              break;
            }
          }
        }
        this.carousel.build(item, blocks, instanceBlock);
      } else if (item.data.clones) {
        let blocks = [this.workspace.getBlockById(item.data.labelID)];
        for (const cloneID of item.data.clones) {
          blocks.push(this.workspace.getBlockById(cloneID));
        }
        this.carousel.build(item, blocks, instanceBlock);
      } else {
        this.utils.scrollBlockIntoView(item.data.labelID);
        this.carousel.remove();
      }
    }
    getVariableUsesById(id) {
      let uses = [];
      let topBlocks = this.workspace.getTopBlocks();
      for (const topBlock of topBlocks) {
        /** @type {!Array<!Blockly.Block>} */
        let kids = topBlock.getDescendants();
        for (const block of kids) {
          /** @type {!Array<!Blockly.VariableModel>} */
          let blockVariables = block.getVarModels();
          if (blockVariables) {
            for (const blockVar of blockVariables) {
              if (blockVar.getId() === id) {
                uses.push(block);
              }
            }
          }
        }
      }
      return uses;
    }
    getCallsToProcedureById(id) {
      let procBlock = this.workspace.getBlockById(id);
      let label = procBlock.getChildren()[0];
      let procCode = label.getProcCode();
      let uses = [procBlock]; // Definition First, then calls to it
      let topBlocks = this.workspace.getTopBlocks();
      for (const topBlock of topBlocks) {
        /** @type {!Array<!Blockly.Block>} */
        let kids = topBlock.getDescendants();
        for (const block of kids) {
          if (block.type === "procedures_call") {
            if (block.getProcCode() === procCode) {
              uses.push(block);
            }
          }
        }
      }
      return uses;
    }
    getCallsToEventsByName(name) {
      let uses = []; // Definition First, then calls to it

      const runtime = addon.tab.traps.vm.runtime;
      const targets = runtime.targets; // The sprites / stage

      for (const target of targets) {
        if (!target.isOriginal) {
          continue; // Skip clones
        }
        const blocks = target.blocks;
        if (!blocks._blocks) {
          continue;
        }
        for (const id of Object.keys(blocks._blocks)) {
          const block = blocks._blocks[id];
          if (block.opcode === "event_whenbroadcastreceived" && block.fields.BROADCAST_OPTION.value === name) {
            uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
          } else if (block.opcode === "event_broadcast" || block.opcode === "event_broadcastandwait") {
            const broadcastInputBlockId = block.inputs.BROADCAST_INPUT.block;
            const broadcastInputBlock = blocks._blocks[broadcastInputBlockId];
            if (broadcastInputBlock) {
              let eventName;
              if (broadcastInputBlock.opcode === "event_broadcast_menu") {
                eventName = broadcastInputBlock.fields.BROADCAST_OPTION.value;
              } else {
                eventName = msg("complex-broadcast");
              }
              if (eventName === name) {
                uses.push(new _blockly_BlockInstance_js__WEBPACK_IMPORTED_MODULE_1__["default"](target, block));
              }
            }
          }
        }
      }
      return uses;
    }
    empty() {
      for (const item of this.items) {
        if (this.el.contains(item)) {
          this.el.removeChild(item);
        }
      }
      this.items = [];
      this.selected = null;
    }
  }
  class Carousel {
    constructor(utils) {
      this.utils = utils;
      this.el = null;
      this.count = null;
      this.blocks = [];
      this.idx = 0;
    }
    build(item, blocks, instanceBlock) {
      if (this.el && this.el.parentNode === item) {
        // Same control... click again to go to next
        this.navRight();
      } else {
        this.remove();
        this.blocks = blocks;
        item.appendChild(this.createDom());
        this.idx = 0;
        if (instanceBlock) {
          for (const idx of Object.keys(this.blocks)) {
            const block = this.blocks[idx];
            if (block.id === instanceBlock.id) {
              this.idx = Number(idx);
              break;
            }
          }
        }
        if (this.idx < this.blocks.length) {
          this.utils.scrollBlockIntoView(this.blocks[this.idx]);
        }
      }
    }
    createDom() {
      this.el = document.createElement("span");
      this.el.className = "sa-find-carousel";
      const leftControl = this.el.appendChild(document.createElement("span"));
      leftControl.className = "sa-find-carousel-control";
      leftControl.textContent = "◀";
      leftControl.addEventListener("mousedown", e => this.navLeft(e));
      this.count = this.el.appendChild(document.createElement("span"));
      this.count.innerText = this.blocks.length > 0 ? this.idx + 1 + " / " + this.blocks.length : "0";
      const rightControl = this.el.appendChild(document.createElement("span"));
      rightControl.className = "sa-find-carousel-control";
      rightControl.textContent = "▶";
      rightControl.addEventListener("mousedown", e => this.navRight(e));
      return this.el;
    }
    inputKeyDown(e) {
      // Left Arrow
      if (e.keyCode === 37) {
        if (this.el && this.blocks) {
          this.navLeft(e);
        }
      }

      // Right Arrow
      if (e.keyCode === 39) {
        if (this.el && this.blocks) {
          this.navRight(e);
        }
      }
    }
    navLeft(e) {
      return this.navSideways(e, -1);
    }
    navRight(e) {
      return this.navSideways(e, 1);
    }
    navSideways(e, dir) {
      if (this.blocks.length > 0) {
        this.idx = (this.idx + dir + this.blocks.length) % this.blocks.length; // + length to fix negative modulo js issue.
        this.count.innerText = this.idx + 1 + " / " + this.blocks.length;
        this.utils.scrollBlockIntoView(this.blocks[this.idx]);
      }
      if (e) {
        e.cancelBubble = true;
        e.preventDefault();
      }
    }
    remove() {
      if (this.el) {
        this.el.remove();
        this.blocks = [];
        this.idx = 0;
      }
    }
  }
  const findBar = new FindBar();
  const _doBlockClick_ = Blockly.Gesture.prototype.doBlockClick_;
  Blockly.Gesture.prototype.doBlockClick_ = function () {
    if (!addon.self.disabled && (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey)) {
      // Wheel button...
      // Intercept clicks to allow jump to...?
      let block = this.startBlock_;
      for (; block; block = block.getSurroundParent()) {
        if (block.type === "procedures_definition" || !this.jumpToDef && block.type === "procedures_call") {
          let id = block.id ? block.id : block.getId ? block.getId() : null;
          findBar.findInput.focus();
          findBar.showDropDown(id);
          return;
        }
        if (block.type === "data_variable" || block.type === "data_changevariableby" || block.type === "data_setvariableto") {
          let id = block.getVars()[0];
          findBar.findInput.focus();
          findBar.showDropDown(id, block);
          findBar.selVarID = id;
          return;
        }
        if (block.type === "event_whenbroadcastreceived" || block.type === "event_broadcastandwait" || block.type === "event_broadcast") {
          // todo: actually index the broadcasts...!
          let id = block.id;
          findBar.findInput.focus();
          findBar.showDropDown(id, block);
          findBar.selVarID = id;
          return;
        }
      }
    }
    _doBlockClick_.call(this);
  };
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    if (e.detail.action.type === "scratch-gui/navigation/ACTIVATE_TAB") {
      findBar.tabChanged();
    }
  });
  while (true) {
    const root = await addon.tab.waitForElement("ul[class*=gui_tab-list_]", {
      markAsSeen: true,
      reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    findBar.createDom(root);
  }
});

/***/ }),

/***/ "./src/addons/addons/folders/_runtime_entry.js":
/*!*****************************************************!*\
  !*** ./src/addons/addons/folders/_runtime_entry.js ***!
  \*****************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/folders/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/folders/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./folder.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/folders/folder.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "folder.svg": _url_loader_folder_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/folders/userscript.js":
/*!*************************************************!*\
  !*** ./src/addons/addons/folders/userscript.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  // The basic premise of how this addon works is relative simple.
  // scratch-gui renders the sprite selectors and asset selectors in a hierarchy like this:
  // <SelectorHOC>
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   <SpriteSelectorItem />
  //   ...
  // </SelectorHOC>
  // It's obviously more complicated than that, but there are two important parts:
  // SelectorHOC - We override this to change which items are displayed
  // SpriteSelectorItem - We override this to change how items are displayed.
  //    Folders are just items rendered differently
  // These two components communicate through the `name` property of the items.
  // We touch some things on the VM to make dragging items work properly.

  const REACT_INTERNAL_PREFIX = "__reactInternalInstance$";
  const TYPE_SPRITES = 1;
  const TYPE_ASSETS = 2;

  // We run too early, will be set later
  let vm;
  let reactInternalKey;
  let currentSpriteFolder;
  let currentAssetFolder;
  let currentSpriteItems;
  let currentAssetItems;
  const DIVIDER = "//";

  /**
   * getFolderFromName("B") === null
   * getFolderFromName("A//b") === "A"
   */
  const getFolderFromName = name => {
    const idx = name.indexOf(DIVIDER);
    if (idx === -1 || idx === 0) {
      return null;
    }
    return name.substr(0, idx);
  };

  /**
   * getNameWithoutFolder("B") === "B"
   * getNameWithoutFolder("A//b") === "b"
   */
  const getNameWithoutFolder = name => {
    const idx = name.indexOf(DIVIDER);
    if (idx === -1 || idx === 0) {
      return name;
    }
    return name.substr(idx + DIVIDER.length);
  };

  /**
   * setFolderOfName("B", "y") === "y//B"
   * setFolderOfName("c//B", "y") === "y//B"
   * setFolderOfName("B", null) === "B"
   * setFolderOfName("c//B", null) === "B"
   */
  const setFolderOfName = (name, folder) => {
    const basename = getNameWithoutFolder(name);
    if (folder) {
      return "".concat(folder).concat(DIVIDER).concat(basename);
    }
    return basename;
  };
  const isValidFolderName = name => {
    return !name.includes(DIVIDER) && !name.endsWith("/");
  };
  const RESERVED_NAMES = ["_mouse_", "_stage_", "_edge_", "_myself_", "_random_"];
  const ensureNotReserved = name => {
    if (name === "") return "2";
    if (RESERVED_NAMES.includes(name)) return "".concat(name, "2");
    return name;
  };
  const getSortableHOCFromElement = el => {
    const nearestSpriteSelector = el.closest("[class*='sprite-selector_sprite-selector']");
    if (nearestSpriteSelector) {
      return nearestSpriteSelector[reactInternalKey].child.sibling.child.stateNode;
    }
    const nearestAssetPanelWrapper = el.closest('[class*="asset-panel_wrapper"]');
    if (nearestAssetPanelWrapper) {
      return nearestAssetPanelWrapper[reactInternalKey].child.child.stateNode;
    }
    throw new Error("cannot find SortableHOC");
  };
  const getBackpackFromElement = el => {
    const gui = el.closest('[class*="gui_editor-wrapper"]');
    if (!gui) throw new Error("cannot find Backpack");
    return gui[reactInternalKey].child.sibling.child.child.stateNode;
  };
  const clamp = (n, min, max) => {
    return Math.min(Math.max(n, min), max);
  };

  /**
   * @typedef {Object} ItemData
   * @property {string} realName
   * @property {number} realIndex
   * @property {string} inFolder
   * @property {string} folder
   * @property {boolean} folderOpen
   */

  /**
   * @returns {ItemData|null}
   */
  const getItemData = item => {
    if (item && item.name && typeof item.name === "object") {
      return item.name;
    }
    return null;
  };
  const openFolderAsset = {
    assetId: "&__sa_folders_folder",
    encodeDataURI() {
      // Doesn't actually need to be a data: URI
      return addon.self.getResource("/folder.svg") /* rewritten by pull.js */;
    }
  };

  // https://github.com/LLK/scratch-gui/blob/develop/src/components/asset-panel/icon--sound.svg
  const imageIconSource = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<svg width=\"100px\" height=\"100px\" viewBox=\"0 0 20 20\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n    <g id=\"Sound\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n        <path d=\"M12.4785058,12.6666667 C12.3144947,12.6666667 12.1458852,12.6272044 11.9926038,12.5440517 C11.537358,12.2960031 11.3856094,11.7562156 11.6553847,11.3376335 C12.1688774,10.5371131 12.1688774,9.54491867 11.6553847,8.74580756 C11.3856094,8.32581618 11.537358,7.78602861 11.9926038,7.53798001 C12.452448,7.29275014 13.0379829,7.43086811 13.3046926,7.84804076 C14.1737981,9.20103311 14.1737981,10.8809986 13.3046926,12.233991 C13.1268862,12.5130457 12.806528,12.6666667 12.4785058,12.6666667 Z M15.3806784,13.8333333 C15.2408902,13.8333333 15.0958763,13.796281 14.9665396,13.7182064 C14.5785295,13.485306 14.4491928,12.9784829 14.6791247,12.5854634 C15.5949331,11.0160321 15.5949331,9.065491 14.6791247,7.49738299 C14.4491928,7.10436352 14.5785295,6.59621712 14.9665396,6.36331669 C15.3558562,6.13438616 15.8549129,6.26274605 16.0848448,6.65444223 C17.3050517,8.74260632 17.3050517,11.3389168 16.0848448,13.4270809 C15.9319924,13.6890939 15.6602547,13.8333333 15.3806784,13.8333333 Z M10.3043478,5.62501557 L10.3043478,13.873675 C10.3043478,14.850934 9.10969849,15.3625101 8.36478311,14.7038052 L6.7566013,13.2797607 C6.18712394,12.7762834 5.44499329,12.4968737 4.67362297,12.4968737 L4.3923652,12.4968737 C3.62377961,12.4968737 3,11.8935108 3,11.1470686 L3,8.36646989 C3,7.62137743 3.62377961,7.01666471 4.3923652,7.01666471 L4.65830695,7.01666471 C5.42967727,7.01666471 6.17180792,6.73725504 6.74128529,6.23377771 L8.36478311,4.79623519 C9.10969849,4.13753026 10.3043478,4.64910643 10.3043478,5.62501557 Z\" id=\"Combined-Shape\" fill=\"#575E75\"></path>\n    </g>\n</svg>";
  const soundIconHref = "data:image/svg+xml;base64,".concat(btoa(imageIconSource));
  let folderColorStylesheet = null;
  const folderColors = Object.create(null);
  const getFolderColorClass = folderName => {
    const mulberry32 = a => {
      // https://stackoverflow.com/a/47593316
      return function () {
        var t = a += 0x6d2b79f5;
        t = Math.imul(t ^ t >>> 15, t | 1);
        t ^= t + Math.imul(t ^ t >>> 7, t | 61);
        return ((t ^ t >>> 14) >>> 0) / 4294967296;
      };
    };
    const hashCode = str => {
      // Based on Java's String.hashCode
      // https://hg.openjdk.java.net/jdk8/jdk8/jdk/file/687fd7c7986d/src/share/classes/java/lang/String.java#l1452
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
        hash = 31 * hash + str.charCodeAt(i);
        hash = hash | 0;
      }
      return hash;
    };
    const random = str => {
      const seed = hashCode(str);
      const rng = mulberry32(seed);
      // Run RNG a few times to get more random numbers, otherwise similar seeds tend to give somewhat similar results
      rng();
      rng();
      rng();
      rng();
      return rng();
    };
    if (!folderColors[folderName]) {
      if (!folderColorStylesheet) {
        folderColorStylesheet = document.createElement("style");
        document.head.appendChild(folderColorStylesheet);
      }
      const hue = random(folderName) * 360;
      const color = "hsla(".concat(hue, "deg, 100%, 85%, 0.5)");
      const id = Object.keys(folderColors).length;
      const className = "sa-folders-color-".concat(id);
      folderColors[folderName] = className;
      folderColorStylesheet.textContent += ".".concat(className, "{background-color:").concat(color, " !important;}");
      folderColorStylesheet.textContent += ".".concat(className, "[class*=\"sprite-selector_raised\"]:not([class*=\"sa-folders-folder\"]){background-color:hsla(").concat(hue, "deg, 100%, 77%, 1) !important;}");
    }
    return folderColors[folderName];
  };
  const fixOrderOfItemsInFolders = items => {
    const folders = Object.create(null);
    const result = [];
    for (const item of items) {
      const name = item.getName ? item.getName() : item.name;
      const folder = getFolderFromName(name);
      if (typeof folder === "string") {
        if (!folders[folder]) {
          folders[folder] = [];
          result.push(folders[folder]);
        }
        folders[folder].push(item);
      } else {
        result.push(item);
      }
    }
    const flatResult = result.flat();
    for (let i = 0; i < items.length; i++) {
      if (result[i] !== items[i]) {
        return {
          items: flatResult,
          changed: true
        };
      }
    }
    return {
      items: flatResult,
      changed: false
    };
  };
  const fixTargetOrder = () => {
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(vm.runtime.targets);
    if (changed) {
      vm.runtime.targets = items;
      vm.emitTargetsUpdate();
    }
  };
  const fixCostumeOrder = function fixCostumeOrder() {
    let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(target.sprite.costumes);
    if (changed) {
      target.sprite.costumes = items;
      vm.emitTargetsUpdate();
    }
  };
  const fixSoundOrder = function fixSoundOrder() {
    let target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : vm.editingTarget;
    const {
      items,
      changed
    } = fixOrderOfItemsInFolders(target.sprite.sounds);
    if (changed) {
      target.sprite.sounds = items;
      vm.emitTargetsUpdate();
    }
  };
  const verifySortableHOC = sortableHOCInstance => {
    const SortableHOC = sortableHOCInstance.constructor;
    if (Array.isArray(sortableHOCInstance.props.items) && (typeof sortableHOCInstance.props.selectedId === "string" || typeof sortableHOCInstance.props.selectedItemIndex === "number") && typeof sortableHOCInstance.containerBox !== "undefined" && typeof SortableHOC.prototype.componentDidMount === "undefined" && typeof SortableHOC.prototype.componentDidUpdate === "undefined" && typeof SortableHOC.prototype.handleAddSortable === "function" && typeof SortableHOC.prototype.handleRemoveSortable === "function" && typeof SortableHOC.prototype.setRef === "function") return;
    throw new Error("Can not comprehend SortableHOC");
  };
  const verifySpriteSelectorItem = spriteSelectorItemInstance => {
    const SpriteSelectorItem = spriteSelectorItemInstance.constructor;
    if (typeof spriteSelectorItemInstance.props.asset === "object" && typeof spriteSelectorItemInstance.props.name === "string" && typeof spriteSelectorItemInstance.props.dragType === "string" && typeof SpriteSelectorItem.prototype.handleClick === "function" && typeof SpriteSelectorItem.prototype.setRef === "function" && typeof SpriteSelectorItem.prototype.handleDrag === "function" && typeof SpriteSelectorItem.prototype.handleDragEnd === "function" && typeof SpriteSelectorItem.prototype.handleDelete === "function" && typeof SpriteSelectorItem.prototype.handleDuplicate === "function" && typeof SpriteSelectorItem.prototype.handleExport === "function") return;
    throw new Error("Can not comprehend SpriteSelectorItem");
  };
  const verifyVM = vm => {
    const target = vm.runtime.targets[0];
    if (typeof vm.installTargets === "function" && typeof vm.reorderTarget === "function" && typeof target.reorderCostume === "function" && typeof target.reorderSound === "function" && typeof target.addCostume === "function" && typeof target.addSound === "function") return;
    throw new Error("Can not comprehend VM");
  };
  const verifyBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;
    if (typeof Backpack.prototype.handleDrop === "function" && typeof Backpack.prototype.componentDidUpdate === "undefined") {
      return;
    }
    throw new Error("Can not comprehend Backpack");
  };
  class Cache {
    constructor() {
      this.cache = new Map();
      this.usedThisTick = new Set();
    }
    has(id) {
      return this.cache.has(id);
    }
    get(id) {
      this.usedThisTick.add(id);
      return this.cache.get(id);
    }
    set(id, value) {
      this.usedThisTick.add(id);
      this.cache.set(id, value);
    }
    startTick() {
      this.usedThisTick.clear();
    }
    endTick() {
      for (const id of Array.from(this.cache.keys())) {
        if (!this.usedThisTick.has(id)) {
          this.cache.delete(id);
        }
      }
    }
    clear() {
      this.usedThisTick.clear();
      this.cache.clear();
    }
  }
  const patchSortableHOC = (SortableHOC, type) => {
    // SortableHOC should be: https://github.com/LLK/scratch-gui/blob/29d9851778febe4e69fa5111bf7559160611e366/src/lib/sortable-hoc.jsx#L8

    const itemCache = new Cache();
    const folderItemCache = new Cache();
    const folderAssetCache = new Cache();
    const PREVIEW_SIZE = 80;
    const PREVIEW_POSITIONS = [
    // x, y
    [0, 0], [PREVIEW_SIZE / 2, 0], [0, PREVIEW_SIZE / 2], [PREVIEW_SIZE / 2, PREVIEW_SIZE / 2]];
    const createFolderPreview = items => {
      // Directly generate a string instead of using DOM API for performance as we deal with very large inlined images
      // Because the result is only used as an img src, XSS shouldn't be a concern
      let result = "data:image/svg+xml;,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"".concat(PREVIEW_SIZE, "\" height=\"").concat(PREVIEW_SIZE, "\">");
      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];
        const width = PREVIEW_SIZE / 2;
        const height = PREVIEW_SIZE / 2;
        const [x, y] = PREVIEW_POSITIONS[i];
        let src;
        if (item.asset) {
          // TW: We can be 100% certain that escaping here is unnecessary
          src = item.asset.encodeDataURI();
        } else if (item.costume && item.costume.asset) {
          src = item.costume.asset.encodeDataURI();
        } else if (item.url) {
          src = soundIconHref;
        }
        if (src) {
          result += "<image width=\"".concat(width, "\" height=\"").concat(height, "\" x=\"").concat(x, "\" y=\"").concat(y, "\" href=\"").concat(src, "\"/>");
        }
      }
      result += "</svg>";
      return result;
    };
    const getUniqueIdOfFolderItems = items => {
      let id = "sa_folder&&";
      for (let i = 0; i < Math.min(PREVIEW_POSITIONS.length, items.length); i++) {
        const item = items[i];
        if (item.asset) {
          id += item.asset.assetId;
        } else if (item.costume && item.costume.asset) {
          id += item.costume.asset.assetId;
        } else if (item.url) {
          id += item.url;
        }
        id += "&&";
      }
      return id;
    };
    const processItems = (openFolders, props) => {
      const processItem = item => {
        const itemId = item.name;
        let newItem;
        let itemData;
        if (itemCache.has(itemId)) {
          newItem = itemCache.get(itemId);
          itemData = newItem.name;
        } else {
          itemData = {
            toString() {
              return "_".concat(item.name);
            }
          };
          newItem = {};
          itemCache.set(itemId, newItem);
        }
        const itemFolderName = getFolderFromName(item.name);
        Object.assign(newItem, item);
        itemData.realName = item.name;
        itemData.realIndex = i;
        itemData.inFolder = itemFolderName;
        newItem.name = itemData;
        return {
          newItem,
          itemData
        };
      };
      itemCache.startTick();
      folderItemCache.startTick();
      folderAssetCache.startTick();
      const folderOccurrences = new Map();
      const items = [];
      const result = {
        items
      };
      let i = 0;
      while (i < props.items.length) {
        const item = props.items[i];
        const folderName = getFolderFromName(item.name);
        if (folderName === null) {
          items.push(processItem(item).newItem);
          if (type === TYPE_ASSETS) {
            const isSelected = props.selectedItemIndex === i;
            if (isSelected) {
              result.selectedItemIndex = items.length - 1;
            }
          }
        } else {
          const isOpen = openFolders.indexOf(folderName) !== -1;
          const folderItems = [];
          while (i < props.items.length) {
            const childItem = props.items[i];
            const processedItem = processItem(childItem);
            if (getFolderFromName(childItem.name) !== folderName) {
              break;
            }
            folderItems.push(processedItem.newItem);
            if (type === TYPE_ASSETS) {
              const isSelected = props.selectedItemIndex === i;
              if (isSelected) {
                if (isOpen) {
                  result.selectedItemIndex = items.length + folderItems.length;
                } else {
                  result.selectedItemIndex = -1;
                }
              }
            }
            i++;
          }
          i--;
          const occurrence = folderOccurrences.get(folderName) || 0;
          folderOccurrences.set(folderName, occurrence + 1);
          const baseUniqueId = getUniqueIdOfFolderItems(folderItems);
          const itemUniqueId = "".concat(isOpen, "&").concat(occurrence, "&").concat(folderName, "&").concat(baseUniqueId, "&");
          const reactKey = "&__".concat(occurrence, "_").concat(folderName);
          const assetUniqueId = baseUniqueId;
          let folderItem;
          let folderData;
          if (folderItemCache.has(itemUniqueId)) {
            folderItem = folderItemCache.get(itemUniqueId);
            folderData = folderItem.name;
          } else {
            folderItem = {
              // Can be used as a react key
              id: {
                toString() {
                  return reactKey;
                }
              }
            };
            folderData = {
              // Can be used as a react key
              toString() {
                return reactKey;
              }
            };
            folderItemCache.set(itemUniqueId, folderItem);
          }
          folderData.folder = folderName;
          folderData.folderOpen = isOpen;
          folderItem.items = folderItems;
          folderItem.name = folderData;
          let folderAsset;
          if (isOpen) {
            folderAsset = openFolderAsset;
          } else {
            if (folderAssetCache.has(assetUniqueId)) {
              folderAsset = folderAssetCache.get(assetUniqueId);
            } else {
              folderAsset = {
                assetId: assetUniqueId,
                encodeDataURI() {
                  return createFolderPreview(folderItems);
                }
              };
              folderAssetCache.set(assetUniqueId, folderAsset);
            }
          }
          if (type === TYPE_SPRITES) {
            if (!folderItem.costume) folderItem.costume = {};
            folderItem.costume.asset = folderAsset;
            // For sprite items, `id` is used as the drag payload and toString is used as a React key
            if (!folderItem.id) folderItem.id = {};
            folderItem.id.sa_folder_items = folderItems;
            folderItem.id.toString = () => reactKey;
          } else {
            folderItem.asset = folderAsset;
            if (!folderItem.dragPayload) folderItem.dragPayload = {};
            folderItem.dragPayload.sa_folder_items = folderItems;
          }
          items.push(folderItem);
          if (isOpen) {
            for (const item of folderItems) {
              items.push(item);
            }
          }
        }
        i++;
      }
      itemCache.endTick();
      folderItemCache.endTick();
      folderAssetCache.endTick();
      return result;
    };
    const getSelectedItem = sortable => {
      if (type === TYPE_SPRITES) {
        const selectedItem = sortable.props.items.find(i => i.id === sortable.props.selectedId);
        return selectedItem;
      } else if (type === TYPE_ASSETS) {
        const selectedItem = sortable.props.items[sortable.props.selectedItemIndex];
        return selectedItem;
      }
      return null;
    };
    SortableHOC.prototype.saInitialSetup = function () {
      itemCache.clear();
      folderItemCache.clear();
      folderAssetCache.clear();
      const folders = [];
      const selectedItem = getSelectedItem(this);
      if (selectedItem && !selectedItem.isStage) {
        const folder = getFolderFromName(selectedItem.name);
        folders.push(folder);
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }
      this.setState({
        folders
      });
    };
    SortableHOC.prototype.componentDidMount = function () {
      // Do part of componentDidUpdate on mount as well
      const selectedItem = getSelectedItem(this);
      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = folder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = folder;
        }
      }
      this.saInitialSetup();
    };
    SortableHOC.prototype.componentDidUpdate = function (prevProps, prevState) {
      const selectedItem = getSelectedItem(this);
      if (selectedItem) {
        const folder = getFolderFromName(selectedItem.name);
        const currentFolder = this.state.folders.includes(folder) ? folder : null;
        if (type === TYPE_SPRITES) {
          currentSpriteFolder = currentFolder;
        } else if (type === TYPE_ASSETS) {
          currentAssetFolder = currentFolder;
        }
        let selectedItemChanged;
        if (this.props.selectedId) {
          selectedItemChanged = this.props.selectedId !== prevProps.selectedId;
        } else {
          selectedItemChanged = this.props.items[this.props.selectedItemIndex] && prevProps.items[prevProps.selectedItemIndex] && this.props.items[this.props.selectedItemIndex].name !== prevProps.items[prevProps.selectedItemIndex].name;
        }
        if (selectedItemChanged) {
          if (!selectedItem.isStage) {
            if (typeof folder === "string" && !this.state.folders.includes(folder)) {
              this.setState(prevState => ({
                folders: [...prevState.folders, folder]
              }));
            }
          }
        }
      }
    };
    const originalSortableHOCRender = SortableHOC.prototype.render;
    SortableHOC.prototype.render = function () {
      const originalProps = this.props;
      this.props = _objectSpread(_objectSpread({}, this.props), processItems(this.state && this.state.folders || [], this.props));
      if (type === TYPE_SPRITES) {
        currentSpriteItems = this.props.items;
      } else if (type === TYPE_ASSETS) {
        currentAssetItems = this.props.items;
      }
      const result = originalSortableHOCRender.call(this);
      this.props = originalProps;
      return result;
    };
  };
  const getAllFolders = component => {
    const result = new Set();
    let items;
    if (component.props.dragType === "SPRITE") {
      items = currentSpriteItems;
    } else {
      items = currentAssetItems;
    }
    for (const item of items) {
      const data = getItemData(item);
      if (typeof data.folder === "string") {
        result.add(data.folder);
      }
    }
    return Array.from(result);
  };
  const isFolderOpen = (component, folder) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    const folders = sortableHOCInstance.state && sortableHOCInstance.state.folders || [];
    return folders.includes(folder);
  };
  const setFolderOpen = (component, folder, open) => {
    const sortableHOCInstance = getSortableHOCFromElement(component.ref);
    sortableHOCInstance.setState(prevState => {
      let folders = prevState && prevState.folders || [];
      folders = folders.filter(i => i !== folder);
      if (open) {
        return {
          folders: [...folders, folder]
        };
      }
      return {
        folders
      };
    });
  };
  addon.tab.createEditorContextMenu((ctxType, ctx) => {
    if (ctxType !== "sprite" && ctxType !== "costume" && ctxType !== "sound") return;
    const component = ctx.target[addon.tab.traps.getInternalKey(ctx.target)].return.return.return.stateNode;
    const data = getItemData(component.props);
    if (!data) return;
    if (typeof data.folder === "string") {
      ctx.target.setAttribute("sa-folders-context-type", "folder");
      const renameItems = newName => {
        const isOpen = isFolderOpen(component, data.folder);
        setFolderOpen(component, data.folder, false);
        if (isOpen && typeof newName === "string") {
          setFolderOpen(component, newName, true);
        }
        if (component.props.dragType === "SPRITE") {
          for (const target of vm.runtime.targets) {
            if (target.isOriginal) {
              if (getFolderFromName(target.getName()) === data.folder) {
                vm.renameSprite(target.id, ensureNotReserved(setFolderOfName(target.getName(), newName)));
              }
            }
          }
          vm.emitWorkspaceUpdate();
          fixTargetOrder();
        } else if (component.props.dragType === "COSTUME") {
          for (let i = 0; i < vm.editingTarget.sprite.costumes.length; i++) {
            const costume = vm.editingTarget.sprite.costumes[i];
            if (getFolderFromName(costume.name) === data.folder) {
              vm.renameCostume(i, setFolderOfName(costume.name, newName));
            }
          }
          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          for (let i = 0; i < vm.editingTarget.sprite.sounds.length; i++) {
            const sound = vm.editingTarget.sprite.sounds[i];
            if (getFolderFromName(sound.name) === data.folder) {
              vm.renameSound(i, setFolderOfName(sound.name, newName));
            }
          }
          fixSoundOrder();
        }
      };
      const renameFolder = async () => {
        let newName = await addon.tab.prompt(msg("rename-folder-prompt-title"), msg("rename-folder-prompt"), data.folder, {
          useEditorClasses: true
        });
        // Prompt cancelled, do not rename
        if (newName === null) {
          return;
        }
        if (!isValidFolderName(newName)) {
          alert(msg("name-not-allowed"));
          return;
        }
        // Empty name will remove the folder
        if (!newName) {
          newName = null;
        }
        renameItems(newName);
      };
      const removeFolder = () => {
        renameItems(null);
      };
      return [{
        className: "sa-folders-rename-folder",
        label: msg("rename-folder"),
        callback: renameFolder,
        position: "assetContextMenuAfterDelete",
        order: 10
      }, {
        className: "sa-folders-remove-folder",
        label: msg("remove-folder"),
        callback: removeFolder,
        position: "assetContextMenuAfterDelete",
        order: 11
      }];
    } else {
      ctx.target.setAttribute("sa-folders-context-type", "asset");
      const setFolder = folder => {
        if (component.props.dragType === "SPRITE") {
          const target = vm.runtime.getTargetById(component.props.id);
          vm.renameSprite(component.props.id, ensureNotReserved(setFolderOfName(target.getName(), folder)));
          fixTargetOrder();
          vm.emitWorkspaceUpdate();
        } else if (component.props.dragType === "COSTUME") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.costumes[index];
          vm.renameCostume(vm.editingTarget.sprite.costumes.indexOf(asset), setFolderOfName(asset.name, folder));
          fixCostumeOrder();
        } else if (component.props.dragType === "SOUND") {
          const data = getItemData(component.props);
          const index = data.realIndex;
          const asset = vm.editingTarget.sprite.sounds[index];
          vm.renameSound(vm.editingTarget.sprite.sounds.indexOf(asset), setFolderOfName(asset.name, folder));
          fixSoundOrder();
        }
      };
      const createFolder = async () => {
        const name = await addon.tab.prompt(msg("name-prompt-title"), msg("name-prompt"), getNameWithoutFolder(data.realName), {
          useEditorClasses: true
        });
        if (name === null) {
          return;
        }
        if (!isValidFolderName(name)) {
          alert(msg("name-not-allowed"));
          return;
        }
        setFolder(name);
      };
      const base = [{
        border: true,
        className: "sa-folders-create-folder",
        label: msg("create-folder"),
        callback: createFolder,
        position: "assetContextMenuAfterDelete",
        order: 13
      }];
      const currentFolder = data.inFolder;
      if (typeof currentFolder === "string") {
        base.push({
          className: "sa-folders-remove-from-folder",
          label: msg("remove-from-folder"),
          callback: () => setFolder(null),
          position: "assetContextMenuAfterDelete",
          order: 14
        });
      }
      return base.concat(getAllFolders(component).filter(folder => folder !== currentFolder).map((folder, i) => {
        return {
          className: "sa-folders-add-to-folder",
          label: msg("add-to-folder", {
            folder
          }),
          callback: () => setFolder(folder),
          position: "assetContextMenuAfterDelete",
          order: 20 + i
        };
      }));
    }
  });
  const patchSpriteSelectorItem = SpriteSelectorItem => {
    for (const method of ["handleDelete", "handleDuplicate", "handleExport"]) {
      const original = SpriteSelectorItem.prototype[method];
      SpriteSelectorItem.prototype[method] = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        if (typeof this.props.id === "number") {
          const itemData = getItemData(this.props);
          if (itemData) {
            const originalProps = this.props;
            this.props = _objectSpread(_objectSpread({}, originalProps), {}, {
              id: itemData.realIndex
            });
            const ret = original.call(this, ...args);
            this.props = originalProps;
            return ret;
          }
        }
        return original.call(this, ...args);
      };
    }
    const originalHandleDragEnd = SpriteSelectorItem.prototype.handleDragEnd;
    SpriteSelectorItem.prototype.handleDragEnd = function () {
      const itemData = getItemData(this.props);
      if (itemData) {
        if (typeof itemData.realIndex === "number" && this.props.dragging) {
          // If the item is being dragged onto another group (eg. costume list -> sprite list)
          // then we fake a drag event to make the `index` be the real index
          const originalIndex = this.props.index;
          const realIndex = itemData.realIndex;
          if (originalIndex !== realIndex) {
            const currentOffset = addon.tab.redux.state.scratchGui.assetDrag.currentOffset;
            const sortableHOCInstance = getSortableHOCFromElement(this.ref);
            if (currentOffset && sortableHOCInstance && sortableHOCInstance.getMouseOverIndex() === null) {
              this.props.index = realIndex;
              this.handleDrag(currentOffset);
              this.props.index = originalIndex;
            }
          }
        }
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return originalHandleDragEnd.call(this, ...args);
    };
    const originalHandleClick = SpriteSelectorItem.prototype.handleClick;
    SpriteSelectorItem.prototype.handleClick = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      const e = args[0];
      if (e && !this.noClick) {
        const itemData = getItemData(this.props);
        if (itemData) {
          if (typeof itemData.folder === "string") {
            e.preventDefault();
            setFolderOpen(this, itemData.folder, !isFolderOpen(this, itemData.folder));
            return;
          }
          if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
            e.preventDefault();
            if (this.props.onClick) {
              this.props.onClick(itemData.realIndex);
            }
            return;
          }
        }
      }
      return originalHandleClick.call(this, ...args);
    };
    const originalRender = SpriteSelectorItem.prototype.render;
    SpriteSelectorItem.prototype.render = function () {
      const itemData = getItemData(this.props);
      if (itemData) {
        const originalProps = this.props;
        this.props = _objectSpread({}, this.props);
        if (typeof itemData.realName === "string") {
          this.props.name = getNameWithoutFolder(itemData.realName);
        }
        if (typeof this.props.number === "number" && typeof itemData.realIndex === "number") {
          // Convert 0-indexed to 1-indexed
          this.props.number = itemData.realIndex + 1;
        }
        if (typeof itemData.folder === "string") {
          this.props.name = itemData.folder;
          if (itemData.folderOpen) {
            this.props.details = msg("open-folder");
          } else {
            this.props.details = msg("closed-folder");
          }
          this.props.selected = false;
          this.props.number = null;
          this.props.className += " ".concat(getFolderColorClass(itemData.folder), " sa-folders-folder");
        }
        if (typeof itemData.inFolder === "string") {
          this.props.className += " ".concat(getFolderColorClass(itemData.inFolder));
        }
        const result = originalRender.call(this);
        this.props = originalProps;
        return result;
      }
      return originalRender.call(this);
    };
  };
  const patchVM = () => {
    const RenderedTarget = vm.runtime.targets[0].constructor;
    const originalInstallTargets = vm.installTargets;
    vm.installTargets = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      if (currentSpriteFolder !== null) {
        const targets = args[0];
        const wholeProject = args[2];
        if (Array.isArray(targets) && !wholeProject) {
          for (const target of targets) {
            if (target.sprite) {
              target.sprite.name = setFolderOfName(target.sprite.name, currentSpriteFolder);
            }
          }
        }
      }
      return originalInstallTargets.call(this, ...args).then(r => {
        fixTargetOrder();
        return r;
      });
    };
    const originalAddCostume = RenderedTarget.prototype.addCostume;
    RenderedTarget.prototype.addCostume = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      if (currentAssetFolder !== null) {
        const costume = args[0];
        if (costume && typeof getFolderFromName(costume.name) !== "string") {
          costume.name = setFolderOfName(costume.name, currentAssetFolder);
        }
      }
      const r = originalAddCostume.call(this, ...args);
      fixCostumeOrder(this);
      return r;
    };
    const originalAddSound = RenderedTarget.prototype.addSound;
    RenderedTarget.prototype.addSound = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      if (currentAssetFolder !== null) {
        const sound = args[0];
        if (sound && typeof getFolderFromName(sound.name) !== "string") {
          sound.name = setFolderOfName(sound.name, currentAssetFolder);
        }
      }
      const r = originalAddSound.call(this, ...args);
      fixSoundOrder(this);
      return r;
    };
    const abstractReorder = (_ref2, itemIndex, newIndex) => {
      let {
        guiItems,
        getAll,
        set,
        rename,
        getVMItemFromGUIItem,
        zeroIndexed,
        onFolderChanged
      } = _ref2;
      // First index depends on zeroIndexed
      itemIndex = clamp(itemIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
      newIndex = clamp(newIndex, zeroIndexed ? 0 : 1, zeroIndexed ? guiItems.length - 1 : guiItems.length);
      if (itemIndex === newIndex) {
        return false;
      }
      let assets = getAll();
      const originalAssets = getAll();
      const targetItem = guiItems[itemIndex - (zeroIndexed ? 0 : 1)];
      const itemAtNewIndex = guiItems[newIndex - (zeroIndexed ? 0 : 1)];
      const targetItemData = getItemData(targetItem);
      const itemAtNewIndexData = getItemData(itemAtNewIndex);
      if (!targetItemData || !itemAtNewIndexData) {
        console.warn("should never happen");
        return false;
      }
      const reorderingItems = typeof targetItemData.folder === "string" ? targetItem.items : [targetItem];
      const reorderingAssets = reorderingItems.map(i => getVMItemFromGUIItem(i, assets)).filter(i => i);
      if (typeof itemAtNewIndexData.realIndex === "number") {
        const newTarget = getVMItemFromGUIItem(itemAtNewIndex, assets);
        if (!newTarget || reorderingAssets.includes(newTarget)) {
          // Dragging folder into itself or target doesn't exist. Ignore.
          return false;
        }
      }
      let newFolder = null;
      assets = assets.filter(i => !reorderingAssets.includes(i));
      let realNewIndex;
      if (newIndex === (zeroIndexed ? 0 : 1)) {
        realNewIndex = zeroIndexed ? 0 : 1;
      } else if (newIndex === guiItems.length - (zeroIndexed ? 1 : 0)) {
        realNewIndex = assets.length;
      } else if (typeof itemAtNewIndexData.realIndex === "number") {
        newFolder = typeof itemAtNewIndexData.inFolder === "string" ? itemAtNewIndexData.inFolder : null;
        let newAsset = getVMItemFromGUIItem(itemAtNewIndex, assets);
        if (!newAsset) {
          console.warn("should never happen");
          return false;
        }
        realNewIndex = assets.indexOf(newAsset);
        if (newIndex > itemIndex) {
          realNewIndex++;
        }
      } else if (typeof itemAtNewIndexData.folder === "string") {
        let item;
        let offset = 0;
        if (newIndex < itemIndex) {
          // A B [C D E] F G
          //    ^----------*
          // A B C [D] E F G
          //      ^--------*
          item = itemAtNewIndex.items[0];
        } else if (itemAtNewIndexData.folderOpen) {
          // A B [C D E] F G
          //   *---^
          item = itemAtNewIndex.items[0];
          newFolder = itemAtNewIndexData.folder;
        } else {
          // A B [C] D E F G
          //   *----^
          item = itemAtNewIndex.items[itemAtNewIndex.items.length - 1];
          offset = 1;
        }
        let newAsset = getVMItemFromGUIItem(item, assets);
        if (newAsset) {
          realNewIndex = assets.indexOf(newAsset) + offset;
        } else {
          // Edge case: Dragging the first item of a list on top of the folder item
          // A B [C D E] F G
          //    ^---*
          newAsset = getVMItemFromGUIItem(item, originalAssets);
          if (!newAsset) {
            console.warn("should never happen");
            return false;
          }
          realNewIndex = originalAssets.indexOf(newAsset) + offset;
        }
      } else {
        console.warn("should never happen");
        return false;
      }
      if (typeof targetItemData.folder === "string" && newFolder !== null) {
        // Cannot drag a folder into another folder
        return;
      }
      if (realNewIndex < (zeroIndexed ? 0 : 1) || realNewIndex > assets.length) {
        console.warn("should never happen");
        return false;
      }
      assets.splice(realNewIndex, 0, ...reorderingAssets);
      set(assets);

      // If the folder has changed, update item names to match.
      if (typeof targetItemData.folder !== "string" && targetItemData.inFolder !== newFolder) {
        for (const asset of reorderingAssets) {
          const name = asset.getName ? asset.getName() : asset.name;
          rename(asset, setFolderOfName(name, newFolder));
        }
        if (onFolderChanged) {
          onFolderChanged();
        }
      }
      return true;
    };
    vm.constructor.prototype.reorderTarget = function (targetIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.runtime.targets;
        },
        set: targets => {
          this.runtime.targets = targets;
          this.emitTargetsUpdate();
        },
        rename: (item, name) => {
          this.renameSprite(item.id, ensureNotReserved(name));
        },
        getVMItemFromGUIItem: (item, targets) => {
          return targets.find(i => i.id === item.id);
        },
        onFolderChanged: () => {
          this.emitWorkspaceUpdate();
        },
        guiItems: currentSpriteItems,
        zeroIndexed: false
      }, targetIndex, newIndex);
    };
    RenderedTarget.prototype.reorderCostume = function (costumeIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.costumes;
        },
        set: assets => {
          this.sprite.costumes = assets;
        },
        rename: (item, name) => {
          this.renameCostume(this.sprite.costumes.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, costumes) => {
          const itemData = getItemData(item);
          return costumes.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, costumeIndex, newIndex);
    };
    RenderedTarget.prototype.reorderSound = function (soundIndex, newIndex) {
      return abstractReorder({
        getAll: () => {
          return this.sprite.sounds;
        },
        set: assets => {
          this.sprite.sounds = assets;
        },
        rename: (item, name) => {
          this.renameSound(this.sprite.sounds.indexOf(item), name);
        },
        getVMItemFromGUIItem: (item, sounds) => {
          const itemData = getItemData(item);
          return sounds.find(c => c.name === itemData.realName);
        },
        guiItems: currentAssetItems,
        zeroIndexed: true
      }, soundIndex, newIndex);
    };

    // Temporal bug fix for #5762
    const originalShareSoundToTarget = vm.shareSoundToTarget;
    vm.shareSoundToTarget = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      const target = this.runtime.getTargetById(args[1]);
      if (!target) {
        // Avoid reading property from null
        return Promise.reject(new Error("Dropping sound into folder is not supported"));
        // This would also work no matter what we returned, probably
        // Original method returns a promise, so here too
      }
      return originalShareSoundToTarget.call(this, ...args);
    };
  };
  const patchBackpack = backpackInstance => {
    const Backpack = backpackInstance.constructor;
    Backpack.prototype.sa_loadNextItem = function () {
      if (!this.sa_queuedItems) return;
      const item = this.sa_queuedItems.pop();
      if (item) {
        let payload;
        let type;
        if (item.dragPayload) {
          if (item.url) {
            type = "SOUND";
          } else {
            type = "COSTUME";
          }
          payload = item.dragPayload;
        } else if (item.id) {
          type = "SPRITE";
          payload = item.id;
        }
        if (type && payload) {
          originalHandleDrop.call(this, {
            dragType: type,
            payload: payload
          });
        }
      }
    };
    Backpack.prototype.componentDidUpdate = function (prevProps, prevState) {
      if (!this.state.loading && prevState.loading && !this.state.error) {
        this.sa_loadNextItem();
      }
    };
    const originalHandleDrop = Backpack.prototype.handleDrop;
    Backpack.prototype.handleDrop = function () {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      // When a folder is dropped into the backpack, upload all the items in the folder.
      const dragInfo = args[0];
      const folderItems = dragInfo && dragInfo.payload && dragInfo.payload.sa_folder_items;
      if (Array.isArray(folderItems)) {
        addon.tab.confirm("", msg("confirm-backpack-folder"), {
          useEditorClasses: true
        }).then(result => {
          if (!result) return;
          this.sa_queuedItems = folderItems;
          this.sa_loadNextItem();
        });
        return;
      }
      return originalHandleDrop.call(this, ...args);
    };
    backpackInstance.handleDrop = Backpack.prototype.handleDrop.bind(backpackInstance);
  };

  // Backpack
  {
    const clickListener = e => {
      if (!e.target.closest('[class*="backpack_backpack-header_"]')) {
        return;
      }
      setTimeout(() => {
        const backpackContainer = document.querySelector("[class^='backpack_backpack-list_']");
        if (!backpackContainer) {
          return;
        }
        document.removeEventListener("click", clickListener);
        const backpackInstance = getBackpackFromElement(backpackContainer);
        verifyBackpack(backpackInstance);
        patchBackpack(backpackInstance);
      });
    };
    document.addEventListener("click", clickListener, true);
  }

  // Sprite list
  {
    const spriteSelectorItemElement = await addon.tab.waitForElement("[class^='sprite-selector_sprite-wrapper']", {
      reduxCondition: state => !state.scratchGui.mode.isPlayerOnly
    });
    vm = addon.tab.traps.vm;
    reactInternalKey = Object.keys(spriteSelectorItemElement).find(i => i.startsWith(REACT_INTERNAL_PREFIX));
    const sortableHOCInstance = getSortableHOCFromElement(spriteSelectorItemElement);
    const spriteSelectorItemInstance = spriteSelectorItemElement[reactInternalKey].child.child.child.stateNode;
    verifySortableHOC(sortableHOCInstance);
    verifySpriteSelectorItem(spriteSelectorItemInstance);
    verifyVM(vm);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_SPRITES);
    patchSpriteSelectorItem(spriteSelectorItemInstance.constructor);
    sortableHOCInstance.saInitialSetup();
    patchVM();
  }

  // Costume and sound list
  {
    const selectorListItem = await addon.tab.waitForElement("[class*='selector_list-item']", {
      reduxCondition: state => state.scratchGui.editorTab.activeTabIndex !== 0 && !state.scratchGui.mode.isPlayerOnly
    });
    const sortableHOCInstance = getSortableHOCFromElement(selectorListItem);
    verifySortableHOC(sortableHOCInstance);
    patchSortableHOC(sortableHOCInstance.constructor, TYPE_ASSETS);
    sortableHOCInstance.saInitialSetup();
  }
});

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/BlockRenderer.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/BlockRenderer.js ***!
  \***************************************************************/
/*! exports provided: getBlockHeight, BlockComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBlockHeight", function() { return getBlockHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockComponent", function() { return BlockComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return renderBlock; });
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/middle-click-popup/module.js");
/**
 * @file Contains the code for rendering the blocks in the middle click dropdown.
 * Main function is {@link renderBlock} which takes in a block and returns a renderer SVG element.
 * @author Tacodiva
 */



const SVG_NS = "http://www.w3.org/2000/svg";
const BlockShapes = {
  // eg (my variable)
  Round: {
    padding: 12,
    minWidth: 20,
    backgroundPath: width => "m -12 -20 m 20 0 h ".concat(width - 16, " a 20 20 0 0 1 0 40 H 8 a 20 20 0 0 1 0 -40 z"),
    /**
     * 'Snuggling' is my wholesome term for when a block can sit extra close to a block
     * of the same shape as it. Take a look at the blocks ( ( "" + "" ) - "" ) and
     * ( < "" = "" > - "" ), observe how there's a lot more blank space in the outer
     * block in the second example, this is because in the first example the '+' block
     * can snuggle with the '-' block.
     */
    snugglePadding: 0,
    get snuggleWith() {
      // Don't feel bad BlockShapes.Round, I only snuggle with myself too :_(
      return [BlockShapes.Round];
    }
  },
  // eg <() = ()>
  Boolean: {
    padding: 20,
    minWidth: 20,
    backgroundPath: width => "m -20 -20 m 20 0 h ".concat(width, " l 20 20 l -20 20 H 0 l -20 -20 l 20 -20 z"),
    snugglePadding: 0,
    get snuggleWith() {
      return [BlockShapes.Boolean];
    }
  },
  // Square dropdowns like variables
  SquareInput: {
    padding: 8,
    minWidth: 20,
    backgroundPath: width => "m -2 -16 h ".concat(width + 4, " a 4 4 0 0 1 4 4 V 12 a 4 4 0 0 1 -4 4 H -2 a 4 4 0 0 1 -4 -4 V -12 a 4 4 0 0 1 4 -4")
  },
  // eg show
  Stack: {
    padding: 8,
    minWidth: 60,
    backgroundPath: width => "m -8 -20 A 4 4 0 0 1 -4 -24 H 4 c 2 0 3 1 4 2 l 4 4 c 1 1 2 2 4 2 h 12 c 2 0 3 -1 4 -2 l 4 -4 C 37 -23 38 -24 40 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 40 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H -4 a 4 4 0 0 1 -4 -4 z")
  },
  // eg when I start as a clone
  Hat: {
    padding: 8,
    minWidth: 60,
    backgroundPath: width => "m -8 -20 A 4 4 0 0 1 -4 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H 40 c -2 0 -3 1 -4 2 l -4 4 c -1 1 -2 2 -4 2 h -12 c -2 0 -3 -1 -4 -2 l -4 -4 c -1 -1 -2 -2 -4 -2 H -4 a 4 4 0 0 1 -4 -4 z")
  },
  // eg delete this clone
  End: {
    padding: 8,
    minWidth: 60,
    backgroundPath: width => "m -8 -20 A 4 4 0 0 1 -4 -24 H 4 c 2 0 3 1 4 2 l 4 4 c 1 1 2 2 4 2 h 12 c 2 0 3 -1 4 -2 l 4 -4 C 37 -23 38 -24 40 -24 H ".concat(width, " a 4 4 0 0 1 4 4 v 40 a 4 4 0 0 1 -4 4 H -4 a 4 4 0 0 1 -4 -4 z")
  },
  // The white oval for text or number inputs
  TextInput: {
    padding: 12,
    minWidth: 16,
    backgroundPath: width => "m -12 -16 m 16 0 h ".concat(width - 8, " a 16 16 0 0 1 0 32 H 4 a 16 16 0 0 1 0 -32 z"),
    snugglePadding: 4,
    get snuggleWith() {
      return [BlockShapes.Round];
    }
  },
  BooleanInput: {
    padding: 16,
    minWidth: 16,
    backgroundPath: width => "m 0 -16 h ".concat(width, " l 16 16 l -16 16 h -16 l -16 -16 l 16 -16 z"),
    snugglePadding: 6,
    get snuggleWith() {
      return [BlockShapes.Boolean];
    }
  },
  HorizontalBlock: {
    padding: 16,
    minWidth: 45,
    backgroundPath: width => "M -4 -20 a 4 4 0 0 1 4 -4 H ".concat(width + 8, " a 4 4 0 0 1 4 4 v 2 c 0 2 -1 3 -2 4 l -4 4 c -1 1 -2 2 -2 4 v 12 c 0 2 1 3 2 4 l 4 4 c 1 1 2 2 2 4 v 2 a 4 4 0 0 1 -4 4 H 0 a 4 4 0 0 1 -4 -4 v -2 c 0 -2 -1 -3 -2 -4 l -4 -4 c -1 -1 -2 -2 -2 -4 v -12 c 0 -2 1 -3 2 -4 l 4 -4 c 1 -1 2 -2 2 -4 z")
  },
  HorizontalBlockEnd: {
    padding: 16,
    minWidth: 45,
    backgroundPath: width => "M -4 -20 a 4 4 0 0 1 4 -4 H ".concat(width + 8, " a 4 4 0 0 1 4 4 V 20 a 4 4 0 0 1 -4 4 H 0 a 4 4 0 0 1 -4 -4 v -2 c 0 -2 -1 -3 -2 -4 l -4 -4 c -1 -1 -2 -2 -2 -4 v -12 c 0 -2 1 -3 2 -4 l 4 -4 c 1 -1 2 -2 2 -4 z")
  }
};

/**
 * Gets the block shape info from {@link BlockShapes} given a {@link BlockShape}.
 * @param {BlockShape} shape
 */
function getShapeInfo(shape, isVertical) {
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round) return BlockShapes.Round;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean) return BlockShapes.Boolean;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack) return isVertical ? BlockShapes.Stack : BlockShapes.HorizontalBlock;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat) return BlockShapes.Hat;
  if (shape === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End) return isVertical ? BlockShapes.End : BlockShapes.HorizontalBlockEnd;
  throw new Error(shape);
}

/**
 * @param {BlockInstance} block
 * @returns {number}
 */
function getBlockHeight(block) {
  switch (block.typeInfo.shape) {
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack:
      return 62;
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean:
    case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round:
      return 48;
  }
  return 0;
}
const BLOCK_ELEMENT_SPACING = 8;

/**
 * A part of a block. Think of these like the different parts in the 'make a block' menu.
 */
class BlockComponent {
  constructor(element, padding, width, snuggleWith, snugglePadding) {
    this.dom = element;
    this.padding = padding;
    this.width = width;
    this.snuggleWith = snuggleWith;
    this.snugglePadding = snugglePadding;
  }
}

/**
 * Creates a BlockComponent with some text. Like the 'label' element in the make a block menu.
 * @param {string} text The contents of the component.
 * @param {SVGElement} container The element to add the text to.
 * @returns {BlockComponent} The BlockComponent.
 */
function createTextComponent(text, fillVar, container) {
  let textElement = container.appendChild(document.createElementNS(SVG_NS, "text"));
  textElement.setAttribute("class", "blocklyText");
  textElement.style.fill = "var(".concat(fillVar, ")");
  textElement.setAttribute("dominant-baseline", "middle");
  textElement.setAttribute("dy", 1);
  textElement.appendChild(document.createTextNode(text));
  return new BlockComponent(textElement, 0, Object(_module_js__WEBPACK_IMPORTED_MODULE_1__["getTextWidth"])(textElement));
}

/**
 * Creates a DOM element to hold all the contents of a block.
 * A block could be the top level block, or it could be a block like (() + ()) that's inside
 * another block.
 * @returns {SVGElement} The SVGElement which will contain all the block's components.
 */
function createBlockContainer() {
  let container = document.createElementNS(SVG_NS, "g");
  let background = document.createElementNS(SVG_NS, "path");
  background.setAttribute("class", "blocklyPath");
  container.appendChild(background);
  return container;
}

/**
 * Creates a block component from a container containing all its components.
 * @param {SVGElement} container The block container, created by {@link createBlockContainer}.
 * @param {object} shape An object containing information of the shape of the block to be created. From the {@link BlockShapes} object.
 * @param {string} categoryClass The category of the block, used for filling the background.
 * @param {string} fill
 * @param {string} stroke
 * @param {number} width The width of the background of the block.
 */
function createBlockComponent(container, shape, categoryClass, fill, stroke, width) {
  if (width < shape.minWidth) width = shape.minWidth;
  container.classList.add("sa-block-color", categoryClass);
  const background = container.children[0];
  let style = "";
  if (fill) style += "fill: var(".concat(fill, ");");
  if (stroke) style += "stroke: var(".concat(stroke, ");");
  background.setAttribute("style", style);
  background.setAttribute("d", shape.backgroundPath(width));
  return new BlockComponent(container, shape.padding, width + shape.padding * 2, shape.snuggleWith, shape.snugglePadding);
}
function createBackedTextedComponent(text, container, shape, categoryClass, fill, stroke, textVar) {
  const blockContainer = createBlockContainer();
  container.appendChild(blockContainer);
  const textElement = createTextComponent(text, textVar, blockContainer);
  if (textElement.width < shape.minWidth) {
    textElement.dom.setAttribute("x", (shape.minWidth - textElement.width) / 2);
  }
  const blockElement = createBlockComponent(blockContainer, shape, categoryClass, fill, stroke, textElement.width);
  return blockElement;
}

/**
 * Renders a block, with the center of it's leftmost side located at 0, 0.
 * @param {BlockInstance} block
 * @param {SVGElement} container
 * @returns {BlockComponent} The rendered block
 */
function renderBlock(block, container) {
  var blockComponent = _renderBlock(block, container, block.typeInfo.category, true);
  blockComponent.dom.classList.add("sa-block-color");
  blockComponent.dom.setAttribute("transform", "translate(".concat(blockComponent.padding, ", 0)"));
  return blockComponent;
}

/**
 * Renders a block, with the center of it's leftmost side located at 0, 0.
 * @param {BlockInstance} block
 * @param {SVGAElement} container
 * @param {string} parentCategory The category of this blocks parent. If no parent, than this blocks category.
 * @returns {BlockComponent} The rendered component.
 */
function _renderBlock(block, container, parentCategory, isVertical) {
  const blockContainer = container.appendChild(createBlockContainer());
  const shape = getShapeInfo(block.typeInfo.shape, isVertical);
  const category = block.typeInfo.category;
  const categoryClass = "sa-block-color-" + String(category.name).replace(/[^a-z0-9\-_]+/gmi, '_');
  let xOffset = 0;
  let inputIdx = 0;
  for (let partIdx = 0; partIdx < block.typeInfo.parts.length; partIdx++) {
    const blockPart = block.typeInfo.parts[partIdx];
    let component;
    if (typeof blockPart === "string") {
      component = createTextComponent(blockPart, "--sa-block-text", blockContainer);
    } else {
      const blockInput = block.inputs[inputIdx++];
      if (blockInput instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInstance"]) {
        component = _renderBlock(blockInput, blockContainer, block.typeInfo.category, false);
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputEnum"]) {
        if (blockPart.isRound) {
          var _blockInput$string;
          component = createBackedTextedComponent((_blockInput$string = blockInput === null || blockInput === void 0 ? void 0 : blockInput.string) !== null && _blockInput$string !== void 0 ? _blockInput$string : blockPart.values[0].string, blockContainer, BlockShapes.TextInput, categoryClass, "--sa-block-background-secondary, ".concat(category.colorSecondary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-text");
        } else {
          var _blockInput$string2;
          component = createBackedTextedComponent((_blockInput$string2 = blockInput === null || blockInput === void 0 ? void 0 : blockInput.string) !== null && _blockInput$string2 !== void 0 ? _blockInput$string2 : blockPart.values[0].string, blockContainer, BlockShapes.SquareInput, categoryClass, "--sa-block-background-primary, ".concat(category.colorPrimary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-text");
        }
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputBoolean"]) {
        component = createBackedTextedComponent("", blockContainer, BlockShapes.BooleanInput, categoryClass, "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-text");
      } else if (blockPart instanceof _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputBlock"]) {
        component = createBackedTextedComponent("", blockContainer, BlockShapes.HorizontalBlock, categoryClass, "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-field-background, ".concat(category.colorTertiary), "--sa-block-text");
      } else {
        var _ref, _blockInput$toString;
        component = createBackedTextedComponent((_ref = (_blockInput$toString = blockInput === null || blockInput === void 0 ? void 0 : blockInput.toString()) !== null && _blockInput$toString !== void 0 ? _blockInput$toString : blockPart.defaultValue) !== null && _ref !== void 0 ? _ref : "", blockContainer, BlockShapes.TextInput, categoryClass, "--sa-block-input-color, white", "--sa-block-background-tertiary, ".concat(category.colorTertiary), "--sa-block-input-text");
        component.dom.classList.add("blocklyNonEditableText");
      }
    }
    let xTranslation = xOffset + component.padding;
    if (partIdx === 0 || partIdx === block.typeInfo.parts.length - 1) {
      if (component.snuggleWith && component.snuggleWith.indexOf(shape) !== -1) {
        const positionDelta = component.snugglePadding - component.padding;
        component.width += positionDelta;
        if (partIdx === 0) {
          xTranslation += positionDelta;
        }
      }
    }
    component.dom.setAttribute("transform", "translate(".concat(xTranslation, ", 0)"));
    xOffset += BLOCK_ELEMENT_SPACING + component.width;
  }
  return createBlockComponent(blockContainer, shape, categoryClass, "--sa-block-background-primary, ".concat(category.colorPrimary), "--sa-block-background-tertiary, ".concat(category.colorTertiary), xOffset - BLOCK_ELEMENT_SPACING);
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/BlockTypeInfo.js ***!
  \***************************************************************/
/*! exports provided: BlockInputType, BlockInput, BlockInputRound, BlockInputString, BlockInputNumber, BlockInputBoolean, BlockInputColour, BlockInputEnum, BlockInputBlock, BlockInstance, BlockShape, BlockTypeInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputType", function() { return BlockInputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInput", function() { return BlockInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputRound", function() { return BlockInputRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputString", function() { return BlockInputString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputNumber", function() { return BlockInputNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputBoolean", function() { return BlockInputBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputColour", function() { return BlockInputColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputEnum", function() { return BlockInputEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInputBlock", function() { return BlockInputBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockInstance", function() { return BlockInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockShape", function() { return BlockShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlockTypeInfo", function() { return BlockTypeInfo; });
var _BlockShape;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Contains the code for enumerating the different types of blocks in a workspace,
 * and provides a more friendly way to create instances blocks with some inputs.
 */

// import * as SABlocks from "../../addon-api/content-script/blocks.js";

/**
 * A numeric value to represent the type of an {@link BlockInput}
 * @readonly
 * @enum {number}
 */
const BlockInputType = {
  STRING: 0,
  NUMBER: 1,
  BOOLEAN: 2,
  COLOUR: 3,
  ENUM: 4,
  BLOCK: 5
};

/**
 * @abstract
 */
class BlockInput {
  /**
   * @param {BlockInputType} type
   * @param {number} inputIdx
   * @param {number} fieldIdx
   */
  constructor(type, inputIdx, fieldIdx) {
    if (this.constructor === BlockInput) throw new Error("Abstract classes can't be instantiated.");
    /** @type {BlockInputType} */
    this.type = type;
    /** @type {number} The index of this input in the workspace version of the block's input array.  */
    this.inputIdx = inputIdx;
    /**
     * The index of this input in the workspace version of the block's field array.
     * The special case of -1 means that in the workspace version, this input is inside a sub-block,
     * that has been abstracted away.
     *  @type {number}
     */
    this.fieldIdx = fieldIdx;
  }

  /**
   * Sets the field this input refers to on a block to a value.
   * @param {BlockInstance} block
   * @param {*} value
   * @abstract
   */
  setValue(block, value) {
    throw new Error("Sub-class must override abstract method.");
  }

  /**
   * Gets the input this block input refers to on block.
   * @param {BlockInstance} block
   * @returns {*}
   * @protected
   */
  getInput(block) {
    return block.inputList[this.inputIdx];
  }

  /**
   * Gets the field this block input refers to on block.
   * @param {BlockInstance} block
   * @returns {*}
   * @protected
   */
  getField(block) {
    if (this.fieldIdx === -1) {
      return this.getInput(block).connection.targetBlock().inputList[0].fieldRow[0];
    } else {
      return this.getInput(block).fieldRow[this.fieldIdx];
    }
  }
}

/**
 * The base class for any round input.
 * @abstract
 */
class BlockInputRound extends BlockInput {
  constructor(type, inputIdx, fieldIdx, defaultValue) {
    super(type, inputIdx, fieldIdx);
    if (this.constructor === BlockInputRound) throw new Error("Abstract classes can't be instantiated.");
    this.defaultValue = defaultValue;
  }
  setValue(block, value) {
    if (value instanceof BlockInstance) {
      const subblock = value.createWorkspaceForm();
      if (!subblock.outputConnection) throw new Error('Cannot put block "' + subblock.typeInfo.id + '" into a round type input.');
      subblock.outputConnection.connect(this.getInput(block).connection);
    } else {
      this.getField(block).setValue(this._toFieldValue(value));
    }
  }

  /**
   * Converts a value passed in to setValue to a value we can set the block's field to.
   * @param {*} value
   * @protected
   */
  _toFieldValue(value) {
    throw new Error("Sub-class must override abstract method.");
  }
}
class BlockInputString extends BlockInputRound {
  constructor(inputIdx, fieldIdx, defaultValue) {
    super(BlockInputType.STRING, inputIdx, fieldIdx, defaultValue);
  }
  _toFieldValue(value) {
    const type = typeof value;
    if (type === "number") return value;
    if (type === "string") return value;
    throw new Error("Cannot set round type input to value of type " + type);
  }
}
class BlockInputNumber extends BlockInputRound {
  constructor(inputIdx, fieldIdx, defaultValue) {
    super(BlockInputType.NUMBER, inputIdx, fieldIdx, defaultValue);
  }
  _toFieldValue(value) {
    const type = typeof value;
    if (type === "number") return value;
    if (type === "string") {
      const number = parseFloat(value);
      if (isNaN(number)) throw new Error('Cannot set numeric type input to string "' + value + '".');
      return value;
    }
    throw new Error("Cannot set round type input to value of type " + type);
  }
}
class BlockInputBoolean extends BlockInput {
  constructor(inputIdx, fieldIdx) {
    super(BlockInputType.BOOLEAN, inputIdx, fieldIdx);
  }
  setValue(block, value) {
    if (value instanceof BlockInstance) {
      const subblock = value.createWorkspaceForm();
      if (!subblock.outputConnection || value.typeInfo.shape !== BlockShape.Boolean) throw new Error('Cannot put block "' + value.typeInfo.id + '" into a boolean type input.');
      subblock.outputConnection.connect(this.getInput(block).connection);
    } else {
      throw new Error("Boolean type inputs can only contain blocks.");
    }
  }
}
class BlockInputColour extends BlockInput {
  constructor(inputIdx, fieldIdx) {
    super(BlockInputType.COLOUR, inputIdx, fieldIdx);
  }
  setValue(block, value) {
    if (typeof value !== "string") throw new Error("Cannot set color type input to value of type " + typeof type);
    if (!value.match(/^#[0-9a-fA-F]{6}$/)) throw new Error('Invalid color "' + value + '".');
    this.getField(block).setValue(value);
  }
}

/**
 * @typedef BlockInputEnumOption
 * @property {string} value The internal name of this input option
 * @property {string} string The localized name of this input option.
 */

/**
 * A block input that can be one of a list of values.
 * Usually represented by a dropdown menu in Scratch.
 */
class BlockInputEnum extends BlockInput {
  /**
   * @param {Array} options
   * @param {number} inputIdx
   * @param {number} fieldIdx
   */
  constructor(options, inputIdx, fieldIdx, isRound) {
    super(BlockInputType.ENUM, inputIdx, fieldIdx);
    /** @type {BlockInputEnumOption[]} */
    this.values = [];
    for (let i = 0; i < options.length; i++) {
      if (typeof options[i][1] === "string" && BlockInputEnum.INVALID_VALUES.indexOf(options[i][1]) === -1) {
        this.values.push({
          value: options[i][1],
          string: options[i][0].replaceAll(String.fromCharCode(160), " ")
        });
      }
    }
    this.isRound = isRound;
  }

  /**
   * @param {BlockInputEnumOption} value
   */
  setValue(block, value) {
    if (this.isRound && value instanceof BlockInstance) {
      value.createWorkspaceForm().outputConnection.connect(this.getInput(block).connection);
    } else {
      if (this.values.indexOf(value) === -1) throw new Error("Invalid enum value. Expected item from the options list.");
      this.getField(block).setValue(value.value);
    }
  }
}

/**
 * A block input that is a stack of blocks.
 * The 'if' block has a single block input, the 'if else' block has two block inputs.
 */
_defineProperty(BlockInputEnum, "INVALID_VALUES", ["DELETE_VARIABLE_ID", "RENAME_VARIABLE_ID", "NEW_BROADCAST_MESSAGE_ID", "NEW_BROADCAST_MESSAGE_ID",
// editor-searchable-dropdowns compatibility
"createGlobalVariable", "createLocalVariable", "createGlobalList", "createLocalList", "createBroadcast",
// rename-broadcasts compatibility
"RENAME_BROADCAST_MESSAGE_ID"]);
class BlockInputBlock extends BlockInput {
  constructor(inputIdx, fieldIdx) {
    super(BlockInputType.BLOCK, inputIdx, fieldIdx);
  }
  setValue(block, value) {
    if (value instanceof BlockInstance) {
      const subblock = value.createWorkspaceForm();
      if (!subblock.previousConnection || !value.typeInfo.shape.canStackUp) throw new Error('Cannot put block "' + value.typeInfo.id + '" into a block type input.');
      subblock.previousConnection.connect(this.getInput(block).connection);
    } else {
      throw new Error("Block type inputs can only contain blocks.");
    }
  }
}

/**
 * Because everyone was thinking "You know what Scratch really needs, ANOTHER way to represent blocks!"
 *
 * Another way to represent a Scratch block.
 */
class BlockInstance {
  constructor(typeInfo) {
    /** @type {BlockTypeInfo} */
    this.typeInfo = typeInfo;
    /** @type {Array} */
    for (var _len = arguments.length, inputs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      inputs[_key - 1] = arguments[_key];
    }
    this.inputs = inputs;
  }

  /**
   * Creates a real Scratch block from this imaginary representation.
   * @returns {*} A 'workspace form' block.
   */
  createWorkspaceForm() {
    if (this.typeInfo.id === "control_stop") {
      this.typeInfo.domForm.querySelector("mutation").setAttribute("hasnext", "" + (this.inputs[0].value === "other scripts in sprite"));
    }
    const block = this.typeInfo.Blockly.Xml.domToBlock(this.typeInfo.domForm, this.typeInfo.workspace);
    for (let i = 0; i < this.inputs.length; i++) {
      if (this.inputs[i] !== null) this.typeInfo.inputs[i].setValue(block, this.inputs[i]);
    }
    return block;
  }
}

/**
 * An enum for the different shapes of blocks.
 * Contains information on what each type of block can do.
 */
class BlockShape {
  static getBlockShape(workspaceBlock) {
    if (workspaceBlock.edgeShape_ === 2) {
      return BlockShape.Round;
    } else if (workspaceBlock.edgeShape_ === 1) {
      return BlockShape.Boolean;
    } else if (workspaceBlock.startHat_) {
      return BlockShape.Hat;
    } else if (!workspaceBlock.nextConnection) {
      return BlockShape.End;
    } else {
      return BlockShape.Stack;
    }
  }
  constructor(canStackUp, canStackDown, canBeRound) {
    /** @type {boolean} Can blocks be stacked above this block? */
    this.canStackUp = canStackUp;
    /** @type {boolean} Can blocks be stacked below this block? */
    this.canStackDown = canStackDown;
    /** @type {boolean} Does this block fit into a round hole? */
    this.canBeRound = canBeRound;
  }
}

/**
 * @typedef BlockCategory
 * @property {string} name
 * @property {string} colorPrimary
 * @property {string} colorSecondary
 * @property {string} colorTertiary
 */

/**
 * A type of Scratch block, like 'move () steps'. Every instance of the 'move () steps'
 * block shares this type info.
 */
_BlockShape = BlockShape;
_defineProperty(BlockShape, "Round", new _BlockShape(false, false, true));
_defineProperty(BlockShape, "Boolean", new _BlockShape(false, false, true));
_defineProperty(BlockShape, "Hat", new _BlockShape(false, true, false));
_defineProperty(BlockShape, "End", new _BlockShape(true, false, false));
_defineProperty(BlockShape, "Stack", new _BlockShape(true, true, false));
class BlockTypeInfo {
  /**
   * @param {*} block Block in workspace form
   * @param {*} vm
   * @returns {BlockCategory} The block's category
   */
  static getBlockCategory(block, vm) {
    let name;
    if (block.type === "procedures_call") {
      if (vm.getAddonBlock(block.getProcCode())) name = "addon-custom-block";else name = "more";
    } else if (block.isScratchExtension) name = "pen";else if (block.type === "sensing_of") name = "sensing";else if (block.type === "event_whenbackdropswitchesto") name = "events";else name = block.category_;
    return {
      name,
      colorPrimary: block.colour_,
      colorSecondary: block.colourSecondary_,
      colorTertiary: block.colourTertiary_
    };
  }

  /**
   * Enumerates all the different types of blocks, given a workspace.
   * @param {Blockly} Blockly
   * @param {*} vm
   * @param {*} workspace
   * @param {(string) => string} locale The translations used for converting icons into text
   * @returns {BlockTypeInfo[]}
   */
  static getBlocks(Blockly, vm, workspace, locale) {
    var _workspace$getToolbox;
    const flyoutWorkspace = (_workspace$getToolbox = workspace.getToolbox()) === null || _workspace$getToolbox === void 0 ? void 0 : _workspace$getToolbox.flyout_.getWorkspace();
    if (!flyoutWorkspace) return [];
    const blocks = [];
    const flyoutDom = Blockly.Xml.workspaceToDom(flyoutWorkspace);
    const flyoutDomBlockMap = {};
    for (const blockDom of flyoutDom.children) {
      if (blockDom.tagName === "BLOCK") {
        let id = blockDom.getAttribute("id");
        flyoutDomBlockMap[id] = blockDom;
      }
    }
    for (const workspaceBlock of flyoutWorkspace.getTopBlocks()) {
      blocks.push(...BlockTypeInfo._createBlocks(workspace, vm, Blockly, locale, workspaceBlock, flyoutDomBlockMap[workspaceBlock.id]));
    }
    return blocks;
  }
  static _createBlocks(workspace, vm, Blockly, locale, workspaceForm, domForm) {
    let parts = [];
    let inputs = [];
    const addInput = input => {
      parts.push(input);
      inputs.push(input);
    };
    const addFieldInputs = (field, inputIdx, fieldIdx) => {
      if (field.className_ === "blocklyText blocklyDropdownText") {
        const options = field.getOptions();
        addInput(new BlockInputEnum(options, inputIdx, fieldIdx, fieldIdx === -1));
      } else if (field instanceof Blockly.FieldImage) {
        switch (field.src_) {
          case "static/blocks-media/green-flag.svg":
          case "static/blocks-media/blue-flag.svg":
            parts.push("flag");
            break;
          case "static/blocks-media//icons/control_stop.svg":
          case "static/blocks-media/icons/control_stop.svg":
            parts.push("stop");
            break;
          case "static/blocks-media/rotate-right.svg":
            parts.push("clockwise");
            break;
          case "static/blocks-media/rotate-left.svg":
            parts.push("anti-clockwise");
            break;
        }
      } else {
        if (!field.argType_) {
          if (field.getText().trim().length !== 0) parts.push(field.getText());
        } else if (field.argType_[0] === "colour") {
          addInput(new BlockInputColour(inputIdx, fieldIdx));
        } else if (field.argType_[1] === "number") {
          addInput(new BlockInputNumber(inputIdx, fieldIdx, field.text_));
        } else {
          addInput(new BlockInputString(inputIdx, fieldIdx, field.text_));
        }
      }
    };
    for (let inputIdx = 0; inputIdx < ((_workspaceForm$inputL = workspaceForm.inputList) === null || _workspaceForm$inputL === void 0 ? void 0 : _workspaceForm$inputL.length); inputIdx++) {
      var _workspaceForm$inputL;
      const input = workspaceForm.inputList[inputIdx];
      for (let fieldIdx = 0; fieldIdx < input.fieldRow.length; fieldIdx++) {
        addFieldInputs(input.fieldRow[fieldIdx], inputIdx, fieldIdx);
      }
      if (input.connection) {
        const innerBlock = input.connection.targetBlock();
        if (innerBlock) {
          if (!(innerBlock.inputList.length !== 1 || innerBlock.inputList[0].fieldRow.length !== 1)) {
            let innerField = innerBlock.inputList[0].fieldRow[0];
            addFieldInputs(innerField, inputIdx, -1);
          }
        } else {
          if (input.outlinePath) {
            addInput(new BlockInputBoolean(inputIdx, -1));
          } else {
            addInput(new BlockInputBlock(inputIdx, -1));
          }
        }
      }
    }
    if (workspaceForm.id === "of") {
      let blocks = [];
      let baseVarInputIdx, baseTargetInputIdx;
      // In most languages, the 'of' block inputs are: [variable] of [sprite], and in others
      // it's the opposite (sprite then variable). We can tell that the variable comes first
      // if the first input is round.
      if (inputs[0].isRound) {
        baseVarInputIdx = 1;
        baseTargetInputIdx = 0;
      } else {
        baseVarInputIdx = 0;
        baseTargetInputIdx = 1;
      }
      let baseVarInput = inputs[baseVarInputIdx];
      let baseTargetInput = inputs[baseTargetInputIdx];
      const baseVarPartIdx = parts.indexOf(baseVarInput);
      const baseTargetPartIdx = parts.indexOf(baseTargetInput);

      // Adapted from https://github.com/scratchfoundation/scratch-gui/blob/cc6e6324064493cf1788f3c7c0ff31e4057964ee/src/lib/blocks.js#L230
      const stageOptions = [[Blockly.Msg.SENSING_OF_BACKDROPNUMBER, "backdrop #"], [Blockly.Msg.SENSING_OF_BACKDROPNAME, "backdrop name"], [Blockly.Msg.SENSING_OF_VOLUME, "volume"]];
      const spriteOptions = [[Blockly.Msg.SENSING_OF_XPOSITION, "x position"], [Blockly.Msg.SENSING_OF_YPOSITION, "y position"], [Blockly.Msg.SENSING_OF_DIRECTION, "direction"], [Blockly.Msg.SENSING_OF_COSTUMENUMBER, "costume #"], [Blockly.Msg.SENSING_OF_COSTUMENAME, "costume name"], [Blockly.Msg.SENSING_OF_SIZE, "size"], [Blockly.Msg.SENSING_OF_VOLUME, "volume"]];
      for (const targetInput of baseTargetInput.values) {
        let options;
        const isStage = targetInput.value === "_stage_";
        if (isStage) {
          const stageVariableOptions = vm.runtime.getTargetForStage().getAllVariableNamesInScopeByType("");
          options = stageVariableOptions.map(variable => [variable, variable]).concat(stageOptions);
        } else {
          const sprite = vm.runtime.getSpriteTargetByName(targetInput.value);
          const spriteVariableOptions = sprite.getAllVariableNamesInScopeByType("", true);
          options = spriteVariableOptions.map(variable => [variable, variable]).concat(spriteOptions);
        }
        const ofInputs = [];
        ofInputs[baseVarInputIdx] = new BlockInputEnum(options, baseVarInput.inputIdx, baseVarInput.fieldIdx, false);
        ofInputs[baseTargetInputIdx] = new BlockInputEnum([[targetInput.string, targetInput.value]], baseTargetInput.inputIdx, baseTargetInput.fieldIdx, isStage);
        const ofParts = [...parts];
        ofParts[baseVarPartIdx] = ofInputs[baseVarInputIdx];
        ofParts[baseTargetPartIdx] = ofInputs[baseTargetInputIdx];
        blocks.push(new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, ofParts, ofInputs));
      }
      return blocks;
    }
    return [new BlockTypeInfo(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs)];
  }
  constructor(workspace, Blockly, vm, workspaceForm, domForm, parts, inputs) {
    /** @type {string} */
    this.id = workspaceForm.id;
    this.workspaceForm = workspaceForm;
    this.domForm = domForm;
    /** @type {BlockShape} */
    this.shape = BlockShape.getBlockShape(this.workspaceForm);
    /** @type {BlockCategory} */
    this.category = BlockTypeInfo.getBlockCategory(this.workspaceForm, vm);
    this.workspace = workspace;
    this.Blockly = Blockly;

    /**
     * A list of all the 'parts' of this block. Each part is either an instance
     * of BlockInput or a string for some text which is a part of a block.
     *
     * For example, for the 'say' block, the first element of the array would be
     * the string 'say', and the second element would be a BlockInput of type
     * BlockInputString.
     * @type {(BlockInput | string)[]}
     */
    this.parts = parts;
    /**
     * A list of all this block's inputs. The same as this.parts, but with the
     * strings omitted.
     * @type {BlockInput[]}
     */
    this.inputs = inputs;
  }

  /**
   * Creates a block of this type with the given inputs
   * @param  {...any} inputs
   * @returns {BlockInstance}
   */
  createBlock() {
    for (var _len2 = arguments.length, inputs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      inputs[_key2] = arguments[_key2];
    }
    return new BlockInstance(this, ...inputs);
  }
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/WorkspaceQuerier.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/WorkspaceQuerier.js ***!
  \******************************************************************/
/*! exports provided: QueryResult, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryResult", function() { return QueryResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WorkspaceQuerier; });
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
var _TokenTypeBlank, _TokenTypeColor;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * @file Contains all the logic for the parsing of queries by the {@link WorkspaceQuerier}.
 * I'm really sorry if somebody other than me ever has to debug this.
 * Wish you luck <3
 *
 * Once you *think* you understand the function of the major classes, read the docs on
 * {@link WorkspaceQuerier._createTokenGroups} for some more specifics on the algorithm works,
 * and to achieve maximum enlightenment.
 *
 * @author Tacodiva
 */



/**
 *
 * A token is a part of a query that is interpreted in a specific way.
 *
 * In the query 'say 1 = Hello World', the base tokens are 'say', '1', '=, and 'Hello World'.
 * Each token contains where in the query it is located and what {@link TokenType} it is.
 *
 * Sometimes the same section of a query has multiple tokens because there are different
 * interpretations of what type of token it is. For example, imagine you had a variable named
 * 'x'. The query 'set x to 10', is ambiguous because you could be referring to the motion block
 * `set x to ()` or the data block `set [x] to ()`. This ambiguity results in two different
 * tokens being creating for 'x', one is 'set x to' referring to the motion block, and the other
 * is just 'x', referring to the variable.
 *
 * Calling this a 'token' is somewhat misleading, often language interpreters will have a 'parse tree'
 * with tokens and an 'abstract syntax tree' with higher level elements, but I have chosen to make these
 * two trees one in the same. Because of this, every token represents a logical part of a block.
 * Going back to the 'say 1 = Hello World' example, there are two 'parent' tokens, both are of type
 * {@link TokenTypeBlock}. The first is for the equals block, which contains three subtokens; '1',
 * '=' and 'Hello World'. The second is the say block, whos first child is 'say' and second child is
 * the token for the equals block (which itself has three children). For a query result to be valid,
 * it must have a token which encapsulates the entire query, in this case the say block token starts
 * at the first letter and ends at the last letter, so it's a valid interpretation. The token which
 * encapsulates the whole query is referred to as the root token.
 */
class Token {
  /**
   * @param {number} start
   * @param {number} end
   * @param {TokenType} type
   * @param {*} value
   * @param {number} score
   * @param {number} precedence
   * @param {boolean} isTruncated
   * @param {boolean} isLegal
   */
  constructor(start, end, type, value) {
    let score = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 100;
    let precedence = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : -1;
    let isTruncated = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
    let isLegal = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : true;
    /** @type {number} The index of the first letter of this token in the query */
    this.start = start;
    /** @type {number} The index of the last letter of this token in the query */
    this.end = end;
    /** @type {TokenType} The type of this token. */
    this.type = type;
    /** @type {*} Additional information about this token, controlled and interpreted by the token type. */
    this.value = value;
    /**
     * A number which represents how 'good' this interpretation of the query is. This value is used
     * to order the results once the query is finished from best to worst ('best' being the result we
     * think is most likely the interpretation the user intended).
     * The score of a parent block incorporates the scores of its children so results are ordered based
     * on the score of their root token.
     * @type {number}
     */
    this.score = score;
    /**
     * The precedence of this token, used to implement order of operations. Tokens with a higher
     * precedence should be evaluated *after* those with a lower precedence. Brackets have a
     * precedence of 0 so they are always evaluated first. A precedence of -1 means that precedence
     * is not specified and the parser makes no guarantees about the order of operations.
     * @type {number}
     */
    this.precedence = precedence;
    /**
     * Sometimes, tokens are truncated. Imagine the query 'say Hello for 10 se', here the last
     * token should be 'seconds', but it's truncated. For this token, the isTruncated value is set
     * to true. Additionally, the token for the whole block (which contains the tokens 'say', 'Hello',
     * 'for', '10' and 'se') also has it's isTruncated value set to true, because it contains a
     * truncated token.
     * @type {boolean}
     */
    this.isTruncated = isTruncated;
    /**
     * Used to generate autocomplete text, even if that autocomplete text doesn't make a valid query
     * by itself. For example in the query 'if my varia', we want to autocomplete to 'my variable',
     * but the query 'if my variable' is still not valid, because my variable is not a boolean. In
     * this case, the 'my variable' token would still be emitted as the second child of the 'if' token,
     * but it would be marked as illegal.
     */
    this.isLegal = isLegal;
  }

  /**
   * @see {TokenType.createBlockValue}
   * @param {QueryInfo} query
   * @returns
   */
  createBlockValue(query) {
    return this.type.createBlockValue(this, query);
  }
}

/**
 * The parent of any class that can enumerate tokens given a query and a location within that
 * query to search.
 *
 * As the same position in a query can have multiple interpretations (see {@link Token}), every
 * token provider's {@link parseTokens} method can return multiple tokens for the same index.
 *
 * Like tokens, there is a token provider tree. See {@link WorkspaceQuerier._createTokenGroups}
 * for more info on this tree.
 *
 * @abstract
 */
class TokenProvider {
  constructor(shouldCache) {
    if (this.constructor === TokenProvider) throw new Error("Abstract classes can't be instantiated.");
    /**
     * Can the results of this token provider be stored? True
     * if {@link parseTokens} will always return the same thing for the same inputs or if
     * this token provider already caches it's result, so caching it again is redundant.
     * @type {boolean}
     */
    this.shouldCache = shouldCache;
  }

  /**
   * Return the tokens found by this token provider in `query` at character `idx`.
   * @param {QueryInfo} query The query to search
   * @param {number} idx The index to start the search at
   * @yields {Token} All the tokens found
   * @abstract
   */
  // eslint-disable-next-line require-yield
  *parseTokens(query, idx) {
    throw new Error("Sub-class must override abstract method.");
  }
}

/**
 * A token provider which wraps around another token provider, always returning a blank token in
 * addition to whatever the inner token provider returns.
 *
 * Used for tokens that can possibility be omitted, like numbers. For example, the '+' block always
 * needs three inputs, but the user could query '1 +'. In this case its subtokens are '1', '+' and
 * a {@link TokenTypeBlank}, provided by this provider.
 */
class TokenProviderOptional extends TokenProvider {
  /**
   * @param {TokenProvider} inner
   */
  constructor(inner) {
    super(inner.shouldCache);
    /** @type {TokenProvider} The inner token provider to return along with the blank token. */
    this.inner = inner;
  }
  *parseTokens(query, idx) {
    yield TokenTypeBlank.INSTANCE.createToken(idx);
    yield* this.inner.parseTokens(query, idx);
  }
}

/**
 * Caches the output of an inner token provider.
 * Used for tokens that are a part of multiple token provider groups.
 */
class TokenProviderSingleCache extends TokenProvider {
  /**
   * @param {TokenProvider} inner
   */
  constructor(inner) {
    super(false);
    /** @type {TokenProvider} */
    this.inner = inner;
    if (this.inner.shouldCache) {
      /** @type {Token[]?} */
      this.cache = [];
      /** @type {number?} */
      this.cacheQueryID = null;
    }
  }
  *parseTokens(query, idx) {
    if (!this.inner.shouldCache) {
      yield* this.inner.parseTokens();
      return;
    }
    if (this.cacheQueryID !== query.id) {
      this.cache = [];
      this.cacheQueryID = query.id;
    }
    let cacheEntry = this.cache[idx];
    if (cacheEntry) {
      yield* cacheEntry;
      return;
    }
    this.cacheEntry = [];
    for (const token of this.inner.parseTokens(query, idx)) {
      this.cacheEntry.push(token);
      yield token;
    }
  }
}

/**
 * Collects multiple inner token providers into one token provider group.
 * Additionally, caches the results of all the cacheable inner token providers.
 */
class TokenProviderGroup extends TokenProvider {
  constructor() {
    // No need to cache this as it already caches it's own output.
    super(false);
    /** @type {TokenProvider[]} The providers that make up this group */
    this.providers = [];
    /** @type {TokenProvider[]} Providers that are a part of the group, but tokens they produce are illegal */
    this.illegalProviders = [];
    /** @type {Object<number, CacheEntry>?} The cache */
    this.cache = null;
    /** @type {number?} The query ID of the query whos results are currently cached */
    this.cacheQueryID = null;
    /** @type {boolean} Are any of our inner tokens cacheable? */
    this.hasCacheable = false;
  }

  /**
   * @typedef CacheEntry
   * @property {Token[][]} tokenCaches
   * @property {TokenProvider[][]} providerCaches
   */

  /**
   * Adds token providers to this token provider group.
   * @param {TokenProvider[]} providers
   * @param {boolean} legal Are the results of this provider legal in the current context?
   */
  pushProviders(providers) {
    let legal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    if (!this.hasCacheable) for (const provider of providers) {
      if (provider.shouldCache) {
        this.hasCacheable = true;
        break;
      }
    }
    if (legal) this.providers.push(...providers);else this.illegalProviders.push(...providers);
  }
  *parseTokens(query, idx) {
    // If none of our providers are cacheable, just parse all the tokens again
    if (!this.hasCacheable) {
      for (const provider of this.providers) yield* provider.parseTokens(query, idx, false);
      return;
    }

    // If the query ID has changed, the cache is no longer valid
    if (this.cacheQueryID !== query.id) {
      this.cache = [];
      this.cacheQueryID = query.id;
    } else {
      // Otherwise, search for a cache entry for idx
      const cacheEntry = this.cache[idx];
      if (cacheEntry) {
        // If we find one, yield all the cached results
        const tokenCaches = cacheEntry.tokenCaches;
        const providerCaches = cacheEntry.providerCaches;
        for (let i = 0; i < tokenCaches.length; i++) {
          const tokenCache = tokenCaches[i];
          const providerCache = providerCaches[i];
          for (const provider of providerCache) yield* provider.parseTokens(query, idx, false);
          yield* tokenCache;
        }
        return;
      }
    }

    // No applicable cache entry was found :(
    // Call all our child token providers and create a new cache entry

    let tokenCache = [];
    let providerCache = [];
    const tokenCaches = [tokenCache];
    const providerCaches = [providerCache];
    this.cache[idx] = {
      tokenCaches,
      providerCaches
    };
    for (const provider of this.providers) {
      if (provider.shouldCache) {
        for (const token of provider.parseTokens(query, idx, false)) {
          tokenCache.push(token);
          yield token;
        }
      } else {
        if (tokenCache.length !== 0) {
          tokenCache = [];
          providerCache = [];
          tokenCaches.push(tokenCache);
          providerCaches.push(providerCache);
        }
        providerCache.push(provider);
        yield* provider.parseTokens(query, idx, false);
      }
    }
    for (const provider of this.illegalProviders) {
      for (let token of provider.parseTokens(query, idx, false)) {
        token = _objectSpread(_objectSpread({}, token), {}, {
          isLegal: false
        });
        tokenCache.push(token);
        yield token;
      }
    }
  }
}

/**
 * A class representing the type of a token (see {@link Token.type})
 *
 * All token types extend from {@link TokenProvider} and they provide all the tokens
 * of their type they can find.
 *
 * @abstract
 */
class TokenType extends TokenProvider {
  constructor() {
    let dontCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    super(!dontCache);
    if (this.constructor === TokenType) throw new Error("Abstract classes can't be instantiated.");

    /**
     * If we see this token, should we know what block it's connected to?
     *
     * For example, in the query 'say Hi', 'say' is a defining feature because
     * we can narrow down what block it's from based only the fact that it's present.
     * 'Hi', however, is not a defining feature as it could be a part of lots of
     * different blocks.
     *
     * This is used to help eliminate some dodgey interpretations of queries, if a block
     * has no subtokens marked a defining feature it's disguarded.
     * @type {boolean}
     */
    this.isDefiningFeature = false;
    /** @type {boolean} Is this token type always represented by the same string of characters? */
    this.isConstant = false;
  }

  /**
   * Turns `token` into a value which can be passed into the {@link BlockInstance} constructor.
   * For example, in string literal tokens, this gets the string value of the token which can then
   * be used to create a block.
   * @param {Token} token
   * @param {QueryInfo} query
   * @returns {*}
   */
  createBlockValue(token, query) {
    return token.value;
  }

  /**
   * Creates the string form of this token in the same format that was used in the query.
   * If the token was only partially typed in the query, creating the text will complete the token.
   * @param {Token} token
   * @param {QueryInfo} query
   * @param {boolean} endOnly Should we only append to the end of the query. If this is false, we
   * can create text in the middle of the query that wasn't there. This is used to autocomplete
   * {@link StringEnum.GriffTokenType} tokens in the middle of a query.
   * @returns {string}
   */
  createText(token, query, endOnly) {
    throw new Error("Sub-class must override abstract method.");
  }

  /**
   * @param {Token} token
   * @param {QueryInfo} query
   * @returns {Token[]}
   */
  getSubtokens(token, query) {
    return undefined;
  }
}

/**
 * The type for tokens that represent an omitted field.
 * Used by {@link TokenProviderOptional}
 */
class TokenTypeBlank extends TokenType {
  constructor() {
    super();
    this.isConstant = true;
  }
  *parseTokens(query, idx) {
    yield this.createToken(idx);
  }

  /**
   * Create a new blank token
   * @param {number} idx The position of the blank token
   * @returns {Token}
   */
  createToken(idx) {
    return new Token(idx, idx, this, null, -5000);
  }
  createText(token, query) {
    return "";
  }
}

/**
 * Represents a token whos value must be one of a predetermined set of strings.
 * For example, a token for a dropdown menu (like the one in `set [my variable] to x`) is a
 * string enum, because the value must be one of a set of strings.
 *
 * String enums are also used for values that can only be one specific value (like the 'set' from
 * `set [my variable] to x`). These cases are just string enums with one possible value.
 */
_TokenTypeBlank = TokenTypeBlank;
_defineProperty(TokenTypeBlank, "INSTANCE", new _TokenTypeBlank());
class TokenTypeStringEnum extends TokenType {
  /**
   * @typedef StringEnumValue
   * @property {string} value The string that needs to be in the query
   * @property {string} lower Cached value.toLowerCase()
   * @property {string[]} parts lower, split up by ignoreable characters.
   */

  /**
   * @param {(import("./BlockTypeInfo").BlockInputEnumOption[]} values
   */
  constructor(values) {
    super();
    this.isConstant = values.length === 1;
    this.isDefiningFeature = true;

    /** @type {StringEnumValue[]} */
    this.values = [];
    for (const value of values) {
      let lower = value.string.toLowerCase();
      // Strip emoji
      lower = lower.replaceAll(/[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299\u{1F004}\u{1F02C}-\u{1F02F}\u{1F094}-\u{1F09F}\u{1F0AF}\u{1F0B0}\u{1F0C0}\u{1F0CF}\u{1F0D0}\u{1F0F6}-\u{1F0FF}\u{1F170}\u{1F171}\u{1F17E}\u{1F17F}\u{1F18E}\u{1F191}-\u{1F19A}\u{1F1AE}-\u{1F1E5}\u{1F201}-\u{1F20F}\u{1F21A}\u{1F22F}\u{1F232}-\u{1F23A}\u{1F23C}-\u{1F23F}\u{1F249}-\u{1F25F}\u{1F266}-\u{1F321}\u{1F324}-\u{1F393}\u{1F396}\u{1F397}\u{1F399}-\u{1F39B}\u{1F39E}-\u{1F3F0}\u{1F3F3}-\u{1F3F5}\u{1F3F7}-\u{1F3FA}\u{1F400}-\u{1F4FD}\u{1F4FF}-\u{1F53D}\u{1F549}-\u{1F54E}\u{1F550}-\u{1F567}\u{1F56F}\u{1F570}\u{1F573}-\u{1F57A}\u{1F587}\u{1F58A}-\u{1F58D}\u{1F590}\u{1F595}\u{1F596}\u{1F5A4}\u{1F5A5}\u{1F5A8}\u{1F5B1}\u{1F5B2}\u{1F5BC}\u{1F5C2}-\u{1F5C4}\u{1F5D1}-\u{1F5D3}\u{1F5DC}-\u{1F5DE}\u{1F5E1}\u{1F5E3}\u{1F5E8}\u{1F5EF}\u{1F5F3}\u{1F5FA}-\u{1F64F}\u{1F680}-\u{1F6C5}\u{1F6CB}-\u{1F6D2}\u{1F6D5}-\u{1F6E5}\u{1F6E9}\u{1F6EB}-\u{1F6F0}\u{1F6F3}-\u{1F6FF}\u{1F7DA}-\u{1F7FF}\u{1F80C}-\u{1F80F}\u{1F848}-\u{1F84F}\u{1F85A}-\u{1F85F}\u{1F888}-\u{1F88F}\u{1F8AE}\u{1F8AF}\u{1F8BC}-\u{1F8BF}\u{1F8C2}-\u{1F8CF}\u{1F8D9}-\u{1F8FF}\u{1F90C}-\u{1F93A}\u{1F93C}-\u{1F945}\u{1F947}-\u{1F9FF}\u{1FA58}-\u{1FA5F}\u{1FA6E}-\u{1FAFF}\u{1FC00}-\u{1FFFD}]/gu, "");
      const parts = [];
      {
        let lastPart = 0;
        for (let i = 0; i <= lower.length; i++) {
          const char = lower[i];
          if (QueryInfo.IGNORABLE_CHARS.indexOf(char) !== -1 || !char) {
            parts.push(lower.substring(lastPart, i));
            i = QueryInfo.skipIgnorable(lower, i);
            lastPart = i;
          }
        }
      }
      this.values.push({
        lower,
        parts,
        value
      });
    }
  }
  *parseTokens(query, idx) {
    for (let valueIdx = 0; valueIdx < this.values.length; valueIdx++) {
      const valueInfo = this.values[valueIdx];
      let yieldedToken = false;
      const remainingChar = query.length - idx;
      if (remainingChar < valueInfo.lower.length) {
        if (valueInfo.lower.startsWith(query.lowercase.substring(idx))) {
          const end = remainingChar < 0 ? 0 : query.length;
          yield new Token(idx, end, this, valueInfo, 100000, undefined, true);
          yieldedToken = true;
        }
      } else {
        if (query.lowercase.startsWith(valueInfo.lower, idx) && TokenTypeStringLiteral.TERMINATORS.indexOf(query.lowercase[idx + valueInfo.lower.length]) !== -1) {
          yield new Token(idx, idx + valueInfo.lower.length, this, valueInfo, 100000);
          yieldedToken = true;
        }
      }
    }
  }
  createBlockValue(token, query) {
    return token.value.value;
  }
  createText(token, query, endOnly) {
    if (!token) return this.values[0].lower;
    return token.value.lower;
  }
}

/**
 * The token type for a literal string, like 'Hello World' in the query `say Hello World`
 */
class TokenTypeStringLiteral extends TokenType {
  /**
   * Each time we encounter a 'terminator' we have to return the string we've read so far as a
   * possible interpretation. If we didn't, when looking for a string at index 4 of 'say Hello
   * World for 10 seconds' we would just return 'Hello World for 10 seconds', leading to the
   * only result being `say "Hello World for 10 seconds"`. This also means in addition to
   * 'Hello World' we also return 'Hello', 'Hello World for', 'Hello World for 10' and '
   * Hello World for 10 seconds', but that's just the price we pay for trying to enumerate every
   * interpretation.
   */
  *parseTokens(query, idx) {
    // First, look for strings in quotes
    let quoteEnd = -1;
    if (query.str[idx] === '"' || query.str[idx] === '"') {
      const quote = query.str[idx];
      for (let i = idx + 1; i <= query.length; i++) {
        if (query.str[i] === "\\") {
          ++i;
        } else if (query.str[i] === quote) {
          yield new Token(idx, i + 1, this, query.str.substring(idx + 1, i), 100000);
          quoteEnd = i + 1;
          break;
        }
      }
    }
    // Then all the other strings
    let wasTerminator = false,
      wasIgnorable = false;
    for (let i = idx; i <= query.length; i++) {
      const isTerminator = TokenTypeStringLiteral.TERMINATORS.indexOf(query.str[i]) !== -1;
      if (wasTerminator !== isTerminator && !wasIgnorable && i !== idx && i !== quoteEnd) {
        const value = query.str.substring(idx, i);
        let score = -10;
        if (TokenTypeNumberLiteral.isValidNumber(value)) score = 1000;
        yield new Token(idx, i, this, value, score);
      }
      wasTerminator = isTerminator;
      wasIgnorable = QueryInfo.IGNORABLE_CHARS.indexOf(query.str[i]) !== -1;
    }
  }
  createText(token, query, endOnly) {
    return query.str.substring(token.start, token.end);
  }
}

/**
 * The token type for a literal number, like 69 in the query 'Hello + 69'
 * This token type also supports numbers in formats scratch doesn't let you type,
 * but accepts like '0xFF', 'Infinity' or '1e3'.
 */
_defineProperty(TokenTypeStringLiteral, "TERMINATORS", [undefined, " ", "+", "-", "*", "/", "=", "<", ">", ")"]);
class TokenTypeNumberLiteral extends TokenType {
  static isValidNumber(str) {
    return !isNaN(str) && !isNaN(parseFloat(str));
  }
  *parseTokens(query, idx) {
    for (let i = idx; i <= query.length; i++) {
      if (TokenTypeStringLiteral.TERMINATORS.indexOf(query.str[i]) !== -1 && i !== idx) {
        const value = query.str.substring(idx, i);
        if (TokenTypeNumberLiteral.isValidNumber(value)) {
          yield new Token(idx, i, this, value, 100000);
          break;
        }
      }
    }
  }
  createText(token, query, endOnly) {
    return query.str.substring(token.start, token.end);
  }
}

/**
 * A token type for literal colors, like '#ffffff' for white.
 */
class TokenTypeColor extends TokenType {
  *parseTokens(query, idx) {
    if (!query.str.startsWith("#", idx)) return;
    for (let i = 0; i < 6; i++) {
      if (TokenTypeColor.HEX_CHARS.indexOf(query.lowercase[idx + i + 1]) === -1) return;
    }
    yield new Token(idx, idx + 7, this, query.str.substring(idx, idx + 7));
  }
  createText(token, query, endOnly) {
    return query.query.substring(token.start, token.end);
  }
}

/**
 * A token type for tokens that are in brackets, like (1 + 1) in '(1 + 1) * 2'.
 */
_TokenTypeColor = TokenTypeColor;
_defineProperty(TokenTypeColor, "INSTANCE", new TokenProviderOptional(new _TokenTypeColor()));
_defineProperty(TokenTypeColor, "HEX_CHARS", ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]);
class TokenTypeBrackets extends TokenType {
  /**
   * @param {TokenProvider} tokenProvider
   */
  constructor(tokenProvider) {
    super();
    /** @type {TokenProvider} The tokens to look for between the brackets */
    this.tokenProvider = tokenProvider;
  }
  *parseTokens(query, idx) {
    const start = idx;
    if (query.str[idx++] !== "(") return;
    idx = query.skipIgnorable(idx);
    for (const token of this.tokenProvider.parseTokens(query, idx)) {
      if (token.type instanceof TokenTypeBlank) continue; // Do not allow empty brackets like '()'
      var tokenEnd = query.skipIgnorable(token.end);
      let isTruncated = token.isTruncated;
      if (!isTruncated) {
        if (tokenEnd === query.length) isTruncated = true;else if (query.str[tokenEnd] === ")") ++tokenEnd;else continue;
      }
      // Note that for bracket tokens, precedence = 0
      const newToken = new Token(start, tokenEnd, this, token.value, token.score + 100, 0, isTruncated, token.isLegal);
      newToken.innerToken = token;
      yield newToken;
    }
  }
  createBlockValue(token, query) {
    return token.innerToken.createBlockValue(token.innerToken, query);
  }
  createText(token, query, endOnly) {
    let text = "(";
    text += query.str.substring(token.start + 1, token.innerToken.start);
    text += token.innerToken.type.createText(token.innerToken, query, endOnly);
    if (token.innerToken.end !== token.end) text += query.str.substring(token.innerToken.end, token.end - 1);
    text += ")";
    return text;
  }
  getSubtokens(token, query) {
    return [token.innerToken];
  }
}

/**
 * The token type for a block, like 'say Hello' or '1 + 1'.
 */
class TokenTypeBlock extends TokenType {
  /**
   * @param {WorkspaceQuerier} querier
   * @param {BlockInstance} block
   * @private
   */
  constructor(querier, block) {
    var _this;
    super();
    _this = this;
    this.block = block;
    this.hasSubTokens = true;
    /**
     * The list of token types that make up this block.
     *
     * For example, for the non-griff version of the 'say' block this array would contains two
     * providers, the first is a {@link StringEnum.FullTokenType} containing only the value 'say'
     * and the second is equal to querier.tokenGroupString.
     *
     * @type {TokenProvider[]}
     */
    this.fullTokenProviders = [];
    for (const blockPart of block.parts) {
      let fullTokenProvider;
      if (typeof blockPart === "string") {
        fullTokenProvider = new TokenTypeStringEnum([{
          value: null,
          string: blockPart
        }]);
      } else {
        switch (blockPart.type) {
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].ENUM:
            fullTokenProvider = new TokenTypeStringEnum(blockPart.values);
            if (blockPart.isRound) {
              const enumGroup = new TokenProviderGroup();
              enumGroup.pushProviders([fullTokenProvider, querier.tokenGroupRoundBlocks]);
              fullTokenProvider = enumGroup;
            }
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].STRING:
            fullTokenProvider = querier.tokenGroupString;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].NUMBER:
            fullTokenProvider = querier.tokenGroupNumber;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].COLOUR:
            fullTokenProvider = TokenTypeColor.INSTANCE;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].BOOLEAN:
            fullTokenProvider = querier.tokenGroupBoolean;
            break;
          case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].BLOCK:
            fullTokenProvider = querier.tokenGroupStack;
            break;
        }
      }
      this.fullTokenProviders.push(fullTokenProvider);
    }

    /**
     * @type {{strings: string[], inputs: [], score: number}[]}
     */
    this.stringForms = [];
    const _enumerateStringForms = function enumerateStringForms() {
      let partIdx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      let strings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      let inputs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
      for (; partIdx < block.parts.length; partIdx++) {
        let blockPart = block.parts[partIdx];
        if (typeof blockPart === "string") {
          strings.push(...blockPart.toLowerCase().split(" "));
        } else if (blockPart.type === _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockInputType"].ENUM) {
          for (const enumValue of blockPart.values) {
            _enumerateStringForms(partIdx + 1, [...strings, ...enumValue.string.toLowerCase().split(" ")], [...inputs, enumValue]);
          }
          return;
        } else {
          inputs.push(null);
        }
      }
      const flattedMap = strings.flatMap(s => s.length);
      const score = -10 * (flattedMap.length ? flattedMap.reduce((a, b) => a + b + 1) : 1);
      _this.stringForms.push({
        strings,
        inputs,
        score
      });
    };
    _enumerateStringForms();
  }

  /**
   *
   * @param {QueryInfo} query
   * @param {*} idx
   * @returns
   */
  *parseTokens(query, idx) {
    let yieldedTokens = false;
    for (const subtokens of this._parseSubtokens(query, idx, this.fullTokenProviders)) {
      let token = this._createToken(query, idx, this.fullTokenProviders, subtokens);
      if (token) {
        yield token;
        yieldedTokens = true;
      }
    }
    if (yieldedTokens) return;
    outer: for (const stringForm of this.stringForms) {
      let lastPartIdx = -1;
      let i = idx;
      let hasDefiningFeature = false;
      while (i < query.length) {
        i = query.skipIgnorable(i);
        const wordEnd = query.skipUnignorable(i);
        if (wordEnd === i) {
          yield new Token(idx, wordEnd, this, {
            stringForm,
            lastPartIdx: -1
          }, stringForm.score, -1, false);
        } else {
          const word = query.lowercase.substring(i, wordEnd);
          let match = -1;
          for (let formPartIdx = lastPartIdx + 1; formPartIdx < stringForm.strings.length; formPartIdx++) {
            const stringFormPart = stringForm.strings[formPartIdx];
            if (stringFormPart.startsWith(word)) {
              match = formPartIdx;
              break;
            }
          }
          if (match === -1) continue outer;
          lastPartIdx = match;
          hasDefiningFeature || (hasDefiningFeature = !TokenTypeNumberLiteral.isValidNumber(word));
          if (hasDefiningFeature) yield new Token(idx, wordEnd, this, {
            stringForm,
            lastPartIdx,
            i
          }, stringForm.score, -1, false);
          i = wordEnd;
        }
      }
    }
  }

  /**
   * @private
   * @param {QueryInfo} query
   * @param {number} idx
   * @param {TokenProvider[]} subtokenProviders
   * @param {Token[]} subtokens
   * @returns {Token?}
   */
  _createToken(query, idx, subtokenProviders, subtokens) {
    subtokens.reverse();
    let score = 0;
    let isLegal = true;
    let isTruncated = subtokens.length < subtokenProviders.length;
    let hasDefiningFeature = false;

    // Calculate the score of this block, through a lot of arbitrary math that seems to work ok.

    for (const subtoken of subtokens) {
      isTruncated |= subtoken.isTruncated; // If any of our kids are truncated, so are we
      isLegal && (isLegal = subtoken.isLegal); // If any of our kids are illegal, so are we
      if (!subtoken.isTruncated) score += subtoken.score;else score += subtoken.score / 100000 - 10; // Big score penalty if truncated
      if (subtoken.type.isDefiningFeature && subtoken.start < query.length) hasDefiningFeature = true;
    }
    score += Math.floor(1000 * (subtokens.length / subtokenProviders.length));

    /** See {@link TokenType.isDefiningFeature} */
    if (!hasDefiningFeature) return null;
    const end = query.skipIgnorable(subtokens[subtokens.length - 1].end);
    return new Token(idx, end, this, {
      subtokens
    }, score, this.block.precedence, isTruncated, isLegal);
  }

  /**
   * Parse all the tokens from this.tokenProviders[tokenProviderIdx] then
   * recursively call this for the next token. Returns a list of tokens for
   * each combination of possible interpretations of the subtokens.
   *
   * Note that the tokens in the returned token arrays are in reverse to the
   * order of their providers in this.tokenProviders, just to confuse you :P
   *
   * @private
   * @param {QueryInfo} query
   * @param {number} idx
   * @param {TokenProvider[]} subtokenProviders
   * @param {number} tokenProviderIdx
   * @param {boolean} parseSubSubTokens
   * @yields {Token[]}
   */
  _parseSubtokens(query, idx, subtokenProviders) {
    var _this2 = this;
    let tokenProviderIdx = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    let parseSubSubTokens = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    return function* () {
      idx = query.skipIgnorable(idx);
      let tokenProvider = subtokenProviders[tokenProviderIdx];
      for (const token of tokenProvider.parseTokens(query, idx)) {
        ++query.tokenCount;
        if (!query.canCreateMoreTokens()) break;
        if (_this2.block.precedence !== -1) {
          // If we care about the precedence of this block
          // Discard this token if its precedence is higher than ours, meaning it should be calculated
          //  before us not afterward.
          if (token.precedence > _this2.block.precedence) continue;
          /**
           * This check eliminates thousands of results by making sure blocks with equal precedence
           * can only contain themselves as their own first input. Without this, the query '1 + 2 + 3'
           * would have two interpretations '(1 + 2) + 3' and '1 + (2 + 3)'. This rule makes the second
           * of those invalid because the root '+' block contains itself as its third token.
           */
          if (token.precedence === _this2.block.precedence && tokenProviderIdx !== 0) continue;
        }
        if (!parseSubSubTokens || !token.isLegal || tokenProviderIdx === subtokenProviders.length - 1) {
          yield [token];
        } else {
          for (const subTokenArr of _this2._parseSubtokens(query, token.end, subtokenProviders, tokenProviderIdx + 1, !token.isTruncated)) {
            subTokenArr.push(token);
            yield subTokenArr;
          }
        }
      }
    }();
  }
  createBlockValue(token, query) {
    if (!token.isLegal) throw new Error("Cannot create a block from an illegal token.");
    let blockInputs;
    if (token.value.stringForm) {
      blockInputs = token.value.stringForm.inputs;
    } else {
      const subtokens = token.value.subtokens;
      blockInputs = [];
      for (let i = 0; i < subtokens.length; i++) {
        const blockPart = this.block.parts[i];
        if (typeof blockPart !== "string") blockInputs.push(subtokens[i].createBlockValue(query));
      }
      while (blockInputs.length < this.block.inputs.length) blockInputs.push(null);
    }
    return this.block.createBlock(...blockInputs);
  }
  createText(token, query, endOnly) {
    if (token.value.stringForm) {
      if (endOnly) {
        if (token.value.lastPartIdx === -1) {
          return query.str.substring(token.start, token.end);
        } else {
          return query.str.substring(token.start, token.end) + token.value.stringForm.strings[token.value.lastPartIdx].substring(token.end - token.value.i) + " " + token.value.stringForm.strings.slice(token.value.lastPartIdx + 1).join(" ");
        }
      }
      return token.value.stringForm.strings.join(" ");
    }
    if (!token.isTruncated && endOnly) return query.str.substring(token.start, token.end);
    const subtokens = token.value.subtokens;
    let text = "";
    if (token.start !== subtokens[0].start) {
      text += query.str.substring(token.start, subtokens[0].start);
    }
    let i;
    for (i = 0; i < subtokens.length; i++) {
      var _subtoken$type$create;
      const subtoken = subtokens[i];
      const subtokenText = (_subtoken$type$create = subtoken.type.createText(subtoken, query, endOnly)) !== null && _subtoken$type$create !== void 0 ? _subtoken$type$create : "";
      text += subtokenText;
      if (i !== subtokens.length - 1) {
        const next = subtokens[i + 1];
        const nextStart = next.start;
        if (nextStart !== subtoken.end) {
          text += query.str.substring(subtoken.end, nextStart);
        } else {
          if ((!endOnly || nextStart >= query.length) && subtokenText.length !== 0 && QueryInfo.IGNORABLE_CHARS.indexOf(subtokenText.at(-1)) === -1) text += " ";
        }
      }
    }
    for (; i < this.fullTokenProviders.length; i++) {
      const provider = this.fullTokenProviders[i];
      if (!provider.isConstant) break;
      if (!text.endsWith(" ")) text += " ";
      text += provider.createText();
    }
    return text;
  }
  getSubtokens(token, query) {
    return token.value.subtokens;
  }
}

/**
 * A single interpretation of a query.
 */
class QueryResult {
  constructor(query, token) {
    /**
     * The query that this is a result of.
     * @type {QueryInfo}
     */
    this.query = query;
    /**
     * The root token of this result.
     *
     * The root token is a token which encapsules the entire query.
     * @type {Token}
     */
    this.token = token;
  }
  get isTruncated() {
    return this.token.isTruncated;
  }

  /**
   * @param {boolean} endOnly
   * @returns {string}
   */
  toText(endOnly) {
    var _this$token$type$crea;
    return (_this$token$type$crea = this.token.type.createText(this.token, this.query, endOnly)) !== null && _this$token$type$crea !== void 0 ? _this$token$type$crea : "";
  }

  /**
   * @returns {BlockInstance}
   */
  createBlock() {
    return this.token.createBlockValue(this.query);
  }
}

/**
 * Information on the current query being executed, with some utility
 * functions for helping out token providers.
 */
class QueryInfo {
  constructor(querier, query, id) {
    /** @type {WorkspaceQuerier} */
    this.querier = querier;
    /** @type {string} The query */
    this.str = query.replaceAll(String.fromCharCode(160), " ");
    /** @type {string} A lowercase version of the query. Used for case insensitive comparisons. */
    this.lowercase = this.str.toLowerCase();
    /** @type {number} A unique identifier for this query */
    this.id = id;
    /** @type{number} The number of tokens we've found so far */
    this.tokenCount = 0;
  }

  /**
   * @param {string} str
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next non-ignorable character in str, after idx.
   */
  static skipIgnorable(str, idx) {
    while (QueryInfo.IGNORABLE_CHARS.indexOf(str[idx]) !== -1) ++idx;
    return idx;
  }

  /**
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next non-ignorable character in the query, after idx.
   */
  skipIgnorable(idx) {
    return QueryInfo.skipIgnorable(this.lowercase, idx);
  }

  /**
   * @param {string} str
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next ignorable character in str, after idx.
   */
  static skipUnignorable(str, idx) {
    while (QueryInfo.IGNORABLE_CHARS.indexOf(str[idx]) === -1 && idx < str.length) ++idx;
    return idx;
  }

  /**
   * @param {number} idx The index to start at.
   * @returns {number} The index of the next ignorable character in the query, after idx.
   */
  skipUnignorable(idx) {
    return QueryInfo.skipUnignorable(this.lowercase, idx);
  }

  /** @type {number} The length in characters of the query. */
  get length() {
    return this.str.length;
  }
  canCreateMoreTokens() {
    return this.tokenCount < WorkspaceQuerier.MAX_TOKENS;
  }
}

/**
 * Workspace queriers keep track of all the data needed to query a given workspace (referred to as
 * the 'workspace index') and provides the methods to execute queries on the indexed workspace.
 */
/** Characters that can be safely skipped over. */
_defineProperty(QueryInfo, "IGNORABLE_CHARS", [" "]);
class WorkspaceQuerier {
  /**
   * Indexes a workspace in preparation for querying it.
   * @param {BlockTypeInfo[]} blocks The list of blocks in the workspace.
   */
  indexWorkspace(blocks) {
    this._queryCounter = 0;
    this._createTokenGroups();
    this._populateTokenGroups(blocks);
    this.workspaceIndexed = true;
  }

  /**
   * Queries the indexed workspace for blocks matching the query string.
   * @param {string} queryStr The query.
   * @returns {{results: QueryResult[], illegalResult: QueryResult | null, limited: boolean}} A list of the results of the query, sorted by their relevance score.
   */
  queryWorkspace(queryStr) {
    if (!this.workspaceIndexed) throw new Error("A workspace must be indexed before it can be queried!");
    if (queryStr.trim().length === 0) return {
      results: [],
      illegalResult: null,
      limited: false
    };
    const query = new QueryInfo(this, queryStr, this._queryCounter++);
    const results = [];
    let foundTokenCount = 0;
    let bestIllegalResult = null;
    let limited = false;
    for (const option of this.tokenGroupBlocks.parseTokens(query, 0)) {
      if (option.end >= queryStr.length) {
        if (option.isLegal) {
          var _WorkspaceQuerier$SCO;
          option.score += (_WorkspaceQuerier$SCO = WorkspaceQuerier.SCORE_BUMP[option.type.block.id]) !== null && _WorkspaceQuerier$SCO !== void 0 ? _WorkspaceQuerier$SCO : 0;
          results.push(new QueryResult(query, option));
        } else if (!bestIllegalResult || option.score >= bestIllegalResult.token.score) {
          bestIllegalResult = new QueryResult(query, option);
        }
      }
      ++foundTokenCount;
      if (foundTokenCount > WorkspaceQuerier.MAX_RESULTS) {
        console.log("Warning: Workspace query exceeded maximum result count.");
        limited = true;
        break;
      }
      if (!query.canCreateMoreTokens()) {
        console.log("Warning: Workspace query exceeded maximum token count.");
        limited = true;
        break;
      }
    }

    // Eliminate blocks who's strings can be parsed as something else.
    //  This step removes silly suggestions like `if <(1 + 1) = "2 then"> then`
    const canBeString = Array(queryStr.length).fill(true);
    function searchToken(token) {
      const subtokens = token.type.getSubtokens(token, query);
      if (subtokens) for (const subtoken of subtokens) searchToken(subtoken);else if (!(token.type instanceof TokenTypeStringLiteral) && !token.isTruncated) for (let i = token.start; i < token.end; i++) {
        canBeString[i] = false;
      }
    }
    for (const result of results) searchToken(result.token);
    function checkValidity(token) {
      const subtokens = token.type.getSubtokens(token, query);
      if (subtokens) {
        for (const subtoken of subtokens) if (!checkValidity(subtoken)) return false;
      } else if (token.type instanceof TokenTypeStringLiteral && !TokenTypeNumberLiteral.isValidNumber(token.value)) {
        for (let i = token.start; i < token.end; i++) if (!canBeString[i]) return false;
      }
      return true;
    }
    const validResults = [];
    for (const result of results) if (checkValidity(result.token)) validResults.push(result);
    return {
      results: validResults.sort((a, b) => b.token.score - a.token.score),
      illegalResult: bestIllegalResult,
      limited
    };
  }

  /**
   * Creates the token group hierarchy used by this querier.
   *
   * Each of these token groups represents a list of all the tokens that could be encountered
   * when we're looking for a specific type of input. For example, tokenGroupString contains all
   * the tokens that could be encountered when we're looking for a string input (like after the
   * word 'say' for the `say ()` block). tokenGroupBlocks is an interesting one, it contains all
   * the tokens that could be the root token of a query result. In practice, this just means all
   * the stackable blocks (like 'say') and all the reporter blocks (like '+').
   *
   * But wait, there's a problem. Blocks like `() + ()` have two inputs, both of which are numbers.
   * The issue arises when you realize the block '+' itself also returns a number. So when we
   * try to call parseTokens on the '+' block, it will try to look for it's first parameter thus
   * calling parseTokens on tokenGroupNumber, which will call parseTokens on the '+' block again
   * (because + can return a number) which will call tokenGroupNumber again... and we're in an
   * infinite loop. We can't just exclude blocks from being their own first parameter because then
   * queries like '1 + 2 + 3' wouldn't work. The solution is something you might have only thought
   * of as a performance boost; caching. When tokenGroupNumber gets queried for the second time,
   * it's mid way though building its cache from the first query. If this happens, it just returns
   * all the tokens it had already found, but no more. So in the example above, when the + block calls
   * tokenGroupNumber for the second time it finds only the number literal '1'. It then finds the
   * second number literal '2' and yields the block '1 + 2' which gets added to tokenGroupNumber's
   * cache. '1 + 2' then gets disguarded by the queryWorkspace function because it doesn't cover the
   * whole query. But the '+' block's query to tokenGroupNumber never finished, so it will continue
   * and, because the first one we found is now a part of the cache, tokenGroupNumber will yield
   * '1 + 2' as a result. The + block will continue parsing, find the second '+' and the number '3'
   * and yield '(1 + 2) + 3'. No infinite loops!
   *
   * A consequence of this system is something I implicitly implied in the above paragraph "when the
   * + block calls tokenGroupNumber for the second time it finds only the number literal '1'" This
   * is only true if 'TokenTypeNumberLiteral' is searched before the '+' block. This is why the order
   * the token providers are in is critically important. I'll leave it as an exercise to the reader to
   * work out why, but the same parsing order problems crops up when implementing order of operations.
   * If a suggestion that should show up isn't showing up, it's probably because the token providers
   * in one of the groups is in the wrong order. Ordering the providers within the base groups is dealt
   * with by {@link _populateTokenGroups} and the inter-group ordering is dealt with below, by the
   * order they are passed into pushProviders.
   *
   * @private
   */
  _createTokenGroups() {
    this.tokenTypeStringLiteral = new TokenProviderSingleCache(new TokenTypeStringLiteral());
    this.tokenTypeNumberLiteral = new TokenProviderSingleCache(new TokenTypeNumberLiteral());
    this.tokenGroupRoundBlocks = new TokenProviderGroup(); // Round blocks like (() + ()) or (my variable)
    this.tokenGroupBooleanBlocks = new TokenProviderGroup(); // Boolean blocks like <not ()>
    this.tokenGroupStackBlocks = new TokenProviderGroup(); // Stackable blocks like `move (10) steps`
    this.tokenGroupHatBlocks = new TokenProviderGroup(); // Hat block like `when green flag clicked`

    // Anything that fits into a boolean hole. (Boolean blocks + Brackets)
    this.tokenGroupBoolean = new TokenProviderOptional(new TokenProviderGroup());
    this.tokenGroupBoolean.inner.pushProviders([this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupBoolean)]);
    this.tokenGroupBoolean.inner.pushProviders([this.tokenGroupRoundBlocks], false);

    // Anything that fits into a number hole. (Round blocks + Boolean blocks + Number Literals + Brackets)
    this.tokenGroupNumber = new TokenProviderOptional(new TokenProviderGroup());
    this.tokenGroupNumber.inner.pushProviders([this.tokenTypeNumberLiteral, this.tokenGroupRoundBlocks, this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupNumber)]);

    // Anything that fits into a string hole (Round blocks + Boolean blocks + String Literals + Brackets)
    this.tokenGroupString = new TokenProviderOptional(new TokenProviderGroup());
    this.tokenGroupString.inner.pushProviders([this.tokenTypeStringLiteral, this.tokenGroupRoundBlocks, this.tokenGroupBooleanBlocks, new TokenTypeBrackets(this.tokenGroupString)]);

    // Anything that fits into a c shaped hole (Stackable blocks)
    this.tokenGroupStack = new TokenProviderOptional(this.tokenGroupStackBlocks);

    // Anything you can spawn using the menu (All blocks)
    this.tokenGroupBlocks = new TokenProviderGroup();
    this.tokenGroupBlocks.pushProviders([this.tokenGroupStackBlocks, this.tokenGroupBooleanBlocks, this.tokenGroupRoundBlocks, this.tokenGroupHatBlocks]);
  }

  /**
   * Populates the token groups created by {@link _createTokenGroups} with the blocks
   * found in the workspace.
   * @param {BlockTypeInfo[]} blocks The list of blocks in the workspace.
   * @private
   */
  _populateTokenGroups(blocks) {
    blocks.sort((a, b) => WorkspaceQuerier.CATEGORY_PRIORITY.indexOf(b.category.name) - WorkspaceQuerier.CATEGORY_PRIORITY.indexOf(a.category.name));

    // Apply order of operations
    for (const block of blocks) {
      block.precedence = WorkspaceQuerier.ORDER_OF_OPERATIONS.indexOf(block.id);
    }
    for (let i = blocks.length - 1; i >= 0; i--) {
      const block = blocks[i];
      if (block.precedence !== -1) {
        const target = blocks.length - (WorkspaceQuerier.ORDER_OF_OPERATIONS.length - (block.precedence - 1));
        if (i !== target) {
          const oldBlock = blocks[target];
          blocks[target] = block;
          blocks[i] = oldBlock;
        }
      }
    }
    for (const block of blocks) {
      const blockTokenType = new TokenTypeBlock(this, block);
      switch (block.shape) {
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Round:
          this.tokenGroupRoundBlocks.pushProviders([blockTokenType]);
          break;
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Boolean:
          this.tokenGroupBooleanBlocks.pushProviders([blockTokenType]);
          break;
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Stack:
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].End:
          this.tokenGroupStackBlocks.pushProviders([blockTokenType]);
          break;
        case _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_0__["BlockShape"].Hat:
          this.tokenGroupHatBlocks.pushProviders([blockTokenType]);
          break;
      }
    }
  }

  /**
   * Clears the memory used by the workspace index.
   */
  clearWorkspaceIndex() {
    this.workspaceIndexed = false;
    this._destroyTokenGroups();
  }

  /**
   * @private
   */
  _destroyTokenGroups() {
    this.tokenTypeStringLiteral = null;
    this.tokenTypeNumberLiteral = null;
    this.tokenGroupBooleanBlocks = null;
    this.tokenGroupRoundBlocks = null;
    this.tokenGroupStackBlocks = null;
    this.tokenGroupHatBlocks = null;
    this.tokenGroupBoolean = null;
    this.tokenGroupNumber = null;
    this.tokenGroupString = null;
    this.tokenGroupStack = null;
    this.tokenGroupBlocks = null;
  }
}
_defineProperty(WorkspaceQuerier, "ORDER_OF_OPERATIONS", [null,
// brackets
"operator_round", "operator_mathop", "operator_mod", "operator_divide", "operator_multiply", "operator_subtract", "operator_add", "operator_equals", "operator_lt", "operator_gt", "operator_or", "operator_and", "operator_not"]);
_defineProperty(WorkspaceQuerier, "CATEGORY_PRIORITY", ["control", "events", "data", "operators"]);
/**
 * An artificial way to increase the score of common blocks so they show up first.
 */
_defineProperty(WorkspaceQuerier, "SCORE_BUMP", {
  control_if: 100000,
  control_if_else: 100000,
  data_setvariableto: 99999
});
/**
 * The maximum number of results to find before giving up.
 */
_defineProperty(WorkspaceQuerier, "MAX_RESULTS", 1000);
/**
 * The maximum number of tokens to find before giving up.
 */
_defineProperty(WorkspaceQuerier, "MAX_TOKENS", 10000);

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/middle-click-popup/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/middle-click-popup/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/module.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/module.js ***!
  \********************************************************/
/*! exports provided: getTextWidth, clearTextWidthCache, onClearTextWidthCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextWidth", function() { return getTextWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTextWidthCache", function() { return clearTextWidthCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onClearTextWidthCache", function() { return onClearTextWidthCache; });
const textWidthCache = new Map();
const textWidthCacheSize = 1000;
const eventTarget = new EventTarget();
const eventClearTextCache = "clearTextCache";

/**
 * Gets the width of an svg text element, with caching.
 * @param {SVGTextElement} textElement
 */
function getTextWidth(textElement) {
  let string = textElement.innerHTML;
  if (string.length === 0) return 0;
  let width = textWidthCache.get(string);
  if (width) return width;
  width = textElement.getBoundingClientRect().width;
  textWidthCache.set(string, width);
  if (textWidthCache.size > textWidthCacheSize) {
    textWidthCache.delete(textWidthCache.keys().next());
  }
  return width;
}

/**
 * Clears the text width cache of the middle click popup.
 */
function clearTextWidthCache() {
  textWidthCache.clear();
  eventTarget.dispatchEvent(new CustomEvent(eventClearTextCache));
}

/**
 * @param {() => void} func
 */
function onClearTextWidthCache(func) {
  eventTarget.addEventListener(eventClearTextCache, func);
}

/***/ }),

/***/ "./src/addons/addons/middle-click-popup/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/middle-click-popup/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WorkspaceQuerier_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkspaceQuerier.js */ "./src/addons/addons/middle-click-popup/WorkspaceQuerier.js");
/* harmony import */ var _BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlockRenderer.js */ "./src/addons/addons/middle-click-popup/BlockRenderer.js");
/* harmony import */ var _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlockTypeInfo.js */ "./src/addons/addons/middle-click-popup/BlockTypeInfo.js");
/* harmony import */ var _module_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module.js */ "./src/addons/addons/middle-click-popup/module.js");
//@ts-check





/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  const Blockly = await addon.tab.traps.getBlockly();
  const vm = addon.tab.traps.vm;
  const PREVIEW_LIMIT = 50;
  const popupRoot = document.body.appendChild(document.createElement("div"));
  popupRoot.classList.add("sa-mcp-root");
  popupRoot.dir = addon.tab.direction;
  popupRoot.style.display = "none";
  const popupContainer = popupRoot.appendChild(document.createElement("div"));
  popupContainer.classList.add("sa-mcp-container");
  const popupInputContainer = popupContainer.appendChild(document.createElement("div"));
  popupInputContainer.classList.add(addon.tab.scratchClass("input_input-form"));
  popupInputContainer.classList.add("sa-mcp-input-wrapper");
  const popupInputSuggestion = popupInputContainer.appendChild(document.createElement("input"));
  popupInputSuggestion.classList.add("sa-mcp-input-suggestion");
  const popupInput = popupInputContainer.appendChild(document.createElement("input"));
  popupInput.classList.add("sa-mcp-input");
  popupInput.setAttribute("autocomplete", "off");
  const popupPreviewContainer = popupContainer.appendChild(document.createElement("div"));
  popupPreviewContainer.classList.add("sa-mcp-preview-container");
  const popupPreviewScrollbarSVG = popupContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
  popupPreviewScrollbarSVG.classList.add("sa-mcp-preview-scrollbar", "blocklyScrollbarVertical", "blocklyMainWorkspaceScrollbar");
  popupPreviewScrollbarSVG.style.display = "none";
  const popupPreviewScrollbarBackground = popupPreviewScrollbarSVG.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
  popupPreviewScrollbarBackground.setAttribute("width", "11");
  popupPreviewScrollbarBackground.classList.add("blocklyScrollbarBackground");
  const popupPreviewScrollbarHandle = popupPreviewScrollbarSVG.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
  popupPreviewScrollbarHandle.setAttribute("rx", "3");
  popupPreviewScrollbarHandle.setAttribute("ry", "3");
  popupPreviewScrollbarHandle.setAttribute("width", "6");
  popupPreviewScrollbarHandle.setAttribute("x", "2.5");
  popupPreviewScrollbarHandle.classList.add("blocklyScrollbarHandle");
  const popupPreviewBlocks = popupPreviewContainer.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
  popupPreviewBlocks.classList.add("sa-mcp-preview-blocks");
  const querier = new _WorkspaceQuerier_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  let mousePosition = {
    x: 0,
    y: 0
  };
  document.addEventListener("mousemove", e => {
    mousePosition = {
      x: e.clientX,
      y: e.clientY
    };
  });
  Object(_module_js__WEBPACK_IMPORTED_MODULE_3__["onClearTextWidthCache"])(closePopup);

  /**
   * @typedef ResultPreview
   * @property {BlockInstance} block
   * @property {((endOnly: boolean) => string)?} autocompleteFactory
   * @property {BlockComponent} renderedBlock
   * @property {SVGGElement} svgBlock
   * @property {SVGRectElement} svgBackground
   */
  /** @type {ResultPreview[]} */
  let queryPreviews = [];
  /** @type {QueryResult | null} */
  let queryIllegalResult = null;
  let selectedPreviewIdx = 0;
  /** @type {BlockTypeInfo[]?} */
  let blockTypes = null;
  let limited = false;
  let allowMenuClose = true;
  let popupPosition = null;
  let previewWidth = 0;
  let previewHeight = 0;
  let previewScale = 0;
  let previewMinHeight = 0;
  let previewMaxHeight = 0;
  function openPopup() {
    if (addon.self.disabled) return;

    // Don't show the menu if we're not in the code editor
    if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex !== 0) return;
    blockTypes = _BlockTypeInfo_js__WEBPACK_IMPORTED_MODULE_2__["BlockTypeInfo"].getBlocks(Blockly, vm, Blockly.getMainWorkspace(), msg);
    querier.indexWorkspace([...blockTypes]);
    blockTypes.sort((a, b) => {
      const prio = block => ["operators", "data"].indexOf(block.category.name) - block.id.startsWith("data_");
      return prio(b) - prio(a);
    });
    previewScale = window.innerWidth * 0.00005 + addon.settings.get("popup_scale") / 100;
    previewWidth = window.innerWidth * addon.settings.get("popup_width") / 100;
    previewMaxHeight = window.innerHeight * addon.settings.get("popup_max_height") / 100;
    popupContainer.style.width = previewWidth + "px";
    popupPosition = {
      x: mousePosition.x + 16,
      y: mousePosition.y - 8
    };
    popupRoot.style.top = popupPosition.y + "px";
    popupRoot.style.left = popupPosition.x + "px";
    popupRoot.style.display = "";
    popupInput.value = "";
    popupInput.focus();
    updateInput();
  }
  function closePopup() {
    if (allowMenuClose) {
      popupPosition = null;
      popupRoot.style.display = "none";
      blockTypes = null;
      querier.clearWorkspaceIndex();
    }
  }
  popupInput.addEventListener("input", updateInput);
  function updateInput() {
    /**
     * @typedef MenuItem
     * @property {BlockInstance} block
     * @property {(endOnly: boolean) => string} [autocompleteFactory]
     */
    /** @type {MenuItem[]} */
    const blockList = [];
    if (popupInput.value.trim().length === 0) {
      queryIllegalResult = null;
      if (blockTypes) for (const blockType of blockTypes) {
        blockList.push({
          block: blockType.createBlock()
        });
      }
      limited = false;
    } else {
      // Get the list of blocks to display using the input content
      const queryResultObj = querier.queryWorkspace(popupInput.value);
      const queryResults = queryResultObj.results;
      queryIllegalResult = queryResultObj.illegalResult;
      limited = queryResultObj.limited;
      if (queryResults.length > PREVIEW_LIMIT) queryResults.length = PREVIEW_LIMIT;
      for (const queryResult of queryResults) {
        blockList.push({
          block: queryResult.createBlock(),
          autocompleteFactory: endOnly => queryResult.toText(endOnly)
        });
      }
    }

    // @ts-ignore Delete the old previews
    while (popupPreviewBlocks.firstChild) popupPreviewBlocks.removeChild(popupPreviewBlocks.lastChild);

    // Create the new previews
    queryPreviews.length = 0;
    let y = 0;
    let addedResults = 0;
    const addedIds = [];
    const maxSearchResults = addon.settings.get('popup_max_search');
    const maxVariants = addon.settings.get("popup_max_variants");
    for (let resultIdx = 0; resultIdx < blockList.length; resultIdx++) {
      var _result$autocompleteF;
      if (addedResults >= maxSearchResults) break;
      const result = blockList[resultIdx];
      if (maxVariants <= 1) {
        if (addedIds.includes(result.block.typeInfo.id)) continue;
      } else {
        if (addedIds.filter(id => id === result.block.typeInfo.id).length >= maxVariants) continue;
      }
      const mouseMoveListener = () => {
        updateSelection(resultIdx);
      };
      const mouseDownListener = e => {
        e.stopPropagation();
        e.preventDefault();
        updateSelection(resultIdx);
        allowMenuClose = !e.shiftKey;
        selectBlock();
        allowMenuClose = true;
        if (e.shiftKey) popupInput.focus();else closePopup();
      };
      const svgBackground = popupPreviewBlocks.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "rect"));
      const height = Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["getBlockHeight"])(result.block);
      svgBackground.setAttribute("transform", "translate(0, ".concat((y + height / 10) * previewScale, ")"));
      svgBackground.setAttribute("height", height * previewScale + "px");
      svgBackground.classList.add("sa-mcp-preview-block-bg");
      svgBackground.addEventListener("mousemove", mouseMoveListener);
      svgBackground.addEventListener("mousedown", mouseDownListener);
      const svgBlock = popupPreviewBlocks.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "g"));
      svgBlock.addEventListener("mousemove", mouseMoveListener);
      svgBlock.addEventListener("mousedown", mouseDownListener);
      svgBlock.classList.add("sa-mcp-preview-block");
      const renderedBlock = Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(result.block, svgBlock);
      queryPreviews.push({
        block: result.block,
        autocompleteFactory: (_result$autocompleteF = result.autocompleteFactory) !== null && _result$autocompleteF !== void 0 ? _result$autocompleteF : null,
        renderedBlock,
        svgBlock,
        svgBackground
      });
      y += height;
      addedResults++;
      addedIds.push(result.block.typeInfo.id);
    }
    const height = (y + 8) * previewScale;
    if (height < previewMinHeight) previewHeight = previewMinHeight;else if (height > previewMaxHeight) previewHeight = previewMaxHeight;else previewHeight = height;
    popupPreviewBlocks.setAttribute("height", "".concat(height, "px"));
    popupPreviewContainer.style.height = previewHeight + "px";
    popupPreviewScrollbarSVG.style.height = previewHeight + "px";
    popupPreviewScrollbarBackground.setAttribute("height", "" + previewHeight);
    popupInputContainer.dataset["error"] = "" + limited;
    selectedPreviewIdx = -1;
    updateSelection(0);
    updateCursor();
    updateScrollbar();
  }
  function updateSelection(newIdx) {
    if (selectedPreviewIdx === newIdx) return;
    const oldSelection = queryPreviews[selectedPreviewIdx];
    if (oldSelection) {
      oldSelection.svgBackground.classList.remove("sa-mcp-preview-block-bg-selection");
      oldSelection.svgBlock.classList.remove("sa-mcp-preview-block-selection");
    }
    if (queryPreviews.length === 0 && queryIllegalResult) {
      popupInputSuggestion.value = popupInput.value + queryIllegalResult.toText(true).substring(popupInput.value.length);
      return;
    }
    const newSelection = queryPreviews[newIdx];
    if (newSelection && newSelection.autocompleteFactory) {
      newSelection.svgBackground.classList.add("sa-mcp-preview-block-bg-selection");
      newSelection.svgBlock.classList.add("sa-mcp-preview-block-selection");
      newSelection.svgBackground.scrollIntoView({
        block: "nearest",
        behavior: Math.abs(newIdx - selectedPreviewIdx) > 1 ? "smooth" : "auto"
      });
      popupInputSuggestion.value = popupInput.value + newSelection.autocompleteFactory(true).substring(popupInput.value.length);
    } else {
      popupInputSuggestion.value = "";
    }
    selectedPreviewIdx = newIdx;
  }

  // @ts-ignore
  document.addEventListener("selectionchange", updateCursor);
  function updateCursor() {
    var _popupInput$selection;
    const cursorPos = (_popupInput$selection = popupInput.selectionStart) !== null && _popupInput$selection !== void 0 ? _popupInput$selection : 0;
    const cursorPosRel = popupInput.value.length === 0 ? 0 : cursorPos / popupInput.value.length;
    let y = 0;
    for (let previewIdx = 0; previewIdx < queryPreviews.length; previewIdx++) {
      const preview = queryPreviews[previewIdx];
      var blockX = 5;
      // pm: The pop-up can be resized, so we dont need to account for this actually
      // if (blockX + preview.renderedBlock.width > previewWidth / previewScale)
      //   blockX += (previewWidth / previewScale - blockX - preview.renderedBlock.width) * previewScale * cursorPosRel;
      var blockY = (y + 30) * previewScale;

      // if (preview.block.typeInfo.shape.canBeRound) {
      //   preview.svgBlock.setAttribute("transform", `translate(${blockX}, ${blockY}) scale(${previewScale})`);
      // } else {
      //   preview.svgBlock.setAttribute("transform", `translate(6, ${blockY}) scale(${previewScale})`);
      // }
      preview.svgBlock.setAttribute("transform", "translate(".concat(blockX, ", ").concat(blockY, ") scale(").concat(previewScale, ")"));
      y += Object(_BlockRenderer_js__WEBPACK_IMPORTED_MODULE_1__["getBlockHeight"])(preview.block);
    }
    popupInputSuggestion.scrollLeft = popupInput.scrollLeft;
  }
  popupPreviewContainer.addEventListener("scroll", updateScrollbar);
  function updateScrollbar() {
    const scrollTop = popupPreviewContainer.scrollTop;
    const scrollY = popupPreviewContainer.scrollHeight;
    if (scrollY <= previewHeight) {
      popupPreviewScrollbarSVG.style.display = "none";
      return;
    }
    const scrollbarHeight = previewHeight / scrollY * previewHeight;
    const scrollbarY = scrollTop / scrollY * previewHeight;

    // pm: whats the point of the scroll bar if it doesnt work?
    popupPreviewScrollbarSVG.style.display = "none";
    popupPreviewScrollbarHandle.setAttribute("height", "" + scrollbarHeight);
    popupPreviewScrollbarHandle.setAttribute("y", "" + scrollbarY);
  }
  function selectBlock() {
    const selectedPreview = queryPreviews[selectedPreviewIdx];
    if (!selectedPreview) return;
    const workspace = Blockly.getMainWorkspace();
    // This is mostly copied from https://github.com/scratchfoundation/scratch-blocks/blob/893c7e7ad5bfb416eaed75d9a1c93bdce84e36ab/core/scratch_blocks_utils.js#L171
    // Some bits were removed or changed to fit our needs.
    workspace.setResizesEnabled(false);
    let newBlock;
    Blockly.Events.disable();
    try {
      newBlock = selectedPreview.block.createWorkspaceForm();
      Blockly.scratchBlocksUtils.changeObscuredShadowIds(newBlock);
      var svgRootNew = newBlock.getSvgRoot();
      if (!svgRootNew) {
        throw new Error("newBlock is not rendered.");
      }
      let blockBounds = newBlock.svgPath_.getBoundingClientRect();
      let newBlockX = Math.floor((mousePosition.x - (blockBounds.left + blockBounds.right) / 2) / workspace.scale);
      let newBlockY = Math.floor((mousePosition.y - (blockBounds.top + blockBounds.bottom) / 2) / workspace.scale);
      newBlock.moveBy(newBlockX, newBlockY);
    } finally {
      Blockly.Events.enable();
    }
    if (Blockly.Events.isEnabled()) {
      Blockly.Events.fire(new Blockly.Events.BlockCreate(newBlock));
    }
    let fakeEvent = {
      clientX: mousePosition.x,
      clientY: mousePosition.y,
      type: "mousedown",
      stopPropagation: function stopPropagation() {},
      preventDefault: function preventDefault() {},
      target: selectedPreview.svgBlock
    };
    if (workspace.getGesture(fakeEvent)) {
      workspace.startDragWithFakeEvent(fakeEvent, newBlock);
    }
  }
  function acceptAutocomplete() {
    let factory;
    if (queryPreviews[selectedPreviewIdx]) factory = queryPreviews[selectedPreviewIdx].autocompleteFactory;else factory = () => popupInputSuggestion.value;
    if (popupInputSuggestion.value.length === 0 || !factory) return;
    popupInput.value = factory(false);
    // Move cursor to the end of the newly inserted text
    popupInput.selectionStart = popupInput.value.length + 1;
    updateInput();
  }
  popupInput.addEventListener("keydown", e => {
    switch (e.key) {
      case "Escape":
        // If there's something in the input, clear it
        if (popupInput.value.length > 0) {
          popupInput.value = "";
          updateInput();
        } else {
          // If not, close the menu
          closePopup();
        }
        e.stopPropagation();
        e.preventDefault();
        break;
      case "Tab":
        acceptAutocomplete();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "Enter":
        selectBlock();
        closePopup();
        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowDown":
        if (selectedPreviewIdx + 1 >= queryPreviews.length) updateSelection(0);else updateSelection(selectedPreviewIdx + 1);
        e.stopPropagation();
        e.preventDefault();
        break;
      case "ArrowUp":
        if (selectedPreviewIdx - 1 < 0) updateSelection(queryPreviews.length - 1);else updateSelection(selectedPreviewIdx - 1);
        e.stopPropagation();
        e.preventDefault();
        break;
    }
  });

  // pm: lets check other stuff before deciding we should close out (ie: scrolling with middle-click shouldnt close popup)
  // popupInput.addEventListener("focusout", closePopup);

  let closablePopup = true;
  popupInput.addEventListener("focusout", () => {
    if (closablePopup) {
      closePopup();
    }
  });
  popupContainer.addEventListener("mousedown", () => {
    popupInput.focus();
  });
  popupContainer.addEventListener("mousemove", () => {
    popupInput.focus();
  });
  popupContainer.addEventListener("mouseenter", () => {
    closablePopup = false;
    popupInput.focus();
  });
  popupContainer.addEventListener("mouseleave", () => {
    closablePopup = true;
    popupInput.focus();
  });

  // pm: whats the point of the scroll bar if it doesnt work?
  // popupPreviewScrollbarSVG.addEventListener("mousedown", () => {
  //   closablePopup = false;
  // });
  // popupPreviewScrollbarSVG.addEventListener("mouseup", () => {
  //   setTimeout(() => {
  //     closablePopup = true;
  //     popupInput.focus();
  //   }, 1);
  // });

  // Open on ctrl + space
  document.addEventListener("keydown", e => {
    if (e.key === " " && (e.ctrlKey || e.metaKey)) {
      openPopup();
      e.preventDefault();
      e.stopPropagation();
    }
  });

  // Open on mouse wheel button
  const _doWorkspaceClick_ = Blockly.Gesture.prototype.doWorkspaceClick_;
  Blockly.Gesture.prototype.doWorkspaceClick_ = function () {
    if (this.mostRecentEvent_.button === 1 || this.mostRecentEvent_.shiftKey) openPopup();
    mousePosition = {
      x: this.mostRecentEvent_.clientX,
      y: this.mostRecentEvent_.clientY
    };
    _doWorkspaceClick_.call(this);
  };

  // The popup should delete blocks dragged ontop of it
  const _isDeleteArea = Blockly.WorkspaceSvg.prototype.isDeleteArea;
  Blockly.WorkspaceSvg.prototype.isDeleteArea = function (e) {
    if (popupPosition) {
      if (e.clientX > popupPosition.x && e.clientX < popupPosition.x + previewWidth && e.clientY > popupPosition.y && e.clientY < popupPosition.y + previewHeight) {
        return Blockly.DELETE_AREA_TOOLBOX;
      }
    }
    return _isDeleteArea.call(this, e);
  };
});

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/_runtime_entry.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/_runtime_entry.js ***!
  \****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/move-to-top-bottom/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/move-to-top-bottom/userscript.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/move-to-top-bottom/userscript.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async _ref => {
  let {
    addon,
    console,
    msg
  } = _ref;
  const types = ["sound", "costume"];
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;
    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, 0);
    } else {
      target.reorderCostume(ctx.index, 0);
    }
    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 1,
    label: msg("top"),
    condition: ctx => ctx.index !== 0
  });
  addon.tab.createEditorContextMenu(ctx => {
    const target = addon.tab.traps.vm.editingTarget;
    if (ctx.type === "sound") {
      target.reorderSound(ctx.index, Infinity);
    } else {
      target.reorderCostume(ctx.index, Infinity);
    }
    queueMicrotask(() => {
      addon.tab.traps.vm.emitTargetsUpdate();
      addon.tab.traps.vm.runtime.emitProjectChanged();
      ctx.target.click();
    });
  }, {
    types,
    position: "assetContextMenuAfterExport",
    order: 2,
    label: msg("bottom"),
    condition: ctx => ctx.index !== ctx.target.parentNode.parentNode.childElementCount - 1
  });
});

/***/ }),

/***/ "./src/addons/addons/multi-tab-code/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/multi-tab-code/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/multi-tab-code/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/multi-tab-code/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_add_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./add.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/multi-tab-code/add.svg");
/* generated by pull.js */



const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "add.svg": _url_loader_add_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
};

/***/ }),

/***/ "./src/addons/addons/multi-tab-code/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/multi-tab-code/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable */ // FUCK OFF FOR THE LOVE OF CHRIST
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  return; // !! The addon deletes blocks randomly and so can not inject itself !!
  // make migrating code between tabs possible at all
  let selectedTab = -1;
  let hoveredTab = -1;
  let dragging = false;
  const tabs = [];
  window.tabs = tabs;
  let tabTarget = null;
  const commentId = '// multi-tab configuration entry\n';
  let scroll = 0;
  let scrollSelected = false;
  let selectStartX = 0;
  let selectStartScroll = 0;
  let lastLoaded = '';
  const soup_ = '!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  function uid() {
    const length = 20;
    const soupLength = soup_.length;
    const id = [];
    for (let i = 0; i < length; i++) {
      id[i] = soup_.charAt(Math.random() * soupLength);
    }
    return id.join('');
  }
  const Blockly = await addon.tab.traps.getBlockly();
  // goofy i know, but it makes vscode understand so
  /** @type {import('../../../../../scratch-vm/src/index')} */
  const vm = addon.tab.traps.vm;
  const {
    Blocks,
    Variable,
    RenderedTarget,
    Comment
  } = vm.exports;
  const ogEmitUpdate = vm.emitWorkspaceUpdate;
  vm.emitWorkspaceUpdate = function () {
    if (!tabs[selectedTab]) return "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n                                      <variables></variables>\n                                    </xml>";
    // Create a list of broadcast message Ids according to the stage variables
    const stageVariables = this.runtime.getTargetForStage().variables;
    let messageIds = [];
    for (const varId in stageVariables) {
      if (stageVariables[varId].type === Variable.BROADCAST_MESSAGE_TYPE) {
        messageIds.push(varId);
      }
    }
    // Go through all blocks on all targets, removing referenced
    // broadcast ids from the list.
    for (let i = 0; i < this.runtime.targets.length; i++) {
      const currTarget = this.runtime.targets[i];
      const currBlocks = currTarget.blocks._blocks;
      for (const blockId in currBlocks) {
        if (currBlocks[blockId].fields.BROADCAST_OPTION) {
          const id = currBlocks[blockId].fields.BROADCAST_OPTION.id;
          const index = messageIds.indexOf(id);
          if (index !== -1) {
            messageIds = messageIds.slice(0, index).concat(messageIds.slice(index + 1));
          }
        }
      }
    }
    // Anything left in messageIds is not referenced by a block, so delete it.
    for (let i = 0; i < messageIds.length; i++) {
      const id = messageIds[i];
      delete this.runtime.getTargetForStage().variables[id];
    }
    const globalVarMap = Object.assign({}, this.runtime.getTargetForStage().variables);
    const localVarMap = this.editingTarget.isStage ? Object.create(null) : Object.assign({}, this.editingTarget.variables);
    const globalVariables = Object.keys(globalVarMap).map(k => globalVarMap[k]);
    const localVariables = Object.keys(localVarMap).map(k => localVarMap[k]);
    const workspaceComments = Object.keys(this.editingTarget.comments).map(k => this.editingTarget.comments[k]).filter(c => c.blockId === null && c.tab == selectedTab && !c.text.startsWith(commentId));
    const xmlString = "<xml xmlns=\"http://www.w3.org/1999/xhtml\">\n                        <variables>\n                          ".concat(globalVariables.map(v => v.toXML()).join(), "\n                          ").concat(localVariables.map(v => v.toXML(true)).join(), "\n                        </variables>\n                        ").concat(workspaceComments.map(c => c.toXML()).join(), "\n                        ").concat(tabs[selectedTab].scripts.map(script => vm.editingTarget.blocks.blockToXML(script, this.editingTarget.comments)), "\n                      </xml>");
    this.emit('workspaceUpdate', {
      xml: xmlString
    });
  };
  const ogBlockListener = vm.blockListener;
  vm.blockListener = function (e) {
    var _tabTarget$comments$e;
    // skip operations on comments that arnt real
    if (e.type === 'comment_delete' && ((_tabTarget$comments$e = tabTarget.comments[e.commentId]) === null || _tabTarget$comments$e === void 0 ? void 0 : _tabTarget$comments$e.tab) !== selectedTab) return;
    // do not delete blocks from other tabs, the main sprite must be a pool of all tabs
    if (e.type === 'delete' && !scriptsHasBlock(tabs[selectedTab].scripts, e.blockId)) return;
    if (e.type === 'create' && !tabs[selectedTab].scripts.includes(e.blockId)) tabs[selectedTab].scripts.push(e.blockId);
    if (e.type === 'move' && !e.newParentId && !tabs[selectedTab].scripts.includes(e.blockId)) tabs[selectedTab].scripts.push(e.blockId);
    if (e.type === 'move' && e.newParentId && tabs[selectedTab].scripts.includes(e.blockId)) {
      const idx = tabs[selectedTab].scripts.indexOf(e.blockId);
      tabs[selectedTab].scripts.splice(idx, 1);
    }
    if (e.type === 'delete' && tabs[selectedTab].scripts.includes(e.blockId)) {
      const idx = tabs[selectedTab].scripts.indexOf(e.blockId);
      tabs[selectedTab].scripts.splice(idx, 1);
    }
    ogBlockListener(e);
    switch (e.type) {
      case 'endDrag':
        dragging = false;
        if (hoveredTab === -1) break;
        const blocks = vm.editingTarget.blocks.XMLToBlock(e);
        const moveNotCopy = addon.settings.get('moveOnDrag');
        for (const block of blocks) {
          const oldId = block.id;
          const newId = block.id = uid();
          // replace all instances of the old id with the new one
          blocks.forEach(block => {
            if (block.next === oldId && block.next) block.next = newId;
            if (block.parent === oldId && block.parent) block.parent = newId;
            for (const name in block.inputs) {
              const input = block.inputs[name];
              if (input.block === oldId && input.block) input.block = newId;
              if (input.shadow === oldId && input.shadow) input.shadow = newId;
            }
          });
          tabTarget.blocks.createBlock(block);
          if (moveNotCopy) {
            tabTarget.blocks.deleteBlock(oldId, true);
            if (tabs[selectedTab].scripts.includes(oldId)) {
              const idx = tabs[selectedTab].scripts.indexOf(oldId);
              tabs[selectedTab].scripts.splice(idx, 1);
            }
          }
          if (block.topLevel) tabs[hoveredTab].scripts.push(newId);
        }
        if (moveNotCopy) selectTab(hoveredTab);
    }
  };
  const workspace = Blockly.getMainWorkspace();
  // remove old, bound, function
  const func = workspace.listeners_.findIndex(func => func.name.includes(ogBlockListener.name));
  workspace.listeners_.splice(func, 1);
  const vmSaveJSON = vm.toJSON;
  vm.toJSON = function (optTargetId, serializationOptions) {
    saveTabs();
    return vmSaveJSON.call(this, optTargetId, serializationOptions);
  };
  vm.runtime._updateGlows = function (optExtraThreads) {
    const searchThreads = [];
    searchThreads.push.apply(searchThreads, this.threads);
    if (optExtraThreads) {
      searchThreads.push.apply(searchThreads, optExtraThreads);
    }
    // Set of scripts that request a glow this frame.
    const requestedGlowsThisFrame = [];
    // Final set of scripts glowing during this frame.
    const finalScriptGlows = [];
    // Find all scripts that should be glowing.
    for (let i = 0; i < searchThreads.length; i++) {
      const thread = searchThreads[i];
      const target = thread.target;
      if (target === this._editingTarget) {
        const blockForThread = thread.blockGlowInFrame;
        if (thread.requestScriptGlowInFrame || thread.stackClick) {
          let script = this._editingTarget.blocks.getTopLevelScript(blockForThread);
          if (!tabs[selectedTab].scripts.includes(script)) {
            // Attempt to find in flyout blocks.
            script = this.flyoutBlocks.getTopLevelScript(blockForThread);
          }
          if (script) {
            requestedGlowsThisFrame.push(script);
          }
        }
      }
    }
    // Compare to previous frame.
    for (let j = 0; j < this._scriptGlowsPreviousFrame.length; j++) {
      const previousFrameGlow = this._scriptGlowsPreviousFrame[j];
      if (requestedGlowsThisFrame.indexOf(previousFrameGlow) < 0) {
        this.glowScript(previousFrameGlow, false);
      } else {
        // Still glowing.
        finalScriptGlows.push(previousFrameGlow);
      }
    }
    for (let k = 0; k < requestedGlowsThisFrame.length; k++) {
      const currentFrameGlow = requestedGlowsThisFrame[k];
      if (this._scriptGlowsPreviousFrame.indexOf(currentFrameGlow) < 0) {
        // Glow turned on.
        this.glowScript(currentFrameGlow, true);
        finalScriptGlows.push(currentFrameGlow);
      }
    }
    this._scriptGlowsPreviousFrame = finalScriptGlows;
  };
  const oldDuplicate = RenderedTarget.prototype.duplicate;
  RenderedTarget.prototype.duplicate = function () {
    // !!! this may have issues in the future as duplication creates new ids
    saveTabs();
    return oldDuplicate.call(this);
  };
  RenderedTarget.prototype.createComment = function (id, blockId, text, x, y, width, height, minimized) {
    if (!this.comments.hasOwnProperty(id)) {
      const newComment = new Comment(id, text, x, y, width, height, minimized);
      newComment.tab = selectedTab;
      if (blockId) {
        newComment.blockId = blockId;
        const blockWithComment = this.blocks.getBlock(blockId);
        if (blockWithComment) {
          blockWithComment.comment = id;
        } else {
          log.warn("Could not find block with id ".concat(blockId, " associated with commentId: ").concat(id));
        }
      }
      this.comments[id] = newComment;
    }
  };
  class MutatorWrapper {
    constructor(mute, blockId) {
      _defineProperty(this, "mutation", {});
      _defineProperty(this, "blockId", null);
      this.mutation = mute;
      this.blockId = blockId;
    }
    getInput() {
      return null;
    }
    getProcCode() {
      return this.mutation.proccode;
    }
    get workspace() {
      return ScratchBlocks.getMainWorkspace();
    }
    mutationToDom(generateShadows) {
      const blocks = vm.editingTarget.blocks;
      const str = blocks.mutationToXML(this.mutation);
      const parser = new DOMParser();
      const element = parser.parseFromString("<xml>".concat(str, "</xml>"), 'text/xml').firstChild.firstChild;
      if (generateShadows) element.setAttribute('generateshadows', 'true');
      return element;
    }
    domToMutation(dom) {
      const blocks = vm.editingTarget.blocks;
      this.mutation = blocks.XMLToMutation(dom);
      // event isnt ever fired for whatever reason????????
      blocks._blocks[this.blockId].mutation = this.mutation;
    }
  }
  // Make procedures get sourced from the target, rather then the workspace
  const oldProcedureMutations = ScratchBlocks.Procedures.allProcedureMutations;
  ScratchBlocks.Procedures.allProcedureMutations = function (root) {
    let blockMutes = oldProcedureMutations.call(this, root);
    if (!vm.editingTarget) return blockMutes;
    blockMutes = Object.fromEntries(blockMutes.map(mutation => [mutation.getAttribute('proccode'), mutation]));
    const blocks = vm.editingTarget.blocks;
    for (const id in blocks._blocks) {
      const block = blocks._blocks[id];
      if (block.opcode === 'procedures_prototype' && !blockMutes[block.mutation.proccode]) {
        const wrapper = new MutatorWrapper(block.mutation, id);
        blockMutes[block.mutation.proccode] = wrapper.mutationToDom(true);
      }
    }
    return Object.values(blockMutes);
  };
  ScratchBlocks.Procedures.getPrototypeBlock = function (procCode, workspace) {
    var defineBlock = Blockly.Procedures.getDefineBlock(procCode, workspace);
    if (defineBlock instanceof MutatorWrapper) {
      const blocks = vm.editingTarget.blocks;
      for (const id in blocks._blocks) {
        const block = blocks._blocks[id];
        if (block.opcode === 'procedures_prototype' && block.mutation.proccode === procCode) {
          return new MutatorWrapper(block.mutation, id);
        }
      }
    }
    if (defineBlock) {
      return defineBlock.getInput('custom_block').connection.targetBlock();
    }
    return null;
  };
  const oldDefineBlock = ScratchBlocks.Procedures.getDefineBlock;
  ScratchBlocks.Procedures.getDefineBlock = function (procCode, workspace) {
    const prototype = oldDefineBlock.call(this, procCode, workspace);
    if (!prototype) {
      const blocks = vm.editingTarget.blocks;
      for (const id in blocks._blocks) {
        const block = blocks._blocks[id];
        if (block.opcode === 'procedures_prototype' && block.mutation.proccode === procCode) {
          const parent = blocks._blocks[block.parent];
          return new MutatorWrapper(parent.mutation, id);
        }
      }
    }
    return prototype;
  };
  const oldCallers = ScratchBlocks.Procedures.getCallers;
  function checkBlocks(entry, blocks, check) {
    let block;
    do {
      block = blocks.getBlock(entry);
      entry = block.next;
      check(block);
      for (const name in block.inputs) {
        const input = block.inputs[name];
        checkBlocks(input.block, blocks, check);
      }
    } while (blocks.getBlock(block.next));
  }
  ScratchBlocks.Procedures.getCallers = function (name, ws, definitionRoot, allowRecursive) {
    let callers = oldCallers.call(this, name, ws, definitionRoot, allowRecursive);
    if (!vm.editingTarget) return callers;
    callers = Object.fromEntries(callers.map(item => [item.getProcCode(), item]));
    const blocks = vm.editingTarget.blocks;
    for (const id of blocks._scripts) {
      const block = blocks._blocks[id];
      if (!allowRecursive && (block.opcode === 'procedures_definition' || block.opcode === 'procedures_definition_return')) continue;
      checkBlocks(id, blocks, block => {
        var _callers, _block$mutation$procc, _callers$_block$mutat;
        if (block.opcode === 'procedures_call') (_callers$_block$mutat = (_callers = callers)[_block$mutation$procc = block.mutation.proccode]) !== null && _callers$_block$mutat !== void 0 ? _callers$_block$mutat : _callers[_block$mutation$procc] = new MutatorWrapper(block.mutation.block.id);
      });
    }
    return Object.values(callers);
  };
  // listen to when we start dragging blocks around
  const oldStartBlockDrag = Blockly.BlockDragger.prototype.startBlockDrag;
  Blockly.BlockDragger.prototype.startBlockDrag = function () {
    dragging = true;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return oldStartBlockDrag.call(this, ...args);
  };
  Blockly.BlockDragger.prototype.fireEndDragEvent_ = function (isOutside) {
    // make sure that xml is actually generated
    var event = new Blockly.Events.EndBlockDrag(this.draggingBlock_, true);
    // do apply the real value
    event.isOutside = isOutside;
    Blockly.Events.fire(event);
  };
  const codeTab = document.getElementById('react-tabs-1');
  const blockSpace = codeTab.getElementsByClassName('injectionDiv')[0];
  const flyout = blockSpace.getElementsByClassName('blocklyFlyout')[0];
  const toolbox = blockSpace.getElementsByClassName('blocklyToolboxDiv')[0];
  const scrollBar = document.createElement('div');
  scrollBar.classList.add('tab-scrollbar');
  const tabScroller = document.createElement('div');
  tabScroller.classList.add('tab-scroller');
  tabScroller.onmouseleave = () => hoveredTab = -1;
  const tabWrapper = document.createElement('div');
  tabWrapper.classList.add('tab-wrapper');
  tabWrapper.appendChild(tabScroller);
  tabWrapper.appendChild(scrollBar);
  (function animateBar() {
    const size = flyout.getBoundingClientRect();
    const altSize = toolbox.getBoundingClientRect();
    const boundSize = blockSpace.getBoundingClientRect();
    tabWrapper.style.width = "calc(100% - ".concat(Math.max(size.right, altSize.right) - boundSize.left, "px)");
    computeScrollbar();
    requestAnimationFrame(animateBar);
  })();
  blockSpace.appendChild(tabWrapper);
  const addButton = document.createElement('img');
  addButton.src = addon.self.getResource('/add.svg');
  addButton.textContent = '+';
  addButton.classList.add('tab-adder-button');
  tabScroller.appendChild(addButton);
  function scriptsHasBlock(scripts, block) {
    const top = vm.editingTarget.blocks.getTopLevelScript(block);
    return scripts.includes(top);
  }
  function selectTab(idx) {
    const {
      element: tab
    } = tabs[idx];
    selectedTab = idx;
    for (const meta of tabs) {
      if (!meta) continue;
      const {
        element: tab
      } = meta;
      tab.classList.remove('selected');
      tab.classList.remove('unselected');
      tab.classList.add('unselected');
    }
    tab.classList.toggle('unselected');
    tab.classList.toggle('selected');
    vm.emitWorkspaceUpdate();
    // clear glows to prevent glowOff throwing errors
    vm.runtime._scriptGlowsPreviousFrame = [];
    vm.runtime._updateGlows();
  }
  function addTab(enabled, name, scripts) {
    var _meta$name;
    const meta = {
      name: name,
      element: null,
      idx: -1,
      scripts: []
    };
    if (scripts) meta.scripts = [...scripts];
    meta.idx = tabs.push(meta) - 1;
    (_meta$name = meta.name) !== null && _meta$name !== void 0 ? _meta$name : meta.name = "Tab ".concat(meta.idx + 1);
    const tabOuter = document.createElement('div');
    tabOuter.classList.add('tab-bounds');
    const tab = document.createElement('div');
    meta.element = tab;
    tab.classList.add('tab');
    tab.classList.add('unselected');
    if (enabled) selectTab(meta.idx);
    tab.textContent = meta.name;
    tabOuter.onclick = () => {
      if (meta.idx === selectedTab) {
        const res = prompt("New name for ".concat(meta.name, "?"), meta.name);
        if (!res) return;
        meta.name = res;
        tab.textContent = meta.name;
        return;
      }
      selectTab(meta.idx);
    };
    tab.onmouseenter = () => {
      hoveredTab = meta.idx;
      if (dragging) {
        tab.classList.add('copying');
        tabOuter.classList.add('copying');
        tabWrapper.classList.add('copying');
        return;
      }
      tab.classList.add('hover');
    };
    tab.onmouseleave = () => {
      tab.classList.remove('copying');
      tabOuter.classList.remove('copying');
      tabWrapper.classList.remove('copying');
      tab.classList.remove('hover');
    };
    tabOuter.appendChild(tab);
    addButton.before(tabOuter);
    computeScrollbar();
  }
  function removeTab(idx) {
    if (tabs.length <= 1) return;
    const tab = tabs[idx];
    tab.element.parentElement.remove();
    tabs.splice(idx, 1);
    if (!tabs[selectedTab]) selectedTab--;
    const shouldntDelete = addon.settings.get('shouldDelete');
    for (const script of tab.scripts) {
      if (shouldntDelete == 'true') {
        tabs[selectedTab].scripts.push(script);
        continue;
      }
      tabTarget.blocks.deleteBlock(script);
    }
    // offset indecies
    for (const meta of tabs) if (meta.idx > idx) meta.idx--;
    selectTab(selectedTab);
    computeScrollbar();
  }
  addButton.onclick = () => addTab(true);
  function computeScrollbar() {
    scrollBar.hidden = true;
    const bodySize = tabScroller.getBoundingClientRect();
    const wrapperSize = tabWrapper.getBoundingClientRect();
    const diff = bodySize.width - wrapperSize.width;
    const len = wrapperSize.width - diff;
    if (len > wrapperSize.width) return;
    scrollBar.hidden = false;
    scrollBar.style.width = "".concat(len, "px");
    // clamp scroll into the viewbox
    scroll = Math.max(Math.min(scroll, diff), 0);
    scrollBar.style.left = "".concat(scroll, "px");
    tabScroller.style.left = "-".concat(scroll, "px");
  }
  tabWrapper.onwheel = e => {
    const bodySize = tabScroller.getBoundingClientRect();
    const wrapperSize = tabWrapper.getBoundingClientRect();
    const diff = bodySize.width - wrapperSize.width;
    // prefer deltaX, otherwise use deltaY
    scroll = Math.max(Math.min((e.deltaX || e.deltaY) + scroll, diff), 0);
    scrollBar.style.left = "".concat(scroll, "px");
    tabScroller.style.left = "-".concat(scroll, "px");
  };
  scrollBar.onmousedown = e => {
    scrollSelected = true;
    selectStartScroll = scroll;
    selectStartX = e.x;
  };
  document.addEventListener('mouseup', () => scrollSelected = false);
  document.addEventListener('mousemove', e => {
    if (!scrollSelected) return;
    const bodySize = tabScroller.getBoundingClientRect();
    const wrapperSize = tabWrapper.getBoundingClientRect();
    const diff = bodySize.width - wrapperSize.width;
    scroll = Math.max(Math.min(e.x - selectStartX + selectStartScroll, diff), 0);
    scrollBar.style.left = "".concat(scroll, "px");
    tabScroller.style.left = "-".concat(scroll, "px");
  });
  function loadTabs() {
    for (const comment of Object.values(tabTarget.comments)) {
      if (comment.text.startsWith(commentId)) {
        lastLoaded = comment.text;
        const savedTabs = JSON.parse(comment.text.slice(commentId.length));
        if (!(savedTabs !== null && savedTabs !== void 0 && savedTabs.length)) throw new Error('No saved tabs');
        const scripts = [...tabTarget.blocks._scripts];
        // despite this normally acting on script heads, still made this to handle any case where there are parents
        for (const blockId in tabTarget.blocks._blocks) {
          var _block$mutation;
          const block = tabTarget.blocks._blocks[blockId];
          if (!((_block$mutation = block.mutation) !== null && _block$mutation !== void 0 && _block$mutation.blockId)) continue;
          const oldId = block.id;
          const newId = block.id = block.mutation.blockId;
          const scriptIdx = tabTarget.blocks._scripts.indexOf(oldId);
          if (scriptIdx !== -1) tabTarget.blocks._scripts[scriptIdx] = newId;
          delete tabTarget.blocks._blocks[blockId];
          tabTarget.blocks._blocks[newId] = block;
          const next = tabTarget.blocks.getBlock(block.next);
          if (next && next.parent && next.parent === oldId) next.parent = newId;
          const parent = tabTarget.blocks.getBlock(block.parent);
          if (parent) {
            if (parent.next === oldId && parent.next && parent.next === oldId) parent.next = newId;else {
              for (const name in parent.inputs) {
                const input = parent.inputs[name];
                if (input.block === oldId && input.block && input.block === oldId) input.block = newId;
                if (input.shadow === oldId && input.shadow && input.shadow === oldId) input.shadow = newId;
              }
            }
          }
          for (const name in block.inputs) {
            const input = block.inputs[name];
            const oblock = tabTarget.blocks.getBlock(input.block);
            if (oblock && oblock.parent && oblock.parent === oldId) oblock.parent = newId;
            const shadow = tabTarget.blocks.getBlock(input.shadow);
            if (shadow && shadow.parent && shadow.parent === oldId) shadow.parent = newId;
          }
          if (block.topLevel) block.parent = null;
        }
        for (const tabIdx in savedTabs) {
          const tab = savedTabs[tabIdx];
          for (const cid of tab.comments) tabTarget.comments[cid].tab = tabIdx;
          for (const script of tab.scripts) {
            const idx = scripts.indexOf(script);
            scripts.splice(idx, 1);
          }
          addTab(tab.selected, tab.name, tab.scripts);
        }
        for (const script of scripts) tabs[selectedTab].scripts.push(script);
        return;
      }
    }
    throw new Error('No tab comment could be found');
  }
  function saveTabs() {
    const serial = tabs.filter(tab => tab.scripts.length > 0).map((tab, idx) => {
      for (const script of tab.scripts) {
        var _tabTarget$blocks$_bl, _tabTarget$blocks$_bl2;
        if (!tabTarget.blocks._blocks[script]) {
          console.warn('Ignoring none existent block', script, 'while saving for tab', selectedTab);
          continue;
        }
        (_tabTarget$blocks$_bl2 = (_tabTarget$blocks$_bl = tabTarget.blocks._blocks[script]).mutation) !== null && _tabTarget$blocks$_bl2 !== void 0 ? _tabTarget$blocks$_bl2 : _tabTarget$blocks$_bl.mutation = {
          children: []
        };
        tabTarget.blocks._blocks[script].mutation.blockId = script;
      }
      return {
        name: tab.name,
        scripts: tab.scripts,
        selected: selectedTab === idx,
        comments: Object.values(tabTarget.comments).filter(c => !c.text.startsWith(commentId) && c.tab == idx).map(c => c.id)
      };
    });
    for (const comment of Object.values(tabTarget.comments)) if (comment.text.startsWith(commentId)) return comment.text = commentId + JSON.stringify(serial);
    tabTarget.createComment(undefined, undefined, commentId + JSON.stringify(serial), 10, 10, -100000, -100000, true);
  }
  function hasCommentChanged() {
    for (const comment of Object.values(tabTarget.comments)) {
      if (comment.text === lastLoaded) return false;
    }
    return true;
  }
  vm.on('targetsUpdate', () => {
    // if editingTarget doesnt exist, tabTarget cant either
    if (!vm.editingTarget) return tabTarget = null;
    if (tabTarget && vm.editingTarget.id === tabTarget.id && !hasCommentChanged()) return;
    if (tabTarget) saveTabs();
    selectedTab = -1;
    while (tabs.length) tabs.shift();
    while (tabScroller.children.length > 1) tabScroller.children[0].remove();
    tabTarget = vm.editingTarget;
    try {
      loadTabs();
    } catch (err) {
      if (err.message !== 'No saved tabs' && err.message !== 'No tab comment could be found') console.warn('Couldnt read the serialized tabs', err);
      addTab(true, null, vm.editingTarget.blocks._scripts);
    }
    if (selectedTab < 0 || selectedTab >= tabs.length) selectTab(0);
  });
  const keysPressed = {};
  document.addEventListener('keydown', e => {
    keysPressed[e.key] = true;
    if (keysPressed['{']) {
      if (selectedTab > 0) selectTab(--selectedTab);
    }
    if (keysPressed['}']) {
      if (selectedTab + 1 < tabs.length) selectTab(++selectedTab);
    }
    if (keysPressed['_']) {
      if (tabs.length > 1) removeTab(selectedTab);
    }
    if (keysPressed['+']) {
      addTab(true);
    }
  });
  document.addEventListener('keyup', e => delete keysPressed[e.key]);
});

/***/ }),

/***/ "./src/addons/addons/onion-skinning/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/onion-skinning/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/onion-skinning/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/onion-skinning/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url-loader!./decrement.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/decrement.svg");
/* harmony import */ var _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! url-loader!./increment.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/increment.svg");
/* harmony import */ var _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url-loader!./settings.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/settings.svg");
/* harmony import */ var _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! url-loader!./toggle.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/onion-skinning/toggle.svg");
/* generated by pull.js */






const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a,
  "decrement.svg": _url_loader_decrement_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
  "increment.svg": _url_loader_increment_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
  "settings.svg": _url_loader_settings_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
  "toggle.svg": _url_loader_toggle_svg__WEBPACK_IMPORTED_MODULE_5__["default"]
};

/***/ }),

/***/ "./src/addons/addons/onion-skinning/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/onion-skinning/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console,
    msg
  } = _ref;
  const paper = await addon.tab.traps.getPaper();
  const paintEditorCanvasContainer = await addon.tab.waitForElement("[class^='paint-editor_canvas-container']");
  try {
    if (!("colorIndex" in addon.tab.redux.state.scratchPaint.fillMode)) {
      console.error("Detected new paint editor; this will be supported in future versions.");
      return;
    }
  } catch (_) {
    // The check can technically fail when Redux isn't supported (rare cases)
    // Just ignore in this case
  }
  const paperCanvas = paintEditorCanvasContainer[addon.tab.traps.getInternalKey(paintEditorCanvasContainer)].child.child.child.stateNode;
  const storedOnionLayers = [];
  const parseHexColor = color => {
    const hexString = color.substr(1);
    const hexNumber = parseInt(hexString, 16);
    return [hexNumber >> 16 & 0xff,
    // R
    hexNumber >> 8 & 0xff,
    // G
    hexNumber & 0xff // B
    ];
  };
  const settings = {
    enabled: addon.settings.get("default") && !addon.self.disabled,
    previous: +addon.settings.get("previous"),
    next: +addon.settings.get("next"),
    opacity: +addon.settings.get("opacity"),
    opacityStep: +addon.settings.get("opacityStep"),
    layering: addon.settings.get("layering"),
    mode: addon.settings.get("mode"),
    beforeTint: parseHexColor(addon.settings.get("beforeTint")),
    afterTint: parseHexColor(addon.settings.get("afterTint"))
  };
  const getPaperCenter = () => {
    const backgroundGuideLayer = paper.project.layers.find(i => i.data.isBackgroundGuideLayer);
    return backgroundGuideLayer.children[0].position;
  };
  const injectPaper = () => {
    // When background guide layer is added, show onion layers.
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L145
    const originalAddLayer = paper.Project.prototype.addLayer;
    paper.Project.prototype.addLayer = function (layer) {
      const result = originalAddLayer.call(this, layer);
      if (layer.data.isBackgroundGuideLayer) {
        let onion;
        while (onion = storedOnionLayers.shift()) {
          originalAddLayer.call(this, onion);
        }
        relayerOnionLayers();
      }
      return result;
    };

    // Scratch uses importJSON to undo or redo
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/undo.js#L37
    // The code prior to this will remove our onion layers, so we have to manually add them back.
    const originalImportJSON = paper.Project.prototype.importJSON;
    paper.Project.prototype.importJSON = function (json) {
      const result = originalImportJSON.call(this, json);
      if (settings.enabled) {
        updateOnionLayers();
      }
      return result;
    };

    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/helper/layer.js#L114
    // When background guide layer is removed, hide onion layers.
    const originalRemoveLayer = paper.Layer.prototype.remove;
    paper.Layer.prototype.remove = function () {
      if (this.data.isBackgroundGuideLayer) {
        for (const layer of paper.project.layers) {
          if (layer.data.sa_isOnionLayer) {
            storedOnionLayers.push(layer);
          }
        }
        for (const layer of storedOnionLayers) {
          layer.remove();
        }
      }
      return originalRemoveLayer.call(this);
    };
  };
  const injectPaperCanvas = () => {
    let expectingImport = false;
    const PaperCanvas = paperCanvas.constructor;

    // importImage is called to start loading an image.
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L124
    const originalImportImage = PaperCanvas.prototype.importImage;
    PaperCanvas.prototype.importImage = function () {
      expectingImport = true;
      removeOnionLayers();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return originalImportImage.call(this, ...args);
    };

    // recalibrateSize is called when the canvas finishes loading an image.
    // all paths of importImage will result in a call to this method.
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L310-L327
    // We use this to know when to add layers.
    const originalRecalibrateSize = PaperCanvas.prototype.recalibrateSize;
    PaperCanvas.prototype.recalibrateSize = function (callback) {
      return originalRecalibrateSize.call(this, () => {
        if (callback) callback();
        if (expectingImport) {
          expectingImport = false;
          if (settings.enabled) {
            updateOnionLayers();
          }
        }
      });
    };

    // Prototype overrides will work for all future instances, but Scratch manually binds some methods to `this`
    // so we have to manually copy them for the current instance (but not future instances)
    paperCanvas.recalibrateSize = PaperCanvas.prototype.recalibrateSize.bind(paperCanvas);
    paperCanvas.importImage = PaperCanvas.prototype.importImage.bind(paperCanvas);
  };
  const createOnionLayer = () => {
    const layer = new paper.Layer();
    layer.locked = true;
    layer.guide = true;
    layer.data.sa_isOnionLayer = true;
    return layer;
  };

  // Each onion layer update is given an ID
  // Because updating layers is async, we need this to cancel all but the most recent update
  let globalUpdateId = 0;
  const cancelOngoingUpdatesAndGetNewId = () => ++globalUpdateId;
  const removeOnionLayers = () => {
    cancelOngoingUpdatesAndGetNewId();
    const project = paper.project;
    if (!project) {
      return;
    }
    storedOnionLayers.length = 0;
    const layers = project.layers;
    // Iterate downward because we remove items mid-iteration
    for (let i = layers.length - 1; i >= 0; i--) {
      const layer = layers[i];
      if (layer.data.sa_isOnionLayer) {
        layer.remove();
      }
    }
  };
  const relayerOnionLayers = () => {
    const project = paper.project;
    if (!project) {
      return;
    }
    const onionLayer = project.layers.find(i => i.data.sa_isOnionLayer);
    if (!onionLayer) {
      return;
    }
    if (settings.layering === "front") {
      project.addLayer(onionLayer);
    } else {
      const rasterLayer = project.layers.find(i => i.data.isRasterLayer);
      if (rasterLayer.index === 0) {
        project.insertLayer(0, onionLayer);
      } else {
        project.insertLayer(1, onionLayer);
      }
    }
  };
  const recursePaperItem = (item, callback) => {
    if (item.children) {
      for (const child of item.children) {
        recursePaperItem(child, callback);
      }
    }
    callback(item);
  };
  const getTint = (red, green, blue, isBefore) => {
    const referenceColor = isBefore ? settings.beforeTint : settings.afterTint;
    const colorAverage = (red + green + blue) / 3 / 255;
    const WEIGHT = 1.5;
    const weighted = colorAverage / WEIGHT + (1 - 1 / WEIGHT);
    return [referenceColor[0] * weighted, referenceColor[1] * weighted, referenceColor[2] * weighted];
  };
  const toHexColor = _ref2 => {
    let [red, green, blue] = _ref2;
    const r = Math.round(red).toString(16).padStart(2, "0");
    const g = Math.round(green).toString(16).padStart(2, "0");
    const b = Math.round(blue).toString(16).padStart(2, "0");
    return "#".concat(r).concat(g).concat(b);
  };
  const getPaperColorTint = (color, isBefore) => toHexColor(getTint(color.red * 255, color.green * 255, color.blue * 255, isBefore));
  const tintRaster = (raster, isBefore) => {
    const {
      width,
      height
    } = raster.canvas;
    const context = raster.context;
    // TODO: check to see if this is a performance issue
    const imageData = context.getImageData(0, 0, width, height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4 /* RGBA */) {
      const red = data[i + 0];
      const green = data[i + 1];
      const blue = data[i + 2];
      const alpha = data[i + 3];
      if (alpha === 0) {
        continue;
      }
      const newTint = getTint(red, green, blue, isBefore);
      data[i + 0] = newTint[0];
      data[i + 1] = newTint[1];
      data[i + 2] = newTint[2];
    }
    context.putImageData(imageData, 0, 0);
  };
  const waitForAllRastersToLoad = root => {
    const promises = [];
    recursePaperItem(root, item => {
      if (item instanceof paper.Raster) {
        promises.push(new Promise((resolve, reject) => {
          item.on("load", () => resolve());
          item.on("error", () => reject(new Error("Raster inside SVG failed to load")));
        }));
      }
    });
    return Promise.all(promises);
  };
  const rasterizeVector = root => {
    const bounds = root.strokeBounds;
    const {
      width,
      height
    } = bounds;

    // Some browsers experience extremely poor performance when this value exceeds 3840.
    const MAX_SIZE = 3000;
    const maxScale = Math.min(MAX_SIZE / width, MAX_SIZE / height);
    const raster = new paper.Raster(new paper.Size(width, height));
    raster.remove();
    raster.smoothing = true;
    raster.guide = true;
    raster.locked = true;
    let renderedAtScale = 0;
    const originalDraw = raster.draw;
    raster.draw = function () {
      const displayedSize = this.getView().getZoom() * window.devicePixelRatio;
      const newScale = Math.max(1, Math.min(maxScale, 2 ** Math.ceil(Math.log2(displayedSize))));
      if (newScale > renderedAtScale) {
        renderedAtScale = newScale;
        const canvas = this.canvas;
        const ctx = this.context;

        // Based on https://github.com/LLK/paper.js/blob/16d5ff0267e3a0ef647c25e58182a27300afad20/src/item/Item.js#L1761
        const scaledWidth = width * newScale;
        const scaledHeight = height * newScale;
        canvas.width = scaledWidth;
        canvas.height = scaledHeight;
        this._size = new paper.Size(scaledWidth, scaledHeight);
        const topLeft = bounds.getTopLeft();
        const bottomRight = bounds.getBottomRight();
        const size = new paper.Size(bottomRight.subtract(topLeft));
        const matrix = new paper.Matrix().scale(newScale).translate(topLeft.negate());
        ctx.save();
        matrix.applyToContext(ctx);
        root.draw(ctx, new paper.Base({
          matrices: [matrix]
        }));
        ctx.restore();
        this.matrix.reset();
        this.transform(new paper.Matrix().translate(topLeft.add(size.divide(2))).scale(1 / newScale));
      }
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return originalDraw.call(this, ...args);
    };
    return raster;
  };
  const makeVectorOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    const {
      rotationCenterX,
      rotationCenterY
    } = costume;
    // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L196-L218
    asset = asset.split(/<\s*svg:/).join("<");
    asset = asset.split(/<\/\s*svg:/).join("</");
    const svgAttrs = asset.match(/<svg [^>]*>/);
    if (svgAttrs && svgAttrs[0].indexOf("xmlns=") === -1) {
      asset = asset.replace("<svg ", '<svg xmlns="http://www.w3.org/2000/svg" ');
    }
    const parser = new DOMParser();
    const svgDom = parser.parseFromString(asset, "text/xml");
    const viewBox = svgDom.documentElement.attributes.viewBox ? svgDom.documentElement.attributes.viewBox.value.match(/\S+/g) : null;
    if (viewBox) {
      for (let i = 0; i < viewBox.length; i++) {
        viewBox[i] = parseFloat(viewBox[i]);
      }
    }
    const handleLoad = root => {
      root.opacity = opacity;

      // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L274-L275
      recursePaperItem(root, i => {
        if (i.className === "PathItem") {
          i.clockwise = true;
        }
        if (i.className !== "PointText" && !i.children) {
          if (i.strokeWidth) {
            i.strokeWidth = i.strokeWidth * 2;
          }
        }
        i.locked = true;
        i.guide = true;
      });
      root.scale(2, new paper.Point(0, 0));
      if (settings.mode === "tint") {
        const gradients = new Set();
        recursePaperItem(root, i => {
          if (i.strokeColor) {
            i.strokeColor = getPaperColorTint(i.strokeColor, isBefore);
          }
          if (i.fillColor) {
            const gradient = i.fillColor.gradient;
            if (gradient) {
              if (gradients.has(gradient)) return;
              gradients.add(gradient);
              for (const stop of gradient.stops) {
                stop.color = getPaperColorTint(stop.color, isBefore);
              }
            } else {
              i.fillColor = getPaperColorTint(i.fillColor, isBefore);
            }
          }
          if (i.canvas) {
            tintRaster(i, isBefore);
          }
        });
      }
      const paperCenter = getPaperCenter();
      // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L277-L287
      if (typeof rotationCenterX !== "undefined" && typeof rotationCenterY !== "undefined") {
        let rotationPoint = new paper.Point(rotationCenterX, rotationCenterY);
        if (viewBox && viewBox.length >= 2 && !isNaN(viewBox[0]) && !isNaN(viewBox[1])) {
          rotationPoint = rotationPoint.subtract(viewBox[0], viewBox[1]);
        }
        root.translate(paperCenter.subtract(rotationPoint.multiply(2)));
      } else {
        root.translate(paperCenter.subtract(root.bounds.width, root.bounds.height));
      }
      return rasterizeVector(root);
    };
    paper.project.importSVG(asset, {
      expandShapes: true,
      insert: false,
      onLoad: root => {
        if (!root) {
          reject(new Error("could not load onion skin"));
          return;
        }
        resolve(waitForAllRastersToLoad(root).then(() => handleLoad(root)));
      }
    });
  });
  const makeRasterOnion = (opacity, costume, asset, isBefore) => new Promise((resolve, reject) => {
    let {
      rotationCenterX,
      rotationCenterY
    } = costume;
    const image = new Image();
    image.onload = () => {
      const paperCenter = getPaperCenter();
      const width = Math.min(paperCenter.x * 2, image.width);
      const height = Math.min(paperCenter.y * 2, image.height);

      // https://github.com/LLK/scratch-paint/blob/cdf0afc217633e6cfb8ba90ea4ae38b79882cf6c/src/containers/paper-canvas.jsx#L151-L156
      if (typeof rotationCenterX === "undefined") {
        rotationCenterX = width / 2;
      }
      if (typeof rotationCenterY === "undefined") {
        rotationCenterY = height / 2;
      }
      const raster = new paper.Raster(image);
      raster.opacity = opacity;
      raster.guide = true;
      raster.locked = true;
      const x = width / 2 + (paperCenter.x - rotationCenterX);
      const y = height / 2 + (paperCenter.y - rotationCenterY);
      raster.position = new paper.Point(x, y);
      raster.remove();
      if (settings.mode === "tint") {
        tintRaster(raster, isBefore);
      }
      resolve(raster);
    };
    image.onerror = () => {
      reject(new Error("could not load image"));
    };
    image.src = asset;
  });
  const getSelectedCostumeIndex = () => {
    const item = document.querySelector("[class*='selector_list-item'][class*='sprite-selector-item_is-selected']");
    if (!item) return -1;
    const numberEl = item.querySelector("[class*='sprite-selector-item_number']");
    if (!numberEl) return -1;
    return +numberEl.textContent - 1;
  };
  const updateOnionLayers = async () => {
    const project = paper.project;
    if (!project) {
      return;
    }
    const selectedCostumeIndex = getSelectedCostumeIndex();
    if (selectedCostumeIndex === -1) {
      return;
    }
    removeOnionLayers();
    const localUpdateId = cancelOngoingUpdatesAndGetNewId();
    const vm = addon.tab.traps.vm;
    if (!vm) {
      return;
    }
    const originalActiveLayer = project.activeLayer;
    const costumes = vm.editingTarget.sprite.costumes;
    const startIndex = Math.max(0, selectedCostumeIndex - settings.previous);
    const endIndex = Math.min(costumes.length - 1, selectedCostumeIndex + settings.next);
    try {
      const layersToCreate = [];
      for (let i = startIndex; i <= endIndex; i++) {
        if (i === selectedCostumeIndex) {
          continue;
        }
        const isBefore = i < selectedCostumeIndex;
        const distance = Math.abs(i - selectedCostumeIndex) - 1;
        const opacity = (settings.opacity - settings.opacityStep * distance) / 100;
        if (opacity <= 0) {
          continue;
        }
        layersToCreate.push({
          index: i,
          isBefore,
          opacity
        });
      }
      const onions = await Promise.all(layersToCreate.map(_ref3 => {
        let {
          index,
          isBefore,
          opacity
        } = _ref3;
        const onionCostume = costumes[index];
        const onionAsset = vm.getCostume(index);
        if (onionCostume.dataFormat === "svg") {
          return makeVectorOnion(opacity, onionCostume, onionAsset, isBefore);
        } else if (onionCostume.dataFormat === "png" || onionCostume.dataFormat === "jpg") {
          return makeRasterOnion(opacity, onionCostume, onionAsset, isBefore);
        } else {
          throw new Error("Unknown data format: ".concat(onionCostume.dataFormat));
        }
      }));

      // Make sure we haven't been cancelled
      if (globalUpdateId === localUpdateId) {
        const layer = createOnionLayer();
        for (const item of onions) {
          layer.addChild(item);
        }
        relayerOnionLayers();
      }
    } catch (e) {
      console.error(e);
    }

    // We must make sure to always reset the active layer to avoid corruption.
    originalActiveLayer.activate();
  };
  const setEnabled = _enabled => {
    if (settings.enabled === _enabled) {
      return;
    }
    settings.enabled = _enabled;
    if (settings.enabled) {
      if (settings.next === 0 && settings.previous === 0) {
        settings.previous = 1;
        layerInputs.previous.value = settings.previous;
      }
      if (settings.opacity === 0) {
        settings.opacity = 25;
        layerInputs.opacity.value = settings.opacity;
      }
      updateOnionLayers();
    } else {
      removeOnionLayers();
    }
    toggleButton.dataset.enabled = settings.enabled;
  };

  //
  // Controls below editor
  //

  const settingsChanged = onlyRelayerNeeded => {
    if (settings.previous === 0 && settings.next === 0 || settings.opacity === 0) {
      setEnabled(false);
      return;
    }
    if (settings.enabled) {
      if (onlyRelayerNeeded) {
        relayerOnionLayers();
      } else {
        updateOnionLayers();
      }
    } else if (settings.previous > 0 || settings.next > 0) {
      setEnabled(true);
    }
  };
  const createGroup = () => {
    const el = document.createElement("div");
    el.className = "sa-onion-group";
    return el;
  };
  const createButton = function createButton() {
    let {
      useButtonTag
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const el = document.createElement(useButtonTag ? "button" : "span");
    el.className = "sa-onion-button";
    el.setAttribute("role", "button");
    return el;
  };
  const createButtonImage = name => {
    const el = document.createElement("img");
    el.className = "sa-onion-image";
    el.draggable = false;
    el.dataset.image = name;
    el.loading = "lazy";
    el.src = addon.self.getResource("/" + name + ".svg") /* rewritten by pull.js */;
    return el;
  };
  const toggleControlsGroup = createGroup();
  addon.tab.displayNoneWhileDisabled(toggleControlsGroup, {
    display: "flex"
  });
  const toggleButton = createButton();
  toggleButton.dataset.enabled = settings.enabled;
  toggleButton.addEventListener("click", () => setEnabled(!settings.enabled));
  toggleButton.title = msg("toggle");
  toggleButton.appendChild(createButtonImage("toggle"));
  const settingButton = createButton();
  settingButton.addEventListener("click", () => setSettingsOpen(!areSettingsOpen()));
  settingButton.title = msg("settings");
  settingButton.appendChild(createButtonImage("settings"));

  //
  // Settings page
  //

  const settingPageWrapper = document.createElement("div");
  settingPageWrapper.className = "sa-onion-settings-wrapper";
  toggleControlsGroup.append(settingPageWrapper, toggleButton, settingButton);
  const settingsPage = document.createElement("div");
  settingsPage.className = "sa-onion-settings";
  const setSettingsOpen = open => {
    settingButton.dataset.enabled = open;
    settingsPage.dataset.visible = open;
  };
  const areSettingsOpen = () => settingsPage.dataset.visible === "true";
  const layerInputs = {};
  for (const type of ["previous", "next", "opacity", "opacityStep"]) {
    const container = document.createElement("label");
    container.className = "sa-onion-settings-line";
    const label = document.createElement("div");
    label.className = "sa-onion-settings-label";
    label.textContent = msg(type);
    container.appendChild(label);
    const group = createGroup();
    const currentButton = createButton();
    const filler = document.createElement("div");
    filler.style.width = "20px";
    currentButton.appendChild(filler);
    const currentInput = document.createElement("input");
    layerInputs[type] = currentInput;
    currentInput.className = "sa-onion-settings-input";
    currentInput.type = "number";
    currentInput.step = "1";
    currentInput.min = "0";
    currentInput.max = "100";
    currentInput.value = settings[type];
    currentInput.addEventListener("input", e => {
      if (currentInput.value.length === 0) {
        settings[type] = 0;
        settingsChanged();
        return;
      }
      let value = +currentInput.value;
      if (value > +currentInput.max) {
        value = +currentInput.max;
      } else if (value < 0) {
        value = 0;
      }
      currentInput.value = value;
      settings[type] = value;
      settingsChanged();
    });
    currentInput.addEventListener("blur", () => {
      if (!currentInput.value) {
        currentInput.value = "0";
      }
    });
    currentButton.appendChild(currentInput);
    const decrementButton = createButton();
    decrementButton.appendChild(createButtonImage("decrement"));
    decrementButton.addEventListener("click", () => {
      if (settings[type] > 0) {
        settings[type]--;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    const incrementButton = createButton();
    incrementButton.appendChild(createButtonImage("increment"));
    incrementButton.addEventListener("click", () => {
      if (settings[type] < +currentInput.max) {
        settings[type]++;
        currentInput.value = settings[type];
        settingsChanged();
      }
    });
    group.appendChild(decrementButton);
    group.appendChild(currentButton);
    group.appendChild(incrementButton);
    container.appendChild(group);
    settingsPage.appendChild(container);
  }
  const modeContainer = document.createElement("div");
  modeContainer.className = "sa-onion-settings-line";
  const modeLabel = document.createElement("div");
  modeLabel.className = "sa-onion-settings-label";
  modeLabel.textContent = msg("mode");
  const modeGroup = createGroup();
  modeContainer.appendChild(modeLabel);
  const modeMergeButton = createButton({
    useButtonTag: true
  });
  modeMergeButton.appendChild(document.createTextNode(msg("merge")));
  modeGroup.appendChild(modeMergeButton);
  modeMergeButton.addEventListener("click", e => {
    settings.mode = "merge";
    modeTintButton.dataset.enabled = false;
    modeMergeButton.dataset.enabled = true;
    settingsChanged();
  });
  modeMergeButton.dataset.enabled = settings.mode === "merge";
  const modeTintButton = createButton({
    useButtonTag: true
  });
  modeTintButton.appendChild(document.createTextNode(msg("tint")));
  modeGroup.appendChild(modeTintButton);
  modeTintButton.addEventListener("click", e => {
    settings.mode = "tint";
    modeTintButton.dataset.enabled = true;
    modeMergeButton.dataset.enabled = false;
    settingsChanged();
  });
  modeTintButton.dataset.enabled = settings.mode === "tint";
  modeContainer.appendChild(modeGroup);
  settingsPage.appendChild(modeContainer);
  const layeringContainer = document.createElement("div");
  layeringContainer.className = "sa-onion-settings-line";
  const layeringLabel = document.createElement("div");
  layeringLabel.className = "sa-onion-settings-label";
  layeringLabel.textContent = msg("layering");
  const layeringGroup = createGroup();
  layeringContainer.appendChild(layeringLabel);
  const layeringFrontButton = createButton({
    useButtonTag: true
  });
  layeringFrontButton.appendChild(document.createTextNode(msg("front")));
  layeringGroup.appendChild(layeringFrontButton);
  layeringFrontButton.addEventListener("click", e => {
    settings.layering = "front";
    layeringBehindButton.dataset.enabled = false;
    layeringFrontButton.dataset.enabled = true;
    settingsChanged(true);
  });
  layeringFrontButton.dataset.enabled = settings.layering === "front";
  const layeringBehindButton = createButton({
    useButtonTag: true
  });
  layeringBehindButton.appendChild(document.createTextNode(msg("behind")));
  layeringGroup.appendChild(layeringBehindButton);
  layeringBehindButton.addEventListener("click", e => {
    settings.layering = "behind";
    layeringBehindButton.dataset.enabled = true;
    layeringFrontButton.dataset.enabled = false;
    settingsChanged(true);
  });
  layeringBehindButton.dataset.enabled = settings.layering === "behind";
  layeringContainer.appendChild(layeringGroup);
  settingsPage.appendChild(layeringContainer);
  const SVG_NS = "http://www.w3.org/2000/svg";
  const settingsTip = document.createElementNS(SVG_NS, "svg");
  settingsTip.setAttribute("class", "sa-onion-settings-tip");
  settingsTip.setAttribute("width", "14");
  settingsTip.setAttribute("height", "7");
  const settingsTipShape = document.createElementNS(SVG_NS, "polygon");
  settingsTipShape.setAttribute("class", "sa-onion-settings-polygon");
  settingsTipShape.setAttribute("points", "0,0 7,7, 14,0");
  settingsTip.appendChild(settingsTipShape);
  settingsPage.appendChild(settingsTip);
  let oldEnabled = null;
  addon.self.addEventListener("disabled", () => {
    setSettingsOpen(false);
    oldEnabled = settings.enabled;
    setEnabled(false);
  });
  addon.self.addEventListener("reenabled", () => {
    setEnabled(oldEnabled);
  });
  const controlsLoop = async () => {
    let hasRunOnce = false;
    while (true) {
      const canvasControls = await addon.tab.waitForElement("[class^='paint-editor_canvas-controls']", {
        markAsSeen: true,
        reduxEvents: ["scratch-gui/navigation/ACTIVATE_TAB", "scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE", "scratch-gui/targets/UPDATE_TARGET_LIST"],
        reduxCondition: state => state.scratchGui.editorTab.activeTabIndex === 1 && !state.scratchGui.mode.isPlayerOnly
      });
      const zoomControlsContainer = canvasControls.querySelector("[class^='paint-editor_zoom-controls']");
      addon.tab.appendToSharedSpace({
        space: "paintEditorZoomControls",
        element: toggleControlsGroup,
        order: 1
      });
      settingPageWrapper.appendChild(settingsPage);
      if (!hasRunOnce) {
        hasRunOnce = true;
        const groupClass = zoomControlsContainer.firstChild.className;
        const buttonClass = zoomControlsContainer.firstChild.firstChild.className;
        const imageClass = zoomControlsContainer.firstChild.firstChild.firstChild.className;
        for (const el of document.querySelectorAll(".sa-onion-group")) {
          el.className += " " + groupClass;
        }
        for (const el of document.querySelectorAll(".sa-onion-button")) {
          el.className += " " + buttonClass;
        }
        for (const el of document.querySelectorAll(".sa-onion-image")) {
          el.className += " " + imageClass;
        }
      }
      if (settings.enabled) {
        updateOnionLayers();
      }
    }
  };
  injectPaper();
  injectPaperCanvas();
  controlsLoop();
});

/***/ }),

/***/ "./src/addons/addons/paint-default-smoothing/_runtime_entry.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/paint-default-smoothing/_runtime_entry.js ***!
  \*********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-default-smoothing/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-default-smoothing/userscript.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/paint-default-smoothing/userscript.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  // Wait until the paint editor is loaded
  await addon.tab.traps.getPaper();
  const defaultBrush = 10;
  const defaultEraser = 10;
  const defaultPen = 2;
  const setDefaults = enabled => {
    const userBrush = addon.settings.get("brush");
    const userEraser = addon.settings.get("eraser");
    const userPen = addon.settings.get("pen");
    const currentState = ReduxStore.getState();
    const currentStatePaint = currentState.scratchPaint;
    if (enabled) {
      if (currentStatePaint.brushMode.simplifySize === defaultBrush) {
        ReduxStore.dispatch({
          type: 'scratch-paint/brush-mode/CHANGE_SIMPLIFY_SIZE',
          simplifySize: userBrush
        });
      }
      if (currentStatePaint.eraserMode.simplifySize === defaultEraser) {
        ReduxStore.dispatch({
          type: 'scratch-paint/eraser-mode/CHANGE_ERASER_SIMPLIFY_SIZE',
          simplifySize: userEraser
        });
      }
      if (currentStatePaint.penMode.simplifySize === defaultPen) {
        ReduxStore.dispatch({
          type: 'scratch-paint/pen-mode/CHANGE_PEN_SIMPLIFY_SIZE',
          simplifySize: userPen
        });
      }
    } else {
      if (currentStatePaint.brushMode.simplifySize === userBrush) {
        ReduxStore.dispatch({
          type: 'scratch-paint/brush-mode/CHANGE_SIMPLIFY_SIZE',
          simplifySize: defaultBrush
        });
      }
      if (currentStatePaint.eraserMode.simplifySize === userEraser) {
        ReduxStore.dispatch({
          type: 'scratch-paint/eraser-mode/CHANGE_ERASER_SIMPLIFY_SIZE',
          simplifySize: defaultEraser
        });
      }
      if (currentStatePaint.penMode.simplifySize === userPen) {
        ReduxStore.dispatch({
          type: 'scratch-paint/pen-mode/CHANGE_PEN_SIMPLIFY_SIZE',
          simplifySize: defaultPen
        });
      }
    }
  };
  setDefaults(true);
  addon.self.addEventListener("disabled", () => {
    setDefaults(false);
  });
  addon.self.addEventListener("reenabled", () => {
    setDefaults(true);
  });
});

/***/ }),

/***/ "./src/addons/addons/paint-gradient-maker/_runtime_entry.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/paint-gradient-maker/_runtime_entry.js ***!
  \******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-gradient-maker/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-gradient-maker/userscript.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/paint-gradient-maker/userscript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Gradient Maker Addon
// By: SharkPool
/* harmony default export */ __webpack_exports__["default"] = (async function () {
  const isPM = true;
  const customID = "custom-gradient-btn";
  const symbolTag = Symbol("custom-gradient-tag");
  const guiIMGS = {
    "select": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><rect stroke=\"#000\" fill=\"#fff\" x=\".5\" y=\".5\" width=\"19\" height=\"19\" rx=\"4\" stroke-opacity=\".15\"/><path fill=\"red\" d=\"M13.35 8.8h-2.4V6.4a1.2 1.2 90 0 0-2.4 0l.043 2.4H6.15a1.2 1.2 90 0 0 0 2.4l2.443-.043L8.55 13.6a1.2 1.2 90 0 0 2.4 0v-2.443l2.4.043a1.2 1.2 90 0 0 0-2.4\"/></svg>",
    "add": "<svg viewBox=\"2 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"red\" d=\"M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4\"></path></svg>",
    "delete": "<svg viewBox=\"2 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"red\" d=\"M 18 10 h -4 H 6 a 2 2 0 0 0 0 4 L 18 14 a 2 2 0 0 0 0 -4\"></path></svg>"
  };
  const paperLinkModes = new Set(["TEXT", "OVAL", "RECT", ...(isPM ? ["ROUNDED_RECT", "TRIANGLE", "SUSSY", "ARROW"] : [])]);
  let selectedClassName, unselectedClassName, customBtn;
  let observerUsed = false;
  let modalStorage = {};

  /* Internal Utils */
  function position2Angle(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    return angle + 90;
  }
  function initGradSelectClasses(gradRow) {
    const classes = {};
    const children = Array.from(gradRow.children);
    for (const child of children) {
      const name = child.classList.toString();
      if (classes[name] === undefined) classes[name] = 1;else classes[name] = 0;
    }
    for (const [cls, count] of Object.entries(classes)) {
      if (count) selectedClassName = cls;else unselectedClassName = cls;
    }
  }
  function encodeGradHTML(settings) {
    const sortedParts = [...settings.parts].sort((a, b) => a.p - b.p);
    let gradString = settings.type === "Linear" ? "linear-gradient(" : "radial-gradient(";
    if (settings.type === "Linear") gradString += "".concat(settings.dir, "deg, ");
    for (const part of sortedParts) gradString += "".concat(part.c, " ").concat(part.p, "%, ");
    return gradString.substring(0, gradString.length - 2) + ")";
  }
  function genLinearGradPoints(bounds, angleDeg) {
    const center = bounds.center;
    const dir = new paper.Point({
      angle: angleDeg,
      length: 1
    });
    const boundsRect = new paper.Path.Rectangle(bounds);
    const gradLine = new paper.Path.Line({
      from: center.subtract(dir.multiply(10000)),
      to: center.add(dir.multiply(10000))
    });
    const intersections = gradLine.getIntersections(boundsRect);
    gradLine.remove();
    boundsRect.remove();
    if (intersections.length < 2) {
      return {
        origin: center.subtract(dir.multiply(bounds.width / 2)),
        destination: center.add(dir.multiply(bounds.width / 2))
      };
    } else {
      return {
        origin: intersections[0].point,
        destination: intersections[1].point
      };
    }
  }
  function setSelected2Grad(settings) {
    // compile SVG-based gradient
    const sortedParts = [...settings.parts].sort((a, b) => a.p - b.p);
    const gradStops = sortedParts.map(part => new paper.GradientStop(part.c, part.p / 100));
    const gradient = new paper.Gradient(gradStops, settings.type === "Radial");
    modalStorage._gradCache = {
      settings,
      gradient
    };
    paper.project.getSelectedItems().forEach(item => {
      let origin, destination;
      if (settings.type === "Radial") {
        origin = item.bounds.center;
        destination = item.bounds.center.add([item.bounds.width / 2, 0]);
      } else {
        const points = genLinearGradPoints(item.bounds, settings.dir - 90);
        origin = points.origin;
        destination = points.destination;
      }
      item[settings.path] = {
        gradient,
        origin,
        destination
      };
    });

    // update drawing & action
    if (paper.tool.onUpdateImage) paper.tool.onUpdateImage();

    // set with html otherwise GUI will crash
    const swatch = document.querySelectorAll("div[class^=color-button_color-button_] div[class^=color-button_color-button-swatch_]")[settings.path === "fillColor" ? 0 : 1];
    if (swatch) swatch.style.background = encodeGradHTML(settings);
  }
  function paperGrad2CSS(paperGrad) {
    const {
      gradient,
      origin,
      destination
    } = paperGrad;
    if (!gradient || !origin || !destination) return null;
    const stops = gradient.stops.map(s => "".concat(s.color.toCSS(true), " ").concat(Math.round(s.offset * 100), "%"));
    if (gradient.radial) return "radial-gradient(circle, ".concat(stops.join(", "), ")");else return "linear-gradient(".concat(position2Angle(destination, origin), "deg, ").concat(stops.join(", "), ")");
  }
  function extractGradient(color) {
    if (!color || !color.gradient) return {};
    return {
      gradient: color.gradient,
      origin: color.origin || "",
      destination: color.destination || color.highlight || ""
    };
  }
  function decodeSelectedGrad(item, draggableDiv, settingsDiv) {
    const {
      gradient,
      origin,
      destination
    } = extractGradient(item[modalStorage.path]);
    if (!gradient || !origin || !destination) return draggableDiv.append(createDraggable(), createDraggable());

    // create draggables
    const newStops = gradient.stops.map((s, i) => {
      // "offset" will be undefined when using Scratch gradients, which dont have set-stops
      const alpha = Math.round(s.color.alpha * 255).toString(16).padStart(2, "0");
      return createDraggable(s.color.toCSS(true) + alpha, s.offset ? s.offset * 100 : i * 100);
    });
    draggableDiv.append(...newStops);

    // preset values
    const angle = position2Angle(destination, origin);
    settingsDiv.querySelector("select").value = gradient.radial ? "Radial" : "Linear";
    settingsDiv.querySelector("input").value = angle;
    modalStorage.type = gradient.radial ? "Radial" : "Linear";
    modalStorage.dir = angle;
  }
  function decodeFromCache(settings, draggableDiv, settingsDiv) {
    // create draggables
    const newStops = settings.parts.map((s, i) => {
      // "p" will be NaN when using Scratch gradients, which dont have set-stops
      return createDraggable(s.c, isNaN(s.p) ? i * 100 : s.p);
    });
    draggableDiv.append(...newStops);

    // preset values
    settingsDiv.querySelector("select").value = settings.type;
    settingsDiv.querySelector("input").value = settings.dir;
    modalStorage.type = settings.type;
    modalStorage.dir = settings.dir;
  }
  function handleFillEvent(paint) {
    if (!modalStorage._gradCache) return;

    // set the GUI gradient mode to linear so we can position our gradients
    paint.fillMode.gradientType = "HORIZONTAL";
    paint.color.fillColor.gradientType = "HORIZONTAL";
    paint.color.strokeColor.gradientType = "HORIZONTAL";

    // set the swatch color in case the GUI resets it
    const swatch = document.querySelector("div[class^=color-button_color-button_] div[class^=color-button_color-button-swatch_]");
    if (swatch) queueMicrotask(() => {
      if (!modalStorage._gradCache) return;
      swatch.style.background = encodeGradHTML(modalStorage._gradCache.settings);
    });
    const tool = paper.tool;
    if (typeof (tool === null || tool === void 0 ? void 0 : tool._getFillItem) !== "function") return;
    const item = tool._getFillItem();
    if (!item) return;
    const bounds = item.bounds;
    let origin, destination;
    if (modalStorage.type === "Radial") {
      origin = new paper.Point(tool._point.x, tool._point.y);
      destination = origin.add([Math.max(bounds.width, bounds.height) / 2, 0]);
    } else {
      const points = genLinearGradPoints(bounds, modalStorage.dir - 90);
      origin = points.origin;
      destination = points.destination;
    }
    const path = tool.fillProperty === "fill" ? "fillColor" : "strokeColor";
    item[path] = {
      gradient: modalStorage._gradCache.gradient,
      origin,
      destination
    };
  }
  function handleShapeModeEvent(type) {
    if (!modalStorage._gradCache && type !== "TEXT") return;

    // set the swatch color in case the GUI resets it
    const swatch = document.querySelector("div[class^=color-button_color-button_] div[class^=color-button_color-button-swatch_]");
    if (swatch) queueMicrotask(() => {
      if (!modalStorage._gradCache) return;
      swatch.style.background = encodeGradHTML(modalStorage._gradCache.settings);
    });
    const tool = paper.tool;
    if (typeof (tool === null || tool === void 0 ? void 0 : tool._onMouseDrag) !== "function") return;
    if (tool[symbolTag]) return;
    // patch this event, if not already, to run our code

    const funcName = type === "TEXT" ? "onKeyDown" : "onMouseDrag";
    const ogOnFunc = tool[funcName];
    tool[symbolTag] = true;
    tool[funcName] = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      ogOnFunc.call(this, ...args);

      // replace the fill with the custom gradient
      if (!modalStorage._gradCache) {
        if (type === "TEXT") {
          tool.element.style.background = "";
          tool.element.style.backgroundClip = "";
          tool.element.style.color = "";
        }
        return;
      }
      let item;
      switch (type) {
        case "RECT":
          item = this.rect;
          break;
        case "OVAL":
          item = this.oval;
          break;
        case "TEXT":
          item = this.textBox;
          break;
        /* PenguinMod shapes */
        case "ROUNDED_RECT":
          item = this.rect;
          break;
        case "TRIANGLE":
          item = this.tri;
          break;
        case "SUSSY":
          item = this.sussy;
          break;
        case "ARROW":
          item = this.tri;
          break;
        default:
          return;
      }
      if (!item) return;
      const bounds = item.bounds;
      let origin, destination;
      if (modalStorage.type === "Radial") {
        origin = item.bounds.center;
        destination = item.bounds.center.add([item.bounds.width / 2, 0]);
      } else {
        const points = genLinearGradPoints(bounds, modalStorage.dir - 90);
        origin = points.origin;
        destination = points.destination;
      }
      item.fillColor = {
        gradient: modalStorage._gradCache.gradient,
        origin,
        destination
      };

      // text uses HTML elements, so we have to handle that too
      if (type === "TEXT") {
        tool.element.style.background = encodeGradHTML(modalStorage._gradCache.settings);
        tool.element.style.backgroundClip = "text";
        tool.element.style.color = "transparent";
      }
    };
  }

  /* GUI Utils */
  function getButtonURI(name, dontCompile) {
    const themeHex = isPM ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c";
    const guiSVG = guiIMGS[name].replace("red", themeHex);
    if (dontCompile) return guiSVG;else return "data:image/svg+xml;base64," + btoa(guiSVG);
  }
  function showSelectedGrad(item) {
    const [fillSwatch, outlineSwatch] = document.querySelectorAll("div[class^=color-button_color-button_] div[class^=color-button_color-button-swatch_]");
    const outCSSGrad = paperGrad2CSS(extractGradient(item.strokeColor));
    if (outlineSwatch) {
      if (outCSSGrad) outlineSwatch.style.background = outCSSGrad;else if (!item.strokeColor || item.strokeWidth === 0) outlineSwatch.style.background = "#fff";
    }
    const fillGrad = extractGradient(item.fillColor);
    const fillCSSGrad = paperGrad2CSS(fillGrad);
    modalStorage._gradCache = undefined;
    if (fillSwatch) {
      if (fillCSSGrad) {
        fillSwatch.style.background = fillCSSGrad;

        // update cache
        const {
          gradient,
          destination,
          origin
        } = fillGrad;
        modalStorage._gradCache = {
          gradient,
          settings: {
            type: gradient.radial ? "Radial" : "Linear",
            dir: position2Angle(destination, origin),
            parts: gradient.stops.map(s => {
              const alpha = Math.round(s.color.alpha * 255).toString(16).padStart(2, "0");
              return {
                c: s.color.toCSS(true) + alpha,
                p: s.offset * 100
              };
            })
          }
        };
      } else if (!item.fillColor) fillSwatch.style.background = "#fff";
    }
  }
  function createDraggable(optC, optP) {
    const index = modalStorage.parts.length;
    const rngPos = optP !== null && optP !== void 0 ? optP : Math.floor(Math.random() * 100);
    const rngHex = optC !== null && optC !== void 0 ? optC : "#".concat(Math.floor(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, "0"));
    const opacity = optC ? optC.length === 9 ? parseInt(optC.slice(7, 9), 16) / 255 : 1 : 1;
    const draggable = document.createElement("div");
    draggable.id = index;
    draggable.classList.add("pointer");
    draggable.setAttribute("style", "cursor: pointer; width: 25px; position: absolute; top: -6px; transform: translateX(-50%);");
    draggable.style.left = "".concat(rngPos, "%");
    const nub = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    nub.setAttribute("width", "14");
    nub.setAttribute("height", "7");
    nub.style.transform = "translateX(45%)";
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("points", "0,7 7,0 14,7");
    polygon.setAttribute("stroke", "#fff");
    polygon.setAttribute("fill", "#fff");
    nub.appendChild(polygon);
    const color = document.createElement("div");
    color.setAttribute("style", "width: 25px; height: 25px; border-radius: 4px; background: #fff; display: flex; justify-content: center; align-items: center; flex-direction: column;");
    const colorContainer = document.createElement("div");
    colorContainer.setAttribute("style", "width: 16px; height: 16px; border-radius: 5px; background: ".concat(rngHex, "; border: solid 2px rgba(0,0,0,.2); opacity: ").concat(opacity, "; margin-bottom: 2px;"));
    const colorInput = document.createElement("input");
    colorInput.setAttribute("type", "color");
    colorInput.setAttribute("style", "opacity: 0; position: absolute; pointer-events: none;");
    const opacityInput = document.createElement("input");
    opacityInput.setAttribute("type", "number");
    opacityInput.setAttribute("min", "0");
    opacityInput.setAttribute("max", "100");
    opacityInput.value = opacity * 100;
    opacityInput.setAttribute("style", "visibility: hidden; background: #fff; border: none; color: #000; text-align: center; position: absolute; pointer-events: auto; width: 45px; height: 25px; padding: 0; margin: 0; border-radius: 0 5px 5px 0; left: 22px;");

    // Color picker handler
    colorContainer.addEventListener("click", e => {
      opacityInput.style.visibility = "visible";
      colorInput.click();
      e.stopPropagation();
    });
    draggable.addEventListener("mouseleave", e => {
      opacityInput.style.visibility = "hidden";
      e.stopPropagation();
    });
    colorInput.addEventListener("input", e => {
      modalStorage.parts[index].c = e.target.value;
      colorContainer.style.background = e.target.value;
      updateDisplay();
    });

    // Opacity slider handler
    opacityInput.addEventListener("click", e => {
      opacityInput.focus();
      e.stopPropagation();
    });
    opacityInput.addEventListener("input", e => {
      const newOpacity = Math.min(100, Math.max(0, e.target.value));
      e.target.value = newOpacity;
      colorContainer.style.opacity = newOpacity / 100;
      const alpha = Math.round(newOpacity * 2.55).toString(16).padStart(2, "0");
      const hex = modalStorage.parts[index].c;
      modalStorage.parts[index].c = hex.substring(0, 7) + alpha;
      updateDisplay();
    });
    draggable.addEventListener("mousedown", e => {
      e.preventDefault();
      if (e.target === opacityInput) return;
      modalStorage.selectedPointer = draggable;
      const container = draggable.parentElement;
      const containerRect = container.getBoundingClientRect();
      const onMouseMove = moveEvent => {
        const x = moveEvent.clientX - containerRect.left;
        const percent = Math.min(100, Math.max(0, x / container.offsetWidth * 100));
        draggable.style.left = "".concat(percent, "%");
        modalStorage.parts[index].p = percent;
        updateDisplay();
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
    color.append(colorContainer, colorInput, opacityInput);
    draggable.append(nub, color);
    modalStorage.parts.push({
      c: rngHex,
      p: rngPos
    });
    modalStorage.selectedPointer = draggable;
    return draggable;
  }
  function genSettingsTable(div) {
    const btnStyle = "width: 35px; height: 35px; border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px; background: var(--paint-input-background, --ui-primary, #fff); transition: transform 0.2s;";
    const selectStlye = "cursor: pointer; height: 30px; margin: 5px; border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px; background: var(--ui-secondary, #fff);";
    const directionStyle = "text-align: center; width: 50px; height: 25px; margin: 5px; border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px; background: var(--ui-secondary, #fff);";
    const createBtn = document.createElement("button");
    createBtn.setAttribute("style", btnStyle);
    createBtn.setAttribute("onmouseover", "this.style.transform=\"scale(1.1)\"");
    createBtn.setAttribute("onmouseout", "this.style.transform=\"scale(1)\"");
    createBtn.innerHTML = getButtonURI("add", true);
    createBtn.addEventListener("click", e => {
      const draggableSpace = modalStorage.modal.querySelector("div[class=\"draggables\"]");
      draggableSpace.appendChild(createDraggable());
      updateDisplay();
      e.stopPropagation();
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("style", btnStyle);
    deleteBtn.setAttribute("onmouseover", "this.style.transform=\"scale(1.1)\"");
    deleteBtn.setAttribute("onmouseout", "this.style.transform=\"scale(1)\"");
    deleteBtn.style.margin = "0px 8px";
    deleteBtn.innerHTML = getButtonURI("delete", true);
    deleteBtn.addEventListener("click", e => {
      const pointer = modalStorage.selectedPointer;
      if (pointer) {
        modalStorage.parts.splice(pointer.id, 1);
        pointer.remove();
        updateDisplay();
        delete modalStorage.selectedPointer;
      }
      e.stopPropagation();
    });
    const title1 = document.createElement("span");
    title1.textContent = "Gradient Type:";
    const select = document.createElement("select");
    select.setAttribute("style", selectStlye);
    const option1 = document.createElement("option");
    const option2 = document.createElement("option");
    option1.text = "Linear";
    option1.value = "Linear";
    option2.text = "Radial";
    option2.value = "Radial";
    select.append(option1, option2);
    select.addEventListener("change", e => {
      modalStorage.type = e.target.value;
      updateDisplay();
      e.stopPropagation();
    });
    const title2 = document.createElement("span");
    title2.textContent = "Direction:";
    const dirBtn = document.createElement("input");
    dirBtn.setAttribute("style", directionStyle);
    dirBtn.setAttribute("type", "number");
    dirBtn.setAttribute("max", 360);
    dirBtn.setAttribute("min", 0);
    dirBtn.setAttribute("value", 90);
    dirBtn.addEventListener("input", e => {
      modalStorage.dir = e.target.value;
      updateDisplay();
      e.stopPropagation();
    });
    div.append(createBtn, deleteBtn, title1, select, title2, dirBtn);
  }
  function genButtonTable(div) {
    const themeHex = isPM ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c";
    const btnStyle = "color: #fff; font-weight: 600; text-align: center; padding: 10px; margin: 10px 5px; border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px; background: ".concat(themeHex, "; transition: transform 0.2s;");
    const enterBtn = document.createElement("button");
    enterBtn.id = "enter";
    enterBtn.setAttribute("style", btnStyle);
    enterBtn.setAttribute("onmouseover", "this.style.transform=\"scale(1.1)\"");
    enterBtn.setAttribute("onmouseout", "this.style.transform=\"scale(1)\"");
    enterBtn.textContent = "Okay";
    const cancelBtn = document.createElement("button");
    cancelBtn.id = "cancel";
    cancelBtn.setAttribute("style", btnStyle);
    cancelBtn.setAttribute("onmouseover", "this.style.transform=\"scale(1.1)\"");
    cancelBtn.setAttribute("onmouseout", "this.style.transform=\"scale(1)\"");
    cancelBtn.textContent = "Cancel";
    div.append(cancelBtn, enterBtn);
  }
  function updateDisplay() {
    const display = modalStorage.modal.querySelector("div[class=\"color-display\"]");
    display.style.background = encodeGradHTML(modalStorage);
  }

  /* Main GUI */
  function openGradientMaker() {
    var _paint$selectedItems;
    const paint = ReduxStore.getState().scratchPaint;
    const oldCache = modalStorage._gradCache;
    modalStorage = {
      parts: [],
      type: "Linear",
      dir: 90,
      selectedPointer: undefined,
      modal: undefined,
      path: paint.modals.fillColor ? "fillColor" : "strokeColor"
    };
    const container = document.createElement("div");
    container.classList.add("SP-gradient-maker");
    container.setAttribute("style", "position: absolute; z-index: 9999; pointer-events: auto; background-color: transparent; width: 100%; height: 100vh;");
    const modal = document.createElement("div");
    modal.classList.add("gradient-modal");
    modal.setAttribute("style", "pointer-events: auto; color: var(--paint-text-primary, #575e75); width: 450px; height: 260px; display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: var(--ui-secondary, hsla(215, 75%, 95%, 1)); border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px; padding: 15px;");
    modalStorage.modal = modal;
    const title = document.createElement("span");
    title.setAttribute("style", "display: block; text-align: center; justify-content: center; border-bottom: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); padding-bottom: 10px; margin: 0 25px 0 25px; font-weight: 600;\"");
    title.textContent = "Gradient Maker";
    const display = document.createElement("div");
    display.classList.add("color-display");
    display.setAttribute("style", "width: 420px; height: 40px; display: flex; justify-content: center; align-items: center; margin: 15px 15px 0 15px; border: solid 2px grey; border-radius: 5px 5px 0 0;");
    const draggables = document.createElement("div");
    draggables.classList.add("draggables");
    draggables.setAttribute("style", "width: 420px; height: 40px; position: relative; display: flex; justify-content: center; align-items: center; margin: 0 15px 15px 15px; border: solid 2px grey; border-radius: 0 0 5px 5px; background: #111111;");
    const settings = document.createElement("div");
    settings.classList.add("settings");
    settings.setAttribute("style", "border-top: dashed 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); padding-top: 10px; display: flex; justify-content: center; align-items: center;");
    genSettingsTable(settings);
    const buttons = document.createElement("div");
    buttons.setAttribute("style", "display: flex; justify-content: center; align-items: center;");
    genButtonTable(buttons);
    buttons.addEventListener("click", e => {
      if (e.target.id) {
        if (e.target.id === "enter") setSelected2Grad(modalStorage);
        container.remove();
      }
      e.stopPropagation();
    });
    modal.append(title, display, draggables, settings, buttons);
    container.appendChild(modal);
    document.body.appendChild(container);
    if ((_paint$selectedItems = paint.selectedItems) !== null && _paint$selectedItems !== void 0 && _paint$selectedItems.length) decodeSelectedGrad(paint.selectedItems[0], draggables, settings);else if (oldCache) decodeFromCache(oldCache.settings, draggables, settings);else draggables.append(createDraggable(), createDraggable());
    updateDisplay();
    container.addEventListener("click", e => {
      if (e.target.getAttribute("class") === "SP-gradient-maker") container.remove();
      e.stopPropagation();
    });
  }
  function startListenerWorker() {
    let lastMode, lastSelected, lastModals;
    ReduxStore.subscribe(() => {
      const paint = ReduxStore.getState().scratchPaint;
      if (!paint || (paint === null || paint === void 0 ? void 0 : paint.format) === undefined || (paint === null || paint === void 0 ? void 0 : paint.format) === null) return;
      const {
        mode,
        selectedItems,
        modals
      } = paint;

      // no bitmap support :(
      if (paint.format.startsWith("BITMAP")) {
        if (customBtn) {
          customBtn.remove();
          customBtn = undefined;
        }
        return;
      }

      // run relative tool events
      if (mode === "FILL") handleFillEvent(paint);else if (paperLinkModes.has(mode)) handleShapeModeEvent(mode);
      const idChain = selectedItems.map(e => e.id).join(".");
      const modalChain = "".concat(modals.fillColor).concat(modals.strokeColor);
      if (mode === lastMode && idChain === lastSelected && modalChain === lastModals) return;
      lastMode = mode;
      lastSelected = idChain;
      lastModals = modalChain;

      // decode potential custom gradients
      if (selectedItems !== null && selectedItems !== void 0 && selectedItems.length) showSelectedGrad(selectedItems[0]);else if (mode === "SELECT" || mode === "RESHAPE") modalStorage._gradCache = undefined;

      // add custom modal
      if (!modals.strokeColor && !modals.fillColor) return;
      if (observerUsed) return;
      const observer = new MutationObserver(() => {
        const gradRow = document.querySelector("div[class^=\"color-picker_gradient-picker-row_\"]");
        if (!gradRow || gradRow.lastElementChild.id === customID) return;

        // get the appropriate class names for selected items
        if (!selectedClassName) initGradSelectClasses(gradRow);
        const children = Array.from(gradRow.children);
        customBtn = children[0].cloneNode(true);
        customBtn.src = getButtonURI("select");
        customBtn.id = customID;
        customBtn.setAttribute("class", unselectedClassName);
        gradRow.appendChild(customBtn);
        gradRow.addEventListener("click", e => {
          if (e.target === customBtn) {
            for (const child of children) child.setAttribute("class", unselectedClassName);
            customBtn.setAttribute("class", selectedClassName);
            openGradientMaker();
          } else if (e.target.nodeName === "IMG") {
            modalStorage._gradCache = undefined;
            customBtn.setAttribute("class", unselectedClassName);
          }
        });
        observerUsed = false;
        observer.disconnect();
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
      observerUsed = true;
    });
  }
  if (typeof scaffolding === "undefined") startListenerWorker();
});

/***/ }),

/***/ "./src/addons/addons/paint-reshape-tweaks/_runtime_entry.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/paint-reshape-tweaks/_runtime_entry.js ***!
  \******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-reshape-tweaks/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-reshape-tweaks/userscript.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/paint-reshape-tweaks/userscript.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Reshape Tool Tweaks
// By: SharkPool

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  let ogDrawSelected;
  let handleSize = 8,
    handleShape = "square";

  // addon util
  function requestAddonState() {
    handleSize = Math.min(25, Math.max(3, addon.settings.get("handleSize")));
    handleShape = addon.settings.get("handleShape");
  }
  function patchWorker() {
    /*
      this section makes handles square instead of round
      most of this code is ripped (and compressed) directly from Paper.js
    */
    function drawSegments(e, n, o) {
      var r,
        a,
        i,
        s,
        l,
        t,
        f,
        v,
        d = n._segments,
        $ = d.length,
        m = Array(6),
        u = !0;
      function c(n) {
        if (o) n._transformCoordinates(o, m), r = m[0], a = m[1];else {
          var d = n._point;
          r = d._x, a = d._y;
        }
        if (u) e.moveTo(r, a), u = !1;else {
          if (o) l = m[2], t = m[3];else {
            var $ = n._handleIn;
            l = r + $._x, t = a + $._y;
          }
          l === r && t === a && f === i && v === s ? e.lineTo(r, a) : e.bezierCurveTo(f, v, l, t, r, a);
        }
        if (i = r, s = a, o) f = m[4], v = m[5];else {
          var $ = n._handleOut;
          f = i + $._x, v = s + $._y;
        }
      }
      for (var g = 0; g < $; g++) c(d[g]);
      n._closed && $ > 0 && c(d[0]);
    }
    function drawHandles(ctx, segments, matrix, size) {
      if (size <= 0) return;
      var half = size / 2,
        miniSize = size - 2,
        miniHalf = half - 1,
        coords = new Array(6),
        pX,
        pY;
      function drawHandle(index) {
        var hX = coords[index],
          hY = coords[index + 1];
        if (pX != hX || pY != hY) {
          ctx.beginPath();
          ctx.moveTo(pX, pY);
          ctx.lineTo(hX, hY);
          ctx.stroke();

          // draw a square instead of circle
          // wow such a big patch for small change
          ctx.beginPath();
          if (handleShape === "square") ctx.rect(hX - half, hY - half, half * 2, half * 2);else ctx.arc(hX, hY, half, 0, Math.PI * 2, true);
          ctx.fill();
        }
      }
      for (var i = 0, l = segments.length; i < l; i++) {
        var segment = segments[i],
          selection = segment._selection;
        segment._transformCoordinates(matrix, coords);
        pX = coords[0];
        pY = coords[1];
        if (selection & 2) drawHandle(2);
        if (selection & 4) drawHandle(4);
        ctx.fillRect(pX - half, pY - half, size, size);
        if (miniSize > 0 && !(selection & 1)) {
          var fillStyle = ctx.fillStyle;
          ctx.fillStyle = '#ffffff80';
          ctx.fillRect(pX - miniHalf, pY - miniHalf, miniSize, miniSize);
          ctx.fillStyle = fillStyle;
        }
      }
    }
    if (!ogDrawSelected) ogDrawSelected = paper.Path.prototype._drawSelected;
    paper.Path.prototype._drawSelected = function (ctx, matrix) {
      const setHandleSize = paper.settings.handleSize;
      ctx.beginPath();
      drawSegments(ctx, this, matrix);
      ctx.stroke();
      drawHandles(ctx, this._segments, matrix, /* override the handleSize */
      setHandleSize === 0 ? 0 : handleSize);
    };
  }
  if (typeof scaffolding === "undefined") {
    // initialize our patch when Paper is availiable
    requestAddonState();
    const unsubscribe = ReduxStore.subscribe(() => {
      if (typeof paper === "object") queueMicrotask(() => {
        patchWorker();
        unsubscribe();
      });
    });
  }
  addon.settings.addEventListener("change", requestAddonState);
  addon.self.addEventListener("disabled", () => {
    // reset
    paper.Path.prototype._drawSelected = ogDrawSelected;
  });
  addon.self.addEventListener("reenabled", patchWorker);
});

/***/ }),

/***/ "./src/addons/addons/paint-rounded-rect-seperate/_runtime_entry.js":
/*!*************************************************************************!*\
  !*** ./src/addons/addons/paint-rounded-rect-seperate/_runtime_entry.js ***!
  \*************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-rounded-rect-seperate/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-rounded-rect-seperate/userscript.js":
/*!*********************************************************************!*\
  !*** ./src/addons/addons/paint-rounded-rect-seperate/userscript.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  // Wait until the paint editor is loaded
  await addon.tab.traps.getPaper();
  const updateToolbar = enabled => {
    ReduxStore.dispatch({
      type: 'scratch-paint/addon-util/TOGGLE_ROUNDED_RECT_MODE',
      enabled: enabled
    });
  };
  updateToolbar(true);
  addon.self.addEventListener("disabled", () => {
    updateToolbar(false);
  });
  addon.self.addEventListener("reenabled", () => {
    updateToolbar(true);
  });
});

/***/ }),

/***/ "./src/addons/addons/paint-tool-panel/_runtime_entry.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/paint-tool-panel/_runtime_entry.js ***!
  \**************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-tool-panel/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-tool-panel/userscript.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/paint-tool-panel/userscript.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Costume Tool Panel
// By: SharkPool & DogeisCut
/* harmony default export */ __webpack_exports__["default"] = (async function () {
  const runtime = vm.runtime;
  const isPM = true;
  const panelTag = Symbol("costume-tools-tag");
  const valueObserverObj = {
    r: 0,
    sx: 1,
    sy: 1,
    kx: 0,
    ky: 0,
    outlineRatio: 1
  };
  const panelID = "costume-editor-panel";
  const epsilon = 1e-8;
  const toRad = Math.PI / 180;
  const toDeg = 180 / Math.PI;
  const guiIMGS = {
    "panel": "<svg viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"10.796\" y=\"6.222\" width=\"4.813\" height=\"2.174\" rx=\".5\" ry=\".5\" fill=\"#fff\" fill-rule=\"evenodd\" stroke=\"#575e75\" stroke-width=\".75\"/><path fill=\"none\" stroke=\"red\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\".75\" style=\"paint-order:markers stroke fill\" d=\"M3 3h14v14H3z\"/><g fill=\"#fff\" fill-rule=\"evenodd\" stroke-width=\".75\"><path stroke=\"red\" stroke-linecap=\"round\" stroke-linejoin=\"round\" style=\"paint-order:markers fill stroke\" d=\"M3 3h14v1.896H3z\"/><rect x=\"10.796\" y=\"9.722\" width=\"4.813\" height=\"2.174\" rx=\".5\" ry=\".5\" stroke=\"#575e75\"/><rect x=\"10.796\" y=\"13.222\" width=\"4.813\" height=\"2.174\" rx=\".5\" ry=\".5\" stroke=\"#575e75\"/></g><path d=\"M9.563 7.309H4.242m5.321 6.978H4.242m5.321-3.478H4.242\" style=\"paint-order:markers stroke fill\" fill=\"none\" stroke=\"red\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\".75\"/></svg>",
    "lock": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"38\" height=\"40.98\" viewBox=\"0 0 38 40.98\"><path d=\"M19.086 0c7.566 0 13.903 5.707 13.903 12.912q0 .499-.046.987h1.083A3.98 3.98 0 0 1 38 17.879v19.125a3.98 3.98 0 0 1-3.974 3.976H3.977A3.98 3.98 0 0 1 0 37V17.875a3.98 3.98 0 0 1 3.98-3.976h24.974a8 8 0 0 0 .064-.987c0-4.863-4.333-8.937-9.931-8.937-3.266 0-6.127 1.409-7.922 3.53-.266.315-1.459 1.852-1.803 2.95-.568 1.815-.262 3.397-.262 3.397l-4.026.07S4.153 9.1 7.655 5.311C11.249 1.421 14.994 0 19.086 0\" fill=\"red\" fill-rule=\"evenodd\"/></svg>",
    "unlock": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"38\" height=\"40.98\" viewBox=\"0 0 38 40.98\"><path d=\"M18.913 0c4.412 0 8.388 1.907 10.956 4.948.705.84.598 2.093-.24 2.801a1.99 1.99 0 0 1-2.793-.244c-1.795-2.121-4.656-3.53-7.922-3.53-5.598 0-9.931 4.074-9.931 8.937q0 .495.064.987h24.974a3.98 3.98 0 0 1 3.98 3.976V37a3.98 3.98 0 0 1-3.976 3.98H3.972A3.98 3.98 0 0 1 0 37.004V17.879a3.98 3.98 0 0 1 3.972-3.98h1.083q-.045-.49-.045-.987C5.01 5.707 11.347 0 18.913 0\" fill=\"red\" fill-rule=\"evenodd\"/></svg>",
    "exit": "<svg viewBox=\"-10 7 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path transform=\"rotate(45)\" fill=\"red\" d=\"M18 10h-4V6a2 2 0 0 0-4 0l.071 4H6a2 2 0 0 0 0 4l4.071-.071L10 18a2 2 0 0 0 4 0v-4.071L18 14a2 2 0 0 0 0-4\"></path></svg>"
  };
  const blendingModes = ["normal", "multiply", "screen", "overlay", "soft-light", "hard-light", "color-dodge", "color-burn", "darken", "lighten", "difference", "exclusion", "hue", "saturation", "color", "luminosity"];
  const outlineTypes = [{
    text: "thorn",
    value: "miter"
  }, {
    text: "round",
    value: "round"
  }, {
    text: "bevel",
    value: "bevel"
  }];
  const tools = [{
    title: "Position",
    items: [{
      title: "x",
      input: "number",
      params: "x"
    }, {
      title: "y",
      input: "number",
      params: "y"
    }, {
      title: "Group Position",
      id: "groupPosition",
      input: "toggler"
    }]
  }, {
    title: "Rotation",
    items: [{
      title: "direction",
      input: "number",
      params: "dir"
    }, "br", {
      title: "Group Rotation",
      id: "groupRotate",
      input: "toggler"
    }]
  }, {
    title: "Scaling",
    items: [{
      title: "x",
      input: "number",
      params: "sx"
    }, {
      title: "y",
      input: "number",
      params: "sy"
    }, "br", {
      title: "width",
      input: "number",
      params: "width"
    }, {
      title: "height",
      input: "number",
      params: "height"
    }, "br", {
      title: "Group Scaling",
      id: "groupScale",
      input: "toggler"
    }, "br", {
      title: "Scale Outlines",
      id: "strokeScale",
      input: "toggler"
    }]
  }, {
    title: "Skewing",
    items: [{
      title: "x",
      input: "number",
      params: "sx"
    }, {
      title: "y",
      input: "number",
      params: "sy"
    }, {
      title: "Group Skewing",
      id: "groupSkew",
      input: "toggler"
    }]
  }, {
    title: "Layering",
    noBitmap: true,
    items: [{
      title: "order",
      input: "number",
      params: "layer"
    }]
  }, {
    title: "Blending",
    noBitmap: true,
    items: [{
      title: "mode",
      input: "select",
      params: "blend"
    }]
  }, {
    title: "Outlines",
    noBitmap: true,
    items: [{
      title: "type",
      input: "select",
      params: "outlineType"
    }, {
      title: "dash",
      input: "number",
      params: "outlineDash"
    }]
  }];
  let modalStorage = {};
  let isPatched = false,
    sessionCenterNeedsUpdate = false,
    updatesAllowed = true;

  /* Patches */
  function applyPatches() {
    // we need to store the original rotation, scale, and skew as these functions
    // CHANGE, not SET, the items attributes
    isPatched = true;
    const ogRotate = paper.Item.prototype.rotate;
    paper.Item.prototype.rotate = function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      const realAngle = typeof args[0] === "number" ? args[0] : 0;
      for (const child of (_this$_children = this._children) !== null && _this$_children !== void 0 ? _this$_children : [this]) {
        var _this$_children;
        if (!child[panelTag]) child[panelTag] = structuredClone(valueObserverObj);
        child[panelTag].r += realAngle;
      }
      return ogRotate.call(this, ...args);
    };

    /* Scratch-Paint uses Group.scale, not Item */
    const ogScale = paper.Group.prototype.scale;
    paper.Group.prototype.scale = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      const sx = typeof args[0] === "number" ? args[0] : 1;
      const sy = typeof args[1] === "number" ? args[1] : sx;
      for (const child of (_this$_children2 = this._children) !== null && _this$_children2 !== void 0 ? _this$_children2 : [this]) {
        var _this$_children2;
        if (!child[panelTag]) child[panelTag] = structuredClone(valueObserverObj);
        child[panelTag].sx *= sx;
        child[panelTag].sy *= sy;
      }
      return ogScale.call(this, ...args);
    };
    const ogShear = paper.Item.prototype.shear;
    paper.Item.prototype.shear = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      const kx = typeof args[0] === "number" ? args[0] : 1;
      const ky = typeof args[1] === "number" ? args[1] : kx;
      for (const child of (_this$_children3 = this._children) !== null && _this$_children3 !== void 0 ? _this$_children3 : [this]) {
        var _this$_children3;
        if (!child[panelTag]) child[panelTag] = structuredClone(valueObserverObj);
        child[panelTag].kx += Math.atan(kx) * toDeg;
        child[panelTag].ky += Math.atan(ky) * toDeg;
      }
      return ogShear.call(this, ...args);
    };
  }

  /* Internal Utils */
  function _getSpecialLayer(layerString) {
    for (const layer of paper.project.layers) {
      if (layer.data && layer.data[layerString]) return layer;
    }
  }
  function getRealSelection() {
    return ReduxStore.getState().scratchPaint.selectedItems;
  }
  function apply2Selection() {
    let selectedItems = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    let func = arguments.length > 1 ? arguments[1] : undefined;
    let value = arguments.length > 2 ? arguments[2] : undefined;
    for (const item of selectedItems) func(item, value);
    queueMicrotask(() => {
      var _tool$boundingBoxTool;
      updateMonitors();
      if (sessionCenterNeedsUpdate) {
        // perform tasks for bounding box updates
        modalStorage.sessionStore = {
          center: getCenter(selectedItems)
        };
        sessionCenterNeedsUpdate = false;
      }
      const tool = paper.tool;
      if (typeof ((_tool$boundingBoxTool = tool.boundingBoxTool) === null || _tool$boundingBoxTool === void 0 ? void 0 : _tool$boundingBoxTool.setSelectionBounds) === "function") tool.boundingBoxTool.setSelectionBounds();
      if (typeof tool.onUpdateImage === "function") {
        // dash array is doubled when drawn on the stage, we need to half the value
        // before sending to the stage
        const changedItems = [];
        for (const item of selectedItems) {
          if (item.dashArray.length) {
            changedItems.push(item);
            item.dashArray[0] /= 2;
          }
        }
        tool.onUpdateImage();
        for (const item of changedItems) {
          item.dashArray[0] *= 2;
        }
      }
    });
  }
  function isGrouped(item) {
    const parent = item.getParent();
    if (parent.data && parent.data.isPaintingLayer) return false;
    return true;
  }
  function getCenter(selectedItems) {
    if (selectedItems.every(i => isGrouped(i))) {
      const parent = selectedItems[0].getParent();
      const bounds = parent.getBounds();
      return [bounds.centerX, bounds.centerY];
    } else {
      const groupBounds = paper.Rectangle.create(selectedItems.map(i => i.bounds)).reduce((a, b) => a.unite(b));
      return [groupBounds.centerX, groupBounds.centerY];
    }
  }
  function positionItem(item, value, isX, isLocked) {
    const currentPos = item.getPosition();
    if (isLocked) {
      const session = modalStorage.sessionStore;
      if (!session[item._id]) {
        const center = session.center;
        session[item._id] = [currentPos.x - center[0], currentPos.y - center[1]];
      }
      const offset = session[item._id];
      if (isX) item.setPosition(value + offset[0], currentPos.y);else item.setPosition(currentPos.x, value + offset[1]);
    } else {
      if (isX) item.setPosition(value, currentPos.y);else item.setPosition(currentPos.x, value);
    }
  }
  function rotateItem(item, degrees, isLocked) {
    if (isLocked) {
      item.rotate(degrees, modalStorage.sessionStore.center);
      sessionCenterNeedsUpdate = true;
    } else {
      item.rotate(degrees);
    }
  }
  function scaleItem(item, value, isX, isLocked, strokeUpdate) {
    if (isLocked) {
      if (isX) item.scale(value, 1, modalStorage.sessionStore.center);else item.scale(1, value, modalStorage.sessionStore.center);
      sessionCenterNeedsUpdate = true;
    } else {
      if (isX) item.scale(value, 1);else item.scale(1, value);
    }
    if (strokeUpdate && item.strokeWidth) {
      const meta = item[panelTag];
      const newStrokeScale = Math.sqrt(meta.sx * meta.sy);
      item.strokeWidth *= newStrokeScale / meta.outlineRatio;
      meta.outlineRatio = newStrokeScale;
    }
  }
  function skewItem(item, x, y, isLocked) {
    let pivot = isLocked ? new paper.Point(modalStorage.sessionStore.center) : item.bounds.center;
    item.translate(pivot.multiply(-1));
    item.shear(Math.tan(x * toRad), Math.tan(y * toRad));
    item.translate(pivot);
    sessionCenterNeedsUpdate = true;
  }

  /* GUI Utils */
  function getButtonURI(name, dontCompile) {
    const themeHex = isPM ? "#00c3ff" : document.documentElement.style.getPropertyValue("--looks-secondary") || "#ff4c4c";
    const guiSVG = guiIMGS[name].replaceAll("red", themeHex);
    if (dontCompile) return guiSVG;else return "data:image/svg+xml;base64," + btoa(guiSVG);
  }
  function getToolParams(name) {
    let selectedItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    const item1 = selectedItems[0];
    const isX = name.endsWith("x");
    switch (name) {
      case "Position/x":
      case "Position/y":
        {
          if (selectedItems.length > 1) {
            if (modalStorage["groupPosition"]) return {
              max: 15000,
              value: isX ? getCenter(selectedItems)[0] - runtime.stageWidth : (getCenter(selectedItems)[1] - runtime.stageHeight) * -1
            };
            return {
              value: "",
              max: 15000,
              placeholder: "mixed"
            };
          }
          return {
            max: 15000,
            value: isX ? item1.getPosition().x - runtime.stageWidth : (item1.getPosition().y - runtime.stageHeight) * -1
          };
        }
      case "Rotation/direction":
        {
          var _item1$panelTag$r, _item1$panelTag;
          if (selectedItems.length > 1) return {
            min: 0,
            max: 360,
            value: "",
            placeholder: "mixed"
          };else return {
            min: 0,
            max: 360,
            value: (((_item1$panelTag$r = (_item1$panelTag = item1[panelTag]) === null || _item1$panelTag === void 0 ? void 0 : _item1$panelTag.r) !== null && _item1$panelTag$r !== void 0 ? _item1$panelTag$r : 0) + 90) % 180
          };
        }
      case "Scaling/x":
      case "Scaling/y":
        {
          if (selectedItems.length > 1) return {
            value: "",
            placeholder: "mixed"
          };else return {
            max: 15000,
            value: (item1[panelTag] ? isX ? item1[panelTag].sx : item1[panelTag].sy : 1) * 100
          };
        }
      case "Scaling/width":
      case "Scaling/height":
        {
          if (selectedItems.length > 1) {
            const groupBounds = paper.Rectangle.create(selectedItems.map(i => i.bounds)).reduce((a, b) => a.unite(b));
            return {
              value: (groupBounds[name.endsWith("width") ? "width" : "height"] / 2).toFixed(2)
            };
          } else return {
            value: (item1.getBounds()[name.endsWith("width") ? "width" : "height"] / 2).toFixed(2)
          };
        }
      case "Skewing/x":
      case "Skewing/y":
        {
          if (selectedItems.length > 1) return {
            value: "",
            placeholder: "mixed"
          };else return {
            max: 15000,
            value: item1[panelTag] ? isX ? item1[panelTag].kx : item1[panelTag].ky : 0
          };
        }
      case "Layering/order":
        {
          const children = _getSpecialLayer("isPaintingLayer").children;
          if (selectedItems.length > 1) {
            return {
              min: 1,
              max: children.length - 1,
              value: "",
              placeholder: "mixed"
            };
          } else {
            const index = children.length - children.indexOf(item1);
            return {
              min: 1,
              max: children.length - 1,
              value: index - 1
            };
          }
        }
      case "Blending/mode":
        {
          const options = [];
          for (const mode of blendingModes) {
            const option = document.createElement("option");
            option.text = mode;
            option.value = mode;
            options.push(option);
          }
          return {
            options,
            value: item1.blendMode
          };
        }
      case "Outlines/type":
        {
          const options = [];
          for (const mode of outlineTypes) {
            const option = document.createElement("option");
            option.text = mode.text;
            option.value = mode.value;
            options.push(option);
          }
          return {
            options,
            value: item1.strokeJoin
          };
        }
      case "Outlines/dash":
        {
          var _item1$dashArray$;
          if (selectedItems.length > 1) return {
            min: 1,
            value: "",
            placeholder: "mixed"
          };else return {
            min: 1,
            value: (_item1$dashArray$ = item1.dashArray[0]) !== null && _item1$dashArray$ !== void 0 ? _item1$dashArray$ : 0
          };
        }
    }
    return {};
  }
  function getToolFunc(name) {
    const isX = name.endsWith("x") || name.endsWith("width");
    switch (name) {
      case "Position/x":
      case "Position/y":
        return (item, value) => {
          value = parseFloat(value || 0) * (isX ? 1 : -1);
          value += isX ? runtime.stageWidth : runtime.stageHeight;
          positionItem(item, value, isX, modalStorage["groupPosition"]);
        };
      case "Rotation/direction":
        return (item, value) => {
          var _item$panelTag$r, _item$panelTag;
          value -= (_item$panelTag$r = (_item$panelTag = item[panelTag]) === null || _item$panelTag === void 0 ? void 0 : _item$panelTag.r) !== null && _item$panelTag$r !== void 0 ? _item$panelTag$r : 0;
          rotateItem(item, value - 90, modalStorage["groupRotate"]);
        };
      case "Scaling/x":
      case "Scaling/y":
        return (item, value) => {
          if (!item[panelTag]) item[panelTag] = structuredClone(valueObserverObj);
          value /= 100;
          if (!value) value = epsilon;
          if (isX) {
            value /= item[panelTag].sx;
            item[panelTag].sx *= value;
          } else {
            value /= item[panelTag].sy;
            item[panelTag].sy *= value;
          }
          scaleItem(item, value, isX, modalStorage["groupScale"], modalStorage["strokeScale"]);
        };
      case "Scaling/width":
      case "Scaling/height":
        return (item, value) => {
          if (!item[panelTag]) item[panelTag] = structuredClone(valueObserverObj);
          const currentScale = item.getBounds()[isX ? "width" : "height"];

          // determine the delta needed to move the currentScale to value
          value = value * 2 / currentScale;
          if (!value) value = epsilon;
          if (isX) item[panelTag].sx *= value;else item[panelTag].sy *= value;
          scaleItem(item, value, isX, modalStorage["groupScale"], modalStorage["strokeScale"]);
        };
      case "Skewing/x":
      case "Skewing/y":
        return (item, value) => {
          if (isX) {
            var _item$panelTag$kx, _item$panelTag2;
            value -= (_item$panelTag$kx = (_item$panelTag2 = item[panelTag]) === null || _item$panelTag2 === void 0 ? void 0 : _item$panelTag2.kx) !== null && _item$panelTag$kx !== void 0 ? _item$panelTag$kx : 0;
            skewItem(item, value, 0, modalStorage["groupSkew"]);
          } else {
            var _item$panelTag$ky, _item$panelTag3;
            value -= (_item$panelTag$ky = (_item$panelTag3 = item[panelTag]) === null || _item$panelTag3 === void 0 ? void 0 : _item$panelTag3.ky) !== null && _item$panelTag$ky !== void 0 ? _item$panelTag$ky : 0;
            skewItem(item, 0, value, modalStorage["groupSkew"]);
          }
        };
      case "Layering/order":
        return (item, value) => {
          const layer = _getSpecialLayer("isPaintingLayer");
          const children = layer.children.slice();
          if (item.parent === layer) item.remove();
          layer.insertChild(children.length - value - 1, item);
        };
      case "Blending/mode":
        return (item, value) => item.setBlendMode(value);
      case "Outlines/type":
        return (item, value) => item.setStrokeJoin(value);
      case "Outlines/dash":
        return (item, value) => item.setDashArray([value]);
    }
  }

  /* Main GUI */
  function generateToolDisplay() {
    if (!modalStorage.toolDiv) return;
    modalStorage.id = paper.project.selectedItems.map(i => i.id).join(".");
    modalStorage.toolDiv.innerHTML = ""; // reset

    const titleStyle = "display: block; text-align: center; border-bottom: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); padding-bottom: 5px; margin: 0 25px 0 25px; font-size: 14px; font-weight: 600;";
    const subTitleStyle = "margin: 5px; font-size: 12px;";
    const inputDivStyle = "display: flex; flex-wrap: wrap; justify-content: center; align-items: center; padding: 5px 10px 5px 10px;";
    const inputStyle = "text-align: center; font-size: 13px; width: 60px; height: 25px; margin: 5px; border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 15px;";
    const selectStyle = "text-align: center; font-size: 13px; height: 25px; margin: 5px; border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px;";
    const togglerStyle = "background: transparent; border: none; margin-left: 3px; padding: 5px 0 0 0;";
    const monitorStyle = "text-align: center; font-size: 13px; margin: 5px; padding: 5px; border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px;";
    const selectedItems = getRealSelection();
    const center = getCenter(selectedItems);
    const toolList = [];
    for (const tool of tools) {
      if (tool.noBitmap && modalStorage.format === "BITMAP") continue;
      const div = document.createElement("div");
      div.setAttribute("style", "border-bottom: dotted 2px grey; padding: 5px;");
      const title = document.createElement("span");
      title.setAttribute("style", titleStyle);
      title.textContent = tool.title;
      const inputDiv = document.createElement("div");
      inputDiv.setAttribute("style", inputDivStyle);
      for (const item of tool.items) {
        if (item === "br") {
          const breaker = document.createElement("div");
          breaker.setAttribute("style", "flex-basis: 100%; height: 0;");
          inputDiv.appendChild(breaker);
          continue;
        }
        const subTitle = document.createElement("span");
        subTitle.setAttribute("style", subTitleStyle);
        subTitle.textContent = item.title;
        const id = "".concat(tool.title, "/").concat(item.title);
        let input;
        if (item.input === "monitor") {
          input = document.createElement("div");
          input.setAttribute("style", monitorStyle);
          input.classList.add("monitor");
          input.id = id;
          const param = getToolParams(id, selectedItems);
          input.textContent = param.value;
        } else if (item.input === "select") {
          input = document.createElement("select");
          input.setAttribute("style", selectStyle);
          input.id = id;
          const param = getToolParams(id, selectedItems);
          input.append(...param.options);
          input.value = param.value;
          input.addEventListener("change", e => {
            apply2Selection(selectedItems, getToolFunc(id), e.target.value);
            e.stopPropagation();
          });
        } else if (item.input === "toggler") {
          input = document.createElement("button");
          input.setAttribute("style", togglerStyle);
          input.id = id;
          if (!modalStorage[item.id]) input.style.filter = "saturate(0)";
          const img = document.createElement("img");
          img.src = getButtonURI(modalStorage[item.id] ? "lock" : "unlock");
          img.setAttribute("width", 15);
          input.appendChild(img);
          input.addEventListener("click", e => {
            const bool = !modalStorage[item.id];
            modalStorage[item.id] = bool;
            input.style.filter = bool ? "saturate(1)" : "saturate(0)";
            img.src = getButtonURI(bool ? "lock" : "unlock");
            e.stopPropagation();
          });
        } else {
          input = document.createElement("input");
          input.setAttribute("style", inputStyle);
          input.id = id;
          input.type = item.input;
          const params = getToolParams(id, selectedItems);
          if (params.max) input.setAttribute("max", params.max);
          if (params.min) input.setAttribute("min", params.min);
          if (params.placeholder) input.setAttribute("placeholder", params.placeholder);else input.setAttribute("placeholder", "");
          input.setAttribute("value", params.value);
          input.addEventListener("input", e => {
            apply2Selection(selectedItems, getToolFunc(id), e.target.value);
            e.stopPropagation();
          });
        }
        inputDiv.append(subTitle, input);
      }
      div.append(title, inputDiv);
      toolList.push(div);
    }
    modalStorage.toolDiv.append(...toolList);
    modalStorage.sessionStore.center = center;
  }
  function updateToolValues() {
    const selectedItems = getRealSelection();
    const toolDiv = modalStorage.toolDiv;
    if (!toolDiv) return;
    for (const tool of tools) {
      for (const item of tool.items) {
        if (item === "br") continue;
        const id = "".concat(tool.title, "/").concat(item.title);
        const input = toolDiv.querySelector("input[id=\"".concat(id, "\"], select[id=\"").concat(id, "\"], div[id=\"").concat(id, "\"]"));
        if (input) {
          const params = getToolParams(id, selectedItems);
          if (params.value !== "") {
            if (item.input === "monitor") input.textContent = params.value;else input.value = params.value;
          }
        }
      }
    }
  }
  function updateMonitors() {
    const selectedItems = getRealSelection();
    const toolDiv = modalStorage.toolDiv;
    if (!toolDiv) return;
    const monitors = modalStorage.toolDiv.querySelectorAll("[class=\"monitor\"]");
    for (const monitor of monitors) {
      const params = getToolParams(monitor.id, selectedItems);
      if (params.value !== "") monitor.textContent = params.value;
    }
  }
  function closeToolModal() {
    const existingModal = document.querySelector("div[class=\"costume-tool-modal\"]");
    if (existingModal) existingModal.remove();
  }
  function openToolPanel() {
    const paint = ReduxStore.getState().scratchPaint;
    delete modalStorage.toolDiv;
    modalStorage.format = paint.format.startsWith("BITMAP") ? "BITMAP" : "VECTOR";
    modalStorage.sessionStore = {};
    const modal = document.createElement("div");
    modal.classList.add("costume-tool-modal");
    modal.setAttribute("style", "color: var(--paint-text-primary, #575e75); width: 275px; height: 350px; z-index: 99999; display: block; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); background: var(--ui-secondary, hsla(215, 75%, 95%, 1)); border: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); border-radius: 5px; padding: 15px;");
    modal.id = "draggable";
    const title = document.createElement("span");
    title.setAttribute("style", "display: block; text-align: center; justify-content: center; border-bottom: solid 2px var(--ui-black-transparent, hsla(0, 0%, 0%, 0.15)); padding-bottom: 10px; margin: 0 25px 0 25px; font-weight: 600;");
    title.id = "draggable";
    title.textContent = "Object Editor";
    const closeBtn = document.createElement("button");
    closeBtn.setAttribute("style", "position: absolute; top: 10px; right: 5px; transform: scale(1.2); filter: saturate(0); justify-content: center; transition: transform 0.2s, filter 0.2s; background: transparent; border: none;");
    const exitImg = document.createElement("img");
    exitImg.src = getButtonURI("exit");
    exitImg.setAttribute("width", 20);
    closeBtn.appendChild(exitImg);
    closeBtn.addEventListener("mouseover", () => {
      closeBtn.style.transform = "scale(1.5)";
      closeBtn.style.filter = "saturate(1)";
    });
    closeBtn.addEventListener("mouseout", () => {
      closeBtn.style.transform = "scale(1.2)";
      closeBtn.style.filter = "saturate(0)";
    });
    closeBtn.addEventListener("click", e => {
      closeToolModal();
      e.stopPropagation();
    });
    const toolDisplay = document.createElement("div");
    toolDisplay.id = "tool-display";
    toolDisplay.setAttribute("style", "display: block; overflow-y: scroll;width: auto;height: 300px; margin-top: 15px;background: var(--ui-white);border: solid 2px grey;border-radius: 5px;");
    modalStorage.toolDiv = toolDisplay;
    generateToolDisplay();
    modal.append(title, closeBtn, toolDisplay);
    document.body.appendChild(modal);

    // value auto-updates
    modal.addEventListener("mouseenter", () => {
      updatesAllowed = false;
    });
    modal.addEventListener("mouseleave", () => {
      updatesAllowed = true;
    });

    // drag n drop behaviour
    modal.addEventListener("mousedown", e => {
      if (e.target.id !== "draggable") return;
      e.preventDefault();
      const offsetX = e.clientX - modal.offsetLeft;
      const offsetY = e.clientY - modal.offsetTop;
      const onMouseMove = moveEvent => {
        const newLeft = moveEvent.clientX - offsetX;
        const newTop = moveEvent.clientY - offsetY;
        modal.style.left = "".concat(newLeft, "px");
        modal.style.top = "".concat(newTop, "px");
        modal.style.boxShadow = "black 5px 5px 15px";
      };
      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        modal.style.boxShadow = "";
      };
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  }
  function startListenerWorker() {
    ReduxStore.subscribe((e, t) => {
      const paint = ReduxStore.getState().scratchPaint;
      if (!paint) return;

      // add panel button
      const editorRow = document.querySelector("div[class^=\"paint-editor_row_\"] div[class^=\"fixed-tools_row_\"]");
      if (!editorRow) return;
      if (!isPatched) applyPatches();

      // check if button exists
      let panelBtn = editorRow.querySelector("div[id=\"".concat(panelID, "\"]"));
      if (!panelBtn) {
        var _groupTool$;
        let groupTool = editorRow.querySelectorAll("div[class*=\"input-group_input-group_\"]");
        groupTool = (_groupTool$ = groupTool[2]) !== null && _groupTool$ !== void 0 ? _groupTool$ : groupTool[1];
        panelBtn = document.createElement("div");
        panelBtn.setAttribute("style", "border-right: 1px dashed var(--paint-ui-pane-border, #D9D9D9); margin-right: calc(2 * .25rem); display: inline-block; padding: .25rem .325rem; min-width: 3rem; text-align: center;");
        panelBtn.id = panelID;
        const container = document.createElement("span");
        const img = document.createElement("img");
        img.setAttribute("draggable", false);
        img.setAttribute("style", "width: 1.5rem; vertical-align: middle;");
        const label = document.createElement("span");
        label.setAttribute("style", "display: block; margin-top: .125rem; font-size: .625rem;");
        label.textContent = "Tools";
        container.append(img, label);
        panelBtn.appendChild(container);
        groupTool.insertAdjacentElement("afterend", panelBtn);
        panelBtn.children[0].addEventListener("click", e => {
          if (paper.project.selectedItems.length) {
            panelBtn.style.opacity = "1";
            closeToolModal();
            openToolPanel();
          }
          e.stopPropagation();
        });
      }
      queueMicrotask(() => {
        var _paper, _paper$project;
        const hasSelection = paper.project && ((_paper = paper) === null || _paper === void 0 ? void 0 : (_paper$project = _paper.project) === null || _paper$project === void 0 ? void 0 : _paper$project.selectedItems.length) > 0;
        panelBtn.children[0].children[0].src = getButtonURI("panel");
        panelBtn.children[0].setAttribute("style", "opacity: ".concat(hasSelection ? 1 : .5, "; cursor: pointer;"));
        if (!hasSelection) closeToolModal();else if (updatesAllowed) updateToolValues();
      });
    });
  }
  if (typeof scaffolding === "undefined") startListenerWorker();
});

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/_runtime_entry.js":
/*!********************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/_runtime_entry.js ***!
  \********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/pick-colors-from-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/pick-colors-from-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/pick-colors-from-stage/userscript.js":
/*!****************************************************************!*\
  !*** ./src/addons/addons/pick-colors-from-stage/userscript.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    msg,
    console
  } = _ref;
  const brand = Symbol();
  const setIsPicking = picking => document.body.classList.toggle("sa-stage-color-picker-picking", picking);

  // We only want to handle color picker events from the user clicking on the button, not from
  // addons or other scripts pressing it with click().
  let isMostRecentClickUserInitiated = false;
  document.addEventListener("click", e => {
    isMostRecentClickUserInitiated = e.isTrusted;
  }, {
    capture: true
  });
  addon.tab.redux.initialize();
  addon.tab.redux.addEventListener("statechanged", e => {
    const action = e.detail.action;

    // Do not process events emitted by ourselves.
    if (action[brand]) {
      return;
    }
    if (!addon.self.disabled && isMostRecentClickUserInitiated && action.type === "scratch-paint/eye-dropper/ACTIVATE_COLOR_PICKER") {
      setIsPicking(true);

      // When scratch-paint's color picker is activated, also activate scratch-gui's color picker.
      addon.tab.redux.dispatch({
        type: "scratch-gui/color-picker/ACTIVATE_COLOR_PICKER",
        callback: color => {
          // callback is called from reducer; do not dispatch events in reducer
          queueMicrotask(() => {
            // By the time we get here, scratch-paint will have already deactivated its eye dropper.
            // If we were to just call the callback, the color would indeed update, but the sliders
            // in the color selector would not update.
            // https://github.com/LLK/scratch-paint/blob/970b72c3e75d0ad44ab54e403a44786ca5f45512/src/containers/color-picker.jsx#L64
            // To work around this, we will re-enable the color picker before running the callback.
            addon.tab.redux.dispatch(_objectSpread(_objectSpread({}, action), {}, {
              [brand]: true
            }));
            action.callback(color);
            if (action.previousMode) {
              action.previousMode.activate();
            }
            addon.tab.redux.dispatch({
              type: "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER",
              [brand]: true
            });
            setIsPicking(false);
          });
        }
      });
    }

    // Don't check for addon being disabled here in case we were dynamically disabled while color
    // picking. This code won't do anything anyways when the previous code doesn't run.
    if (action.type === "scratch-paint/eye-dropper/DEACTIVATE_COLOR_PICKER") {
      setIsPicking(false);

      // When someone selects a color in the scratch-paint picker, cancel the scratch-gui picker
      if (addon.tab.redux.state.scratchGui.colorPicker.active) {
        addon.tab.redux.dispatch({
          type: "scratch-gui/color-picker/DEACTIVATE_COLOR_PICKER",
          [brand]: true
        });
      }
    }
  });
});

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/reorder-custom-inputs/userscript.js");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./arrows.css */ "./node_modules/css-loader/index.js!./src/addons/addons/reorder-custom-inputs/arrows.css");
/* harmony import */ var _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "arrows.css": _css_loader_arrows_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/modified-funcs.js ***!
  \*******************************************************************/
/*! exports provided: modifiedCreateAllInputs, modifiedUpdateDeclarationProcCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedCreateAllInputs", function() { return modifiedCreateAllInputs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modifiedUpdateDeclarationProcCode", function() { return modifiedUpdateDeclarationProcCode; });
// https://github.com/PenguinMod/PenguinMod-Blocks/blob/a92e9599ad2820ddda8b668a1d254931537be43e/blocks_vertical/procedures.js#L293
function modifiedCreateAllInputs(connectionMap) {
  this.createIcon_();

  // Split the proc into components, by %n, %b, %s and %l (ignoring escaped).
  var procComponents = this.procCode_.split(/(?=[^\\]%[nbslc])/);
  procComponents = procComponents.map(function (c) {
    return c.trim(); // Strip whitespace.
  });

  // Create arguments and labels as appropriate.
  var argumentCount = 0;
  for (var i = 0, component; component = procComponents[i]; i++) {
    var labelText;
    var argumentType = component.substring(1, 2);
    var id = this.argumentIds_[argumentCount];
    // Don't treat %l as an argument
    if (component.substring(0, 1) == '%' && ['n', 's', 'b', 'c'].includes(argumentType) && id) {
      /*
      if (!(argumentType == "n" || argumentType == "b" || argumentType == "s")) {
        throw new Error("Found an custom procedure with an invalid type: " + argumentType);
      }
      */
      labelText = component.substring(2).trim();
      if (argumentType == 'c') {
        var input = this.appendStatementInput(id);
      } else {
        var input = this.appendValueInput(id);
      }
      if (argumentType == 'b') {
        input.setCheck('Boolean');
      }
      this.populateArgument_(argumentType, argumentCount, connectionMap, id, input);
      argumentCount++;
    } else {
      labelText = component == "%l" ? " " : component.replace("%l", "").trim();
    }
    this.addProcedureLabel_(labelText.replace(/\\%/, "%"));
  }

  // remove all traces of %l at the earliest possible time
  this.procCode_ = this.procCode_.replace(/%l /g, "");
}

//https://github.com/PenguinMod/PenguinMod-Blocks/blob/a92e9599ad2820ddda8b668a1d254931537be43e/blocks_vertical/procedures.js#L716
function modifiedUpdateDeclarationProcCode() {
  let prefixLabels = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  this.procCode_ = "";
  this.displayNames_ = [];
  this.argumentIds_ = [];
  for (var i = 0; i < this.inputList.length; i++) {
    if (i != 0) {
      this.procCode_ += " ";
    }
    var input = this.inputList[i];
    if (input.type == 5) {
      // replaced Blocky.DUMMY_VALUE with 5
      this.procCode_ += (prefixLabels ? "%l " : "") + input.fieldRow[0].getValue(); // modified to prepend %l delimiter, which prevents label merging
    } else if (input.type == 1 || input.type == 3) {
      // replaced Blocky.INPUT_VALUE with 1 and Blockly.NEXT_STATEMENT with 3
      // Inspect the argument editor.
      var target = input.connection.targetBlock();
      this.displayNames_.push(target.getFieldValue('TEXT'));
      this.argumentIds_.push(input.name);
      switch (target.type) {
        case 'argument_editor_string_number':
          this.procCode_ += '%s';
          break;
        case 'argument_editor_boolean':
          this.procCode_ += '%b';
          break;
        case 'argument_editor_command':
          this.procCode_ += "%c";
          break;
      }
    } else {
      throw new Error("Unexpected input type on a procedure mutator root: " + input.type);
    }
  }
}

/***/ }),

/***/ "./src/addons/addons/reorder-custom-inputs/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/reorder-custom-inputs/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modified-funcs.js */ "./src/addons/addons/reorder-custom-inputs/modified-funcs.js");

/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon,
    console
  } = _ref;
  function createArrow(direction, callback) {
    const path = direction === "left" ? "M 17 13 L 9 21 L 17 30" : "M 9 13 L 17 21 L 9 30";
    Blockly.WidgetDiv.DIV.insertAdjacentHTML("beforeend", "\n            <svg width=\"20px\" height=\"40px\" \n                 style=\"left: ".concat(direction === "left" ? "calc(50% - 20px)" : "calc(50% + 20px)", "\" \n                 class=\"blocklyTextShiftArrow\">\n                <path d=\"").concat(path, "\" fill=\"none\" stroke=\"#FF661A\" stroke-width=\"2\"></path>\n            </svg>"));
    Blockly.WidgetDiv.DIV.lastChild.addEventListener("click", callback);
  }

  //https://github.com/scratchfoundation/scratch-blocks/blob/f210e042988b91bcdc2abeca7a2d85e178edadb2/blocks_vertical/procedures.js#L674
  function modifiedRemoveFieldCallback(field) {
    // Do not delete if there is only one input
    if (this.inputList.length === 1) {
      return;
    }
    const cannotRemove = i => i == 0 && this.inputList[1].type == Blockly.NEXT_STATEMENT;
    var inputNameToRemove = null;
    for (var n = 0; n < this.inputList.length; n++) {
      var input = this.inputList[n];
      if (input.connection) {
        var target = input.connection.targetBlock();
        if (target.getField(field.name) == field) {
          if (cannotRemove(n)) return;
          inputNameToRemove = input.name;
        }
      } else {
        if (input.fieldRow[0] == field) {
          if (cannotRemove(n)) return;
          inputNameToRemove = input.name;
        }
      }
    }
    if (inputNameToRemove) {
      Blockly.WidgetDiv.hide(true);
      this.removeInput(inputNameToRemove);
      this.onChangeFn(true); // this is the only part we changed. We added this boolean input, which lets us switch on the merging.
      this.updateDisplay_();
    }
  }
  function addInputAfter(addInputFn, fnName) {
    return function () {
      var _selectedField;
      const sourceBlock = (_selectedField = selectedField) === null || _selectedField === void 0 ? void 0 : _selectedField.sourceBlock_;
      const proc = sourceBlock ? sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock : this;

      // if a label is added, scratch's code will directly append the label text to the procCode
      // We account for this with a hacky method of adding the delimiter at the end of the last label input
      if (fnName === "addLabelExternal") {
        const lastInput = proc.inputList[proc.inputList.length - 1];
        if (lastInput.type === Blockly.DUMMY_INPUT) {
          lastInput.fieldRow[0].setValue(lastInput.fieldRow[0].getValue() + " %l");
        }
      }
      proc.onChangeFn(true);
      if (sourceBlock === null || sourceBlock === undefined || !addon.settings.get("InsertInputsAfter")) return addInputFn.call(this, ...arguments);
      let newPosition = getFieldInputNameAndIndex(selectedField, proc.inputList).index + 1;
      addInputFn.call(proc, ...arguments);
      const lastInputName = proc.inputList[proc.inputList.length - 1].name;
      shiftInput(proc, lastInputName, newPosition);
    };
  }
  function getFieldInputNameAndIndex(field, inputList) {
    for (const [i, input] of inputList.entries()) {
      var _input$connection$tar;
      const isTargetField = input.connection ? ((_input$connection$tar = input.connection.targetBlock()) === null || _input$connection$tar === void 0 ? void 0 : _input$connection$tar.getField(field.name)) === field : input.fieldRow.includes(field);
      if (isTargetField) {
        return {
          name: input.name,
          index: i
        };
      }
    }
  }
  function shiftInput(procedureBlock, inputNameToShift, newPosition) {
    const initialInputListLength = procedureBlock.inputList.length;

    // return if inputNameToShift and newPosition are not valid
    if (!(inputNameToShift && newPosition >= 0 && newPosition <= initialInputListLength)) {
      return false;
    }
    const original = procedureBlock.inputList.find(input => input.name === inputNameToShift);
    const originalPosition = procedureBlock.inputList.findIndex(input => input.name === inputNameToShift);
    if (newPosition == 0 && original.type === 3 /*Blockly.NEXT_STATEMENT*/ || originalPosition == 0 && procedureBlock.inputList[newPosition].type === 3 /*Blockly.NEXT_STATEMENT*/) {
      return false;
    }
    const itemToMove = procedureBlock.inputList.splice(originalPosition, 1)[0];
    procedureBlock.inputList.splice(newPosition, 0, itemToMove);
    Blockly.Events.disable();
    try {
      procedureBlock.onChangeFn(true);
      procedureBlock.updateDisplay_();
    } finally {
      Blockly.Events.enable();
    }
    focusOnInput(procedureBlock.inputList[newPosition]);
  }
  function focusOnInput(input) {
    if (!input) return;
    if (input.type === Blockly.DUMMY_INPUT) {
      input.fieldRow[0].showEditor_();
    } else if (input.type === Blockly.INPUT_VALUE) {
      const target = input.connection.targetBlock();
      target.getField("TEXT").showEditor_();
    }
  }
  function shiftFieldCallback(sourceBlock, field, direction) {
    const proc = sourceBlock.parentBlock_ ? sourceBlock.parentBlock_ : sourceBlock;

    // if inputList length is 1 there's nowhere to shift the input so we can simply return
    if (proc.inputList.length <= 1) return;
    const {
      name,
      index
    } = getFieldInputNameAndIndex(field, proc.inputList);
    const newPosition = direction === "left" ? index - 1 : index + 1;
    shiftInput(proc, name, newPosition);
  }
  function polluteProcedureDeclaration(procedureDeclaration) {
    let save_original = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    procedureDeclaration.createAllInputs_ = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedCreateAllInputs"];
    procedureDeclaration.onChangeFn = _modified_funcs_js__WEBPACK_IMPORTED_MODULE_0__["modifiedUpdateDeclarationProcCode"];
    procedureDeclaration.removeFieldCallback = modifiedRemoveFieldCallback;
    for (const inputFn of ["addLabelExternal", "addBooleanExternal", "addStringNumberExternal"]) {
      if (save_original) {
        originalAddFns[inputFn] = procedureDeclaration[inputFn];
      }
      procedureDeclaration[inputFn] = addInputAfter(procedureDeclaration[inputFn], inputFn);
    }
  }
  function depolluteProcedureDeclaration(procedureDeclaration) {
    procedureDeclaration.createAllInputs_ = originalCreateAllInputs;
    procedureDeclaration.onChangeFn = originalUpdateDeclarationProcCode;
    procedureDeclaration.removeFieldCallback = originalRemoveFieldCallback;
    for (const [inputFnName, originalFn] of Object.entries(originalAddFns)) {
      procedureDeclaration[inputFnName] = originalFn;
    }
  }
  function getExistingProceduresDeclarationBlock() {
    // Blockly.getMainWorkspace is required for this to work.
    // for future reference "upgrading" to addon.tab.traps.getWorkspace() will cause bugs.
    return Blockly.getMainWorkspace().getAllBlocks().find(block => block.type === "procedures_declaration");
  }
  function enableAddon() {
    // pollute the procedures_declaration prototype with a modified version that prevents merging, and allows inserting after
    polluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

    // if custom procedures modal is already open we also directly pollute the existing procedures_declaration block
    if (addon.tab.redux.state.scratchGui.customProcedures.active) {
      polluteProcedureDeclaration(getExistingProceduresDeclarationBlock(), false);
    }
    Blockly.FieldTextInputRemovable.prototype.showEditor_ = function () {
      originalShowEditor.call(this);
      createArrow("left", () => shiftFieldCallback(this.sourceBlock_, this, "left"));
      createArrow("right", () => shiftFieldCallback(this.sourceBlock_, this, "right"));
      selectedField = this;
    };
  }
  function disableAddon() {
    // depollute the procedures_declaration prototype
    depolluteProcedureDeclaration(Blockly.Blocks["procedures_declaration"]);

    // if custom procedures modal is already open we also directly depollute the existing procedures_declaration block
    if (addon.tab.redux.state.scratchGui.customProcedures.active) {
      depolluteProcedureDeclaration(getExistingProceduresDeclarationBlock());
    }
    Blockly.FieldTextInputRemovable.prototype.showEditor_ = originalShowEditor;
    Blockly.WidgetDiv.DIV.querySelectorAll(".blocklyTextShiftArrow").forEach(e => e.remove());
  }
  const Blockly = await addon.tab.traps.getBlockly();
  const originalCreateAllInputs = Blockly.Blocks["procedures_declaration"].createAllInputs_;
  const originalUpdateDeclarationProcCode = Blockly.Blocks["procedures_declaration"].onChangeFn;
  const originalRemoveFieldCallback = Blockly.Blocks["procedures_declaration"].removeFieldCallback;
  const originalShowEditor = Blockly.FieldTextInputRemovable.prototype.showEditor_;
  let originalAddFns = {};
  let selectedField = null;
  addon.self.addEventListener("disabled", disableAddon);
  addon.self.addEventListener("reenabled", enableAddon);
  enableAddon();
});

/***/ }),

/***/ "./src/addons/addons/sounds-newgrounds-button/_runtime_entry.js":
/*!**********************************************************************!*\
  !*** ./src/addons/addons/sounds-newgrounds-button/_runtime_entry.js ***!
  \**********************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/sounds-newgrounds-button/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/sounds-newgrounds-button/userscript.js":
/*!******************************************************************!*\
  !*** ./src/addons/addons/sounds-newgrounds-button/userscript.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Newgrounds Audio Button
// By: SharkPool
// Thanks Tom Fulp! :)

/* harmony default export */ __webpack_exports__["default"] = (async function () {
  const ngIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0yLjUgLTIuNSAyNSAyNSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJNNy4wNjkgMS43NzhhMi4wMiAyLjAyIDAgMCAxIDIuMDIgMi4wMnYxMy44MDZhLjg0Ljg0IDAgMCAxLS44NDIuODRINi4zOTZhLjg0Ljg0IDAgMCAxLS44NDItLjg0MlY2LjExOWEuODQuODQgMCAwIDAtLjg0Mi0uODQyaC0uMzM3YS44NC44NCAwIDAgMC0uODQxLjg0MnYxMS40ODRhLjg0Ljg0IDAgMCAxLS44NDEuODQxSC44NDJBLjg0Ljg0IDAgMCAxIDAgMTcuNjAzVjIuNjE5YS44NC44NCAwIDAgMSAuODQyLS44NDF6bTEwLjkxMiAwQTIuMDIgMi4wMiAwIDAgMSAyMCAzLjc5N3YzLjQ3NGEuNjczLjY3MyAwIDAgMS0uNjczLjY3M2gtMi4zNTZhLjY3My42NzMgMCAwIDEtLjY3My0uNjczVjUuNzgzYS41MDQuNTA0IDAgMCAwLS41MDUtLjUwNWgtLjg0MmEuNTA0LjUwNCAwIDAgMC0uNTA1LjUwNXY4LjY1OGMwIC4xODYuMTUxLjMzNy4zMzcuMzM3aDEuMzQ2YS4zMzYuMzM2IDAgMCAwIC4zMzYtLjMzN3YtMS42NjNoLS4zMzZhLjY3My42NzMgMCAwIDEtLjY3My0uNjczVjkuOTUyYS42NzMuNjczIDAgMCAxIC42NzMtLjY3M2gzLjE5OGEuNjczLjY3MyAwIDAgMSAuNjczLjY3MnY2LjQ3NGEyLjAyIDIuMDIgMCAwIDEtMi4wMiAyLjAxOWgtNS4wNDlhMi4wMiAyLjAyIDAgMCAxLTIuMDItMi4wMlYzLjc5N2EyLjAyIDIuMDIgMCAwIDEgMi4wMi0yLjAxOWg1LjA0OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  const safeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAuNzc0IiBoZWlnaHQ9IjEwNS45MDUiIHZpZXdCb3g9IjAgMCAxMjAuNzc0IDEwNS45MDUiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjM5Ljg2IiB5MT0iMTMwLjA2IiB4Mj0iMjM5Ljg2IiB5Mj0iMjMyLjQ2NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJhIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGZjMWQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMGI0MTYiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjM5Ljg2IiB5MT0iMTMwLjA2IiB4Mj0iMjM5Ljg2IiB5Mj0iMjMyLjQ2NSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJiIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMwMGFlMTQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwMDZkMGQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJtMjAwLjMgMTc0LjEwOCAyMi40NDYgMjAuNDgxIDU0LjcwOS02NC41MjkgMjEuMDQyIDE3LjM5NS03Mi45NDYgODUuMDEtNDQuMzI5LTM4Ljk5OHoiIGZpbGw9InVybCgjYSkiIHN0cm9rZT0idXJsKCNiKSIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc5LjQ3MiAtMTI4LjMxKSIvPjwvc3ZnPg==";
  const warnIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjMuODYxIiBoZWlnaHQ9IjEwMC4yOTQiIHZpZXdCb3g9IjAgMCAxMjMuODYxIDEwMC4yOTQiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjQwIiB5MT0iMTMwLjM0MSIgeDI9IjI0MCIgeTI9IjIyNy4xMzQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZlYzEwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhYzBjIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjI0MCIgeTE9IjEzMC4zNDEiIHgyPSIyNDAiIHkyPSIyMjcuMTM0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhiNGUwMiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgyMjcwMCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAiIHkxPSIxNTAuODkyIiB4Mj0iMjQwIiB5Mj0iMjIxLjQ1MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM4OTQ1MDEiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM4MjI5MDAiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIj48cGF0aCBkPSJtMjQwIDEzMC4zNCA2MC4xOCA5Ni43OTRIMTc5LjgyeiIgZmlsbD0idXJsKCNhKSIgc3Ryb2tlPSJ1cmwoI2IpIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc4LjA3IC0xMjguNTkpIi8+PHBhdGggZD0iTTIzMi41NjUgMjE0LjAxOGE3LjQzNSA3LjQzNSAwIDEgMSAxNC44NyAwIDcuNDM1IDcuNDM1IDAgMCAxLTE0Ljg3IDBtNy4xMjItMTIuOTA2YTYgNiAwIDAgMS02LTZ2LTM4LjIyYTYgNiAwIDAgMSA2LTZoLjYyNmE2IDYgMCAwIDEgNiA2djM4LjIyYTYgNiAwIDAgMS02IDZ6IiBmaWxsPSJ1cmwoI2MpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc4LjA3IC0xMjguNTkpIi8+PC9nPjwvc3ZnPg==";
  const unsafeIcon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjUuNTc4IiBoZWlnaHQ9IjEyNS44ODMiIHZpZXdCb3g9IjAgMCAxMjUuNTc4IDEyNS44ODMiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMjM5Ljg2IiB5MT0iMTE5LjY3OSIgeDI9IjIzOS44NiIgeTI9IjI0MC42MDEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmUwMDUwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjOWIwMDA3Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjIzOS44NiIgeTE9IjExOS42NzkiIHgyPSIyMzkuODYiIHkyPSIyNDAuNjAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzdlMDAyNyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzNiMDAwMSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Im0xOTcuMjE0IDEyMC44MDIgNDIuNjQ2IDQxLjgwMyA0MS41MjMtNDIuOTI2IDE3Ljk1NiAxNy42NzYtNDEuNTIzIDQyLjM2NCA0Mi4zNjQgNDAuOTYyLTE3LjM5NCAxOC41MTctNDIuMDg1LTQxLjI0MkwxOTkuNDYgMjQwLjZsLTE4LjIzNy0xNy42NzVMMjIyLjE4NCAxODBsLTQyLjY0NS00MC45NjJ6IiBmaWxsPSJ1cmwoI2EpIiBzdHJva2U9InVybCgjYikiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3Ny4wNTkgLTExNy4xOTQpIi8+PC9zdmc+";
  const proxy1 = "https://corsproxy.io?url=";
  const proxy2 = "https://api.codetabs.com/v1/proxy?quest=";
  let ngButtonElement;
  async function safeFetch(url, respondType) {
    const proxies = [proxy1, proxy2];
    for (const proxy of proxies) {
      try {
        const response = await fetch(proxy + url);
        if (response.ok) return await response[respondType]();
        if (response.status === 400) return undefined;
        continue;
      } catch (e) {
        console.warn("Failed to fetch ".concat(url, " with proxy: ").concat(proxy), e);
      }
    }
    return undefined;
  }
  async function addTrack2Editor(url, name) {
    const buffer = await safeFetch(url, "arrayBuffer");
    if (!buffer) {
      alert("Failed to Fetch Song!");
      return;
    }
    const storage = vm.runtime.storage;
    const asset = storage.createAsset(storage.AssetType.Sound, storage.DataFormat.MP3, new Uint8Array(buffer), null, true);
    try {
      await vm.addSound({
        asset,
        name,
        md5: asset.assetId + "." + asset.dataFormat
      }, vm.editingTarget.id);
    } catch (e) {
      console.warn(e);
    }
  }
  async function openNewgroundsPopup() {
    let url, name, author, songURL;
    let infoBox = undefined;

    /* ScratchBlocks is availiable when this is called */
    const modal = await ScratchBlocks.customPrompt({
      title: "Newgrounds Audio"
    }, {
      content: {
        width: "500px"
      }
    }, [{
      name: "Add Track",
      role: "ok",
      callback: () => {
        if (url && name && songURL) addTrack2Editor(songURL, "".concat(name, " -- ").concat(author));
      }
    }, {
      name: "Cancel",
      role: "close",
      callback: () => {}
    }]);
    const okayButton = modal.parentNode.querySelector("button[class^=\"prompt_ok-button\"]");
    okayButton.style.filter = "brightness(70%)";
    okayButton.style.pointerEvents = "none";
    const label = document.createElement("div");
    label.innerHTML = "Import <a href=\"https://www.newgrounds.com/audio\" target=\"_blank\">Newgrounds</a> audio directly into your Project.<br><b>Not all tracks are fully free-to-use, read the report after searching.</b>";
    label.setAttribute("style", "text-align: center; font-size: .85rem;");
    const idInputDiv = document.createElement("div");
    idInputDiv.setAttribute("style", "width: 100%; margin: 15px 0; padding: 10px 20px; border-radius: 15px; border: dashed 2px grey; text-align: center; font-size: .85rem;");
    const idLabel = document.createElement("b");
    idLabel.textContent = "Track ID/URL: ";
    const idInput = document.createElement("input");
    idInput.setAttribute("style", "margin-left: 5px; width: 70%; height: 25px; text-align: center; background: #ffffff20; border-radius: 15px; border: solid grey 1px;");
    idInput.type = "text";
    idInput.placeholder = "https://www.newgrounds.com/audio/listen/1395716";
    idInput.value = "1395716";
    url = idInput.placeholder;
    idInput.addEventListener("change", e => {
      url = String(e.target.value);
      if (!url.startsWith("https://www.newgrounds.com/audio/listen/")) url = "https://www.newgrounds.com/audio/listen/" + url;
      e.stopPropagation();
    });
    const searchBtn = document.createElement("button");
    searchBtn.setAttribute("style", "border: none; border-radius: 5px; padding: 10px 20px; margin: 10px 0 0; background: hsla(194, 100%, 50%, 1); cursor: pointer; font-weight: 600; font-size: 0.85rem; color: white;");
    searchBtn.textContent = "Search";
    searchBtn.addEventListener("click", async e => {
      var _htmlText$match, _htmlText$match2, _htmlText$match3;
      // unfortunately we have to scrape html here since the Newgrounds API is hidden
      const htmlText = await safeFetch(url, "text");
      if (!htmlText) {
        alert("Failed to Fetch Track URL!");
        return;
      }

      /* extract info */
      author = ((_htmlText$match = htmlText.match(/"artist":"([^"]+)"/)) === null || _htmlText$match === void 0 ? void 0 : _htmlText$match[1]) || "";
      name = ((_htmlText$match2 = htmlText.match(/<title>(.*?)<\/title>/i)) === null || _htmlText$match2 === void 0 ? void 0 : _htmlText$match2[1]) || "";
      let songMatch = htmlText.match(/<meta property="og:audio" content="(https:\/\/audio\.ngfiles\.com\/[^"]+\.mp3\?[^"]+)">/);
      if (!songMatch) {
        const regex = new RegExp("\"params\":\\{\"filename\":\"(https:\\/\\/audio\\.ngfiles\\.com\\/[^\"]+\\.mp3\\?[^\"]+)\"}");
        songMatch = htmlText.match(regex);
      }
      ;
      songURL = songMatch ? songMatch[1].replace(/\\/g, "") : "";

      /* song usage */
      // fun fact: we can check if a user is scouted if 'downloads' shows in their song!
      const isScouted = htmlText.match(/<dt>\s*Listens\s*<\/dt>[\s\S]*?<dd>\d+<\/dd>[\s\S]*?<dt>\s*Downloads\s*<\/dt>[\s\S]*?<dd>(\d+)<\/dd>[\s\S]*?<dt>\s*Score\s*<\/dt>/i);
      const ccLicense = ((_htmlText$match3 = htmlText.match(/<div class="pod-body creative-commons">[\s\S]*?<p>\s*([\s\S]*?)\s*<\/p>/i)) === null || _htmlText$match3 === void 0 ? void 0 : _htmlText$match3[1]) || "";
      const type = isScouted ? ccLicense2Rating(ccLicense) : "unwhitelisted";
      if (infoBox) infoBox.remove();
      infoBox = genCopyrightInfoBox(type, name, author);
      if (type === "bad" || type === "unwhitelisted") {
        name = undefined;
        okayButton.style.filter = "brightness(70%)";
        okayButton.style.pointerEvents = "none";
      } else {
        okayButton.style.filter = "";
        okayButton.style.pointerEvents = "";
      }
      modal.appendChild(infoBox);
      e.stopPropagation();
    });
    idInputDiv.append(idLabel, idInput, searchBtn);
    modal.append(label, idInputDiv);
  }
  function ccLicense2Rating(licence) {
    licence = String(licence).toLowerCase().trim();
    const goodTexts = ["you may only use this piece for commercial purposes if your work is a web-based game or animation,"];
    for (const text of goodTexts) {
      if (licence.startsWith(text)) return "good";
    }
    const badTexts = ["you may not use this work for any purposes"];
    for (const text of badTexts) {
      if (licence.startsWith(text)) return "bad";
    }
    const warnTexts = ["you are free to copy, distribute and transmit this work under the following conditions:", "please contact me if you would like to use this in a project. we can discuss the details."];
    for (const text of warnTexts) {
      if (licence.startsWith(text)) return "warn";
    }
    return "warn"; // warn is the default
  }
  function genCopyrightInfoBox(type, name, author) {
    const color = type === "good" ? "#00ff00" : type === "bad" || type === "unwhitelisted" ? "#ff0000" : "#ffc400";
    const box = document.createElement("div");
    box.setAttribute("style", "display: flex; width: 100%; margin: 15px 0; padding: 10px 20px 10px 30px; border-radius: 15px; border: solid 2px ".concat(color, "; background: ").concat(color, "30; text-align: center; font-size: .9rem; font-weight: bold;"));
    const img = document.createElement("img");
    img.setAttribute("style", "width:35px; margin-right: 5px;");
    img.src = type === "good" ? safeIcon : type === "bad" || type === "unwhitelisted" ? unsafeIcon : warnIcon;
    const label = document.createElement("span");
    if (type === "good") label.innerHTML = "The Track: ".concat(name, " by ").concat(author, ", can freely be used for web-based games");else if (type === "bad") label.innerHTML = "The Track: ".concat(name, " by ").concat(author, ", is not allowed for use!");else if (type === "unwhitelisted") label.innerHTML = "The Track: ".concat(name, " by ").concat(author, ", is not allowed for use. ").concat(author, " is not scouted on Newgrounds!");else label.innerHTML = "The Track: ".concat(name, " by ").concat(author, ", can only be used for non-profit web-based games WITH credit. Further use requires permission from ").concat(author);
    box.append(img, label);
    return box;
  }
  function addButtonNG() {
    // TODO add a tooltip maybe
    const itemDiv = document.querySelector("div[class^=\"action-menu_menu-container\"] div[class^=\"action-menu_more-buttons-outer\"] div[class^=\"action-menu_more-buttons\"]");
    ngButtonElement = itemDiv.children[0].cloneNode(true);
    const innerButton = ngButtonElement.firstChild;
    innerButton.setAttribute("data-tip", "Newgrounds Sound");
    innerButton.setAttribute("aria-label", "Newgrounds Sound");
    /* cleanup */
    for (var i = 1; i < innerButton.children.length; i++) {
      const child = innerButton.children[i];
      if (child) child.remove();
    }
    innerButton.firstChild.src = ngIcon;
    ngButtonElement.addEventListener("click", openNewgroundsPopup);
    itemDiv.insertBefore(ngButtonElement, itemDiv.children[0]);
  }
  function startListenerWorker() {
    ReduxStore.subscribe(() => queueMicrotask(() => {
      const reduxState = ReduxStore.getState().scratchGui;
      /* sound tab */
      if (!reduxState.mode.isPlayerOnly && reduxState.editorTab.activeTabIndex === 2) {
        if (!ngButtonElement) addButtonNG();
      } else {
        ngButtonElement = undefined;
      }
    }));
  }
  if (typeof scaffolding === "undefined") startListenerWorker();
});

/***/ }),

/***/ "./src/addons/addons/toolbox-category-drag/_runtime_entry.js":
/*!*******************************************************************!*\
  !*** ./src/addons/addons/toolbox-category-drag/_runtime_entry.js ***!
  \*******************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/toolbox-category-drag/userscript.js");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/toolbox-category-drag/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/toolbox-category-drag/userscript.js":
/*!***************************************************************!*\
  !*** ./src/addons/addons/toolbox-category-drag/userscript.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Toolbox Category Drag
// By: SharkPool
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  // wait for scratchblocks to be defined
  await addon.tab.traps.getBlockly();
  const COMMENT_TRAPPER_ID = "--Category_Order_ADDON-config";
  const soup = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let categoryOrdering = undefined;
  const genUID = () => {
    const id = [];
    for (let i = 0; i < 20; i++) {
      id[i] = soup.charAt(Math.random() * soup.length);
    }
    return id.join("");
  };
  const createSep = () => {
    const sep = document.createElement("sep");
    sep.setAttribute("gap", "36");
    return sep;
  };
  const extractCategoryID = classList => {
    for (const text of classList) {
      if (text.startsWith("scratchCategoryId-")) return text.replace("scratchCategoryId-", "");
    }
    return undefined;
  };
  const ogPopulate = ScratchBlocks.Toolbox.CategoryMenu.prototype.populate;
  ScratchBlocks.Toolbox.CategoryMenu.prototype.populate = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (!categoryOrdering) {
      ogPopulate.call(this, ...args);
      return;
    }
    const toolboxXml = args[0];
    const children = Array.from(toolboxXml.children);
    const categories = children.filter(e => e.tagName === "category");

    /* sort categories based on categoryOrdering */
    categories.sort((a, b) => {
      const aIndex = categoryOrdering.indexOf(a.getAttribute("id"));
      const bIndex = categoryOrdering.indexOf(b.getAttribute("id"));
      return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
    });
    while (toolboxXml.firstChild) toolboxXml.removeChild(toolboxXml.firstChild);

    /* <sep> + <category> + <sep> + ... + <category> + <sep> */
    toolboxXml.appendChild(createSep());
    categories.forEach(cat => {
      toolboxXml.appendChild(cat);
      toolboxXml.appendChild(createSep());
    });
    ogPopulate.call(this, ...args);
  };
  const ogSaveJSON = vm.toJSON;
  vm.toJSON = function () {
    if (categoryOrdering !== undefined) saveOrdering();
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return ogSaveJSON.call(this, ...args);
  };
  vm.runtime.on("PROJECT_LOADED", () => {
    const storedOrder = findOrderingComment(true);
    if (storedOrder) {
      try {
        categoryOrdering = JSON.parse(storedOrder);
        setTimeout(forceRefreshToolbox, 100);
      } catch (_unused) {
        // Blockly might not be availiable, wait until it is
        vm.once("workspaceUpdate", () => {
          try {
            categoryOrdering = JSON.parse(storedOrder);
            setTimeout(forceRefreshToolbox, 100);
          } catch (_unused2) {}
        });
      }
    }
  });
  function findOrderingComment(optParse) {
    const stageTarget = vm.runtime.getTargetForStage();
    if (!stageTarget) return undefined;
    let configComment;
    const comments = Object.values(stageTarget.comments);
    for (const comment of comments) {
      if (comment.text.endsWith(COMMENT_TRAPPER_ID)) {
        configComment = comment.text;
        break;
      }
    }
    if (configComment) {
      if (!optParse) return true;
      const dataLine = configComment.split("\n").find(i => i.endsWith(COMMENT_TRAPPER_ID));
      if (!dataLine) return undefined;
      return dataLine.substr(0, dataLine.length - COMMENT_TRAPPER_ID.length);
    }
    return optParse ? undefined : false;
  }
  function saveOrdering() {
    if (findOrderingComment()) return;
    const stageTarget = vm.runtime.getTargetForStage();
    if (!stageTarget) return;
    const text = "Configuration for 'Category Ordering' Addon\nYou can move, resize, and minimize this comment, but don't edit it by hand. This comment can be deleted to remove the stored settings.\n".concat(JSON.stringify(categoryOrdering)).concat(COMMENT_TRAPPER_ID);
    stageTarget.createComment(genUID(), null, text, 50, 50, 350, 170, false);
    vm.runtime.emitProjectChanged();
  }
  function compileNewOrder(htmlCategoryList) {
    const orderedIDs = [];
    for (const cat of htmlCategoryList) {
      const id = extractCategoryID(cat.firstChild.classList);
      if (id) orderedIDs.push(id);
    }
    categoryOrdering = orderedIDs;
  }
  function forceRefreshToolbox() {
    const workspace = ScratchBlocks.getMainWorkspace();
    const toolbox = workspace.getToolbox();
    if (!toolbox) return;
    const categoryMenu = toolbox.categoryMenu_;
    if (!categoryMenu) return;
    if (categoryMenu.secondTable) return;
    categoryMenu.dispose();
    categoryMenu.createDom();
    toolbox.populate_(workspace.options.languageTree);
    toolbox.position();
  }
  function initDragDroper(clickEvent, blocklyToolboxDiv) {
    const draggedCat = clickEvent.target.closest("div[class=\"scratchCategoryMenuRow\"]");
    if (!draggedCat) return;
    const categoryList = blocklyToolboxDiv.querySelectorAll("div[class*=\"scratchCategoryMenuRow\"]");
    const rect = draggedCat.getBoundingClientRect();
    const generalHeight = rect.height;
    const offsetX = clickEvent.clientX - rect.left;
    const offsetY = clickEvent.clientY - rect.top;
    const dragger = draggedCat.cloneNode(true);
    draggedCat.style.opacity = 0.5;
    dragger.setAttribute("style", "position: absolute; z-index: 99999; left: ".concat(rect.left, "px; top: ").concat(rect.top, "px; width: ").concat(rect.width, "px; pointer-events: none;"));
    dragger.firstChild.setAttribute("style", "box-shadow: #000 5px 5px 10px; border-radius: 8px;");
    dragger.dataset.dragger = true;
    document.body.appendChild(dragger);
    let lastHovered = null;
    const onMouseMove = moveEvent => {
      /* drag visual */
      const newLeft = moveEvent.clientX - offsetX;
      const newTop = moveEvent.clientY - offsetY;
      dragger.style.left = "".concat(newLeft, "px");
      dragger.style.top = "".concat(newTop, "px");

      // auto scroll if dragger is near the top/bottom
      const scrollZoneSize = 40;
      const bounds = blocklyToolboxDiv.getBoundingClientRect();
      if (moveEvent.clientY < bounds.top + scrollZoneSize) {
        blocklyToolboxDiv.scrollTop -= 4;
      } else if (moveEvent.clientY > bounds.bottom - scrollZoneSize) {
        blocklyToolboxDiv.scrollTop += 4;
      }

      // check if we are near any category
      // if so, bump down everything below the dragger
      let target;
      for (const cat of categoryList) {
        if (cat === draggedCat) continue;
        const catRect = cat.getBoundingClientRect();
        const midpointY = catRect.top + catRect.height / 2;
        const midpointX = catRect.left + catRect.width / 2;
        const xDist = Math.abs(moveEvent.clientX - midpointX);
        const yCheck = moveEvent.clientY < midpointY;
        if (yCheck && xDist < 100) {
          target = cat;
          break;
        }
      }
      for (const cat of categoryList) cat.style.transform = "";
      if (target) {
        lastHovered = target;
        let shifter = target;
        while (shifter) {
          if (shifter === draggedCat) return;
          shifter.style.transform = "translateY(".concat(generalHeight, "px)");
          shifter = shifter.nextSibling;
        }
      } else {
        lastHovered = null;
      }
    };
    const onMouseUp = () => {
      /* cleanup */
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      for (const cat of categoryList) cat.style.transform = "";
      draggedCat.style.opacity = "";
      dragger.remove();

      // if the category drag was valid, move the category
      if (lastHovered) {
        const id = extractCategoryID(draggedCat.firstChild.classList);
        draggedCat.parentNode.insertBefore(draggedCat, lastHovered);
        const newCatList = blocklyToolboxDiv.querySelectorAll("div[class*=\"scratchCategoryMenuRow\"]");
        compileNewOrder(newCatList);
        setTimeout(() => {
          forceRefreshToolbox();
          if (id) ScratchBlocks.mainWorkspace.toolbox_.setSelectedCategoryById(id);
        }, 100);
      }
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  }
  function activateBlocklyListener() {
    /* Check for Long (500ms) Presses to not confuse with Selecting Categories */
    const blocklyToolboxDiv = document.querySelector("div[class*=\"blocklyToolboxDiv\"");
    if (!blocklyToolboxDiv) return;
    blocklyToolboxDiv.addEventListener("mousedown", e => {
      const longPressTimer = setTimeout(() => initDragDroper(e, blocklyToolboxDiv), 500);
      const cancel = () => clearTimeout(longPressTimer);
      document.addEventListener("mouseup", cancel, {
        once: true
      });
      document.addEventListener("mouseleave", cancel, {
        once: true
      });
    });
  }
  let wasInEditor, inEditor;
  ReduxStore.subscribe(() => {
    const state = ReduxStore.getState().scratchGui;
    wasInEditor = inEditor;
    inEditor = !state.mode.isPlayerOnly;
    if (inEditor && !wasInEditor) {
      wasInEditor = inEditor;
      queueMicrotask(activateBlocklyListener);
    }
  });
});

/***/ }),

/***/ "./src/addons/addons/toolbox-full-blocks-on-hover/_runtime_entry.js":
/*!**************************************************************************!*\
  !*** ./src/addons/addons/toolbox-full-blocks-on-hover/_runtime_entry.js ***!
  \**************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-loader!./userstyle.css */ "./node_modules/css-loader/index.js!./src/addons/addons/toolbox-full-blocks-on-hover/userstyle.css");
/* harmony import */ var _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0__);
/* generated by pull.js */

const resources = {
  "userstyle.css": _css_loader_userstyle_css__WEBPACK_IMPORTED_MODULE_0___default.a
};

/***/ }),

/***/ "./src/addons/addons/waveform-chunk-size/_runtime_entry.js":
/*!*****************************************************************!*\
  !*** ./src/addons/addons/waveform-chunk-size/_runtime_entry.js ***!
  \*****************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/waveform-chunk-size/userscript.js");
/* generated by pull.js */

const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/waveform-chunk-size/userscript.js":
/*!*************************************************************!*\
  !*** ./src/addons/addons/waveform-chunk-size/userscript.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function (_ref) {
  let {
    addon
  } = _ref;
  let chunkSize = addon.settings.get("quality");
  const updateChunkSize = () => {
    ReduxStore.dispatch({
      type: 'scratch-gui/addon-util/SET_SOUND_EDITOR_WAVEFORM_CHUNK_SIZE',
      chunkSize: chunkSize
    });
  };
  updateChunkSize();
  addon.self.addEventListener("disabled", () => {
    chunkSize = 1024;
    updateChunkSize();
  });
  addon.self.addEventListener("reenabled", () => {
    chunkSize = addon.settings.get("quality");
    updateChunkSize();
  });
});

/***/ }),

/***/ "./src/addons/libraries/common/cs/normalize-color.js":
/*!***********************************************************!*\
  !*** ./src/addons/libraries/common/cs/normalize-color.js ***!
  \***********************************************************/
/*! exports provided: getHexRegex, normalizeHex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHexRegex", function() { return getHexRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeHex", function() { return normalizeHex; });
const getHexRegex = () => /^#?[0-9a-fA-F]{3,8}$/;
const normalizeHex = input => {
  let hex = String(input);
  if (!getHexRegex().test(hex)) return "#000000";
  if (!hex.startsWith("#")) hex = "#".concat(hex);
  if (hex.length === 4) {
    const [_, r, g, b] = hex;
    hex = "#".concat(r).concat(r).concat(g).concat(g).concat(b).concat(b);
  }
  return hex.toLowerCase();
};

/***/ }),

/***/ "./src/addons/libraries/common/cs/rate-limiter.js":
/*!********************************************************!*\
  !*** ./src/addons/libraries/common/cs/rate-limiter.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RateLimiter; });
class RateLimiter {
  constructor(wait) {
    this.timeout = null;
    this.callback = null;
    this.wait = wait;
  }
  abort() {
    let call = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    if (this.timeout) {
      clearTimeout(this.timeout);
      if (call) this.callback();
      this.timeout = this.callback = null;
    }
  }
  limit(callback) {
    this.abort(false);
    this.callback = callback;
    this.timeout = setTimeout(() => {
      this.timeout = this.callback = null;
      callback();
    }, this.wait);
  }
}

/***/ }),

/***/ "./src/addons/libraries/thirdparty/cs/tinycolor-min.js":
/*!*************************************************************!*\
  !*** ./src/addons/libraries/thirdparty/cs/tinycolor-min.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// TinyColor v1.4.2
// https://github.com/bgrins/TinyColor
// Brian Grinstead, MIT License
// Modified to use ES6 export

const tinycolor = function (Math) {
  var trimLeft = /^\s+/,
    trimRight = /\s+$/,
    tinyCounter = 0,
    mathRound = Math.round,
    mathMin = Math.min,
    mathMax = Math.max,
    mathRandom = Math.random;
  function tinycolor(color, opts) {
    color = color ? color : '';
    opts = opts || {};

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
      return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }
    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) {
      this._r = mathRound(this._r);
    }
    if (this._g < 1) {
      this._g = mathRound(this._g);
    }
    if (this._b < 1) {
      this._b = mathRound(this._b);
    }
    this._ok = rgb.ok;
    this._tc_id = tinyCounter++;
  }
  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) {
        R = RsRGB / 12.92;
      } else {
        R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      }
      if (GsRGB <= 0.03928) {
        G = GsRGB / 12.92;
      } else {
        G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      }
      if (BsRGB <= 0.03928) {
        B = BsRGB / 12.92;
      } else {
        B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = mathRound(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = mathRound(hsv.h * 360),
        s = mathRound(hsv.s * 100),
        v = mathRound(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = mathRound(hsl.h * 360),
        s = mathRound(hsl.s * 100),
        l = mathRound(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return '#' + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return '#' + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: mathRound(this._r),
        g: mathRound(this._g),
        b: mathRound(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: mathRound(bound01(this._r, 255) * 100) + "%",
        g: mathRound(bound01(this._g, 255) * 100) + "%",
        b: mathRound(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }
      if (this._a < 1) {
        return false;
      }
      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = '#' + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";
      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = '#' + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    triad: function triad() {
      return this._applyCombination(_triad, arguments);
    },
    tetrad: function tetrad() {
      return this._applyCombination(_tetrad, arguments);
    }
  };

  // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1
  tinycolor.fromRatio = function (color, opts) {
    if (typeof color == "object") {
      var newColor = {};
      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }
      color = newColor;
    }
    return tinycolor(color, opts);
  };

  // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //
  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color == "string") {
      color = stringInputToObject(color);
    }
    if (typeof color == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }
      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: mathMin(255, mathMax(rgb.r, 0)),
      g: mathMin(255, mathMax(rgb.g, 0)),
      b: mathMin(255, mathMax(rgb.b, 0)),
      a: a
    };
  }

  // Conversion Functions
  // --------------------

  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]
  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  }

  // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]
  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
      min = mathMin(r, g, b);
    var h,
      s,
      l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: h,
      s: s,
      l: l
    };
  }

  // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }

  // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]
  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = mathMax(r, g, b),
      min = mathMin(r, g, b);
    var h,
      s,
      v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: h,
      s: s,
      v: v
    };
  }

  // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
      f = h - i,
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s),
      mod = i % 6,
      r = [v, q, p, p, t, v][mod],
      g = [t, v, v, q, p, p][mod],
      b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }

  // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex
  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }

  // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex
  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16)), pad2(convertDecimalToHex(a))];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }

  // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"
  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(mathRound(r).toString(16)), pad2(mathRound(g).toString(16)), pad2(mathRound(b).toString(16))];
    return hex.join("");
  }

  // `equals`
  // Can be called with any tinycolor input
  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) {
      return false;
    }
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };
  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: mathRandom(),
      g: mathRandom(),
      b: mathRandom()
    });
  };

  // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }
  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
    rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
    rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
    return tinycolor(rgb);
  }
  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.
  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  }

  // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }
  function _triad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 120) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 240) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _tetrad(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 90) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 180) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 270) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }
    return ret;
  }
  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
      s = hsv.s,
      v = hsv.v;
    var ret = [];
    var modification = 1 / results;
    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }
    return ret;
  }

  // Utility Functions
  // ---------------------

  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  };

  // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  };

  // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;
      case "AAlarge":
        out = readability >= 3;
        break;
      case "AAAsmall":
        out = readability >= 7;
        break;
    }
    return out;
  };

  // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;
    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);
      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }
    if (tinycolor.isReadable(baseColor, bestColor, {
      "level": level,
      "size": size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  };

  // Big List of Colors
  // ------------------
  // <http://www.w3.org/TR/css3-color/#svg-color>
  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };

  // Make it easy to access colors via `hexNames[hex]`
  var hexNames = tinycolor.hexNames = flip(names);

  // Utilities
  // ---------

  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
  function flip(o) {
    var flipped = {};
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }
    return flipped;
  }

  // Return a valid alpha value [0,1] with all invalid values being set to 1
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }

  // Take input from [0, n] and return it as [0, 1]
  function bound01(n, max) {
    if (isOnePointZero(n)) {
      n = "100%";
    }
    var processPercent = isPercentage(n);
    n = mathMin(max, mathMax(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
      return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return n % max / parseFloat(max);
  }

  // Force a number between 0 and 1
  function clamp01(val) {
    return mathMin(1, mathMax(0, val));
  }

  // Parse a base-16 hex value into a base-10 integer
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }

  // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf('.') != -1 && parseFloat(n) === 1;
  }

  // Check to see if string passed in is a percentage
  function isPercentage(n) {
    return typeof n === "string" && n.indexOf('%') != -1;
  }

  // Force a hex value to have 2 characters
  function pad2(c) {
    return c.length == 1 ? '0' + c : '' + c;
  }

  // Replace a decimal with it's percentage value
  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }
    return n;
  }

  // Converts a decimal to a hex value
  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  }
  // Converts a hex value to a decimal
  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }
  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }();

  // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).
  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  }

  // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
  function stringInputToObject(color) {
    color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == 'transparent') {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }
    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }
    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }
    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        a: convertHexToDecimal(match[4] + '' + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + '' + match[1]),
        g: parseIntFromHex(match[2] + '' + match[2]),
        b: parseIntFromHex(match[3] + '' + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      "level": "AA",
      "size": "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }
    if (size !== "small" && size !== "large") {
      size = "small";
    }
    return {
      "level": level,
      "size": size
    };
  }

  /*// Node: Export function
  if (typeof module !== "undefined" && module.exports) {
      module.exports = tinycolor;
  }
  // AMD/requirejs: Define the module
  else if (typeof define === 'function' && define.amd) {
      define(function () {return tinycolor;});
  }
  // Browser: Expose to window
  else {
      window.tinycolor = tinycolor;
  }*/

  return tinycolor;
}(Math);
/* harmony default export */ __webpack_exports__["default"] = (tinycolor);

/***/ })

}]);
//# sourceMappingURL=addon-default-entry.js.map