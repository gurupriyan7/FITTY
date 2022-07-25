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

export const TrainerPlanService = {
  AddPlan,
}
export default TrainerPlanService
