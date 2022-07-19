import axios from 'axios'

import {
  USER_LOGIN,
  USER_REGISTER,
  USER_UPDATE,
  USER_ADDPOST,
  USER_POSTS
} from '../constants/userConstants'
const BACKEND_URL = 'http://localhost:5000/api'

const API = axios.create({
  baseURL: `${BACKEND_URL}/user`,
  withCredentials: true,
})

// traner-endpoints
export const registerUser = (userData) => API.post(USER_REGISTER, userData)
export const loginUser = (userdata) => API.post(USER_LOGIN, userdata)
export const editUser = (userData, config) =>
  API.put(USER_UPDATE, userData, config)

  // User-posts
  export const userAddPost = (postData,config)=>API.post(USER_ADDPOST,postData,config)
  export const userPosts = (config)=>API.get(USER_POSTS,config)
