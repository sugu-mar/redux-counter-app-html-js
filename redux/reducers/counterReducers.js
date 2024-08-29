import { INCREASE,DECREASE,RESET } from "../actions/actionTypes.js";

const initialState = 0;

function counterReducers(state=initialState,action){

    switch(action.type){

        case INCREASE: return state + action.value

        case DECREASE: return state - action.value

        case RESET : return  initialState

        default:return state

    }

}

export default counterReducers;