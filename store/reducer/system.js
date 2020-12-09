import * as types from '../action/types';

const initialState = {
    isOpenModalAddDocument: false,
    isOpenModalFileAction: false,
    isOpenModalFolderAction: false
}

export default system = (state = initialState, action) => {
    switch (action.type) {
        case types.OPEN_MODAL_ADD_DOCUMENT:
            return { ...state, isOpenModalAddDocument: true }
        case types.CLOSE_MODAL_ADD_DOCUMENT:
            return { ...state, isOpenModalAddDocument: false }
        case types.OPEN_MODAL_FILE_ACTION:
            return { ...state, isOpenModalFileAction: true }
        case types.CLOSE_MODAL_FILE_ACTION:
            return { ...state, isOpenModalFileAction: false }
        case types.OPEN_MODAL_FOLDER_ACTION:
            return { ...state, isOpenModalFolderAction: true }
        case types.CLOSE_MODAL_FOLDER_ACTION:
            return { ...state, isOpenModalFolderAction: false }
        default:
            return state;
    }
}