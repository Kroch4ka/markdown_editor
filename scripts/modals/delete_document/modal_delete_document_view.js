import modalTemplateView from "../modal_template_view.js";
import { modalDefaultData, modalStates } from '../../constants.js'

const modalTitleNode = document.querySelector('.modal_title');
const modalDescriptionNode = document.querySelector('.modal_description');
const modalConfirmBtnNode = document.querySelector('.modal_confirm');

const modalDeleteDocumentView = {
  render: function(state) {
    modalTitleNode.textContent = modalDefaultData.DELETE_DOCUMENT_MODAL.TITLE;
    modalDescriptionNode.textContent = modalDefaultData.DELETE_DOCUMENT_MODAL.DESCRIPTION(state.currentDocument.name);
    modalConfirmBtnNode.textContent = modalDefaultData.DELETE_DOCUMENT_MODAL.BUTTON_TITLE;
    modalConfirmBtnNode.setAttribute(modalDefaultData.DELETE_DOCUMENT_MODAL.BUTTON_DATA_ATTRIBUTE, '');
    
    modalTemplateView.render(state);
  }
}

export default modalDeleteDocumentView;