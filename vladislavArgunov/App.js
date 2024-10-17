import React, { useState, useEffect } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default function App() {
  const [fact, setFact] = useState('нажми get it');
  const [load, setLoad] = useState(false);

  const getCatFact = async () => {
    setLoad(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    }
    catch(error){
      setFact('ошибка: ', error);
    }
    finally {
      setLoad(false);
    }

  };

  useEffect(() => {
    getCatFact();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.defaultStyle}>{load ? 'Думаю...' : fact}</Text>
      <Text style={styles.defaultStyle}>Нажимай</Text>
      <View style={styles.defaultStyle}>
        <Button title="get it" onPress={getCatFact} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  defaultStyle: {
    fontSize: 20,
    marginTop: 20,
    marginHorizontal: 10,
  },
});
