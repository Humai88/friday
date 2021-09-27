import { authAPI } from "../api/api";
import { setStatus } from "./loginReducer";
import { setAuthTC, setUserProfileAC } from "./profileReducer";
import { ThunkType } from "./store";

const initialState: AppInitialStateType = {
    isInitialized: false,
    status: "idle",
};

export const packsReducer = (
    state = initialState,
    action: ActionAppTypes
): AppInitialStateType => {
    switch (action.type) {
        case "SET-INITIALISATION":
            return { ...state, isInitialized: true };
        default:
            return state;
        case "SET-STATUS":
            return {
                ...state,
                status: action.payload.status,
            };
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
    dispatch(setAuthTC());
    dispatch(setIsInitializedAC());
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
