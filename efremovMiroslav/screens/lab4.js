import React, { useState, useMemo } from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = useState(1);
  const [memoTime, setMemoTime] = useState(0);
  const [regularTime, setRegularTime] = useState(0);
  const [computeCount, setComputeCount] = useState(0);

  // Тяжелые вычисления с использованием входного значения
  const heavyCalculation = (base) => {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += Math.sqrt(i + base) * Math.sin(i + base);
    }
    return result;
  };

  // Мемоизированное значение, зависящее только от inputValue
  const memoizedValue = useMemo(() => {
    const start = performance.now();
    const value = heavyCalculation(inputValue);
    const time = performance.now() - start;
    setMemoTime(time);
    return value;
  }, [inputValue]);

  // Обычное вычисление
  const calculateRegular = () => {
    const start = performance.now();
    const value = heavyCalculation(inputValue);
    const time = performance.now() - start;
    setRegularTime(time);
    return value;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cравнение useMemo</Text>
        
        <View style={styles.dataContainer}>
          <Text>Текущие данные: {inputValue}</Text>
          <Button
            title="Изменить данные"
            onPress={
              () => setInputValue(v => v + 1)
            }
            color="#6200ee"
          />
        </View>

        <View style={styles.stats}>
          <Text style={styles.statItem}>
            useMemo: {memoTime.toFixed(2)} ms
          </Text>
          <Text style={styles.statItem}>
            Обычный: {regularTime.toFixed(2)} ms
          </Text>
          <Text style={styles.hint}>Вызовов: {computeCount}</Text>
        </View>

        <View style={styles.buttonGroup}>
          <View style={styles.buttonWrapper}>
            <Button
              title="Вызвать useMemo"
              onPress={() => {
                setComputeCount(c => c + 1);
                const _ = memoizedValue;
              }}
              color="#4CAF50"
            />
          </View>
          
          <View style={styles.buttonWrapper}>
            <Button
              title="Обычный расчёт"
              onPress={() => {
                setComputeCount(c => c + 1);
                calculateRegular();
              }}
              color="#F44336"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#2c3e50',
  },
  dataContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
    alignItems: 'center',
    gap: 12,
  },
  stats: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    elevation: 2,
  },
  statItem: {
    fontSize: 16,
    marginVertical: 8,
    color: '#34495e',
  },
  hint: {
    fontSize: 12,
    color: '#7f8c8d',
    marginTop: 8,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 24,
  },
  buttonWrapper: {
    flex: 1,
  },
  instructions: {
    fontSize: 14,
    color: '#95a5a6',
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default App;