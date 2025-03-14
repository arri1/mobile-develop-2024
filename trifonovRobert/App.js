import React, { useEffect, useState } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { ActivityIndicator, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { store } from './src/store/store'
import { loadTheme } from './src/store/slices/themeSlice'
import { observeAuthState, logoutUser } from './src/auth/authSlice'

import TasksScreen from './src/screen/Tasks/Tasks'
import StatisticsScreen from './src/screen/Statistics/Statistics'
import SettingsScreen from './src/screen/Settings/Settings'
import ApiScreen from './src/screen/Api/Api'
import LoginScreen from './src/auth/LoginScreen'
import RegisterScreen from './src/auth/RegisterScreen'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}

function MainApp() {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const user = useSelector((state) => state.auth.user)
  console.log(user)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeApp = async () => {
      await dispatch(loadTheme())
      await dispatch(observeAuthState())
      setIsLoading(false)
    }
    initializeApp()
  }, [dispatch])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    )
  }

  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      {user ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

function MainNavigator() {
  return (
    <Tab.Navigator
      id={'main'}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ _, color, size }) => {
          let iconName
          switch (route.name) {
            case 'Tasks':
              iconName = 'checkmark-done-outline'
              break
            case 'Statistics':
              iconName = 'analytics-outline'
              break
            case 'Settings':
              iconName = 'cog-outline'
              break
            case 'Api':
              iconName = 'diamond'
              break
            default:
              break
          }
          return <Icon name={iconName} size={size} color={color} />
        },
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen name="Tasks" component={TasksScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Api" component={ApiScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}
