import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from './authSlice'
import { getAuthStyles } from './Auth.style'

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const styles = getAuthStyles(isDarkTheme)

  const handleRegister = () => {
    dispatch(registerUser({ email, password }))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Регистрация</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Пароль" value={password} secureTextEntry onChangeText={setPassword} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
      </TouchableOpacity>
    </View>
  )
}
