import { themeSwitcherStates } from "../constants.js";
import themeSwitcherView from "./theme_switcher_view.js";

const switcherWrapperNode = document.querySelector('.switcher_wrapper');

const themeSwitcherPresenter = {
    bindHandlers: (state) => {
        switcherWrapperNode.addEventListener('click', () => {
            if (state.uiState.theme === themeSwitcherStates.LIGHT) {
                state.uiState.theme = themeSwitcherStates.DARK;
            } else if (state.uiState.theme === themeSwitcherStates.DARK) {
                state.uiState.theme = themeSwitcherStates.LIGHT;
            }
            themeSwitcherView.render(state);
        });
    }
}

export default themeSwitcherPresenter;