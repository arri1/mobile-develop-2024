import React, { useEffect, useState } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Provider, useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'
import TasksScreen from './src/screen/Tasks/Tasks'
import StatisticsScreen from './src/screen/Statistics/Statistics'
import SettingsScreen from './src/screen/Settings/Settings'
import { store } from './src/store/store'
import { loadTheme } from './src/store/slices/themeSlice'
import { ActivityIndicator, View } from 'react-native'
import ApiScreen from './src/screen/Api/Api'

const Tab = createBottomTabNavigator()

function MainApp() {
  const dispatch = useDispatch()
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadAppTheme = async () => {
      await dispatch(loadTheme())
      setIsLoading(false)
    }
    loadAppTheme()
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
      <Tab.Navigator
        id={'main'}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ _, color, size }) => {
            let iconName
            switch (route.name) {
              case 'Tasks': {
                iconName = 'checkmark-done-outline'
                break
              }
              case 'Statistics': {
                iconName = 'analytics-outline'
                break
              }
              case 'Settings': {
                iconName = 'cog-outline'
                break
              }
              case 'Api': {
                iconName = 'diamond'
                break
              }
              default: break
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
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  )
}
