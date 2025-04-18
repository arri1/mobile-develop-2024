import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const Lab2 = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFact = async () => {
    try {
      const response = await axios.get(
        "https://uselessfacts.jsph.pl/random.json?language=en"
      );
      return response.data.text;
    } catch (err) {
      throw new Error("Ошибка при получении факта");
    }
  };

  const fetchFacts = async (count = 5) => {
    setLoading(true);
    setError(null);
    try {
      const promises = Array.from({ length: count }, () => fetchFact());
      const results = await Promise.all(promises);
      const formattedFacts = results.map((text, index) => ({
        id: index + 1 + facts.length,
        text,
      }));
      setFacts((prevFacts) => [...prevFacts, ...formattedFacts]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  useEffect(() => {
    if (facts.length > 0) {
      console.log(`Загружено фактов: ${facts.length}`);
    }
  }, [facts]);

  if (loading && facts.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error: {error}</Text>
        <TouchableOpacity style={styles.customButton} onPress={() => fetchFacts()}>
          <Text style={styles.buttonText}>Попробовать снова</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Лабораторная 2 — Случайные факты</Text>
      </View>

      <TouchableOpacity style={styles.customButton} onPress={() => fetchFacts(3)}>
        <Text style={styles.buttonText}>Загрузить ещё факты</Text>
      </TouchableOpacity>

      <FlatList
        data={facts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    backgroundColor: "#007AFF",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  customButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: "center",
    margin: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Lab2;
