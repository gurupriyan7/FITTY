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

export const TrainerPlanService = {
  AddPlan,
  getTrainerPlan,
  getSinglePlan,
  deletePlan
}
export default TrainerPlanService
