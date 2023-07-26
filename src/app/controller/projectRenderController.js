import ProjectView from "../views/projectRenderView";
import App from "../model/todoModel";
import InitPage from "../views/initialPage";

class ProjectViewController {
  constructor(view) {
    this.view = view;
  }

  initPage() {
    initPage.renderPage();
  }

  switchProject(projectList) {
    this.view.switchProject(projectList);
  }

  appendProjectList(projectList) {
    this.view.renderList(projectList);
  }

  appendProject(project) {
    this.view.renderProject(project);
    this.view.renderSections(project);
    this.view.renderTasks(project);
  }
}

const initPage = new InitPage();
const myApp = new App();
const view = new ProjectView();
const controller = new ProjectViewController(view);

const project1 = myApp.createProject("Tic-Tac-Toe");
const project2 = myApp.createProject("Todo App");
const project1Section1 = project1.createSection("Design");
const project1Section2 = project1.createSection("Logic");
const project2Section1 = project2.createSection("Logic");
const project1Section1Task1 = project1Section1.createTask(
  "Change height of header"
);
const project1Section1Task2 = project1Section2.createTask("Render buttons");

controller.initPage();
controller.appendProjectList(myApp.getProjects());
controller.appendProject(myApp.getProjects()[0]);
controller.switchProject(myApp.getProjects());

export default ProjectViewController;
