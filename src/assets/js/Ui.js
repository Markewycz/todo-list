import Storage from './Storage';

export default class UI {
  constructor(storage) {
    this.storage = storage;
  }

  loadHomepage() {
    this.storage.loadTodoList();
    this.createDefaultProject();

    this.loadProjects();
    this.previewDefaultProject();
    this.initButtons();
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

  createProject(projectTitle) {
    document.querySelector('.nav__projects').innerHTML += `
    <button type="button" class="button project" data-project>
    <span class="wrapper">
      <span class="material-symbols-outlined">
        checklist
      </span>
      <span class="project-name">${projectTitle}</span>
    </span>
    <span class="material-symbols-outlined deleteProject">
      delete
    </span>
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

    this.clearPreviewProject();
    project.getTasks().forEach(task => {
      this.createTask(task);
    });
  }

  clearPreviewProject() {
    document.querySelector('.project-preview__tasks').innerHTML = '';
  }
  clearProjectList() {
    document.querySelector('.nav__projects').innerHTML = '';
  }

  addProject() {
    const projectName = document.getElementById('projectName').value;

    if (this.storage.addProject(projectName)) return;
    this.createProject(projectName);
    this.selectCreatedProject();
    this.closeModalProject();
  }

  addTask() {
    const taskName = document.getElementById('taskName').value;
    const selectedProject = this.storage.getProject(
      document.querySelector('.selected').children[0].children[1].textContent
    );

    this.storage.addTask(selectedProject, taskName);
    this.createTask(this.storage.getTask(selectedProject));
    this.closeModalTask();
  }

  deleteProject() {
    const selectedProject = document.querySelector('.selected').children[0]
      .children[1].textContent;
    this.storage.deleteProject(selectedProject);
    this.clearProjectList();
    this.loadProjects();
    this.selectFirstProject();
    this.closeModalDelete();
  }

  loadProjects() {
    const projects = this.storage.getProjects();

    projects.forEach(project => {
      this.createProject(project.title);
    });
  }

  selectCreatedProject() {
    this.previewProject(
      this.storage.getProjects()[this.storage.getProjects().length - 1]
    );
    document
      .querySelectorAll('[data-project]')
      .forEach(project => project.classList.remove('selected'));
    document
      .querySelector('.nav__projects')
      .lastChild.classList.add('selected');
  }

  selectFirstProject() {
    this.previewProject(this.storage.getProjects()[0]);
    document
      .querySelector('.nav__projects')
      .children[0].classList.add('selected');
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

  openModalDelete() {
    const modalDelete = document.querySelector("[data-modal='deleteProject']");
    modalDelete.showModal();
  }

  closeModalDelete() {
    const modalDelete = document.querySelector("[data-modal='deleteProject']");
    modalDelete.close();
  }

  initButtons() {
    const addProject = document.getElementById('addProject');
    const addTask = document.getElementById('addTask');
    const addProjects = document.getElementById('addProjects');
    const cancelProject = document.getElementById('cancelProject');
    const addTasks = document.getElementById('addTasks');
    const cancelTask = document.getElementById('cancelTask');
    const projectsListContainer = document.querySelector('.nav__projects');
    const cancelDelete = document.getElementById('deleteProjectCancel');
    const deleteProject = document.getElementById('deleteProject');

    projectsListContainer.addEventListener('click', e => {
      const btn = e.target.closest('button');
      const projectTitle = btn.children[0].children[1].textContent;
      const deleteBtn = document.querySelectorAll('.deleteProject');

      deleteBtn.forEach(btn => {
        if (e.target === btn) {
          btn.addEventListener('click', this.openModalDelete);
        }
      });

      if (btn.dataset.hasOwnProperty('project')) {
        this.previewProject(this.storage.getProject(projectTitle));
        document.querySelectorAll('[data-project]').forEach(project => {
          project.classList.remove('selected');
        });
        btn.classList.add('selected');
      }
    });

    addProject.addEventListener('click', this.addProject.bind(this));
    addTask.addEventListener('click', this.addTask.bind(this));
    deleteProject.addEventListener('click', this.deleteProject.bind(this));

    addProjects.addEventListener('click', this.openModalProject);
    cancelProject.addEventListener('click', this.closeModalProject);
    addTasks.addEventListener('click', this.openModalTask);
    cancelTask.addEventListener('click', this.closeModalTask);
    cancelDelete.addEventListener('click', this.closeModalDelete);
  }
}
