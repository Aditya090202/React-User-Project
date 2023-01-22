import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

function UserList(props) {
  const filteredData = props.items.filter((item) => item.username !== undefined && item.age !== undefined)
  return (
    <div className="inner-div__data">
      <ul className="padding-remove">
        <div className='flex-box-list'>
          {filteredData.map((User) => (
            <UserItem key={User.id} username={User.username} id={User.id} age={User.age} />
          ))}
        </div>
      </ul>
    </div>
  );
}

export default UserList;
