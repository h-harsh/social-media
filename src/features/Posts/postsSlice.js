import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseurl } from "../../utils/baseurl";

export const loadPosts = createAsyncThunk(
  "posts/load",
  async (userId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/post/${userId}`);
      console.log(response.data);
      return fulfillWithValue(response.data.allPosts);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const addPost = createAsyncThunk(
  "posts/add",
  async ({ text }, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/post/new`, { text });
      // console.log(response.data);
      return fulfillWithValue(response.data.newPost);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const likePost = createAsyncThunk(
  "posts/like",
  async (postId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.post(`${baseurl}/post/like/${postId}`, {});
      // console.log(response.data);
      return fulfillWithValue(response.data);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);
export const commentPost = createAsyncThunk(
  "posts/comment",
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
// Loading otheruser and loading his timelien page
// Currently doing this in post slice later to be moved seperately
export const loadOtherUser = createAsyncThunk(
  "posts/loadOtherUser",
  async (userId, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await axios.get(`${baseurl}/user/otherUser/${userId}`);
      console.log(response.data);
      return fulfillWithValue(response.data.otherUserdata);
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: null,
    status: "idle",
    error: null,
    otherUser:null,
    // tempComment:null
  },
  reducers: {},
  extraReducers: {
    [loadPosts.fulfilled]: (state, action) => {
      state.posts = action.payload;
      state.status = "success";
    },

    [addPost.fulfilled]: (state, action) => {
      state.posts.push(action.payload);
    },
    [likePost.fulfilled]: (state, action) => {
      const postIndex = state.posts.findIndex(
        (post) => post._id === action.payload.postId
      );

      state.posts[postIndex].likes = action.payload.data;
    },
    [commentPost.fulfilled] : (state, action) => {
        const postIndex = state.posts.findIndex(
            (post) => post._id === action.payload.postId
          );
    
          state.posts[postIndex].comments = action.payload.commentsData;
        // state.tempComment = action.payload.commentsData
    },
    [loadOtherUser.fulfilled]: (state, action) => {
      state.otherUser = action.payload
    }
  },
});

export default postsSlice.reducer;
