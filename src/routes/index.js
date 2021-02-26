import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../pages/Home";

const Stack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: "#f8f9fb" },
      }}
    >
      <Stack.Screen name="Home" hidden component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeRoutes;
