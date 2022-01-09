import SideInfoBottom from "./SideInfoBottom";
import SideInfoTop from "./SideInfoTop";
import css from "./styles/dashboard-sideinfo.module.css";


const SideInfo = () => {
    return (
        <div className={`${css.info_container} d-flex flex-column gap-5 ms-auto align-self-stretch mb-5 flex-shrink-0`}>
            <SideInfoTop />
            <SideInfoBottom />
        </div>
    )
}

export default SideInfo