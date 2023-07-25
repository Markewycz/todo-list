class App {
  constructor() {
    this.projects = [];
  }

  createProject(name) {
    const project = new Project(name);
    this.projects.push(project);

    return project;
  }
  getProjects() {
    return this.projects;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.sections = [];
  }

  createSection(name) {
    const section = new Section(name);
    this.sections.push(section);

    return section;
  }

  getSections() {
    return this.sections;
  }
}

class Section {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  createTask(name) {
    const task = new Tasks(name);
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

class Tasks {
  constructor(name) {
    this.name = name;
  }
}

export { App, Project, Section, Tasks };
