import { ThunkType } from "./store";
import { Dispatch } from "redux";
import { authAPI } from "../api/api";
import { setAppStatusAC } from "./appReducer";

const initialState: AuthInitialStateType = {
    initialized: false, // transfer to succesful succesful page
    error: false, // show error page
};

export const forgotReducer = (
    state = initialState,
    action: ActionForgotTypes
): AuthInitialStateType => {
    switch (action.type) {
        case "setInitialized":
            return { ...state, initialized: action.initialized };

        case "setError":
            return { ...state, error: action.error };

        default:
            return state;
    }
};

//Thunk one love)))
export const sendEmailThunkCreator =
    (email: string) => (dispatch: Dispatch) => {
        dispatch(setAppStatusAC("loading"));
        authAPI
            .forgotPassword(email)
            .then(() => {
                dispatch(setInitializedAC(true));
            })
            .catch(() => {
                dispatch(setErrorAC(true));
            })
            .finally(() => {
                dispatch(setAppStatusAC("succeeded"));
            });
    };

export const sendNewPasswordThunkCreator =
    (email: string, token: string) => (dispatch: Dispatch) => {
        dispatch(setAppStatusAC("loading"));
        authAPI
            .resetPassword(email, token)
            .then((res) => {
                dispatch(setInitializedAC(true));
            })
            .catch(() => {
                dispatch(setErrorAC(true));
            })
            .finally(() => {
                dispatch(setAppStatusAC("succeeded"));
            });
    };
//Action Creators

export const setInitializedAC = (initialized: boolean) => {
    return { type: "setInitialized", initialized } as const;
};
export type setInitializedAT = ReturnType<typeof setInitializedAC>;

export const setErrorAC = (error: boolean) => {
    return { type: "setError", error } as const;
};
export type seErrorAT = ReturnType<typeof setErrorAC>;

export type ActionForgotTypes = setInitializedAT | seErrorAT;

// Types

export type AuthInitialStateType = {
    initialized: boolean;
    error: boolean;
};
