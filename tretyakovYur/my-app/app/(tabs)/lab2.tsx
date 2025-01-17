import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';

// Определяем интерфейс для поста
interface Post {
  id: number;
  title: string;
  body: string;
}

const Lab2Page = () => {
  const [data, setData] = useState<Post[]>([]); // Храним массив постов
  const [loading, setLoading] = useState(true); // Показываем индикатор загрузки
  const [error, setError] = useState<string | null>(null); // Для обработки ошибок

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Пример API
      if (!response.ok) {
        throw new Error('Ошибка загрузки данных');
      }
      const result: Post[] = await response.json(); // Указываем, что результат соответствует типу Post[]
      setData(result.slice(0, 10)); // Загружаем только 10 элементов
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message); // Устанавливаем сообщение об ошибке
      } else {
        setError('Неизвестная ошибка'); // Обрабатываем непредвиденные случаи
      }
    } finally {
      setLoading(false); // Скрываем индикатор загрузки
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Список постов</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text style={styles.error}>Ошибка: {error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text>{item.body}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  error: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Lab2Page;
