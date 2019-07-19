import React from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import Login from './components/login';
import { Route, NavLink } from "react-router-dom";
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/friends')
      .then(resolve => {
        this.setState({friends: resolve.data})
      })
      .catch(err => {console.log('Error:', err)})
  }

  render(){
    return (
      <div className="App">
        <nav>
          <h1 className="friends-header">Friends List</h1>
          <div className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </nav>
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={FriendsList} />
      </div>
    );
  }
}

export default App;
