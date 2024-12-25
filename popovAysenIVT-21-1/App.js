import React, { useState, useEffect, createContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Switch, StyleSheet, Appearance } from 'react-native';

// Экран
import lab1 from './screen/lab1';
import lab2 from './screen/lab2';
import lab3 from './screen/lab3';

// Контекст для темы
export const ThemeContext = createContext();

const Tab = createBottomTabNavigator();

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(Appearance.getColorScheme() === 'dark'); // Системная тема по умолчанию

  // Переключение темы
  const toggleSwitch = () => setIsDarkMode((prevState) => !prevState);

  // Эффект для отслеживания изменений системной темы
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
            headerRight: () => (
              <View style={styles.switchContainer}>
                <Switch value={isDarkMode} onValueChange={toggleSwitch} />
              </View>
            ),
          }}
        >
          <Tab.Screen name="Lab1" component={lab1} />
          <Tab.Screen name="Lab2" component={lab2} />
          <Tab.Screen name="Lab3" component={lab3} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    marginRight: 10, // Добавим отступ от правой границы
  },
});
