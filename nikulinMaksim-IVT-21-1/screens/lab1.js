import { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from "react-native";

import { useTheme } from "../hooks/themeManager.js";

const Lab1 = () => {
  const [count, setCount] = useState(0);
  const onPress1 = () => setCount((prevCount) => prevCount + 1);

  const colors = ["red", "green", "blue"];
  const [colorIndex, setColorIndex] = useState(0);

  const { backgroundColor, textColor, toggleThemeMode } = useTheme();

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: backgroundColor }]}
    >
      <View style={styles.box_1}>
        <View style={styles.countContainer}>
          <Text style={styles.countText}>
            You clicked: <Text style={styles.countNumber}>{count}</Text>
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress1}>
          <Text style={styles.buttonText}>Press</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxContainer}>
        <TouchableOpacity
          onPress={() => {
            setColorIndex((colorIndex + 1) % 3);
          }}
          style={{ alignItems: "center" }}
        >
          <Text style={[styles.countText, {color: backgroundColor == "#ffffff" ? "black" : 'white'}]}>
            The color is:{" "}
            <Text
              style={[
                styles.countNumber,
                {
                  color: colors[colorIndex],
                  textTransform: "capitalize",
                  fontSize: 20,
                },
              ]}
            >
              {colors[colorIndex]}
            </Text>
          </Text>
          <View
            style={[styles.colorBox, { backgroundColor: colors[colorIndex] }]}
          ></View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box_1: {
    //marginTop: "5%",
    paddingTop: 0,
    paddingBottom: 10,
    paddingHorizontal: 30,
    backgroundColor: "#CAD6FF",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
  },

  countText: {
    fontSize: 15,
  },

  countNumber: {
    fontSize: 24,
    color: "#2260FF",
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

  countContainer: {
    alignItems: "center",
    padding: 10,
  },

  colorBox: {
    width: 130,
    height: 130,
    borderRadius: 18,
    marginTop: 6,
  },

  boxContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
});

export default Lab1;
