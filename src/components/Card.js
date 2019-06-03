import React from "react";
// import CardContent from './CardContent';
import "../styles/Card.scss";


const Card = (props) => {
    return (
        <div className="display">
            <a href={props.link} className="card-linked">
                <div>
                    <img className="image" src={props.image} alt="Logo" />
                    <h2 className="title">{props.title}</h2>
                    <div className="inner">
                        <p className="description">{props.description}</p>
                        <p>{props.version}</p>
                        <hr className="horizontal-line"></hr>
                        <div className="owner">
                            <img className="profile-picture" src={props.image} alt="Logo" />
                            <p className="profile-name">{props.owner}</p>
                        </div>
                    </div>
                </div>           
            </a>
        </div>
        
    );
};

export default Card;
