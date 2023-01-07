import documentHelpers from "../../helpers/document_helpers.js"

const documentChooseView = {
    render: function(state) {
        this.clearNodesChosenState();
        if (documentHelpers.isSavedCurrentDocument(state)) {
            const chosenDocumentID = state.currentDocument.id;
            const chosenDocumentItem = document.querySelector(`[data-document-id="${chosenDocumentID}"]`);
            chosenDocumentItem.querySelector('.document_item__title').classList.add('chosen');
        }
    },
    clearNodesChosenState: () => {
        document.querySelectorAll('.document_item').forEach(node => {
            node.querySelector('.document_item__title').classList.remove('chosen');
        });
    }
}

export default documentChooseView;