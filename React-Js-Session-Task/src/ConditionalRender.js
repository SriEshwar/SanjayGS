import React, { Component } from 'react';

class ConditionalRenderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    const { isLoggedIn } = this.state;
    return (
      <div>
        {isLoggedIn ? (
          <h1>Welcome back!</h1>
        ) : (
          <h1>Please log in.</h1>
        )}
      </div>
    );
  }
}

export default ConditionalRenderComponent;
