import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import UseStateScreen from './screens/UseStateScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UseState">
        <Stack.Screen
          name="UseState"
          component={UseStateScreen}
          options={{
            title: 'useState Example',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
