import documentHelpers from "../../helpers/document_helpers.js";
import workplaceView from "../../workplace/workplace_view.js";
import documentNameEditorView from "../../document_name_editor/document_name_editor_view.js";
import documentChooseView from "./document_choose_view.js";
import documentDeleteView from "../delete/document_delete_view.js";

const documentChoosePresenter = {
    bindHandlers: (state) => {
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.document_item')) return;

            const documentID = +e.target.closest('.document_item').dataset.documentId;
            const document = documentHelpers.getDocumentByID(documentID, state);
            documentHelpers.changeCurrentDocument(state, document);

            documentChooseView.render(state);
            workplaceView.render(state);
            documentNameEditorView.render(state);
            documentDeleteView.render(state);
        })
    }
}

export default documentChoosePresenter;