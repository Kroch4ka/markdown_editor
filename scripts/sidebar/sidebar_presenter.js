import { sidebarStates } from "../constants.js";
import sidebarView from "./sidebar_view.js";

const sidebarOpenerNode = document.querySelector('[data-sidebar-opener]');

const sidebarPresenter = {
  bindHandlers: (state) => {
    sidebarOpenerNode.addEventListener('click', () => {
      if (state.uiState.sidebar === sidebarStates.CLOSE) {
        state.uiState.sidebar = sidebarStates.OPEN;
      } else if (state.uiState.sidebar === sidebarStates.OPEN) {
        state.uiState.sidebar = sidebarStates.CLOSE;
      }
      sidebarView.render(state);
    });
  }
}

export default sidebarPresenter;