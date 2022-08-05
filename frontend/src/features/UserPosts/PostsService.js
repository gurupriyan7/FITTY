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

// post-delete
const postDelete = async (token, postId) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.postDelete(config, postId)
  return data
}

// get-all-posts
const getAllPosts = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { data } = await api.getAllPosts(config)
  return data
}
// likeUserPost
const likeUserPost = async (token, postId) => {
  const { data } = await api.likeUserPost(token, postId)
  return data
}

export const PostsService = {
  userAddpost,
  userposts,
  postDelete,
  getAllPosts,
  likeUserPost,
}
export default PostsService
