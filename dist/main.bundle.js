/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Global Style Properties */\n* {\n    font-family: Arial, sans-serif;\n    margin: 0;\n    padding: 0;\n}\n\n.container {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 20px;\n}\n\np {\n    color: #666;\n}\n\n/* Header */\nnav {\n    background: radial-gradient(circle, #8314b7, #3a8dff);\n    color: white;\n    text-align: center;\n    padding: 10px 0;\n    font-weight: bold;\n    z-index: 1001;\n    position: relative;\n}\n\n/* Buttons Container */\n#buttons-container {\n    display: flex;\n    align-items: center;\n    gap: 10px; /* Space between Add and Filter buttons */\n}\n\n/* Add Button */\n#add {\n    margin: 5px 0 0 5px;\n    background-color: #2dec2d;\n    color: #ffffffdf;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n/* Filter Button */\n#filter {\n    background-color: #ffca2c;\n    color: #ffffffdf;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n\n/* Todo Container */\n#todo-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    width: 100%;\n    height: 100%;\n    padding: 20px;\n    padding-top: 10px;\n    box-sizing: border-box;\n}\n\n/* Todo Category */\n#todo-category {\n    flex: 1 1 25%;\n    min-height: 100%;\n    background-color: #f0f0f0;\n    padding: 20px;\n    border-radius: 8px;\n    box-sizing: border-box;\n    overflow-x: hidden;\n    margin: 0 10px;\n}\n\n#todo-category h2 {\n    padding-bottom: 20px;\n}\n\n/* Todo Card */\n.todo-card {\n    position: relative;\n    width: 300px;\n    padding: 15px;\n    margin-top: 15px;\n    background-color: #ffffff;\n    border-radius: 8px;\n    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n    border-left: 5px solid #8314b7;\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n}\n\n.todo-card:hover {\n    transform: translateY(-5px);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);\n}\n\n.todo-card h3 {\n    font-size: 1.2rem;\n    margin-bottom: 10px;\n    color: #333;\n}\n\n.todo-card p {\n    font-size: 0.9rem;\n    color: #666;\n    margin-bottom: 8px;\n}\n\n/* Positioning the buttons at the bottom-right */\n.todo-card .delete-btn, .todo-card .edit-btn {\n    position: absolute;\n    bottom: 10px;\n    font-size: 1.2rem;\n    background: none;\n    border: none;\n    cursor: pointer;\n    transition: color 0.3s ease;\n}\n\n.todo-card .delete-btn {\n    right: 40px;\n    color: #FF0000;\n}\n\n.todo-card .delete-btn:hover {\n    color: #CC0000;\n}\n\n.todo-card .edit-btn {\n    right: 10px;\n    color: #007BFF;\n}\n\n.todo-card .edit-btn:hover {\n    color: #0056b3;\n}\n\n.not-started {\n    border-left-color: red;\n}\n\n.in-progress {\n    border-left-color: orange;\n}\n\n.blocked {\n    border-left-color: rgba(255, 247, 0, 0.931);\n}\n\n.complete {\n    border-left-color: green;\n}\n\n/* Modal Styles */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1000;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.modal-content {\n    background-color: #fff;\n    padding: 30px;\n    border-radius: 8px;\n    width: 90%;\n    max-width: 800px;\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.modal-content h2 {\n    margin-bottom: 15px;\n}\n\n.close {\n    color: #aaa;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 28px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n}\n\n/* Form Styles */\n#taskForm {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 15px;\n}\n\n#taskForm .form-group {\n    flex: 1 1 calc(50% - 20px);\n    margin-bottom: 5px;\n}\n\n#taskForm label {\n    display: block;\n    font-weight: bold;\n    margin-bottom: 5px;\n}\n\n#taskForm input,\n#taskForm textarea,\n#taskForm select,\n#taskForm button {\n    width: calc(100% - 20px);\n    padding: 10px;\n    margin-top: 5px;\n    font-size: 1rem;\n    border-radius: 4px;\n    border: 1px solid #ccc;\n}\n\n#taskForm button {\n    background: radial-gradient(circle, #8314b7, #3a8dff);\n    color: white;\n    border: none;\n    cursor: pointer;\n    transition: background 0.3s;\n    flex: 1 1 100%;\n}\n\n#taskForm button:hover {\n    background: radial-gradient(circle, #5e0f8c, #2a6bcf);\n}\n\n.filter-modal {\n    display: none; /* Hidden by default */\n    position: fixed;\n    z-index: 1001;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    justify-content: center;\n    align-items: center;\n}\n\n\n.filter-modal-content {\n    background-color: #fff;\n    padding: 30px;\n    border-radius: 8px;\n    width: 90%;\n    max-width: 400px;\n    box-sizing: border-box;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.filter-modal-content h2 {\n    margin-bottom: 15px;\n}\n\n.filter-modal-content label {\n    display: block;\n    margin-bottom: 10px;\n}\n\n.filter-modal-content input[type=\"checkbox\"] {\n    margin-right: 10px;\n}\n\n.filter-modal-content .close {\n    color: #aaa;\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    font-size: 28px;\n    font-weight: bold;\n    cursor: pointer;\n}\n\n.filter-modal-content .close:hover,\n.filter-modal-content .close:focus {\n    color: #000;\n}\n\n/* Filter Modal Submit Button */\n.filter-modal-content button {\n    background: radial-gradient(circle, #8314b7, #3a8dff);\n    color: white;\n    border: none;\n    cursor: pointer;\n    padding: 10px 20px;\n    font-size: 1rem;\n    border-radius: 4px;\n    margin-top: 15px;\n    transition: background 0.3s ease;\n    display: block; /* Ensures it takes the full available width */\n    width: 100%; /* Full width of the modal content */\n    box-sizing: border-box;\n}\n\n.filter-modal-content button:hover {\n    background: radial-gradient(circle, #5e0f8c, #2a6bcf);\n}\n\n/* Dark Mode */\nbody.dark-mode {\n    background-color: #2e2e2e; /* Lighter grey background instead of black */\n    color: #ffffff;\n}\n\n.modal-content.dark-mode,\n.filter-modal-content.dark-mode,\n.todo-card.dark-mode {\n    background-color: #444444; /* A slightly lighter grey for cards and modals */\n    color: #ffffff;\n}\n\n/* Adjust text colors in dark mode */\n.todo-card.dark-mode h3 {\n    color: #e0e0e0; /* Lighter shade of white for headings */\n}\n\n.todo-card.dark-mode p {\n    color: #cccccc; /* Slightly darker shade of white for paragraphs */\n}\n\n/* Dark Mode Button */\n#darkModeToggle {\n    background-color: #034e98; /* Different background color for the dark mode button */\n    color: #ffffffdf;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    cursor: pointer;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-todo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/darkMode.js":
/*!*************************!*\
  !*** ./src/darkMode.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n    const darkModeToggle = document.getElementById('darkModeToggle');\n    const darkModeIcon = document.getElementById('darkModeIcon');\n    \n    const applyDarkMode = (enable) => {\n        document.body.classList.toggle('dark-mode', enable);\n        document.querySelectorAll('.modal-content, .filter-modal-content, .todo-card')\n            .forEach(el => el.classList.toggle('dark-mode', enable));\n        darkModeIcon.classList.replace(enable ? 'bx-moon' : 'bx-sun', enable ? 'bx-sun' : 'bx-moon');\n    };\n\n    const loadDarkModePreference = () => {\n        const darkModeSetting = localStorage.getItem('darkMode') === 'enabled';\n        applyDarkMode(darkModeSetting);\n    };\n\n    darkModeToggle.addEventListener('click', () => {\n        const darkModeEnabled = document.body.classList.toggle('dark-mode');\n        localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');\n        applyDarkMode(darkModeEnabled);\n    });\n\n    loadDarkModePreference();\n});\n\n\n//# sourceURL=webpack://odin-todo/./src/darkMode.js?");

/***/ }),

/***/ "./src/filter.js":
/*!***********************!*\
  !*** ./src/filter.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyFilter: () => (/* binding */ applyFilter)\n/* harmony export */ });\n// Filter functionality\nfunction applyFilter(priorities) {\n    const cards = document.querySelectorAll('.todo-card');\n    cards.forEach(card => {\n        const priority = card.querySelector('p:nth-child(4)').textContent.split(': ')[1].toLowerCase();\n        if (priorities.includes(priority)) {\n            card.style.display = 'block';\n        } else {\n            card.style.display = 'none';\n        }\n    });\n}\n\n//# sourceURL=webpack://odin-todo/./src/filter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _tasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks */ \"./src/tasks.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter */ \"./src/filter.js\");\n/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./darkMode */ \"./src/darkMode.js\");\n/* harmony import */ var _darkMode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_darkMode__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n // Import the dark mode module\n\nconst form = document.getElementById('taskForm');\n\n// Modal Popup\nwindow.addEventListener('DOMContentLoaded', () => {\n    const addBtn = document.getElementById('add');\n    const modal = document.getElementById('myModal');\n    const closeBtn = document.querySelector('.close');\n    const filterBtn = document.getElementById('filter');\n    const filterModal = document.getElementById('filterModal');\n    const closeFilterBtn = filterModal.querySelector('.close');\n    const filterForm = document.getElementById('filterForm');\n\n    // Ensure modal is hidden on page load\n    (0,_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(modal);\n\n    // Load tasks from localStorage and render them\n    const tasks = (0,_storage__WEBPACK_IMPORTED_MODULE_2__.loadTasksFromLocalStorage)();\n    tasks.forEach(task => {\n        const card = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTaskCard)(task);\n        (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.appendCardToCategory)(task, card);\n    });\n\n    addBtn.addEventListener('click', () => (0,_modal__WEBPACK_IMPORTED_MODULE_3__.openModal)(modal));\n\n    closeBtn.addEventListener('click', () => (0,_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(modal));\n\n    window.addEventListener('click', (event) => (0,_modal__WEBPACK_IMPORTED_MODULE_3__.handleOutsideClick)(event, modal));\n\n    form.addEventListener('submit', (event) => {\n        event.preventDefault();\n    \n        // Ensure all required fields are filled\n        const requiredFields = ['taskProject', 'taskTitle', 'taskDescription', 'taskDueDate', 'taskPriority', 'taskStatus'];\n        let valid = true;\n    \n        requiredFields.forEach((id) => {\n            const field = document.getElementById(id);\n            if (!field.value) {\n                field.classList.add('invalid');\n                valid = false;\n            } else {\n                field.classList.remove('invalid');\n            }\n        });\n    \n        if (!valid) {\n            alert('Please fill in all required fields.');\n            return;\n        }\n    \n        // Proceed with form submission\n        const isEditing = form.getAttribute('data-editing') === 'true';\n        const card = document.querySelector(`[data-editing-card=\"true\"]`);\n        const project = document.getElementById('taskProject').value;\n        const title = document.getElementById('taskTitle').value;\n        const description = document.getElementById('taskDescription').value;\n        const dueDate = document.getElementById('taskDueDate').value;\n        const priority = document.getElementById('taskPriority').value;\n        const status = document.getElementById('taskStatus').value;\n        const notes = document.getElementById('taskNotes').value;\n    \n        if (isEditing && card) {\n            const task = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(project, title, description, dueDate, priority, status, notes);\n            (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.updateTaskCard)(task, card);\n        } else {\n            const task = new _tasks__WEBPACK_IMPORTED_MODULE_1__.Task(project, title, description, dueDate, priority, status, notes);\n            (0,_storage__WEBPACK_IMPORTED_MODULE_2__.saveTaskToLocalStorage)(task);\n            const card = (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.createTaskCard)(task);\n            (0,_tasks__WEBPACK_IMPORTED_MODULE_1__.appendCardToCategory)(task, card);\n        }\n    \n        form.reset();\n        (0,_modal__WEBPACK_IMPORTED_MODULE_3__.closeModal)(modal);\n        form.removeAttribute('data-editing');\n        document.querySelectorAll('.todo-card').forEach(c => c.removeAttribute('data-editing-card'));\n    });\n\n    // Filter Modal Functionality\n    filterBtn.addEventListener('click', () => {\n        filterModal.style.display = 'flex';\n    });\n\n    closeFilterBtn.addEventListener('click', () => {\n        filterModal.style.display = 'none';\n    });\n\n    window.addEventListener('click', (event) => {\n        if (event.target === filterModal) {\n            filterModal.style.display = 'none';\n        }\n    });\n\n    filterForm.addEventListener('submit', (event) => {\n        event.preventDefault();\n        const checkedPriorities = Array.from(filterForm.querySelectorAll('input[type=\"checkbox\"]:checked')).map(cb => cb.value);\n        (0,_filter__WEBPACK_IMPORTED_MODULE_4__.applyFilter)(checkedPriorities);\n        filterModal.style.display = 'none';\n    });\n});\n\n\n//# sourceURL=webpack://odin-todo/./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   handleOutsideClick: () => (/* binding */ handleOutsideClick),\n/* harmony export */   openEditModal: () => (/* binding */ openEditModal),\n/* harmony export */   openModal: () => (/* binding */ openModal)\n/* harmony export */ });\nfunction openModal(modal, task = null) {\n    modal.style.display = 'flex';\n\n    if (task) {\n        // If a task is passed, populate the form with task details for editing\n        document.getElementById('taskProject').value = task.project;\n        document.getElementById('taskTitle').value = task.title;\n        document.getElementById('taskDescription').value = task.description;\n        document.getElementById('taskDueDate').value = task.dueDate;\n        document.getElementById('taskPriority').value = task.priority;\n        document.getElementById('taskStatus').value = task.taskStatus;\n        document.getElementById('taskNotes').value = task.notes;\n    }\n}\n\nfunction closeModal(modal) {\n    modal.style.display = 'none';\n    clearForm(); // Clears the form when closing the modal\n}\n\nfunction clearForm() {\n    document.getElementById('taskForm').reset(); // Clear form fields\n}\n\n// Utility function to detect outside clicks\nfunction handleOutsideClick(event, modal) {\n    if (event.target === modal) {\n        closeModal(modal);\n    }\n}\n\nfunction openEditModal(task, card) {\n    const modal = document.getElementById('myModal');\n    const form = document.getElementById('taskForm'); // Ensure form is defined here\n    modal.style.display = 'flex';\n\n    // Populate the form with task data\n    document.getElementById('taskProject').value = task.project || '';\n    document.getElementById('taskTitle').value = task.title || '';\n    document.getElementById('taskDescription').value = task.description || '';\n    document.getElementById('taskDueDate').value = task.dueDate || '';\n    document.getElementById('taskPriority').value = task.priority || '';\n    document.getElementById('taskStatus').value = task.taskStatus || '';\n    document.getElementById('taskNotes').value = task.notes || '';\n\n    // Track editing state\n    form.setAttribute('data-editing', 'true');\n    card.setAttribute('data-editing-card', 'true');\n}\n\n//# sourceURL=webpack://odin-todo/./src/modal.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadTasksFromLocalStorage: () => (/* binding */ loadTasksFromLocalStorage),\n/* harmony export */   saveTaskToLocalStorage: () => (/* binding */ saveTaskToLocalStorage)\n/* harmony export */ });\nfunction saveTaskToLocalStorage(task) {\n    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];\n    tasks.push(task);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\nfunction loadTasksFromLocalStorage() {\n    return JSON.parse(localStorage.getItem('tasks')) || [];\n}\n\n\n//# sourceURL=webpack://odin-todo/./src/storage.js?");

/***/ }),

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   appendCardToCategory: () => (/* binding */ appendCardToCategory),\n/* harmony export */   createTaskCard: () => (/* binding */ createTaskCard),\n/* harmony export */   updateTaskCard: () => (/* binding */ updateTaskCard)\n/* harmony export */ });\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\n\nclass Task {\n    constructor(project, title, description, dueDate, priority, taskStatus, notes) {\n        this.project = project;\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n        this.taskStatus = taskStatus;\n        this.notes = notes;\n    }\n}\n\nfunction createTaskCard(task) {\n    const card = document.createElement('div');\n    card.classList.add('todo-card');\n    card.innerHTML = `\n        <h3>${task.title}</h3>\n        <p>${task.description}</p>\n        <p><strong>Due:</strong> ${task.dueDate}</p>\n        <p><strong>Priority:</strong> ${task.priority}</p>\n        <p><strong>Status:</strong> ${task.taskStatus}</p>\n        <button class=\"delete-btn\"><i class='bx bx-trash'></i></button>\n        <button class=\"edit-btn\"><i class='bx bx-edit'></i></button>\n    `;\n\n    // Add event listeners for the buttons\n    const editBtn = card.querySelector('.edit-btn');\n    editBtn.addEventListener('click', () => {\n        (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openEditModal)(task, card);\n    });\n\n    const deleteBtn = card.querySelector('.delete-btn');\n    deleteBtn.addEventListener('click', () => {\n        deleteTaskCard(task, card);\n    });\n\n    return card;\n}\n\nfunction updateTaskCard(task, card) {\n    // Update card content\n    card.querySelector('h3').textContent = task.title;\n    card.querySelector('p:nth-child(2)').textContent = task.description;\n    card.querySelector('p:nth-child(3)').textContent = `Due: ${task.dueDate}`;\n    card.querySelector('p:nth-child(4)').textContent = `Priority: ${task.priority}`;\n    card.querySelector('p:nth-child(5)').textContent = `Status: ${task.taskStatus}`;\n\n    // Remove old status class\n    card.classList.remove('not-started', 'in-progress', 'blocked', 'complete');\n\n    // Remove card from its current category\n    card.remove();\n\n    // Append card to the correct category and add the new status class\n    appendCardToCategory(task, card);\n\n    // Update the task in localStorage\n    let tasks = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadTasksFromLocalStorage)();\n    tasks = tasks.map(t => t.title === task.title ? task : t);\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\nfunction deleteTaskCard(task, card) {\n    // Remove the card from the DOM\n    card.remove();\n\n    // Remove the task from localStorage\n    let tasks = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadTasksFromLocalStorage)();\n    tasks = tasks.filter(t => t.title !== task.title); // or use a unique identifier if available\n    localStorage.setItem('tasks', JSON.stringify(tasks));\n}\n\n\nfunction appendCardToCategory(task, card) {\n    let categoryId;\n    \n    switch (task.taskStatus.toLowerCase()) {\n        case 'not-started':\n            card.classList.add('not-started');\n            categoryId = 'not-started';\n            break;\n        case 'in-progress':\n            card.classList.add('in-progress');\n            categoryId = 'working-on';\n            break;\n        case 'blocked':\n            card.classList.add('blocked');\n            categoryId = 'blocked';\n            break;\n        case 'complete':\n            card.classList.add('complete');\n            categoryId = 'complete';\n            break;\n        default:\n            console.error(`No category found for status: ${task.taskStatus}`);\n            return;\n    }\n\n    const categoryElement = document.getElementById(categoryId);\n\n    if (categoryElement) {\n        categoryElement.appendChild(card);\n    } else {\n        console.error(`No category found for status: ${task.taskStatus}`);\n    }\n}\n\n//# sourceURL=webpack://odin-todo/./src/tasks.js?");

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