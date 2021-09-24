import { authAPI } from "../api/api";
import { setStatus } from "./loginReducer";
import { setUserProfileAC } from "./profileReducer";
import { ThunkType } from "./store";

const initialState: AppInitialStateType = {
    isInitialized: false,
    status: "idle",
};

export const appReducer = (
    state = initialState,
    action: ActionAppTypes
): AppInitialStateType => {
    switch (action.type) {
        case "SET-INITIALISATION":
            return { ...state, isInitialized: true };
        default:
            return state;
    }
};

// Action Creators
export const setIsInitializedAC = () => {
    return {
        type: "SET-INITIALISATION",
    } as const;
};
export const setAppStatusAC = (status: RequestStatusType) => {
    return {
        type: "SET-STATUS",
        payload: {
            status,
        },
    } as const;
};

// Thunks

export const initializeAppThunk = (): ThunkType => (dispatch) => {
    authAPI
        .me()
        .then((res) => {
            dispatch(setStatus(true));
            dispatch(setUserProfileAC(res.data));
        })
        .finally(() => {
            dispatch(setIsInitializedAC());
        });
};

// Types
export type ActionAppTypes =
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppStatusAC>;

export type AppInitialStateType = {
    isInitialized: boolean;
    status: RequestStatusType;
};
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
