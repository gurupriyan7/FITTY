import axios from 'axios'
import {
  ADMIN,
  ADMIN_LOGIN,
  ADD_USER,
  ALL_USERS,
  CHANGE_USER_STATUS,
  ADD_TRAINER,
  ALL_TRAINERS,
  CHANGE_TRAINER_STATUS,
  DELETE_TRAINER,
  GET_ALL_ORDERS,
  PAY_PAYMENT,
  GET_ALL_PLANS,
  GET_ALL_DATA
} from '../constants/Adminconstants'

const BACKEND_URL = 'http://localhost:5000/api'

const API = axios.create({
  baseURL: `${BACKEND_URL}/admin`,
  withCredentials: true,
})

// admin-endpoints
export const loginAdmin = (adminData) => API.post(ADMIN_LOGIN, adminData)
export const AddUser = (userData) => API.post(ADD_USER, userData)
export const AllUsers = () => API.get(ALL_USERS)
export const AddTrainer = (trainerData) => API.post(ADD_TRAINER, trainerData)
export const AllTrainers = () => API.get(ALL_TRAINERS)
export const changeTrainerStatus = (trId) =>
  API.put(CHANGE_TRAINER_STATUS + trId)
export const deleteTrainer = (trId) => API.delete(DELETE_TRAINER + trId)
export const changeUserStatus = (userId) => API.put(CHANGE_USER_STATUS + userId)
export const getAllOrders= (config)=>API.get(GET_ALL_ORDERS,config)
export const payPayment=(config,orderId)=>API.put(PAY_PAYMENT+orderId,config)
export const getAllPlans=(config)=>API.get(GET_ALL_PLANS,config)
export const getAllData=(config)=>API.get(GET_ALL_DATA,config)
 