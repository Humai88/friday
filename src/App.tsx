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

    useEffect(() => {
        if (!isInitialized) {
            dispatch(initializeAppThunk());
        }
    }, [dispatch]);

    if (!isInitialized) {
        return (
            <div
                style={{
                    position: "fixed",
                    top: "30%",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <Preloader />
            </div>
        );
    }
    return (
        <HashRouter>
            <div className="app">
                <Routes />
            </div>
        </HashRouter>
    );
}

export default App;
