import React from 'react'
import { View, Text, Switch } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../store/slices/themeSlice'
import { styles } from './Settings.style'

export default function SettingsScreen() {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Настройки</Text>
      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Темная тема</Text>
        <Switch value={isDarkTheme} onValueChange={() => dispatch(toggleTheme())} />
      </View>
    </View>
  )
}
