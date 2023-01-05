import workplaceView from "./workplace_view.js";
import { workplaceStates } from "../constants.js";

const markdownEditorNode = document.querySelector('[data-document-markdown]');
const visibleModeNode = document.querySelector('[data-document-workplace-changer]');

const workplacePresenter = {
  bindHandlers: (state) => {
    markdownEditorNode.addEventListener('keyup', (e) => {
      state.currentDocument.markdown = e.target.value;
      state.currentDocument.html = marked.parse(e.target.value);
      workplaceView.render(state);
    });

    visibleModeNode.addEventListener('click', () => {
      if (state.uiState.workplace.state === workplaceStates.EDITOR) {
        state.uiState.workplace.state = workplaceStates.PREVIEW;
      } else if (state.uiState.workplace.state === workplaceStates.PREVIEW) {
        state.uiState.workplace.state = workplaceStates.EDITOR;
      }
      workplaceView.render(state);
    });
  }
}

export default workplacePresenter;