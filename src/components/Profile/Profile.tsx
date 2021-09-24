import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setProfileTC } from "../../redux/profileReducer";
import { AppStore } from "../../redux/store";
import { Redirect, Route, Switch } from "react-router-dom";
import { logoutThunk } from "../../redux/loginReducer";
import { navLinksProfile, PATH } from "../Routes/Routes";
import { Person } from "../Person/Person";
import Cards from "../Cards/Cards";
import { Header } from "../Header/Header";

export const Profile = () => {
    const [showModal, setShowModal] = useState(false);

    const photo = useSelector(
        (state: AppStore) => state.profile.profile?.avatar
    );
    const token = useSelector(
        (state: AppStore) => state.profile.profile?.token
    );

    console.log(token);

    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: AppStore) => state.login.isAuth);
    const name = useSelector((state: AppStore) => state.profile.profile?.name);

    useEffect(() => {
        dispatch(setProfileTC());
    }, [dispatch]);

    const showModalHandler = () => {
        setShowModal(true);
    };
    const hideModalHandler = () => {
        setShowModal(false);
    };
    const logoutHandler = () => {
        dispatch(logoutThunk());
    };
    if (!isLoggedIn) {
        return <Redirect to={"/login"}/>;
    }

    return (
        <>
            <Header arrayLinks={navLinksProfile} className={styles.header} profilePage/>

            <Switch>
                <Route exact path={PATH.PROFILE_PERSON} render={() => <Person
                    photo={photo}
                    name={name}
                    showModalHandler={showModalHandler}
                    logoutHandler={logoutHandler}
                    showModal={showModal}
                    hideModalHandler={hideModalHandler}
                />}/>

                <Route exact path={PATH.PROFILE_CARDS} render={() => <Cards/>}/>
            </Switch>
        </>
    );
};
