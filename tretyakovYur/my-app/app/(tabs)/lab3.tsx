import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';

const Lab3Page = () => {
  const [ethPrice, setEthPrice] = useState<number | null>(null); // Храним текущий курс Ethereum
  const [error, setError] = useState<string | null>(null); // Для обработки ошибок
  const [loading, setLoading] = useState<boolean>(true); // Индикатор загрузки

  const fetchEthPrice = async () => {
    setLoading(true); // Включаем индикатор загрузки при новом запросе
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=rub'); // API для курса
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      const data = await response.json();
      setEthPrice(data.ethereum.rub); // Устанавливаем курс Ethereum к рублю
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Устанавливаем сообщение об ошибке
      } else {
        setError('Неизвестная ошибка');
      }
    } finally {
      setLoading(false); // Скрываем индикатор загрузки
    }
  };

  useEffect(() => {
    fetchEthPrice(); // Загружаем данные при первом рендере
  }, []);

  // Мемоизируем вычисление округленного значения курса Ethereum
  const formattedEthPrice = useMemo(() => {
    console.log('Курс Ethereum обновлен');
    return ethPrice ? ethPrice.toFixed(2) : '—'; // Возвращаем округленный результат
  }, [ethPrice]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Курс Ethereum к рублю</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>Ошибка: {error}</Text>
      ) : (
        <View style={styles.result}>
          <Text style={styles.price}>Текущий курс: {formattedEthPrice} ₽</Text>
        </View>
      )}

      <Button title="Обновить курс" onPress={fetchEthPrice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  result: {
    marginTop: 16,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Lab3Page;
