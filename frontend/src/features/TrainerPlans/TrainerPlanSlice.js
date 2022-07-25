import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import TrainerPlanService from './TrainerPlanService'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  allPlans: [],
  trainerPlans: [],
}

export const AddPlan = createAsyncThunk(
  'trainerPlan/AddPlan',
  async (planData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().trainerAuth.trainer.token
      return TrainerPlanService.AddPlan(token, planData)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// create-slice
const TrainerPlanSlice = createSlice({
  name: 'trainerPlan',
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
    // Add-plans
    [AddPlan.pending]: (state) => {
      state.isLoading = true
    },
    [AddPlan.fulfilled]: (state) => {
      state.isSuccess = true
      state.isLoading = false
      state.isError = false
    },
    [AddPlan.rejected]: (state, action) => {
      state.isError = true
      state.isSuccess = false
      state.isLoading = false
      state.message = action.payload
    },
  },
})

export const { reset } = TrainerPlanSlice.actions
export default TrainerPlanSlice.reducer
