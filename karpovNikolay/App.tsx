import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UseStateScreen from './UseStateScreen';
import UseEffectScreen from './UseEffectScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UseState">
        <Stack.Screen
          name="UseState"
          component={UseStateScreen}
          options={{ title: 'useState Example' }}
        />
        <Stack.Screen
          name="UseEffect"
          component={UseEffectScreen}
          options={{ title: 'useEffect Example' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}