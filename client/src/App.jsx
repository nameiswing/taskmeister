import { useEffect } from "react";
import { useSelector } from "react-redux";
// import css from "./styles/app.module.css";
// import { useDispatchActions } from "./state-manager/dispatchActions";
// import SamplePageInput from "./pages/SamplePageInput";
// import SamplePage from "./pages/SamplePage";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const { project } = useSelector((state) => state);
    // const { newProject } = useDispatchActions();

    useEffect( () => console.log("Updated list!"), [project])

    return (
        <div className="container-fluid p-0">
            <Dashboard />
        </div>
    );
};

export default App;
