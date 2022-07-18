import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminReducer from "../features/adminAuth/AdminSlice"
import trainerReducer from "../features/trainerAuth/TrainerSlice"
import featchTrainerReducer from "../features/featchTrainers/FeatchTrainersSlice"
import PostReducer from "../features/Posts/PostsSlice"
export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminAuth:adminReducer,
    trainerAuth:trainerReducer,
    featchAllTrainers:featchTrainerReducer,
    Post:PostReducer
  },
});
