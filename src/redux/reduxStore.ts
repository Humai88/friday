import { combineReducers, createStore } from "redux";

let reducer = combineReducers({});
export const store = createStore(reducer);
export type RootStateType = ReturnType<typeof reducer>;
