import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

const SecondScreen = () => {
  const [counter, setCounter] = useState(0);
  const [check, setChek] = useState(0);
  const [word, setWord] = useState("");
  const number = 50;
  useEffect(() => {
    if (counter > number) {
      setWord("Число меньше");
    } else if (counter < number) {
      setWord("Число больше");
    } else setWord("Вы угадали");
  }, [check]);

  return (
    <View>
      <Text style={styles.number}>{counter}</Text>
      <Text style={styles.text}>{word}</Text>

      <View style={styles.buttonGroup}>
      <TouchableOpacity 
        style={styles.commonButton}
        onPress={() => {
          setChek(check + 1);
        }}
      >
        <Text style={styles.commonText}>Проверить</Text>
      </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (counter != 100) {
              setCounter(counter + 10);
            }
          }}
        >
          <Text style={styles.commonText}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(0);
          }}
        >
          <Text style={styles.commonText}>Очистить</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            if (counter != 0) {
              setCounter(counter - 10);
            }
          }}
        >
          <Text style={styles.commonText}>-10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },

  number: {
    fontSize: 50,
    textAlign: "center",
    width: "100%",
    padding:10,
    marginBottom: 5,
  },

  text: {
    fontSize: 25,
    textAlign: "center",
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },

  commonButton: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 2,
    borderRadius: 4,
    backgroundColor: "black",
    width: 150,
    height: 50,
  },
  commonText: {
    fontSize: 15,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default SecondScreen;
