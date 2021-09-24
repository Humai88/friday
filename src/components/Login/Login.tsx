import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Login.module.css";
import { NavLink, Redirect } from "react-router-dom";
import { Input } from "../../UI-kit/Input/Input";
import { Button } from "../../UI-kit/Button/Button";
import { Checkbox } from "../../UI-kit/Checkbox/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import {
    loginUserData,
    setEmail,
    setRememberMe,
    showErrorMessage,
} from "../../redux/loginReducer";

export const Login = () => {
    const email = useSelector((state: AppStore) => state.login.data.email);
    const rememberMe = useSelector(
        (state: AppStore) => state.login.data.rememberMe
    );
    const errorMessage = useSelector(
        (state: AppStore) => state.login.data.error
    );
    const isLogin = useSelector((state: AppStore) => state.login.isAuth);

    const dispatch = useDispatch();
    const [password, setPassword] = useState<string>("");

    const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setRememberMe(e.currentTarget.checked));
    };

    const onEmailInput = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value));
    };

    const onPasswordInput = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const onSubmitClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        dispatch(loginUserData(email, password, rememberMe));
        dispatch(showErrorMessage(errorMessage));

        setTimeout(() => {
            dispatch(showErrorMessage(""));
        }, 3000);
    };

    if (isLogin === true) {
        return <Redirect to={"/profile"} />;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <h1>It-incubator</h1>

                <div className={styles.formWrapper}>
                    <form action="/">
                        <h2>Sign In</h2>

                        <div className={styles.formGroup}>
                            <label>
                                <span>Email</span>
                                <br />
                                <Input
                                    type="text"
                                    value={email}
                                    onChange={onEmailInput}
                                />
                                <span className={styles.error}></span>
                            </label>
                        </div>

                        <div
                            className={`${styles.formGroup} ${styles.shapeIcon}`}
                        >
                            <label>
                                <span>Password</span>
                                <br />
                                <Input
                                    type="password"
                                    value={password}
                                    onChange={onPasswordInput}
                                />
                                <span className={styles.error}></span>
                            </label>
                        </div>

                        <div
                            className={`${styles.formGroup} ${styles.formGroupCheckbox}`}
                        >
                            <label>
                                <Checkbox
                                    checked={rememberMe}
                                    onChange={onCheckboxClick}
                                />
                                <span>Remember me</span>
                            </label>
                        </div>

                        <div
                            className={`${styles.formGroup} ${styles.formGroupPassword}`}
                        >
                            <NavLink to={"/password-recovery"}>
                                Forgot Password
                            </NavLink>
                        </div>

                        <div
                            className={`${styles.formGroup} ${styles.formGroupButton}`}
                        >
                            <Button type={"submit"} onClick={onSubmitClick}>
                                Login
                            </Button>
                        </div>
                    </form>
                </div>

                <p>Don’t have an account?</p>

                <div className={styles.navLinkGroup}>
                    <NavLink to={"/register"}> Sign Up</NavLink>
                </div>
            </div>

            {errorMessage && (
                <div className={styles.errorMessage}>{errorMessage}</div>
            )}
        </div>
    );
};
