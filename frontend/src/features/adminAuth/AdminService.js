import axios from 'axios'
import {
  ADMIN_LOGIN,
  ADD_USER,
  ALL_USERS,
  ADD_TRAINER,
  ALL_TRAINERS,
  CHANGE_TRAINER_STATUS,
  CHANGE_USER_STATUS,
  DELETE_TRAINER
} from '../../constants/Adminconstants'

import * as api from '../../API/Admin'

// Admin-Login
const login = async (adminData) => {
  // const response = await axios.post(ADMIN_LOGIN, adminData)
  const {data} = await api.loginAdmin(ADMIN_LOGIN,adminData)
  

  if (data) {
    localStorage.setItem('admin', JSON.stringify(data))
  }
  return data
}
// Admin-Logout
const logout = async () => {
  await localStorage.removeItem('admin')
}

// Add-User
const AddUsers = async (userData) => {
  const { data } = await api.AddUser(userData)
  console.log(data)
  return data
}

// All-Users
const AllUsers = async () => {
  console.log("GOTLIT ");
  const {data}= await api.AllUsers()
  return data
}

// Add-Trainer
const AddTrainer = async (TrainerData) => {

  const {data} = await api.AddTrainer(TrainerData)

  return data
}
// All-Trainers
const AllTrainers = async () => {
  const {data}= await api.AllTrainers()
  if (data) {
    localStorage.setItem('trainer', JSON.stringify(data))
  }
  return data
}

// Change-Trainer-status
const changeTrainerStatus = async (trId) => {
  const {data}=await api.changeTrainerStatus(trId)
  return data
}
// delete-trainer
const deleteTrainer = async (trId) => {
  const {data} = await api.deleteTrainer(trId)
  return data
}
// change-user-staus
const changeUserStatus = async (userId) => {
  const {data} = await api.changeUserStatus(userId)
  return data
}

const adminService = {
  login,
  logout,
  AddUsers,
  AllUsers,
  AddTrainer,
  AllTrainers,
  changeTrainerStatus,
  changeUserStatus,
  deleteTrainer,
}
export default adminService
