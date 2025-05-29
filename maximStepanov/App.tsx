import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ToastAndroid, Platform, Alert } from 'react-native';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count > 0 ? count - 1 : 0);
  const reset = (): void => setCount(0);

  useEffect(() => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(`Счётчик: ${count}`, ToastAndroid.SHORT);
    } else {
      Alert.alert('Изменение счётчика', `Счётчик: ${count}`);
    }
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Счётчик: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Увеличить (+)" onPress={increment} />
        <Button title="Уменьшить (-)" onPress={decrement} />
        <Button title="Сбросить" onPress={reset} color="#ff5555" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default App;