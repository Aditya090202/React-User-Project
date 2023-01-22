import React from 'react'
import './UserItem.css';

function UserItem(props) {
  return (
    <div className='user-item__inner'>
       <li>
       {`${props.username} (${props.age} years old)`}
       </li>
    </div>
  )
}

export default UserItem