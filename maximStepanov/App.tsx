import React, { useState, useEffect, useMemo } from 'react';
import {View, Text, Button, StyleSheet, Platform, ToastAndroid, Alert,
} from 'react-native';

const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count > 0 ? count - 1 : 0);
  const reset = (): void => setCount(0);

  const countLevel = useMemo(() => {
    if (count === 0) return 'Пусто';
    if (count < 5) return 'Низкий';
    if (count < 10) return 'Средний';
    return 'Высокий';
  }, [count]);

  useEffect(() => {
    const message = `Счётчик: ${count} (${countLevel})`;

    if (Platform.OS === 'android') {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert('Счётчик', message);
    }
  }, [count, countLevel]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Счётчик: {count}</Text>
      <Text style={styles.subtext}>Уровень: {countLevel}</Text>

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
    marginBottom: 10,
    color: '#333',
  },
  subtext: {
    fontSize: 18,
    marginBottom: 30,
    color: '#666',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default App;