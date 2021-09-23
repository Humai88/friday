import { Redirect, Route, Switch } from "react-router-dom";
import { CheckEmail } from "../CheckEmail/CheckEmail";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { Login } from "../Login/Login";
import { PasswordRecovery } from "../PasswordRecovery/PasswordRecovery";
import { PasswordUpdate } from "../PasswordUpdate/ParrwordUpdate";
import { Profile } from "../Profile/Profile";
import { Register } from "../Register/Register";
import { TestPage } from "../TestPage/TestPage";
import React from 'react';
import Cards from "../Cards/Cards";
import { Person } from "../Person/Person";

export const PATH = {
    LOGIN: "/login",
    TEST: "/test",
    PASSWORD_UPDATE: "/password-update",
    PASSWORD_RECOVERY: "/password-recovery",
    PROFILE: "/profile",
    PROFILE_PERSON: "/profile/person",
    PROFILE_CARDS: "/profile/cards",
    REGISTER: "/register",
    EMAIL_CHECK: "/check-email",
    ERROR: "/error-page"
}

export const navLinksProfile = [
    {path: PATH.PROFILE_CARDS, text: "Packs list"},
    {path: PATH.PROFILE_PERSON, text: "Profile"},
];

export const navLinksTest = [
    {path: PATH.LOGIN, text: "Login"},
    {path: PATH.REGISTER, text: "Register"},
    {path: PATH.PROFILE, text: "Profile"},
    {path: PATH.PASSWORD_UPDATE, text: "Update Password"},
    {path: PATH.EMAIL_CHECK, text: "Check Email"},
    {path: PATH.ERROR, text: "ErrorPage"},
];

const Routes = () => {
    return (
        <>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.LOGIN}/>}/>
                <Route exact path={PATH.TEST} render={() => <TestPage/>}/>
                <Route exact path={PATH.LOGIN} render={() => <Login/>}/>
                <Route
                    exact
                    path={PATH.PASSWORD_UPDATE}
                    render={() => <PasswordUpdate/>}
                />
                <Route
                    exact
                    path={PATH.PASSWORD_RECOVERY}
                    render={() => <PasswordRecovery/>}
                />
                <Route exact path={PATH.PROFILE} render={() => <Redirect to={PATH.PROFILE_PERSON}/>}/>

                <Switch>
                    <Route exact path={PATH.PROFILE_PERSON} render={() => <Profile {...Person}/>}/>
                    <Route exact path={PATH.PROFILE_CARDS} render={() => <Profile {...Cards}/>}/>
                </Switch>


                <Route exact path={PATH.REGISTER} render={() => <Register/>}/>
                <Route
                    exact
                    path={PATH.EMAIL_CHECK}
                    render={() => <CheckEmail/>}
                />
                <Route
                    exact
                    render={() => <ErrorPage/>}
                />
            </Switch>
        </>
    );
};

export default Routes;
