import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminReducer from "../features/adminAuth/AdminSlice"
import trainerReducer from "../features/trainerAuth/TrainerSlice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminAuth:adminReducer,
    trainerAuth:trainerReducer
  },
});
