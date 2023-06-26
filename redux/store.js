import { createStore } from "../redux/core.js";
import reducer from "../redux/reducer.js";
import withLogger from "../main/logger.js";

const { attach, connect, dispatch } = createStore(withLogger(reducer));

window.dispatch = dispatch;

export { attach, connect };
