import {defaultDocumentData} from "../constants.js";

const documentHelpers = {
  getDocumentByID: (id, state) => {
    return state.documents.find(document => document.id === id);
  },
  createDefaultDocument: () => {
    return {
      id: defaultDocumentData.ID,
      name: defaultDocumentData.NAME,
      markdown: defaultDocumentData.MARKDOWN,
      html: defaultDocumentData.HTML
    }
  },
  saveCurrentDocument: (state) => {
    state.documents.push({ ...state.currentDocument })
  }
}

export default documentHelpers;