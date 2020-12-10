import * as types from '../action/types/folder';

const initialState = {
    folders: [],
    parentFolder: null
}

export default folder = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LIST_FOLDER:
            const { folders } = action
            return { ...state, folders: folders }
        case types.PUSH_CREATED_FOLDER:
            const { folder } = action
            return { ...state, folders: [...state.folders, folder] }
        case types.CHOOSE_PARENT_FOLDER:
            return { ...state, parentFolder: action.parentFolder }
        default:
            return state;
    }
}