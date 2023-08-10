import TodoList from './ToDoList';
import Project from './Project';
import Task from './Task';

export default class Storage {
  constructor() {
    this.todoList = new TodoList();
  }

  saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }

  loadTodoList() {
    const storedData = JSON.parse(localStorage.getItem('todoList'));
    if (storedData) {
      this.todoList = this.deserializeTodoList(storedData);
    }
    console.log(this.todoList);
  }

  deserializeTodoList(data) {
    const deserializedList = new TodoList();

    data.projects.forEach(projectData => {
      const project = new Project(projectData.title);
      projectData.tasks.forEach(taskData => {
        project.addTask(new Task(taskData.title, taskData.completed));
      });
      deserializedList.addProject(project);
    });

    return deserializedList;
  }

  addDefaultProject() {
    if (!this.todoList.getProject('Todo List')) {
      const project = new Project('Todo List');
      this.todoList.addProject(project);
      this.saveTodoList();
    }
  }

  addProject(title) {
    // TODO Add validation for existing title in projects array
    const project = new Project(title);
    this.todoList.addProject(project);
    this.saveTodoList();

    return project;
  }

  addTask(project, taskTitle) {
    const task = new Task(taskTitle);
    this.todoList.addTaskToProject(project, task);
    this.saveTodoList();

    return task;
  }

  getProjects() {
    return this.todoList.getProjects();
  }

  getTasks() {
    return this.todoList.getTasks();
  }

  getProject(name) {
    return this.todoList.getProject(name);
  }

  getTask(project) {
    return this.todoList.getTask(project);
  }
}
