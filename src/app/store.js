import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth User/authSlice'
import postsReducer from '../features/Posts/postsSlice'
import friendsReducer from '../features/Other Users/friendsSlice'

export const store = configureStore({
  reducer: {
    userData: authReducer,
    postsData: postsReducer,
    friendsData: friendsReducer
  },
});
