import React from "react";
import NavBarItems from './NavBarItems';
import "../styles/NavBar.scss";


const NavBar = (props) => {
    return (
        <div>
            <div className="ui secondary pointing menu">
                <img className="capco-logo" src={props.image} alt="Logo" />
                <NavBarItems item="Home" />
                <NavBarItems item="Reminders" />
                <NavBarItems item="Awareness" />

                <div className="right menu">
                    <a href="/" className="ui item">
                        Logout
                    </a>
                </div>
            </div>
        </div>
    );
};

export default NavBar;