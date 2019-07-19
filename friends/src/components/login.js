import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor() {
    super();
    this.state={
      username:'',
      password:'',
    }
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
  }

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input type='text' name='username' placeholder='Username' value={this.state.username} onChange={this.changeHandler} autoComplete='username'/> <br/>
        <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.changeHandler} autoComplete='current-password'/> <br/>
        <button type='submit'>Login</button>
      </form>
    )
  }
}

export default connect(null, null)(Login)
