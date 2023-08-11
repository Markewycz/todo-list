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

  deleteProject(projectTitle) {
    for (let i = 0; i < this.projects.length; i++) {
      if (this.projects[i].title === projectTitle) {
        this.projects.splice(i, 1);
      }
    }
  }

  getProjects() {
    return this.projects;
  }

  getProject(projectTitle) {
    return this.projects.find(project => project.title === projectTitle);
  }

  getTask(project) {
    return project.getTask();
  }

  completeTask(project, taskTitle) {
    project.completeTask(project.getTaskID(taskTitle));
  }
}
