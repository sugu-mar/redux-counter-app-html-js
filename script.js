import {store} from "./redux/store.js"
import { increase,decrease,reset } from "./redux/actions/counteractions.js";




const counter = document.getElementById("counter");
counter.innerText= store.getState();


const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset")

increaseButton.addEventListener("click",()=>{
    store.dispatch(increase())
    counter.innerText= store.getState();
})



decreaseButton.addEventListener("click",()=>{
    store.dispatch(decrease())
    counter.innerText= store.getState();
})



resetButton.addEventListener("click",()=>{
    store.dispatch(reset())
    counter.innerText= store.getState();
})
