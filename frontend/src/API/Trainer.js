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
  ALL_POSTS,
  ADD_PLAN,
  GET_TRAINERS_PLANS,
  GET_SINGLE_PLAN,
  DELETE_PLAN,
  GOOGLE_LOGIN,
  TRAINER_ORDERS,
  TRAINER_PAYMENT_REQUEST,
  UNLIKE_POST,
  LIKE_POST
} from '../constants/trainerConstants'

const BACKEND_URL = 'http://localhost:5000/api'

export const API = axios.create({
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

  // add-Plans
  export const AddPlan=(config,planData)=>API.post(ADD_PLAN,planData,config)
  
  // get-trainer-plan
  export const getTrainerPlan=(config,trId)=>API.get(GET_TRAINERS_PLANS,config)

  // get-single-plan
  export const getSinglePlan=(config,planId)=>API.get(GET_SINGLE_PLAN+planId,config)

  // delete-plan
  export const deletePlan=(config,planId)=>API.delete(DELETE_PLAN+planId,config)

  // login-with-google
  export const tgoogleLogin=(trainerData)=>API.post(GOOGLE_LOGIN,trainerData)
  
  // getTrainerOrders
  export const getTrainerOrders= (config)=>API.get(TRAINER_ORDERS,config)

  // paymentRequest
  // export const paymentRequest = (orderId,config)=>console.log("config",config);
  export const paymentRequest = (orderId,config)=>API.put(TRAINER_PAYMENT_REQUEST+orderId,config)

  // likeUserPost
  export const likeUserPost=(token,postId)=>{
    API.interceptors.request.use((req)=>{
      if(token)
      {
        req.headers.Authorization=`Bearer ${token}`
         console.log("hellloo" , req.headers);
      }
      return req
  })
  API.put(LIKE_POST+postId)
  }
  // unlikeUserPost
  export const unlikeUserPost=(token,postId)=>{
    API.interceptors.request.use((req)=>{
      if(token){
        req.headers.Authorization=`Bearer ${token}`
      }
      return req
    })
    API.put(UNLIKE_POST+postId)
  }

