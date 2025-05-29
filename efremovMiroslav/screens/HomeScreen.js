import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const labs = [
    { id: 1, title: 'Лабораторная 1', description: 'Изменение формы и цвета фигуры' },
    { id: 2, title: 'Лабораторная 2', description: 'Генератор случайных цитат' },
    { id: 3, title: 'Лабораторная 3', description: 'Приложение для загрузки данных с API' },
    { id: 4, title: 'Лабораторная 4', description: 'Приложение для USEMEMO' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Лабораторные работы</Text>
      
      <ScrollView contentContainerStyle={styles.listContainer}>
        {labs.map((lab) => (
          <TouchableOpacity 
            key={lab.id}
            style={styles.card}
            onPress={() => navigation.navigate(`Lab${lab.id}`)}
          >
            <Text style={styles.cardTitle}>{lab.title}</Text>
            <Text style={styles.cardDescription}>{lab.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
    color: '#6200ee',
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default HomeScreen;