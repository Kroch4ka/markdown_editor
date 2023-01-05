import {defaultDocumentData} from "../constants.js";

const documentHelpers = {
  getDocumentByID: (id, state) => {
    return state.documents.find(document => document.id === id);
  },
  createDefaultDocument: () => {
    return {
      id: defaultDocumentData.ID(),
      name: defaultDocumentData.NAME,
      markdown: defaultDocumentData.MARKDOWN,
      html: defaultDocumentData.HTML
    }
  },
  saveCurrentDocument: function(state) {
    if (this.isSavedCurrentDocument(state)) {
      Object.assign(this.getDocumentByID(state.currentDocument.id, state), state.currentDocument);
    } else {
      state.documents.push({ ...state.currentDocument })
    }
  },
  changeCurrentDocument: (state, document) => {
    state.currentDocument = document;
  },
  isSavedCurrentDocument: (state) => {
    return !!state.documents.find(document => document.id === state.currentDocument.id);
  }
}

export default documentHelpers;