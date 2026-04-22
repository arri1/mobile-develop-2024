import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Counter from './components/useState/useState';
import Weather from './components/useEffect/useEffect';
import PrimeCount from './components/useMemo/useMemo';

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
          <Tab.Screen
            name="useMemo"
            component={PrimeCount}
            options={{ title: 'useMemo' }}
          />
        </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

