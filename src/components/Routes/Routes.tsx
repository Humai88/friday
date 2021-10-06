import {Redirect, Route, Switch} from "react-router-dom";
import {CheckEmail} from "../CheckEmail/CheckEmail";
import {ErrorPage} from "../ErrorPage/ErrorPage";
import {Login} from "../Login/Login";
import {PasswordRecovery} from "../PasswordRecovery/PasswordRecovery";
import {PasswordUpdate} from "../PasswordUpdate/ParrwordUpdate";
import {Profile} from "../Profile/Profile";
import {Register} from "../Register/Register";
import {TestPage} from "../TestPage/TestPage";
import {Cards} from "../Cards/Cards";
import {Packs} from "../Packs/Packs";
import Train from "../Train/Train";

export const PATH = {
    LOGIN: "/login",
    TEST: "/test",
    PASSWORD_UPDATE: "/password-update/:token",
    PASSWORD_RECOVERY: "/password-recovery",
    PROFILE: "/profile",
    PROFILE_PERSON: "/profile/person",
    PROFILE_PACKS: "/profile/packs",
    PROFILE_CARDS: "/profile/cards/:packId",
    REGISTER: "/register",
    EMAIL_CHECK: "/check-email",
    ERROR: "/error-page",
    TRAIN: "/train/cards/:_id",
};

export const navLinksProfile = [
    {path: PATH.PROFILE_PACKS, text: "Packs list"},
    {path: PATH.PROFILE_PERSON, text: "Profile"},
];

export const navLinksTest = [
    {path: PATH.LOGIN, text: "Login"},
    {path: PATH.REGISTER, text: "Register"},
    {path: PATH.PROFILE, text: "Profile"},
    {path: PATH.PASSWORD_UPDATE, text: "Update Password"},
    {path: PATH.PASSWORD_RECOVERY, text: "Recovery Password"},
    {path: PATH.EMAIL_CHECK, text: "Check Email"},
    {path: PATH.ERROR, text: "ErrorPage"},
];

const Routes = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path={"/"}
                    render={() => <Redirect to={PATH.LOGIN}/>}
                />
                <Route exact path={PATH.TEST} render={() => <TestPage/>}/>
                <Route exact path={PATH.LOGIN} render={() => <Login/>}/>
                <Route exact path={PATH.REGISTER} render={() => <Register/>}/>
                <Route
                    exact
                    path={PATH.PROFILE}
                    render={() => <Redirect to={PATH.PROFILE_PERSON}/>}
                />
                <Route
                    exact
                    path={PATH.PROFILE_PERSON}
                    render={() => <Profile/>}
                />
                <Route
                    exact
                    path={PATH.PROFILE_PACKS}
                    render={() => <Packs/>}
                />
                <Route
                    exact
                    path={PATH.PROFILE_CARDS}
                    render={() => <Cards/>}
                />
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
                <Route
                    exact
                    path={PATH.EMAIL_CHECK}
                    render={() => <CheckEmail/>}
                />

                <Route
                    exact
                    path={PATH.PROFILE}
                    render={() => <Redirect to={PATH.PROFILE_PERSON}/>}
                />
                <Route
                    exact
                    path={PATH.TRAIN}
                    render={() => <Train/>}
                />
                <Route exact render={() => <ErrorPage/>}/>
            </Switch>
        </>
    );
};

export default Routes;
