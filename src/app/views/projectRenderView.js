import elementFromHtml from "../helperFunctions";

class ProjectView {
  constructor() {}

  clearProjectView() {
    document.querySelector(".project-header-title").replaceChildren();
    document.querySelector(".sections-container").replaceChildren();
  }
  renderList(projectsList) {
    let projectNames = [];
    for (let i = 0; i < projectsList.length; i++) {
      const projectItem = elementFromHtml(`
      <div class="project project-default" data-id="${projectsList[i].id}">
          <p>${projectsList[i].name}</p>
        </div>
      `);
      projectNames.push(projectItem);
    }
    projectNames.forEach((element) => {
      document.querySelector(".projects-list").append(element);
    });
  }

  renderProject(project) {
    const projectHeader = elementFromHtml(`
          <p>${project.name}</p>
          <button>
            <span class="material-symbols-outlined"> edit </span>
          </button>
          <button>
            <span class="material-symbols-outlined"> delete </span>
          </button>
    `);

    document.querySelector(".project-header-title").append(projectHeader);
  }

  renderSections(project) {
    let projectSections = [];

    for (let i = 0; i < project.sections.length; i++) {
      const projectSection = elementFromHtml(`
      <div class="section">
        <div class="section-header">
          <p>${project.sections[i].name}</p>
          <div class="action-btns">
            <button>
              <span class="material-symbols-outlined"> sort </span>
            </button>
            <button>
              <span class="material-symbols-outlined"> edit </span>
            </button>
            <button>
              <span class="material-symbols-outlined"> delete </span>
            </button>
          </div>
        </div>
        <div class="section-content"></div>
        <div class="todo-item add-todo">
          <input type="text" class="add-todo-input" />
          <div class="placeholder">
            <span class="material-symbols-outlined"> add </span>
            <span>Add task</span>
          </div>
        </div>
      </div>
      `);
      projectSections.push(projectSection);
    }
    projectSections.forEach((section) => {
      document.querySelector(".sections-container").append(section);
    });
  }

  renderTasks(project) {
    let tasks = [];
    for (let i = 0; i < project.sections.length; i++) {
      for (let y = 0; y < project.sections[i].tasks.length; y++) {
        const task = elementFromHtml(`
          <div class="todo-item high">
              <p>${project.sections[i].tasks[y].name}</p>
            </div>
          `);
        tasks.push(task);
      }

      tasks.forEach((task) => {
        document
          .querySelector(".sections-container")
          .childNodes[i].childNodes[3].append(task);
      });
    }
  }

  switchProject(projectList) {
    const domProjectList = document.querySelector(".projects-list").children;
    const arrProjectList = [...domProjectList];
    console.log(arrProjectList);

    arrProjectList.forEach((elem) => {
      elem.addEventListener("click", (e) => {
        const id = +elem.dataset.id;
        const project = projectList[id];

        this.clearProjectView();
        this.renderProject(project);
        this.renderSections(project);
        this.renderTasks(project);
      });
    });
  }
}

export default ProjectView;
