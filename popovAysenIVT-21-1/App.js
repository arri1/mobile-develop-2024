import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, TouchableOpacity, StyleSheet, Text, Appearance } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Lab1 from './screen/lab1';
import Lab2 from './screen/lab2';
import Lab3 from './screen/lab3';

export const ThemeContext = createContext();

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark');

  const toggleSwitch = () => setIsDarkMode((prevState) => !prevState);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      setIsDarkMode(colorScheme === 'dark');
    });
    return () => subscription.remove();
  }, []);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: isDarkMode ? '#333' : '#fff',
              shadowColor: 'transparent',
            },
            headerTitleAlign: 'center',
            headerTitle: () => (
              <View style={styles.logoContainer}>
                <Ionicons
                  name="flash-outline"
                  size={28}
                  color={isDarkMode ? '#ffcc00' : '#6200ee'}
                />
                <Text style={[styles.logoText, { color: isDarkMode ? '#fff' : '#000' }]}>
                Lightning
                </Text>
              </View>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={toggleSwitch} style={styles.switchContainer}>
                <Ionicons
                  name={isDarkMode ? 'moon' : 'sunny'}
                  size={24}
                  color={isDarkMode ? '#ffcc00' : '#333'}
                />
              </TouchableOpacity>
            ),
            tabBarStyle: {
              backgroundColor: isDarkMode ? '#333' : '#f5f5f5',
            },
            tabBarActiveTintColor: isDarkMode ? '#ffcc00' : '#6200ee',
          }}
        >
          <Tab.Screen name="Lab1" component={Lab1} />
          <Tab.Screen name="Lab2" component={Lab2} />
          <Tab.Screen name="Lab3" component={Lab3} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 5,
  },
  switchContainer: {
    marginRight: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
  },
});
