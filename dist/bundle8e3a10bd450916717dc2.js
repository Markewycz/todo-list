/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.sidebar {
  height: 100vh;
  width: 100%;
  z-index: 2;
  background-color: #fff;
  box-shadow: 0.5rem 0 0.5rem rgba(0, 0, 0, 0.1);
}
.sidebar-header {
  display: flex;
  justify-content: space-between;
  padding: 2rem 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 0.3rem solid rgb(102, 155, 189);
  margin-bottom: 2rem;
}
.sidebar-header h3 {
  font-size: 2.8rem;
  letter-spacing: 2px;
}
.sidebar-header .action-btns span {
  font-size: 3rem;
}
.sidebar .projects-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.sidebar .projects-list .project {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 4rem;
  border-radius: 3rem;
  box-shadow: 0 0.2rem 0.2rem rgba(119, 119, 119, 0.4);
  color: #303030;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  letter-spacing: 0.1rem;
  cursor: pointer;
  transition: 0.1s all;
}
.sidebar .projects-list .project:active {
  transform: translateY(0.2rem);
  box-shadow: none;
}
.sidebar .projects-list .project-high {
  background-color: #f25c54;
}
.sidebar .projects-list .project-medium {
  background-color: #f7b267;
}
.sidebar .projects-list .project-low {
  background-color: #669bbc;
}
.sidebar .projects-list .project-default {
  background-color: #b1a7a6;
}
.sidebar .projects-list .project:last-child {
  margin-bottom: 20px;
}
.sidebar .projects-list .active {
  transform: translateY(0.2rem);
  box-shadow: none;
}
.sidebar .add-project-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sidebar .add-project-container .add-project {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 4rem;
  border-radius: 3rem;
  box-shadow: none;
  background-color: transparent;
  border: 0.2rem solid #b5b5b5;
  transition: 0.1s all;
}
.sidebar .add-project-container .add-project-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
}
.sidebar .add-project-container .add-project-btn span {
  color: #b5b5b5;
}
.sidebar .add-project-container .add-project:active {
  transform: translateY(0.1rem);
  box-shadow: none;
}

.project-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  gap: 2rem;
  z-index: 2;
}
.project-container .project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  white-space: nowrap;
}
.project-container .project-header p {
  font-size: 4.8rem;
  font-family: "Poppins", sans-serif;
  padding: 2rem 3rem;
}
.project-container .project-header p span {
  font-size: 3.2rem;
}
.project-container .project-header .add-section-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-right: 5rem;
  color: #000;
  font-size: 1.8rem;
  height: max-content;
  border: 0.1rem solid rgb(102, 155, 189);
  border-radius: 2rem;
  box-shadow: 0 0.1rem 0.1rem rgba(102, 155, 189, 0.3);
  transition: 0.1s all;
}
.project-container .project-header .add-section-btn:active {
  transform: translateY(0.1rem);
  box-shadow: none;
}
.project-container .sections-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 380px));
  grid-template-rows: repeat(auto-fill, 480px);
  gap: 6rem;
  padding: 0 6rem;
}
.project-container .sections-container .section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 2rem;
  padding: 2rem 4rem;
  border-radius: 20px;
  box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.1);
  background-color: #fff;
}
.project-container .sections-container .section .section-header {
  display: flex;
  justify-content: space-between;
  font-size: 2.8rem;
}
.project-container .sections-container .section .section-header .action-btns {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-container .sections-container .section .section-header .action-btns button {
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-container .sections-container .section .section-header .action-btns button span {
  font-size: 2.7rem;
}
.project-container .sections-container .section .section-content {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}
.project-container .sections-container .section .section-content .todo-item {
  position: relative;
}
.project-container .sections-container .section .section-content .todo-item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 100%;
  border-top-left-radius: 9px;
  border-bottom-left-radius: 9px;
}
.project-container .sections-container .section .section-content .high::before {
  background-color: #f25c54;
}
.project-container .sections-container .section .section-content .medium::before {
  background-color: #f7b267;
}
.project-container .sections-container .section .section-content .low::before {
  background-color: #669bbc;
}
.project-container .sections-container .section .section-content .default::before {
  background-color: #b1a7a6;
}
.project-container .sections-container .section .todo-item {
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
  width: 100%;
  min-height: 45px;
  border: 0.1rem solid #b5b5b5;
  border-radius: 10px;
  cursor: pointer;
}
.project-container .sections-container .section .add-todo {
  cursor: text;
  position: relative;
  padding-left: 1rem;
}
.project-container .sections-container .section .add-todo .placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}
.project-container .sections-container .section .add-todo .placeholder span {
  color: #b5b5b5;
}
.project-container .sections-container .section .add-todo input {
  width: 100%;
  height: 100%;
  z-index: 3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
  font-family: "Roboto", sans-serif;
}

body {
  font-size: 1.6rem;
  overflow-y: hidden;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
}

input {
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
}

.content {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
  display: grid;
  grid-template-columns: 285px 1fr;
}

#waveImage {
  position: absolute;
  bottom: 0;
  width: 100vw;
}`, "",{"version":3,"sources":["webpack://./src/styles/sidebar.scss","webpack://./src/styles/_config.scss","webpack://./src/styles/main.scss","webpack://./src/styles/project-content.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"config\";\r\n\r\n.sidebar {\r\n  height: 100vh;\r\n  width: 100%;\r\n  z-index: 2;\r\n  background-color: $white;\r\n\r\n  box-shadow: 0.5rem 0 0.5rem rgba(0, 0, 0, 0.1);\r\n\r\n  &-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 2rem 1.5rem;\r\n    padding-bottom: 0.5rem;\r\n    border-bottom: 0.3rem solid $primary-color;\r\n    margin-bottom: 2rem;\r\n\r\n    h3 {\r\n      font-size: 2.8rem;\r\n      letter-spacing: 2px;\r\n    }\r\n\r\n    .action-btns span {\r\n      font-size: 3rem;\r\n    }\r\n  }\r\n\r\n  .projects-list {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2rem;\r\n\r\n    .project {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 75%;\r\n      height: 4rem;\r\n      border-radius: 3rem;\r\n\r\n      box-shadow: 0 0.2rem 0.2rem rgba(119, 119, 119, 0.4);\r\n      color: $font-color-primary;\r\n      font-family: $font-stack-secondary;\r\n      font-weight: 500;\r\n      letter-spacing: 0.1rem;\r\n      cursor: pointer;\r\n      transition: 0.1s all;\r\n\r\n      &:active {\r\n        transform: translateY(0.2rem);\r\n        box-shadow: none;\r\n      }\r\n\r\n      &-high {\r\n        background-color: $importance-high-color;\r\n      }\r\n      &-medium {\r\n        background-color: $importance-medium-color;\r\n      }\r\n      &-low {\r\n        background-color: $importance-low-color;\r\n      }\r\n      &-default {\r\n        background-color: $importance-default-color;\r\n      }\r\n\r\n      &:last-child {\r\n        margin-bottom: 20px;\r\n      }\r\n    }\r\n\r\n    .active {\r\n      transform: translateY(0.2rem);\r\n      box-shadow: none;\r\n    }\r\n  }\r\n  .add-project-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    // margin-top: 2rem;\r\n\r\n    .add-project {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      width: 75%;\r\n      height: 4rem;\r\n      border-radius: 3rem;\r\n      box-shadow: none;\r\n      background-color: transparent;\r\n      border: 0.2rem solid $grey-color;\r\n      transition: 0.1s all;\r\n\r\n      &-btn {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        width: 100%;\r\n        padding: 0.5rem;\r\n\r\n        span {\r\n          color: $grey-color;\r\n        }\r\n      }\r\n      &:active {\r\n        transform: translateY(0.1rem);\r\n        box-shadow: none;\r\n      }\r\n    }\r\n  }\r\n}\r\n","$primary-color: rgb(102, 155, 189);\r\n$secondary-color: #545454;\r\n\r\n$white: #fff;\r\n$black: #000;\r\n$grey-color: #b5b5b5;\r\n\r\n$background-color: #f6f6f6;\r\n\r\n$importance-high-color: #f25c54;\r\n$importance-medium-color: #f7b267;\r\n$importance-low-color: #669bbc;\r\n$importance-default-color: #b1a7a6;\r\n\r\n$font-stack-primary: \"Roboto\", sans-serif;\r\n$font-stack-secondary: \"Poppins\", sans-serif;\r\n$font-color-primary: #303030;\r\n$font-color-secondary: #545454;\r\n$font-size: 10px;\r\n","@import \"config\";\r\n@import \"sidebar\";\r\n@import \"project-content\";\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\nhtml {\r\n  font-size: $font-size;\r\n  font-family: $font-stack-primary;\r\n}\r\n\r\nbody {\r\n  font-size: 1.6rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\nbutton {\r\n  cursor: pointer;\r\n  border: none;\r\n  outline: none;\r\n  background-color: transparent;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n  border: none;\r\n  background-color: transparent;\r\n  font-size: 1.6rem;\r\n}\r\n\r\n.content {\r\n  width: 100%;\r\n  height: 100vh;\r\n  background-color: $background-color;\r\n\r\n  display: grid;\r\n  grid-template-columns: 285px 1fr;\r\n}\r\n\r\n#waveImage {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100vw;\r\n}\r\n","@import \"config\";\r\n\r\n.project-container {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: auto 1fr;\r\n  gap: 2rem;\r\n  z-index: 2;\r\n\r\n  .project-header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 2rem 1.5rem;\r\n    white-space: nowrap;\r\n\r\n    p {\r\n      font-size: 4.8rem;\r\n      font-family: $font-stack-secondary;\r\n      padding: 2rem 3rem;\r\n\r\n      span {\r\n        font-size: 3.2rem;\r\n      }\r\n    }\r\n\r\n    .add-section-btn {\r\n      display: flex;\r\n      justify-content: center;\r\n      align-items: center;\r\n      padding: 0.5rem 1rem;\r\n      margin-right: 5rem;\r\n\r\n      color: $black;\r\n      font-size: 1.8rem;\r\n      height: max-content;\r\n      border: 0.1rem solid rgba(102, 155, 189, 1);\r\n      border-radius: 2rem;\r\n      box-shadow: 0 0.1rem 0.1rem rgba(102, 155, 189, 0.3);\r\n      transition: 0.1s all;\r\n\r\n      &:active {\r\n        transform: translateY(0.1rem);\r\n        box-shadow: none;\r\n      }\r\n    }\r\n  }\r\n\r\n  .sections-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(300px, 380px));\r\n    grid-template-rows: repeat(auto-fill, 480px);\r\n    // justify-content: center;\r\n\r\n    gap: 6rem;\r\n    padding: 0 6rem;\r\n\r\n    .section {\r\n      display: grid;\r\n      grid-template-columns: 1fr;\r\n      grid-template-rows: auto 1fr auto;\r\n      gap: 2rem;\r\n      padding: 2rem 4rem;\r\n      border-radius: 20px;\r\n\r\n      box-shadow: 0 0.3rem 0.3rem 0 rgba(0, 0, 0, 0.1);\r\n      background-color: $white;\r\n\r\n      .section-header {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        font-size: 2.8rem;\r\n\r\n        .action-btns {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n\r\n          button {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n\r\n            span {\r\n              font-size: 2.7rem;\r\n            }\r\n          }\r\n        }\r\n      }\r\n\r\n      .section-content {\r\n        display: flex;\r\n        flex-direction: column;\r\n        gap: 2rem;\r\n        overflow-y: auto;\r\n\r\n        .todo-item {\r\n          position: relative;\r\n        }\r\n\r\n        .todo-item::before {\r\n          content: \"\";\r\n          position: absolute;\r\n          top: 0;\r\n          left: 0;\r\n          width: 15px;\r\n          height: 100%;\r\n          border-top-left-radius: 9px;\r\n          border-bottom-left-radius: 9px;\r\n        }\r\n\r\n        .high::before {\r\n          background-color: $importance-high-color;\r\n        }\r\n        .medium::before {\r\n          background-color: $importance-medium-color;\r\n        }\r\n        .low::before {\r\n          background-color: $importance-low-color;\r\n        }\r\n        .default::before {\r\n          background-color: $importance-default-color;\r\n        }\r\n      }\r\n\r\n      .todo-item {\r\n        display: flex;\r\n        align-items: center;\r\n\r\n        padding-left: 2.5rem;\r\n        width: 100%;\r\n        min-height: 45px;\r\n        border: 0.1rem solid $grey-color;\r\n        border-radius: 10px;\r\n        cursor: pointer;\r\n      }\r\n\r\n      .add-todo {\r\n        cursor: text;\r\n        position: relative;\r\n        padding-left: 1rem;\r\n\r\n        .placeholder {\r\n          display: flex;\r\n          justify-content: center;\r\n          align-items: center;\r\n          position: absolute;\r\n\r\n          span {\r\n            color: $grey-color;\r\n          }\r\n        }\r\n\r\n        input {\r\n          width: 100%;\r\n          height: 100%;\r\n          z-index: 3;\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/app/controller/todoController.js":
/*!**********************************************!*\
  !*** ./src/app/controller/todoController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_todoView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/todoView */ "./src/app/views/todoView.js");
/* harmony import */ var _model_todoModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/todoModel */ "./src/app/model/todoModel.js");
/* harmony import */ var _views_initialPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/initialPage */ "./src/app/views/initialPage.js");



const content = document.querySelector(".content");

class Controller {
  constructor(view) {
    this.view = view;
  }

  appendProjectList(projectList) {
    this.view.showList(projectList);
  }

  appendProject(project) {
    this.view.renderProject(project);
    this.view.renderTasks(project);
  }
}

const initPage = new _views_initialPage__WEBPACK_IMPORTED_MODULE_2__["default"]();
const myApp = new _model_todoModel__WEBPACK_IMPORTED_MODULE_1__.App();
const view = new _views_todoView__WEBPACK_IMPORTED_MODULE_0__["default"](content);
const controller = new Controller(view);

const project1 = myApp.createProject("Tic-Tac-Toe");
const project2 = myApp.createProject("Todo App");

const project1Section1 = project1.createSection("Design");
const project1Section2 = project1.createSection("Logic");

const project2Section1 = project2.createSection("Logic");

const project1Section1Task1 = project1Section1.createTask(
  "Change height of header"
);
const project1Section1Task2 = project1Section2.createTask("Render buttons");
// console.log(project1);

initPage.renderPage();

controller.appendProjectList(myApp.getProjects());
controller.appendProject(myApp.getProjects()[0]);

// console.log(myApp.getProjects()[0]);


/***/ }),

/***/ "./src/app/helperFunctions.js":
/*!************************************!*\
  !*** ./src/app/helperFunctions.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function elementFromHtml(html) {
  const template = document.createElement("template");

  template.innerHTML = html.trim();

  return template.content;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (elementFromHtml);


/***/ }),

/***/ "./src/app/model/todoModel.js":
/*!************************************!*\
  !*** ./src/app/model/todoModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App),
/* harmony export */   Project: () => (/* binding */ Project),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   Tasks: () => (/* binding */ Tasks)
/* harmony export */ });
class App {
  constructor() {
    this.projects = [];
  }

  createProject(name) {
    const project = new Project(name);
    this.projects.push(project);

    return project;
  }
  getProjects() {
    return this.projects;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.sections = [];
  }

  createSection(name) {
    const section = new Section(name);
    this.sections.push(section);

    return section;
  }

  getSections() {
    return this.sections;
  }
}

class Section {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  createTask(name) {
    const task = new Tasks(name);
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

class Tasks {
  constructor(name) {
    this.name = name;
  }
}




/***/ }),

/***/ "./src/app/views/initialPage.js":
/*!**************************************!*\
  !*** ./src/app/views/initialPage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_assets_images_wave_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../src/assets/images/wave.svg */ "./src/assets/images/wave.svg");
/* harmony import */ var _src_app_helperFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../src/app/helperFunctions */ "./src/app/helperFunctions.js");



class InitPage {
  renderPage() {
    const content = document.querySelector(".content");
    const initialPage = (0,_src_app_helperFunctions__WEBPACK_IMPORTED_MODULE_1__["default"])(`
    <aside class="sidebar">
      <div class="sidebar-header">
        <h3>Projects</h3>
        <div class="action-btns">
          <button>
            <span class="material-symbols-outlined"> sort </span>
          </button>
          <button>
            <span class="material-symbols-outlined"> left_panel_close </span>
          </button>
        </div>
      </div>
        <div class="projects-list">
        </div>
        <div class="add-project-container">
          <div class="add-project">
            <button class="add-project-btn">
              <span class="material-symbols-outlined"> add_circle </span>
            </button>
          </div>
        </div>
    </aside>
    <div class="project-container">
      <div class="project-header">
        <p>
          Todo App
          <button>
            <span class="material-symbols-outlined"> edit </span>
          </button>
          <button>
            <span class="material-symbols-outlined"> delete </span>
          </button>
        </p>
        <button class="add-section-btn">
          <span class="material-symbols-outlined"> add </span>
          <span>Add Section</span>
        </button>
      </div>
      <div class="sections-container"></div>
    </div>
    <object id="waveImage" type="image/svg+xml"></object>
  `);

    content.append(initialPage);

    const waveImg = document.getElementById("waveImage");
    waveImg.data = _src_assets_images_wave_svg__WEBPACK_IMPORTED_MODULE_0__;
    content.append(waveImg);
  }
}

/* SECTION DESIGN
<div class="section">
        <div class="section-header">
          <p>Design</p>
          <div class="action-btns">
            <button>
              <span class="material-symbols-outlined"> sort </span>
            </button>
            <button>
              <span class="material-symbols-outlined"> edit </span>
            </button>
            <button>
              <span class="material-symbols-outlined"> delete </span>
            </button>
          </div>
        </div>
        <div class="section-content">
          <div class="todo-item high">
            <p>Edit button color</p>
          </div>
          <div class="todo-item low">
            <p>Change font stack</p>
          </div>
          <div class="todo-item medium">
            <p>Modify navigation bar</p>
          </div>
          <div class="todo-item default">
            <p>Polish gaps</p>
          </div>
        </div>
        <div class="todo-item add-todo">
          <input type="text" class="add-todo-input" />
          <div class="placeholder">
            <span class="material-symbols-outlined"> add </span>
            <span>Add task</span>
          </div>
        </div>
      </div>
*/

/* 
<aside class="sidebar">
    <div class="sidebar-header">
      <h3>Projects</h3>
      <div class="action-btns">
        <button>
          <span class="material-symbols-outlined"> sort </span>
        </button>
        <button>
          <span class="material-symbols-outlined"> left_panel_close </span>
        </button>
      </div>
    </div>
    <div class="projects-list">
      <div class="project project-default">
        <!-- SET MAX CHAR TITLE -->
        <p>Todo App</p>
      </div>
      <div class="project add-project">
        <button class="add-project-btn">
          <span class="material-symbols-outlined"> add_circle </span>
        </button>
      </div>
    </div>
  </aside>




  <div class="project-container">
    <div class="project-header">
      <p>
        Todo App
        <button>
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button>
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </p>
      <button class="add-section-btn">
        <span class="material-symbols-outlined"> add </span>
        <span>Add Section</span>
      </button>
    </div>
    <div class="sections-container">
    <div class="section">
    <div class="section-header">
      <p>Design</p>
      <div class="action-btns">
        <button>
          <span class="material-symbols-outlined"> sort </span>
        </button>
        <button>
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button>
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </div>
    </div>
    <div class="section-content">
    </div>
  </div>
  <object id="waveImage" type="image/svg+xml"></object>
*/

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InitPage);


/***/ }),

/***/ "./src/app/views/todoView.js":
/*!***********************************!*\
  !*** ./src/app/views/todoView.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helperFunctions */ "./src/app/helperFunctions.js");


class View {
  constructor(container) {
    this.container = container;
  }
  showList(projectsList) {
    let projectNames = [];
    for (let i = 0; i < projectsList.length; i++) {
      const projectItem = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(`
      <div class="project project-default">
          <p>${projectsList[i].name}</p>
        </div>
      `);

      projectNames.push(projectItem);
    }

    projectNames.forEach((element) => {
      this.container.childNodes[0].childNodes[3].append(element);
    });
  }

  renderProject(project) {
    let projectSections = [];

    for (let i = 0; i < project.sections.length; i++) {
      const projectSection = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(`
      <div class="section">
        <div class="section-header">
          <p>${project.sections[i].name}</p>
          <div class="action-btns">
            <button>
              <span class="material-symbols-outlined"> sort </span>
            </button>
            <button>
              <span class="material-symbols-outlined"> edit </span>
            </button>
            <button>
              <span class="material-symbols-outlined"> delete </span>
            </button>
          </div>
        </div>
        <div class="section-content"></div>
        <div class="todo-item add-todo">
          <input type="text" class="add-todo-input" />
          <div class="placeholder">
            <span class="material-symbols-outlined"> add </span>
            <span>Add task</span>
          </div>
        </div>
      </div>
      `);
      projectSections.push(projectSection);
    }

    projectSections.forEach((section) => {
      this.container.childNodes[2].childNodes[3].append(section);
    });
  }

  renderTasks(project) {
    let tasks = [];
    for (let i = 0; i < project.sections.length; i++) {
      for (let y = 0; y < project.sections[i].tasks.length; y++) {
        const task = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_0__["default"])(`
          <div class="todo-item high">
              <p>${project.sections[i].tasks[y].name}</p>
            </div>
          `);
        tasks.push(task);
      }

      tasks.forEach((task) => {
        this.container.childNodes[2].childNodes[3].childNodes[
          i
        ].childNodes[3].append(task);
      });
    }
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (View);


/***/ }),

/***/ "./src/assets/images/wave.svg":
/*!************************************!*\
  !*** ./src/assets/images/wave.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/wave.svg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _app_views_initialPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/views/initialPage */ "./src/app/views/initialPage.js");
/* harmony import */ var _app_controller_todoController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/controller/todoController */ "./src/app/controller/todoController.js");




})();

/******/ })()
;
//# sourceMappingURL=bundle8e3a10bd450916717dc2.js.map