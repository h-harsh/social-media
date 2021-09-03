import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../utils/baseurl";
import {
  setupAuthHeaderForServiceCalls,
  setLocalStorage,
  clearLocalStorage,
  getUserFromLocalStorage,
} from "./util";
import { getTokenFromLocalStorage } from "./util";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ userName, password }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/user/login`, {
        userName,
        password,
      });
      // console.log(response.data)
      if (response.status === 200) {
        setupAuthHeaderForServiceCalls(response.data.token);
        setLocalStorage(response.data.user, response.data.token);
      }
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const userSignup = createAsyncThunk(
  "auth/signup",
  async (
    { fullName, userName, email, password },
    { fulfillWithValue, rejectWithValue }
  ) => {
    try {
      const response = await axios.post(`${baseurl}/user/signup`, {
        fullName,
        userName,
        email,
        password,
      });
      // console.log(response.data)
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const userEdit = createAsyncThunk(
  "auth/edit",
  async (updatedDetails, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/user/edit`, updatedDetails);
      if (response.status === 200) {
        clearLocalStorage();
        setupAuthHeaderForServiceCalls(response.data.token);
        setLocalStorage(response.data.user, response.data.token);
      }
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const clearNotif = createAsyncThunk(
  "auth/clearnotif",
  async (param, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.delete(`${baseurl}/notifications/clear`);
      if (response.status === 200) {
        clearLocalStorage();
        setupAuthHeaderForServiceCalls(response.data.token);
        setLocalStorage(response.data.user, response.data.token);
      }
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const loadFeed = createAsyncThunk(
  "auth/loadFeed",
  async (param, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseurl}/feed`);
      console.log(response.data.feedData);
      if (response.status === 200) {
        return fulfillWithValue(response.data.feedData);
      }
    } catch (error) {
      console.log(error.response);
      return rejectWithValue(error.response.data);
    }
  }
);
export const likePostFromFeed = createAsyncThunk(
  "auth/like",
  async (postId, { fulfillWithValue, rejectWithValue }) => {
    try {
      console.log(postId)
      const response = await axios.post(`${baseurl}/post/like/${postId}`, {});
      // console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const commentPostFromFeed = createAsyncThunk(
  "auth/comment",
  async ({postId, comment}, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/post/comment/${postId}`, {comment});
      // console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const userDetails = {
  userName: null,
  fullname: null,
  email: null,
  bio: null,
  dob: null,
  gender: null,
  profilePic: null,
};

const authUserInitialState = {
  token: null,
  loginStatus: "loggedOut",
  signup: "idle",
  userDetails: userDetails,
  followers: null,
  following: null,
  notifications: null,
  feed: null,
  posts: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: getUserFromLocalStorage(),
    token: getTokenFromLocalStorage(),
    loginStatus: "loggedOut",
    error: null,
    signup: "idle",
    userFeed: null,
  },
  reducers: {
    setData: (state, action) => {
      state.currentUser = action.payload.userData;
      state.token = action.payload.token;
      state.loginStatus = "loggedIn";
    },
    clearData: (state) => {
      state.currentUser = {};
      state.token = null;
      state.loginStatus = "loggedOut";
      clearLocalStorage();
    },
  },
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.loginStatus = "loggingIn";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.signup = "idle";
      state.currentUser = action.payload.user;
      state.currentUser.userId = action.payload.user._id;

      state.token = action.payload.token;
      state.loginStatus = "loggedIn";
    },
    [userLogin.rejected]: (state) => {
      state.loginStatus = "logginFailed";
    },

    [userSignup.fulfilled]: (state, action) => {
      state.signup = "true";
    },

    [userEdit.fulfilled]: (state, action) => {
      state.signup = "idle";
      state.currentUser = action.payload.user;
      state.currentUser.userId = action.payload.user._id;

      state.token = action.payload.token;
      state.loginStatus = "loggedIn";
    },

    [clearNotif.fulfilled]: (state, action) => {
      state.signup = "idle";
      state.currentUser = action.payload.user;
      state.currentUser.userId = action.payload.user._id;

      state.token = action.payload.token;
      state.loginStatus = "loggedIn";
    },
    [loadFeed.fulfilled]: (state, action) => {
      state.userFeed = action.payload;
    },
    [likePostFromFeed.fulfilled]: (state, action) => {
      const postIndex = state.userFeed.findIndex(
        (post) => post._id === action.payload.postId
      );

      state.userFeed[postIndex].likes = action.payload.data;
    },
    [commentPostFromFeed.fulfilled] : (state, action) => {
      const postIndex = state.userFeed.findIndex(
          (post) => post._id === action.payload.postId
        );
  
        state.userFeed[postIndex].comments = action.payload.commentsData;
      // state.tempComment = action.payload.commentsData
  },
    // [loadFeed.pending] : (state, action) => {
    //     state.userFeed = "pending"
    // },
    // [loadFeed.rejected] : (state, action) => {
    //     state.userFeed = "rejected"
    // },
  },
});

export const { setData, clearData, notifLoad } = authSlice.actions;
export default authSlice.reducer;
