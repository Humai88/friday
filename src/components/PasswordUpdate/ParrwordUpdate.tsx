import React, { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import { sendNewPasswordThunkCreator } from "../../redux/forgotReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";
import { Input } from "../../UI-kit/Input/Input";
import { PATH } from "../Routes/Routes";
import styles from "./ParrwordUpdate.module.css";

export const PasswordUpdate = () => {
    const [newPassword, setNewPassword] = useState<string>("");
    const { token } = useParams<TokenType>();
    const success = useSelector((state: AppStore) => state.forgot.initialized);
    const handleInputNewPassChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value);
    };
    const status = useSelector((state: AppStore) => state.app.status);
    const dispatch = useDispatch();
    const submitHandler = () => {
        dispatch(sendNewPasswordThunkCreator(newPassword, token));
    };
    if (success === true) {
        return <Redirect to={PATH.LOGIN} />;
    }
    return (
        <div className={styles.wrapper}>
            <Card className={styles.emailChecking}>
                <h1>It-incubator</h1>
                <h2>Create new password</h2>
                <div className={`${styles.formGroup} ${styles.shapeIcon}`}>
                    <label>
                        <span>Password</span>
                        <br />
                        <Input
                            type="password"
                            onChange={handleInputNewPassChange}
                            value={newPassword}
                        />
                    </label>
                    <p>
                        Create new password and we will send you futher
                        instructions to email
                    </p>
                </div>
                <Button
                    onClick={submitHandler}
                    disabled={status === "loading"}
                    className={styles.btn}
                >
                    Create new password
                </Button>
            </Card>
        </div>
    );
};

// Types
type TokenType = {
    token: string;
};
