import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const appStack = createStackNavigator();

import Home from "./pages/Home";
import Login from "./pages/Login";
import Event from "./pages/Event";
import Ticket from "./pages/Ticket";

export default function Routes() {
  return (
    <NavigationContainer>
      <appStack.Navigator screenOptions={{ headerShown: false }}>
        <appStack.Screen name="Home" component={Home} />
        <appStack.Screen name="Login" component={Login} />
        <appStack.Screen name="Event" component={Event} />
        <appStack.Screen name="Ticket" component={Ticket} />
      </appStack.Navigator>
    </NavigationContainer>
  );
}
