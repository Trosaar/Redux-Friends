import React from 'react';
import Friend from './Friend.js'

class FriendsList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friends: []
    };
  };

  componentDidMount(props) {
  //   axios
  //     .get('http://localhost:5000/friends')
  //     .then(resolve => {
  //       this.setState({friends: resolve.data})
  //     })
  //     .catch(err => {console.log('Error:', err)})
  }

  render() {
    return (
      <div>
      {this.state.friends.map(friend => {
        return(
        <Friend friend={friend} key={friend.id}/>
      )})}
      </div>
    )
  }
}

export default FriendsList;
