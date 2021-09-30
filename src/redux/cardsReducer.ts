import { cardsAPI, packsAPI } from "../api/api";
import { catchErrorAC, setAppStatusAC } from "./appReducer";
import { AppStore, ThunkType } from "./store";

const initialState: AppInitialStateType = {
    cards: [
        {
            _id: "",
            cardsPack_id: "",
            user_id: "",
            answer: "",
            question: "",
            grade: 0,
            shots: 0,
            rating: 0,
            updated: new Date(),
        },
    ],
    minCardsCount: 0,
    maxCardsCount: 0,
    currentPage: 1,
    pageCount: 10,
    cardsCount: 0,
    userId: "",
    packsId: "",
};

export const cardsReducer = (
    state = initialState,
    action: ActionCardsTypes
): AppInitialStateType => {
    switch (action.type) {
        case "SET_CARDS":
            return {
                ...state,
                cards: action.payload.cards.map((p) => p),
            };
        case "SET_CURRENT_PAGE":
            return {
                ...state,
                currentPage: action.payload.currentPage,
            };
        case "SET_CARDS_TOTAL_COUNT":
            return {
                ...state,
                cardsCount: action.payload.cardsCount,
            };

        default:
            return state;
    }
};

// Action Creators
export const setCardsAC = (cards: CardType[]) => {
    return { type: "SET_CARDS", payload: { cards } } as const;
};

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET_CURRENT_PAGE",
        payload: {
            currentPage,
        },
    } as const;
};
export const setCardsCountAC = (cardsCount: number) => {
    return {
        type: "SET_CARDS_TOTAL_COUNT",
        payload: {
            cardsCount,
        },
    } as const;
};
export const setUserIdAC = (userId: number) => {
    return {
        type: "SET_USER_ID",
        payload: {
            userId,
        },
    } as const;
};
// Thunks
export const getCardsTC =
    (packId: string): ThunkType =>
    (dispatch) => {
        dispatch(setAppStatusAC("loading"));
        cardsAPI
            .getCards(packId)
            .then((res) => {
                dispatch(setCardsAC(res.data.cards));
                // dispatch(setPacksTotalCountAC(res.data.cardPacksTotalCount));
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
export type ActionCardsTypes =
    | ReturnType<typeof setCardsAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setCardsCountAC>
    | ReturnType<typeof setUserIdAC>;

export type AppInitialStateType = {
    cards: CardType[];
    currentPage: number;
    pageCount: number;
    cardsCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    userId: string;
    packsId: string;
};
export type CardType = {
    _id: string;
    cardsPack_id: string;
    user_id: string;
    answer: string;
    question: string;
    grade: number;
    shots: number;
    rating: number;
    updated: Date;
};
