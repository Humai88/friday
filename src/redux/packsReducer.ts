import { packsAPI } from "../api/api";
import { setAppStatusAC } from "./appReducer";
import { AppStore, ThunkType } from "./store";

const initialState: AppInitialStateType = {
    cardPacks: [
        {
            _id: "",
            user_id: "",
            user_name: "",
            private: false,
            name: "",
            cardsCount: 0,
            type: "",
            rating: 0,
            updated: new Date(),
        },
    ],
    minCardsCount: 0,
    maxCardsCount: 0,
    currentPage: 1,
    pageCount: 10,
    cardPacksTotalCount: 0,
    userId: "",
    packsId: "",
    error: "",
};

export const packsReducer = (
    state = initialState,
    action: ActionPacksTypes
): AppInitialStateType => {
    switch (action.type) {
        case "SET_PACKS":
            return {
                ...state,
                cardPacks: action.payload.cardPacks.map((p) => p),
            };

        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload.currentPage,
            };
        case "SET_PACKS_TOTAL_COUNT":
            return {
                ...state,
                cardPacksTotalCount: action.payload.cardPacksTotalCount,
            };
        case "CATCH_ERROR":
            return {
                ...state,
                error: action.payload.error,
            };

        default:
            return state;
    }
};

// Action Creators
export const setPacksAC = (cardPacks: PackType[]) => {
    return { type: "SET_PACKS", payload: { cardPacks } } as const;
};
export const catchErrorAC = (error: string) => {
    return { type: "CATCH_ERROR", payload: { error } } as const;
};
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage,
        },
    } as const;
};
export const setPacksTotalCountAC = (cardPacksTotalCount: number) => {
    return {
        type: "SET_PACKS_TOTAL_COUNT",
        payload: {
            cardPacksTotalCount,
        },
    } as const;
};
// Thunks
export const getPacksTC =
    (): ThunkType => (dispatch, getState: () => AppStore) => {
        const packs = getState().packs;
        const currentPage = packs.currentPage;
        const pageCount = packs.pageCount;

        dispatch(setAppStatusAC("loading"));
        packsAPI
            .getPacks(currentPage, pageCount)
            .then((res) => {
                dispatch(setPacksAC(res.data.cardPacks));
                dispatch(setPacksTotalCountAC(res.data.cardPacksTotalCount));
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
export const addPackTC =
    (newPackName: string): ThunkType =>
    (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        packsAPI
            .addPack(newPackName)
            .then((res) => {
                dispatch(getPacksTC());
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
export const removePackTC =
    (packId: string): ThunkType =>
    (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        packsAPI
            .deletePack(packId)
            .then((res) => {
                dispatch(getPacksTC());
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
export const updatePackTC =
    (packId: string, title: string): ThunkType =>
    (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        packsAPI
            .updatePack(packId, title)
            .then((res) => {
                dispatch(getPacksTC());
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

// Types
export type ActionPacksTypes =
    | ReturnType<typeof setPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setPacksTotalCountAC>
    | ReturnType<typeof catchErrorAC>;

export type AppInitialStateType = {
    cardPacks: PackType[];
    currentPage: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    error: string;
    userId: string;
    packsId: string;
};
export type PackType = {
    _id: string;
    user_id: string;
    user_name: string;
    private: false;
    name: string;
    cardsCount: 0;
    type: string;
    rating: 0;
    updated: Date;
};
