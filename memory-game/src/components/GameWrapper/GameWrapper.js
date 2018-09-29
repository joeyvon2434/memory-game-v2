import React from "react";
import "./GameWrapper.css";
import Header from "../Header";
import GameBoard from "../GameBoard";
import Footer from "../Footer";
import pictureData from "../../pictureData.json";
import InstructionsBox from "../InstructionsBox";
import LoseBox from "../LoseBox";


class GameWrapper extends React.Component {
    state = {
        picturesArray: [],
        currentClicks: 0,
        topScore: 0,
        showInstructions: false,
        showLoseBox: false
    }

    //Ensure the pictureData is poulated on page load
    componentDidMount() {
        this.shuffleArray(pictureData);
    }

    //Method to shuffle the input array.In this case it shuffles the pictureData array
    shuffleArray = (inputArray) => {
        //creates a copy of the input array to ensure the original array is not modified 
        let tempArray = inputArray.map(picture => {
            return Object.assign({},picture);
        });
        let newPicturesArray = [];

        //Cut a random component from the array and populate a new randomized array to load into the game state
        while (tempArray.length > 0) {
            let randomPicture = tempArray.splice(Math.floor(Math.random() * tempArray.length), 1)[0];
            newPicturesArray.push(randomPicture);
        }

        //Set the state to reflect the randomized array order
        this.setState({
            picturesArray: newPicturesArray
        });
    }

    //Listens for a click event, then updates the game state based on whether the picture has been clicked or not
    handleClick = (id) => {
        //get a copy of the pictures array from state
        const tempArray = this.state.picturesArray.map(picture => picture)
        //find the index of the clicked object
        const currentIndex = tempArray.findIndex(element => {
            return element.id === id;
        });
        //check if the item has already been clicked
        if (tempArray[currentIndex].clicked === true) {
            this.showLoseBox();
            this.resetGame(this.state.currentClicks);
        } else {
            //modify the clicked object to indicate it was clicked and add one to the click count
            tempArray[currentIndex].clicked = true;
            let clickCount = this.state.currentClicks + 1;
            this.setState({
                currentClicks: clickCount
            });
            this.shuffleArray(tempArray);
        }
    }

    resetGame = (score) => {
        if (score > this.state.topScore) {

            this.setState({
                picturesArray: [],
                currentClicks: 0,
                topScore: score
            });
            this.shuffleArray(pictureData);
        } else {
            this.setState({
                picturesArray: [],
                currentClicks: 0,
            });
            this.shuffleArray(pictureData);
        }
    }

      //Function to switch the state of showInstructions to display instructions
    showInstructions = () => {
        this.setState({
            showInstructions: true
        });
    }

     //Function to switch the state of showInstructions to hide the instructions
    hideInstructions = () => {
        this.setState({
            showInstructions: false
        });
    }

      //Function to switch the state of showInstructions to display instructions
      showLoseBox = () => {
        this.setState({
            showLoseBox: true
        });
    }

     //Function to switch the state of showInstructions to hide the instructions
    hideLoseBox = () => {
        this.setState({
            showLoseBox: false
        });
    }

    render() {
        return (
            <div className="Wrapper">
                <Header
                    currentClicks={this.state.currentClicks}
                    topScore={this.state.topScore}
                    onClick={() => this.showInstructions()}
                />
                <img className="Barney" src="./barney.png"  alt="Barney is too drunk, so didn't show up." />
                <img className="Ned" src="./ned.png"  alt="Ned is at church, so he didn't show up." />
                <GameBoard
                    className="GameBoard"
                    pictures={this.state.picturesArray}
                    onClick={id => this.handleClick(id)}
                />
                <InstructionsBox 
                showInstructions={this.state.showInstructions}
                onClick={() => this.hideInstructions()}
                />
                <LoseBox showLoseBox={this.state.showLoseBox}
                onClick={() => this.hideLoseBox()}
                />
                <Footer />
            </div>
        );
    }
}

export default GameWrapper;