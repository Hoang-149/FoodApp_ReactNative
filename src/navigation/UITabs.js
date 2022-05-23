import { View, Text } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Orders from "../screens/Orders";
import User from "../screens/User";
import RestaurantDetail from "../screens/RestaurantDetail.js";
import OrderComplete from "../screens/OrderComplete";

const Tab = createBottomTabNavigator();

const UITabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, color }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = "home";
            size = focused ? 25 : 20;
            color = focused ? "black" : "black";
          } else if (route.name === "Browse") {
            iconName = "home";
            size = focused ? 25 : 20;
            color = focused ? "black" : "black";
          } else if (route.name === "Home") {
            iconName = "home";
            size = focused ? 25 : 20;
            color = focused ? "black" : "black";
          } else if (route.name === "Home") {
            iconName = "home";
            size = focused ? 25 : 20;
            color = focused ? "black" : "black";
          } else if (route.name === "Home") {
            iconName = "home";
            size = focused ? 25 : 20;
            color = focused ? "black" : "black";
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "black",
        activeBackgroundColor: "white",
        inactiveBackgroundColor: "white",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="OrderComplete"
        component={OrderComplete}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default UITabs;
