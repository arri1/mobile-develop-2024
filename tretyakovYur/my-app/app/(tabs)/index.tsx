import React, { useState, useMemo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { increment, decrement } from '../store/store';

const StepTracker = () => {
  const steps = useSelector((state: any) => state.counter.value); // Глобальное состояние шагов
  const dispatch = useDispatch(); // Для работы с глобальным состоянием

  const [goal, setGoal] = useState(10000); // Локальная цель пользователя

  // Рассчитываем прогресс выполнения цели
  const progress = useMemo(() => Math.min((steps / goal) * 100, 100).toFixed(2), [steps, goal]);

  // useEffect для логирования прогресса
  useEffect(() => {
    console.log(`Текущий прогресс: ${progress}%`);
  }, [progress]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Трекер шагов</Text>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Прогресс: {progress}%</Text>
      </View>

      <View style={styles.counterContainer}>
        <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.counterText}>{steps} шагов</Text>

        <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>Цель: {goal} шагов</Text>

        <View style={styles.goalButtons}>
          <TouchableOpacity style={styles.smallButton} onPress={() => setGoal(goal + 1000)}>
            <Text style={styles.smallButtonText}>+1000</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton} onPress={() => setGoal(goal - 1000)}>
            <Text style={styles.smallButtonText}>-1000</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 20,
  },
  progressContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#333',
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  progressText: {
    fontSize: 18,
    color: '#00FF00', // Зеленый для прогресса
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  counterText: {
    fontSize: 24,
    color: '#FFF',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: '#FF6F61', // Красные кнопки
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 28,
    color: '#FFF',
  },
  goalContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  goalText: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 10,
  },
  goalButtons: {
    flexDirection: 'row',
  },
  smallButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  smallButtonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default StepTracker;
