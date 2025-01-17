import React, { useState, useMemo, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ThirdScreen = () => {
  const [number, setnumber] = useState(0);
  const [number2, setnumber2] = useState(0);
  useMemo(() => expensiveSum(number2), [number2]);

  return (
    <View>
      <View style={styles.numberGroup}>
        <Text style={styles.number}>{number}</Text>
        <Text style={styles.number}>{number2}</Text>
      </View>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setnumber(number + 10);
          }}
        >
          <Text style={styles.commonText}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setnumber2(number2 + 10);
          }}
        >
          <Text style={styles.commonText}>+10</Text>
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
    padding: 10,
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
const expensiveSum = (n) => {
  for (i = 0; i < 10000000; i++) {
    n++;
  }
  return;
};
export default ThirdScreen;
