import React from "react";
import "./LoseBox.css"

class LoseBox extends React.Component {
    render() {
        console.log(this.props.showInstructions);
        return (
            <div className={this.props.showLoseBox ? "display-LoseBox" : "hidden-LoseBox"}>
                <div 
                className="LoseBox"
                onClick={() => this.props.onClick()}
                >
                </div>
                <div className="Lose-area">
                    <h2>Game Over!</h2>
                    <p>Your memory may need some work...</p>
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.onClick()}
                    >Play Again!</button>
                </div>
            </div>
        );
    }
}

export default LoseBox;