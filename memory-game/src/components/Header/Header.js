import React from "react";
import "./Header.css";
import ScoreBoard from "../ScoreBoard";
import Title from "../Title";
import Instructions from "../Instructions";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <Instructions 
                onClick={()=> this.props.onClick()}
                />
                <Title />
                <ScoreBoard 
                    currentClicks={this.props.currentClicks}
                    topScore={this.props.topScore}
                />
            </div>
        );
    }
}
export default Header;