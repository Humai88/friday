import { setAuthTC } from "./profileReducer";
import { ThunkType } from "./store";

const initialState: AppInitialStateType = {
    isInitialized: false,
    status: "idle",
    error: "",
};

export const appReducer = (
    state = initialState,
    action: ActionAppTypes
): AppInitialStateType => {
    switch (action.type) {
        case "SET-INITIALISATION":
            return { ...state, isInitialized: true };
        case "CATCH_ERROR":
            return {
                ...state,
                error: action.payload.error,
            };

        case "SET-STATUS":
            return {
                ...state,
                status: action.payload.status,
            };
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
export const catchErrorAC = (error: string) => {
    return { type: "CATCH_ERROR", payload: { error } } as const;
};
// Thunks

export const initializeAppThunk = (): ThunkType => (dispatch) => {
    dispatch(setAuthTC());
    dispatch(setIsInitializedAC());
};

// Types
export type ActionAppTypes =
    | ReturnType<typeof setIsInitializedAC>
    | ReturnType<typeof setAppStatusAC>
    | ReturnType<typeof catchErrorAC>;

export type AppInitialStateType = {
    isInitialized: boolean;
    status: RequestStatusType;
    error: string;
};
export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed";
