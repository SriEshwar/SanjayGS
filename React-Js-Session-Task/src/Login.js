import React,{Component} from "react";

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        password: ''
      };
    }
  
    handleChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit = (event) => {
      event.preventDefault();
      // Handle the login logic here
      console.log('Username:', this.state.username);
      console.log('Password:', this.state.password);
      // Add your authentication logic here
    }
  
    render() {
      return (
        <div>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
              <h1>Login by {this.state.username} {this.state.password}</h1>
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );
    }
  
  }
  
  export default Login;