import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
const initialState = {};
const store = createStore(reducer,initialState, applyMiddleware(thunk));
const reducer = combineReducers({
    listEmployee = employeeListReducer
})
export default store;
