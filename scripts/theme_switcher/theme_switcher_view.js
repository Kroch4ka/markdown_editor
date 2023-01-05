import { themeSwitcherStates } from "../constants.js";

const themeSwitcherView = {
    render: (state) => {
        if (state.uiState.theme === themeSwitcherStates.LIGHT) {
            document.body.classList.remove('dark');
        } else if (state.uiState.theme === themeSwitcherStates.DARK) {
            document.body.classList.add('dark');
        }
    }
}

export default themeSwitcherView;