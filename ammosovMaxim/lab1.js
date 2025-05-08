// lab1.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Lab1 = () => {
  const [count, setCount] = useState(0); // Инициализируем состояние

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState Демонстрация</Text>
      <Text style={styles.counter}>Счётчик: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Увеличить" onPress={() => setCount(count + 1)} />
        <Button title="Сбросить" onPress={() => setCount(0)} />
      </View>
    </View>
  );
};

export default Lab1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  counter: {
    fontSize: 32,
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
