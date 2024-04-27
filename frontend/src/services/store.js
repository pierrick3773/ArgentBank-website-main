import { createStore, combineReducers } from 'redux';
import userReducer from './userReducer';
import { updateUserInput, toggleEditForm } from '../services/userActions';

const rootReducer = combineReducers({
  user: userReducer,
});

export const store = createStore(rootReducer);
