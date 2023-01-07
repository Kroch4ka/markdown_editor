import { modalStates } from "../constants.js";
import modalTemplateView from "./modal_template_view.js";
import documentDeleteView from "../document_actions/delete/document_delete_view.js";

const modalTemplatePresenter = {
  bindHandlers: (state) => {
    document.addEventListener('click', (e) => {
      const hasModalParent = !!e.target.closest('.modal_wrapper');
      if (!hasModalParent) {
        state.uiState.modal = modalStates.CLOSE;
        modalTemplateView.render(state);
        documentDeleteView.render(state);
      }
    });
  }
}

export default modalTemplatePresenter;