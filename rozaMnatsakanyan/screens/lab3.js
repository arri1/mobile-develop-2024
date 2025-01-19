import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, Button, ScrollView, Animated, Easing } from 'react-native';

const UseMemoDemo = () => {
  const [inputNumber, setInputNumber] = useState('0');
  const [result, setResult] = useState({ withMemo: 0, withoutMemo: 0 });
  const [memoSpinning, setMemoSpinning] = useState(false);
  const [normalSpinning, setNormalSpinning] = useState(false);
  const [executionTime, setExecutionTime] = useState({ withMemo: 0, withoutMemo: 0 });
  const spinValue = new Animated.Value(0);
  const [lastCalculatedNumber, setLastCalculatedNumber] = useState(null);
  const [memoizedResult, setMemoizedResult] = useState(null);

  // Анимация вращения
  const startSpinAnimation = (isMemorized) => {
    const targetState = isMemorized ? setMemoSpinning : setNormalSpinning;
    targetState(true);
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const stopSpinAnimation = (isMemorized) => {
    const targetState = isMemorized ? setMemoSpinning : setNormalSpinning;
    targetState(false);
    spinValue.setValue(0);
  };

  // Сделаем вычисления действительно тяжелыми
  const expensiveCalculation = async (num) => {
    const startTime = performance.now();
    let result = 0;
    const n = parseInt(num);
    
    // Очень тяжелые вычисления
    for (let i = 0; i < 10000000; i++) {
      result += Math.pow(n, 2) / (i + 1);
      result = Math.sqrt(result);
      // Добавим тригонометрические вычисления
      result += Math.sin(result) + Math.cos(result);
      result = Math.sqrt(Math.abs(result));
      
      // Добавим проверку для предотвращения слишком больших чисел
      if (result > Number.MAX_SAFE_INTEGER) {
        result = Math.sqrt(result);
      }
    }
    
    const endTime = performance.now();
    return { result, executionTime: endTime - startTime };
  };

  const handleCalculatePress = async () => {
    // Вычисления без useMemo
    setNormalSpinning(true);
    const { result: normalResult, executionTime: normalTime } = await expensiveCalculation(inputNumber);
    setResult(prev => ({ ...prev, withoutMemo: normalResult }));
    setExecutionTime(prev => ({ ...prev, withoutMemo: normalTime }));
    setNormalSpinning(false);

    // Проверяем, нужно ли пересчитывать мемоизированный результат
    setMemoSpinning(true);
    let memoResult, memoTime;
    
    if (lastCalculatedNumber === inputNumber && memoizedResult !== null) {
      // Используем кэшированный результат
      const startTime = performance.now();
      memoResult = memoizedResult;
      const endTime = performance.now();
      memoTime = endTime - startTime;
    } else {
      // Вычисляем новый результат
      const { result, executionTime } = await expensiveCalculation(inputNumber);
      memoResult = result;
      memoTime = executionTime;
      setMemoizedResult(memoResult);
      setLastCalculatedNumber(inputNumber);
    }
    
    setResult(prev => ({ ...prev, withMemo: memoResult }));
    setExecutionTime(prev => ({ ...prev, withMemo: memoTime }));
    setMemoSpinning(false);
  };

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Как работает useMemo?</Text>
      
      <View style={styles.demoContainer}>
        <Text style={styles.subtitle}>Введите число для вычислений:</Text>
        <TextInput
          style={styles.input}
          value={inputNumber}
          onChangeText={setInputNumber}
          keyboardType="numeric"
          placeholder="Например: 42"
        />

        <View style={styles.calculationsContainer}>
          <View style={styles.calculationBox}>
            <Text style={styles.boxTitle}>С useMemo</Text>
            <View style={styles.visualDemo}>
              {memoSpinning ? (
                <>
                  <Animated.Text style={[styles.gearIcon, { transform: [{ rotate: spin }] }]}>
                    ⚙️
                  </Animated.Text>
                  <Text style={styles.calculatingText}>
                    {lastCalculatedNumber === inputNumber 
                      ? "Беру из памяти..." 
                      : "Вычисляю..."}
                  </Text>
                </>
              ) : (
                <>
                  <Text style={styles.resultText}>
                    {result.withMemo ? '✅ Готово!' : '💾 Ожидание'}
                  </Text>
                  {result.withMemo && (
                    <>
                      <Text style={styles.timeText}>
                        {lastCalculatedNumber === inputNumber 
                          ? "Взято из памяти!" 
                          : "Посчитано заново"}
                      </Text>
                      <Text style={styles.executionTime}>
                        Время: {executionTime.withMemo.toFixed(2)} мс
                      </Text>
                    </>
                  )}
                </>
              )}
            </View>
          </View>

          <View style={styles.calculationBox}>
            <Text style={styles.boxTitle}>Без useMemo</Text>
            <View style={styles.visualDemo}>
              {normalSpinning ? (
                <>
                  <Animated.Text style={[styles.gearIcon, { transform: [{ rotate: spin }] }]}>
                    ⚙️
                  </Animated.Text>
                  <Text style={styles.calculatingText}>Считаю заново...</Text>
                </>
              ) : (
                <>
                  <Text style={styles.resultText}>
                    {result.withoutMemo ? '✅ Готово!' : '🔄 Ожидание'}
                  </Text>
                  {result.withoutMemo && (
                    <>
                      <Text style={styles.timeText}>Пришлось считать заново!</Text>
                      <Text style={styles.executionTime}>
                        Время: {executionTime.withoutMemo.toFixed(2)} мс
                      </Text>
                    </>
                  )}
                </>
              )}
            </View>
          </View>
        </View>

        <Button
          title="Запустить вычисления"
          onPress={handleCalculatePress}
          style={styles.button}
        />

        <View style={styles.explanationCard}>
          <Text style={styles.explanationTitle}>Как это работает?</Text>
          <Text style={styles.explanationText}>
            👆 Попробуйте:
          </Text>
          <Text style={styles.step}>1. Введите число</Text>
          <Text style={styles.step}>2. Нажмите кнопку "Запустить вычисления"</Text>
          <Text style={styles.step}>3. Нажмите кнопку ещё раз с тем же числом</Text>
          <Text style={styles.bulletPoint}>• С useMemo: мгновенно возьмёт результат из памяти</Text>
          <Text style={styles.bulletPoint}>• Без useMemo: будет считать заново</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#2c3e50',
  },
  demoContainer: {
    padding: 16,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    color: '#34495e',
  },
  input: {
    borderWidth: 2,
    borderColor: '#3498db',
    borderRadius: 10,
    padding: 15,
    fontSize: 18,
    marginBottom: 20,
  },
  calculationsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  calculationBox: {
    flex: 1,
    margin: 5,
    padding: 15,
    borderRadius: 15,
    backgroundColor: '#f8f9fa',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#2c3e50',
  },
  visualDemo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120,
  },
  gearIcon: {
    fontSize: 40,
  },
  resultText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#2c3e50',
  },
  button: {
    marginVertical: 20,
  },
  explanationCard: {
    backgroundColor: '#e8f4f8',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
  },
  explanationTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2c3e50',
  },
  explanationText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#34495e',
  },
  step: {
    fontSize: 16,
    marginLeft: 10,
    marginVertical: 5,
    color: '#34495e',
  },
  bulletPoint: {
    fontSize: 14,
    marginLeft: 20,
    marginVertical: 3,
    color: '#7f8c8d',
  },
  calculatingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#e74c3c',
  },
  timeText: {
    marginTop: 5,
    fontSize: 12,
    color: '#7f8c8d',
  },
  executionTime: {
    marginTop: 5,
    fontSize: 12,
    color: '#e74c3c',
    fontWeight: 'bold',
  },
});

export default UseMemoDemo;