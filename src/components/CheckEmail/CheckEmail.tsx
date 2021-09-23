import React from "react";
import { Card } from "../../UI-kit/Card/Card";
import styles from "./CheckEmail.module.css";
import email from "./../../assets/images/mail.svg";

export const CheckEmail = () => {
    return (
        <div className={styles.wrapper}>
            <Card className={styles.emailChecking}>
                <h1>It-incubator</h1>
                <div className={styles.iconWrapper}>
                    <img src={email} alt="Sending message" />
                </div>
                <h2>Check Email</h2>
                <p>
                    We've sent an email with instructions to example@gmail.com
                </p>
            </Card>
        </div>
    );
};
