import { authAPI } from "../api/api";
import { catchErrorAC, setAppStatusAC } from "./appReducer";
import { setStatus } from "./loginReducer";
import { ThunkType } from "./store";

const initialState: ProfileInitialStateType = {
    profile: {
        _id: "",
        email: "",
        rememberMe: false,
        isAdmin: false,
        name: "",
        verified: false,
        publicCardPacksCount: 0,
        created: new Date(),
        updated: new Date(),
        avatar: "",
    },
    userId: "",
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
        case "SET_PROFILE_ID":
            return {
                ...state,
                userId: action.payload.userId,
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
export const setProfileIdAC = (userId: string) => {
    return {
        type: "SET_PROFILE_ID",
        payload: { userId },
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
                dispatch(setProfileIdAC(res.data._id));
            })
            .catch((err) => {
                const error = err.response
                    ? err.response.data.error
                    : err.message + ", more details in the console";
                console.log("err:", error);
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
    | ReturnType<typeof changeUserDataAC>
    | ReturnType<typeof setProfileIdAC>;

export type ProfileInitialStateType = {
    profile: DataUserType;
    userId: string;
};
type DataUserType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: number;
    created: Date;
    updated: Date;
    avatar: string;
};
