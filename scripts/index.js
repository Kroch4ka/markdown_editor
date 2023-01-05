import {
  documentNameEditorStates,
  sidebarStates,
  modalStates,
  workplaceStates,
  themeSwitcherStates
} from "./constants.js";
import documentHelpers from "./helpers/document_helpers.js"
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
import documentChoosePresenter from "./document_actions/choose/document_choose_presenter.js";
import themeSwitcherPresenter from "./theme_switcher/theme_switcher_presenter.js";
import themeSwitcherView from "./theme_switcher/theme_switcher_view.js";

(() => {
  const state = {
    currentDocument: documentHelpers.createDefaultDocument(),
    documents: [],
    uiState: {
      documentNameEditor: documentNameEditorStates.IDLE,
      sidebar: sidebarStates.CLOSE,
      modal: modalStates.CLOSE,
      workplace: workplaceStates.EDITOR,
      theme: themeSwitcherStates.LIGHT
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
  documentChoosePresenter.bindHandlers(state);
  themeSwitcherPresenter.bindHandlers(state);

  documentDeleteView.render(state);
  documentSaveView.render(state);
  workplaceView.render(state);
  sidebarView.render(state);
  themeSwitcherView.render(state);
})();
