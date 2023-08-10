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
    const projectExist = this.todoList
      .getProjects()
      .some(project => project.title === title);

    if (!projectExist) {
      const project = new Project(title);
      this.todoList.addProject(project);
      this.saveTodoList();
    } else {
      alert('Name already exists');
      return true;
    }
  }

  addTask(project, taskTitle) {
    const task = new Task(taskTitle);
    this.todoList.addTaskToProject(project, task);
    this.saveTodoList();

    return task;
  }

  deleteProject(projectTitle) {
    this.todoList.deleteProject(projectTitle);
    this.saveTodoList();
  }

  getProjects() {
    return this.todoList.getProjects();
  }

  getTasks() {
    return this.todoList.getTasks();
  }

  getProject(projectTitle) {
    return this.todoList.getProject(projectTitle);
  }

  getTask(project) {
    return this.todoList.getTask(project);
  }
}
