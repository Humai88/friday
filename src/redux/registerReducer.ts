import { authAPI } from "../api/api";
import { setAppStatusAC } from "./appReducer";
import { ThunkType } from "./store";

const initialState: RegisterInitialStateType = {
    error: "",
    isRegistered: false,
};

export const registerReducer = (
    state = initialState,
    action: ActionRegisterTypes
): RegisterInitialStateType => {
    switch (action.type) {
        case "REGISTER_SUCCESS":
            return {
                ...state,
                isRegistered: true,
            };
        case "REGISTER_FAILURE":
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

export const registerFailureAC = (error: string) => {
    return {
        type: "REGISTER_FAILURE",
        payload: { error },
    } as const;
};
export const registerSuccessAC = () => {
    return {
        type: "REGISTER_SUCCESS",
    } as const;
};

// Thunks
export const registerUserTC = (email: string, password: string): ThunkType => {
    return (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        authAPI
            .register(email, password)
            .then((res) => {
                dispatch(registerSuccessAC());
            })
            .catch((err) => {
                const error = err.response
                    ? err.response.data.error
                    : err.message + ", more details in the console";
                console.log("err:", error);
                dispatch(registerFailureAC(error));
            })
            .finally(() => {
                dispatch(setAppStatusAC("succeeded"));
            });
    };
};

// Types
export type ActionRegisterTypes =
    | ReturnType<typeof registerFailureAC>
    | ReturnType<typeof registerSuccessAC>;

export type RegisterInitialStateType = { isRegistered: boolean; error: string };
