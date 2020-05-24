import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const appStack = crecreateStackNavigator();

import Home from "./pages/Home";
import Login from "./pages/Login";
import Event from "./pages/Event";
import Ticket from "./pages/Ticket";

export default function Routes() {
  return (
    <NavigationContainer>
      <appStack.Navigator>
        <appStack.Screen component={Home} />
        <appStack.Screen component={Login} />
        <appStack.Screen component={Event} />
        <appStack.Screen component={Ticket} />
      </appStack.Navigator>
    </NavigationContainer>
  );
}
