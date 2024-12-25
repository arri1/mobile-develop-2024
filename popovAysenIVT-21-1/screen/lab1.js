import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeContext } from '../App';

export default function Lab1() {
  const isDarkMode = useContext(ThemeContext); // Используем тему из контекста
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }]}>
      <View style={[styles.block, { backgroundColor: isDarkMode ? '#4b0082' : '#dcd5f2' }]}>
        <Text style={[styles.text, { color: isDarkMode ? '#ffcc00' : '#6200ee' }]}>Счётчик: {count}</Text>
        <Button title="Увеличить" onPress={() => setCount(count + 1)} />
        <Button title="Сбросить" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  block: {
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
});
