import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const CounterNumber = () => {
  const [counter, setCounter] = useState(0);
  const [fontLoaded] = useFonts({
    "Monts": require("../assets/fonts/Montserrat-Medium.ttf"),
  });
useEffect(()=>{
  async function prepare(){
    await SplashScreen.preventAutoHideAsync();
  }
  prepare();
},[]);
  if (!fontLoaded) {
    return undefined;
  }else{
    SplashScreen.hideAsync();
  }
  return (
    <View style={styles.main}>
      <Text style={styles.number}>{counter}</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.commonButton}
          onPress={() => {
            setCounter(counter + 10);
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
            setCounter(counter - 10);
          }}
        >
          <Text style={styles.commonText}>-10</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#606C38",
    alignItems: "center",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 18,
  },
  number: {
    fontFamily: "Monts",
    marginTop: 111,
    fontSize: 50,
    fontweight: 500,
    fontsize: 45,
    lineHeight: 53,
    color: "#FEFAE0",
  },
  commonButton: {
    marginTop: 97,
    justifyContent: "center",
    borderRadius: 4,
    width: 80,
    height: 43,
    backgroundColor: "#283618",
  },
  text: {
    fontFamily: "Monts",
    marginTop: 28,
    fontStyle: "normal",
    fontSize: 25,
    color: "#FEFAE0",
  },
  commonText: {
    fontFamily: "Monts",
    fontStyle: "normal",
    fontSize: 14,
    textAlign: "center",
    color: "#FEFAE0",
  },
});

export default CounterNumber;
