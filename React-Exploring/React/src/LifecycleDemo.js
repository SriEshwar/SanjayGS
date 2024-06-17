import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      counter: 0,
      isCounting: true,
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    // Simulate a data fetch
    setTimeout(() => {
      this.setState({ data: 'Fetched Data' });
    }, 1000);

    // Increment counter every second
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    // Perform actions based on updates
    if (prevState.data !== this.state.data) {
      console.log('Data updated:', this.state.data);
    }
    if (prevState.counter !== this.state.counter) {
      console.log('Counter updated:', this.state.counter);
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    // Cleanup (e.g., clear timers)
    clearInterval(this.interval);
  }

  stopCounter = () => {
    clearInterval(this.interval);
    this.setState({ isCounting: false });
  };

  render() {
    console.log('render');
    return (
      <div>
        <h1>React Lifecycle Methods</h1>
        <p>Data: {this.state.data}</p>
        <p>Counter: {this.state.counter}</p>
        {this.state.isCounting && (
          <button onClick={this.stopCounter}>Stop Counter</button>
        )}
      </div>
    );
  }
}

export default LifecycleDemo;
