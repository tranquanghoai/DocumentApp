import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import ReduxThunk from 'redux-thunk'

import system from './reducer/system'
import folder from './reducer/folder'
import file from './reducer/file'
import auth from './reducer/auth'

const rootReducer = combineReducers({
    system,
    folder,
    file,
    auth
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(ReduxThunk))
);
export default store