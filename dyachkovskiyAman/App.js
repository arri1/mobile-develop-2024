import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./components/appNavigator";
import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store";


const App = () => {
  return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
  );
};

export default App;
