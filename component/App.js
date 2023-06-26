import html from "../redux/core.js";
import { connect } from "../redux/store.js";
import Header from "./Header.js";
import TodoList from "./TodoList.js";
import Footer from "./Footer.js";

function App({ todos }) {
  return html`
    <section class="todoapp">
      ${Header()} ${todos.length > 0 && TodoList()}
      ${todos.length > 0 && Footer()}
    </section>
  `;
}

export default connect()(App);
