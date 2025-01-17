import React, { useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/reducer";

const FourthScreen = () => {
  const dispatch = useDispatch();
  const counter = useSelector((counter) => counter.counter.counter);

  return (
    <View>
      <Text style={styles.number}>{counter}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => dispatch(increment())}
        >
          <Text style={styles.commonText}>+10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => dispatch(decrement())}
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

export default FourthScreen;
