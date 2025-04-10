// screens/lab1.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lab1() {
  // Состояние для счетчика, начинаем с 0
  const [count, setCount] = useState(0);
  // Состояние для сообщения, по умолчанию 'Привет!'
  const [message, setMessage] = useState('Привет!');

  // Функция для увеличения счетчика на 1
  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1); // Увеличиваем счетчик
    if (count >= 10) { // Если счетчик больше или равен 10
      setMessage('Отличная работа!'); // Меняем сообщение на 'Отличная работа!'
    }
  };

  // Функция для сброса счетчика и сообщения
  const resetCounter = () => {
    setCount(0); // Сбрасываем счетчик
    setMessage('Привет!'); // Возвращаем сообщение 'Привет!'
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text> {/* Показываем сообщение */}
      <Text style={styles.counter}>Счетчик: {count}</Text> {/* Показываем текущее значение счетчика */}
      <View style={styles.buttonContainer}>
        <Button title="Увеличить" onPress={incrementCounter} color="#007AFF" /> {/* Кнопка для увеличения счетчика */}
        <Button title="Сбросить" onPress={resetCounter} color="#FF3B30" /> {/* Кнопка для сброса счетчика */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 20,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  },
});
