import { applyMiddleware } from "redux";
import { combineReducers, createStore } from "redux";
import thunkMiddleware, { ThunkAction } from "redux-thunk";
import { forgotReducer } from "./forgotReducer";
import { ActionLoginTypes, loginReducer } from "./loginReducer";
import { ActionProfileTypes, profileReducer } from "./profileReducer";
import { ActionRegisterTypes, registerReducer } from "./registerReducer";

const reducers = combineReducers({
    login: loginReducer,
    register: registerReducer,
    forgot: forgotReducer,
    profile: profileReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
// Types
export type AppStore = ReturnType<typeof reducers>;
export type AppActionsType =
    | ActionLoginTypes
    | ActionProfileTypes
    | ActionRegisterTypes;

export type ThunkType = ThunkAction<void, AppStore, unknown, AppActionsType>;
// @ts-ignore
window.store = store; // for dev
