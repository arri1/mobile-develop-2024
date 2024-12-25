import React, { useContext, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../App';

export default function Lab1() {
  const isDarkMode = useContext(ThemeContext);

  // Стили в зависимости от темы
  const styles = getStyles(isDarkMode);

  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Счётчик: {count}</Text>
      <Button title="Увеличить" onPress={() => setCount(count + 1)} />
      <Button title="Сбросить" onPress={() => setCount(0)} />
    </View>
  );
}

// Функция для получения стилей в зависимости от темы
function getStyles(isDarkMode) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
    },
    text: {
      fontSize: 24,
      marginBottom: 20,
      color: isDarkMode ? '#fff' : '#000',
    },
  });
}
