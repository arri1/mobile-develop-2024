import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import MainMenu from './MainMenu';
import UseStateCounter from './UseStateCounter';

export type RootStackParamList = {
  MainMenu: undefined;
  UseStateCounter: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenu} options={{ title: 'Меню' }} />
        <Stack.Screen name="UseStateCounter" component={UseStateCounter} options={{ title: 'useState Счётчик' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;