/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/Project.js":
/*!**********************************!*\
  !*** ./src/assets/js/Project.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Project = /*#__PURE__*/function () {
  function Project(title) {
    _classCallCheck(this, Project);
    this.title = title;
    this.tasks = [];
  }
  _createClass(Project, [{
    key: "addTask",
    value: function addTask(task) {
      this.tasks.push(task);
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      return this.tasks;
    }
  }, {
    key: "getTask",
    value: function getTask() {
      return this.tasks[this.tasks.length - 1];
    }
  }]);
  return Project;
}();


/***/ }),

/***/ "./src/assets/js/Storage.js":
/*!**********************************!*\
  !*** ./src/assets/js/Storage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _ToDoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToDoList */ "./src/assets/js/ToDoList.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/assets/js/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/assets/js/Task.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);
    this.todoList = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  _createClass(Storage, [{
    key: "saveTodoList",
    value: function saveTodoList() {
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
    }
  }, {
    key: "loadTodoList",
    value: function loadTodoList() {
      var storedData = JSON.parse(localStorage.getItem('todoList'));
      if (storedData) {
        this.todoList = this.deserializeTodoList(storedData);
      }
    }
  }, {
    key: "deserializeTodoList",
    value: function deserializeTodoList(data) {
      var deserializedList = new _ToDoList__WEBPACK_IMPORTED_MODULE_0__["default"]();
      data.projects.forEach(function (projectData) {
        var project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](projectData.title);
        projectData.tasks.forEach(function (taskData) {
          project.addTask(new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](taskData.title, taskData.completed));
        });
        deserializedList.addProject(project);
      });
      return deserializedList;
    }
  }, {
    key: "addDefaultProject",
    value: function addDefaultProject() {
      if (!this.todoList.getProject('Todo List')) {
        var project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"]('Todo List');
        this.todoList.addProject(project);
        this.saveTodoList();
      }
    }
  }, {
    key: "addProject",
    value: function addProject(title) {
      var projectExist = this.todoList.getProjects().some(function (project) {
        return project.title === title;
      });
      if (!projectExist) {
        var project = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](title);
        this.todoList.addProject(project);
        this.saveTodoList();
      } else {
        alert('Name already exists');
        return true;
      }
    }
  }, {
    key: "addTask",
    value: function addTask(project, taskTitle) {
      var task = new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](taskTitle);
      this.todoList.addTaskToProject(project, task);
      this.saveTodoList();
      return task;
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(projectTitle) {
      this.todoList.deleteProject(projectTitle);
      this.saveTodoList();
    }
  }, {
    key: "getProjects",
    value: function getProjects() {
      return this.todoList.getProjects();
    }
  }, {
    key: "getTasks",
    value: function getTasks() {
      return this.todoList.getTasks();
    }
  }, {
    key: "getProject",
    value: function getProject(projectTitle) {
      return this.todoList.getProject(projectTitle);
    }
  }, {
    key: "getTask",
    value: function getTask(project) {
      return this.todoList.getTask(project);
    }
  }]);
  return Storage;
}();


/***/ }),

/***/ "./src/assets/js/Task.js":
/*!*******************************!*\
  !*** ./src/assets/js/Task.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Task = /*#__PURE__*/function () {
  function Task(title) {
    var completed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    _classCallCheck(this, Task);
    this.title = title;
    this.completed = completed;
  }
  _createClass(Task, [{
    key: "complete",
    value: function complete() {
      this.completed = true;
    }
  }]);
  return Task;
}();


/***/ }),

/***/ "./src/assets/js/ToDoList.js":
/*!***********************************!*\
  !*** ./src/assets/js/ToDoList.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var TodoList = /*#__PURE__*/function () {
  function TodoList() {
    _classCallCheck(this, TodoList);
    this.projects = [];
  }
  _createClass(TodoList, [{
    key: "addProject",
    value: function addProject(project) {
      this.projects.push(project);
    }
  }, {
    key: "addTaskToProject",
    value: function addTaskToProject(project, task) {
      project.addTask(task);
    }
  }, {
    key: "completeTask",
    value: function completeTask(task) {
      task.complete();
    }
  }, {
    key: "deleteProject",
    value: function deleteProject(projectTitle) {
      for (var i = 0; i < this.projects.length; i++) {
        if (this.projects[i].title === projectTitle) {
          this.projects.splice(i, 1);
        }
      }
    }
  }, {
    key: "getProjects",
    value: function getProjects() {
      return this.projects;
    }
  }, {
    key: "getProject",
    value: function getProject(projectTitle) {
      return this.projects.find(function (project) {
        return project.title === projectTitle;
      });
    }
  }, {
    key: "getTask",
    value: function getTask(project) {
      return project.getTask();
    }
  }]);
  return TodoList;
}();


/***/ }),

/***/ "./src/assets/js/Ui.js":
/*!*****************************!*\
  !*** ./src/assets/js/Ui.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/assets/js/Storage.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var UI = /*#__PURE__*/function () {
  function UI(storage) {
    _classCallCheck(this, UI);
    this.storage = storage;
  }
  _createClass(UI, [{
    key: "loadHomepage",
    value: function loadHomepage() {
      this.storage.loadTodoList();
      this.createDefaultProject();
      this.loadProjects();
      this.previewDefaultProject();
      this.initButtons();
    }
  }, {
    key: "createDefaultProject",
    value: function createDefaultProject() {
      this.storage.addDefaultProject();
    }
  }, {
    key: "previewDefaultProject",
    value: function previewDefaultProject() {
      var defaultProject = this.storage.getProject('Todo List');
      document.querySelector('.nav__projects').children[0].classList.add('selected');
      this.previewProject(defaultProject);
    }
  }, {
    key: "createProject",
    value: function createProject(projectTitle) {
      document.querySelector('.nav__projects').innerHTML += "\n    <button type=\"button\" class=\"button project\" data-project>\n    <span class=\"wrapper\">\n      <span class=\"material-symbols-outlined\">\n        checklist\n      </span>\n      <span class=\"project-name\">".concat(projectTitle, "</span>\n    </span>\n    <span class=\"material-symbols-outlined deleteProject\">\n      delete\n    </span>\n  </button>");
    }
  }, {
    key: "createTask",
    value: function createTask(task) {
      document.querySelector('.project-preview__tasks').innerHTML += "\n      <button class=\"button task\">\n        <span class=\"material-symbols-outlined\"> circle </span>\n        <span class=\"task-name\">".concat(task.title, "</span>\n      </button>");
    }
  }, {
    key: "previewProject",
    value: function previewProject(project) {
      var _this = this;
      document.querySelector('.project-preview__title').textContent = project.title;
      this.clearPreviewProject();
      project.getTasks().forEach(function (task) {
        _this.createTask(task);
      });
    }
  }, {
    key: "clearPreviewProject",
    value: function clearPreviewProject() {
      document.querySelector('.project-preview__tasks').innerHTML = '';
    }
  }, {
    key: "clearProjectList",
    value: function clearProjectList() {
      document.querySelector('.nav__projects').innerHTML = '';
    }
  }, {
    key: "addProject",
    value: function addProject() {
      var projectName = document.getElementById('projectName').value;
      if (this.storage.addProject(projectName)) return;
      this.createProject(projectName);
      this.selectCreatedProject();
      this.closeModalProject();
    }
  }, {
    key: "addTask",
    value: function addTask() {
      var taskName = document.getElementById('taskName').value;
      var selectedProject = this.storage.getProject(document.querySelector('.selected').children[0].children[1].textContent);
      this.storage.addTask(selectedProject, taskName);
      this.createTask(this.storage.getTask(selectedProject));
      this.closeModalTask();
    }
  }, {
    key: "deleteProject",
    value: function deleteProject() {
      var selectedProject = document.querySelector('.selected').children[0].children[1].textContent;
      this.storage.deleteProject(selectedProject);
      this.clearProjectList();
      this.loadProjects();
      this.selectFirstProject();
      this.closeModalDelete();
    }
  }, {
    key: "loadProjects",
    value: function loadProjects() {
      var _this2 = this;
      var projects = this.storage.getProjects();
      projects.forEach(function (project) {
        _this2.createProject(project.title);
      });
    }
  }, {
    key: "selectCreatedProject",
    value: function selectCreatedProject() {
      this.previewProject(this.storage.getProjects()[this.storage.getProjects().length - 1]);
      document.querySelectorAll('[data-project]').forEach(function (project) {
        return project.classList.remove('selected');
      });
      document.querySelector('.nav__projects').lastChild.classList.add('selected');
    }
  }, {
    key: "selectFirstProject",
    value: function selectFirstProject() {
      this.previewProject(this.storage.getProjects()[0]);
      document.querySelector('.nav__projects').children[0].firstChild.classList.add('selected');
    }

    // Event listeners
  }, {
    key: "openModalProject",
    value: function openModalProject() {
      var modalProject = document.querySelector("[data-modal='addProject']");
      modalProject.showModal();
    }
  }, {
    key: "closeModalProject",
    value: function closeModalProject() {
      var modalProject = document.querySelector("[data-modal='addProject']");
      modalProject.close();
    }
  }, {
    key: "openModalTask",
    value: function openModalTask() {
      var modalTask = document.querySelector("[data-modal='addTask']");
      modalTask.showModal();
    }
  }, {
    key: "closeModalTask",
    value: function closeModalTask() {
      var modalTask = document.querySelector("[data-modal='addTask']");
      modalTask.close();
    }
  }, {
    key: "openModalDelete",
    value: function openModalDelete() {
      var modalDelete = document.querySelector("[data-modal='deleteProject']");
      modalDelete.showModal();
    }
  }, {
    key: "closeModalDelete",
    value: function closeModalDelete() {
      var modalDelete = document.querySelector("[data-modal='deleteProject']");
      modalDelete.close();
    }
  }, {
    key: "initButtons",
    value: function initButtons() {
      var _this3 = this;
      var addProject = document.getElementById('addProject');
      var addTask = document.getElementById('addTask');
      var addProjects = document.getElementById('addProjects');
      var cancelProject = document.getElementById('cancelProject');
      var addTasks = document.getElementById('addTasks');
      var cancelTask = document.getElementById('cancelTask');
      var projectsListContainer = document.querySelector('.nav__projects');
      var cancelDelete = document.getElementById('deleteProjectCancel');
      var deleteProject = document.getElementById('deleteProject');
      projectsListContainer.addEventListener('click', function (e) {
        var btn = e.target.closest('button');
        var projectTitle = btn.children[0].children[1].textContent;
        var deleteBtn = document.querySelectorAll('.deleteProject');
        deleteBtn.forEach(function (btn) {
          if (e.target === btn) {
            btn.addEventListener('click', _this3.openModalDelete);
          }
        });
        if (btn.dataset.hasOwnProperty('project')) {
          _this3.previewProject(_this3.storage.getProject(projectTitle));
          document.querySelectorAll('[data-project]').forEach(function (project) {
            project.classList.remove('selected');
          });
          btn.classList.add('selected');
        }
      });
      addProject.addEventListener('click', this.addProject.bind(this));
      addTask.addEventListener('click', this.addTask.bind(this));
      deleteProject.addEventListener('click', this.deleteProject.bind(this));
      addProjects.addEventListener('click', this.openModalProject);
      cancelProject.addEventListener('click', this.closeModalProject);
      addTasks.addEventListener('click', this.openModalTask);
      cancelTask.addEventListener('click', this.closeModalTask);
      cancelDelete.addEventListener('click', this.closeModalDelete);
    }
  }]);
  return UI;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss ***!
  \****************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}

button {
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

input {
  border: none;
  outline: none;
  background-color: transparent;
}

dialog {
  border: none;
}

.visually-hidden {
  clip: rect(1px, 1px, 1px, 1px) !important;
  -webkit-clip-path: inset(50%) !important;
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  padding: 0 !important;
  overflow: hidden !important;
  border: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(50%) !important;
}

.text-center {
  text-align: center;
}

.button {
  padding: 6px;
  display: flex;
  align-items: center;
  border-radius: 2px;
}
.button:hover {
  background-color: #001f3f;
  color: #fff;
}

.modal {
  width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}
.modal > h2 {
  border-bottom: 1px solid rgb(0, 31, 63);
  padding: 16px;
}
.modal input {
  border: 1px solid black;
  padding: 6px;
}
.modal__content {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
}
.modal__buttons {
  display: flex;
  width: 100%;
  gap: 16px;
}
.modal__buttons .add,
.modal__buttons .cancel {
  width: 50%;
  justify-content: center;
  border: 1px solid transparent;
}
.modal__buttons .add {
  background-color: #001f3f;
  color: #fff;
}
.modal__buttons .cancel {
  color: #000;
  background-color: #fff;
  border: 1px solid black;
}
.modal__buttons .cancel:hover {
  color: #000;
  background-color: #fff;
}

.content {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr;
  width: 100%;
  background-color: #e2e8f0;
}

.header {
  display: flex;
  z-index: 2;
  align-items: center;
  height: 88px;
  padding: 16px 32px;
  background-color: #001f3f;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);
  color: #fff;
}
.header__title {
  font-style: italic;
  font-size: 44px;
  text-transform: uppercase;
}

.main {
  display: grid;
  grid-template-columns: auto 1fr;
  height: calc(100vh - 88px);
}

.nav {
  display: flex;
  flex-direction: column;
  background-color: #d8e2f1;
  padding: 12px;
  width: 240px;
  gap: 16px;
}
.nav__user-projects, .nav__projects {
  display: flex;
  flex-direction: column;
}
.nav__user-projects {
  gap: 12px;
}
.nav__user-projects .project {
  gap: 6px;
  justify-content: space-between;
}
.nav__user-projects .project > .deleteProject {
  display: none;
}
.nav__user-projects .project.selected {
  font-weight: 700;
  background-color: #001f3f;
  color: #fff;
}
.nav__user-projects .project.selected .deleteProject {
  display: block;
}
.nav__user-projects .project.selected .deleteProject:hover {
  background-color: rgba(255, 255, 255, 0.3);
}
.nav__user-projects .project .wrapper {
  display: flex;
  align-items: center;
  gap: 6px;
}
.nav__projects {
  gap: 4px;
}
.nav .button.add-project {
  padding: 4px;
}
.nav__add-project {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.nav__add-project .project-name-input {
  border: 1px solid black;
  padding: 6px;
  width: 100%;
}
.nav__add-project-buttons {
  display: flex;
  width: 100%;
  gap: 4px;
}
.nav__add-project-buttons .add,
.nav__add-project-buttons .cancel {
  border: 1px solid black;
  width: 50%;
  justify-content: center;
}

.project-preview {
  display: flex;
  flex-direction: column;
  width: 900px;
  padding: 30px;
  margin: 0 auto;
  gap: 24px;
}
.project-preview__tasks {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.project-preview__tasks .task {
  width: 100%;
  gap: 8px;
}`, "",{"version":3,"sources":["webpack://./src/assets/sass/_general.scss","webpack://./src/assets/sass/main.scss","webpack://./src/assets/sass/_variables.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EACA,SAAA;EACA,UAAA;ACCF;;ADCA;EACE,eAAA;EACA,iCEOmB;ADLrB;;ADCA;EACE,YAAA;EACA,aAAA;EACA,6BAAA;EACA,eAAA;ACEF;;ADCA;EACE,YAAA;EACA,aAAA;EACA,6BAAA;ACEF;;ADCA;EACE,YAAA;ACEF;;ADCA;EACE,yCAAA;EACA,wCAAA;EACA,6BAAA;EACA,qBAAA;EACA,sBAAA;EACA,uBAAA;EACA,qBAAA;EACA,2BAAA;EACA,oBAAA;EACA,8BAAA;EACA,gCAAA;ACEF;;AArCA;EACE,kBAAA;AAwCF;;AArCA;EACE,YAAA;EACA,aAAA;EACA,mBAAA;EACA,kBAAA;AAwCF;AArCE;EACE,yBAAA;EACA,WAAA;AAuCJ;;AAlCA;EACE,YAAA;EACA,QAAA;EACA,SAAA;EACA,gCAAA;EACA,oCAAA;EACA,kBAAA;AAqCF;AAnCE;EACE,uCAAA;EACA,aAAA;AAqCJ;AAlCE;EACE,uBAAA;EACA,YAAA;AAoCJ;AAjCE;EACE,aAAA;EACA,sBAAA;EACA,aAAA;EACA,QAAA;AAmCJ;AAhCE;EACE,aAAA;EACA,WAAA;EACA,SAAA;AAkCJ;AAhCI;;EAEE,UAAA;EACA,uBAAA;EACA,6BAAA;AAkCN;AA/BI;EACE,yBAAA;EACA,WAAA;AAiCN;AA9BI;EACE,WAAA;EACA,sBAAA;EACA,uBAAA;AAgCN;AA9BM;EACE,WAAA;EACA,sBAAA;AAgCR;;AA1BA;EACE,aAAA;EACA,4BAAA;EACA,0BAAA;EACA,WAAA;EACA,yBAAA;AA6BF;;AAzBA;EACE,aAAA;EACA,UAAA;EACA,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,wCAAA;EACA,WAAA;AA4BF;AA1BE;EACE,kBAAA;EACA,eAAA;EACA,yBAAA;AA4BJ;;AAxBA;EACE,aAAA;EACA,+BAAA;EACA,0BAAA;AA2BF;;AAxBA;EACE,aAAA;EACA,sBAAA;EACA,yBAAA;EACA,aAAA;EACA,YAAA;EACA,SAAA;AA2BF;AAzBE;EAEE,aAAA;EACA,sBAAA;AA0BJ;AAvBE;EACE,SAAA;AAyBJ;AAvBI;EACE,QAAA;EACA,8BAAA;AAyBN;AAvBM;EACE,aAAA;AAyBR;AAtBM;EACE,gBAAA;EACA,yBAAA;EACA,WAAA;AAwBR;AAtBQ;EACE,cAAA;AAwBV;AAtBU;EACE,0CAAA;AAwBZ;AAnBM;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AAqBR;AAdE;EACE,QAAA;AAgBJ;AAZE;EACE,YAAA;AAcJ;AAXE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAaJ;AAXI;EACE,uBAAA;EACA,YAAA;EACA,WAAA;AAaN;AAVI;EACE,aAAA;EACA,WAAA;EACA,QAAA;AAYN;AAVM;;EAEE,uBAAA;EACA,UAAA;EACA,uBAAA;AAYR;;AALA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,aAAA;EACA,cAAA;EACA,SAAA;AAQF;AAIE;EACE,aAAA;EACA,sBAAA;EACA,QAAA;AAFJ;AAII;EACE,WAAA;EACA,QAAA;AAFN","sourcesContent":["* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  font-size: 16px;\n  font-family: $font-stack-primary;\n}\n\nbutton {\n  border: none;\n  outline: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\ninput {\n  border: none;\n  outline: none;\n  background-color: transparent;\n}\n\ndialog {\n  border: none;\n}\n\n.visually-hidden {\n  clip: rect(1px, 1px, 1px, 1px) !important;\n  -webkit-clip-path: inset(50%) !important;\n  position: absolute !important;\n  width: 1px !important;\n  height: 1px !important;\n  margin: -1px !important;\n  padding: 0 !important;\n  overflow: hidden !important;\n  border: 0 !important;\n  white-space: nowrap !important;\n  clip-path: inset(50%) !important;\n}\n","@import 'variables';\n@import 'general';\n\n.text-center {\n  text-align: center;\n}\n\n.button {\n  padding: 6px;\n  display: flex;\n  align-items: center;\n  border-radius: 2px;\n\n\n  &:hover {\n    background-color: #001f3f;\n    color: #fff;\n  }\n\n}\n\n.modal {\n  width: 400px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border: 1px solid rgba(0, 0, 0, .3);\n  border-radius: 2px;\n\n  >h2 {\n    border-bottom: 1px solid rgba(0, 31, 63, 1);\n    padding: 16px;\n  }\n\n  input {\n    border: 1px solid black;\n    padding: 6px;\n  }\n\n  &__content {\n    display: flex;\n    flex-direction: column;\n    padding: 16px;\n    gap: 8px;\n  }\n\n  &__buttons {\n    display: flex;\n    width: 100%;\n    gap: 16px;\n\n    .add,\n    .cancel {\n      width: 50%;\n      justify-content: center;\n      border: 1px solid transparent;\n    }\n\n    .add {\n      background-color: #001f3f;\n      color: #fff;\n    }\n\n    .cancel {\n      color: #000;\n      background-color: #fff;\n      border: 1px solid black;\n\n      &:hover {\n        color: #000;\n        background-color: #fff;\n      }\n    }\n  }\n}\n\n.content {\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-template-columns: 1fr;\n  width: 100%;\n  background-color: #e2e8f0;\n\n}\n\n.header {\n  display: flex;\n  z-index: 2;\n  align-items: center;\n  height: 88px;\n  padding: 16px 32px;\n  background-color: #001f3f;\n  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.1);\n  color: #fff;\n\n  &__title {\n    font-style: italic;\n    font-size: 44px;\n    text-transform: uppercase;\n  }\n}\n\n.main {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  height: calc(100vh - 88px);\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  background-color: #d8e2f1;\n  padding: 12px;\n  width: 240px;\n  gap: 16px;\n\n  &__user-projects,\n  &__projects {\n    display: flex;\n    flex-direction: column;\n  }\n\n  &__user-projects {\n    gap: 12px;\n\n    .project {\n      gap: 6px;\n      justify-content: space-between;\n\n      >.deleteProject {\n        display: none;\n      }\n\n      &.selected {\n        font-weight: 700;\n        background-color: #001f3f;\n        color: #fff;\n\n        .deleteProject {\n          display: block;\n\n          &:hover {\n            background-color: rgba(255, 255, 255, .3);\n          }\n        }\n      }\n\n      .wrapper {\n        display: flex;\n        align-items: center;\n        gap: 6px;\n      }\n    }\n\n\n  }\n\n  &__projects {\n    gap: 4px;\n  }\n\n\n  .button.add-project {\n    padding: 4px;\n  }\n\n  &__add-project {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n\n    .project-name-input {\n      border: 1px solid black;\n      padding: 6px;\n      width: 100%;\n    }\n\n    &-buttons {\n      display: flex;\n      width: 100%;\n      gap: 4px;\n\n      .add,\n      .cancel {\n        border: 1px solid black;\n        width: 50%;\n        justify-content: center;\n      }\n    }\n  }\n\n}\n\n.project-preview {\n  display: flex;\n  flex-direction: column;\n  width: 900px;\n  padding: 30px;\n  margin: 0 auto;\n  gap: 24px;\n\n  // &.adding-task {\n  //   .button.add-task {\n  //     display: none;\n  //   }\n\n  //   .project-preview__add-task {\n  //     display: flex;\n  //   }\n  // }\n\n  &__tasks {\n    display: flex;\n    flex-direction: column;\n    gap: 4px;\n\n    .task {\n      width: 100%;\n      gap: 8px;\n    }\n  }\n\n}","$primary-color: rgb(102, 155, 189);\n$secondary-color: #545454;\n\n$white: #fff;\n$black: #000;\n$grey-color: #b5b5b5;\n\n$background-color: #f6f6f6;\n\n$importance-high-color: #f25c54;\n$importance-medium-color: #f7b267;\n$importance-low-color: #669bbc;\n$importance-default-color: #b1a7a6;\n\n$font-stack-primary: 'Roboto', sans-serif;\n$font-stack-secondary: 'Poppins', sans-serif;\n$font-color-primary: #303030;\n$font-color-secondary: #545454;\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/sass/main.scss":
/*!***********************************!*\
  !*** ./src/assets/sass/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/sass/main.scss");

      
      
      
      
      
      
      
      
      

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/sass/main.scss */ "./src/assets/sass/main.scss");
/* harmony import */ var _assets_js_Ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/js/Ui */ "./src/assets/js/Ui.js");
/* harmony import */ var _assets_js_Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/js/Storage */ "./src/assets/js/Storage.js");



var storageInstance = new _assets_js_Storage__WEBPACK_IMPORTED_MODULE_2__["default"]();
var uiInstance = new _assets_js_Ui__WEBPACK_IMPORTED_MODULE_1__["default"](storageInstance);
document.addEventListener('DOMContentLoaded', uiInstance.loadHomepage.bind(uiInstance));
})();

/******/ })()
;
//# sourceMappingURL=bundle91b2103a903e05897d6f.js.map