import axios from 'axios'

import { USER_LOGIN, USER_REGISTER } from '../constants/userConstants'
const BACKEND_URL = 'http://localhost:5000/api'

const API = axios.create({
  baseURL: `${BACKEND_URL}/user`,
  withCredentials: true,
})

// traner-endpoints

export const registerUser = (userData) => API.post(USER_REGISTER, userData)
export const loginUser = (userdata) => API.post(USER_LOGIN, userdata)
