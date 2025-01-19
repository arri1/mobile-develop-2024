// screens/lab2.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Lab2() {
  // Состояние для счетчика, начинаем с 0
  const [count, setCount] = useState(0);
  // Состояние для сообщения, по умолчанию 'Привет!'
  const [message, setMessage] = useState('Привет!');
  // Состояние для фона, изначально белый
  const [backgroundColor, setBackgroundColor] = useState('#fff');

  // Хук useEffect, который срабатывает при изменении состояния count
  // Работает как "сделай что-то после рендера"
  useEffect(() => {
    // Каждый раз, когда count изменяется, меняем цвет фона
    if (count % 2 === 0) {
      setBackgroundColor('#A8DADC'); // Если четное, ставим голубой
    } else {
      setBackgroundColor('#F1FAEE'); // Если нечетное, ставим светлый
    }
  }, [count]); // Зависимость от count, значит, будет срабатывать при изменении count

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
    setBackgroundColor('#fff'); // Возвращаем начальный цвет фона
  };

  return (
    <View style={[styles.container, { backgroundColor }]}> {/* Используем динамический стиль фона */}
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
    justifyContent: 'center',
    alignItems: 'center',
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
