import React from 'react'
import { View, Text, Switch, TouchableOpacity, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme, setTheme } from '../../store/slices/themeSlice'
import { setTasks } from '../../store/slices/tasksSlice'
import { logoutUser } from '../../auth/authSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Ionicons'
import { getStyles } from './Settings.style'

export default function SettingsScreen() {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const styles = getStyles(isDarkTheme)

  const handleClearTasks = async () => {
    Alert.alert(
      'Удаление задач',
      'Вы уверены, что хотите удалить все задачи?',
      [
        { text: 'Отмена', style: 'cancel' },
        {
          text: 'Удалить', onPress: async () => {
            await AsyncStorage.removeItem('Tasks')
            dispatch(setTasks([]))
          }
        }
      ]
    )
  }

  const handleResetApp = async () => {
    Alert.alert(
      'Сброс данных',
      'Это удалит все данные приложения. Вы уверены?',
      [
        { text: 'Отмена', style: 'cancel' },
        {
          text: 'Сбросить', onPress: async () => {
            await AsyncStorage.clear()
            dispatch(setTasks([]))
            dispatch(setTheme(false))
          }
        }
      ]
    )
  }

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Настройки</Text>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Темная тема</Text>
        <Switch value={isDarkTheme} onValueChange={() => dispatch(toggleTheme())} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleClearTasks}>
        <Icon name="trash-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Удалить все задачи</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.resetButton} onPress={handleResetApp}>
        <Icon name="refresh-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Сбросить приложение</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Icon name="log-out-outline" size={24} color="#fff" />
        <Text style={styles.buttonText}>Выйти из аккаунта</Text>
      </TouchableOpacity>
    </View>
  )
}
