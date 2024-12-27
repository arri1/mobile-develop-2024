import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useClicksStore } from '../stores/stores';

const Lab1 = () => {
  const { clicks, incrementClicks } = useClicksStore();

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Количество нажатий: {clicks}</Text>
      <TouchableOpacity style={styles.button} onPress={incrementClicks}>
        <Text style={styles.buttonText}>Нажми на меня</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5FF',
  },
  counter: {
    fontSize: 16,
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    color: '#000',
    marginBottom: 20,
    textAlign: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#D7E3FC',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#0000FF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Lab1;
