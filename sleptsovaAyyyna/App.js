import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";
import Lab3 from "./screens/lab3";
import Lab4 from "./screens/lab4";
import Lab4_1 from "./screens/lab4_1";

import { NavigationContainer } from "@react-navigation/native";
const colors = ["black", "red", "yellow"];

const Tab = createBottomTabNavigator();

export default function App() {
  //const [fontsLoaded, setFontsLoaded] = useState(false);


  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerTitleStyle: styles.headerTitle,
          headerStyle: styles.headerTab,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <Tab.Screen
          name="Lab 1"
          component={Lab1}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/foursquare.png")}
                style={[
                  styles.icon,
                  { tintColor: focused ? "white" : "#000000" },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lab 2"
          component={Lab2}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/foursquare.png")}
                style={[
                  styles.icon,
                  { tintColor: focused ? "white" : "#000000" },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lab 3"
          component={Lab3}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/foursquare.png")}
                style={[
                  styles.icon,
                  { tintColor: focused ? "white" : "#000000" },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lab 4"
          component={Lab4}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/foursquare.png")}
                style={[
                  styles.icon,
                  { tintColor: focused ? "white" : "#000000" },
                ]}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Lab 4_1"
          component={Lab4_1}
          options={{
            tabBarIcon: ({ focused }) => (
              <Image
                source={require("./assets/foursquare.png")}
                style={[
                  styles.icon,
                  { tintColor: focused ? "white" : "#000000" },
                ]}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 18,
    color: "#000000",
  },
  icon: {
    width: 42,
    height: 42,
    marginBottom: 9,
    marginTop: 9,
    color: "#000000",
  },
  headerTab: {
    backgroundColor: "white",
    height: 100,
  },
  tabBar: {
    height: 60,
    backgroundColor: "white",
    paddingTop: 6,
    paddingBottom: 6,
    borderTopWidth: 0.5,
    borderTopColor: "#000000",
  },
});