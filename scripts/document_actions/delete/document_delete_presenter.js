import { modalStates } from '../../constants.js'
import modalDeleteDocumentView from '../../modals/delete_document/modal_delete_document_view.js'
import modalDeleteDocumentPresenter from "../../modals/delete_document/modal_delete_document_presenter.js";

const deleteDocumentBtnNode = document.querySelector('[data-modal-delete]');

const documentDeletePresenter = {
  bindHandlers: (state) => {
    deleteDocumentBtnNode.addEventListener('click', (e) => {
      e.stopImmediatePropagation();
      state.uiState.modal.state = modalStates.OPEN;
      modalDeleteDocumentView.render(state);
      modalDeleteDocumentPresenter.bindHandlers(state);
    });
  }
}

export default documentDeletePresenter;