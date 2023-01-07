import documentHelpers from "../../helpers/document_helpers.js";
import workplaceView from "../../workplace/workplace_view.js";
import documentSaveView from "../save/document_save_view.js";
import documentNameEditorView from "../../document_name_editor/document_name_editor_view.js";
import documentChooseView from "../choose/document_choose_view.js";
import localStoragePersist from "../../persistance/local_storage.js";

const createDocumentBtnNode = document.querySelector('[data-document-new]');

const documentCreatePresenter = {
    bindHandlers: (state) => {
        createDocumentBtnNode.addEventListener('click', () => {
            if (!documentHelpers.isSavedCurrentDocument(state)) {
                documentHelpers.saveCurrentDocument(state);
            }

            localStoragePersist.save(state.currentDocument);
            state.currentDocument = documentHelpers.createDefaultDocument();

            documentNameEditorView.render(state);
            documentSaveView.render(state);
            workplaceView.render(state);
            documentChooseView.render(state);
        });
    }
}

export default documentCreatePresenter;