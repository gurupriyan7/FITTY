import {
  applyMiddleware,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import UserPostsService from './UserPostsService'

const initialState = {
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
  userPosts:[]
}

// Add-userPosts
export const userAddPost = createAsyncThunk(
  'userposts/userAddPost',
  async (postData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await UserPostsService.userAddpost(token, postData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// create-slice
const userPostSlice = createSlice({
  name: 'userpost',
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
    [userAddPost.pending]: (state) => {
      state.isLoading = true
    },
    [userAddPost.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      state.message= action.payload
    },
    [userAddPost.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message=action.payload
    },
  },
})
export const { reset } = userPostSlice.actions
export default userPostSlice.reducer
