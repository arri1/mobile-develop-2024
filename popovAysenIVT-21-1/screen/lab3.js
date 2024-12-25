import React, { useState, useMemo, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../App';

export default function Lab3() {
  const isDarkMode = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  // Мемоизация вычисления
  const expensiveComputation = useMemo(() => {
    console.log('Вычисление выполнено');
    return count * 1000;
  }, [count]);

  const styles = getStyles(isDarkMode);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Результат вычисления: {expensiveComputation}</Text>
      <Button title="Увеличить" onPress={() => setCount(count + 1)} />
    </View>
  );
}

function getStyles(isDarkMode) {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
    },
    text: {
      fontSize: 24,
      color: isDarkMode ? '#fff' : '#000',
    },
  });
}
