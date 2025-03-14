import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from './authSlice'
import { getAuthStyles } from './Auth.style'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const styles = getAuthStyles(isDarkTheme)

  const handleLogin = () => {
    dispatch(loginUser({ email, password }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вход</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Пароль" value={password} secureTextEntry onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.linkText}>Регистрация</Text>
      </TouchableOpacity>
    </View>
  )
}
