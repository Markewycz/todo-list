export default class TodoList {
  constructor() {
    this.projects = [];
  }

  addProject(project) {
    this.projects.push(project);
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

  getTask(project) {
    return project.getTask();
  }
}
