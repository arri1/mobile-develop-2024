import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function UserFetcher() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Получить данные пользователя" onPress={fetchUser} />
      {loading && <Text>Загрузка...</Text>}
      {user && (
        <View style={styles.userInfo}>
          <Text style={styles.text}>Имя: {user.name.first} {user.name.last}</Text>
          <Text style={styles.text}>Email: {user.email}</Text>
          <Text style={styles.text}>Город: {user.location.city}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffe4e1'  
  },
  userInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});