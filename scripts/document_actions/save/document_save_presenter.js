import documentSaveView from "./document_save_view.js";
import documentDeleteView from "../delete/document_delete_view.js";
import documentHelpers from "../../helpers/document_helpers.js";
import documentChooseView from "../choose/document_choose_view.js";

const documentSaveBtnNode = document.querySelector('[data-document-save]');

const documentSavePresenter = {
  bindHandlers: (state) => {
    documentSaveBtnNode.addEventListener('click', () => {

      documentHelpers.saveCurrentDocument(state);
      documentSaveView.render(state);
      documentDeleteView.render(state);
      documentChooseView.render(state);
    });
  }
}

export default documentSavePresenter;