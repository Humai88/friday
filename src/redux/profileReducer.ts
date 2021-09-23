import { authAPI, UserType } from "../api/api";
import { ThunkType } from "./store";

const initialState: ProfileInitialStateType = {
    profile: null,
    error: "",
};

export const profileReducer = (
    state = initialState,
    action: ActionProfileTypes
): ProfileInitialStateType => {
    switch (action.type) {
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.payload.profile,
            };
        case "CATCH_ERROR":
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;
    }
};

// Action Creators
export const setUserProfileAC = (profile: UserType) => {
    return { type: "SET_USER_PROFILE", payload: { profile } } as const;
};
export const catchErrorAC = (error: string) => {
    return { type: "CATCH_ERROR", payload: { error } } as const;
};
export const changeUserInfoAC = (name: string, imgUrl: string) => {
    return { type: "CHANGE_USER_INFO", payload: { name, imgUrl } } as const;
};

// Thunks

export const setProfileTC = (): ThunkType => {
    return (dispatch) => {
        authAPI
            .me()
            .then((res) => {
                dispatch(setUserProfileAC(res.data));
            })
            .catch((err) => {
                const error = err.response
                    ? err.response.data.error
                    : err.message + ", more details in the console";
                console.log("err:", error);
                dispatch(catchErrorAC(error));
            });
    };
};

// Types
export type ActionProfileTypes =
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof changeUserInfoAC>
    | ReturnType<typeof catchErrorAC>;
// | ReturnType<typeof setIsLoggedInAC>;
export type ProfileInitialStateType = {
    profile: null | UserType;
    error: string;
};
