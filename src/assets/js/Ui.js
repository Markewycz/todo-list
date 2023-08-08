const addTasks = document.getElementById('addTasks');
const addProjects = document.getElementById('addProjects');
const addTask = document.getElementById('addTask');
const addProject = document.getElementById('addProject');
const cancelTask = document.getElementById('cancelTask');
const cancelProject = document.getElementById('cancelProject');

const modalTask = document.querySelector("[data-modal='addTask']");
const modalProject = document.querySelector("[data-modal='addProject']");

console.log(addTask, cancelTask);

function addingTask() {
  modalTask.showModal();
}

function cancelAddingTask() {
  modalTask.close();
}

function addingProject() {
  modalProject.showModal();
}

function cancelAddingProject() {
  modalProject.close();
}

// addTasks.addEventListener('click', addingTask);
// cancelTask.addEventListener('click', cancelAddingTask);
addProjects.addEventListener('click', addingProject);
cancelProject.addEventListener('click', cancelAddingProject);

class Ui {
  constructor() {}
}
