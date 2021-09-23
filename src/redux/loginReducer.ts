import { Dispatch } from "redux";
import { authAPI, UserType } from "../api/api";

export enum ACTIONS_TYPE {
    SET_EMAIL = "Login/SET-EMAIL",
    SET_REMEMBER_ME = "Login/SET-REMEMBER-ME",
    SHOW_ERROR_MESSAGE = "Login/SHOW-ERROR-MESSAGE",
    SET_AUTH_STATUS = "Login/SET-AUTH-STATUS",
    SAVE_DATA_USER = "Login/SAVE-DATA-USER",
}

const initialState = {
    isAuth: false,
    data: {
        _id: "",
        email: "",
        name: "",
        avatar: "",
        publicCardPacksCount: 0,
        created: new Date(),
        updated: new Date(),
        isAdmin: false,
        verified: false,
        rememberMe: false,
        error: "",
    },
};

export const loginReducer = (
    state: LoginInitialStateType = initialState,
    action: ActionLoginTypes
): LoginInitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPE.SET_EMAIL:
        case ACTIONS_TYPE.SET_REMEMBER_ME:
        case ACTIONS_TYPE.SHOW_ERROR_MESSAGE:
            return {
                ...state,
                data: {
                    ...state.data,
                    ...action.payload.data,
                },
            };

        case ACTIONS_TYPE.SAVE_DATA_USER: {
            return {
                ...state,
                ...action.payload.data,
            };
        }
        case ACTIONS_TYPE.SET_AUTH_STATUS: {
            return {
                ...state,
                ...action.payload,
            };
        }

        default:
            return state;
    }
};

// Action Creators
export const setEmail = (email: string) => {
    return {
        type: ACTIONS_TYPE.SET_EMAIL,
        payload: {
            data: { email },
        },
    } as const;
};

export const setRememberMe = (rememberMe: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_REMEMBER_ME,
        payload: {
            data: { rememberMe },
        },
    } as const;
};

export const showErrorMessage = (error: string) => {
    return {
        type: ACTIONS_TYPE.SHOW_ERROR_MESSAGE,
        payload: {
            data: { error },
        },
    } as const;
};

export const saveDataUser = (data: UserType) => {
    return {
        type: ACTIONS_TYPE.SAVE_DATA_USER,
        payload: { data },
    } as const;
};

export const setStatus = (isAuth: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_AUTH_STATUS,
        payload: { isAuth },
    } as const;
};

// Thunk
export const loginUserData = (
    email: string,
    password: string,
    rememberMe: boolean
) => {
    return (dispatch: Dispatch<ActionLoginTypes>) => {
        authAPI
            .login(email, password, rememberMe)
            .then((res) => {
                dispatch(saveDataUser(res.data));
                dispatch(setStatus(true));
            })
            .catch((err) => {
                const error = err.response
                    ? err.response.data.error
                    : err.message + ", more details in the console";
                console.log("err:", error);
                dispatch(showErrorMessage(error));
            });
    };
};

export const logoutThunk = () => (dispatch: Dispatch<ActionLoginTypes>) => {
    authAPI
        .logout()
        .then((res) => {
            dispatch(setStatus(false));
        })
        .catch((err) => {
            const error = err.response
                ? err.response.data.error
                : err.message + ", more details in the console";
            console.log("err:", error);
            dispatch(showErrorMessage(error));
        });
};
// Types
export type LoginInitialStateType = typeof initialState;
export type ActionLoginTypes =
    | ReturnType<typeof setEmail>
    | ReturnType<typeof setRememberMe>
    | ReturnType<typeof showErrorMessage>
    | ReturnType<typeof saveDataUser>
    | ReturnType<typeof setStatus>;
