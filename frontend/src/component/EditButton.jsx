import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export function EditButton() {
  const [isEditing, setIsEditing] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // utilisez cette propriété
  const userDetails = useSelector((state) => state.auth.userDetails);

  const handleToggleEditForm = () => {
    setIsEditing(!isEditing);
  };
console.log(isLoggedIn);
  return (
    <div className="edit">
      <button className="edit-button" onClick={handleToggleEditForm}>
        Edit Name
      </button>
      {isEditing && isLoggedIn && (
        <div className="inputName">
          <div className="inputContainer">
            <label htmlFor="userName">User name:</label>
            <input type="text" id="userName" defaultValue={userDetails?.payload[0].userName} />
          </div>
          <div className="inputContainer">
            <label htmlFor="firstName">First name:</label>
            <input className="readOnly" type="text" id="firstName" defaultValue={userDetails?.payload[0].firstName} />
          </div>
          <div className="inputContainer">
            <label htmlFor="lastName">Last name:</label>
            <input className="readOnly" type="text" id="lastName" defaultValue={userDetails?.payload[0].lastName}/>
          </div>
          <div className="inputButton">
            <button>Save</button>
            <button onClick={handleToggleEditForm}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
