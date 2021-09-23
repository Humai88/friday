import React, { ChangeEvent, useState, MouseEvent } from "react";
import { Redirect } from "react-router-dom";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";
import { Input } from "../../UI-kit/Input/Input";
import styles from "./Register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { registerUserTC } from "../../redux/registerReducer";
import { AppStore } from "../../redux/store";

export const Register = () => {
    const [user, setUser] = useState<InitialValuesType>({
        email: "",
        createPassword: "",
        confirmPassword: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        const newValue = value;
        setUser({
            ...user,
            [name]: newValue,
        });
    };
    const isRegistered = useSelector(
        (state: AppStore) => state.register.isRegistered
    );
    const errorMessage = useSelector((state: AppStore) => state.register.error);
    const dispatch = useDispatch();

    function handleSubmit(e: MouseEvent<HTMLElement>) {
        e.preventDefault();
        setSubmitted(true);
        if (
            user.email &&
            user.createPassword &&
            user.confirmPassword &&
            user.createPassword === user.confirmPassword
        ) {
            dispatch(registerUserTC(user.email, user.createPassword));
            setUser({ email: "", createPassword: "", confirmPassword: "" });
        }
    }

    if (isRegistered === true) {
        return <Redirect to={"/login"} />;
    }
    return (
        <div>
            <div className={styles.wrapper}>
                <Card className={styles.register}>
                    <h1>It-incubator</h1>

                    <div className={styles.formWrapper}>
                        <form>
                            <h2>Sign Up</h2>
                            <div className={styles.formGroup}>
                                <label>
                                    <span>Email</span>
                                    <br />
                                    <Input
                                        onChange={handleInputChange}
                                        name="email"
                                        type="text"
                                        required
                                        value={user.email}
                                    />
                                </label>
                                {submitted && !user.email && (
                                    <div>Email is required.</div>
                                )}
                            </div>

                            <div
                                className={`${styles.formGroup} ${styles.shapeIcon}`}
                            >
                                <label>
                                    <span>Password</span>
                                    <br />
                                    <Input
                                        onChange={handleInputChange}
                                        name="createPassword"
                                        type="password"
                                        required
                                        value={user.createPassword}
                                    />
                                </label>
                                {submitted && !user.createPassword && (
                                    <div>Password is required.</div>
                                )}
                            </div>
                            <div
                                className={`${styles.formGroup} ${styles.shapeIcon}`}
                            >
                                <label>
                                    <span>Confirm Password</span>
                                    <br />
                                    <Input
                                        onChange={handleInputChange}
                                        name="confirmPassword"
                                        type="password"
                                        required
                                        value={user.confirmPassword}
                                    />
                                </label>
                                {submitted &&
                                    user.confirmPassword !==
                                        user.createPassword && (
                                        <div>Passwords do not match.</div>
                                    )}
                                {(submitted && !user.confirmPassword) ||
                                    (user.confirmPassword !==
                                        user.createPassword && (
                                        <div>
                                            You should confirm your password.
                                        </div>
                                    ))}
                            </div>

                            <div
                                className={`${styles.formGroup} ${styles.formGroupButton}`}
                            >
                                <Button
                                    className={styles.cancelBtn}
                                    purple
                                    type={"submit"}
                                    onClick={() => {
                                        setUser({
                                            email: "",
                                            createPassword: "",
                                            confirmPassword: "",
                                        });
                                    }}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    className={styles.registerBtn}
                                    type={"submit"}
                                    onClick={handleSubmit}
                                >
                                    Register
                                </Button>
                            </div>
                        </form>
                    </div>
                </Card>
            </div>
            {errorMessage && (
                <div className={styles.errorMessage}>{errorMessage}</div>
            )}
        </div>
    );
};

//Types
export type InitialValuesType = {
    email: string;
    createPassword: string;
    confirmPassword: string;
};
