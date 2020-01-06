import React, { Component, Fragment } from "react";
import Keys from './Keys';

class Calculator extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Fragment>
      <b>
        <i>Calculator</i>
      </b>
      <Keys/>
      </Fragment>
    );
  }
}

export default Calculator;
