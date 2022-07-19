import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import TrainerPostService from './TrainerPostService'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
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
  },
})

export const { reset } = TrainerPostSlice.actions
export default TrainerPostSlice.reducer
