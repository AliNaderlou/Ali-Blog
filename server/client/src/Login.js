import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/auth/authenticate`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          this.props.history.push('/Admin');
        } else {
          throw res.json();
        }
      })
      .catch((err) => {
        err.then((err) => {
          alert(err.error);
        });
      });
  };
  componentDidMount() {
    fetch(`/api/checkToken`)
      .then((res) => {
        if (res.status === 200) {
          this.setState((prevState, props) => ({
            ...prevState,
            loggedIn: true,
          }));
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        // console.log(err);
      });
  }
  render() {
    return !this.state.loggedIn ? (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    ) : (
      <h1>You already logged In</h1>
    );
  }
}

export default Login;
