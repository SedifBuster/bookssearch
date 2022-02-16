import {combineReducers} from "redux";
import {createStore, applyMiddleware} from "redux";
import searchReducer from "./searchReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    search: searchReducer,

})

export const store = createStore(rootReducer,applyMiddleware(thunk))




