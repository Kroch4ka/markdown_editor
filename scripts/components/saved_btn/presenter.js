import savedBtnView from "./view.js";
import saveBtnDomain from "../../domain/ui/save_btn_domain.js";
import {saveBtnStates} from "../../constants.js";

const saveBtnNode = document.querySelector('[data-document-save]');
const showClickStateTimeout = 3000;

const saveBtnPresenter = {
    bindHandlers: function(state) {
        saveBtnNode.addEventListener('click', () => {
            if (state.uiState.saveBtn === saveBtnStates.IDLE) {
                saveBtnDomain.switchState(state);
                savedBtnView.render(state);
                this.delayedSavedStateChange(state);
            }
        });
    },
    delayedSavedStateChange: (state) => {
        if (state.uiState.saveBtn === saveBtnStates.CLICKED) {
            setTimeout(() => {
                saveBtnDomain.switchState(state);
                savedBtnView.render(state);
            }, showClickStateTimeout);
        }
    }
}

export default saveBtnPresenter;