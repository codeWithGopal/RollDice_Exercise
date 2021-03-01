import React, { Component } from "react";
import Die from "./Die.js";
import "./Rolldice.css";

class Rolldice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "two", rolling: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    //pick two new rolls
    let rand1 = Math.floor(Math.random() * this.props.sides.length);
    let rand2 = Math.floor(Math.random() * this.props.sides.length);

    //Set state with new rolls
    this.setState({
      die1: this.props.sides[rand1],
      die2: this.props.sides[rand2],
      rolling: true,
    });

    //wait one second, then set rolling to false

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    return (
      <div className="Rolldice">
        <div className="Rolldice-container">
          <Die face={this.state.die1} rolling={this.state.rolling} />
          <Die face={this.state.die2} rolling={this.state.rolling} />
        </div>

        <button
          className="Rolldice-button"
          onClick={this.handleClick}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Rolling....." : "Roll dice"}
        </button>
      </div>
    );
  }
}

export default Rolldice;
