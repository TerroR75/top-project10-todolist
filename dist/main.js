/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    font-family: 'Roboto', sans-serif;\r\n    text-decoration: none;\r\n\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* LIGHT THEME */\r\nbody {\r\n    --COLOR-primary: #FFFFFF;\r\n    --COLOR-utils: #e4e4e4;\r\n    --COLOR-secondary: #586F7C;\r\n    --COLOR-accent: #04E824;\r\n    --COLOR-text: rgb(0, 0, 0);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/* DARK THEME */\r\nbody.dark-theme {\r\n    --COLOR-primary: #312F2F !important;\r\n    --COLOR-utils: #3b3939 !important;\r\n    --COLOR-secondary: #5b6069 !important;\r\n    --COLOR-accent: #04E824 !important;\r\n    --COLOR-text: rgb(255, 255, 255);\r\n\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/*=== MAIN HEADER ===*/\r\n#main-header {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 15px;\r\n    background: var(--COLOR-utils);\r\n}\r\n\r\n#main-header h1 {\r\n    margin-left: auto;\r\n}\r\n\r\n#main-header .fa-bars {\r\n    margin-left: auto;\r\n    font-size: 32px;\r\n    visibility: hidden;\r\n}\r\n\r\n/*=== APP ===*/\r\n.app {\r\n    /* height: 100%; */\r\n    display: flex;\r\n}\r\n\r\n/* NAVBAR */\r\n.app .navbar {\r\n    background: var(--COLOR-secondary);\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    font-size: 20px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    z-index: 100;\r\n    opacity: 1;\r\n}\r\n\r\n.navbar .upper-part ul {\r\n    margin-left: 18px;\r\n    margin-top: 24px;\r\n\r\n}\r\n\r\n.navbar .upper-part ul li {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bottom-part ul {\r\n    list-style-type: none;\r\n    margin-left: 12px;\r\n    margin-top: 12px;\r\n}\r\n\r\n.bottom-part ul li {\r\n    padding: 8px 12px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n.bottom-part ul li.active-project {\r\n    border-right: 4px solid var(--COLOR-accent);\r\n}\r\n\r\n.bottom-part .create-project {\r\n    text-align: center;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n\r\n/* DISPLAY */\r\n.app .display {\r\n    background: var(--COLOR-primary);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: relative;\r\n}\r\n\r\n\r\n/* Project Display */\r\n.display .project-container {\r\n    width: 80%;\r\n    /* height: 200px; */\r\n    border: 1px solid black;\r\n    margin-top: 36px;\r\n    position: relative;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 24px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 24px;\r\n}\r\n\r\n.project-buttons {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n.project-buttons button {\r\n    height: 48px;\r\n    width: 48px;\r\n    font-size: 24px;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n.project-container .title {\r\n    text-align: center;\r\n}\r\n\r\n.project-container .todos {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.project-container .todos .project-todo {\r\n    border: 1px solid black;\r\n    padding: 12px 42px;\r\n    margin-top: -1px;\r\n    /* list-style-type: none; */\r\n    list-style-position: inside;\r\n    word-wrap: break-word;\r\n    position: relative;\r\n}\r\n\r\n.project-todo .fa-check {\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 10px;\r\n    font-size: 24px;\r\n    visibility: hidden;\r\n}\r\n\r\n.project-todo .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 10px;\r\n    visibility: hidden;\r\n    font-size: 24px;\r\n}\r\n\r\n.project-todo:hover i {\r\n    visibility: visible;\r\n    cursor: pointer;\r\n}\r\n\r\n.todos .project-todo:nth-child(2n) {\r\n    background: #e7e7e7;\r\n}\r\n\r\n.todo-completed {\r\n    text-decoration: line-through;\r\n    background: rgba(0, 255, 0, 0.2) !important;\r\n}\r\n\r\n/* Project utils (buttons) */\r\n.project-utils-btns {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    right: 24px;\r\n    top: 50%;\r\n}\r\n\r\n.project-utils-btns button {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*=== FOOTER ===*/\r\n#main-footer {\r\n    background: var(--COLOR-utils);\r\n    height: 50px;\r\n    padding: 12px 24px;\r\n    display: flex;\r\n    gap: 6px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: auto;\r\n}\r\n\r\n#main-footer .fa-github {\r\n    font-size: 22px;\r\n    transition: transform 300ms ease-in-out;\r\n}\r\n\r\n#main-footer .fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n\r\n}\r\n\r\n/* MODALS */\r\n\r\n/* New Project Modal */\r\n.new-project-modal {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.4);\r\n    z-index: 100;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    visibility: hidden;\r\n}\r\n\r\n.new-project-modal.modal-visible {\r\n    visibility: visible;\r\n}\r\n\r\n.new-project-modal .modal {\r\n    height: 500px;\r\n    width: 400px;\r\n    background: var(--COLOR-secondary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 24px;\r\n    color: var(--COLOR-primary);\r\n\r\n\r\n    position: relative;\r\n}\r\n\r\n.modal input {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.modal .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 12px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal button {\r\n    margin-top: auto;\r\n}\r\n\r\n\r\n\r\n/* UTILITIES */\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*=== MEDIA QUERIES ===*/\r\n/* Small screen */\r\n@media only screen and (max-width: 800px) {\r\n\r\n    /*=== HEADER ===*/\r\n    #main-header .fa-bars {\r\n        visibility: visible;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*=== APP ===*/\r\n    .app {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .app .navbar {\r\n        position: absolute;\r\n        left: 0;\r\n        right: 0;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 100px;\r\n        /* opacity: 0.9; */\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    font-family: 'Roboto', sans-serif;\r\n    text-decoration: none;\r\n\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* LIGHT THEME */\r\nbody {\r\n    --COLOR-primary: #FFFFFF;\r\n    --COLOR-utils: #e4e4e4;\r\n    --COLOR-secondary: #586F7C;\r\n    --COLOR-accent: #04E824;\r\n    --COLOR-text: rgb(0, 0, 0);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/* DARK THEME */\r\nbody.dark-theme {\r\n    --COLOR-primary: #312F2F !important;\r\n    --COLOR-utils: #3b3939 !important;\r\n    --COLOR-secondary: #5b6069 !important;\r\n    --COLOR-accent: #04E824 !important;\r\n    --COLOR-text: rgb(255, 255, 255);\r\n\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/*=== MAIN HEADER ===*/\r\n#main-header {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 15px;\r\n    background: var(--COLOR-utils);\r\n}\r\n\r\n#main-header h1 {\r\n    margin-left: auto;\r\n}\r\n\r\n#main-header .fa-bars {\r\n    margin-left: auto;\r\n    font-size: 32px;\r\n    visibility: hidden;\r\n}\r\n\r\n/*=== APP ===*/\r\n.app {\r\n    /* height: 100%; */\r\n    display: flex;\r\n}\r\n\r\n/* NAVBAR */\r\n.app .navbar {\r\n    background: var(--COLOR-secondary);\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    font-size: 20px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    z-index: 100;\r\n    opacity: 1;\r\n}\r\n\r\n.navbar .upper-part ul {\r\n    margin-left: 18px;\r\n    margin-top: 24px;\r\n\r\n}\r\n\r\n.navbar .upper-part ul li {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bottom-part ul {\r\n    list-style-type: none;\r\n    margin-left: 12px;\r\n    margin-top: 12px;\r\n}\r\n\r\n.bottom-part ul li {\r\n    padding: 8px 12px;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n.bottom-part ul li.active-project {\r\n    border-right: 4px solid var(--COLOR-accent);\r\n}\r\n\r\n.bottom-part .create-project {\r\n    text-align: center;\r\n    cursor: pointer;\r\n    user-select: none;\r\n}\r\n\r\n\r\n/* DISPLAY */\r\n.app .display {\r\n    background: var(--COLOR-primary);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: relative;\r\n}\r\n\r\n\r\n/* Project Display */\r\n.display .project-container {\r\n    width: 80%;\r\n    /* height: 200px; */\r\n    border: 1px solid black;\r\n    margin-top: 36px;\r\n    position: relative;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 24px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 24px;\r\n}\r\n\r\n.project-buttons {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n.project-buttons button {\r\n    height: 48px;\r\n    width: 48px;\r\n    font-size: 24px;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n.project-container .title {\r\n    text-align: center;\r\n}\r\n\r\n.project-container .todos {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.project-container .todos .project-todo {\r\n    border: 1px solid black;\r\n    padding: 12px 42px;\r\n    margin-top: -1px;\r\n    /* list-style-type: none; */\r\n    list-style-position: inside;\r\n    word-wrap: break-word;\r\n    position: relative;\r\n}\r\n\r\n.project-todo .fa-check {\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 10px;\r\n    font-size: 24px;\r\n    visibility: hidden;\r\n}\r\n\r\n.project-todo .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 10px;\r\n    visibility: hidden;\r\n    font-size: 24px;\r\n}\r\n\r\n.project-todo:hover i {\r\n    visibility: visible;\r\n    cursor: pointer;\r\n}\r\n\r\n.todos .project-todo:nth-child(2n) {\r\n    background: #e7e7e7;\r\n}\r\n\r\n.todo-completed {\r\n    text-decoration: line-through;\r\n    background: rgba(0, 255, 0, 0.2) !important;\r\n}\r\n\r\n/* Project utils (buttons) */\r\n.project-utils-btns {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    right: 24px;\r\n    top: 50%;\r\n}\r\n\r\n.project-utils-btns button {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*=== FOOTER ===*/\r\n#main-footer {\r\n    background: var(--COLOR-utils);\r\n    height: 50px;\r\n    padding: 12px 24px;\r\n    display: flex;\r\n    gap: 6px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: auto;\r\n}\r\n\r\n#main-footer .fa-github {\r\n    font-size: 22px;\r\n    transition: transform 300ms ease-in-out;\r\n}\r\n\r\n#main-footer .fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n\r\n}\r\n\r\n/* MODALS */\r\n\r\n/* New Project Modal */\r\n.new-project-modal {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.4);\r\n    z-index: 100;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    visibility: hidden;\r\n}\r\n\r\n.new-project-modal.modal-visible {\r\n    visibility: visible;\r\n}\r\n\r\n.new-project-modal .modal {\r\n    height: 500px;\r\n    width: 400px;\r\n    background: var(--COLOR-secondary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 24px;\r\n    color: var(--COLOR-primary);\r\n\r\n\r\n    position: relative;\r\n}\r\n\r\n.modal input {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.modal .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 12px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal button {\r\n    margin-top: auto;\r\n}\r\n\r\n\r\n\r\n/* UTILITIES */\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*=== MEDIA QUERIES ===*/\r\n/* Small screen */\r\n@media only screen and (max-width: 800px) {\r\n\r\n    /*=== HEADER ===*/\r\n    #main-header .fa-bars {\r\n        visibility: visible;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*=== APP ===*/\r\n    .app {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .app .navbar {\r\n        position: absolute;\r\n        left: 0;\r\n        right: 0;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 100px;\r\n        /* opacity: 0.9; */\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/classes/project.js":
/*!********************************!*\
  !*** ./src/classes/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
class Project {

    constructor(title, dueDate, description) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.todosArray = [];
    }

    addTodo(todo) {
        this.todosArray.push(todo);
    }

    deleteTodo(index) {
        this.todosArray.splice(index, 1);
    }
}

/***/ }),

/***/ "./src/classes/todo.js":
/*!*****************************!*\
  !*** ./src/classes/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {

    constructor(text, completed = false) {
        this.text = text;
        this.completed = completed;
    }

    get completion() {
        return this.completed;
    }
}

/***/ }),

/***/ "./src/domrendering/home.js":
/*!**********************************!*\
  !*** ./src/domrendering/home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHome": () => (/* binding */ renderHome)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");



function renderHome(project) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplay.innerHTML = '';



    // Elements creation
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    const descrDiv = document.createElement('div');
    descrDiv.classList.add('description');
    const todosList = document.createElement('div');
    todosList.classList.add('todos');

    const titleHOne = document.createElement('h1');
    titleHOne.innerText = project.title;
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    dateDiv.innerText = project.dueDate;
    const descrSpan = document.createElement('span');
    descrSpan.innerText = project.description;
    const orderedList = document.createElement('ol');

    // Elements appending
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplay.appendChild(projectContainer);

    projectContainer.appendChild(titleDiv);
    projectContainer.appendChild(descrDiv);
    projectContainer.appendChild(todosList);

    titleDiv.appendChild(titleHOne);
    titleDiv.appendChild(dateDiv);
    descrDiv.appendChild(descrSpan);
    todosList.appendChild(orderedList);

    console.log('renderHome (home.js)');
    renderProjectTodosList(project);
}

function renderProjectTodosList(project) {
    let todosOl = document.querySelector('.todos ol');
    todosOl.innerHTML = '';

    for (let i = 0; i < project.todosArray.length; i++) {
        // List element itself creation
        let newLi = document.createElement('li');
        newLi.classList.add('project-todo');
        if (project.todosArray[i].completed === true) {
            newLi.classList.add('todo-completed');
        }
        newLi.innerText = project.todosArray[i].text;
        todosOl.appendChild(newLi);

        // Buttons for list element creation
        const iconCheckBtn = document.createElement('i');
        iconCheckBtn.classList.add('fa-solid', 'fa-check');
        iconCheckBtn.dataset.id = i;

        const iconDeleteBtn = document.createElement('i');
        iconDeleteBtn.classList.add('fa-solid', 'fa-xmark');
        iconDeleteBtn.dataset.id = i;

        newLi.appendChild(iconCheckBtn);
        newLi.appendChild(iconDeleteBtn);

        iconCheckBtn.addEventListener('click', () => {
            newLi.classList.toggle('todo-completed');
            if (project.todosArray[parseInt(iconCheckBtn.dataset.id)].completed === false) {
                project.todosArray[parseInt(iconCheckBtn.dataset.id)].completed = true;
            }
            else {
                project.todosArray[parseInt(iconCheckBtn.dataset.id)].completed = false;
            }

        });

        iconDeleteBtn.addEventListener('click', () => {
            project.todosArray.splice(parseInt(iconDeleteBtn.dataset.id), 1);
            renderProjectTodosList(project);
        });

    }
}

/***/ }),

/***/ "./src/domrendering/projectsList.js":
/*!******************************************!*\
  !*** ./src/domrendering/projectsList.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshProjectsList": () => (/* binding */ refreshProjectsList)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");


function refreshProjectsList() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList.innerHTML = '';

    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__.userProjects.length; i++) {
        const newListElement = document.createElement('li');
        newListElement.dataset.id = i;

        newListElement.innerText = _index_js__WEBPACK_IMPORTED_MODULE_0__.userProjects[i].title;

        _index_js__WEBPACK_IMPORTED_MODULE_0__.projectsList.appendChild(newListElement);
    }

    addEventListeners();

}

function addEventListeners() {
    const projectList = document.querySelectorAll('.bottom-part li');


    projectList.forEach(project => {
        project.addEventListener('click', () => {
            if (!project.classList.contains('active-project')) {
                for (let proj of projectList) {
                    proj.classList.remove('active-project');
                }
                (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.setCurrentProject)(parseInt(project.dataset.id));
                project.classList.add('active-project');
            }
        });
    });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "currentProject": () => (/* binding */ currentProject),
/* harmony export */   "modalDateInput": () => (/* binding */ modalDateInput),
/* harmony export */   "modalDescrInput": () => (/* binding */ modalDescrInput),
/* harmony export */   "modalOpenCloseBtns": () => (/* binding */ modalOpenCloseBtns),
/* harmony export */   "modalSubmit": () => (/* binding */ modalSubmit),
/* harmony export */   "modalTitleInput": () => (/* binding */ modalTitleInput),
/* harmony export */   "newProjectModal": () => (/* binding */ newProjectModal),
/* harmony export */   "projectDisplay": () => (/* binding */ projectDisplay),
/* harmony export */   "projectsList": () => (/* binding */ projectsList),
/* harmony export */   "setCurrentProject": () => (/* binding */ setCurrentProject),
/* harmony export */   "userProjects": () => (/* binding */ userProjects)
/* harmony export */ });
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");
/* harmony import */ var _classes_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/project.js */ "./src/classes/project.js");
/* harmony import */ var _classes_todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/todo.js */ "./src/classes/todo.js");
/* harmony import */ var _domrendering_projectsList_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domrendering/projectsList.js */ "./src/domrendering/projectsList.js");
/* harmony import */ var _domrendering_home_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domrendering/home.js */ "./src/domrendering/home.js");
/* harmony import */ var _modals_newProjectModal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modals/newProjectModal.js */ "./src/modals/newProjectModal.js");







// Display exports
const projectsList = document.querySelector('.bottom-part ul');
const projectDisplay = document.querySelector('.display');

// User Related Exports
const userProjects = [];
let currentProject = null;

// New Project Modal
const newProjectModal = document.querySelector('.new-project-modal');
const modalTitleInput = document.querySelector('.modal #title');
const modalDateInput = document.querySelector('.modal #date');
const modalDescrInput = document.querySelector('.modal #descr');
const modalOpenCloseBtns = document.querySelectorAll('.modal-openclose');
const modalSubmit = document.querySelector('.modal button');


// TESTING AREA
const newProject = new _classes_project_js__WEBPACK_IMPORTED_MODULE_1__.Project('FirstProj', '10.10.2022', 'Some description');
const newProject2 = new _classes_project_js__WEBPACK_IMPORTED_MODULE_1__.Project('SecondProj', '10.10.2022', 'Some description');
userProjects.push(newProject);
userProjects.push(newProject2);

currentProject = userProjects[1];

const newTodo = new _classes_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo('some random todo text');
const secondTodo = new _classes_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo('second todo', true);
// newTodo.completed = true;
newProject.addTodo(newTodo);
newProject.addTodo(secondTodo);

const Todo1 = new _classes_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo('random todo');
const Todo2 = new _classes_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo('second todo', true);
newProject2.addTodo(Todo1);
newProject2.addTodo(Todo2);

const jsonStringify = JSON.stringify(newProject);
// console.log(jsonStringify);

(0,_modals_newProjectModal_js__WEBPACK_IMPORTED_MODULE_5__.newProjectModalInit)();
(0,_domrendering_projectsList_js__WEBPACK_IMPORTED_MODULE_3__.refreshProjectsList)();



function setCurrentProject(index) {
    currentProject = userProjects[index];
    console.log('setting current project (index.js)');

    (0,_domrendering_home_js__WEBPACK_IMPORTED_MODULE_4__.renderHome)(currentProject);
}


/***/ }),

/***/ "./src/modals/newProjectModal.js":
/*!***************************************!*\
  !*** ./src/modals/newProjectModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newProjectModalInit": () => (/* binding */ newProjectModalInit)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ "./src/index.js");
/* harmony import */ var _classes_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/project.js */ "./src/classes/project.js");
/* harmony import */ var _domrendering_projectsList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domrendering/projectsList.js */ "./src/domrendering/projectsList.js");





function newProjectModalInit() {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.modalOpenCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.newProjectModal.classList.toggle('modal-visible');
        });
    });

    _index_js__WEBPACK_IMPORTED_MODULE_0__.modalSubmit.addEventListener('click', () => {
        if (_index_js__WEBPACK_IMPORTED_MODULE_0__.modalTitleInput.value !== '' && _index_js__WEBPACK_IMPORTED_MODULE_0__.modalDateInput.value !== '' && _index_js__WEBPACK_IMPORTED_MODULE_0__.modalDescrInput.value !== '') {
            _index_js__WEBPACK_IMPORTED_MODULE_0__.userProjects.push(new _classes_project_js__WEBPACK_IMPORTED_MODULE_1__.Project(_index_js__WEBPACK_IMPORTED_MODULE_0__.modalTitleInput.value, _index_js__WEBPACK_IMPORTED_MODULE_0__.modalDateInput.value, _index_js__WEBPACK_IMPORTED_MODULE_0__.modalDescrInput.value));

            _index_js__WEBPACK_IMPORTED_MODULE_0__.modalTitleInput.value = '';
            _index_js__WEBPACK_IMPORTED_MODULE_0__.modalDateInput.value = '';
            _index_js__WEBPACK_IMPORTED_MODULE_0__.modalDescrInput.value = '';

            _index_js__WEBPACK_IMPORTED_MODULE_0__.newProjectModal.classList.toggle('modal-visible');
            (0,_domrendering_projectsList_js__WEBPACK_IMPORTED_MODULE_2__.refreshProjectsList)();
        }
    })
}




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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxPQUFPLG1GQUFtRixVQUFVLFdBQVcsWUFBWSxjQUFjLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxL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OztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vc3JjL2Nzcy9tYWluLmNzcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9jc3MvbWFpbi5jc3M/MmM5ZiIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9zcmMvY2xhc3Nlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9zcmMvY2xhc3Nlcy90b2RvLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9zcmMvZG9tcmVuZGVyaW5nL2hvbWUuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9kb21yZW5kZXJpbmcvcHJvamVjdHNMaXN0LmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9tb2RhbHMvbmV3UHJvamVjdE1vZGFsLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTElHSFQgVEhFTUUgKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgLS1DT0xPUi1wcmltYXJ5OiAjRkZGRkZGO1xcclxcbiAgICAtLUNPTE9SLXV0aWxzOiAjZTRlNGU0O1xcclxcbiAgICAtLUNPTE9SLXNlY29uZGFyeTogIzU4NkY3QztcXHJcXG4gICAgLS1DT0xPUi1hY2NlbnQ6ICMwNEU4MjQ7XFxyXFxuICAgIC0tQ09MT1ItdGV4dDogcmdiKDAsIDAsIDApO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi8qIERBUksgVEhFTUUgKi9cXHJcXG5ib2R5LmRhcmstdGhlbWUge1xcclxcbiAgICAtLUNPTE9SLXByaW1hcnk6ICMzMTJGMkYgIWltcG9ydGFudDtcXHJcXG4gICAgLS1DT0xPUi11dGlsczogIzNiMzkzOSAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLXNlY29uZGFyeTogIzViNjA2OSAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLWFjY2VudDogIzA0RTgyNCAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLXRleHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLUNPTE9SLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKj09PSBNQUlOIEhFQURFUiA9PT0qL1xcclxcbiNtYWluLWhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItdXRpbHMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI21haW4taGVhZGVyIC5mYS1iYXJzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKj09PSBBUFAgPT09Ki9cXHJcXG4uYXBwIHtcXHJcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOQVZCQVIgKi9cXHJcXG4uYXBwIC5uYXZiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi1zZWNvbmRhcnkpO1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLnVwcGVyLXBhcnQgdWwge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMThweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAudXBwZXItcGFydCB1bCBsaSB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXBhcnQgdWwgbGkuYWN0aXZlLXByb2plY3Qge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB2YXIoLS1DT0xPUi1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXBhcnQgLmNyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBESVNQTEFZICovXFxyXFxuLmFwcCAuZGlzcGxheSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXByaW1hcnkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUHJvamVjdCBEaXNwbGF5ICovXFxyXFxuLmRpc3BsYXkgLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICB3aWR0aDogNDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciAudGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciAudG9kb3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50b2RvcyAucHJvamVjdC10b2RvIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggNDJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lOyAqL1xcclxcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvIC5mYS1jaGVjayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTJweDtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdG9kbyAuZmEteG1hcmsge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMnB4O1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvOmhvdmVyIGkge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvcyAucHJvamVjdC10b2RvOm50aC1jaGlsZCgybikge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb21wbGV0ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdCB1dGlscyAoYnV0dG9ucykgKi9cXHJcXG4ucHJvamVjdC11dGlscy1idG5zIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIHJpZ2h0OiAyNHB4O1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdXRpbHMtYnRucyBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qPT09IEZPT1RFUiA9PT0qL1xcclxcbiNtYWluLWZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXV0aWxzKTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNnB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tZm9vdGVyIC5mYS1naXRodWIge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tZm9vdGVyIC5mYS1naXRodWI6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIE1PREFMUyAqL1xcclxcblxcclxcbi8qIE5ldyBQcm9qZWN0IE1vZGFsICovXFxyXFxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LW1vZGFsLm1vZGFsLXZpc2libGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwgLm1vZGFsIHtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi1zZWNvbmRhcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItcHJpbWFyeSk7XFxyXFxuXFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIC5mYS14bWFyayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEycHg7XFxyXFxuICAgIHRvcDogMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBVVElMSVRJRVMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKj09PSBNRURJQSBRVUVSSUVTID09PSovXFxyXFxuLyogU21hbGwgc2NyZWVuICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcblxcclxcbiAgICAvKj09PSBIRUFERVIgPT09Ki9cXHJcXG4gICAgI21haW4taGVhZGVyIC5mYS1iYXJzIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyo9PT0gQVBQID09PSovXFxyXFxuICAgIC5hcHAge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXBwIC5uYXZiYXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAvKiBvcGFjaXR5OiAwLjk7ICovXFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTOztJQUVULGlDQUFpQztJQUNqQyxxQkFBcUI7O0FBRXpCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QiwwQkFBMEI7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QUNmLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLG9DQUFvQzs7QUFFeEM7O0FBRUEsV0FBVzs7QUFFWCxzQkFBc0I7QUFDdEI7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsWUFBWTs7SUFFWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsMkJBQTJCOzs7SUFHM0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7O0FBSUEsY0FBYztBQUNkO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQSx3QkFBd0I7QUFDeEIsaUJBQWlCO0FBQ2pCOztJQUVJLGlCQUFpQjtJQUNqQjtRQUNJLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBLGNBQWM7SUFDZDtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsUUFBUTtRQUNSLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLGtCQUFrQjtJQUN0QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4qIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTElHSFQgVEhFTUUgKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgLS1DT0xPUi1wcmltYXJ5OiAjRkZGRkZGO1xcclxcbiAgICAtLUNPTE9SLXV0aWxzOiAjZTRlNGU0O1xcclxcbiAgICAtLUNPTE9SLXNlY29uZGFyeTogIzU4NkY3QztcXHJcXG4gICAgLS1DT0xPUi1hY2NlbnQ6ICMwNEU4MjQ7XFxyXFxuICAgIC0tQ09MT1ItdGV4dDogcmdiKDAsIDAsIDApO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi8qIERBUksgVEhFTUUgKi9cXHJcXG5ib2R5LmRhcmstdGhlbWUge1xcclxcbiAgICAtLUNPTE9SLXByaW1hcnk6ICMzMTJGMkYgIWltcG9ydGFudDtcXHJcXG4gICAgLS1DT0xPUi11dGlsczogIzNiMzkzOSAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLXNlY29uZGFyeTogIzViNjA2OSAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLWFjY2VudDogIzA0RTgyNCAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLXRleHQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLUNPTE9SLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKj09PSBNQUlOIEhFQURFUiA9PT0qL1xcclxcbiNtYWluLWhlYWRlciB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTVweDtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItdXRpbHMpO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1oZWFkZXIgaDEge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI21haW4taGVhZGVyIC5mYS1iYXJzIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIGZvbnQtc2l6ZTogMzJweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4vKj09PSBBUFAgPT09Ki9cXHJcXG4uYXBwIHtcXHJcXG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBOQVZCQVIgKi9cXHJcXG4uYXBwIC5uYXZiYXIge1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi1zZWNvbmRhcnkpO1xcclxcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1MHB4O1xcclxcbiAgICB6LWluZGV4OiAxMDA7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLnVwcGVyLXBhcnQgdWwge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMThweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjRweDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAudXBwZXItcGFydCB1bCBsaSB7XFxyXFxuICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEycHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCB1bCBsaSB7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXBhcnQgdWwgbGkuYWN0aXZlLXByb2plY3Qge1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB2YXIoLS1DT0xPUi1hY2NlbnQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXBhcnQgLmNyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBESVNQTEFZICovXFxyXFxuLmFwcCAuZGlzcGxheSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXByaW1hcnkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUHJvamVjdCBEaXNwbGF5ICovXFxyXFxuLmRpc3BsYXkgLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICB3aWR0aDogNDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciAudGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciAudG9kb3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50b2RvcyAucHJvamVjdC10b2RvIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggNDJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lOyAqL1xcclxcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvIC5mYS1jaGVjayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTJweDtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdG9kbyAuZmEteG1hcmsge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMnB4O1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvOmhvdmVyIGkge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvcyAucHJvamVjdC10b2RvOm50aC1jaGlsZCgybikge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb21wbGV0ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdCB1dGlscyAoYnV0dG9ucykgKi9cXHJcXG4ucHJvamVjdC11dGlscy1idG5zIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIHJpZ2h0OiAyNHB4O1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdXRpbHMtYnRucyBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qPT09IEZPT1RFUiA9PT0qL1xcclxcbiNtYWluLWZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXV0aWxzKTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNnB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tZm9vdGVyIC5mYS1naXRodWIge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tZm9vdGVyIC5mYS1naXRodWI6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIE1PREFMUyAqL1xcclxcblxcclxcbi8qIE5ldyBQcm9qZWN0IE1vZGFsICovXFxyXFxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LW1vZGFsLm1vZGFsLXZpc2libGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwgLm1vZGFsIHtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi1zZWNvbmRhcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItcHJpbWFyeSk7XFxyXFxuXFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIC5mYS14bWFyayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEycHg7XFxyXFxuICAgIHRvcDogMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBVVElMSVRJRVMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKj09PSBNRURJQSBRVUVSSUVTID09PSovXFxyXFxuLyogU21hbGwgc2NyZWVuICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcblxcclxcbiAgICAvKj09PSBIRUFERVIgPT09Ki9cXHJcXG4gICAgI21haW4taGVhZGVyIC5mYS1iYXJzIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyo9PT0gQVBQID09PSovXFxyXFxuICAgIC5hcHAge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXBwIC5uYXZiYXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAvKiBvcGFjaXR5OiAwLjk7ICovXFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnRvZG9zQXJyYXkgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb2RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zQXJyYXkucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVUb2RvKGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy50b2Rvc0FycmF5LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVG9kbyB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dCwgY29tcGxldGVkID0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjb21wbGV0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IHByb2plY3REaXNwbGF5IH0gZnJvbSAnLi4vaW5kZXguanMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIb21lKHByb2plY3QpIHtcclxuICAgIHByb2plY3REaXNwbGF5LmlubmVySFRNTCA9ICcnO1xyXG5cclxuXHJcblxyXG4gICAgLy8gRWxlbWVudHMgY3JlYXRpb25cclxuICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb250YWluZXInKTtcclxuICAgIGNvbnN0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xyXG4gICAgY29uc3QgZGVzY3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcbiAgICBjb25zdCB0b2Rvc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvZG9zTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvcycpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlSE9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICB0aXRsZUhPbmUuaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcclxuICAgIGNvbnN0IGRhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRhdGVEaXYuY2xhc3NMaXN0LmFkZCgnZGF0ZScpO1xyXG4gICAgZGF0ZURpdi5pbm5lclRleHQgPSBwcm9qZWN0LmR1ZURhdGU7XHJcbiAgICBjb25zdCBkZXNjclNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBkZXNjclNwYW4uaW5uZXJUZXh0ID0gcHJvamVjdC5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IG9yZGVyZWRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb2wnKTtcclxuXHJcbiAgICAvLyBFbGVtZW50cyBhcHBlbmRpbmdcclxuICAgIHByb2plY3REaXNwbGF5LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xyXG5cclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVEaXYpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjckRpdik7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9zTGlzdCk7XHJcblxyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVIT25lKTtcclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKGRhdGVEaXYpO1xyXG4gICAgZGVzY3JEaXYuYXBwZW5kQ2hpbGQoZGVzY3JTcGFuKTtcclxuICAgIHRvZG9zTGlzdC5hcHBlbmRDaGlsZChvcmRlcmVkTGlzdCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ3JlbmRlckhvbWUgKGhvbWUuanMpJyk7XHJcbiAgICByZW5kZXJQcm9qZWN0VG9kb3NMaXN0KHByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0VG9kb3NMaXN0KHByb2plY3QpIHtcclxuICAgIGxldCB0b2Rvc09sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9zIG9sJyk7XHJcbiAgICB0b2Rvc09sLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdC50b2Rvc0FycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gTGlzdCBlbGVtZW50IGl0c2VsZiBjcmVhdGlvblxyXG4gICAgICAgIGxldCBuZXdMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgbmV3TGkuY2xhc3NMaXN0LmFkZCgncHJvamVjdC10b2RvJyk7XHJcbiAgICAgICAgaWYgKHByb2plY3QudG9kb3NBcnJheVtpXS5jb21wbGV0ZWQgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgbmV3TGkuY2xhc3NMaXN0LmFkZCgndG9kby1jb21wbGV0ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbmV3TGkuaW5uZXJUZXh0ID0gcHJvamVjdC50b2Rvc0FycmF5W2ldLnRleHQ7XHJcbiAgICAgICAgdG9kb3NPbC5hcHBlbmRDaGlsZChuZXdMaSk7XHJcblxyXG4gICAgICAgIC8vIEJ1dHRvbnMgZm9yIGxpc3QgZWxlbWVudCBjcmVhdGlvblxyXG4gICAgICAgIGNvbnN0IGljb25DaGVja0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBpY29uQ2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnLCAnZmEtY2hlY2snKTtcclxuICAgICAgICBpY29uQ2hlY2tCdG4uZGF0YXNldC5pZCA9IGk7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb25EZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgaWNvbkRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS14bWFyaycpO1xyXG4gICAgICAgIGljb25EZWxldGVCdG4uZGF0YXNldC5pZCA9IGk7XHJcblxyXG4gICAgICAgIG5ld0xpLmFwcGVuZENoaWxkKGljb25DaGVja0J0bik7XHJcbiAgICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQoaWNvbkRlbGV0ZUJ0bik7XHJcblxyXG4gICAgICAgIGljb25DaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbmV3TGkuY2xhc3NMaXN0LnRvZ2dsZSgndG9kby1jb21wbGV0ZWQnKTtcclxuICAgICAgICAgICAgaWYgKHByb2plY3QudG9kb3NBcnJheVtwYXJzZUludChpY29uQ2hlY2tCdG4uZGF0YXNldC5pZCldLmNvbXBsZXRlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3NBcnJheVtwYXJzZUludChpY29uQ2hlY2tCdG4uZGF0YXNldC5pZCldLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LnRvZG9zQXJyYXlbcGFyc2VJbnQoaWNvbkNoZWNrQnRuLmRhdGFzZXQuaWQpXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWNvbkRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgcHJvamVjdC50b2Rvc0FycmF5LnNwbGljZShwYXJzZUludChpY29uRGVsZXRlQnRuLmRhdGFzZXQuaWQpLCAxKTtcclxuICAgICAgICAgICAgcmVuZGVyUHJvamVjdFRvZG9zTGlzdChwcm9qZWN0KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBwcm9qZWN0c0xpc3QsIHVzZXJQcm9qZWN0cywgc2V0Q3VycmVudFByb2plY3QgfSBmcm9tICcuLi9pbmRleC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzTGlzdCgpIHtcclxuICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBuZXdMaXN0RWxlbWVudC5kYXRhc2V0LmlkID0gaTtcclxuXHJcbiAgICAgICAgbmV3TGlzdEVsZW1lbnQuaW5uZXJUZXh0ID0gdXNlclByb2plY3RzW2ldLnRpdGxlO1xyXG5cclxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3TGlzdEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRFdmVudExpc3RlbmVycygpIHtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvdHRvbS1wYXJ0IGxpJyk7XHJcblxyXG5cclxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdCA9PiB7XHJcbiAgICAgICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFwcm9qZWN0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlLXByb2plY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcHJvaiBvZiBwcm9qZWN0TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2ouY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLXByb2plY3QnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldEN1cnJlbnRQcm9qZWN0KHBhcnNlSW50KHByb2plY3QuZGF0YXNldC5pZCkpO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtcHJvamVjdCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCAnLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9jbGFzc2VzL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi9jbGFzc2VzL3RvZG8uanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoUHJvamVjdHNMaXN0IH0gZnJvbSAnLi9kb21yZW5kZXJpbmcvcHJvamVjdHNMaXN0LmpzJztcclxuaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gJy4vZG9tcmVuZGVyaW5nL2hvbWUuanMnO1xyXG5pbXBvcnQgeyBuZXdQcm9qZWN0TW9kYWxJbml0IH0gZnJvbSAnLi9tb2RhbHMvbmV3UHJvamVjdE1vZGFsLmpzJztcclxuXHJcbi8vIERpc3BsYXkgZXhwb3J0c1xyXG5leHBvcnQgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvdHRvbS1wYXJ0IHVsJyk7XHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5Jyk7XHJcblxyXG4vLyBVc2VyIFJlbGF0ZWQgRXhwb3J0c1xyXG5leHBvcnQgY29uc3QgdXNlclByb2plY3RzID0gW107XHJcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xyXG5cclxuLy8gTmV3IFByb2plY3QgTW9kYWxcclxuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1tb2RhbCcpO1xyXG5leHBvcnQgY29uc3QgbW9kYWxUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsICN0aXRsZScpO1xyXG5leHBvcnQgY29uc3QgbW9kYWxEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwgI2RhdGUnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsRGVzY3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCAjZGVzY3InKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsT3BlbkNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1vcGVuY2xvc2UnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsIGJ1dHRvbicpO1xyXG5cclxuXHJcbi8vIFRFU1RJTkcgQVJFQVxyXG5jb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0ZpcnN0UHJvaicsICcxMC4xMC4yMDIyJywgJ1NvbWUgZGVzY3JpcHRpb24nKTtcclxuY29uc3QgbmV3UHJvamVjdDIgPSBuZXcgUHJvamVjdCgnU2Vjb25kUHJvaicsICcxMC4xMC4yMDIyJywgJ1NvbWUgZGVzY3JpcHRpb24nKTtcclxudXNlclByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbnVzZXJQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QyKTtcclxuXHJcbmN1cnJlbnRQcm9qZWN0ID0gdXNlclByb2plY3RzWzFdO1xyXG5cclxuY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKCdzb21lIHJhbmRvbSB0b2RvIHRleHQnKTtcclxuY29uc3Qgc2Vjb25kVG9kbyA9IG5ldyBUb2RvKCdzZWNvbmQgdG9kbycsIHRydWUpO1xyXG4vLyBuZXdUb2RvLmNvbXBsZXRlZCA9IHRydWU7XHJcbm5ld1Byb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcclxubmV3UHJvamVjdC5hZGRUb2RvKHNlY29uZFRvZG8pO1xyXG5cclxuY29uc3QgVG9kbzEgPSBuZXcgVG9kbygncmFuZG9tIHRvZG8nKTtcclxuY29uc3QgVG9kbzIgPSBuZXcgVG9kbygnc2Vjb25kIHRvZG8nLCB0cnVlKTtcclxubmV3UHJvamVjdDIuYWRkVG9kbyhUb2RvMSk7XHJcbm5ld1Byb2plY3QyLmFkZFRvZG8oVG9kbzIpO1xyXG5cclxuY29uc3QganNvblN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpO1xyXG4vLyBjb25zb2xlLmxvZyhqc29uU3RyaW5naWZ5KTtcclxuXHJcbm5ld1Byb2plY3RNb2RhbEluaXQoKTtcclxucmVmcmVzaFByb2plY3RzTGlzdCgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFByb2plY3QoaW5kZXgpIHtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gdXNlclByb2plY3RzW2luZGV4XTtcclxuICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nIGN1cnJlbnQgcHJvamVjdCAoaW5kZXguanMpJyk7XHJcblxyXG4gICAgcmVuZGVySG9tZShjdXJyZW50UHJvamVjdCk7XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIG5ld1Byb2plY3RNb2RhbCxcclxuICAgIG1vZGFsVGl0bGVJbnB1dCxcclxuICAgIG1vZGFsRGF0ZUlucHV0LFxyXG4gICAgbW9kYWxEZXNjcklucHV0LFxyXG4gICAgbW9kYWxPcGVuQ2xvc2VCdG5zLFxyXG4gICAgbW9kYWxTdWJtaXQsXHJcbiAgICB1c2VyUHJvamVjdHMsXHJcbn0gZnJvbSAnLi4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaFByb2plY3RzTGlzdCB9IGZyb20gJy4uL2RvbXJlbmRlcmluZy9wcm9qZWN0c0xpc3QuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdQcm9qZWN0TW9kYWxJbml0KCkge1xyXG4gICAgbW9kYWxPcGVuQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC12aXNpYmxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAobW9kYWxUaXRsZUlucHV0LnZhbHVlICE9PSAnJyAmJiBtb2RhbERhdGVJbnB1dC52YWx1ZSAhPT0gJycgJiYgbW9kYWxEZXNjcklucHV0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICB1c2VyUHJvamVjdHMucHVzaChuZXcgUHJvamVjdChtb2RhbFRpdGxlSW5wdXQudmFsdWUsIG1vZGFsRGF0ZUlucHV0LnZhbHVlLCBtb2RhbERlc2NySW5wdXQudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsVGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBtb2RhbERhdGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBtb2RhbERlc2NySW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIHJlZnJlc2hQcm9qZWN0c0xpc3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=