import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { increment, decrement } from '../store/store';

const MyPage = () => {
  const count = useSelector((state: any) => state.counter.value); // Получаем значение из состояния
  const dispatch = useDispatch(); // Диспатчим действия

  return (
    <View style={styles.container}>
      <View style={styles.counterContainer}>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={() => dispatch(decrement())}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{count}</Text>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Цвет фона
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000', // Черный фон
    borderRadius: 50, // Закругленные края
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25, // Круглая форма кнопок
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrementButton: {
    backgroundColor: '#ff0000', // Красный цвет для кнопки "-"
  },
  incrementButton: {
    backgroundColor: '#ff0000', // Красный цвет для кнопки "+"
  },
  buttonText: {
    color: '#fff', // Белый цвет текста
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Белый цвет текста
    marginHorizontal: 20, // Отступ между кнопками и текстом
  },
});

export default MyPage;
