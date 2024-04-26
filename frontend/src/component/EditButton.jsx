import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInput, toggleEditForm } from '../services/userActions';

export function EditButton() {
  const dispatch = useDispatch();
  const [showInputs, setShowInputs] = useState(false);
  const { userName, firstName, lastName } = useSelector((state) => state.user.user);

  const handleInputChange = (input, value) => {
    dispatch(updateUserInput(input, value));
  };

  const handleToggleEditForm = () => {
    dispatch(toggleEditForm());
    setShowInputs(!showInputs);
  };

  const handleCancel = () => {
    setShowInputs(false);
  };

  return (
    <div className='edit'>
      <button className="edit-button" onClick={handleToggleEditForm}>
        Edit Name
      </button>
      {showInputs && (
        <div className='inputName'>
          <div className='inputContainer'>
            <label htmlFor="userName">User name:</label>
            <input
              type="text"
              id="userName"
              value={userName}
              onChange={(e) => handleInputChange('userName', e.target.value)}
            />
          </div>
          <div className='inputContainer'> 
            <label htmlFor="firstName">First name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="lastName">Last name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
            />
          </div>
          <div className='inputButton'>
            <button onClick={handleToggleEditForm}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
