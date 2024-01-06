import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "./screens/home";
import { PasswordPage } from "./screens/password";

import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            <Ionicons name="home" color={"red"} size={size} />;

            if (focused) {
              return <Ionicons name="home" color={color} size={size} />;
            }
            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />

      <Tab.Screen
        name="Password"
        component={PasswordPage}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return (
                <Ionicons name="lock-open-outline" color={color} size={size} />
              );
            }
            return <Ionicons name="lock-closed" color={color} size={size} />;
            //
          },
        }}
      />
    </Tab.Navigator>
  );
}
