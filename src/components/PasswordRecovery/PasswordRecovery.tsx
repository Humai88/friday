import React from "react";
import styles from "./Password.module.css";
import { Input } from "../../UI-kit/Input/Input";
import { NavLink, Redirect } from "react-router-dom";
import { Button } from "../../UI-kit/Button/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEmailThunkCreator } from "../../redux/forgotReducer";
import { AppStore } from "../../redux/store";
import { PATH } from "../Routes/Routes";

export const PasswordRecovery = () => {
    const [mail, setMail] = useState<string>("");

    const dispatch = useDispatch();

    const initialized = useSelector<AppStore, boolean>(
        (state) => state.forgot.initialized
    );
    const error = useSelector<AppStore, boolean>((state) => state.forgot.error);
    const status = useSelector((state: AppStore) => state.app.status);
    if (initialized) {
        return <Redirect to={PATH.EMAIL_CHECK} />;
    }

    if (error) {
        return <Redirect to={PATH.PROFILE} />;
    }
    const buttonCallback = () => {
        dispatch(sendEmailThunkCreator(mail));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <h1>It-incubator</h1>

                <div className={styles.formWrapper}>
                    <form action="/">
                        <h2>Forgot your password?</h2>

                        <div className={styles.formGroup}>
                            <label>
                                <span>Email</span>
                                <br />
                                <Input
                                    type="text"
                                    placeholder={"......"}
                                    onChange={(e) => setMail(e.target.value)}
                                />
                            </label>
                        </div>

                        <div
                            className={`${styles.formGroup} ${styles.formGroupEmail}`}
                        >
                            <span>
                                Enter your email address and we will send you
                                further instructions
                            </span>
                        </div>
                    </form>
                </div>
                <div
                    className={`${styles.formGroup} ${styles.formGroupButton}`}
                >
                    <Button
                        disabled={status === "loading"}
                        type={"submit"}
                        onClick={buttonCallback}
                    >
                        Send instructions
                    </Button>
                </div>

                <p>Did you remember your password?</p>

                <div className={styles.navLinkGroup}>
                    <NavLink to={PATH.LOGIN}> Try logging in</NavLink>
                </div>
            </div>
        </div>
    );
};
