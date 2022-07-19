import * as api from '../../API/User'

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



export const PostsService = {
  userAddpost,
}
export default PostsService
