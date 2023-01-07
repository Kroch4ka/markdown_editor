
const documentDomain = {
    add: function(state, document) {
        state.documents = [...state.documents, document];
    },
    update: function(state, id, documentAttributes) {
        const targetDocument = this._findById(state, id);
        Object.assign(targetDocument, documentAttributes);
    },
    delete: function(state, id) {
        state.documents = state.documents.filter(document => document.id !== id);
    },
    isSavedCurrentDocument: function (state) {
        try {
            this._findById(state.currentDocument.id);
            return true;
        } catch {
            return false;
        }
    },
    _findById: function(state, id) {
        const targetDocument = state.documents.find(document => document.id === id);
        return targetDocument ? targetDocument : throw new Error('This document is not exist with given ID');
    }
}

export default documentDomain;