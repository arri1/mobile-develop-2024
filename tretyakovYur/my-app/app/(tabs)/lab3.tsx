import { router } from 'expo-router';
import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Lab3Page = () => {
  const [name, setName] = useState('');
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);

  // Используем useEffect для отслеживания изменений имени
  useEffect(() => {
    console.log(`Имя изменено на: ${name}`);
  }, [name]);

  // Используем useEffect для действия при загрузке компонента
  useEffect(() => {
    console.log('Компонент MyPage загружен');
    return () => {
      console.log('Компонент MyPage будет размонтирован');
    };
  }, []);

  // Мемоизируем приветствие, чтобы пересчитывать только при изменении `name`
  const greeting = useMemo(() => {
    console.log('Приветствие обновлено');
    return name ? `Привет, ${name}!` : '';
  }, [name]);

  const handlePress = () => {
    setIsGreetingVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введите ваше имя:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ваше имя"
        value={name}
        onChangeText={setName}
      />
      <Button title="Поздороваться" onPress={handlePress} />
      {isGreetingVisible && greeting ? (
        <Text style={styles.greeting}>{greeting}</Text>
      ) : null}

      {/* Кнопки для перехода на другие страницы */}
      <Button title="Вернуться на главную" onPress={() => router.push('/')} />
      <Button title="Перейти ко 2-й лабе" onPress={() => router.push('/lab2')} />
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
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 8,
    marginBottom: 16,
    width: '100%',
    borderRadius: 4,
  },
  greeting: {
    marginTop: 16,
    fontSize: 20,
    color: '#333',
  },
});

export default Lab3Page;
