import React, { useState, useMemo, useCallback } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/store';

export default function Lab3() {
  const [searchTerm, setSearchTerm] = useState("");
  const [key, setKey] = useState(0);
  const [useMemoFilter, setUseMemoFilter] = useState(true);
  const theme = useSelector(state => state.global.theme);

  const leng = 100000000;

  const bigFunc = () => {
    for (let i = 0; i < leng; i++) {}
  };

  const bigFuncMemo = useCallback(() => {
    for (let i = 0; i < leng; i++) {}
    return 0;
  }, []);

  const names = useMemo(() => [
    "Sardaana",
    "Aytal",
    "Nurgun",
    "Bergen",
    "Sandal",
    "Erchim",
    "Keskil",
    "Tuskun",
  ], []);

  const lowerCaseSearchTerm = useMemo(() => searchTerm.toLowerCase(), [searchTerm]);

  const filteredNamesWithMemo = useMemo(() => {
    bigFuncMemo();
    return names.filter((name) =>
      name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [lowerCaseSearchTerm, names, bigFuncMemo]);

  const filteredNamesWithoutMemo = () => {
    bigFunc();
    return names.filter((name) =>
      name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  };

  const filteredNames = useMemo(() => {
    return useMemoFilter ? filteredNamesWithMemo : filteredNamesWithoutMemo();
  }, [useMemoFilter, filteredNamesWithMemo, filteredNamesWithoutMemo]);

  const forceRerender = () => {
    setKey(prevKey => prevKey + 1);
    setSearchTerm("");
  };

  const toggleThemeHandler = () => {
    dispatch(toggleTheme()); // Переключаем тему
  };

  const appStyles = theme === 'light' ? styles.lightTheme : styles.darkTheme;

  return (
    <View style={[styles.container, appStyles]}>
      <Text style={[styles.title, appStyles]}>Фильтрация списка имен</Text>
      <TextInput
        style={[styles.input, appStyles]}
        placeholder="Искать имя..."
        placeholderTextColor={theme === 'light' ? '#000' : '#aaa'}
        value={searchTerm}
        onChangeText={(text) => setSearchTerm(text)}
      />
      <Button 
        title={useMemoFilter ? "Использовать без useMemo" : "Использовать с useMemo"} 
        onPress={() => setUseMemoFilter(!useMemoFilter)} 
      />
      <Button title="Очистить экран" onPress={forceRerender} />
      <FlatList
        data={filteredNames}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={[styles.name, appStyles]}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,  // Возвращаем прежний размер для заголовка
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
    fontSize: 18,  // Возвращаем прежний размер для текста в input
  },
  name: {
    fontSize: 18,  // Возвращаем прежний размер для списка имен
    marginBottom: 10,
  },
  lightTheme: {
    backgroundColor: '#ffffff',
    color: '#000000',
  },
  darkTheme: {
    backgroundColor: '#333333',
    color: '#ffffff',
  },
});