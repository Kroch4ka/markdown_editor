import { modalStates } from "../constants.js";

const modalTemplateNode = document.querySelector('.modal');
const modalOverlayNode = document.querySelector('.modal_overlay');

const modalTemplateView = {
  render: (state) => {
    if (state.uiState.modal.state === modalStates.OPEN) {
      modalTemplateNode.classList.remove('hide');
      modalOverlayNode.classList.remove('hide');
    } else if (state.uiState.modal.state === modalStates.CLOSE) {
      modalTemplateNode.classList.add('hide');
      modalOverlayNode.classList.add('hide');
    }
  }
}

export default modalTemplateView;