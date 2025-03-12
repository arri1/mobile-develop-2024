import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const loadTheme = createAsyncThunk('theme/loadTheme', async (_, { dispatch }) => {
  try {
    const storedTheme = await AsyncStorage.getItem('Theme')
    const theme = storedTheme ? JSON.parse(storedTheme) : false
    dispatch(setTheme(theme))
    return theme
  } catch (e) {
    console.error('Ошибка загрузки темы:', e)
    return false
  }
})

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDarkTheme: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme
      AsyncStorage.setItem('Theme', JSON.stringify(state.isDarkTheme))
    },
    setTheme: (state, action) => {
      state.isDarkTheme = action.payload
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions
export default themeSlice.reducer
