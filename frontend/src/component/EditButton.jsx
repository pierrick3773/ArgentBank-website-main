import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserInput, toggleEditForm, updateUsername } from '../services/userActions';
import { firstName, lastName } from './WelcomeUser.jsx';

let userName = firstName;

export function EditButton() {
  const dispatch = useDispatch();
  const [showInputs, setShowInputs] = useState(false);
  const [userFirstName, setUserFirstName] = useState(firstName);
  const [userLastName, setUserLastName] = useState(lastName);
  const [userNameValue, setUserNameValue] = useState(userName); // Ajouter l'état pour userName

  const handleInputChange = (input, value) => {
    if (input === 'userName') {
      dispatch(updateUsername(value));
    }
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
              value={userNameValue} // Utiliser l'état de userNameValue
              onChange={(e) => setUserNameValue(e.target.value)} // Mettre à jour l'état de userNameValue
            />

          </div>
          <div className='inputContainer'>
            <label htmlFor="firstName">First name:</label>
            <input className='readOnly'
              type="text"
              id="firstName"
              value={userFirstName}
              onChange={(e) => setUserFirstName(e.target.value)}
              readOnly
            />
          </div>
          <div className='inputContainer'>
            <label htmlFor="lastName">Last name:</label>
            <input className='readOnly'
              type="text"
              id="lastName"
              value={userLastName}
              onChange={(e) => setUserLastName(e.target.value)}
              readOnly
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
