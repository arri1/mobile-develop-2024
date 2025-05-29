import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './navigation';

type UseEffectScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UseEffect'>;

type Props = {
  navigation: UseEffectScreenNavigationProp;
};

type User = {
  id: number;
  name: string;
  email: string;
};

const UseEffectScreen: React.FC<Props> = ({ navigation }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Ошибка при загрузке данных');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.status}>Загрузка данных...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.status}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Пользователи:</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.userItem}>{item.name} ({item.email})</Text>
        )}
      />
      <View style={{ marginTop: 20 }}>
        <Button title="Назад к useState" onPress={() => navigation.navigate('UseState')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 20,
  },
  status: {
    fontSize: 18, color: '#666', marginTop: 10,
  },
  title: {
    fontSize: 22, fontWeight: 'bold', marginBottom: 20,
  },
  userItem: {
    fontSize: 18, marginVertical: 6,
  },
});

export default UseEffectScreen;