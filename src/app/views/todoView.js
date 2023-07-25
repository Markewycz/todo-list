import elementFromHtml from "../helperFunctions";

class View {
  constructor(container) {
    this.container = container;
  }
  showList(projectsList) {
    let projectNames = [];
    for (let i = 0; i < projectsList.length; i++) {
      const projectItem = elementFromHtml(`
      <div class="project project-default">
          <p>${projectsList[i].name}</p>
        </div>
      `);

      projectNames.push(projectItem);
    }

    projectNames.forEach((element) => {
      this.container.childNodes[0].childNodes[3].append(element);
    });
  }

  renderProject(project) {
    console.log(
      (this.container.childNodes[2].childNodes[1].childNodes[1].childNodes[1].textContent =
        project.name)
    );
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
      console.log(section);
      this.container.childNodes[2].childNodes[3].append(section);
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
        this.container.childNodes[2].childNodes[3].childNodes[
          i
        ].childNodes[3].append(task);
      });
    }
  }
}

export default View;