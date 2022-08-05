import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './AdminService'
import { errorMessage } from '../ErrorHandle/errorMessage'
// Get-admin-from-localstorage
const admin = JSON.parse(localStorage.getItem('admin'))

const initialState = {
  admin: admin ? admin : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  users: [],
  trainers: [],
  isModified: false,
  isDeleted: false,
  isPaymentSent: false,
  orders: [],
  category: {},
  allData: {},
}


// login-admin
export const adminLogin = createAsyncThunk(
  'adminAuth/adminLogin',
  async (adminData, thunkAPI) => {
    try {
      return await adminService.login(adminData)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// Logout-admin
export const adminLogout = createAsyncThunk(
  'adminAuth/adminLogout',
  async () => {
    return await adminService.logout()
  },
)
// Add-User
export const AddUsers = createAsyncThunk(
  'adminAuth/AddUser',
  async (userData, thunkAPI) => {
    try {
      return await adminService.AddUsers(userData)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// Get-all-Users
export const AllUsers = createAsyncThunk(
  'adminAuth/AllUsers',
  async (data, thunkAPI) => {
    try {
      return await adminService.AllUsers()
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// Add-trainer
export const AddTrainer = createAsyncThunk(
  'adminAuth/AddTrainer',
  async (trainerData, thunkAPI) => {
    try {
      console.log("data got it",trainerData);
      return await adminService.AddTrainer(trainerData)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// All-Trainers
export const AllTrainers = createAsyncThunk(
  'adminAuth/AllTrainers',
  async (data, thunkAPI) => {
    try {
      return await adminService.AllTrainers()
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// change-trainerStatus(block/unblock)
export const changeTrainerStatus = createAsyncThunk(
  'adminAuth/ChangeStatus',
  async (id, thunkAPI) => {
    try {
      return await adminService.changeTrainerStatus(id)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// delete-trainer
export const deleteTrainer = createAsyncThunk(
  'adminAuth/deleteTrainer',
  async (trId, thunkAPI) => {
    try {
      return await adminService.deleteTrainer(trId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// Change-user-status
export const changeUserStatus = createAsyncThunk(
  'adminAuth/changeUserStatus',
  async (userId, thunkAPI) => {
    try {
      return await adminService.changeUserStatus(userId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// all-orders
export const getAllOrders = createAsyncThunk(
  'adminAuth/getAllOrders',
  async (a, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().adminAuth.admin.token
      return await adminService.getAllOrders(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// payPayment
export const payPayment = createAsyncThunk(
  'adminAuth/payPayment',
  async (orderId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().adminAuth.admin.token
      return await adminService.payPayment(token, orderId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// get-all-plans
export const getCategory = createAsyncThunk(
  'adminAuth/getCategory',
  async (a, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().adminAuth.admin.token
      return await adminService.getAllPlans(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// getAllData
export const getAllData=createAsyncThunk(
  "adminAuth/getAllData",
  async(admin,thunkAPI)=>{
    try {
      const token = await thunkAPI.getState().adminAuth.admin.token
      return await adminService.getAllData(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  }
)

// create-slice
export const adminSlice = createSlice({
  name: 'adminAuth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
      state.isPaymentSent = false
    },
  },
  extraReducers: {
    // Login-case
    [adminLogin.fulfilled]: (state, action) => {
      state.isLoading = false
      state.admin = action.payload
      state.isSuccess = true
    },
    [adminLogin.pending]: (state) => {
      state.isLoading = true
    },
    [adminLogin.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.admin = null
    },
    // Logout-case
    [adminLogout.fulfilled]: (state) => {
      state.admin = null
      state.isSuccess = false
    },
    // Add-user
    [AddUsers.fulfilled]: (state) => {
      state.isSuccess = true
      state.isLoading = false
      state.isError = false
    },
    [AddUsers.pending]: (state) => {
      state.isLoading = true
    },
    [AddUsers.rejected]: (state) => {
      state.isError = true
    },
    // All-Users
    [AllUsers.pending]: (state) => {
      state.isLoading = true
    },
    [AllUsers.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.users = null
    },
    [AllUsers.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isError = false
      state.users = action.payload
    },
    // Add-Trainer
    [AddTrainer.pending]: (state) => {
      state.isLoading = true
    },
    [AddTrainer.fulfilled]: (state) => {
      state.isSuccess = true
      state.isLoading = false
    },
    [AddTrainer.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
    },
    // All-Trainers
    [AllTrainers.pending]: (state) => {
      state.isLoading = true
    },
    [AllTrainers.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.trainers = null
    },
    [AllTrainers.fulfilled]: (state, action) => {
      state.trainers = action.payload
      state.isLoading = false
      state.isError = false
    },
    // Trainer-block-unblock
    [changeTrainerStatus.pending]: (state) => {
      state.isLoading = true
      state.isModified = false
    },
    [changeTrainerStatus.fulfilled]: (state) => {
      state.isLoading = false
      state.isModified = true
      state.isError = false
    },
    [changeTrainerStatus.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
      state.isModified = false
    },
    // change-user-status
    [changeUserStatus.pending]: (state) => {
      state.isLoading = true
      state.isModified = false
    },
    [changeUserStatus.fulfilled]: (state) => {
      state.isLoading = false
      state.isModified = true
      state.isError = false
    },
    [changeUserStatus.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isModified = false
      state.message = action.payload
    },
    // delete-trainer
    [deleteTrainer.pending]: (state) => {
      state.isLoading = true
      state.isDeleted = false
    },
    [deleteTrainer.fulfilled]: (state) => {
      state.isDeleted = true
      state.isLoading = false
      state.isError = false
    },
    [deleteTrainer.rejected]: (state, action) => {
      state.isDeleted = false
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    },
    // getAllOrders
    [getAllOrders.pending]: (state) => {
      state.isLoading = true
    },
    [getAllOrders.fulfilled]: (state, action) => {
      state.isLoading = false
      state.orders = action.payload
      state.isError = false
    },
    [getAllOrders.rejected]: (state, action) => {
      state.isError = true
      state.message = action.payload
    },
    // payPayment
    [payPayment.pending]: (state) => {
      state.isLoading = true
    },
    [payPayment.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isError = false
      state.isPaymentSent = true
    },
    [payPayment.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    },
    // getPlans
    [getCategory.pending]: (state) => {
      state.isLoading = true
    },
    [getCategory.fulfilled]: (state, action) => {
      state.isError = false
      state.isLoading = false
      state.category = action.payload
    },
    [getCategory.rejected]: (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload
    },
    // getAllData
    [getAllData.pending]:(state)=>{
      state.isLoading=true
    },
    [getAllData.fulfilled]:(state,action)=>{
      state.isLoading=false
      state.isError=false
      state.allData=action.payload
    },
    [getAllData.rejected]:(state,action)=>{
      state.isLoading=false
      state.isError=true
      state.message=action.payload
    }
  },
})
export const { reset } = adminSlice.actions
export default adminSlice.reducer
