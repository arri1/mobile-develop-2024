// screens/lab1.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function Lab1() {
  // Состояние для счетчика, начинаем с 0
  const [count, setCount] = useState(0);
  // Состояние для сообщения, по умолчанию 'Привет!'
  const [message, setMessage] = useState('Привет!');

  const { value, lastUpdated } = useSelector((state) => state.number);

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
      <View style={styles.reduxCard}>
        <Text style={styles.reduxTitle}>Значение из Redux:</Text>
        <Text style={styles.reduxValue}>{value}</Text>
        {lastUpdated && (
          <Text style={styles.reduxTimestamp}>Обновлено: {lastUpdated}</Text>
        )}
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
  reduxCard: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  reduxTitle: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
  },
  reduxValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2980b9',
    textAlign: 'center',
  },
  reduxTimestamp: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 5,
  },
});
