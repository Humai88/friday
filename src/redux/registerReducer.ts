import { AddedUserType, authAPI, RegisterResponseType } from "../api/api";
import { ThunkType } from "./store";

const initialState: RegisterInitialStateType = {
    addedUser: {
        _id: "",
        email: "",
        rememberMe: false,
        isAdmin: false,
        name: "",
        verified: false,
        publicCardPacksCount: 0,
        created: new Date(),
        updated: new Date(),
        __v: 0,
    },
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
        case "ADD_USER_DATA":
            return {
                ...state,
                ...action.payload.userData,
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
export const addUserDataAC = (userData: AddedUserType) => {
    return {
        type: "ADD_USER_DATA",
        payload: { userData },
    } as const;
};

// Thunks
export const registerUserTC = (email: string, password: string): ThunkType => {
    return (dispatch) => {
        authAPI
            .register(email, password)
            .then((res) => {
                dispatch(addUserDataAC(res.data.addedUser));
                dispatch(registerSuccessAC());
            })
            .catch((err) => {
                const error = err.response
                    ? err.response.data.error
                    : err.message + ", more details in the console";
                console.log("err:", error);
                dispatch(registerFailureAC(error));
            });
    };
};

// Types
export type ActionRegisterTypes =
    | ReturnType<typeof registerFailureAC>
    | ReturnType<typeof registerSuccessAC>
    | ReturnType<typeof addUserDataAC>;

export type RegisterInitialStateType = RegisterResponseType & AdditionalType;
export type AdditionalType = { isRegistered: boolean };
