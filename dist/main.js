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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    font-family: 'Roboto', sans-serif;\r\n    text-decoration: none;\r\n\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* LIGHT THEME */\r\nbody {\r\n    --COLOR-primary: #FFFFFF;\r\n    --COLOR-utils: #e4e4e4;\r\n    --COLOR-secondary: #586F7C;\r\n    --COLOR-accent: #04E824;\r\n    --COLOR-text: rgb(0, 0, 0);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/* DARK THEME */\r\nbody.dark-theme {\r\n    --COLOR-primary: #312F2F !important;\r\n    --COLOR-utils: #3b3939 !important;\r\n    --COLOR-secondary: #5b6069 !important;\r\n    --COLOR-accent: #04E824 !important;\r\n    --COLOR-text: rgb(255, 255, 255);\r\n\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/*=== MAIN HEADER ===*/\r\n#main-header {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 15px;\r\n    background: var(--COLOR-utils);\r\n}\r\n\r\n#main-header h1 {\r\n    margin-left: auto;\r\n}\r\n\r\n#main-header .fa-bars {\r\n    margin-left: auto;\r\n    font-size: 32px;\r\n    visibility: hidden;\r\n}\r\n\r\n/*=== APP ===*/\r\n.app {\r\n    /* height: 100%; */\r\n    display: flex;\r\n}\r\n\r\n/* NAVBAR */\r\n.app .navbar {\r\n    background: var(--COLOR-secondary);\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    font-size: 20px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    z-index: 100;\r\n    opacity: 1;\r\n}\r\n\r\n.navbar .upper-part ul {\r\n    margin-left: 18px;\r\n    margin-top: 24px;\r\n\r\n}\r\n\r\n.navbar .upper-part ul li {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bottom-part ul {\r\n    list-style-type: none;\r\n    margin-left: 12px;\r\n    margin-top: 12px;\r\n}\r\n\r\n.bottom-part .create-project {\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* DISPLAY */\r\n.app .display {\r\n    background: var(--COLOR-primary);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: relative;\r\n}\r\n\r\n\r\n/* Project Display */\r\n.display .project-container {\r\n    width: 80%;\r\n    /* height: 200px; */\r\n    border: 1px solid black;\r\n    margin-top: 36px;\r\n    position: relative;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 24px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 24px;\r\n}\r\n\r\n.project-buttons {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n.project-buttons button {\r\n    height: 48px;\r\n    width: 48px;\r\n    font-size: 24px;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n.project-container .title {\r\n    text-align: center;\r\n}\r\n\r\n.project-container .todos {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.project-container .todos .project-todo {\r\n    border: 1px solid black;\r\n    padding: 12px 42px;\r\n    margin-top: -1px;\r\n    /* list-style-type: none; */\r\n    list-style-position: inside;\r\n    word-wrap: break-word;\r\n    position: relative;\r\n}\r\n\r\n.project-todo .fa-check {\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 10px;\r\n    font-size: 24px;\r\n    visibility: hidden;\r\n}\r\n\r\n.project-todo .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 10px;\r\n    visibility: hidden;\r\n    font-size: 24px;\r\n}\r\n\r\n.project-todo:hover i {\r\n    visibility: visible;\r\n    cursor: pointer;\r\n}\r\n\r\n.todos .project-todo:nth-child(2n) {\r\n    background: #e7e7e7;\r\n}\r\n\r\n.todo-completed {\r\n    text-decoration: line-through;\r\n    background: rgba(0, 255, 0, 0.2) !important;\r\n}\r\n\r\n/* Project utils (buttons) */\r\n.project-utils-btns {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    right: 24px;\r\n    top: 50%;\r\n}\r\n\r\n.project-utils-btns button {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*=== FOOTER ===*/\r\n#main-footer {\r\n    background: var(--COLOR-utils);\r\n    height: 50px;\r\n    padding: 12px 24px;\r\n    display: flex;\r\n    gap: 6px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: auto;\r\n}\r\n\r\n#main-footer .fa-github {\r\n    font-size: 22px;\r\n    transition: transform 300ms ease-in-out;\r\n}\r\n\r\n#main-footer .fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n\r\n}\r\n\r\n/* MODALS */\r\n\r\n/* New Project Modal */\r\n.new-project-modal {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.4);\r\n    z-index: 100;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    visibility: hidden;\r\n}\r\n\r\n.new-project-modal.modal-visible {\r\n    visibility: visible;\r\n}\r\n\r\n.new-project-modal .modal {\r\n    height: 500px;\r\n    width: 400px;\r\n    background: var(--COLOR-secondary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 24px;\r\n    color: var(--COLOR-primary);\r\n\r\n\r\n    position: relative;\r\n}\r\n\r\n.modal input {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.modal .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 12px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal button {\r\n    margin-top: auto;\r\n}\r\n\r\n\r\n\r\n/* UTILITIES */\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*=== MEDIA QUERIES ===*/\r\n/* Small screen */\r\n@media only screen and (max-width: 800px) {\r\n\r\n    /*=== HEADER ===*/\r\n    #main-header .fa-bars {\r\n        visibility: visible;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*=== APP ===*/\r\n    .app {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .app .navbar {\r\n        position: absolute;\r\n        left: 0;\r\n        right: 0;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 100px;\r\n        /* opacity: 0.9; */\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    font-family: 'Roboto', sans-serif;\r\n    text-decoration: none;\r\n\r\n}\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n/* LIGHT THEME */\r\nbody {\r\n    --COLOR-primary: #FFFFFF;\r\n    --COLOR-utils: #e4e4e4;\r\n    --COLOR-secondary: #586F7C;\r\n    --COLOR-accent: #04E824;\r\n    --COLOR-text: rgb(0, 0, 0);\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/* DARK THEME */\r\nbody.dark-theme {\r\n    --COLOR-primary: #312F2F !important;\r\n    --COLOR-utils: #3b3939 !important;\r\n    --COLOR-secondary: #5b6069 !important;\r\n    --COLOR-accent: #04E824 !important;\r\n    --COLOR-text: rgb(255, 255, 255);\r\n\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n/*=== MAIN HEADER ===*/\r\n#main-header {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    padding: 0 15px;\r\n    background: var(--COLOR-utils);\r\n}\r\n\r\n#main-header h1 {\r\n    margin-left: auto;\r\n}\r\n\r\n#main-header .fa-bars {\r\n    margin-left: auto;\r\n    font-size: 32px;\r\n    visibility: hidden;\r\n}\r\n\r\n/*=== APP ===*/\r\n.app {\r\n    /* height: 100%; */\r\n    display: flex;\r\n}\r\n\r\n/* NAVBAR */\r\n.app .navbar {\r\n    background: var(--COLOR-secondary);\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    font-size: 20px;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    z-index: 100;\r\n    opacity: 1;\r\n}\r\n\r\n.navbar .upper-part ul {\r\n    margin-left: 18px;\r\n    margin-top: 24px;\r\n\r\n}\r\n\r\n.navbar .upper-part ul li {\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n.bottom-part ul {\r\n    list-style-type: none;\r\n    margin-left: 12px;\r\n    margin-top: 12px;\r\n}\r\n\r\n.bottom-part .create-project {\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/* DISPLAY */\r\n.app .display {\r\n    background: var(--COLOR-primary);\r\n    height: 100%;\r\n    width: 100%;\r\n    display: relative;\r\n}\r\n\r\n\r\n/* Project Display */\r\n.display .project-container {\r\n    width: 80%;\r\n    /* height: 200px; */\r\n    border: 1px solid black;\r\n    margin-top: 36px;\r\n    position: relative;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 24px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 24px;\r\n}\r\n\r\n.project-buttons {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n\r\n    display: flex;\r\n    gap: 12px;\r\n}\r\n\r\n.project-buttons button {\r\n    height: 48px;\r\n    width: 48px;\r\n    font-size: 24px;\r\n    color: var(--COLOR-text);\r\n}\r\n\r\n.project-container .title {\r\n    text-align: center;\r\n}\r\n\r\n.project-container .todos {\r\n    width: 100%;\r\n}\r\n\r\n\r\n.project-container .todos .project-todo {\r\n    border: 1px solid black;\r\n    padding: 12px 42px;\r\n    margin-top: -1px;\r\n    /* list-style-type: none; */\r\n    list-style-position: inside;\r\n    word-wrap: break-word;\r\n    position: relative;\r\n}\r\n\r\n.project-todo .fa-check {\r\n    position: absolute;\r\n    left: 12px;\r\n    top: 10px;\r\n    font-size: 24px;\r\n    visibility: hidden;\r\n}\r\n\r\n.project-todo .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 10px;\r\n    visibility: hidden;\r\n    font-size: 24px;\r\n}\r\n\r\n.project-todo:hover i {\r\n    visibility: visible;\r\n    cursor: pointer;\r\n}\r\n\r\n.todos .project-todo:nth-child(2n) {\r\n    background: #e7e7e7;\r\n}\r\n\r\n.todo-completed {\r\n    text-decoration: line-through;\r\n    background: rgba(0, 255, 0, 0.2) !important;\r\n}\r\n\r\n/* Project utils (buttons) */\r\n.project-utils-btns {\r\n    position: fixed;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 12px;\r\n    right: 24px;\r\n    top: 50%;\r\n}\r\n\r\n.project-utils-btns button {\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 10px;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n/*=== FOOTER ===*/\r\n#main-footer {\r\n    background: var(--COLOR-utils);\r\n    height: 50px;\r\n    padding: 12px 24px;\r\n    display: flex;\r\n    gap: 6px;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: auto;\r\n}\r\n\r\n#main-footer .fa-github {\r\n    font-size: 22px;\r\n    transition: transform 300ms ease-in-out;\r\n}\r\n\r\n#main-footer .fa-github:hover {\r\n    transform: rotate(360deg) scale(1.2);\r\n\r\n}\r\n\r\n/* MODALS */\r\n\r\n/* New Project Modal */\r\n.new-project-modal {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.4);\r\n    z-index: 100;\r\n\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    visibility: hidden;\r\n}\r\n\r\n.new-project-modal.modal-visible {\r\n    visibility: visible;\r\n}\r\n\r\n.new-project-modal .modal {\r\n    height: 500px;\r\n    width: 400px;\r\n    background: var(--COLOR-secondary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 24px;\r\n    color: var(--COLOR-primary);\r\n\r\n\r\n    position: relative;\r\n}\r\n\r\n.modal input {\r\n    margin-bottom: 12px;\r\n}\r\n\r\n\r\n.modal .fa-xmark {\r\n    position: absolute;\r\n    right: 12px;\r\n    top: 12px;\r\n    font-size: 18px;\r\n    cursor: pointer;\r\n}\r\n\r\n.modal button {\r\n    margin-top: auto;\r\n}\r\n\r\n\r\n\r\n/* UTILITIES */\r\n.hidden {\r\n    visibility: hidden;\r\n}\r\n\r\n\r\n/*=== MEDIA QUERIES ===*/\r\n/* Small screen */\r\n@media only screen and (max-width: 800px) {\r\n\r\n    /*=== HEADER ===*/\r\n    #main-header .fa-bars {\r\n        visibility: visible;\r\n        cursor: pointer;\r\n    }\r\n\r\n    /*=== APP ===*/\r\n    .app {\r\n        flex-direction: column;\r\n    }\r\n\r\n    .app .navbar {\r\n        position: absolute;\r\n        left: 0;\r\n        right: 0;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 100px;\r\n        /* opacity: 0.9; */\r\n    }\r\n}"],"sourceRoot":""}]);
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



let projectToRender = null;

function renderHome(project) {
    _index_js__WEBPACK_IMPORTED_MODULE_0__.projectDisplay.innerHTML = '';
    projectToRender = project;
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

    renderProjectsTodosList(project);
}

// function updateHome() {
//     const title = projectDisplay.querySelector('.title h1');
//     const description = projectDisplay.querySelector('.description span');
// }


function renderProjectsTodosList(project) {
    const todosOl = document.querySelector('.todos ol');
    todosOl.innerHTML = '';

    for (let i = 0; project.todosArray.length; i++) {
        const newLi = document.createElement('li');
        newLi.classList.add('project-todo');
        if (project.todosArray[i].completed === true) {
            newLi.classList.add('todo-completed');
        }
        newLi.innerText = project.todosArray[i].text;
        todosOl.appendChild(newLi);

        const iconCheckElement = document.createElement('i');
        iconCheckElement.classList.add('fa-solid', 'fa-check');
        iconCheckElement.dataset.id = i;
        const iconXElement = document.createElement('i');
        iconXElement.classList.add('fa-solid', 'fa-xmark');
        iconXElement.dataset.id = i;

        newLi.appendChild(iconCheckElement);
        newLi.appendChild(iconXElement);


        faCheckTodoBtn(iconCheckElement, newLi, project);
        faXMarkTodoBtn(iconXElement, project);
    }
}

function faCheckTodoBtn(iconElement, listElement, project) {
    iconElement.addEventListener('click', () => {
        if (project.todosArray[parseInt(iconElement.dataset.id)].completed === false) {
            project.todosArray[parseInt(iconElement.dataset.id)].completed = true;
            listElement.classList.add('todo-completed');
        }
        else {
            project.todosArray[parseInt(iconElement.dataset.id)].completed = false;
            listElement.classList.remove('todo-completed');
        }
    })
}

function faXMarkTodoBtn(iconElement, project) {
    iconElement.addEventListener('click', () => {
        project.todosArray.splice(parseInt(iconElement.dataset.id), 1);
        console.log(project);
        renderProjectsTodosList(project);
    });

}

function renderProjectsTodos() {

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

// New Project Modal
const newProjectModal = document.querySelector('.new-project-modal');
const modalTitleInput = document.querySelector('.modal #title');
const modalDateInput = document.querySelector('.modal #date');
const modalDescrInput = document.querySelector('.modal #descr');
const modalOpenCloseBtns = document.querySelectorAll('.modal-openclose');
const modalSubmit = document.querySelector('.modal button');


// TESTING AREA
const newProject = new _classes_project_js__WEBPACK_IMPORTED_MODULE_1__.Project('FirstProj', '10.10.2022', 'Some description');
userProjects.push(newProject);
const currentProject = userProjects[0];

const newTodo = new _classes_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo('some random todo text');
const secondTodo = new _classes_todo_js__WEBPACK_IMPORTED_MODULE_2__.Todo('second todo', true);
// newTodo.completed = true;
newProject.addTodo(newTodo);
newProject.addTodo(secondTodo);

const jsonStringify = JSON.stringify(newProject);
// console.log(jsonStringify);

(0,_modals_newProjectModal_js__WEBPACK_IMPORTED_MODULE_5__.newProjectModalInit)();
(0,_domrendering_projectsList_js__WEBPACK_IMPORTED_MODULE_3__.refreshProjectsList)();
(0,_domrendering_home_js__WEBPACK_IMPORTED_MODULE_4__.renderHome)(currentProject);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGNBQWMsYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksUUFBUSxZQUFZLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFFBQVEsWUFBWSxNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8s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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0VBQW1CO0FBQ25CLGtGQUFtQjtBQUNuQixpRUFBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JXO0FBQzJCO0FBQ3NCO0FBQ3RFO0FBQ0E7QUFDTztBQUNQLElBQUksaUVBQTBCO0FBQzlCO0FBQ0EsWUFBWSx1RUFBZ0M7QUFDNUMsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLElBQUksbUVBQTRCO0FBQ2hDLFlBQVksNERBQXFCLFdBQVcsMkRBQW9CLFdBQVcsNERBQXFCO0FBQ2hHLFlBQVksd0RBQWlCLEtBQUssd0RBQU8sQ0FBQyw0REFBcUIsRUFBRSwyREFBb0IsRUFBRSw0REFBcUI7QUFDNUc7QUFDQSxZQUFZLDREQUFxQjtBQUNqQyxZQUFZLDJEQUFvQjtBQUNoQyxZQUFZLDREQUFxQjtBQUNqQztBQUNBLFlBQVksdUVBQWdDO0FBQzVDLFlBQVksa0ZBQW1CO0FBQy9CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7Ozs7OztVQ2xDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9zcmMvY3NzL21haW4uY3NzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vc3JjL2Nzcy9tYWluLmNzcz8yYzlmIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9jbGFzc2VzL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9jbGFzc2VzL3RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9kb21yZW5kZXJpbmcvaG9tZS5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vc3JjL2RvbXJlbmRlcmluZy9wcm9qZWN0c0xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0Ly4vc3JjL21vZGFscy9uZXdQcm9qZWN0TW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtcHJvamVjdDEwLXRvZG9saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9wLXByb2plY3QxMC10b2RvbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC1wcm9qZWN0MTAtdG9kb2xpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMSUdIVCBUSEVNRSAqL1xcclxcbmJvZHkge1xcclxcbiAgICAtLUNPTE9SLXByaW1hcnk6ICNGRkZGRkY7XFxyXFxuICAgIC0tQ09MT1ItdXRpbHM6ICNlNGU0ZTQ7XFxyXFxuICAgIC0tQ09MT1Itc2Vjb25kYXJ5OiAjNTg2RjdDO1xcclxcbiAgICAtLUNPTE9SLWFjY2VudDogIzA0RTgyNDtcXHJcXG4gICAgLS1DT0xPUi10ZXh0OiByZ2IoMCwgMCwgMCk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogREFSSyBUSEVNRSAqL1xcclxcbmJvZHkuZGFyay10aGVtZSB7XFxyXFxuICAgIC0tQ09MT1ItcHJpbWFyeTogIzMxMkYyRiAhaW1wb3J0YW50O1xcclxcbiAgICAtLUNPTE9SLXV0aWxzOiAjM2IzOTM5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1Itc2Vjb25kYXJ5OiAjNWI2MDY5ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1ItYWNjZW50OiAjMDRFODI0ICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1ItdGV4dDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi8qPT09IE1BSU4gSEVBREVSID09PSovXFxyXFxuI21haW4taGVhZGVyIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMCAxNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi11dGlscyk7XFxyXFxufVxcclxcblxcclxcbiNtYWluLWhlYWRlciBoMSB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1oZWFkZXIgLmZhLWJhcnMge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgZm9udC1zaXplOiAzMnB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qPT09IEFQUCA9PT0qL1xcclxcbi5hcHAge1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi8qIE5BVkJBUiAqL1xcclxcbi5hcHAgLm5hdmJhciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXNlY29uZGFyeSk7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDUwcHg7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmJhciAudXBwZXItcGFydCB1bCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC51cHBlci1wYXJ0IHVsIGxpIHtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1wYXJ0IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1wYXJ0IC5jcmVhdGUtcHJvamVjdCB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBESVNQTEFZICovXFxyXFxuLmFwcCAuZGlzcGxheSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXByaW1hcnkpO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogUHJvamVjdCBEaXNwbGF5ICovXFxyXFxuLmRpc3BsYXkgLnByb2plY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gICAgLyogaGVpZ2h0OiAyMDBweDsgKi9cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi10b3A6IDM2cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1idXR0b25zIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgaGVpZ2h0OiA0OHB4O1xcclxcbiAgICB3aWR0aDogNDhweDtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItdGV4dCk7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciAudGl0bGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRhaW5lciAudG9kb3Mge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50b2RvcyAucHJvamVjdC10b2RvIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggNDJweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogLTFweDtcXHJcXG4gICAgLyogbGlzdC1zdHlsZS10eXBlOiBub25lOyAqL1xcclxcbiAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XFxyXFxuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvIC5mYS1jaGVjayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMTJweDtcXHJcXG4gICAgdG9wOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdG9kbyAuZmEteG1hcmsge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHJpZ2h0OiAxMnB4O1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvOmhvdmVyIGkge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvcyAucHJvamVjdC10b2RvOm50aC1jaGlsZCgybikge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb21wbGV0ZWQge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAyNTUsIDAsIDAuMikgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLyogUHJvamVjdCB1dGlscyAoYnV0dG9ucykgKi9cXHJcXG4ucHJvamVjdC11dGlscy1idG5zIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEycHg7XFxyXFxuICAgIHJpZ2h0OiAyNHB4O1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdXRpbHMtYnRucyBidXR0b24ge1xcclxcbiAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qPT09IEZPT1RFUiA9PT0qL1xcclxcbiNtYWluLWZvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXV0aWxzKTtcXHJcXG4gICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogNnB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tZm9vdGVyIC5mYS1naXRodWIge1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4tZm9vdGVyIC5mYS1naXRodWI6aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpIHNjYWxlKDEuMik7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIE1PREFMUyAqL1xcclxcblxcclxcbi8qIE5ldyBQcm9qZWN0IE1vZGFsICovXFxyXFxuLm5ldy1wcm9qZWN0LW1vZGFsIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy1wcm9qZWN0LW1vZGFsLm1vZGFsLXZpc2libGUge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwgLm1vZGFsIHtcXHJcXG4gICAgaGVpZ2h0OiA1MDBweDtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUi1zZWNvbmRhcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBwYWRkaW5nOiAyNHB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tQ09MT1ItcHJpbWFyeSk7XFxyXFxuXFxyXFxuXFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1vZGFsIC5mYS14bWFyayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEycHg7XFxyXFxuICAgIHRvcDogMTJweDtcXHJcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBVVElMSVRJRVMgKi9cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKj09PSBNRURJQSBRVUVSSUVTID09PSovXFxyXFxuLyogU21hbGwgc2NyZWVuICovXFxyXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcblxcclxcbiAgICAvKj09PSBIRUFERVIgPT09Ki9cXHJcXG4gICAgI21haW4taGVhZGVyIC5mYS1iYXJzIHtcXHJcXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLyo9PT0gQVBQID09PSovXFxyXFxuICAgIC5hcHAge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYXBwIC5uYXZiYXIge1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHJpZ2h0OiAwO1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAvKiBvcGFjaXR5OiAwLjk7ICovXFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtJQUNJLFVBQVU7SUFDVixTQUFTOztJQUVULGlDQUFpQztJQUNqQyxxQkFBcUI7O0FBRXpCOztBQUVBOztJQUVJLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLDBCQUEwQjs7SUFFMUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix3QkFBd0I7QUFDNUI7O0FBRUEsZUFBZTtBQUNmO0lBQ0ksbUNBQW1DO0lBQ25DLGlDQUFpQztJQUNqQyxxQ0FBcUM7SUFDckMsa0NBQWtDO0lBQ2xDLGdDQUFnQzs7SUFFaEMsd0JBQXdCO0FBQzVCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUEsY0FBYztBQUNkO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUEsV0FBVztBQUNYO0lBQ0ksa0NBQWtDO0lBQ2xDLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJ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bCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8mZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi8qIExJR0hUIFRIRU1FICovXFxyXFxuYm9keSB7XFxyXFxuICAgIC0tQ09MT1ItcHJpbWFyeTogI0ZGRkZGRjtcXHJcXG4gICAgLS1DT0xPUi11dGlsczogI2U0ZTRlNDtcXHJcXG4gICAgLS1DT0xPUi1zZWNvbmRhcnk6ICM1ODZGN0M7XFxyXFxuICAgIC0tQ09MT1ItYWNjZW50OiAjMDRFODI0O1xcclxcbiAgICAtLUNPTE9SLXRleHQ6IHJnYigwLCAwLCAwKTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgY29sb3I6IHZhcigtLUNPTE9SLXRleHQpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBEQVJLIFRIRU1FICovXFxyXFxuYm9keS5kYXJrLXRoZW1lIHtcXHJcXG4gICAgLS1DT0xPUi1wcmltYXJ5OiAjMzEyRjJGICFpbXBvcnRhbnQ7XFxyXFxuICAgIC0tQ09MT1ItdXRpbHM6ICMzYjM5MzkgIWltcG9ydGFudDtcXHJcXG4gICAgLS1DT0xPUi1zZWNvbmRhcnk6ICM1YjYwNjkgIWltcG9ydGFudDtcXHJcXG4gICAgLS1DT0xPUi1hY2NlbnQ6ICMwNEU4MjQgIWltcG9ydGFudDtcXHJcXG4gICAgLS1DT0xPUi10ZXh0OiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLyo9PT0gTUFJTiBIRUFERVIgPT09Ki9cXHJcXG4jbWFpbi1oZWFkZXIge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAwIDE1cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXV0aWxzKTtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4taGVhZGVyIGgxIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbiNtYWluLWhlYWRlciAuZmEtYmFycyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICBmb250LXNpemU6IDMycHg7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLyo9PT0gQVBQID09PSovXFxyXFxuLmFwcCB7XFxyXFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTkFWQkFSICovXFxyXFxuLmFwcCAubmF2YmFyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1Itc2Vjb25kYXJ5KTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNTBweDtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2YmFyIC51cHBlci1wYXJ0IHVsIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE4cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDI0cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5uYXZiYXIgLnVwcGVyLXBhcnQgdWwgbGkge1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXBhcnQgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLXBhcnQgLmNyZWF0ZS1wcm9qZWN0IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIERJU1BMQVkgKi9cXHJcXG4uYXBwIC5kaXNwbGF5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItcHJpbWFyeSk7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiBQcm9qZWN0IERpc3BsYXkgKi9cXHJcXG4uZGlzcGxheSAucHJvamVjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICAvKiBoZWlnaHQ6IDIwMHB4OyAqL1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgbWFyZ2luLXRvcDogMzZweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWJ1dHRvbnMge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICBoZWlnaHQ6IDQ4cHg7XFxyXFxuICAgIHdpZHRoOiA0OHB4O1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi10ZXh0KTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50aXRsZSB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtY29udGFpbmVyIC50b2RvcyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250YWluZXIgLnRvZG9zIC5wcm9qZWN0LXRvZG8ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMTJweCA0MnB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiAtMXB4O1xcclxcbiAgICAvKiBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7ICovXFxyXFxuICAgIGxpc3Qtc3R5bGUtcG9zaXRpb246IGluc2lkZTtcXHJcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRvZG8gLmZhLWNoZWNrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAxMnB4O1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10b2RvIC5mYS14bWFyayB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEycHg7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LXRvZG86aG92ZXIgaSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zIC5wcm9qZWN0LXRvZG86bnRoLWNoaWxkKDJuKSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWNvbXBsZXRlZCB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDI1NSwgMCwgMC4yKSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBQcm9qZWN0IHV0aWxzIChidXR0b25zKSAqL1xcclxcbi5wcm9qZWN0LXV0aWxzLWJ0bnMge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTJweDtcXHJcXG4gICAgcmlnaHQ6IDI0cHg7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC11dGlscy1idG5zIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyo9PT0gRk9PVEVSID09PSovXFxyXFxuI21haW4tZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1ItdXRpbHMpO1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMjRweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA2cHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1mb290ZXIgLmZhLWdpdGh1YiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2UtaW4tb3V0O1xcclxcbn1cXHJcXG5cXHJcXG4jbWFpbi1mb290ZXIgLmZhLWdpdGh1Yjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZykgc2NhbGUoMS4yKTtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogTU9EQUxTICovXFxyXFxuXFxyXFxuLyogTmV3IFByb2plY3QgTW9kYWwgKi9cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgei1pbmRleDogMTAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXByb2plY3QtbW9kYWwubW9kYWwtdmlzaWJsZSB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi5uZXctcHJvamVjdC1tb2RhbCAubW9kYWwge1xcclxcbiAgICBoZWlnaHQ6IDUwMHB4O1xcclxcbiAgICB3aWR0aDogNDAwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SLXNlY29uZGFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBhZGRpbmc6IDI0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1DT0xPUi1wcmltYXJ5KTtcXHJcXG5cXHJcXG5cXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4ubW9kYWwgLmZhLXhtYXJrIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTJweDtcXHJcXG4gICAgdG9wOiAxMnB4O1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIFVUSUxJVElFUyAqL1xcclxcbi5oaWRkZW4ge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qPT09IE1FRElBIFFVRVJJRVMgPT09Ki9cXHJcXG4vKiBTbWFsbCBzY3JlZW4gKi9cXHJcXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxyXFxuXFxyXFxuICAgIC8qPT09IEhFQURFUiA9PT0qL1xcclxcbiAgICAjbWFpbi1oZWFkZXIgLmZhLWJhcnMge1xcclxcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAvKj09PSBBUFAgPT09Ki9cXHJcXG4gICAgLmFwcCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hcHAgLm5hdmJhciB7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgcmlnaHQ6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIC8qIG9wYWNpdHk6IDAuOTsgKi9cXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMudG9kb3NBcnJheSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3NBcnJheS5wdXNoKHRvZG8pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVRvZG8oaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnRvZG9zQXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBUb2RvIHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBjb21wbGV0ZWQgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBwcm9qZWN0RGlzcGxheSB9IGZyb20gJy4uL2luZGV4LmpzJztcclxuXHJcblxyXG5sZXQgcHJvamVjdFRvUmVuZGVyID0gbnVsbDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJIb21lKHByb2plY3QpIHtcclxuICAgIHByb2plY3REaXNwbGF5LmlubmVySFRNTCA9ICcnO1xyXG4gICAgcHJvamVjdFRvUmVuZGVyID0gcHJvamVjdDtcclxuICAgIC8vIEVsZW1lbnRzIGNyZWF0aW9uXHJcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29udGFpbmVyJyk7XHJcbiAgICBjb25zdCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgndGl0bGUnKTtcclxuICAgIGNvbnN0IGRlc2NyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNjckRpdi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xyXG4gICAgY29uc3QgdG9kb3NMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2Rvc0xpc3QuY2xhc3NMaXN0LmFkZCgndG9kb3MnKTtcclxuXHJcbiAgICBjb25zdCB0aXRsZUhPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgdGl0bGVIT25lLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICBjb25zdCBkYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2RhdGUnKTtcclxuICAgIGRhdGVEaXYuaW5uZXJUZXh0ID0gcHJvamVjdC5kdWVEYXRlO1xyXG4gICAgY29uc3QgZGVzY3JTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgZGVzY3JTcGFuLmlubmVyVGV4dCA9IHByb2plY3QuZGVzY3JpcHRpb247XHJcbiAgICBjb25zdCBvcmRlcmVkTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29sJyk7XHJcblxyXG4gICAgLy8gRWxlbWVudHMgYXBwZW5kaW5nXHJcbiAgICBwcm9qZWN0RGlzcGxheS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcclxuXHJcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRGl2KTtcclxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JEaXYpO1xyXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2Rvc0xpc3QpO1xyXG5cclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlSE9uZSk7XHJcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZChkYXRlRGl2KTtcclxuICAgIGRlc2NyRGl2LmFwcGVuZENoaWxkKGRlc2NyU3Bhbik7XHJcbiAgICB0b2Rvc0xpc3QuYXBwZW5kQ2hpbGQob3JkZXJlZExpc3QpO1xyXG5cclxuICAgIHJlbmRlclByb2plY3RzVG9kb3NMaXN0KHByb2plY3QpO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiB1cGRhdGVIb21lKCkge1xyXG4vLyAgICAgY29uc3QgdGl0bGUgPSBwcm9qZWN0RGlzcGxheS5xdWVyeVNlbGVjdG9yKCcudGl0bGUgaDEnKTtcclxuLy8gICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvamVjdERpc3BsYXkucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uIHNwYW4nKTtcclxuLy8gfVxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzVG9kb3NMaXN0KHByb2plY3QpIHtcclxuICAgIGNvbnN0IHRvZG9zT2wgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb3Mgb2wnKTtcclxuICAgIHRvZG9zT2wuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IHByb2plY3QudG9kb3NBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBuZXdMaS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXRvZG8nKTtcclxuICAgICAgICBpZiAocHJvamVjdC50b2Rvc0FycmF5W2ldLmNvbXBsZXRlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBuZXdMaS5jbGFzc0xpc3QuYWRkKCd0b2RvLWNvbXBsZXRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXdMaS5pbm5lclRleHQgPSBwcm9qZWN0LnRvZG9zQXJyYXlbaV0udGV4dDtcclxuICAgICAgICB0b2Rvc09sLmFwcGVuZENoaWxkKG5ld0xpKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbkNoZWNrRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBpY29uQ2hlY2tFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLWNoZWNrJyk7XHJcbiAgICAgICAgaWNvbkNoZWNrRWxlbWVudC5kYXRhc2V0LmlkID0gaTtcclxuICAgICAgICBjb25zdCBpY29uWEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgaWNvblhFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ZhLXNvbGlkJywgJ2ZhLXhtYXJrJyk7XHJcbiAgICAgICAgaWNvblhFbGVtZW50LmRhdGFzZXQuaWQgPSBpO1xyXG5cclxuICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChpY29uQ2hlY2tFbGVtZW50KTtcclxuICAgICAgICBuZXdMaS5hcHBlbmRDaGlsZChpY29uWEVsZW1lbnQpO1xyXG5cclxuXHJcbiAgICAgICAgZmFDaGVja1RvZG9CdG4oaWNvbkNoZWNrRWxlbWVudCwgbmV3TGksIHByb2plY3QpO1xyXG4gICAgICAgIGZhWE1hcmtUb2RvQnRuKGljb25YRWxlbWVudCwgcHJvamVjdCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhQ2hlY2tUb2RvQnRuKGljb25FbGVtZW50LCBsaXN0RWxlbWVudCwgcHJvamVjdCkge1xyXG4gICAgaWNvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2plY3QudG9kb3NBcnJheVtwYXJzZUludChpY29uRWxlbWVudC5kYXRhc2V0LmlkKV0uY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zQXJyYXlbcGFyc2VJbnQoaWNvbkVsZW1lbnQuZGF0YXNldC5pZCldLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGxpc3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvZG8tY29tcGxldGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9qZWN0LnRvZG9zQXJyYXlbcGFyc2VJbnQoaWNvbkVsZW1lbnQuZGF0YXNldC5pZCldLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsaXN0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2RvLWNvbXBsZXRlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZhWE1hcmtUb2RvQnRuKGljb25FbGVtZW50LCBwcm9qZWN0KSB7XHJcbiAgICBpY29uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0LnRvZG9zQXJyYXkuc3BsaWNlKHBhcnNlSW50KGljb25FbGVtZW50LmRhdGFzZXQuaWQpLCAxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0KTtcclxuICAgICAgICByZW5kZXJQcm9qZWN0c1RvZG9zTGlzdChwcm9qZWN0KTtcclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHNUb2RvcygpIHtcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgcHJvamVjdHNMaXN0LCB1c2VyUHJvamVjdHMgfSBmcm9tICcuLi9pbmRleC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzTGlzdCgpIHtcclxuICAgIHByb2plY3RzTGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5ld0xpc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICBuZXdMaXN0RWxlbWVudC5kYXRhc2V0LmlkID0gaTtcclxuXHJcbiAgICAgICAgbmV3TGlzdEVsZW1lbnQuaW5uZXJUZXh0ID0gdXNlclByb2plY3RzW2ldLnRpdGxlO1xyXG5cclxuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQobmV3TGlzdEVsZW1lbnQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICcuL2Nzcy9tYWluLmNzcyc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NsYXNzZXMvcHJvamVjdC5qcyc7XHJcbmltcG9ydCB7IFRvZG8gfSBmcm9tICcuL2NsYXNzZXMvdG9kby5qcyc7XHJcbmltcG9ydCB7IHJlZnJlc2hQcm9qZWN0c0xpc3QgfSBmcm9tICcuL2RvbXJlbmRlcmluZy9wcm9qZWN0c0xpc3QuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJIb21lIH0gZnJvbSAnLi9kb21yZW5kZXJpbmcvaG9tZS5qcyc7XHJcbmltcG9ydCB7IG5ld1Byb2plY3RNb2RhbEluaXQgfSBmcm9tICcuL21vZGFscy9uZXdQcm9qZWN0TW9kYWwuanMnO1xyXG5cclxuLy8gRGlzcGxheSBleHBvcnRzXHJcbmV4cG9ydCBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm90dG9tLXBhcnQgdWwnKTtcclxuZXhwb3J0IGNvbnN0IHByb2plY3REaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcclxuXHJcbi8vIFVzZXIgUmVsYXRlZCBFeHBvcnRzXHJcbmV4cG9ydCBjb25zdCB1c2VyUHJvamVjdHMgPSBbXTtcclxuXHJcbi8vIE5ldyBQcm9qZWN0IE1vZGFsXHJcbmV4cG9ydCBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QtbW9kYWwnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsVGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCAjdGl0bGUnKTtcclxuZXhwb3J0IGNvbnN0IG1vZGFsRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsICNkYXRlJyk7XHJcbmV4cG9ydCBjb25zdCBtb2RhbERlc2NySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwgI2Rlc2NyJyk7XHJcbmV4cG9ydCBjb25zdCBtb2RhbE9wZW5DbG9zZUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtb3BlbmNsb3NlJyk7XHJcbmV4cG9ydCBjb25zdCBtb2RhbFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCBidXR0b24nKTtcclxuXHJcblxyXG4vLyBURVNUSU5HIEFSRUFcclxuY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdGaXJzdFByb2onLCAnMTAuMTAuMjAyMicsICdTb21lIGRlc2NyaXB0aW9uJyk7XHJcbnVzZXJQcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5leHBvcnQgY29uc3QgY3VycmVudFByb2plY3QgPSB1c2VyUHJvamVjdHNbMF07XHJcblxyXG5jb25zdCBuZXdUb2RvID0gbmV3IFRvZG8oJ3NvbWUgcmFuZG9tIHRvZG8gdGV4dCcpO1xyXG5jb25zdCBzZWNvbmRUb2RvID0gbmV3IFRvZG8oJ3NlY29uZCB0b2RvJywgdHJ1ZSk7XHJcbi8vIG5ld1RvZG8uY29tcGxldGVkID0gdHJ1ZTtcclxubmV3UHJvamVjdC5hZGRUb2RvKG5ld1RvZG8pO1xyXG5uZXdQcm9qZWN0LmFkZFRvZG8oc2Vjb25kVG9kbyk7XHJcblxyXG5jb25zdCBqc29uU3RyaW5naWZ5ID0gSlNPTi5zdHJpbmdpZnkobmV3UHJvamVjdCk7XHJcbi8vIGNvbnNvbGUubG9nKGpzb25TdHJpbmdpZnkpO1xyXG5cclxubmV3UHJvamVjdE1vZGFsSW5pdCgpO1xyXG5yZWZyZXNoUHJvamVjdHNMaXN0KCk7XHJcbnJlbmRlckhvbWUoY3VycmVudFByb2plY3QpO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgbmV3UHJvamVjdE1vZGFsLFxyXG4gICAgbW9kYWxUaXRsZUlucHV0LFxyXG4gICAgbW9kYWxEYXRlSW5wdXQsXHJcbiAgICBtb2RhbERlc2NySW5wdXQsXHJcbiAgICBtb2RhbE9wZW5DbG9zZUJ0bnMsXHJcbiAgICBtb2RhbFN1Ym1pdCxcclxuICAgIHVzZXJQcm9qZWN0cyxcclxufSBmcm9tICcuLi9pbmRleC5qcyc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9jbGFzc2VzL3Byb2plY3QuanMnO1xyXG5pbXBvcnQgeyByZWZyZXNoUHJvamVjdHNMaXN0IH0gZnJvbSAnLi4vZG9tcmVuZGVyaW5nL3Byb2plY3RzTGlzdC5qcyc7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG5ld1Byb2plY3RNb2RhbEluaXQoKSB7XHJcbiAgICBtb2RhbE9wZW5DbG9zZUJ0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgbmV3UHJvamVjdE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLXZpc2libGUnKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1vZGFsU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChtb2RhbFRpdGxlSW5wdXQudmFsdWUgIT09ICcnICYmIG1vZGFsRGF0ZUlucHV0LnZhbHVlICE9PSAnJyAmJiBtb2RhbERlc2NySW5wdXQudmFsdWUgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIHVzZXJQcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG1vZGFsVGl0bGVJbnB1dC52YWx1ZSwgbW9kYWxEYXRlSW5wdXQudmFsdWUsIG1vZGFsRGVzY3JJbnB1dC52YWx1ZSkpO1xyXG5cclxuICAgICAgICAgICAgbW9kYWxUaXRsZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIG1vZGFsRGF0ZUlucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIG1vZGFsRGVzY3JJbnB1dC52YWx1ZSA9ICcnO1xyXG5cclxuICAgICAgICAgICAgbmV3UHJvamVjdE1vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLXZpc2libGUnKTtcclxuICAgICAgICAgICAgcmVmcmVzaFByb2plY3RzTGlzdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==