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
