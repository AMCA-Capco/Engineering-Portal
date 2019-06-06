import React from "react";
import "../styles/NavBar.scss";

const NavBarItems = (props) => {
    return (
    <div>
        <a href="/" className="nav-item">
            {props.item}
        </a>
    </div>
    );
};

export default NavBarItems;