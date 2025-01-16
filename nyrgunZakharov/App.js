import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/use-state";
import Lab2 from "./screens/use-effect";
import Lab3 from "./screens/use-memo";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeProvider, ThemeContext } from './ThemeContext'; // Импортируем контекст

const Tab = createBottomTabNavigator();

const AppContent = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext); // Используем контекст

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#1a1a1a' : '#f9f9f9',
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: isDarkTheme ? '#1a1a1a' : '#f9f9f9',
            elevation: 0,
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        }}
      >
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
      </Tab.Navigator>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleTheme}>
          <Text style={styles.buttonText}>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</Text>
        </TouchableOpacity>
      </View>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: '50%',
    transform: [{ translateX: -50 }],
    borderRadius: 5,
    overflow: 'hidden',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});