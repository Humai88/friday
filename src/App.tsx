import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Routes from "./components/Routes/Routes";
import { initializeAppThunk } from "./redux/appReducer";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAppThunk());
    }, [dispatch]);

    return (
        <HashRouter>
            <div className="app">
                <Routes />
            </div>
        </HashRouter>
    );
}

export default App;
