import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider, useSelector } from 'react-redux';
import store from './store/store';
import Lab1 from './screens/lab1';
import Lab2 from './screens/lab2';
import Lab3 from './screens/lab3';
import Lab4 from './screens/lab4';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const AppContent = () => {
  const theme = useSelector(state => state.global.theme); // Получаем текущую тему

  const appStyles = theme === 'light' ? styles.light : styles.dark;

  return (
    <View style={[styles.container, appStyles]}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: theme === 'light' ? '#ffffff' : '#333333',  // Задаем цвет фона панели
            borderTopWidth: 0,  // Убираем границу сверху
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = 'book'; // Просто используем одну иконку для всех
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: theme === 'light' ? '#000000' : '#ffffff',  // Цвет активной иконки
          tabBarInactiveTintColor: theme === 'light' ? '#888888' : '#bbbbbb',  // Цвет неактивной иконки
        })}
      >
        <Tab.Screen name="Lab1" component={Lab1} />
        <Tab.Screen name="Lab2" component={Lab2} />
        <Tab.Screen name="Lab3" component={Lab3} />
        <Tab.Screen name="Lab4" component={Lab4} />
      </Tab.Navigator>
    </View>
  );
};

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppContent />
    </NavigationContainer>
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    backgroundColor: '#ffffff', // Фон для светлой темы
    color: '#000000',
  },
  dark: {
    backgroundColor: '#333333', // Фон для темной темы
    color: '#ffffff',
  },
});