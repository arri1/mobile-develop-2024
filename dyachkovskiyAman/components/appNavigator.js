import React from "react";
import { Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import lab1 from "./lab1";
import lab2 from "./lab2";
import lab3 from "./lab3";
import lab4 from "./lab4";
import first from "../assets/first.png";
import second from "../assets/second.png";
import third from "../assets/third.png";
import fourth from "../assets/fourth.png";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="lab1"
          component={lab1}
          options={{
            tabBarIcon: ({ color, size }) => <Image source={first} />,
          }}
        />
        <Tab.Screen
          name="lab2"
          component={lab2}
          options={{
            tabBarIcon: ({ color, size }) => <Image source={second} />,
          }}
        />
        <Tab.Screen
          name="lab3"
          component={lab3}
          options={{
            tabBarIcon: ({ color, size }) => <Image source={third} />,
          }}
        />
        <Tab.Screen
          name="lab4"
          component={lab4}
          options={{
            tabBarIcon: ({ color, size }) => <Image source={fourth} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;
