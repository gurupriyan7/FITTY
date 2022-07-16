import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import FeatchTrainersService from '../featchTrainers/FeatchTrainersService'

const initialState = {
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
  trainers: [],
}

// All-trainers
export const AllTrainers = createAsyncThunk(
  'trainerAuth/AllTrainers',
  async (data, thunkAPI) => {
    try {
      return await FeatchTrainersService.AllTrainers()
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// create-slice
const featchTrainersSlice = createSlice({
  name: 'featchTrainers',
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
      state.trainers = []
    },
  },
  extraReducers: {
    [AllTrainers.pending]: (state) => {
      state.isLoading = true
    },
    [AllTrainers.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.isSuccess = true
      state.trainers = action.payload
    },
    [AllTrainers.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
    },
  },
})

export const { reset } = featchTrainersSlice.actions
export default featchTrainersSlice.reducer
