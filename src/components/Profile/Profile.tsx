import React, { useEffect } from "react";
import styles from "./Profile.module.css";
import { Card } from "../../UI-kit/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { setProfileTC } from "../../redux/profileReducer";
import { AppStore } from "../../redux/store";

export const Profile = () => {
    const dispatch = useDispatch();
    const photo = useSelector(
        (state: AppStore) => state.profile.profile?.avatar
    );
    const name = useSelector((state: AppStore) => state.profile.profile?.name);
    useEffect(() => {
        dispatch(setProfileTC());
    }, []);
    return (
        <div className={styles.wrapper}>
            <div className={styles.sidebar}>
                <div className={styles.infoBox}>
                    <img className={styles.avatar} src={photo} alt="" />
                    <h3>{name}</h3>
                </div>
            </div>
            <div className={styles.packsList}></div>
        </div>
    );
};
