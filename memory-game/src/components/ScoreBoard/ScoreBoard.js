import React from "react";
import "./ScoreBoard.css";

class ScoreBoard extends React.Component {
    render () {
        return (
            <div className="ScoreBoard">
                <div className="score-title">Current Score:</div>
                <div className="score-title">Top Score:</div>
                <div className="grid-item">{this.props.currentClicks}</div>
                <div className="grid-item">{this.props.topScore}</div>
            </div>
        );
    }
}

export default ScoreBoard;