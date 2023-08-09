import TodoList from './ToDoList';
import Project from './Project';

export default class Storage {
  constructor() {
    this.todoList = new TodoList();
  }

  saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }

  getTodoList() {
    const todoList = Object.assign(
      this.todoList,
      JSON.parse(localStorage.getItem('todoList'))
    );

    return todoList;
  }

  addDefaultProject() {
    let hasDefaultProject = false;
    this.todoList.getProjects().forEach(project => {
      if (project.title === 'Todo List') {
        hasDefaultProject = true;
      }
    });

    if (!hasDefaultProject) this.addProject('Todo List');
  }

  addProject(project) {
    console.log(this.todoList.addProject(project));
    this.saveTodoList(this.todoList);
  }

  getProjects() {
    return this.todoList.getProjects();
  }

  getProject(name) {
    const project = this.todoList.getProject(name);

    return new Project(project.title);
  }

  addTask(project, task) {
    // console.log(project);
    project.addTask(task);
    this.saveTodoList(this.todoList);
  }

  getTask(project) {
    return project.getTask();
  }
}
