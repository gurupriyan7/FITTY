import { createAsyncThunk } from '@reduxjs/toolkit'
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

// featch-user-posts
const userposts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.userPosts(config)
  return data
}

export const PostsService = {
  userAddpost,
  userposts,
}
export default PostsService
