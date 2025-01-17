import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Lab1 from "./screens/useState";
import Lab2 from "./screens/useEffect";
import Lab3 from "./screens/useMemo";

import { View, Text, Button, StyleSheet } from 'react-native';
import { ThemeProvider, ThemeContext } from './ThemeContext'; // Импортируем контекст

const Tab = createBottomTabNavigator();

const AppContent = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Используем контекст

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerStyle: {
            backgroundColor: isDarkTheme ? '#333' : '#fff',
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      >
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
      </Tab.Navigator>
      <View style={styles.buttonContainer}>
        <Button title="Toggle Theme" onPress={toggleTheme} />
      </View>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Lab1" component={Lab1} />

          <Tab.Screen name="Lab2" component={Lab2} />

        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
});