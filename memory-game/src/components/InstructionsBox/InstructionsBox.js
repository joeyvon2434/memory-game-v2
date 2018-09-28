import React from "react";
import "./InstructionsBox.css"

class InstructionsBox extends React.Component {
    render() {
        console.log(this.props.showInstructions);
        return (
            <div className={this.props.showInstructions ? "display-InstructionsBox" : "hidden-InstructionsBox"}>
                <div 
                className="InstructionsBox"
                onClick={() => this.props.onClick()}
                >
                </div>
                <div className="Instructions-area">
                    <h2>Instructions</h2>
                    <ul>
                        <li>Click the pictures below to increase your score.</li>
                        <li>Remember what you clicked!</li>
                        <li>Be careful! You lose if you click the same picture twice.</li>
                    </ul>
                    <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => this.props.onClick()}
                    >Let's Play!</button>
                </div>
            </div>
        );
    }
}

export default InstructionsBox;