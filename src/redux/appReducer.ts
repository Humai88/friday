import { authAPI, UserType } from "../api/api";
import { LoginInitialStateType, setStatus } from "./loginReducer";
import { ThunkType } from "./store";

const initialState: AppInitialStateType = {
    isInitialized: false,
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

// Thunks

export const initializeAppThunk = (): ThunkType => (dispatch) => {
    authAPI
        .me()
        .then((res) => {
            dispatch(setStatus(true));
        })
        .finally(() => {
            dispatch(setIsInitializedAC());
        });
};

// Types
export type ActionAppTypes = ReturnType<typeof setIsInitializedAC>;

export type AppInitialStateType = {
    isInitialized: boolean;
};
