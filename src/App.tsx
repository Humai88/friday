import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { Login } from "./components/Login/Login";
import { PasswordRecovery } from "./components/PasswordRecovery/PasswordRecovery";
import { PasswordUpdate } from "./components/PasswordUpdate/ParrwordUpdate";
import { Profile } from "./components/Profile/Profile";
import { Register } from "./components/Register/Register";
import { TestPage } from "./components/TestPage/TestPage";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Route path={"/"} exact render={() => <Redirect to={"/test-page"} />} />
        <Switch>
          <Route path="/test-page" render={() => <TestPage />} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/error-page" render={() => <ErrorPage />} />
          <Route path="/password-update" render={() => <PasswordUpdate />} />
          <Route
            path="/password-recovery"
            render={() => <PasswordRecovery />}
          />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/register" render={() => <Register />} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
