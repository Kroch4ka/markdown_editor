import { sidebarStates } from '../constants.js'

const sidebarNode = document.querySelector('.sidebar');

const sidebarView = {
  render: (state) => {
    sidebarNode.classList.remove('hide');
    if (state.uiState.sidebar.state === sidebarStates.CLOSE) {
      sidebarNode.style.marginLeft = '-250px';
    } else if (state.uiState.sidebar.state === sidebarStates.OPEN) {
      sidebarNode.style.marginLeft = '0';
    }
  }
}

export default sidebarView;