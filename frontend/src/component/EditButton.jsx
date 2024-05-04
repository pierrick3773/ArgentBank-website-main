import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export function EditButton() {
  const [isEditing, setIsEditing] = useState(false);
  const isLoggedIn = useSelector((state) => state.user.token !== null);
  const userInfo = useSelector((state) => state.userInfo);

  const handleToggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="edit">
      <button className="edit-button" onClick={handleToggleEditForm}>
        Edit Name
      </button>

      {isEditing && isLoggedIn && userInfo && (
        <div className="inputName">
          <div className="inputContainer">
            <label htmlFor="userName">User name:</label>
            <input type="text" id="userName" defaultValue={userInfo.userName} />
          </div>
          <div className="inputContainer">
            <label htmlFor="firstName">First name:</label>
            <input className="readOnly" type="text" id="firstName" defaultValue={userInfo.firstName} readOnly />
          </div>
          <div className="inputContainer">
            <label htmlFor="lastName">Last name:</label>
            <input className="readOnly" type="text" id="lastName" defaultValue={userInfo.lastName} readOnly />
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
