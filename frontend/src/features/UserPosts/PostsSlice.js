import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { errorMessage } from '../ErrorHandle/errorMessage'
import PostsService from './PostsService'

const initialState = {
  isError: false,
  isSuccess: false,
  message: '',
  isLoading: false,
  userposts: [],
  isDeleted: false,
  allPosts: [],
  isLiked: false,
  isUnliked: false,
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
// user-posts-featch
export const userPost = createAsyncThunk(
  'posts/userPosts',
  async (t, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.userposts(token)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// delete-user-post
export const postDelete = createAsyncThunk(
  'posts/postDelete',
  async (postId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.postDelete(token, postId)
    } catch (error) {
      thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// get-all-posts
export const AllPosts = createAsyncThunk(
  'posts/AllPosts',
  async (u, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.getAllPosts(token)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)

// likeUserPost
export const likeUserPost = createAsyncThunk(
  'posts/allPosts',
  async (postId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.likeUserPost(token, postId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
)
// unlike-posts
export const unlikeUserPost = createAsyncThunk(
  'posts/unlikeUserPost',
  async (postId, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token
      return await PostsService.unlikeUserPost(token, postId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorMessage(error))
    }
  },
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
      state.isDeleted = false
      state.isLiked = false
      state.isUnliked = false
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
    [userPost.pending]: (state, action) => {
      state.isLoading = true
    },
    [userPost.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isError = false
      state.userposts = action.payload
    },
    [userPost.rejected]: (state, action) => {
      state.isError = true
      state.isSuccess = false
      state.message = action.payload
      state.userposts = []
    },
    // delete-post
    [postDelete.pending]: (state) => {
      state.isLoading = true
    },
    [postDelete.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isDeleted = true
      state.isError = false
    },
    [postDelete.rejected]: (state, action) => {
      state.isDeleted = false
      state.isError = true
      state.isLoading = false
      state.message = action.payload
    },
    //All-posts
    [AllPosts.pending]: (state) => {
      state.isLoading = true
    },
    [AllPosts.fulfilled]: (state, action) => {
      console.log('daaaa', action.payload)
      state.isSuccess = true
      state.isError = false
      state.isLoading = false
      state.allPosts = action.payload
    },
    [AllPosts.rejected]: (state, action) => {
      state.isError = true
      state.isLoading = false
      state.isSuccess = false
      state.message = action.payload
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
export const { reset } = PostSlice.actions
export default PostSlice.reducer
