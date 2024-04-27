
import { updateUsername } from '../services/userActions';

const initialState = {
  userName: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case updateUsername:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
}


