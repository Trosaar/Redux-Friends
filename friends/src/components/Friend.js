import React from 'react';

const Friend = props => {
  return (
    <div className='friendCard'>
      <div>
        <span>{props.friend.name}</span>
        <br/>
        <span>{props.friend.age}</span>
        <br/>
        <span>{props.friend.email}</span>
      </div>
      <div>
        <button to="" >✏</button>
        <button to="" >✖</button>
      </div>
    </div>
  )
}

export default Friend;
