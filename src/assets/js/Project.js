import Task from './Task';

export default class Project {
  constructor(title) {
    this.title = title;
    this.tasks = [];
  }

  addTask(task) {
    const taskObj = new Task(task);
    this.tasks.push(taskObj);
    return taskObj;
  }

  getTasks() {
    return this.tasks;
  }

  getTask() {
    return this.tasks[this.tasks.length - 1];
  }
}
