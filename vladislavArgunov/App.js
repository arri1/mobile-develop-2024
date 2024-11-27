import {
  createBottomTabNavigator,
  TransitionPresets,
} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Task2 from "./screens/task2";
import Task3 from "./screens/task3";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "terminal" : "terminal-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          name="useState"
          component={Task2}
          options={{
            tabBarBadge: 2,
            TransitionPresets: TransitionPresets.ShiftTransition,
          }}
        />
        <Tab.Screen
          name="useMemo"
          component={Task3}
          options={{
            tabBarBadge: 3,
            TransitionPresets: TransitionPresets.ShiftTransition,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
