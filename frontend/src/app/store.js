import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminReducer from "../features/adminAuth/AdminSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminAuth:adminReducer,
  },
});
