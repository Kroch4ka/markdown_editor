import { documentNameEditorStates } from "../constants.js";
import documentNameEditorView from "./document_name_editor_view.js";

const documentEditorNameNode = document.querySelector("[data-document-name]");
const documentEditorNameInputNode = document.querySelector("[data-edit-document-name]");

const documentNameEditorPresenter = {
  bindHandlers: (state) => {
    documentEditorNameNode.addEventListener("click", (e) => {
      if (
        state.uiState.documentNameEditor.state === documentNameEditorStates.IDLE
      ) {
        state.uiState.documentNameEditor.state =
          documentNameEditorStates.EDITING;
      }
      documentNameEditorView.render(state);
    });
    documentEditorNameInputNode.addEventListener("keyup", (e) => {
      if (e.key === 'Enter' && state.uiState.documentNameEditor.state === documentNameEditorStates.EDITING) {
        state.uiState.documentNameEditor.state = documentNameEditorStates.IDLE;
        state.currentDocument.name = e.target.value;
        documentNameEditorView.render(state);
      }
    });
  },
};

export default documentNameEditorPresenter;
