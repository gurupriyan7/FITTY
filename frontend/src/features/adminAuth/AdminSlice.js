import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";
import adminService from "./AdminService";



// Get-admin-from-localstorage
const admin =JSON.parse(localStorage.getItem("admin"))

const initialState = {
          admin: admin ? admin : null,
          isError: false,
          isSuccess: false,
          isLoading: false,
          message: "",
          users:[]
        };



// login-admin
export const adminLogin = createAsyncThunk("adminAuth/adminLogin",
async(adminData,thunkAPI)=>{
          try {
                 return await  adminService.login(adminData)  
          } catch (error) {
                    const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
          }
})

// Logout-admin
export const adminLogout = createAsyncThunk("adminAuth/adminLogout",
async()=>{
          return await adminService.logout();
})
// Add-User
export const AddUsers = createAsyncThunk("adminAuth/AddUser",
async(userData,thunkAPI)=>{
  try {
    return await adminService.AddUsers(userData)
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString();
  return thunkAPI.rejectWithValue(message);
  }
})

// Get-all-Users
export const AllUsers = createAsyncThunk("adminAuth/AllUsers",
async(data,thunkAPI)=>{
  try {
    return  await adminService.AllUsers()
  } catch (error) {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString();
  return thunkAPI.rejectWithValue(message);
  }
})


// create-slice
export const adminSlice = createSlice({
          name:"adminAuth",
          initialState,
          reducers:{
                    reset:(state)=>{
                              state.isLoading = false;
                              state.isSuccess = false;
                              state.isError = false;
                              state.message = ""; 
                    },
                    
                    
          },
          extraReducers:{
          // Login-case
          [adminLogin.fulfilled]:(state,action)=>{
                    state.isLoading=false;
                    state.admin=action.payload;
                    state.isSuccess=true;
          },
          [adminLogin.pending]:(state)=>{
                    state.isLoading = true
          },
          [adminLogin.rejected]:(state,action)=>{
                    state.isLoading=false;
                    state.isError=true;
                    state.message=action.payload;
                    state.admin=null;
          },
          // Logout-case
          [adminLogout.fulfilled]:(state)=>{
                    state.admin=null;
                    state.isSuccess=false;
          },
          // Add-user
          [AddUsers.fulfilled]:(state)=>{
            state.isSuccess= true
            state.isLoading=false
            state.isError=false

          },
          [AddUsers.pending]:(state)=>{
            state.isLoading=true
          },
          [AddUsers.rejected]:(state)=>{
            state.isError=true
          },
          // All-Users
          [AllUsers.pending]:(state)=>{
            state.isLoading=true
          },
          [AllUsers.rejected]:(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload;
            state.users=null;
          },
          [AllUsers.fulfilled]:(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.users=action.payload
          }
          }

});
export const {reset} =adminSlice.actions;
export default adminSlice.reducer;