import documentHelpers from '../../helpers/document_helpers.js'

const deleteBtnNode = document.querySelector('[data-modal-delete]');

const documentDeleteView = {
  render: (state) => {
    if (!documentHelpers.isSavedCurrentDocument(state)) {
      deleteBtnNode.style.display = 'none';
    } else {
      deleteBtnNode.style.display = 'block';
    }
  }
}

export default documentDeleteView;