import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

const square = (n) => {
  return n * n;
};

const MemoComponent = () => {
  const [isGreen, setIsGreen] = useState(true); 
  const [num, setNum] = useState(1);
  const result = useMemo(() => square(num), [num]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsGreen(!isGreen)}>
        <Text style={[styles.heading, { color: isGreen ? 'green' : 'red' }]}>
          Лабораторная 3
        </Text>
      </TouchableOpacity>

      <Text style={styles.resultText}>Квадраты: {result}</Text>

      <Button title="*" onPress={() => setNum(num + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultText: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default MemoComponent;
