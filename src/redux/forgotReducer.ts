import { Dispatch } from "redux";
import { authAPI } from "../api/api";

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
    (email: string, from: string, message: string) => (dispatch: Dispatch) => {
        authAPI
            .forgotPassword(email, from, message)
            .then(() => {
                dispatch(setInitializedAC(true));
            })
            .catch(() => {
                dispatch(setErrorAC(true));
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
