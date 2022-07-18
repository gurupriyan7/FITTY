import {
  applyMiddleware,
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
  Posts: [],
}

// Add-userPosts
export const AddPost = createAsyncThunk(
  'userposts/userAddPost',
  async (postData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.userAddpost(token, postData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)


// Add-trainerPosts
export const trainerAddpost =createAsyncThunk(
  'trainerposts/trainerAddpost',
  async(postData,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return await PostsService.trainerAddpost(token,postData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)

// create-slice
const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = false
      state.userPosts = []
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
    // trainer-add-post
    [trainerAddpost.pending]: (state) => {
      state.isLoading = true
    },
    [trainerAddpost.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      state.message = action.payload
    },
    [trainerAddpost.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
    },
  },
})
export const { reset } = PostSlice.actions
export default PostSlice.reducer
