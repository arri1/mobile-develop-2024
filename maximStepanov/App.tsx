import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  // Указываем тип для состояния (number)
  const [count, setCount] = useState<number>(0);

  // Типизированные функции
  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count > 0 ? count - 1 : 0); // Защита от отрицательных значений
  const reset = (): void => setCount(0);

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

// Стили с TypeScript (типы StyleSheet автоматически выводятся)
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