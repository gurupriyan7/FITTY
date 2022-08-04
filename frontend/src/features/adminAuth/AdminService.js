import * as api from '../../API/Admin'

// Admin-Login
const login = async (adminData) => {
  const { data } = await api.loginAdmin(adminData)

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
  return data
}

// All-Users
const AllUsers = async () => {
  const { data } = await api.AllUsers()
  return data
}

// Add-Trainer
const AddTrainer = async (TrainerData) => {
  const { data } = await api.AddTrainer(TrainerData)

  return data
}
// All-Trainers
const AllTrainers = async () => {
  const { data } = await api.AllTrainers()
  if (data) {
   
  }
  return data
}

// Change-Trainer-status
const changeTrainerStatus = async (trId) => {
  const { data } = await api.changeTrainerStatus(trId)
  return data
}
// delete-trainer
const deleteTrainer = async (trId) => {
  const { data } = await api.deleteTrainer(trId)
  return data
}
// change-user-staus
const changeUserStatus = async (userId) => {
  const { data } = await api.changeUserStatus(userId)
  return data
}
// getAllOrders
const getAllOrders = async(token)=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data}=await api.getAllOrders(config)
  return data
}
// payPayment
const payPayment=async(token,orderId)=>{
  const config={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data}=await api.payPayment(config,orderId)
  return data
}
// getAllPlans
const getAllPlans = async(token)=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data}=await api.getAllPlans(config)
  return data
}
// getAllData
const getAllData = async(token)=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data}=await api.getAllData(config)
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
  getAllOrders,
  payPayment,
  getAllPlans,
  getAllData
}
export default adminService
