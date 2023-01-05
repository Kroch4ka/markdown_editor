import { documentNameEditorStates, sidebarStates, modalStates, workplaceStates } from "./constants.js";
import { defaultDocumentData } from "./constants.js";
import documentNameEditorPresenter from "./document_name_editor/document_name_editor_presenter.js";
import documentNameEditorView from "./document_name_editor/document_name_editor_view.js";
import workplacePresenter from "./workplace/workplace_presenter.js";
import workplaceView from "./workplace/workplace_view.js";
import sidebarPresenter from "./sidebar/sidebar_presenter.js";
import sidebarView from './sidebar/sidebar_view.js'
import documentSaveView from './document_actions/save/document_save_view.js';
import documentSavePresenter from "./document_actions/save/document_save_presenter.js";
import documentDeleteView from "./document_actions/delete/document_delete_view.js";
import modalTemplatePresenter from "./modals/modal_template_presenter.js";
import documentDeletePresenter from "./document_actions/delete/document_delete_presenter.js";
import documentCreatePresenter from "./document_actions/create/document_create_presenter.js";

(() => {
  const state = {
    currentDocument: {
      id: defaultDocumentData.ID,
      name: defaultDocumentData.NAME,
      markdown: defaultDocumentData.MARKDOWN,
      html: defaultDocumentData.HTML,
    },
    documents: [],
    uiState: {
      documentNameEditor: {
        state: documentNameEditorStates.IDLE,
      },
      sidebar: {
        state: sidebarStates.CLOSE
      },
      modal: {
        state: modalStates.CLOSE
      },
      workplace: {
        state: workplaceStates.EDITOR
      }
    },
  };

  documentNameEditorPresenter.bindHandlers(state);
  workplacePresenter.bindHandlers(state);
  sidebarPresenter.bindHandlers(state);
  documentNameEditorView.render(state);
  documentSavePresenter.bindHandlers(state);
  modalTemplatePresenter.bindHandlers(state);
  documentDeletePresenter.bindHandlers(state);
  documentCreatePresenter.bindHandlers(state);

  documentDeleteView.render(state);
  documentSaveView.render(state);
  workplaceView.render(state);
  sidebarView.render(state);
})();
