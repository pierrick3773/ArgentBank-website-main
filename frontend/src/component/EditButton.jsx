import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserInfo } from '../CAllAPI/UserInfoCall';
import { PutUserName } from '../CAllAPI/userNameCall';
import { updateUserProfile } from '../services/reducer';

export function EditButton() {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('');
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const userDetails = useSelector((state) => state.auth.userDetails);
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token); // Déplacer cette ligne ici

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
      const token = localStorage.getItem('token');
      const result = await PutUserName(userName, token);
      console.log("User profile updated:", result);
      dispatch(updateUserProfile({ userName }));
      dispatch(setUserName(userName)); // Mettre à jour le nom d'utilisateur dans le state Redux du composant Header
    } catch (error) {
      console.error("Error updating user profile:", error);
    }
  };
  
  

  console.log('User details:', userDetails);
 
  

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
