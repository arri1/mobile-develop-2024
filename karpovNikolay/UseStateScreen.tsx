import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation';

type UseStateScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UseState'>;

type Props = {
  navigation: UseStateScreenNavigationProp;
};

const UseStateScreen: React.FC<Props> = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Счётчик: {count}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Увеличить (+)" onPress={increment} />
        <Button title="Уменьшить (-)" onPress={decrement} />
        <Button title="Сбросить" onPress={reset} color="#ff5555" />
      </View>
      <View style={styles.navigationButton}>
        <Button title="Перейти к useEffect" onPress={() => navigation.navigate('UseEffect')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 28, marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', gap: 10 },
  navigationButton: { marginTop: 30 },
});

export default UseStateScreen;