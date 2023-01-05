import { modalDefaultData, defaultDocumentData, modalStates } from "../../constants.js";
import workplaceView from "../../workplace/workplace_view.js";
import documentNameEditorView from "../../document_name_editor/document_name_editor_view.js";
import documentSaveView from "../../document_actions/save/document_save_view.js";
import modalTemplateView from "../modal_template_view.js";
import documentHelpers from '../../helpers/document_helpers.js'

const modalDeleteDocumentPresenter = {
    bindHandlers: (state) => {
        document.addEventListener('click', (e) => {
            if (!e.target.hasAttribute(`${modalDefaultData.DELETE_DOCUMENT_MODAL.BUTTON_DATA_ATTRIBUTE}`)) return;

            state.documents = state.documents.filter(document => document.id !== state.currentDocument.id);
            state.currentDocument = documentHelpers.createDefaultDocument();

            state.uiState.modal.state = modalStates.CLOSE;

            modalTemplateView.render(state);
            workplaceView.render(state);
            documentNameEditorView.render(state);
            documentSaveView.render(state);
        });
    }
}

export default modalDeleteDocumentPresenter;