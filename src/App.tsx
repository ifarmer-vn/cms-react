import { BrowserRouter as Router} from "react-router-dom";
import { useState } from "react";
import BasicAuth from "./components/BasicAuth.tsx";
import Menu from "./components/Menu.tsx";
import AppRoutes from "./routes.tsx";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("authenticated") === "true";
    });

    return (
        <>
            {!isAuthenticated ? (
                <BasicAuth onAuthenticated={() => setIsAuthenticated(true)} />
            ) : (
                <div className="p-4">
                    <div className="flex flex-row">
                        <Menu/>
                        <Router>
                            <AppRoutes/>
                        </Router>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
