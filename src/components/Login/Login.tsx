import React from "react";
import styles from './Login.module.css'
import {NavLink} from "react-router-dom";
import {Input} from "../../UI-kit/Input/Input";
import {Button} from "../../UI-kit/Button/Button";

export const Login = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.login}>
                <h1>It-incubator</h1>

                <div className={styles.formWrapper}>
                    <form action="/">
                        <h2>Sign In</h2>

                        <div className={styles.formGroup}>
                            <label>
                                <span>Email</span><br/>
                                <Input type="text" placeholder={'j&johnson.gmail.com'} required/>
                            </label>
                        </div>

                        <div className={`${styles.formGroup} ${styles.shapeIcon}`}>
                            <label>
                                <span>Password</span><br/>
                                <Input type="password" placeholder={'*******'} required/>
                            </label>
                        </div>

                        <div className={`${styles.formGroup} ${styles.formGroupPassword}`}>
                            <NavLink to={"/password-recovery"}>Forgot Password</NavLink>
                        </div>

                        <div className={`${styles.formGroup} ${styles.formGroupButton}`}>
                            <Button type={"submit"}>Login</Button>
                        </div>
                    </form>
                </div>

                <p>Don’t have an account?</p>

                <div className={styles.navLinkGroup}>
                    <NavLink to={"/profile"}> Sign Up</NavLink>
                </div>
            </div>
        </div>
    )
};
