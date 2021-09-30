import { authAPI } from "../api/api";
import { catchErrorAC, setAppStatusAC } from "./appReducer";
import { setStatus } from "./loginReducer";
import { ThunkType } from "./store";

const initialState: ProfileInitialStateType = {
    profile: {
        _id: null,
        email: null,
        rememberMe: null,
        isAdmin: null,
        name: null,
        verified: null,
        publicCardPacksCount: null,
        created: null,
        updated: null,
        avatar: null,
    },
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
        case "CHANGE_USER_DATA":
            return {
                ...state,
                profile: action.payload.userData,
            };
        default:
            return state;
    }
};

// Action Creators
export const setUserProfileAC = (profile: DataUserType) => {
    return { type: "SET_USER_PROFILE", payload: { profile } } as const;
};

export const changeUserDataAC = (userData: DataUserType) => {
    return {
        type: "CHANGE_USER_DATA",
        payload: { userData },
    } as const;
};

// Thunks
export const setAuthTC = (): ThunkType => {
    return (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        authAPI
            .me()
            .then((res) => {
                dispatch(setStatus(true));
                dispatch(setUserProfileAC(res.data));
            })
            .catch((err) => {
                const error = err.response
                    ? err.response.data.error
                    : err.message + ", more details in the console";
                console.log("err:", error);
                dispatch(catchErrorAC(error));
            })
            .finally(() => {
                dispatch(setAppStatusAC("succeeded"));
            });
    };
};
export const changeUserInfoTC = (name: string, imgUrl: string): ThunkType => {
    return (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        authAPI
            .changeInfo(name, imgUrl)
            .then((res) => {
                dispatch(changeUserDataAC(res.data.updatedUser));
            })
            .catch((err) => {
                const error = err.response
                    ? err.response.data.error
                    : err.message + ", more details in the console";
                console.log("err:", error);
                dispatch(catchErrorAC(error));
            })
            .finally(() => {
                dispatch(setAppStatusAC("succeeded"));
            });
    };
};

// Types
export type ActionProfileTypes =
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof changeUserDataAC>;
export type ProfileInitialStateType = {
    profile: DataUserType;
};
type DataUserType = {
    _id: string | null;
    email: string | null;
    rememberMe: boolean | null;
    isAdmin: boolean | null;
    name: string | null;
    verified: boolean | null;
    publicCardPacksCount: number | null;
    created: Date | null;
    updated: Date | null;
    avatar: string | null;
};
