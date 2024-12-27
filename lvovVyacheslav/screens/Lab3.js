import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState, useMemo } from 'react';
import { useClicksStore } from '../stores/stores';

const expensiveCalculation = (num) => {
  console.log('Выполняется сложное вычисление...');
  let result = 0;
  for (let i = 0; i < num * 1000000; i++) {
    result += Math.sin(i);
  }
  return result;
};

const Lab3 = () => {
  const [number, setNumber] = useState(1);
  const { clicks, incrementClicks } = useClicksStore();

  const calculationResult = useMemo(
    () => expensiveCalculation(number),
    [number]
  );

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>Количество нажатий: {clicks}</Text>
      <Text style={styles.result}>
        Результат вычислений: {calculationResult.toFixed(2)}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setNumber((prevNum) => prevNum + 1)}
      >
        <Text style={styles.buttonText}>Увеличить число</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={incrementClicks}>
        <Text style={styles.buttonText}>Добавить в счётчик</Text>
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
    marginBottom: 10,
    textAlign: 'center',
    width: '80%',
  },
  result: {
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
    marginVertical: 10,
  },
  buttonText: {
    color: '#0000FF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Lab3;
