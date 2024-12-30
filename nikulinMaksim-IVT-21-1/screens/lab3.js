import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import React, { useState, useMemo, useEffect } from "react";

const Lab3 = () => {
  const [size, setSize] = useState(100);

  const squareColors = ["red", "green", "blue"];
  const [colorIndex, setColorIndex] = useState(0);

  const [color, setColor] = useState("#000");

  const colors = ["#808000", "#20B2AA", "##FF7F50", "#F0E68C", "LightBlue"];

  // Используем useMemo для сохранения стилей квадрата
  const squareStyle = useMemo(() => {
    for (let i = 0, sum = 0; i < 10000000; i++) {}
    return {
      width: size,
      height: size,
      borderRadius: size/7,
      backgroundColor: squareColors[colorIndex],
    };
  }, [size, colorIndex]);

  // Меняем цвет фона постоянно
  let index = 0;
  useEffect(() => {

    const interval = setInterval(() => {
      setColor(colors[index]);
      index = (index + 1) % colors.length;
      setSize(100);
    }, 80000000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={{ height: 50, marginTop: 50, marginBottom: 60 }}>
        <Text style={[styles.countText]}>
          The color is:{" "}
          <Text
            style={[
              styles.countNumber,
              {
                color: squareColors[colorIndex],
                textTransform: "capitalize",
              },
            ]}
          >
            {squareColors[colorIndex]}
          </Text>
        </Text>

        <Text style={styles.countText}>
          The size is:{" "}
          <Text
            style={[
              styles.countNumber,
              {
                color: squareColors[colorIndex],
              },
            ]}
          >
            {size}
          </Text>
        </Text>
      </View>

      <View style={styles.boxContainer}>
        <View
          style={[
            squareStyle
          ]}
        />
      </View>

      <View style={{ marginTop: 40 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setColorIndex((colorIndex + 1) % 3)}
        >
          <Text style={styles.buttonText}>Press to change Color</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { marginTop: 20 }]}
          onPress={() => setSize((size + 13) % 100)}
        >
          <Text style={styles.buttonText}>Press to change Size</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  boxContainer: {
    height: 110,
    justifyContent: "center",
    alignItems: "center",
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
  countText: {
    fontSize: 15,
  },
});

export default Lab3;
