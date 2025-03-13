import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksSlice'
import themeReducer from './slices/themeSlice'
import authReducer from '../auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tasks: tasksReducer,
    theme: themeReducer,
  },
})
