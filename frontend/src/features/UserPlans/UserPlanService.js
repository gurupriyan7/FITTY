import * as api from '../../API/User'

// get-all-plans
const getAllPlans = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.getAllPlans(config)
  return data
}

// get-singlePlan
const getSinglePlan =async(token,planId)=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data} = await api.getSinglePlan(config,planId)
  return data
}
// getSingleTrainerPlans
const getSingleTrainerPlans = async(token,trId)=>{

  const config={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data}= await api.getSingleTrainerPlans(config,trId)
  console.log("data",data);
  return data
}
export const UserPlanService = {
  getAllPlans,
  getSinglePlan,
  getSingleTrainerPlans
}

export default UserPlanService
