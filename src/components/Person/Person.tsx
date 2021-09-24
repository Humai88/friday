import React from 'react';
import { Button } from '../../UI-kit/Button/Button';
import { ChangeUserInfo } from '../changeUserInfo/ChangeUserInfo';
import styles from "../Profile/Profile.module.css";

type PersonPropsType = {
    photo?: string
    name?: string
    showModalHandler: () => void
    logoutHandler: () => void
    showModal: boolean
    hideModalHandler: () => void
}

export const Person = (props: PersonPropsType) => {
    return (
        <div className={styles.wrapper}>
            {props.showModal && <ChangeUserInfo onClose={props.hideModalHandler}/>}
            <div className={styles.sidebar}>
                <div className={styles.infoBox}>
                    <img className={styles.avatar} src={props.photo} alt=""/>
                    <h3>{props.name}</h3>
                    <h4 onClick={props.showModalHandler}>Edit profile</h4>
                    <Button onClick={props.logoutHandler}>Logout</Button>
                </div>
            </div>
            <div className={styles.packsList}>
            </div>
        </div>
    );
};
