import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store/store';

export default function Lab4() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.global.theme); // Получаем текущую тему

  // Функция для переключения темы
  const toggleAppTheme = () => {
    // Переключаем тему на противоположную
    dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <View style={[styles.container, theme === 'light' ? styles.lightTheme : styles.darkTheme]}>
      <Text style={[styles.text, theme === 'light' ? styles.lightText : styles.darkText]}></Text>
      <Button title="Переключить тему" onPress={toggleAppTheme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  lightTheme: {
    backgroundColor: '#ffffff',
  },
  darkTheme: {
    backgroundColor: '#333333',
  },
  text: {
    fontSize: 18, // Прежний размер текста
    marginBottom: 20,
  },
  lightText: {
    color: '#000000', // Цвет текста для светлой темы
  },
  darkText: {
    color: '#ffffff', // Цвет текста для темной темы
  },
});