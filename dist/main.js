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
/* harmony export */   "saveData": () => (/* binding */ saveData),
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
let userProjects = [];
let currentProject = null;

// New Project Modal
const newProjectModal = document.querySelector('.new-project-modal');
const modalTitleInput = document.querySelector('.modal #title');
const modalDateInput = document.querySelector('.modal #date');
const modalDescrInput = document.querySelector('.modal #descr');
const modalOpenCloseBtns = document.querySelectorAll('.modal-openclose');
const modalSubmit = document.querySelector('.modal button');

loadData();

// TESTING AREA
// const newProject = new Project('FirstProj', '10.10.2022', 'Some description');
// const newProject2 = new Project('SecondProj', '10.10.2022', 'Some description');
// userProjects.push(newProject);
// userProjects.push(newProject2);

// currentProject = userProjects[1];

// const newTodo = new Todo('some random todo text');
// const secondTodo = new Todo('second todo', true);
// // newTodo.completed = true;
// newProject.addTodo(newTodo);
// newProject.addTodo(secondTodo);

// const Todo1 = new Todo('random todo');
// const Todo2 = new Todo('second todo', true);
// newProject2.addTodo(Todo1);
// newProject2.addTodo(Todo2);

// const jsonStringify = JSON.stringify(newProject);

(0,_modals_newProjectModal_js__WEBPACK_IMPORTED_MODULE_5__.newProjectModalInit)();
(0,_domrendering_projectsList_js__WEBPACK_IMPORTED_MODULE_3__.refreshProjectsList)();


function setCurrentProject(index) {
    currentProject = userProjects[index];
    console.log('setting current project (index.js)');

    (0,_domrendering_home_js__WEBPACK_IMPORTED_MODULE_4__.renderHome)(currentProject);
}

function saveData() {
    let data = JSON.stringify(userProjects);
    window.localStorage.setItem('data', data);
    console.log(data);
}

function loadData() {
    let data = window.localStorage.getItem('data');
    userProjects = JSON.parse(data);
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
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveData)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxPQUFPLG1GQUFtRixVQUFVLFdBQVcsWUFBWSxjQUFjLE9BQU8sTUFBTSxVQUFVLFVBQVUsTUFBTSxZQUFZLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksUUFBUSxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxL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Ozs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9jbGFzc2VzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9jbGFzc2VzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9kb21yZW5kZXJpbmcvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vc3JjL2RvbXJlbmRlcmluZy9wcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vc3JjL21vZGFscy9uZXdQcm9qZWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMSUdIVCBUSEVNRSAqL1xcclxcbmJvZHkge1xcclxcbiAgICAtLUNPTE9SLXByaW1hcnk6ICNGRkZGRkY7XFxyXFxuICAgIC0tQ09MT1ItdXRpbHM6ICNlNGU0ZTQ7XFxyXFxuICAgIC0tQ09MT1Itc2Vjb25kYXJ5OiAjNTg2RjdDO1xcclxcbiAgICAtLUNPTE9SLWFjY2VudDogIzA0RTgyNDtcXHJcXG4gICAgLS1DT0xPUi10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogREFSSyBUSEVNRSAqL1xcclxcbmJvZHkuZGFyay10aGVtZSB7XFxyXFxuICAgIC0tQ09MT1ItcHJpbWFyeTogIzMxMkYyRiAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLXV0aWxzOiAjM2IzOTM5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1Itc2Vjb25kYXJ5OiAjNWI2MDY5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1ItYWNjZW50OiAjMDRFODI0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1ItdGV4dDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi8qPT09IE1BSU4gSEVBREVSID09PSovXFxyXFxuI21haW4taGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi11dGlscyk7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1oZWFkZXIgLmZhLWJhcnMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qPT09IEFQUCA9PT0qL1xcclxcbi5hcHAge1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIE5BVkJBUiAqL1xcclxcbi5hcHAgLm5hdmJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXNlY29uZGFyeSk7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAudXBwZXItcGFydCB1bCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC51cHBlci1wYXJ0IHVsIGxpIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1wYXJ0IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1wYXJ0IHVsIGxpIHtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCB1bCBsaS5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLUNPTE9SLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCAuY3JlYXRlLXByb2plY3Qge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIERJU1BMQVkgKi9cXHJcXG4uYXBwIC5kaXNwbGF5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItcHJpbWFyeSk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQcm9qZWN0IERpc3BsYXkgKi9cXHJcXG4uZGlzcGxheSAucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50b2RvcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIgLnRvZG9zIC5wcm9qZWN0LXRvZG8ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTJweCA0MnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcclxcbiAgICAvKiBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7ICovXFxyXFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRvZG8gLmZhLWNoZWNrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMnB4O1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvIC5mYS14bWFyayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEycHg7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRvZG86aG92ZXIgaSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zIC5wcm9qZWN0LXRvZG86bnRoLWNoaWxkKDJuKSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbXBsZXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0IHV0aWxzIChidXR0b25zKSAqL1xcclxcbi5wcm9qZWN0LXV0aWxzLWJ0bnMge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgcmlnaHQ6IDI0cHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC11dGlscy1idG5zIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyo9PT0gRk9PVEVSID09PSovXFxyXFxuI21haW4tZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItdXRpbHMpO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA2cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1mb290ZXIgLmZhLWdpdGh1YiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1mb290ZXIgLmZhLWdpdGh1Yjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUxTICovXFxyXFxuXFxyXFxuLyogTmV3IFByb2plY3QgTW9kYWwgKi9cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwubW9kYWwtdmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdC1tb2RhbCAubW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXNlY29uZGFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi1wcmltYXJ5KTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwgLmZhLXhtYXJrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTJweDtcXHJcXG4gICAgdG9wOiAxMnB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFVUSUxJVElFUyAqL1xcclxcbi5oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qPT09IE1FRElBIFFVRVJJRVMgPT09Ki9cXHJcXG4vKiBTbWFsbCBzY3JlZW4gKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qPT09IEhFQURFUiA9PT0qL1xcclxcbiAgICAjbWFpbi1oZWFkZXIgLmZhLWJhcnMge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKj09PSBBUFAgPT09Ki9cXHJcXG4gICAgLmFwcCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcHAgLm5hdmJhciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIC8qIG9wYWNpdHk6IDAuOTsgKi9cXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7O0lBRVQsaUNBQWlDO0lBQ2pDLHFCQUFxQjs7QUFFekI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQix1QkFBdUI7SUFD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OztBQUVBO0lBQ0ksb0NBQW9DOztBQUV4Qzs7QUFFQSxXQUFXOztBQUVYLHNCQUFzQjtBQUN0QjtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixZQUFZOztJQUVaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwyQkFBMkI7OztJQUczQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFJQSxjQUFjO0FBQ2Q7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLHdCQUF3QjtBQUN4QixpQkFBaUI7QUFDakI7O0lBRUksaUJBQWlCO0lBQ2pCO1FBQ0ksbUJBQW1CO1FBQ25CLGVBQWU7SUFDbkI7O0lBRUEsY0FBYztJQUNkO1FBQ0ksc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMSUdIVCBUSEVNRSAqL1xcclxcbmJvZHkge1xcclxcbiAgICAtLUNPTE9SLXByaW1hcnk6ICNGRkZGRkY7XFxyXFxuICAgIC0tQ09MT1ItdXRpbHM6ICNlNGU0ZTQ7XFxyXFxuICAgIC0tQ09MT1Itc2Vjb25kYXJ5OiAjNTg2RjdDO1xcclxcbiAgICAtLUNPTE9SLWFjY2VudDogIzA0RTgyNDtcXHJcXG4gICAgLS1DT0xPUi10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogREFSSyBUSEVNRSAqL1xcclxcbmJvZHkuZGFyay10aGVtZSB7XFxyXFxuICAgIC0tQ09MT1ItcHJpbWFyeTogIzMxMkYyRiAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLXV0aWxzOiAjM2IzOTM5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1Itc2Vjb25kYXJ5OiAjNWI2MDY5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1ItYWNjZW50OiAjMDRFODI0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1ItdGV4dDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi8qPT09IE1BSU4gSEVBREVSID09PSovXFxyXFxuI21haW4taGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi11dGlscyk7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1oZWFkZXIgLmZhLWJhcnMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qPT09IEFQUCA9PT0qL1xcclxcbi5hcHAge1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIE5BVkJBUiAqL1xcclxcbi5hcHAgLm5hdmJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXNlY29uZGFyeSk7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAudXBwZXItcGFydCB1bCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC51cHBlci1wYXJ0IHVsIGxpIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1wYXJ0IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1wYXJ0IHVsIGxpIHtcXHJcXG4gICAgcGFkZGluZzogOHB4IDEycHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCB1bCBsaS5hY3RpdmUtcHJvamVjdCB7XFxyXFxuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHZhcigtLUNPTE9SLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tcGFydCAuY3JlYXRlLXByb2plY3Qge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIERJU1BMQVkgKi9cXHJcXG4uYXBwIC5kaXNwbGF5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItcHJpbWFyeSk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQcm9qZWN0IERpc3BsYXkgKi9cXHJcXG4uZGlzcGxheSAucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50b2RvcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIgLnRvZG9zIC5wcm9qZWN0LXRvZG8ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTJweCA0MnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcclxcbiAgICAvKiBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7ICovXFxyXFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRvZG8gLmZhLWNoZWNrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMnB4O1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvIC5mYS14bWFyayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEycHg7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRvZG86aG92ZXIgaSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zIC5wcm9qZWN0LXRvZG86bnRoLWNoaWxkKDJuKSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbXBsZXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0IHV0aWxzIChidXR0b25zKSAqL1xcclxcbi5wcm9qZWN0LXV0aWxzLWJ0bnMge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgcmlnaHQ6IDI0cHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC11dGlscy1idG5zIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyo9PT0gRk9PVEVSID09PSovXFxyXFxuI21haW4tZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItdXRpbHMpO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA2cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1mb290ZXIgLmZhLWdpdGh1YiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1mb290ZXIgLmZhLWdpdGh1Yjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUxTICovXFxyXFxuXFxyXFxuLyogTmV3IFByb2plY3QgTW9kYWwgKi9cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwubW9kYWwtdmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdC1tb2RhbCAubW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXNlY29uZGFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi1wcmltYXJ5KTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwgLmZhLXhtYXJrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTJweDtcXHJcXG4gICAgdG9wOiAxMnB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFVUSUxJVElFUyAqL1xcclxcbi5oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qPT09IE1FRElBIFFVRVJJRVMgPT09Ki9cXHJcXG4vKiBTbWFsbCBzY3JlZW4gKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qPT09IEhFQURFUiA9PT0qL1xcclxcbiAgICAjbWFpbi1oZWFkZXIgLmZhLWJhcnMge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKj09PSBBUFAgPT09Ki9cXHJcXG4gICAgLmFwcCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcHAgLm5hdmJhciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIC8qIG9wYWNpdHk6IDAuOTsgKi9cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMudG9kb3NBcnJheSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3NBcnJheS5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUb2RvIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBjb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbXBsZXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGVkO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgcHJvamVjdERpc3BsYXkgfSBmcm9tICcuLi9pbmRleC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhvbWUocHJvamVjdCkge1xyXG4gICAgcHJvamVjdERpc3BsYXkuaW5uZXJIVE1MID0gJyc7XHJcblxyXG5cclxuXHJcbiAgICAvLyBFbGVtZW50cyBjcmVhdGlvblxyXG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbnRhaW5lcicpO1xyXG4gICAgY29uc3QgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XHJcbiAgICBjb25zdCBkZXNjckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JEaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuICAgIGNvbnN0IHRvZG9zTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9kb3NMaXN0LmNsYXNzTGlzdC5hZGQoJ3RvZG9zJyk7XHJcblxyXG4gICAgY29uc3QgdGl0bGVIT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHRpdGxlSE9uZS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgY29uc3QgZGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XHJcbiAgICBkYXRlRGl2LmlubmVyVGV4dCA9IHByb2plY3QuZHVlRGF0ZTtcclxuICAgIGNvbnN0IGRlc2NyU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGRlc2NyU3Bhbi5pbm5lclRleHQgPSBwcm9qZWN0LmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3Qgb3JkZXJlZExpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvbCcpO1xyXG5cclxuICAgIC8vIEVsZW1lbnRzIGFwcGVuZGluZ1xyXG4gICAgcHJvamVjdERpc3BsYXkuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XHJcblxyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZURpdik7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyRGl2KTtcclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb3NMaXN0KTtcclxuXHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUhPbmUpO1xyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQoZGF0ZURpdik7XHJcbiAgICBkZXNjckRpdi5hcHBlbmRDaGlsZChkZXNjclNwYW4pO1xyXG4gICAgdG9kb3NMaXN0LmFwcGVuZENoaWxkKG9yZGVyZWRMaXN0KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygncmVuZGVySG9tZSAoaG9tZS5qcyknKTtcclxuICAgIHJlbmRlclByb2plY3RUb2Rvc0xpc3QocHJvamVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RUb2Rvc0xpc3QocHJvamVjdCkge1xyXG4gICAgbGV0IHRvZG9zT2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3Mgb2wnKTtcclxuICAgIHRvZG9zT2wuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0LnRvZG9zQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAvLyBMaXN0IGVsZW1lbnQgaXRzZWxmIGNyZWF0aW9uXHJcbiAgICAgICAgbGV0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBuZXdMaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8nKTtcclxuICAgICAgICBpZiAocHJvamVjdC50b2Rvc0FycmF5W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBuZXdMaS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbXBsZXRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdMaS5pbm5lclRleHQgPSBwcm9qZWN0LnRvZG9zQXJyYXlbaV0udGV4dDtcclxuICAgICAgICB0b2Rvc09sLmFwcGVuZENoaWxkKG5ld0xpKTtcclxuXHJcbiAgICAgICAgLy8gQnV0dG9ucyBmb3IgbGlzdCBlbGVtZW50IGNyZWF0aW9uXHJcbiAgICAgICAgY29uc3QgaWNvbkNoZWNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIGljb25DaGVja0J0bi5jbGFzc0xpc3QuYWRkKCdmYS1zb2xpZCcsICdmYS1jaGVjaycpO1xyXG4gICAgICAgIGljb25DaGVja0J0bi5kYXRhc2V0LmlkID0gaTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbkRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBpY29uRGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXhtYXJrJyk7XHJcbiAgICAgICAgaWNvbkRlbGV0ZUJ0bi5kYXRhc2V0LmlkID0gaTtcclxuXHJcbiAgICAgICAgbmV3TGkuYXBwZW5kQ2hpbGQoaWNvbkNoZWNrQnRuKTtcclxuICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChpY29uRGVsZXRlQnRuKTtcclxuXHJcbiAgICAgICAgaWNvbkNoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBuZXdMaS5jbGFzc0xpc3QudG9nZ2xlKCd0b2RvLWNvbXBsZXRlZCcpO1xyXG4gICAgICAgICAgICBpZiAocHJvamVjdC50b2Rvc0FycmF5W3BhcnNlSW50KGljb25DaGVja0J0bi5kYXRhc2V0LmlkKV0uY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdC50b2Rvc0FycmF5W3BhcnNlSW50KGljb25DaGVja0J0bi5kYXRhc2V0LmlkKV0uY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHByb2plY3QudG9kb3NBcnJheVtwYXJzZUludChpY29uQ2hlY2tCdG4uZGF0YXNldC5pZCldLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpY29uRGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zQXJyYXkuc3BsaWNlKHBhcnNlSW50KGljb25EZWxldGVCdG4uZGF0YXNldC5pZCksIDEpO1xyXG4gICAgICAgICAgICByZW5kZXJQcm9qZWN0VG9kb3NMaXN0KHByb2plY3QpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IHByb2plY3RzTGlzdCwgdXNlclByb2plY3RzLCBzZXRDdXJyZW50UHJvamVjdCB9IGZyb20gJy4uL2luZGV4LmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWZyZXNoUHJvamVjdHNMaXN0KCkge1xyXG4gICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlclByb2plY3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbmV3TGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgICAgIG5ld0xpc3RFbGVtZW50LmRhdGFzZXQuaWQgPSBpO1xyXG5cclxuICAgICAgICBuZXdMaXN0RWxlbWVudC5pbm5lclRleHQgPSB1c2VyUHJvamVjdHNbaV0udGl0bGU7XHJcblxyXG4gICAgICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChuZXdMaXN0RWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm90dG9tLXBhcnQgbGknKTtcclxuXHJcblxyXG4gICAgcHJvamVjdExpc3QuZm9yRWFjaChwcm9qZWN0ID0+IHtcclxuICAgICAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXByb2plY3QuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUtcHJvamVjdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9qIG9mIHByb2plY3RMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvai5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtcHJvamVjdCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0Q3VycmVudFByb2plY3QocGFyc2VJbnQocHJvamVjdC5kYXRhc2V0LmlkKSk7XHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1wcm9qZWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NsYXNzZXMvcHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL2NsYXNzZXMvdG9kby5qcyc7XHJcbmltcG9ydCB7IHJlZnJlc2hQcm9qZWN0c0xpc3QgfSBmcm9tICcuL2RvbXJlbmRlcmluZy9wcm9qZWN0c0xpc3QuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSAnLi9kb21yZW5kZXJpbmcvaG9tZS5qcyc7XHJcbmltcG9ydCB7IG5ld1Byb2plY3RNb2RhbEluaXQgfSBmcm9tICcuL21vZGFscy9uZXdQcm9qZWN0TW9kYWwuanMnO1xyXG5cclxuLy8gRGlzcGxheSBleHBvcnRzXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLXBhcnQgdWwnKTtcclxuZXhwb3J0IGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcclxuXHJcbi8vIFVzZXIgUmVsYXRlZCBFeHBvcnRzXHJcbmV4cG9ydCBsZXQgdXNlclByb2plY3RzID0gW107XHJcbmV4cG9ydCBsZXQgY3VycmVudFByb2plY3QgPSBudWxsO1xyXG5cclxuLy8gTmV3IFByb2plY3QgTW9kYWxcclxuZXhwb3J0IGNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdC1tb2RhbCcpO1xyXG5leHBvcnQgY29uc3QgbW9kYWxUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsICN0aXRsZScpO1xyXG5leHBvcnQgY29uc3QgbW9kYWxEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwgI2RhdGUnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsRGVzY3JJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCAjZGVzY3InKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsT3BlbkNsb3NlQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1vcGVuY2xvc2UnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsIGJ1dHRvbicpO1xyXG5cclxubG9hZERhdGEoKTtcclxuXHJcbi8vIFRFU1RJTkcgQVJFQVxyXG4vLyBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0ZpcnN0UHJvaicsICcxMC4xMC4yMDIyJywgJ1NvbWUgZGVzY3JpcHRpb24nKTtcclxuLy8gY29uc3QgbmV3UHJvamVjdDIgPSBuZXcgUHJvamVjdCgnU2Vjb25kUHJvaicsICcxMC4xMC4yMDIyJywgJ1NvbWUgZGVzY3JpcHRpb24nKTtcclxuLy8gdXNlclByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbi8vIHVzZXJQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QyKTtcclxuXHJcbi8vIGN1cnJlbnRQcm9qZWN0ID0gdXNlclByb2plY3RzWzFdO1xyXG5cclxuLy8gY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKCdzb21lIHJhbmRvbSB0b2RvIHRleHQnKTtcclxuLy8gY29uc3Qgc2Vjb25kVG9kbyA9IG5ldyBUb2RvKCdzZWNvbmQgdG9kbycsIHRydWUpO1xyXG4vLyAvLyBuZXdUb2RvLmNvbXBsZXRlZCA9IHRydWU7XHJcbi8vIG5ld1Byb2plY3QuYWRkVG9kbyhuZXdUb2RvKTtcclxuLy8gbmV3UHJvamVjdC5hZGRUb2RvKHNlY29uZFRvZG8pO1xyXG5cclxuLy8gY29uc3QgVG9kbzEgPSBuZXcgVG9kbygncmFuZG9tIHRvZG8nKTtcclxuLy8gY29uc3QgVG9kbzIgPSBuZXcgVG9kbygnc2Vjb25kIHRvZG8nLCB0cnVlKTtcclxuLy8gbmV3UHJvamVjdDIuYWRkVG9kbyhUb2RvMSk7XHJcbi8vIG5ld1Byb2plY3QyLmFkZFRvZG8oVG9kbzIpO1xyXG5cclxuLy8gY29uc3QganNvblN0cmluZ2lmeSA9IEpTT04uc3RyaW5naWZ5KG5ld1Byb2plY3QpO1xyXG5cclxubmV3UHJvamVjdE1vZGFsSW5pdCgpO1xyXG5yZWZyZXNoUHJvamVjdHNMaXN0KCk7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRQcm9qZWN0KGluZGV4KSB7XHJcbiAgICBjdXJyZW50UHJvamVjdCA9IHVzZXJQcm9qZWN0c1tpbmRleF07XHJcbiAgICBjb25zb2xlLmxvZygnc2V0dGluZyBjdXJyZW50IHByb2plY3QgKGluZGV4LmpzKScpO1xyXG5cclxuICAgIHJlbmRlckhvbWUoY3VycmVudFByb2plY3QpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZURhdGEoKSB7XHJcbiAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHVzZXJQcm9qZWN0cyk7XHJcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhdGEnLCBkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRGF0YSgpIHtcclxuICAgIGxldCBkYXRhID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXRhJyk7XHJcbiAgICB1c2VyUHJvamVjdHMgPSBKU09OLnBhcnNlKGRhdGEpO1xyXG59XHJcbiIsImltcG9ydCB7XHJcbiAgICBuZXdQcm9qZWN0TW9kYWwsXHJcbiAgICBtb2RhbFRpdGxlSW5wdXQsXHJcbiAgICBtb2RhbERhdGVJbnB1dCxcclxuICAgIG1vZGFsRGVzY3JJbnB1dCxcclxuICAgIG1vZGFsT3BlbkNsb3NlQnRucyxcclxuICAgIG1vZGFsU3VibWl0LFxyXG4gICAgdXNlclByb2plY3RzLFxyXG4gICAgc2F2ZURhdGEsXHJcbn0gZnJvbSAnLi4vaW5kZXguanMnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vY2xhc3Nlcy9wcm9qZWN0LmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaFByb2plY3RzTGlzdCB9IGZyb20gJy4uL2RvbXJlbmRlcmluZy9wcm9qZWN0c0xpc3QuanMnO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXdQcm9qZWN0TW9kYWxJbml0KCkge1xyXG4gICAgbW9kYWxPcGVuQ2xvc2VCdG5zLmZvckVhY2goYnRuID0+IHtcclxuICAgICAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC12aXNpYmxlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtb2RhbFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAobW9kYWxUaXRsZUlucHV0LnZhbHVlICE9PSAnJyAmJiBtb2RhbERhdGVJbnB1dC52YWx1ZSAhPT0gJycgJiYgbW9kYWxEZXNjcklucHV0LnZhbHVlICE9PSAnJykge1xyXG4gICAgICAgICAgICB1c2VyUHJvamVjdHMucHVzaChuZXcgUHJvamVjdChtb2RhbFRpdGxlSW5wdXQudmFsdWUsIG1vZGFsRGF0ZUlucHV0LnZhbHVlLCBtb2RhbERlc2NySW5wdXQudmFsdWUpKTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsVGl0bGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBtb2RhbERhdGVJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICBtb2RhbERlc2NySW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgICAgIG5ld1Byb2plY3RNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdtb2RhbC12aXNpYmxlJyk7XHJcbiAgICAgICAgICAgIHJlZnJlc2hQcm9qZWN0c0xpc3QoKTtcclxuICAgICAgICAgICAgc2F2ZURhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=