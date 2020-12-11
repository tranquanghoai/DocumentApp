import * as types from '../action/types/system';

const initialState = {
    isOpenModalAddDocument: false,
    isOpenModalFileAction: false,
    isOpenModalFolderAction: false,
    isOpenModalCreateFolder: false,
    isOpenModalAddFileInfo: false
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

        case types.OPEN_MODAL_CREATE_FOLDER:
            return { ...state, isOpenModalCreateFolder: true }
        case types.CLOSE_MODAL_CREATE_FOLDER:
            return { ...state, isOpenModalCreateFolder: false }

        case types.OPEN_MODAL_ADD_FILE_INFO:
            return { ...state, isOpenModalAddFileInfo: true }
        case types.CLOSE_MODAL_ADD_FILE_INFO:
            return { ...state, isOpenModalAddFileInfo: false }

        default:
            return state;
    }
}