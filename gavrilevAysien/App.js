import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Lab1 from "./screens/lab1";
import Lab2 from "./screens/lab2";
import Lab3 from "./screens/lab3";
import { NavigationContainer } from "@react-navigation/native";
const colors = ["black", "red", "blue"];

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Lab1"
          component={Lab1}
          options={{
            tabBarIcon: () => null,
            tabBarLabel: 'Lab1',
            tabBarLabelStyle: {
              fontSize: 10, 
              fontWeight: 'bold', 
              color: 'black', 
              textAlign: 'center',
            } 
          }}
        />
        <Tab.Screen
          name="Lab2"
          component={Lab2}
          options={{
            tabBarIcon: () => null,
            tabBarLabel: 'Lab2',
            tabBarLabelStyle: {
              fontSize: 10, 
              fontWeight: 'bold', 
              color: 'black', 
              textAlign: 'center',
            } 
          }}
        />
        <Tab.Screen
          name="Lab3"
          component={Lab3}
          options={{
            tabBarIcon: () => null,
            tabBarLabel: 'Lab3',
            tabBarLabelStyle: {
              fontSize: 10, 
              fontWeight: 'bold', 
              color: 'black', 
              textAlign: 'center',
            } 
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
