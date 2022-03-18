import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth User/authUserSlice'
import postsReducer from '../features/Posts/postsSlice'
import friendsReducer from '../features/Other Users/otherUsersSlice'

export const store = configureStore({
  reducer: {
    userData: authReducer,
    postsData: postsReducer,
    friendsData: friendsReducer
  },
});
