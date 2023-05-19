import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './authReducer';
// Import other reducers here if you have more than one

const rootReducer = combineReducers({
  auth: authReducer,
  // Add other reducers here if needed
});

export default rootReducer;
