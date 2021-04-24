import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import UserReducer from '../features/Slices/UserSlice';
import CartesReducer from '../features/Slices/CartesSlice';
import JeuReducer from '../features/Slices/JeuSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    User:UserReducer,
    Cartes:CartesReducer,
    Jeu:JeuReducer,
  },
});
