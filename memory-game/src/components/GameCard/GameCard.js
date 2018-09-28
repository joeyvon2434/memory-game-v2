import React from "react";
import "./GameCard.css";

const GameCard = props => {
    return (
            <div className="GameCard">
                <img 
                    src={props.url} 
                    alt={`This is where ${props.name} should be.` } 
                    id={props.id}
                    name={props.name}
                    clicked={props.clicked.tostring}
                    onClick={() => {props.onClick(props.id)}}
                />
            </div>
);
}
export default GameCard;