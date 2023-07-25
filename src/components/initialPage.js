import wave from "/src/assets/images/wave.svg";
import elementFromHtml from "./helperFunctions";

const content = document.querySelector(".content");

const initialPage = elementFromHtml(`
  <aside class="sidebar">
    <div class="sidebar-header">
      <h3>Projects</h3>
      <div class="action-btns">
        <button>
          <span class="material-symbols-outlined"> sort </span>
        </button>
        <button>
          <span class="material-symbols-outlined"> left_panel_close </span>
        </button>
      </div>
    </div>
    <div class="projects-list">
      <div class="project project-default">
        <!-- SET MAX CHAR TITLE -->
        <p>Todo App</p>
      </div>
      <div class="project add-project">
        <button class="add-project-btn">
          <span class="material-symbols-outlined"> add_circle </span>
        </button>
      </div>
    </div>
  </aside>
  <div class="project-container">
    <div class="project-header">
      <p>
        Todo App
        <button>
          <span class="material-symbols-outlined"> edit </span>
        </button>
        <button>
          <span class="material-symbols-outlined"> delete </span>
        </button>
      </p>
      <button class="add-section-btn">
        <span class="material-symbols-outlined"> add </span>
        <span>Add Section</span>
      </button>
    </div>
    <div class="sections-container">
      <div class="section">
        <div class="section-header">
          <p>Design</p>
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
        <div class="section-content">
          <div class="todo-item high">
            <p>Edit button color</p>
          </div>
          <div class="todo-item low">
            <p>Change font stack</p>
          </div>
          <div class="todo-item medium">
            <p>Modify navigation bar</p>
          </div>
          <div class="todo-item default">
            <p>Polish gaps</p>
          </div>
        </div>
        <div class="todo-item add-todo">
          <input type="text" class="add-todo-input" />
          <div class="placeholder">
            <span class="material-symbols-outlined"> add </span>
            <span>Add task</span>
          </div>
        </div>
      </div>
    </div>
  </div>
`);
content.append(initialPage);

const waveImg = document.getElementById("waveImage");
waveImg.data = wave;

