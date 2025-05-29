import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainMenu from './MainMenu';
import UseStateCounter from './UseStateCounter';
import UseEffectScreen from './UseEffectScreen'; 

export type RootStackParamList = {
  MainMenu: undefined;
  UseStateCounter: undefined;
  UseEffectScreen: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: 'Меню' }} />
        <Stack.Screen name="UseStateCounter" component={UseStateCounter} options={{ title: 'useState Счётчик' }} />
        <Stack.Screen name="UseEffectScreen" component={UseEffectScreen} options={{ title: 'useEffect Пример' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}