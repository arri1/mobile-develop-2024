import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "./screens/lab1.js";
import Lab2 from "./screens/lab2.js";
import Lab3 from "./screens/lab3.js";
import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { useTheme } from "./hooks/themeManager.js";

const Tab = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={[styles.tabButton, {justifyContent: 'center', alignItems: 'center', marginVertical: 'auto', marginHorizontal: 6}]} onPress={onPress}>
      <Text style={styles.tabButtonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const Navigation = () => {
  const { backgroundColor, textColor, toggleThemeMode } = useTheme();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: backgroundColor,
            elevation: 0,
          },
          headerTintColor: "#2260FF",
          headerTitleAlign: "center",

          tabBarStyle: {
            borderRadius: 50,
            borderTopWidth: 0,
            width: 146,
            position: "absolute",
            marginLeft: 107,
            alignItems: 'center',
            flex: 1,
            backgroundColor: "#2260FF",
            elevation: 0,
            marginBottom: 10,
          },
          tabBarActiveTintColor: 'gray',
          tabBarInactiveTintColor: 'white'
        }}
      >
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarButton: (props) => (
              <CustomTabButton {...props}>1</CustomTabButton>
            ),
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarButton: (props) => (
              <CustomTabButton {...props}>2</CustomTabButton>
            ),
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={Lab3}
          options={{
            tabBarButton: (props) => (
              <CustomTabButton {...props}>3</CustomTabButton>
            ),
          }}
        />
      </Tab.Navigator>
      <TouchableOpacity style={styles.button} onPress={toggleThemeMode}>
        <Text style={styles.buttonText}>Change Mode</Text>
      </TouchableOpacity>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    borderRadius: 33,
    width: 33,
    height: 33,
    backgroundColor: 'white'
  },
  tabButtonText: {
    fontSize: 24,
    marginBottom: 2
  },
  button: {
    alignItems: "center",
    backgroundColor: "#2260FF",
    paddingBottom: 2,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
