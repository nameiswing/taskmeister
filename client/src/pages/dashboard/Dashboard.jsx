import { Outlet } from "react-router-dom";
import SideInfo from "../../components/dashboard/Sidenav/SideInfo";
import Sidenav from "../../components/dashboard/Sidenav/Sidenav";
import Topnav from "../../components/dashboard/Topnav/Topnav";
import css from "./dashboard.module.css";

const Dashboard = () => {
    return (
        <div className={css.main_container}>
            <Topnav />
            <div className="d-flex p-0">
                <Sidenav />
                <Outlet />
                <SideInfo />
            </div>
        </div>
    );
};

export default Dashboard;
