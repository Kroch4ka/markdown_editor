import documentHelpers from "../../helpers/document_helpers.js";
import workplaceView from "../../workplace/workplace_view.js";
import documentNameEditorView from "../../document_name_editor/document_name_editor_view.js";

const documentChoosePresenter = {
    bindHandlers: (state) => {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.document_item')) return;

            const documentID = +e.target.closest('.document_item').dataset.documentId;
            const document = documentHelpers.getDocumentByID(documentID, state);
            documentHelpers.changeCurrentDocument(state, document);

            workplaceView.render(state);
            documentNameEditorView.render(state);
        })
    }
}

export default documentChoosePresenter;