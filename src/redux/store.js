import { configureStore } from '@reduxjs/toolkit';
import songReducers from './slices/songSlice';

export const store = configureStore({
    reducer: {
        songs: songReducers
    },
})