import { INCREASE,DECREASE,RESET } from "./actionTypes.js"

export function increase (value=1){
    return{type:INCREASE,
        value
    }
}



export function decrease (value=1){
    return{type:DECREASE,value}
}


export function reset (){
    return{type:RESET}
}


