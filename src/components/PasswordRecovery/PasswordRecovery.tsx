import React from "react";
import styles from "./Password.module.css";
import {Input} from "../../UI-kit/Input/Input";
import {NavLink, Redirect} from "react-router-dom";
import {Button} from "../../UI-kit/Button/Button";
import {useState} from "react";
import {useDispatch, useSelector } from "react-redux";
import { AuthInitialStateType, sendEmailThunkCreator } from "../../redux/forgotReducer";
import { AppStore } from "../../redux/store";

export const PasswordRecovery = () => {
    const [mail, setMail] = useState<string>('')

    const dispatch = useDispatch()

    const initialized = useSelector<AppStore, boolean>(state => state.forgot.initialized)
    const error= useSelector<AppStore, boolean>(state => state.forgot.error)

    if (initialized) {
        return <Redirect to='/check-email' />
    }

    if (error) {
        return <Redirect to='/profile' />
    }
    const buttonCallback = () => {
        dispatch(sendEmailThunkCreator(mail,'test-front-admin <ai73a@yandex.by>', '<div style="background-color: lime; padding: 15px'))
    }


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
                                <Input type="text" placeholder={'......'} onChange={e=> setMail(e.target.value)}/>
                            </label>
                        </div>

                        <div className={`${styles.formGroup} ${styles.formGroupEmail}`}>
                            <span>Enter your email address and we will send you further instructions</span>
                        </div>
                    </form>
                </div>
                <div className={`${styles.formGroup} ${styles.formGroupButton}`}>
                    <Button type={"submit"} onClick={buttonCallback}>Send instructions</Button>
                </div>

                <p>Did you remember your password?</p>

                <div className={styles.navLinkGroup}>
                    <NavLink to={"/login"}> Try logging in</NavLink>
                </div>
            </div>
        </div>
    )
};
