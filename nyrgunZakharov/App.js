import React, { useContext } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/useState";
import Lab2 from "./screens/useEffect";
import Lab3 from "./screens/useMemo";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ThemeProvider, ThemeContext } from './ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppContent = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Lab1') {
              iconName = focused ? 'flask' : 'flask-outline';
            } else if (route.name === 'Lab2') {
              iconName = focused ? 'stats-chart' : 'stats-chart-outline';
            } else if (route.name === 'Lab3') {
              iconName = focused ? 'happy' : 'happy-outline';
            } else if (route.name === 'Lab4') {
              iconName = focused ? 'moon' : 'moon-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#1a1a1a' : '#f9f9f9',
            borderTopWidth: 0,
          },
          headerStyle: {
            backgroundColor: isDarkTheme ? '#1a1a1a' : '#f9f9f9',
            elevation: 0,
          },
          headerTintColor: isDarkTheme ? '#fff' : '#000',
        })}
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
    top: 40,
    right: '5',
    borderRadius: 5,
    overflow: 'hidden'
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