import React from "react";
import styles from "./Password.module.css";
import { Input } from "../../UI-kit/Input/Input";
import { NavLink } from "react-router-dom";
import { Button } from "../../UI-kit/Button/Button";

export const PasswordRecovery = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <h1>It-incubator</h1>

                <div className={styles.formWrapper}>
                    <form action="/">
                        <h2>Forgot your password?</h2>

                        <div className={styles.formGroup}>
                            <label>
                                <span>Email</span><br/>
                                <Input type="text" placeholder={'......'} required/>
                            </label>
                        </div>

                        <div className={`${styles.formGroup} ${styles.formGroupEmail}`}>
                            <span>Enter your email address and we will send you further instructions</span>
                        </div>
                    </form>
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupButton}`}>
                    <Button type={"submit"}>Send instructions</Button>
                </div>

                <p>Did you remember your password?</p>

                <div className={styles.navLinkGroup}>
                    <NavLink to={"/login"}> Try logging in</NavLink>
                </div>
            </div>
        </div>
    )
};
