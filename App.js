import "react-native-gesture-handler";

import React from "react";
import { View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <View style={{ flex: 1 }}>
          <Routes />
        </View>
      </NavigationContainer>
    </SafeAreaView>
  );
}
