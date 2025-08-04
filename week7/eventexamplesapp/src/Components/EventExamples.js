import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      message: '',
      inr: '',
      euro: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  sayHello = () => {
    this.setState({ message: 'Hello! Count was increased.' });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    this.setState({ message: msg });
  };

  onPress = (e) => {
    this.setState({ message: 'I was clicked' });
  };

  handleInputChange = (e) => {
    this.setState({ inr: e.target.value });
  };

  handleSubmit = () => {
    const euro = (parseFloat(this.state.inr) / 90).toFixed(2);
    this.setState({ euro });
  };

  render() {
    return (
      <div>
        <h2>React Events Demo</h2>

        <h3>Counter: {this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />

        <button onClick={() => this.sayWelcome('Welcome to Events Lab!')}>Say Welcome</button>

        <br /><br />

        <button onClick={this.onPress}>Synthetic Event - onPress</button>

        <br /><br />

        <h3>Currency Converter (INR to Euro)</h3>
        <input
          type="number"
          placeholder="Enter amount in INR"
          value={this.state.inr}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleSubmit}>Convert</button>
        <p>Euro: €{this.state.euro}</p>

        <h4>{this.state.message}</h4>
      </div>
    );
  }
}

export default EventExamples;
