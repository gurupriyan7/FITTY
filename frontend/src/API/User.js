import axios from 'axios'

import {
  USER_LOGIN,
  USER_REGISTER,
  USER_UPDATE,
  USER_ADDPOST,
  USER_POSTS,
  USER_DELETE_POST,
  USER_ALL_POSTS,
  SINGLE_TRAINER,
  GET_ALL_PLANS,
  GET_SINGLE_PLAN,
  GET_SINGLE_TRAINER_PLANS,
  USER_OWN_PLAN,
  GOOGLE_LOGIN,
  LIKE_POST,
  GET_CONVERSATIONS,
  GET_SINGLE_USER,
  GET_MESSAGES,
  ADD_MESSAGES

} from '../constants/userConstants'
const BACKEND_URL = 'http://localhost:5000/api'

 export const API = axios.create({
  baseURL: `${BACKEND_URL}/user`,
  withCredentials: true,
})




// traner-endpoints
export const registerUser = (userData) => API.post(USER_REGISTER, userData)
export const loginUser = (userdata) => API.post(USER_LOGIN, userdata)
export const editUser = (userData, config) =>
  API.put(USER_UPDATE, userData, config)

// User-posts
export const userAddPost = (postData, config) =>
  API.post(USER_ADDPOST, postData, config)

// Get-user-posts
export const userPosts = (config) => API.get(USER_POSTS, config)

// Delete-post
export const postDelete = (config, postId) =>
  API.delete(`${USER_DELETE_POST}/${postId}`, config)

// get-all-posts
export const getAllPosts = (config) => API.get(USER_ALL_POSTS, config)

// singleTrainerDetails
export const singleTrainerDetails = (trId, config) =>
  API.get(SINGLE_TRAINER + trId, config)

// Get-all-plans
export const getAllPlans = (config) => API.get(GET_ALL_PLANS, config)

// Get-single-plan
export const getSinglePlan = (config, planId) =>
  API.get(GET_SINGLE_PLAN + planId, config)

// getSingleTrainerPlans
export const getSingleTrainerPlans = (config, trId) =>
  API.get(GET_SINGLE_TRAINER_PLANS + trId, config)

  // getUserOwnPlans
  export const getUserOwnPlans = (config)=>API.get(USER_OWN_PLAN,config)

  // google-login
  export const googleLogin = (userData)=>API.post(GOOGLE_LOGIN,userData)


  // likeUserPost
  // export const likeUserPost=(config,postId)=>API.put(LIKE_POST+postId,config)
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


  // getConversation
  export const getConversation =(config,userId)=>API.get(GET_CONVERSATIONS+userId,config)

  // getSigleUser
  export const getSigleUser = (userId)=>API.get(GET_SINGLE_USER+userId)

  // get-messages
  export const getMessages=(convId)=>API.get(GET_MESSAGES+convId)

  // Add-message
  export const addMessage =(message)=>API.post(ADD_MESSAGES,message)



 