import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, Button, StyleSheet } from 'react-native';
import { increment, decrement } from '../store/store'; // Исправленный путь к store
import { RootState } from '../store/store'; // Типизация состояния

const MyPage = () => {
  // Получаем состояние из Redux
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Счетчик: {count}</Text>
      <Button title="Увеличить" onPress={() => dispatch(increment())} />
      <Button title="Уменьшить" onPress={() => dispatch(decrement())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
});

export default MyPage;
