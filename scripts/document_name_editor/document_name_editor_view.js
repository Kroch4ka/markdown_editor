import { documentNameEditorStates } from "../constants.js";

const documentNameNode = document.querySelector("[data-document-name]");
const documentNameEditorInput = document.querySelector("[data-edit-document-name]");

const documentNameEditorView = {
  render: (state) => {
    if (
      state.uiState.documentNameEditor === documentNameEditorStates.IDLE
    ) {
      documentNameNode.style.display = "block";
      documentNameEditorInput.style.display = "none";
      documentNameNode.textContent = state.currentDocument.name;
    } else if (
      state.uiState.documentNameEditor ===
      documentNameEditorStates.EDITING
    ) {
      documentNameNode.style.display = "none";
      documentNameEditorInput.style.display = "block";
      documentNameEditorInput.value = state.currentDocument.name;
    }
  },
};

export default documentNameEditorView;
