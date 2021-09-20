import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { forgotReducer } from "./forgotReducer";
import { loginReducer } from "./loginReducer";
import { registerReducer } from "./registerReducer";


const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    forgot: forgotReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

export type AppStore = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev

