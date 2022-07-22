import axios from 'axios'
import {
  TRAINER_DELETE,
  TRAINER_LOGIN,
  TRAINER_REGISTER,
  TRAINER_UPDATE,
  GET_TRAINERS,
  TRAINER_ADDPOST,
  TRAINER_POSTS,
  TRAINER_POST_DELETE,
  ALL_POSTS
} from '../constants/trainerConstants'

const BACKEND_URL = 'http://localhost:5000/api'

const API = axios.create({
  baseURL: `${BACKEND_URL}/trainer`,
  withCredentials: true,
})

// Trainer-endpoints


// Trainer-Login
export const loginTrainer = (trainerData) =>
  API.post(TRAINER_LOGIN, trainerData)

  // Featch-all-Trainers
  export const AllTrainers = ()=>API.get(GET_TRAINERS)

  // Update-Trainer
  export const updateTrainer = (config,trainerData)=>API.put(TRAINER_UPDATE,trainerData,config)

  // Add-post
  export const AddPost = (config,postData)=>API.post(TRAINER_ADDPOST,postData,config)

  // featch-posts
  export const trainerPosts = (config)=>API.get(TRAINER_POSTS,config)

  // delete-posts
  export const deletePost = (config,postId)=>API.delete(TRAINER_POST_DELETE+postId,config)

  // all-posts
  export const allPosts=(config)=>API.get(ALL_POSTS,config)