import React, { Component } from "react";

class Keys extends Component {
  constructor() {
    super();
    this.state = {
      calciValue: "",
      num: "",
      array: []
    };
  }

  calciClick = num => {
    switch (num) {
      case "/":
        d = (this.state.array.join("").concat("/"));
        break;
      case "*":
      case "-":
      case "+":
      case ".":
      case "=":
      case "C":
      default:
        this.state.array.push(num);
        console.log(this.state.array);
    }
  };

  render() {
    return (
      <form>
        <table cellSpacing="0">
          <tr>
            <td colspan="5">
              <input
                type="text"
                name="calcinput"
                value={this.state.calciValue}
              />
            </td>
          </tr>
          <tr>
            <td onClick={() => this.calciClick(1)}>1</td>
            <td onClick={() => this.calciClick(2)}>2</td>
            <td onClick={() => this.calciClick(3)}>3</td>
            <td onClick={() => this.calciClick("*")}>*</td>
            <td rowSpan="4" className="h-100">
              =
            </td>
          </tr>
          <tr>
            <td onClick={() => this.calciClick(4)}>4</td>
            <td onClick={() => this.calciClick(5)}>5</td>
            <td onClick={() => this.calciClick(6)}>6</td>
            <td onClick={() => this.calciClick("/")}>/</td>
          </tr>
          <tr>
            <td onClick={() => this.calciClick(7)}>7</td>
            <td onClick={() => this.calciClick(8)}>8</td>
            <td onClick={() => this.calciClick(9)}>9</td>
            <td onClick={() => this.calciClick("-")}>-</td>
          </tr>
          <tr>
            <td onClick={() => this.calciClick(".")}>.</td>
            <td onClick={() => this.calciClick(0)}>0</td>
            <td onClick={() => this.calciClick(C)}>C</td>
            <td onClick={() => this.calciClick("+")}>+</td>
          </tr>
        </table>
      </form>
    );
  }
}

export default Keys;
