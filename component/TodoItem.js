import html from "../redux/core.js";

function TodoItem({ todo, index }) {
  return html`
    <li class="${todo.completed && "completed"}">
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle',${index})"
        />
        <label>${todo.title}</label>
        <button class="destroy" onclick="dispatch('destroy',${index})"></button>
      </div>
      <input class="edit" value="Create a TodoMVC template" />
    </li>
  `;
}

export default TodoItem;
