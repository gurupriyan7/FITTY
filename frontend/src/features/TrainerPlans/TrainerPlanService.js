import * as api from '../../API/Trainer'

// Trainer-Add-Plan
const AddPlan = async (token, planData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.AddPlan(config, planData)
  return data
}

// Trainer-get-trainer-plans
const getTrainerPlan = async (token, trId) => {
 
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.getTrainerPlan(config,trId)
 
  return data
}

// Get-single-plan
const getSinglePlan = async(token,planId)=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data}= await api.getSinglePlan(config,planId)
  return data
}

// delete-plan
const deletePlan=async(token,planId)=>{
  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data} = await api.deletePlan(config,planId)
  return data
}
// getTrainerOrders
const getTrainerOrders = async(token)=>{
  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data}=await api.getTrainerOrders(config)
  return data
}
// paymentRequest
const paymentRequest = async(token,orderId)=>{
  const config = {
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  console.log("sdf",config);
  const {data} = await api.paymentRequest(orderId,config)
  return data;
}

export const TrainerPlanService = {
  AddPlan,
  getTrainerPlan,
  getSinglePlan,
  deletePlan,
  getTrainerOrders,
  paymentRequest 
}
export default TrainerPlanService
