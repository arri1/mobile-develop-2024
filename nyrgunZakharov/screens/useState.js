import React, { useState, useContext } from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';

const Lab1 = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (

    <View style={[styles.container, { backgroundColor: isDarkTheme ? '#121212' : '#f0f0f0' }]}>
      <Text style={[styles.title, { color: isDarkTheme ? '#fff' : '#333' }]}>Счетчик: {count}</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: isDarkTheme ? '#007bff' : '#0056b3' }]} onPress={increment}>
        <Text style={styles.buttonText}>Увеличить</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Lab1;

