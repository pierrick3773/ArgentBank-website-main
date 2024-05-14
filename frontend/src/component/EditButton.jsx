import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo, setUserDetails } from '../CAllAPI/UserInfoCall';
import { updateUserProfile } from '../services/reducer';
import { unwrapResult } from '@reduxjs/toolkit';

export function EditButton() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const dispatch = useDispatch();

  // Récupère les informations utilisateur lors du montage du composant
  useEffect(() => {
    dispatch(fetchUserInfo());
    setUserName(userDetails?.userName || '');
  }, [dispatch, userDetails]);

  const handleToggleEditForm = () => {
    setIsEditing(!isEditing);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  // Met à jour le nom d'utilisateur dans la base de données et le state Redux
  const handleSave = async () => {
    try {
      // Appelle l'action updateUserProfile et attend sa résolution
      const resultAction = await dispatch(updateUserProfile({ userName }));
      // Extrait la valeur renvoyée par updateUserProfile à l'aide d'unwrapResult
      const updatedUserDetails = unwrapResult(resultAction);
      console.log('User details after update:', updatedUserDetails);
  
      // Met à jour le state Redux avec les nouvelles informations utilisateur
      const updatedUserDetailsWithUsername = { ...userDetails.payload[0], userName };
      dispatch(setUserDetails(updatedUserDetailsWithUsername));
  
      // Ferme le formulaire d'édition
      handleToggleEditForm();
  
      // Récupère les nouvelles informations utilisateur de l'API
      setTimeout(async () => {
        await dispatch(fetchUserInfo());
      }, 1000);
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  };
  
  

  console.log('User details:', userDetails); // Ajouter cette ligne

 
  

  return (
    <div className="edit">
      <button className="edit-button" onClick={handleToggleEditForm}>
        Edit Name
      </button>
      {isEditing && isLoggedIn && (
        <div className="inputName">
          <div className="inputContainer">
            <label htmlFor="userName">User name:</label>
            <input type="text" id="userName" value={userDetails?.userName} onChange={handleUserNameChange} />


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
