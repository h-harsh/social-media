import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
import postsReducer from '../features/Posts/postsSlice'
import friendsReducer from '../features/Follow-UnFollow/friendsSlice'

export const store = configureStore({
  reducer: {
    userData: authReducer,
    postsData: postsReducer,
    friendsData: friendsReducer
  },
});
