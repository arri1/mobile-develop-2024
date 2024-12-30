import React, { useState, useEffect } from "react";

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { useTheme } from "../hooks/themeManager.js";
import { SafeAreaView } from "react-native-safe-area-context";

const Lab2 = () => {
  const [fact, setFact] = useState("");

  const getRandomFact = async () => {
    try {
      const response = await fetch(
        //"https://uselessfacts.jsph.pl/random.json?language=en"
      );
      const data = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error(error);
      setFact("Error getting fact");
    }
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  const { backgroundColor, textColor, toggleThemeMode } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.box}>
        <Text style={styles.factText}>{fact}</Text>
        <TouchableOpacity style={styles.button} onPress={getRandomFact}>
          <Text style={styles.buttonText}>Get useless fact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  box: {
    marginTop: "20%",
    padding: 8,
    borderRadius: 15,
    backgroundColor: "#CAD6FF",
  },
  factText: {
    fontSize: 15,
    marginBottom: 18,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2260FF",
    paddingBottom: 2,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

export default Lab2;
