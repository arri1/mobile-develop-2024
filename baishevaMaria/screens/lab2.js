import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setRandomCountry, toggleTheme } from '../store/store';

export default function Lab2() {
  const [loading, setLoading] = useState(false);
  const randomCountry = useSelector((state) => state.global.randomCountry);
  const theme = useSelector((state) => state.global.theme); // Получаем текущую тему
  const dispatch = useDispatch();

  const fetchRandomCountry = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const countryName = data[randomIndex].name.common;
      dispatch(setRandomCountry(countryName));
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme()); // Переключаем тему
  };

  const appStyles = theme === 'light' ? styles.lightTheme : styles.darkTheme;

  return (
    <View style={[styles.container, appStyles]}>
      <Text style={[styles.title, appStyles]}>Страна:</Text>
      {loading ? (
        <ActivityIndicator size="large" color={theme === 'light' ? '#000' : '#fff'} />
      ) : (
        <Text style={[styles.countryName, appStyles]}>{randomCountry}</Text>
      )}
      <Button title="START" onPress={fetchRandomCountry} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,  // Возвращаем прежний размер для заголовка
    fontWeight: 'bold',
    marginBottom: 10,
  },
  countryName: {
    fontSize: 30,  // Возвращаем прежний размер для названия страны
    marginVertical: 20,
  },
  lightTheme: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  darkTheme: {
    backgroundColor: '#333333',
    color: '#ffffff',
  },
});