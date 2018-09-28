import React from "react";
import "./GameBoard.css";
import GameCard from "../GameCard";


class GameBoard extends React.Component {
  
   render () {
       return (
            <div className="GameBoard">
                {this.props.pictures.map(picture => ( 
                <GameCard 
                    id={picture.id}
                    key={picture.key}
                    name={picture.name}
                    url={picture.url}
                    clicked={picture.clicked}
                    onClick={() => this.props.onClick(picture.id)}
                />
                )
                )}
            </div>
       );
   }
}

export default GameBoard;
