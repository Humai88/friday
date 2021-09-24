import { HashRouter } from "react-router-dom";
import "./App.css";
import Routes from "./components/Routes/Routes";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initializeAppThunk());
    }, []);

    return (
        <HashRouter>
            <div className="app">
                <Routes/>
            </div>
        </HashRouter>
    );
}

export default App;
