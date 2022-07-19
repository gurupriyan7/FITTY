import * as api from '../../API/Trainer'

// Trainer-Add-Post
const trainerAddpost = async (token, postData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.AddPost(config, postData)
  return data
}

export const TrainerPostService = {
  trainerAddpost,
}
export default TrainerPostService
