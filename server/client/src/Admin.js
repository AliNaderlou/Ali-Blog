import React, { Component } from 'react';
class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: ''
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    fetch(`/api/auth/authenticate`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
  }
  componentDidMount() {
    fetch(`/api/checkToken`)
      .then(res => {
        if (res.status === 200) {
          this.setState({ loading: false });
          alert('fs')
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch(err => {
        console.error(err);
        this.setState({ loading: false, redirect: true });
      });
  }
  render() {
    return (
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
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default Admin;
