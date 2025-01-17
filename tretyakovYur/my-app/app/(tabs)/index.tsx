import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const IndexPage = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handlePress = () => {
    setGreeting(`Привет, ${name}!`);
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
      {greeting ? <Text style={styles.greeting}>{greeting}</Text> : null}
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

export default IndexPage;
