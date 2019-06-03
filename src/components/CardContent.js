import React from "react";
import "../styles/Card.scss";


const CardContent = (props) => {
    return (
        <div>
                <img className="image" src={props.image} alt="Logo" />
                <h2 className="title">{props.title}</h2>
                <div className="inner">
                    <p>{props.description}</p>
                    <p>{props.version}</p>
                    <p>{props.owner}</p>
                </div>
        </div>
        
    );
};

export default CardContent;
