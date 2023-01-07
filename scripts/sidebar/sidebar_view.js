import { sidebarStates } from '../constants.js'

const sidebarNode = document.querySelector('.sidebar');
const burgerMenuNode = document.querySelector('.burger');

const sidebarView = {
  render: (state) => {
    sidebarNode.classList.remove('hide');
    if (state.uiState.sidebar === sidebarStates.CLOSE) {
      sidebarNode.style.marginLeft = '-250px';
      burgerMenuNode.classList.remove('opened');
    } else if (state.uiState.sidebar === sidebarStates.OPEN) {
      sidebarNode.style.marginLeft = '0';
      burgerMenuNode.classList.add('opened');
    }
  }
}

export default sidebarView;