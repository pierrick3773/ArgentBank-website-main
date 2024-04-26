const initialState = {
  user: {
    name: '',
    email: '',
    // autres propriétés de l'utilisateur
  },
  showEditForm: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_USER_INPUT':
      return {
        ...state,
        user: {
          ...state.user,
          [action.payload.input]: action.payload.value,
        },
      };
    case 'TOGGLE_EDIT_FORM':
      return {
        ...state,
        showEditForm: !state.showEditForm,
      };
    default:
      return state;
  }
};

export default userReducer;
