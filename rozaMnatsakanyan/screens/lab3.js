// screens/lab3.js
import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// Функция для вычисления факториала (очень дорогая операция)
const factorial = (num) => {
  console.log('Вычисление факториала...'); // Будет видно, когда выполняется вычисление
  if (num <= 1) return 1;
  return num * factorial(num - 1);
};

export default function Lab3() {
  // Состояние для текущего числа
  const [number, setNumber] = useState(1);
  // Состояние для отслеживания того, чтобы сравнить с/без useMemo
  const [count, setCount] = useState(0);

  // Вариант без useMemo: каждый раз пересчитываем факториал, даже если число не менялось
  const resultWithoutMemo = factorial(number);

  // Вариант с useMemo: факториал будет вычисляться только, если изменилось число
  const resultWithMemo = useMemo(() => factorial(number), [number]);

  // Увеличиваем счетчик (для того, чтобы сравнить, сколько раз вычисляется факториал)
  const incrementCount = () => setCount(count + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lab 3 - useMemo vs без useMemo</Text>
      
      {/* Отображаем текущее число */}
      <Text style={styles.number}>Число: {number}</Text>
      
      {/* Кнопка для изменения числа */}
      <Button title="Увеличить число" onPress={() => setNumber(number + 1)} />
      {/* Кнопка для увеличения счетчика (чтобы проверять вычисления с каждым нажатием) */}
      <Button title="Увеличить счетчик" onPress={incrementCount} />
      
      {/* Показываем результат вычислений с useMemo и без */}
      <Text style={styles.result}>Результат без useMemo: {resultWithoutMemo}</Text>
      <Text style={styles.result}>Результат с useMemo: {resultWithMemo}</Text>
      
      {/* Показываем, сколько раз обновляется счетчик */}
      <Text style={styles.count}>Счетчик обновлений: {count}</Text>
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
    fontSize: 24,
    marginBottom: 20,
  },
  number: {
    fontSize: 20,
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    marginBottom: 10,
  },
  count: {
    fontSize: 16,
    marginTop: 20,
  },
});
