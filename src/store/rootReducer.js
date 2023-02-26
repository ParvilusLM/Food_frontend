import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cartSlice'
import authSlice from './authSlice'

const rootReducer = combineReducers({
  auth: authSlice,
  panier: cartSlice
});

export default rootReducer;