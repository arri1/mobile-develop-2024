import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Lab1 from "./screens/use-state";
import Lab2 from "./screens/use-effect";
import { View, Text, Button, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Lab1" component={Lab1} />
                <Tab.Screen name="Lab2" component={Lab2} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});