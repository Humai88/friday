import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPacksTC, setMyPageAC } from "../../redux/packsReducer";
import { AppStore } from "../../redux/store";
import { Button } from "../../UI-kit/Button/Button";
import { ChangeUserInfo } from "../changeUserInfo/ChangeUserInfo";
import styles from "../Profile/Profile.module.css";

type PersonPropsType = {
    photo?: string | null;
    name?: string | null;
    showModalHandler: () => void;
    logoutHandler: () => void;
    showModal: boolean;
    hideModalHandler: () => void;
};

export const Person = (props: PersonPropsType) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setMyPageAC(false));
        dispatch(getPacksTC());
    }, [dispatch]);

    const status = useSelector((state: AppStore) => state.app.status);
    return (
        <div className={styles.wrapper}>
            {props.showModal && (
                <ChangeUserInfo onClose={props.hideModalHandler} />
            )}

            <div className={styles.infoBox}>
                <img
                    className={styles.avatar}
                    src={
                        props.photo == null
                            ? "https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
                            : props.photo
                    }
                    alt="avatar"
                />
                <h3>{props.name}</h3>
                <h4 onClick={props.showModalHandler}>Edit profile</h4>
                <Button
                    disabled={status === "loading"}
                    onClick={props.logoutHandler}
                >
                    Logout
                </Button>
            </div>
        </div>
    );
};
