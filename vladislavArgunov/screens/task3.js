import React, { useMemo, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import QRCode from "react-native-qrcode-svg";

const Task3 = () => {
  const [link, setLink] = useState("");

  const linkChanged = (text) => {
    setLink(text);
  };
  const memoQR = useMemo(() => {
    return (
      <QRCode value={link ? link : "https://www.google.com/"} size={228} />
    );
  }, [link]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.content}>{memoQR}</View>
        <View style={styles.subContent}>
          <TextInput
            style={styles.input}
            onChangeText={linkChanged}
            value={link}
            placeholder="https://www.google.com/"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#87CEEB",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  subContent: {
    alignItems: "center",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  input: {
    alignContent: "center",
    width: 230,
    borderWidth: 1,
    padding: 5,
    textAlign: "center",
    textAlignVertical: "center",
  },
});

export default Task3;
