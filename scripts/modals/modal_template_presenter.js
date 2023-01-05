import { modalStates } from "../constants.js";
import modalTemplateView from "./modal_template_view.js";

const modalTemplatePresenter = {
  bindHandlers: (state) => {
    document.addEventListener('click', (e) => {
      const hasModalParent = !!e.target.closest('.modal_wrapper');
      if (!hasModalParent) {
        state.uiState.modal.state = modalStates.CLOSE;
        modalTemplateView.render(state);
      }
    });
  }
}

export default modalTemplatePresenter;