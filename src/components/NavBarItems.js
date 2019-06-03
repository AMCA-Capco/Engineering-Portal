import React from "react";

const NavBarItems = (props) => {
    return (
    <div>
        <a href="/" className="item">
            {props.item}
        </a>
    </div>
    );
};

export default NavBarItems;