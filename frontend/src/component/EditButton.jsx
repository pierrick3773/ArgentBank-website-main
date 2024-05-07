import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../CAllAPI/UserInfoCall';
import { updateUserProfile } from '../services/reducer';

export function EditButton() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  const handleToggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSave = () => {
    dispatch(updateUserProfile({ userName }));
    dispatch(fetchUserInfo()); // Appeler fetchUserInfo après updateUserProfile
    handleToggleEditForm();
  };

  return (
    <div className="edit">
      <button className="edit-button" onClick={handleToggleEditForm}>
        Edit Name
      </button>
      {isEditing && isLoggedIn && (
        <div className="inputName">
          <div className="inputContainer">
            <label htmlFor="userName">User name:</label>
            <input type="text" id="userName" value={userName} onChange={handleUserNameChange} />
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
            <button onClick={handleSave}>Save</button>
            <button onClick={handleToggleEditForm}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
