import React, { useMemo } from "react";
import { View, StyleSheet, Text } from "react-native";

const Task3 = () => {
  const mem = useMemo(() => "Hello, World!");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{mem}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB", // Нежно-голубой фон
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF", // Белый фон для блока текста
    borderRadius: 10, // Скругленные углы
    shadowColor: "#000", // Тень для блока
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Для Android
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333", // Тёмно-серый цвет текста
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#555", // Серый текст
    textAlign: "center",
    marginBottom: 20,
  },
});

export default Task3;
