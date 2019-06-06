import React from "react";
// import NavBarItems from './NavBarItems';
import "../styles/NavBar.scss";


const NavBar = (props) => {
    return (
        <div className="header">
            <div className="left">
                <img className="capco-logo" src={props.image} alt="Logo" />
                <a href="/" className="nav-item">
                    Home
                </a>
                <a href="/" className="nav-item">
                    Reminders
                </a>
                {/* <NavBarItems item="Home" />
                <NavBarItems item="Reminders" />
                <NavBarItems item="Awareness" /> */}
                <a href="/" className="nav-item right">
                    Logout
                </a>
            </div>
        </div>
    );
};

export default NavBar;