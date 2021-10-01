import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Routes from "./components/Routes/Routes";
import { initializeAppThunk } from "./redux/appReducer";
import { AppStore } from "./redux/store";
import { Preloader } from "./UI-kit/Preloader/Preloader";

function App() {
    const dispatch = useDispatch();
    const isInitialized = useSelector<AppStore, boolean>(
        (state) => state.app.isInitialized
    );

    const status = useSelector((state: AppStore) => state.app.status);
    useEffect(() => {
        if (!isInitialized) {
            dispatch(initializeAppThunk());
        }
    }, [dispatch, isInitialized]);

    if (!isInitialized) {
        return <Preloader />;
    }
    return (
        <HashRouter>
            <div className="app">
                {status === "loading" && <Preloader />}
                <Routes />
            </div>
        </HashRouter>
    );
}

export default App;
