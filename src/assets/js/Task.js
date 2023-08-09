export default class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }

  complete() {
    this.completed = true;
  }
}
