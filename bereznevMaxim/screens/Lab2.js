import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";

const SUPABASE_URL = "https://rcnkladuiqbeznlmxdyy.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJjbmtsYWR1aXFiZXpubG14ZHl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0OTQ5MjIsImV4cCI6MjA2MTA3MDkyMn0.uLUheY-NnknfQYr9ASK4Y7Ji58b2sUkrtMjT0h2LacE";

const Lab2 = () => {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [customFact, setCustomFact] = useState("");

  const fetchFacts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${SUPABASE_URL}/rest/v1/facts?select=*`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      });
      setFacts(response.data.reverse());
    } catch (err) {
      setError("Ошибка при загрузке фактов");
    } finally {
      setLoading(false);
    }
  };

  const addCustomFact = async () => {
    if (customFact.trim()) {
      try {
        await axios.post(
          `${SUPABASE_URL}/rest/v1/facts`,
          { text: customFact },
          {
            headers: {
              apikey: SUPABASE_KEY,
              Authorization: `Bearer ${SUPABASE_KEY}`,
              "Content-Type": "application/json",
            },
          }
        );
        setCustomFact("");
        setTimeout(fetchFacts, 1000);
      } catch (err) {
        setError("Ошибка при добавлении факта");
      }
    }
  };

  const confirmDelete = (id) => {
    Alert.alert(
      "Удаление",
      "Вы действительно хотите удалить этот факт?",
      [
        { text: "Отмена", style: "cancel" },
        {
          text: "Удалить",
          style: "destructive",
          onPress: () => deleteFact(id),
        },
      ],
      { cancelable: true }
    );
  };

  const deleteFact = async (id) => {
    try {
      await axios.delete(`${SUPABASE_URL}/rest/v1/facts?id=eq.${id}`, {
        headers: {
          apikey: SUPABASE_KEY,
          Authorization: `Bearer ${SUPABASE_KEY}`,
        },
      });
      fetchFacts();
    } catch (err) {
      setError("Ошибка при удалении факта");
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

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
        <Text style={styles.errorText}>Ошибка: {error}</Text>
        <TouchableOpacity style={styles.customButton} onPress={fetchFacts}>
          <Text style={styles.buttonText}>Повторить</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Лабораторная 2 — Supabase факты</Text>
      </View>

      <TouchableOpacity style={styles.customButton} onPress={fetchFacts}>
        <Text style={styles.buttonText}>Обновить список</Text>
      </TouchableOpacity>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введите свой факт"
          value={customFact}
          onChangeText={setCustomFact}
        />
        <TouchableOpacity style={styles.customButton} onPress={addCustomFact}>
          <Text style={styles.buttonText}>Добавить факт</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={facts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text style={{ flex: 1 }}>{item.text}</Text>
            <TouchableOpacity onPress={() => confirmDelete(item.id)}>
              <Text style={styles.deleteText}>Удалить</Text>
            </TouchableOpacity>
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
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  customButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  inputContainer: {
    padding: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  deleteText: {
    color: "red",
    fontSize: 14,
    marginLeft: 10,
  },
});

export default Lab2;
