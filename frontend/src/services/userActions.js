export const updateUserInput = (input, value) => ({
    type: 'UPDATE_USER_INPUT',
    payload: { input, value },
  });
  
  export const toggleEditForm = () => ({
    type: 'TOGGLE_EDIT_FORM',
  });
  
  
  export const updateUsername = (username) => ({
    type: 'UPDATE_USERNAME',
    payload: username,
  });
  