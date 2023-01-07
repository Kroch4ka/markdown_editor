import {saveBtnStates} from "../../constants.js";

const doneBtnIconNode = document.querySelector('.save .icon-done');
const saveBtnIconNode = document.querySelector('.save .icon-save');
const saveBtnNode = document.querySelector('[data-document-save]')

const savedBtnView = {
    render: (state) => {
        if (state.uiState.saveBtn === saveBtnStates.IDLE) {
            doneBtnIconNode.classList.add('hide');
            saveBtnIconNode.classList.remove('hide');
            saveBtnNode.disabled = false;
        } else if (state.uiState.saveBtn === saveBtnStates.CLICKED) {
            doneBtnIconNode.classList.remove('hide');
            saveBtnIconNode.classList.add('hide');
            saveBtnNode.disabled = true;
        }
    }
}

export default savedBtnView;