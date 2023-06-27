import html from "../redux/core.js";
import { connect } from "../redux/store.js";

function TodoItem({ todo, index, edit }) {
  return html`
    <li
      class="${todo.completed && "completed"}
      ${edit === index && "editing"}"
    >
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${todo.completed && "checked"}
          onchange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('edit', ${index})">${todo.title}</label>
        <button class="destroy" onclick="dispatch('destroy',${index})"></button>
      </div>
      <input
        class="edit"
        value="${todo.title}"
        onkeyup="event.keyCode === 13 && dispatch('endEdit', this.value.trim()) || event.keyCode === 27 && dispatch('endEdit', '${todo.title}')"
        onblur="dispatch('endEdit', this.value.trim())"
      />
    </li>
  `;
}

export default connect()(TodoItem);
