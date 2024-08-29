import { createStore } from 'https://cdn.skypack.dev/redux';
import  counterReducers  from "./reducers/counterReducers.js";

export const store = createStore(counterReducers);

