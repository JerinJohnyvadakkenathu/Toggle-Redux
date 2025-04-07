import { combineReducers, createStore } from 'redux'; 
import Reducer from "./Reducer"
const combain=combineReducers({
    toggle:Reducer
})
const Store=createStore(combain);
export default Store