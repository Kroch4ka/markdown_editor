const documentNameEditorStates = {
  IDLE: Symbol("IDLE"),
  EDITING: Symbol("EDITING"),
};

const sidebarStates = {
  OPEN: Symbol("OPEN"),
  CLOSE: Symbol("CLOSE"),
};

const modalStates = {
  OPEN: Symbol("OPEN"),
  CLOSE: Symbol("CLOSE"),
};

const workplaceStates = {
  EDITOR: Symbol("EDITOR"),
  PREVIEW: Symbol("PREVIEW"),
};

const themeSwitcherStates = {
  DARK: Symbol("DARK"),
  LIGHT: Symbol("LIGHT")
};

const modalDefaultData = {
  DELETE_DOCUMENT_MODAL: {
    TITLE: 'Delete this document?',
    DESCRIPTION: (documentName) => `Are you sure you want to delete the '${documentName}' document and its contents? This action cannot be reversed.`,
    BUTTON_TITLE: 'Confirm & Delete',
    BUTTON_DATA_ATTRIBUTE: 'data-confirm-delete-document'
  }
}

const defaultDocumentData = {
  ID: () => Date.now(),
  NAME: 'untitled.md',
  MARKDOWN: '',
  HTML: '',
}

export { documentNameEditorStates, sidebarStates, modalStates,
  workplaceStates, modalDefaultData, defaultDocumentData, themeSwitcherStates };
