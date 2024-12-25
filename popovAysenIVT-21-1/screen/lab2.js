import React, { useState, useEffect, useContext } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ThemeContext } from '../App';

export default function Lab2() {
  const isDarkMode = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError('Ошибка загрузки данных');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={[styles.center, { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }]}>
        <ActivityIndicator size="large" color={isDarkMode ? '#fff' : '#333'} />
        <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#333' }]}>
          Загрузка данных...
        </Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={[styles.error, { color: isDarkMode ? 'red' : 'darkred' }]}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f0f0f0' }]}>
      <FlatList
        data={data.slice(0, 10)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[styles.block, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
            <Text style={[styles.itemTitle, { color: isDarkMode ? '#ffcc00' : '#6200ee' }]}>
              {item.title}
            </Text>
            <Text style={[styles.itemBody, { color: isDarkMode ? '#fff' : '#333' }]}>
              {item.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  block: {
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemBody: {
    marginTop: 5,
    fontSize: 14,
  },
  text: {
    fontSize: 18,
  },
});
