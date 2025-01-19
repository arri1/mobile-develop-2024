import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button, View, StyleSheet } from 'react-native';
import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
// import Lab3 from './screens/lab3';
// import Lab4 from './screens/lab4';

const Stack = createStackNavigator();

function MainMenu({ navigation }) {
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
      {/* <Button
        title="Перейти к Лабораторной 3"
        onPress={() => navigation.navigate('Lab3')}
      />
      <Button
        title="Перейти к Лабораторной 4"
        onPress={() => navigation.navigate('Lab4')}
      /> */}
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainMenu">
        <Stack.Screen name="MainMenu" component={MainMenu} />
        <Stack.Screen name="Lab1" component={Lab1} />
        <Stack.Screen name="Lab2" component={Lab2} />
        {/* <Stack.Screen name="Lab3" component={Lab3} />
        <Stack.Screen name="Lab4" component={Lab4} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
