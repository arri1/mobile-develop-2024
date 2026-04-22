import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counter from './components/useState/useState';
import Weather from './components/useEffect/useEffect';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="useState"
            component={Counter}
            options={{ title: 'useState' }}
          />
          <Tab.Screen
            name="useEffect"
            component={Weather}
            options={{ title: 'useEffect' }}
          />
        </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

