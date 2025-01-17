import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
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

      <Button title="Увеличить" onPress={increment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

      flex: 1,
      padding: 20,
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
  },
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

export default Lab1;

