import React, { Component } from 'react';
import { render } from 'react-dom';
import Calculator from './Calculator';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Calculator />
    );
  }
}

render(<App />, document.getElementById('root'));
