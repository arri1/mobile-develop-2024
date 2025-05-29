import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Импортируем экраны
import HomeScreen from './screens/HomeScreen';
import Lab1Screen from './screens/lab1';
import Lab2Screen from './screens/lab2';
import Lab3Screen from './screens/lab3';
import Lab4Screen from './screens/lab4';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Стек навигации для лабораторных работ
function LabsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="HomeLabs" 
        component={HomeScreen} 
        options={{ title: 'Лабораторные работы' }}
      />
      <Stack.Screen 
        name="Lab1" 
        component={Lab1Screen} 
        options={{ title: 'Лаб. 1 - Фигуры' }} 
      />
      <Stack.Screen 
        name="Lab2" 
        component={Lab2Screen} 
        options={{ title: 'Лаб. 2 - Цитаты' }} 
      />
      <Stack.Screen 
        name="Lab3" 
        component={Lab3Screen} 
        options={{ title: 'Лаб. 3 - Погода' }} 
      />
      <Stack.Screen 
        name="Lab4" 
        component={Lab4Screen} 
        options={{ title: 'Лаб. 4 - UseMemo' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Main') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Labs') {
              iconName = focused ? 'flask' : 'flask-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6200ee',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen name="Main" component={ProfileScreen} options={{ title: 'Главная' }} />
        <Tab.Screen name="Labs" component={LabsStack} options={{ title: 'Лабораторные' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}