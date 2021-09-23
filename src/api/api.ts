import axios from "axios";

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0",
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
    forgotPassword(email: string, from: string, message: string) {
        return instance.post<ForgotPasswordResponseType>(`auth/forgot`, {
            email,
            from,
            message,
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
    __v: number;
    token: string;
    tokenDeathTime: number;
    avatar: string;
    error?: string;
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
    __v: number;
};
export type RegisterResponseType = {
    addedUser: AddedUserType;
    error?: string;
};

export type ChangeInfoResponseType = {
    updatedUser: UserType;
    token: string;
    tokenDeathTime: number;
    error?: string;
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
