import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Lab2() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Привет!');

  useEffect(() => {
    if (count >= 10) {
      setMessage('Отличная работа!');
    }
  }, [count]); // Используем useEffect для отслеживания изменения count

  const incrementCounter = () => {
    setCount(prevCount => prevCount + 1);
  };

  const resetCounter = () => {
    setCount(0);
    setMessage('Привет!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.counter}>Счетчик: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button 
          title="Увеличить" 
          onPress={incrementCounter}
          color="#007AFF"
        />
        <Button 
          title="Сбросить" 
          onPress={resetCounter}
          color="#FF3B30"
        />
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
