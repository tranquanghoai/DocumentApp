import * as types from '../action/types/file';

const initialState = {
    files: []
}

export default folder = (state = initialState, action) => {
    switch (action.type) {
        case types.PUSH_CREATED_FILE:
            const { file } = action
            return { ...state, files: [...state.files, file] }
        default:
            return state;
    }
}