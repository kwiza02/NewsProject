//loaderReducer

import { SET_LOADING } from "../action/actionType/actionType";

const initialState={
    isLoading:false,
}

const LoaderReducer=(state=initialState,action)=>{
    // console.log("reducer called.........",action.payload);
    switch (action.type) {
        case SET_LOADING:
            return{
                ...state,
                isLoading:action.payload
            }
            break;
    
        default:
           return {...state};
    }
}

export default LoaderReducer;