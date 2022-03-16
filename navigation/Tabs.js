import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import SuggestsScreen from "../screens/SuggestsScreen";
import AboutScreen from "../screens/AboutScreen";
import ContactScreen from "../screens/ContactScreen";

// Icons

const home = require("../assets/icons/home-outline.png");
const suggests = require("../assets/icons/suggests-outline.png");
const about = require("../assets/icons/info-outline.png");
const contact = require("../assets/icons/headset-outline.png");

const homeActive = require("../assets/icons/home.png");
const suggestsActive = require("../assets/icons/suggests.png");
const aboutActive = require("../assets/icons/info.png");
const contactActive = require("../assets/icons/headset.png");

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: () => null,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopColor: "#fff",
          borderTopWidth: 0,
          shadowColor: "#000",
          elevation: 20,
          height: 55,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? homeActive : home;
          } else if (route.name === "Suggests") {
            iconName = focused ? suggestsActive : suggests;
          } else if (route.name === "About") {
            iconName = focused ? aboutActive : about;
          } else if (route.name === "Contact") {
            iconName = focused ? contactActive : contact;
          }

          return (
            <Image
              source={iconName}
              style={{ width: 25, height: 25, tintColor: "#5209b0" }}
            />
          );
        },
        tabBarActiveTintColor: "#5209b0",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Suggests" component={SuggestsScreen} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}
