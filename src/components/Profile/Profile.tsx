import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setProfileTC } from "../../redux/profileReducer";
import { AppStore } from "../../redux/store";
import { ChangeUserInfo } from "../changeUserInfo/ChangeUserInfo";
import { Button } from "../../UI-kit/Button/Button";
import { Redirect } from "react-router-dom";
import { logoutThunk } from "../../redux/loginReducer";

export const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const photo = useSelector(
        (state: AppStore) => state.profile.profile?.avatar
    );

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: AppStore) => state.login.isAuth);
    const name = useSelector((state: AppStore) => state.profile.profile?.name);

    useEffect(() => {
        dispatch(setProfileTC());
    }, []);

    const showModalHandler = () => {
        setShowModal(true);
    };
    const hideModalHandler = () => {
        setShowModal(false);
    };
    const logoutHandler = () => {
        dispatch(logoutThunk());
    };
    if (isLoggedIn === false) {
        return <Redirect to={"/login"} />;
    }
    return (
        <div className={styles.wrapper}>
            {showModal && <ChangeUserInfo onClose={hideModalHandler} />}
            <div className={styles.sidebar}>
                <div className={styles.infoBox}>
                    <img className={styles.avatar} src={photo} alt="" />
                    <h3>{name}</h3>
                    <h4 onClick={showModalHandler}>Edit profile</h4>
                    <Button onClick={logoutHandler}>Logout</Button>
                </div>
            </div>
            <div className={styles.packsList}></div>
        </div>
    );
};
