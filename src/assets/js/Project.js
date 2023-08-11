export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  getTask() {
    return this.tasks[this.tasks.length - 1];
  }

  getTaskID(taskTitle) {
    return this.tasks.findIndex(task => task.title === taskTitle);
  }

  completeTask(taskID) {
    this.tasks.splice(taskID, 1);
  }
}
