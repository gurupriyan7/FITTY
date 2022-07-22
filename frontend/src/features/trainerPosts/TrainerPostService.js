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

// Trainer-posts
const trainerPosts = async(token)=>{
  const config={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data} =await api.trainerPosts(config)
  return data
}
// delete-post
const deletePost = async(token,postId)=>{
  const config={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data} = await api.deletePost(config,postId)
  return data
}
// All-posts
const AllPosts = async (token)=>{
  const config ={
    headers:{
      Authorization:`Bearer ${token}`
    }
  }
  const {data} = await api.allPosts(config)
  return data
}
export const TrainerPostService = {
  trainerAddpost,
  trainerPosts,
  deletePost,
  AllPosts
}
export default TrainerPostService
