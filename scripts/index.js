import {
  documentNameEditorStates,
  sidebarStates,
  modalStates,
  workplaceStates,
  themeSwitcherStates,
  saveBtnStates
} from "./constants.js";

import localStoragePersist from "./persistance/local_storage.js";
import savedBtnView from "./components/saved_btn/view.js";
import saveBtnPresenter from "./components/saved_btn/presenter.js";
import onChange from "on-change";

(() => {
  const state = {
    currentDocument: null,
    documents: localStoragePersist.from(),
    uiState: {
      saveBtn: saveBtnStates.IDLE,
      documentNameEditor: documentNameEditorStates.IDLE,
      sidebar: sidebarStates.CLOSE,
      modal: modalStates.CLOSE,
      workplace: workplaceStates.EDITOR,
      theme: themeSwitcherStates.LIGHT
    },
  };

  const store = onChange(state);

  console.log(store);
  // END
})();
