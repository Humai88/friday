import { packsAPI } from "../api/api";
import { catchErrorAC, setAppStatusAC } from "./appReducer";
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
            updated: new Date(),
        },
    ],
    minCardsCount: 0,
    maxCardsCount: 100,
    currentPage: 1,
    pageCount: 10,
    cardPacksTotalCount: 0,
    userId: "",
    packsId: "",
    searchPacks: "",
    myPage: false,
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
        case "SET_SEARCH_PACKS":
            return {...state, searchPacks: action.payload.searchValue};
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
        case "SET_RANGE_VALUES":
            return {
                ...state,
                minCardsCount: action.payload.min,
                maxCardsCount: action.payload.max,
            };
        case "SET_MY_PAGE":
            return {
                ...state,
                myPage: action.payload.myPage
            };

        default:
            return state;
    }
};

// Action Creators
export const setPacksAC = (cardPacks: PackType[]) => {
    return {type: "SET_PACKS", payload: {cardPacks}} as const;
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
export const setSearchPacksAC = (searchValue: string) => {
    return {
        type: "SET_SEARCH_PACKS",
        payload: {
            searchValue,
        },
    } as const;
};
export const setRangeValuesAC = (min: number, max: number) => {
    return {
        type: "SET_RANGE_VALUES",
        payload: {
            min,
            max,
        },
    } as const;
};
export const setMyPageAC = (isCurrent: boolean) => {
    return {
        type: "SET_MY_PAGE",
        payload: {
            myPage: isCurrent
        },
    } as const;
};

// Thunks
export const getPacksTC = (): ThunkType => (dispatch, getState: () => AppStore) => {
    const packs = getState().packs;
    const myPage = packs.myPage;
    const currentPage = packs.currentPage;
    const pageCount = packs.pageCount;
    const userId = myPage ? getState().profile.profile._id : "";
    const packName = packs.searchPacks;
    const min = packs.minCardsCount;
    const max = packs.maxCardsCount;
    dispatch(setAppStatusAC("loading"));
    packsAPI
        .getPacks(currentPage, pageCount, packName, userId, min, max)
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
    | ReturnType<typeof catchErrorAC>
    | ReturnType<typeof setSearchPacksAC>
    | ReturnType<typeof setRangeValuesAC>
    | ReturnType<typeof setMyPageAC>;

export type AppInitialStateType = {
    cardPacks: PackType[];
    currentPage: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    userId: string;
    packsId: string;
    searchPacks: string;
    myPage: boolean;
};
export type PackType = {
    _id: string;
    user_id: string;
    user_name: string;
    private: false;
    name: string;
    cardsCount: 0;
    updated: Date;
};
