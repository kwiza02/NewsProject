//rootReducer

import { combineReducers } from "redux";

import LoaderReducer from "./loaderReducer";

const rootReducer=combineReducers({
    loader:LoaderReducer,
})

export default rootReducer;