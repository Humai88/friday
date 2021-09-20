import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../UI-kit/Button/Button";
import { Card } from "../../UI-kit/Card/Card";
import { Input } from "../../UI-kit/Input/Input";
import styles from "./Register.module.css";

export const Register = () => {
  return (
    <div className={styles.wrapper}>
      <Card className={styles.register}>
        <h1>It-incubator</h1>

        <div className={styles.formWrapper}>
          <form action="/">
            <h2>Sign Up</h2>

            <div className={styles.formGroup}>
              <label>
                <span>Email</span>
                <br />
                <Input
                  type="text"
                  placeholder={"j&johnson.gmail.com"}
                  required
                />
              </label>
            </div>

            <div className={`${styles.formGroup} ${styles.shapeIcon}`}>
              <label>
                <span>Password</span>
                <br />
                <Input type="password" placeholder={"*******"} required />
              </label>
            </div>
            <div className={`${styles.formGroup} ${styles.shapeIcon}`}>
              <label>
                <span>Confirm Password</span>
                <br />
                <Input type="password" placeholder={"*******"} required />
              </label>
            </div>

            <div className={`${styles.formGroup} ${styles.formGroupButton}`}>
              <Button className={styles.cancelBtn} purple type={"submit"}>
                Cancel
              </Button>
              <Button className={styles.registerBtn} type={"submit"}>
                Register
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};
