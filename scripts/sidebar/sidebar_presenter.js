import { sidebarStates } from "../constants.js";
import sidebarView from "./sidebar_view.js";

const sidebarOpenerNode = document.querySelector('[data-sidebar-opener]');

const sidebarPresenter = {
  bindHandlers: (state) => {
    sidebarOpenerNode.addEventListener('click', () => {
      if (state.uiState.sidebar.state === sidebarStates.CLOSE) {
        state.uiState.sidebar.state = sidebarStates.OPEN;
      } else if (state.uiState.sidebar.state === sidebarStates.OPEN) {
        state.uiState.sidebar.state = sidebarStates.CLOSE;
      }
      sidebarView.render(state);
    });
  }
}

export default sidebarPresenter;