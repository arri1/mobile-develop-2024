import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const App = () => {
  // Инициализация состояния с помощью useState
  const [count, setCount] = useState(0);

  // Функция для увеличения счетчика
  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Счетчик: {count}</Text>
      <Button title="Увеличить" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default App;