import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Button,
  StyleSheet,
} from "react-native";

const Lab3 = () => {
  const [filterText, setFilterText] = useState("");
  const [newName, setNewName] = useState("");
  const [names, setNames] = useState([
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
    "Ivy",
    "Jack",
  ]);

  const filteredNames = useMemo(() => {
    return names.filter((name) =>
      name.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [filterText, names]);

  const addName = () => {
    if (newName.trim()) {
      setNames([...names, newName.trim()]);
      setNewName("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Верхняя полоса с текстом */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Лабораторная 3</Text>
      </View>

      {/* Основное содержимое */}
      <Text style={styles.title}>Фильтр имен</Text>
      <TextInput
        style={styles.input}
        placeholder="Введите имя для фильтрации"
        onChangeText={setFilterText}
        value={filterText}
      />
      <TextInput
        style={styles.input}
        placeholder="Введите новое имя"
        value={newName}
        onChangeText={setNewName}
      />
      <Button title="Добавить имя" onPress={addName} />
      <FlatList
        data={filteredNames}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.item}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#007AFF",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10, // Чтобы заголовок не был слишком близко к верхней полосе
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "#ffffff",
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 2,
  },
  item: {
    fontSize: 18,
  },
});

export default Lab3;
