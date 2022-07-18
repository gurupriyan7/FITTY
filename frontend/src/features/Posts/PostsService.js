import * as api from '../../API/User'
import * as Tapi from "../../API/Trainer"

// user-post-update
const userAddpost = async (token, postData) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.userAddPost(postData, config)

  return data
}

// trainer-post-update
const trainerAddpost = async (token,postData)=>{
          const config = {
                    headers:{
                              Authorization:`Bearer ${token}`,
                    }
          }
          const {data}= await Tapi.AddPost(config,postData)
}

export const PostsService = {
  userAddpost,
  trainerAddpost
}
export default PostsService
