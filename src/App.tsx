import { HashRouter } from "react-router-dom";
import "./App.css";
import Routes from "./components/Routes/Routes";

function App() {
    return (
        <HashRouter>
            <div className="app">
                <Routes/>
            </div>
        </HashRouter>
    );
}

export default App;
