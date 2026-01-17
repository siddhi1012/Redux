import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
// setup
export const store = configureStore({
    reducer: todoReducer,
});