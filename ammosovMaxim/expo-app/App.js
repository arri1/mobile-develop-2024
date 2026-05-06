import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Counter from './components/useState/useState';
import Weather from './components/useEffect/useEffect';
import PrimeCount from './components/useMemo/useMemo';
import LoginScreen from './loginRegisterScreens/LoginScreen';
import RegisterScreen from './loginRegisterScreens/RegisterScreen';
import { useAuthStore } from './stores/auth';
import { TouchableOpacity, Text } from 'react-native';
import { colors } from './theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  const { user } = useAuthStore();

  return (
    <NavigationContainer>
      {user ? (
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerRight: () => (
              <TouchableOpacity onPress={() => useAuthStore.getState().logout()} 
                                style={{ paddingHorizontal: 12 }}>
                <Text style={{ color: colors.primary, fontWeight: '600' }}>Logout</Text>
              </TouchableOpacity>
            ),
            tabBarActiveTintColor: colors.primary,
            tabBarInactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen
            name="useState"
            component={Counter}
            options={{
              title: 'useState',
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name={focused ? 'radio-button-on' : 'radio-button-off'} 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
          <Tab.Screen
            name="useEffect"
            component={Weather}
            options={{
              title: 'useEffect',
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name={focused ? 'cloud' : 'cloud-outline'} 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
          <Tab.Screen
            name="useMemo"
            component={PrimeCount}
            options={{
              title: 'useMemo',
              tabBarIcon: ({ focused, color, size }) => (
                <Ionicons 
                  name={focused ? 'calculator' : 'calculator-outline'} 
                  size={size} 
                  color={color} 
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: 'Вход' }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ title: 'Регистрация' }}
          />
        </Stack.Navigator>
      )}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
