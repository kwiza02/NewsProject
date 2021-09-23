//loaderAction

import { SET_LOADING } from "./actionType/actionType";

import { store } from "../store/store";

export const setLoading=(value)=>{
    // console.log("action value........",value);
    store.dispatch({
        type:SET_LOADING,
        payload:value,
    })
}