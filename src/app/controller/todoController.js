import View from "../views/todoView";
import { App, Project, Section, Tasks } from "../model/todoModel";
import InitPage from "../views/initialPage";
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
    this.view.renderSections(project);
    this.view.renderTasks(project);
  }
}

const initPage = new InitPage();
const myApp = new App();
const view = new View(content);
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

initPage.renderPage();
// console.log(project1);
// console.log(myApp.getProjects());

controller.appendProjectList(myApp.getProjects());
controller.appendProject(myApp.getProjects()[0]);

console.log(myApp.getProjects()[0]);
