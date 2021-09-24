import React from "react";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";
import { Input } from "../../UI-kit/Input/Input";
import styles from "./ParrwordUpdate.module.css";

export const PasswordUpdate = () => {
    return (
        <div className={styles.wrapper}>
            <Card className={styles.emailChecking}>
                <h1>It-incubator</h1>
                <h2>Create new password</h2>
                <div className={`${styles.formGroup} ${styles.shapeIcon}`}>
                    <label>
                        <span>Password</span>
                        <br />
                        <Input type="password" />
                    </label>
                    <p>
                        Create new password and we will send you futher
                        instructions to email
                    </p>
                </div>
                <Button className={styles.btn}>Create new password</Button>
            </Card>
        </div>
    );
};
