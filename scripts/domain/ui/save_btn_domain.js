import {saveBtnStates} from "../../constants.js";

const saveBtnDomain = {
    switchState: (state) => {
        state.uiState.saveBtn = state.uiState.saveBtn === saveBtnStates.IDLE ? saveBtnStates.CLICKED : saveBtnStates.IDLE;
    },
}

export default saveBtnDomain;