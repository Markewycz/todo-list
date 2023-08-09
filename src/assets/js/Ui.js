import Storage from './Storage';

export default class UI {
  constructor(storage) {
    this.storage = storage;
  }

  loadHomepage() {
    this.storage.getTodoList();
    this.loadProjects();
    this.initButtons();
    this.createDefaultProject();
    this.previewDefaultProject();
  }

  createDefaultProject() {
    this.storage.addDefaultProject();
  }

  previewDefaultProject() {
    const defaultProject = this.storage.getProject('Todo List');

    document
      .querySelector('.nav__projects')
      .children[0].classList.add('selected');
    this.previewProject(defaultProject);
  }

  createProject(project) {
    document.querySelector('.nav__projects').innerHTML += `
      <button type="button" class="button project" data-project>
        <span class="material-symbols-outlined">
          checklist
        </span>
        <span class="project-name">${project}</span>
      </button>`;
  }

  createTask(task) {
    document.querySelector('.project-preview__tasks').innerHTML += `
      <button class="button task">
        <span class="material-symbols-outlined"> circle </span>
        <span class="task-name">${task.title}</span>
      </button>`;
  }

  previewProject(project) {
    document.querySelector('.project-preview__title').textContent =
      project.title;
  }

  addProject() {
    const projectName = document.getElementById('projectName').value;

    this.storage.addProject(projectName);
    this.createProject(projectName);
    this.closeModalProject();
  }

  addTask() {
    const taskName = document.getElementById('taskName').value;
    const selectedProject = this.storage.getProject(
      document.querySelector('.selected').children[1].textContent
    );

    this.storage.addTask(selectedProject, taskName);
    this.createTask(this.storage.getTask(selectedProject));
    this.closeModalTask();
  }

  loadProjects() {
    const projects = this.storage.getProjects();

    projects.forEach(project => {
      this.createProject(project.title);
    });
  }

  // Event listeners
  openModalProject() {
    const modalProject = document.querySelector("[data-modal='addProject']");
    modalProject.showModal();
  }

  closeModalProject() {
    const modalProject = document.querySelector("[data-modal='addProject']");
    modalProject.close();
  }

  openModalTask() {
    const modalTask = document.querySelector("[data-modal='addTask']");
    modalTask.showModal();
  }

  closeModalTask() {
    const modalTask = document.querySelector("[data-modal='addTask']");
    modalTask.close();
  }
  initButtons() {
    const addProject = document.getElementById('addProject');
    const addTask = document.getElementById('addTask');
    const addProjects = document.getElementById('addProjects');
    const cancelProject = document.getElementById('cancelProject');
    const addTasks = document.getElementById('addTasks');
    const cancelTask = document.getElementById('cancelTask');
    const projectsListContainer = document.querySelector('.nav__projects');

    projectsListContainer.addEventListener('click', e => {
      const btn = e.target.closest('button');

      if (btn.dataset.hasOwnProperty('project')) {
        const projectName = btn.children[1].textContent;
        this.previewProject(this.storage.getProject(projectName));
        document.querySelectorAll('[data-project]').forEach(project => {
          project.classList.remove('selected');
        });
        btn.classList.add('selected');
      }
    });

    addProject.addEventListener('click', this.addProject.bind(this));
    addTask.addEventListener('click', this.addTask.bind(this));

    addProjects.addEventListener('click', this.openModalProject);
    cancelProject.addEventListener('click', this.closeModalProject);
    addTasks.addEventListener('click', this.openModalTask);
    cancelTask.addEventListener('click', this.closeModalTask);
  }
}
