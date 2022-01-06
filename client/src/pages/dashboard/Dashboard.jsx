import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OverView from "../../components/dashboard/Overview";
import SideInfo from "../../components/dashboard/SideInfo";
import Sidenav from "../../components/dashboard/Sidenav";
import Topnav from "../../components/dashboard/Topnav";
import css from "./dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={css.main_container}>
            <Router>
                <Topnav />
                <div className="d-flex p-0">
                    <Sidenav />
                    <Routes>
                        <Route
                            exact path="/dashboard/overview"
                            element={<OverView />}
                        />
                    </Routes>
                    <SideInfo />
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;
