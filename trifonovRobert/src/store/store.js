import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './slices/tasksSlice'
import themeReducer from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeReducer,
  },
})
