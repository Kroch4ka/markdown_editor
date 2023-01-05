import { documentNameEditorStates } from "../constants.js";
import documentNameEditorView from "./document_name_editor_view.js";
import documentSaveView from "../document_actions/save/document_save_view.js"
import documentHelpers from "../helpers/document_helpers.js"

const documentEditorNameNode = document.querySelector("[data-document-name]");
const documentEditorNameInputNode = document.querySelector("[data-edit-document-name]");

const documentNameEditorPresenter = {
  bindHandlers: (state) => {
    documentEditorNameNode.addEventListener("click", () => {
      if (
        state.uiState.documentNameEditor === documentNameEditorStates.IDLE
      ) {
        state.uiState.documentNameEditor =
          documentNameEditorStates.EDITING;
      }

      documentNameEditorView.render(state);
    });
    documentEditorNameInputNode.addEventListener("keyup", (e) => {
      if (e.key === 'Enter' && state.uiState.documentNameEditor === documentNameEditorStates.EDITING) {
        state.uiState.documentNameEditor = documentNameEditorStates.IDLE;
        state.currentDocument.name = e.target.value;

        if (documentHelpers.isSavedCurrentDocument(state)) {
          documentHelpers.getDocumentByID(state.currentDocument.id, state).name = e.target.value;
        }

        documentSaveView.render(state);
        documentNameEditorView.render(state);
      }
    });
  },
};

export default documentNameEditorPresenter;
