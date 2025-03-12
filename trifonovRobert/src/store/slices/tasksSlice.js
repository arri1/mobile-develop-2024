import { createSlice } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'

const loadTasksFromStorage = async () => {
  try {
    const storedTasks = await AsyncStorage.getItem('Tasks')
    return storedTasks ? JSON.parse(storedTasks) : []
  } catch (e) {
    console.error('Ошибка загрузки задач:', e)
    return []
  }
}

const saveTasksToStorage = async (tasks) => {
  try {
    await AsyncStorage.setItem('Tasks', JSON.stringify(tasks))
  } catch (e) {
    console.error('Ошибка сохранения задач:', e)
  }
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
  },
  reducers: {
    addTask: (state, action) => {
      const newTask = { id: Date.now().toString(), text: action.payload, completed: false }
      state.items.push(newTask)
      saveTasksToStorage(state.items)
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload)
      saveTasksToStorage(state.items)
    },
    toggleTask: (state, action) => {
      const task = state.items.find(task => task.id === action.payload)
      if (task) {
        task.completed = !task.completed
        saveTasksToStorage(state.items)
      }
    },
    setTasks: (state, action) => {
      state.items = action.payload
    },
  },
})

export const { addTask, removeTask, toggleTask, setTasks } = tasksSlice.actions

export const loadTasks = () => async (dispatch) => {
  const tasks = await loadTasksFromStorage()
  dispatch(setTasks(tasks))
}

export default tasksSlice.reducer
