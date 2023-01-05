import { workplaceStates } from "../constants.js";

const markdownEditorNode = document.querySelector('[data-document-markdown]');
const htmlPreviewNode = document.querySelector('[data-document-html]');
const workplaceNode = document.querySelector('.workplace');

const workplaceView = {
  render: (state) => {
    markdownEditorNode.value = state.currentDocument.markdown;
    htmlPreviewNode.innerHTML = state.currentDocument.html;
    workplaceNode.dataset.mode = state.uiState.workplace.description;
  }
}

export default workplaceView;