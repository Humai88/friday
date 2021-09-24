import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { CheckEmail } from "./components/CheckEmail/CheckEmail";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Login } from "./components/Login/Login";
import { PasswordRecovery } from "./components/PasswordRecovery/PasswordRecovery";
import { PasswordUpdate } from "./components/PasswordUpdate/ParrwordUpdate";
import { Profile } from "./components/Profile/Profile";
import { Register } from "./components/Register/Register";
import { TestPage } from "./components/TestPage/TestPage";
import { initializeAppThunk } from "./redux/appReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAppThunk());
    }, []);

    return (
        <HashRouter>
            <div className="app">
                {/* <Route path={"/"} exact render={() => <Redirect to="/" />} /> */}
                <Switch>
                    <Route exact path="/" render={() => <TestPage />} />
                    <Route exact path="/login" render={() => <Login />} />
                    <Route
                        exact
                        path="/error-page"
                        render={() => <ErrorPage />}
                    />
                    <Route
                        exact
                        path="/password-update"
                        render={() => <PasswordUpdate />}
                    />
                    <Route
                        exact
                        path="/password-recovery"
                        render={() => <PasswordRecovery />}
                    />
                    <Route exact path="/profile" render={() => <Profile />} />
                    <Route exact path="/register" render={() => <Register />} />
                    <Route
                        exact
                        path="/check-email"
                        render={() => <CheckEmail />}
                    />
                </Switch>
            </div>
        </HashRouter>
    );
}

export default App;
