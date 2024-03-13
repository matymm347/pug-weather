/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\r\n  margin: 0;\r\n  background-color: #bfbcff;\r\n  font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\n#container {\r\n  min-width: 300px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n#search-area {\r\n  display: flex;\r\n  gap: 10px;\r\n  flex-direction: column;\r\n  width: 600px;\r\n}\r\n\r\n#search-bar {\r\n  height: 50px;\r\n  border-radius: 50px;\r\n  background-color: white;\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 10px;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  #search-area {\r\n    width: 100%; /* Make the width 100% to fill the smaller screen */\r\n  }\r\n}\r\n\r\n#search-icon-area {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin-right: 7px;\r\n  border-radius: 50%;\r\n  background-color: #5650cc;\r\n}\r\n\r\n#search-input-area {\r\n  margin-left: 20px;\r\n  flex-grow: 1;\r\n  background-color: transparent;\r\n  outline: none;\r\n  border: none;\r\n  font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n  font-size: 16px;\r\n}\r\n\r\n#search-icon {\r\n  width: 20px;\r\n  height: 20px;\r\n  margin-right: 17px;\r\n  color: white;\r\n}\r\n\r\n#search-result-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  background-color: white;\r\n  border-radius: 7px;\r\n  font-weight: 400;\r\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n#search-result-section button,\r\np {\r\n  margin-inline: 20px;\r\n}\r\n\r\n#search-result-section button {\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  padding-block: 10px;\r\n  background-color: transparent;\r\n  text-align: left;\r\n  border: none;\r\n  cursor: pointer;\r\n  font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif,\r\n    \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n}\r\n\r\n#search-result-section button:hover {\r\n  background-color: #5650cc;\r\n  color: white;\r\n}\r\n\r\n#info-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 3fr;\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n#now-card {\r\n  border: solid 1px red;\r\n}\r\n\r\n#back-button-area {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 40px;\r\n  height: 40px;\r\n  border-radius: 50%;\r\n  margin: 15px;\r\n  background-color: #5650cc;\r\n}\r\n\r\n#back-button {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n#top-now-card-grid {\r\n  display: grid;\r\n  justify-items: center;\r\n}\r\n\r\n#switch-container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n#current-position-element {\r\n  border-radius: 7px;\r\n  width: 17px;\r\n  background-color: white;\r\n}\r\n\r\n.switch-background-element {\r\n  border-radius: 50%;\r\n  width: 8px;\r\n  background-color: rgb(102, 99, 99);\r\n}\r\n\r\n#switch-container div {\r\n  height: 8px;\r\n  margin: 1px;\r\n}\r\n\r\n#temp-switch-grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  align-items: center;\r\n  justify-items: center;\r\n}\r\n\r\n#temp-switch-background-bar {\r\n  grid-column: 2 / span 2;\r\n  grid-row: 1;\r\n  height: 12px;\r\n  width: 20px;\r\n  background-color: rgb(102, 99, 99);\r\n  margin-inline: 2px;\r\n  border-radius: 10px;\r\n}\r\n\r\n#temp-switch-circle {\r\n  grid-column: 2;\r\n  grid-row: 1;\r\n  z-index: 1;\r\n  width: 18px;\r\n  height: 18px;\r\n  border-radius: 50%;\r\n  background-color: white;\r\n  margin-inline: 2px;\r\n}\r\n\r\n.temp-switch-unit-text {\r\n  font-size: small;\r\n  color: white;\r\n}\r\n\r\n#city-row-grid {\r\n  display: grid;\r\n  align-items: center;\r\n  justify-items: center;\r\n  grid-template-columns: 2fr 1fr;\r\n  grid-template-rows: 1fr 1fr;\r\n}\r\n\r\n.city-row-elements {\r\n  color: white;\r\n}\r\n\r\n#city-row-location {\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomeTitle: () => (/* binding */ createHomeTitle),\n/* harmony export */   setUpHomePage: () => (/* binding */ setUpHomePage)\n/* harmony export */ });\n/* harmony import */ var _graphics_search_alt_1_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./graphics/search-alt-1-svgrepo-com.svg */ \"./src/graphics/search-alt-1-svgrepo-com.svg\");\n/* harmony import */ var _weatherPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherPage */ \"./src/weatherPage.js\");\n\r\n\r\n\r\nasync function fillSearchHints(searchArea, userInput) {\r\n  userInput = replacePolishChars(userInput);\r\n  let apiSearchURLBase = `http://api.weatherapi.com/v1/search.json?key=a5e4fed568014feea07121139242401&q=${userInput}&lang=pl`;\r\n\r\n  const cityList = await fetch(apiSearchURLBase, { mode: \"cors\" }).then(\r\n    (response) => response.json()\r\n  );\r\n\r\n  if (Object.keys(cityList).length === 0) {\r\n    let paragraph = document.createElement(\"p\");\r\n    paragraph.textContent = \"No matches found\";\r\n    searchArea.appendChild(paragraph);\r\n  } else {\r\n    for (let index = 0; index < cityList.length; index++) {\r\n      let button = createSearchHintButton(searchArea);\r\n      button.textContent = `${cityList[index].name}, ${cityList[index].country}`;\r\n      button.dataset.value = cityList[index].id;\r\n    }\r\n  }\r\n}\r\n\r\nfunction createSearchHintButton(searchArea) {\r\n  let button = document.createElement(\"button\");\r\n  searchArea.appendChild(button);\r\n  button.addEventListener(\"click\", () => {\r\n    (0,_weatherPage__WEBPACK_IMPORTED_MODULE_1__.setUpWeatherPage)(button.dataset.value);\r\n  });\r\n  return button;\r\n}\r\n\r\nfunction replacePolishChars(inputString) {\r\n  const polishLettersMapping = {\r\n    ą: \"a\",\r\n    ć: \"c\",\r\n    ę: \"e\",\r\n    ł: \"l\",\r\n    ń: \"n\",\r\n    ó: \"o\",\r\n    ś: \"s\",\r\n    ź: \"z\",\r\n    ż: \"z\",\r\n    Ą: \"A\",\r\n    Ć: \"C\",\r\n    Ę: \"E\",\r\n    Ł: \"L\",\r\n    Ń: \"N\",\r\n    Ó: \"O\",\r\n    Ś: \"S\",\r\n    Ź: \"Z\",\r\n    Ż: \"Z\",\r\n  };\r\n\r\n  // Replace Polish letters with their non-diacritic equivalents\r\n  let resultString = \"\";\r\n  for (let i = 0; i < inputString.length; i++) {\r\n    const currentChar = inputString.charAt(i);\r\n    resultString += polishLettersMapping[currentChar] || currentChar;\r\n  }\r\n\r\n  return resultString;\r\n}\r\n\r\nfunction createHomeTitle(container) {\r\n  let homeTitle = document.createElement(\"h1\");\r\n  homeTitle.textContent = \"Pug Weather\";\r\n  homeTitle.style.color = \"#5751CC\";\r\n  container.appendChild(homeTitle);\r\n\r\n  return homeTitle;\r\n}\r\n\r\nfunction userInputSearchHandler(searchInputArea, searchResultSection) {\r\n  let timeoutSwitch = true;\r\n  let timeoutId = \"\";\r\n\r\n  searchInputArea.addEventListener(\"keydown\", (event) => {\r\n    if (event.ctrlKey === true) {\r\n      return;\r\n    }\r\n\r\n    if (event.key === \"ArrowUp\") {\r\n      return;\r\n    } else if (event.key === \"ArrowDown\") {\r\n      return;\r\n    } else if (event.key === \"ArrowLeft\") {\r\n      return;\r\n    } else if (event.key === \"ArrowRight\") {\r\n      return;\r\n    }\r\n\r\n    if (event.key === \"Enter\") {\r\n      // Submit search result\r\n    }\r\n\r\n    if (timeoutSwitch === false) {\r\n      clearTimeout(timeoutId);\r\n    }\r\n\r\n    timeoutSwitch = false;\r\n\r\n    timeoutId = setTimeout(() => {\r\n      timeoutSwitch = true;\r\n      while (searchResultSection.firstChild) {\r\n        searchResultSection.removeChild(searchResultSection.firstChild);\r\n      }\r\n      if (searchInputArea.value != \"\") {\r\n        fillSearchHints(searchResultSection, searchInputArea.value);\r\n      }\r\n    }, 200);\r\n  });\r\n}\r\n\r\nfunction setUpSearchArea(container) {\r\n  let searchArea = document.createElement(\"div\");\r\n  searchArea.id = \"search-area\";\r\n  container.appendChild(searchArea);\r\n\r\n  let searchBar = document.createElement(\"div\");\r\n  searchBar.id = \"search-bar\";\r\n  searchArea.appendChild(searchBar);\r\n\r\n  let searchInputArea = document.createElement(\"input\");\r\n  searchInputArea.id = \"search-input-area\";\r\n  searchInputArea.placeholder = \"Search Location\";\r\n  searchBar.appendChild(searchInputArea);\r\n\r\n  let searchIconArea = document.createElement(\"div\");\r\n  searchIconArea.id = \"search-icon-area\";\r\n  searchBar.appendChild(searchIconArea);\r\n\r\n  let searchIcon = document.createElement(\"img\");\r\n  searchIcon.src = _graphics_search_alt_1_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;\r\n  searchIcon.alt = \"search icon\";\r\n  searchIcon.id = \"search-icon\";\r\n  searchIcon.style.marginLeft = \"18px\";\r\n  searchIconArea.appendChild(searchIcon);\r\n\r\n  let searchResultSection = document.createElement(\"div\");\r\n  searchResultSection.id = \"search-result-section\";\r\n  searchArea.appendChild(searchResultSection);\r\n\r\n  searchBar.addEventListener(\"click\", () => {\r\n    searchInputArea.focus();\r\n  });\r\n\r\n  userInputSearchHandler(searchInputArea, searchResultSection);\r\n}\r\n\r\nfunction setUpHomePage() {\r\n  let container = document.querySelector(\"#container\");\r\n  let homeTitle = createHomeTitle(container);\r\n  let searchArea = setUpSearchArea(container);\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/homePage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _weatherPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherPage */ \"./src/weatherPage.js\");\n\r\n\r\n\r\n\r\n// setUpHomePage();\r\n(0,_weatherPage__WEBPACK_IMPORTED_MODULE_2__.setUpWeatherPage)(\"1991652\");\r\n\n\n//# sourceURL=webpack://webpack-template/./src/index.js?");

/***/ }),

/***/ "./src/weatherPage.js":
/*!****************************!*\
  !*** ./src/weatherPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setUpWeatherPage: () => (/* binding */ setUpWeatherPage)\n/* harmony export */ });\n/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ \"./src/homePage.js\");\n/* harmony import */ var _graphics_back_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./graphics/back-svgrepo-com.svg */ \"./src/graphics/back-svgrepo-com.svg\");\n\r\n\r\n\r\nclass TempSwitch {\r\n  constructor() {\r\n    this.tempSwitchGrid = document.createElement(\"div\");\r\n    this.tempSwitchGrid.id = \"temp-switch-grid\";\r\n\r\n    this.celsiusText = document.createElement(\"div\");\r\n    this.celsiusText.textContent = \"°C\";\r\n    this.celsiusText.className = \"temp-switch-unit-text\";\r\n    this.tempSwitchGrid.appendChild(this.celsiusText);\r\n\r\n    this.currentTempCircle = document.createElement(\"div\");\r\n    this.currentTempCircle.id = \"temp-switch-circle\";\r\n    this.tempSwitchGrid.appendChild(this.currentTempCircle);\r\n\r\n    this.backgroundBar = document.createElement(\"div\");\r\n    this.backgroundBar.id = \"temp-switch-background-bar\";\r\n    this.tempSwitchGrid.appendChild(this.backgroundBar);\r\n\r\n    this.farenheitText = document.createElement(\"div\");\r\n    this.farenheitText.textContent = \"°F\";\r\n    this.farenheitText.className = \"temp-switch-unit-text\";\r\n    this.tempSwitchGrid.appendChild(this.farenheitText);\r\n  }\r\n\r\n  get domGrid() {\r\n    return this.tempSwitchGrid;\r\n  }\r\n\r\n  switchTemp(unit) {\r\n    switch (unit) {\r\n      case \"celcius\":\r\n        this.currentTempCircle.style.gridColumn = \"2\";\r\n        break;\r\n      case \"farenheit\":\r\n        this.currentTempCircle.style.gridColumn = \"3\";\r\n    }\r\n  }\r\n}\r\n\r\nclass DaySwitchMarker {\r\n  constructor() {\r\n    this.switchContainer = document.createElement(\"div\");\r\n    this.switchContainer.id = \"switch-container\";\r\n\r\n    this.currentPositionElement = document.createElement(\"div\");\r\n    this.currentPositionElement.id = \"current-position-element\";\r\n    this.currentPositionElement.className = \"switch-element\";\r\n    this.currentPositionElement.style.order = 0;\r\n    this.switchContainer.appendChild(this.currentPositionElement);\r\n\r\n    this.backgroundPositionElement1 = document.createElement(\"div\");\r\n    this.backgroundPositionElement1.style.order = \"1\";\r\n    this.backgroundPositionElement1.className =\r\n      \"switch-background-element switch-element\";\r\n    this.switchContainer.appendChild(this.backgroundPositionElement1);\r\n    this.backgroundPositionElement2 = document.createElement(\"div\");\r\n    this.backgroundPositionElement2.style.order = \"3\";\r\n    this.backgroundPositionElement2.className =\r\n      \"switch-background-element switch-element\";\r\n    this.switchContainer.appendChild(this.backgroundPositionElement2);\r\n  }\r\n\r\n  get domGrid() {\r\n    return this.switchContainer;\r\n  }\r\n\r\n  switchDay(currentDay) {\r\n    switch (currentDay) {\r\n      case 0:\r\n        this.currentPositionElement.style.order = 0;\r\n        break;\r\n      case 1:\r\n        this.currentPositionElement.style.order = 2;\r\n        break;\r\n      case 2:\r\n        this.currentPositionElement.style.order = 4;\r\n        break;\r\n      case 3:\r\n        this.currentPositionElement.style.order = 6;\r\n        break;\r\n    }\r\n  }\r\n}\r\n\r\nclass BackButton {\r\n  constructor() {\r\n    this.backButtonArea = document.createElement(\"div\");\r\n    this.backButtonArea.id = \"back-button-area\";\r\n\r\n    this.backButton = document.createElement(\"img\");\r\n    this.backButton.src = _graphics_back_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    this.backButton.id = \"back-button\";\r\n    this.backButton.alt = \"back\";\r\n    this.backButtonArea.appendChild(this.backButton);\r\n  }\r\n\r\n  get domGroup() {\r\n    return this.backButtonArea;\r\n  }\r\n}\r\n\r\nclass CityRow {\r\n  constructor(apiResponse) {\r\n    this.container = document.createElement(\"div\");\r\n    this.container.id = \"city-row-grid\";\r\n\r\n    this.location = document.createElement(\"div\");\r\n    this.location.className = \"city-row-elements\";\r\n    this.location.id = \"city-row-location\";\r\n    this.updateLocation(\r\n      apiResponse.location.name,\r\n      apiResponse.location.country\r\n    );\r\n\r\n    this.sunRise = document.createElement(\"div\");\r\n    this.sunRise.className = \"city-row-elements\";\r\n    this.sunRise.textContent = \"srtest\";\r\n\r\n    this.sunSet = document.createElement(\"div\");\r\n    this.sunSet.className = \"city-row-elements\";\r\n    this.sunSet.textContent = \"sstest\";\r\n\r\n    this.date = document.createElement(\"div\");\r\n    this.date.className = \"city-row-elements\";\r\n    this.changeDate(0, apiResponse);\r\n\r\n    this.container.appendChild(this.location);\r\n    this.container.appendChild(this.sunRise);\r\n    this.container.appendChild(this.date);\r\n    this.container.appendChild(this.sunSet);\r\n  }\r\n\r\n  get domGrid() {\r\n    return this.container;\r\n  }\r\n\r\n  changeDate(daynr, apiResponse) {\r\n    const monthAbbr = [\r\n      \"Jan\",\r\n      \"Feb\",\r\n      \"Mar\",\r\n      \"Apr\",\r\n      \"May\",\r\n      \"Jun\",\r\n      \"Jul\",\r\n      \"Aug\",\r\n      \"Sep\",\r\n      \"Oct\",\r\n      \"Nov\",\r\n      \"Dec\",\r\n    ];\r\n\r\n    const currentMnth =\r\n      monthAbbr[\r\n        new Date(apiResponse.forecast.forecastday[daynr].date).getMonth()\r\n      ];\r\n\r\n    if (daynr === 0) {\r\n      this.date.textContent = `Today ${new Date(\r\n        apiResponse.forecast.forecastday[0].date\r\n      ).getDate()} ${currentMnth}`;\r\n    } else {\r\n      this.date.textContent = `${new Date(\r\n        apiResponse.forecast.forecastday[daynr].date\r\n      ).getDate()} ${currentMnth}`;\r\n    }\r\n  }\r\n\r\n  updateLocation(city, country) {\r\n    this.location.textContent = city + \", \" + country;\r\n  }\r\n\r\n  updateSunRise(time) {\r\n    this.sunRise.textContent = time;\r\n  }\r\n\r\n  updateSunSet(time) {\r\n    this.sunSet.textContent = time;\r\n  }\r\n}\r\n\r\nclass TopNowCardRow {\r\n  constructor() {\r\n    this.container = document.createElement(\"div\");\r\n    this.container.id = \"top-now-card-grid\";\r\n    this.container.style.gridTemplateColumns = \"1fr 1fr 1fr\";\r\n    this.container.style.direction = \"row\";\r\n\r\n    this.backbutton = new BackButton();\r\n    this.daySwitchMarker = new DaySwitchMarker();\r\n    this.tempSwitch = new TempSwitch();\r\n\r\n    this.container.appendChild(this.backbutton.domGroup);\r\n    this.container.appendChild(this.daySwitchMarker.domGrid);\r\n    this.container.appendChild(this.tempSwitch.domGrid);\r\n  }\r\n\r\n  get domGrid() {\r\n    return this.container;\r\n  }\r\n}\r\n\r\nfunction setUpNowCard(container, apiResponse) {\r\n  let nowCard = document.createElement(\"div\");\r\n  nowCard.style.gridTemplateRows = \"1fr 1fr 1fr 5fr\";\r\n  nowCard.id = \"now-card\";\r\n\r\n  let topRow = new TopNowCardRow();\r\n  let cityRow = new CityRow(apiResponse);\r\n  nowCard.appendChild(topRow.domGrid);\r\n  nowCard.appendChild(cityRow.domGrid);\r\n  container.appendChild(nowCard);\r\n\r\n  //test\r\n  cityRow.changeDate(0, apiResponse);\r\n  //\r\n  return { nowCard, topRow, cityRow };\r\n}\r\n\r\nfunction setUpDetailCard(container, apiResponse) {\r\n  let detailCard = document.createElement(\"div\");\r\n  detailCard.id = \"detail-card\";\r\n  detailCard.textContent = \"detailCard\";\r\n  container.appendChild(detailCard);\r\n\r\n  return { detailCard };\r\n}\r\n\r\nasync function getApiData(locationId) {\r\n  let apiURL = `http://api.weatherapi.com/v1/forecast.json?key=a5e4fed568014feea07121139242401&q=id:${locationId}&days=3&aqi=no&alerts=no`;\r\n  return await fetch(apiURL, { mode: \"cors\" }).then((response) =>\r\n    response.json()\r\n  );\r\n}\r\n\r\nfunction getCurrentTemerature(locationId) {\r\n  let apiUrl = `http://api.weatherapi.com/v1/current.json?key=a5e4fed568014feea07121139242401&q=id:${locationId}&aqi=no`;\r\n\r\n  fetch(apiUrl, { mode: \"cors\" })\r\n    .then(function (response) {\r\n      return response.json();\r\n    })\r\n    .then(function (response) {\r\n      console.log(`Current temperature: ${response.current.temp_c}`);\r\n    })\r\n    .catch(function (err) {\r\n      // Error handling\r\n    });\r\n}\r\n\r\nasync function setUpWeatherPage(locationId) {\r\n  // some animation should be played during fetching in case of API long response\r\n\r\n  const apiResponse = await getApiData(locationId);\r\n\r\n  let container = document.querySelector(\"#container\");\r\n  while (container.firstChild) {\r\n    container.removeChild(container.firstChild);\r\n  }\r\n\r\n  let infoGrid = document.createElement(\"div\");\r\n  infoGrid.id = \"info-grid\";\r\n  container.appendChild(infoGrid);\r\n\r\n  let { nowCard, topRow, cityRow } = setUpNowCard(infoGrid, apiResponse); //if not in use nowCard object import to be removed\r\n  let { detailCard } = setUpDetailCard(infoGrid, apiResponse); //if not in use detailCard object import to be removed\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-template/./src/weatherPage.js?");

/***/ }),

/***/ "./src/graphics/back-svgrepo-com.svg":
/*!*******************************************!*\
  !*** ./src/graphics/back-svgrepo-com.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee19c42ca7762c2ca055.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/graphics/back-svgrepo-com.svg?");

/***/ }),

/***/ "./src/graphics/search-alt-1-svgrepo-com.svg":
/*!***************************************************!*\
  !*** ./src/graphics/search-alt-1-svgrepo-com.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"86c32af5828de049ca80.svg\";\n\n//# sourceURL=webpack://webpack-template/./src/graphics/search-alt-1-svgrepo-com.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;