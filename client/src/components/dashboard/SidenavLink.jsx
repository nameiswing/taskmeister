import css from "./styles/dashboard-sidenav.module.css";

const SidenavLink = ({ idx, isActive, icon, name, clickHandler }) => {
    return (
        <a 
            className={`${css.link} ${isActive && css.active_link} ${idx === 4 && "mt-auto"} d-flex align-items-center mb-1`} 
            onClick={clickHandler}
        >
            {icon} <span className="ms-3">{name}</span>
        </a>
    );
};

export default SidenavLink;
