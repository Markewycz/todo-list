import Project from './Project';

export default class TodoList {
  constructor() {
    this.projects = [];
  }

  addProject(title) {
    const project = new Project(title);
    this.projects.push(project);

    return project;
  }

  addTaskToProject(project, task) {
    project.addTask(task);
  }

  completeTask(task) {
    task.complete();
  }

  getProjects() {
    return this.projects;
  }

  getProject(name) {
    return this.projects.find(project => project.title === name);
  }
}
