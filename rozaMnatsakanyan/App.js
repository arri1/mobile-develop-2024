import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
import Lab3 from './screens/lab3';
import Lab4 from './screens/lab4';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lab1"> 
        {/* заранее подготовила навигацию для скринов */}
        <Stack.Screen name="Lab1" component={Lab1} />
        <Stack.Screen name="Lab2" component={Lab2} />
        {/* <Stack.Screen name="Lab3" component={Lab3} />
        <Stack.Screen name="Lab4" component={Lab4} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
