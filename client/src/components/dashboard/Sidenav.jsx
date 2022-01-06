import React, { useState, useEffect } from 'react';
import css from "./styles/dashboard-sidenav.module.css";
import {
    BiHomeAlt,
    BiFolderOpen,
    BiTask,
    BiGroup,
    BiUserPlus,
    BiCog,
    BiHelpCircle
} from "react-icons/bi";
import SidenavLink from './SidenavLink';


//COMPONENT STARTS HERE
const Sidenav = () => {

    const [ currentPath, setCurrentPath ] = useState("overview");

    const links = [
        {name: "Overview", icon: <BiHomeAlt fontSize="1.5rem" /> },
        {name: "Projects", icon: <BiFolderOpen fontSize="1.5rem" /> },
        {name: "Tasks", icon: <BiTask fontSize="1.5rem" /> },
        {name: "Members", icon: <BiGroup fontSize="1.5rem" /> },
        {name: "Add Member", icon: <BiUserPlus fontSize="1.5rem" /> },
        {name: "Settings", icon: <BiCog fontSize="1.5rem" /> },
        {name: "Help", icon: <BiHelpCircle fontSize="1.5rem" /> },
    ]; //icons will inheret parent font color
    
    return (
        <aside>
            <nav className={`${css.side_container} d-flex flex-column pb-5 flex-shrink-0`}>
                {
                    links.map((link, index) => (
                        <SidenavLink
                            key={index}
                            idx={index}
                            name={link.name}
                            icon={link.icon}
                            isActive={currentPath === link.name.toLowerCase() ? true : false}
                            clickHandler={() => setCurrentPath(link.name.toLowerCase())}
                        />
                    ))
                }
            </nav>
        </aside>
    )
}

export default Sidenav
