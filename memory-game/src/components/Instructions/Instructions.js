import React from "react";
import "./Instructions.css"

class Instructions extends React.Component {
    render() {
        return (
            <div className="Instructions">
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={()=> this.props.onClick()}
                >Instructions</button>
            </div>
        );
    }
}

export default Instructions;