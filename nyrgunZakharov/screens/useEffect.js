import React, { useState, useEffect, useContext  } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import { ThemeContext } from '../ThemeContext';

const Lab2 = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Используем useEffect для получения данных при монтировании компонента
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text style={[styles.item,{color: isDarkTheme ? "#121212":"#f0f0f0"}]}>{error}</Text>;
  }

  return (
    <View style={[styles.item,{backgroundColor: isDarkTheme ? "#121212":"#f0f0f0"}]}>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (

          <View style={[styles.item,{backgroundColor: isDarkTheme ? "#121212":"#f0f0f0"}]}>
            <Text style={[styles.item,{color: isDarkTheme ? "#f0f0f0":"#121212"}]}>{item.name}</Text>
            <Text style={[{color: isDarkTheme ? "#f0f0f0":"#121212"}]}>{item.email}</Text>

          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },

  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5fcff',
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Lab2;

