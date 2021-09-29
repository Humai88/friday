import axios from "axios";

let backend_URL_ADDRESS = process.env.REACT_APP_BACKEND_URL;

const instance = axios.create({
    baseURL: backend_URL_ADDRESS,
    withCredentials: true,
});
export const authAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<UserType>(`auth/login`, {
            email,
            password,
            rememberMe,
        });
    },
    register(email: string, password: string) {
        return instance.post<RegisterResponseType>(`auth/register`, {
            email,
            password,
        });
    },
    me() {
        return instance.post<UserType>(`auth/me`);
    },
    changeInfo(name: string, avatar: string) {
        return instance.put<ChangeInfoResponseType>(`auth/me`, {
            name,
            avatar,
        });
    },
    logout() {
        return instance.delete<LogoutResponseType>(`auth/me`);
    },
    forgotPassword(email: string) {
        return instance.post<ForgotPasswordResponseType>(`auth/forgot`, {
            email,
            from: "ai73a@yandex.by",
            message: `<div style="background-color: #d9d9f1; margin: 0 auto; padding: 2.5rem; display-flex;  flex-direction: column; align-items: center; justify-content: center; border-radius: 8px"><h2>Forgot your password?</h2><p>That's ok, it happens! Click on the button below to reset your password.</p> <a href='http://localhost:3000/?#/password-update/$token$'><button style="background-color: #21268f; color: #ececf9; padding: 10px 20px; border-radius: 8px;  text-decoration: none;  border: none; cursor:pointer; border-radius: 30px;">Reset your password</button></a></div>`,
        });
    },
    resetPassword(password: string, resetPasswordToken: string) {
        return instance.post<ResetPasswordResponseType>(
            `auth/set-new-password`,
            {
                password,
                resetPasswordToken,
            }
        );
    },
};

export const packsAPI = {
    getPacks(currentPage: number, pageCount: number) {
        return instance.get<PacksResponseType>(
            `cards/pack?pageCount=${pageCount}&page=${currentPage}`
        );
    },
    addPack(name: string) {
        return instance.post<AddPackResponseType>(`cards/pack`, {
            cardsPack: { name },
        });
    },
    deletePack(packId: string) {
        return instance.delete<DeletedPackResponseType>(
            `cards/pack?id=${packId}`
        );
    },
    updatePack(_id: string, name: string) {
        return instance.put<UpdatedPackResponseType>(`cards/pack`, {
            cardsPack: {
                _id,
                name,
            },
        });
    },
};

//Types
export type UserType = {
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
    error: string;
};

export type AddedUserType = {
    _id: string;
    email: string;
    rememberMe: boolean;
    isAdmin: boolean;
    name: string;
    verified: boolean;
    publicCardPacksCount: 0;
    created: Date;
    updated: Date;
};
export type RegisterResponseType = {
    addedUser: AddedUserType;
    error?: string;
};

export type ChangeInfoResponseType = {
    updatedUser: UserType;
    token: string;
    tokenDeathTime: number;
};

export type LogoutResponseType = {
    info: string;
    error?: string;
};
export type ForgotPasswordResponseType = {
    info: string;
    success: boolean;
    answer: boolean;
    html: boolean;
    error?: string;
};
export type ResetPasswordResponseType = {
    info: string;
    error?: string;
};

export type CardsPackType = {
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
export type PacksResponseType = {
    cardPacks: CardsPackType[];
    page: number;
    pageCount: number;
    cardPacksTotalCount: number;
    minCardsCount: number;
    maxCardsCount: number;
    token: string;
};
export type AddPackResponseType = {
    newCardsPack: CardsPackType;
    token: string;
};
export type DeletedPackResponseType = {
    deletedCardsPack: CardsPackType;
    token: string;
};
export type UpdatedPackResponseType = {
    updatedCardsPack: CardsPackType;
    token: string;
};

// type AddedPackType = {
//     name: string;
// };
