import React, { useState } from "react";
import styles from "./Profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../../redux/store";
import { Redirect, Route, Switch } from "react-router-dom";
import { logoutThunk } from "../../redux/loginReducer";
import { navLinksProfile, PATH } from "../Routes/Routes";
import { Person } from "../Person/Person";
import { Packs } from "../Packs/Packs";
import { Header } from "../Header/Header";
import { Cards } from "../Cards/Cards";
import Learn from "../Lern/Learn";
import { DraftLearnPage } from "../Lern/DraftLearnPage";

export const Profile = () => {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    const isLoggedIn = useSelector((state: AppStore) => state.login.isAuth);
    const name = useSelector((state: AppStore) => state.profile.profile?.name);
    const photo = useSelector(
        (state: AppStore) => state.profile.profile?.avatar
    );

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
        return <Redirect to={PATH.LOGIN} />;
    }

    return (
        <>
            <Header
                arrayLinks={navLinksProfile}
                className={styles.header}
                profilePage
            />

            <Switch>
                <Route
                    exact
                    path={PATH.PROFILE_PERSON}
                    render={() => (
                        <Person
                            photo={photo}
                            name={name}
                            showModalHandler={showModalHandler}
                            logoutHandler={logoutHandler}
                            showModal={showModal}
                            hideModalHandler={hideModalHandler}
                        />
                    )}
                />

                <Route
                    exact
                    path={PATH.PROFILE_PACKS}
                    render={() => <Packs />}
                />

                <Route
                    exact
                    path={PATH.PROFILE_CARDS}
                    render={() => <Cards />}
                />

                <Route
                    exact
                    path={PATH.PROFILE_PACKS_LEARN}
                    render={() => <Learn />}
                />
                {/* <Route
                    exact
                    path={PATH.PROFILE_PACKS_LEARN}
                    render={() => <DraftLearnPage />}
                /> */}
            </Switch>
        </>
    );
};
