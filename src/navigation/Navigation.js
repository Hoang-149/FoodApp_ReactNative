import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import RestaurantDetail from "../screens/RestaurantDetail";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../../redux/store";
import OrderComplete from "../screens/OrderComplete";

const Stack = createStackNavigator();

const store = configureStore();

export default function Navigation() {
  const screenOptions = {
    headerShown: false,
  };
  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderComplete" component={OrderComplete} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
