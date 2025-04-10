import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Button, View, StyleSheet } from 'react-native';
import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
import Lab3 from './screens/lab3';
import Lab4 from './screens/lab4';

const Stack = createNativeStackNavigator();

const MainMenu = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Перейти к Лабораторной 1"
        onPress={() => navigation.navigate('Lab1')}
      />
      <Button
        title="Перейти к Лабораторной 2"
        onPress={() => navigation.navigate('Lab2')}
      />
      <Button
        title="Перейти к Лабораторной 3"
        onPress={() => navigation.navigate('Lab3')}
      />
      <Button
        title="Перейти к Лабораторной 4 (Redux)"
        onPress={() => navigation.navigate('Lab4')}
      />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainMenu"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="MainMenu" 
            component={MainMenu} 
            options={{ 
              title: 'Главное меню',
              headerLeft: null 
            }}
          />
          <Stack.Screen name="Lab1" component={Lab1} options={{ title: 'Лабораторная 1' }} />
          <Stack.Screen name="Lab2" component={Lab2} options={{ title: 'Лабораторная 2' }} />
          <Stack.Screen name="Lab3" component={Lab3} options={{ title: 'Лабораторная 3' }} />
          <Stack.Screen name="Lab4" component={Lab4} options={{ title: 'Redux Demo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 10,
  },
});

export default App;
