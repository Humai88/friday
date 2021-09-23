import { authAPI, UserType } from "../api/api";
import { ThunkType } from "./store";

const initialState: ProfileInitialStateType = {
    profile: null,
};

export const profileReducer = (
    state = initialState,
    action: ActionProfileTypes
): ProfileInitialStateType => {
    switch (action.type) {
        case "SET-USER-PROFILE":
            return {
                ...state,
                profile: action.payload.profile,
            };

        default:
            return state;
    }
};

// Action Creators
export const setUserProfileAC = (profile: UserType) => {
    return { type: "SET-USER-PROFILE", payload: { profile } } as const;
};

// Thunks
export const setProfileTC = (): ThunkType => {
    return (dispatch) => {
        authAPI.me().then((res) => {
            dispatch(setUserProfileAC(res.data));
        });
    };
};
// Types
export type ActionProfileTypes = ReturnType<typeof setUserProfileAC>;
export type ProfileInitialStateType = { profile: null | UserType };
