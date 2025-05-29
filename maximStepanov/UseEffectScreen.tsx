import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const UseEffectScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(`Вы нажали ${count} раз`);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <Button title="Увеличить" onPress={() => setCount(count + 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20, marginBottom: 20,
  },
});

export default UseEffectScreen;