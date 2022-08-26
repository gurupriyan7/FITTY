import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import TrainerPostService from './TrainerPostService'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  isDeleted:false,
  trainerPosts:[],
  allPosts:[],
  isLiked: false,
  isUnliked: false,
}

// Trainer-Add-Post
export const trainerAddpost = createAsyncThunk(
  'trainerposts/trainerAddpost',
  async (postData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return await TrainerPostService.trainerAddpost(token, postData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// Trainer-posts
export const TrainerPosts = createAsyncThunk(
  "trainerposts/trainerPosts",
  async(t,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return TrainerPostService.trainerPosts(token)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)

// Trainer-Delete-post
export const deletePost = createAsyncThunk(
  "trainerposts/deletePost",
  async(postId,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
    return TrainerPostService.deletePost(token,postId)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
    
  }
)
// All-posts
export const AllPosts = createAsyncThunk(
  "trainerposts/deletePost",
  async(t,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return TrainerPostService.AllPosts(token)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)
// likeUserPost
export const likeUserPost = createAsyncThunk(
  'trainerposts/allPosts',
  async (postId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return await TrainerPostService.likeUserPost(token, postId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// unlike-posts
export const unlikeUserPost = createAsyncThunk(
  'trainerposts/unlikeUserPost',
  async (postId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return await TrainerPostService.unlikeUserPost(token, postId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// create-slice
const TrainerPostSlice = createSlice({
  name: 'trainerPost',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = false
      state.isDeleted=false
    },
  },
  extraReducers: {
    // trainer-add-post
    [trainerAddpost.pending]: (state) => {
      state.isLoading = true
    },
    [trainerAddpost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
    },
    [trainerAddpost.rejected]: (state, action) => {
      state.isError = true
      state.isSuccess = false
      state.isLoading = false
      state.message = action.payload
    },
    // get-trainer-posts
    [TrainerPosts.pending]:(state)=>{
      state.isLoading=true
    },
    [TrainerPosts.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.isError= false
      state.isSuccess=true
      state.trainerPosts=action.payload
    },
    [TrainerPosts.rejected]:(state,action)=>{
      state.isLoading=false
      state.isError=true
      state.message=action.payload
    },
    // delete-post
    [deletePost.pending]:(state)=>{
      state.isLoading=true
    },
    [deletePost.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.isError=false
      state.isDeleted=true
    },
    [deletePost.rejected]:(state,action)=>{
      state.isLoading=false
      state.isError=true
      state.isSuccess=false
      state.message=action.payload 
    },
    // All-posts
    [AllPosts.pending]:(state)=>{
      state.isLoading=true
    },
    [AllPosts.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.isError=false
      state.allPosts=action.payload
    },
    [AllPosts.rejected]:(state,action)=>{
      state.isLoading=false
      state.isError=true
      state.isSuccess=false
      state.message=action.payload 
    },
    // likeUserPost
    [likeUserPost.pending]: (state) => {},
    [likeUserPost.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.isLiked = true
    },
    [likeUserPost.rejected]: (state, action) => {
      state.isLiked = false
      state.isError = true
      state.isLiked = false
    },
    // unlikeUserPost
    [unlikeUserPost.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading=false
      state.isUnliked=true
    },
    [unlikeUserPost.rejected]:(state,action)=>{
      state.isUnliked=false
      state.isLoading=false
      state.isError=true
      state.message=action.payload
    }
  },
})

export const { reset } = TrainerPostSlice.actions
export default TrainerPostSlice.reducer
