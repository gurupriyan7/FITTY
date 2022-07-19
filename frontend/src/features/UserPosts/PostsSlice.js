import {
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import PostsService from './PostsService'

const initialState = {
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
}

// Add-userPosts
export const AddPost = createAsyncThunk(
  'posts/AddPost',
  async (postData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.userAddpost(token, postData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// user-posts
export const userPost = createAsyncThunk(
  "posts/userPosts",
  async(data,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.userposts(token)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)



// create-slice
const PostSlice = createSlice({
  name: 'userpost',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = false
    },
  },
  extraReducers: {
    // user-add-post
    [AddPost.pending]: (state) => {
      state.isLoading = true
    },
    [AddPost.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload
    },
    [AddPost.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
    },
  },
})
export const { reset } = PostSlice.actions
export default PostSlice.reducer
