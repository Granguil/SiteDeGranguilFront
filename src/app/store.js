import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import UserReducer from '../features/Slices/UserSlice';
export default configureStore({
  reducer: {
    counter: counterReducer,
    User:UserReducer,
  },
});
