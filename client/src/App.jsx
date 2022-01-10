// import { useEffect } from "react";
import { useSelector } from "react-redux";
// import { useDispatchActions } from "./state-manager/dispatchActions";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverView from "./components/dashboard/Overview";
import Projects from "./components/dashboard/Projects";
import NotFound from "./components/NotFound";

const App = () => {
    const { project } = useSelector((state) => state);
    // const { newProject } = useDispatchActions();

    // useEffect( () => console.log("Updated list!"), [project])

    return (
        <div className="container-fluid p-0 h-100">
            <Router>
                <Routes>
                    <Route path="/">
                        <Route path="dashboard" element={ <Dashboard /> } >
                            <Route path="" element={ <OverView /> } />
                            <Route path="overview" element={ <OverView /> } />
                            <Route path="projects" element={ <Projects /> } />
                            <Route path="*" element={ <NotFound /> } />
                        </Route>
                        <Route path="*" element={ <NotFound /> } />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
