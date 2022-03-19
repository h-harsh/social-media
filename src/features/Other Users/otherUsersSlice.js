/*eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseurl } from "../../utils/baseurl";
import axios from 'axios'

export const loadAllUsers = createAsyncThunk('friendsManagement/loadAll',
async (param, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseurl}/user`);
        // console.log(response.data);
        return fulfillWithValue(response.data.allUsers);
      } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
}
)
export const loadFriends = createAsyncThunk('friendsManagement/load',
async (param, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await axios.get(`${baseurl}/friends`);
        // console.log(response.data);
        return fulfillWithValue(response.data);
      } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
}
)
export const followFriend = createAsyncThunk('friendsManagement/follow',
async ({otherUserId}, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseurl}/friends/follow/${otherUserId}`, {});
        // console.log(response.data);
        return fulfillWithValue(response.data);
      } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
}
)
export const unfollowFriend = createAsyncThunk('friendsManagement/unfollow',
async ({otherUserId}, { fulfillWithValue, rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseurl}/friends/unfollow/${otherUserId}`, {});
        // console.log(response.data);
        return fulfillWithValue(response.data);
      } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
      }
}
)
const userDetails = {
  userName: null,
  fullname: null,
  email: null,
  bio: null,
  dob: null,
  gender: null,
  profilePic: null    
}

const otherUsersInitialstate = {
  userDetails:userDetails,
  posts:null,
  followers:null,
  following:null,
  allusers:null
} 

const friendsManagementSlice = createSlice({
    name:'friendsManagement',
    initialState:{
        followers:null,
        following:null,
        allUsers:null
    },
    reducers:{

    }, 
    extraReducers:{
      [loadFriends.fulfilled] : (state, action) => {
        state.followers = action.payload.followers
        state.following = action.payload.following
      },
      [followFriend.fulfilled] : (state, action) => {
        state.followers = action.payload.followers
        state.following = action.payload.following
      },
      [unfollowFriend.fulfilled] : (state, action) => {
        state.followers = action.payload.followers
        state.following = action.payload.following
      },
      [loadAllUsers.fulfilled] : (state, action) => {
        state.allUsers = action.payload
      }
    }
})

export default friendsManagementSlice.reducer;