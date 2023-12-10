import React, {useEffect} from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box, Image, Menu, Pressable, HamburgerIcon, ThreeDotsIcon, View,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import {Platform, StatusBar} from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen} from "./Screens/HomeScreen";
import Ionicons from "react-native-vector-icons/Ionicons";
import axios from "axios";

axios.defaults.baseURL = 'http://192.168.1.3:5000/';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {


  function TabNav() {
    return (
        <Tab.Navigator
            options={{
              headerShown: false,
            }}
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === "Home") {
                  // iconName = focused ? "ios-home" : "ios-home-outline";
                  iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Example") {
                  iconName = focused ? "ios-list" : "ios-list-outline";
                } else if (route.name === "Inquiries") {
                  iconName = focused ? "create" : "create-outline";
                }
                else if (route.name === "Inquiries") {
                  iconName = focused ? "create" : "create-outline";
                }
                else if (route.name === "login") {
                  iconName = focused ? "create" : "create-outline";
                }
                else if (route.name === "Foods") {
                  iconName = focused ? "restaurant" : "restaurant-outline";
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "tomato",
              tabBarInactiveTintColor: "gray",
            })} >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Foods" component={HomeScreen} options={{  headerShown: false }} />
        </Tab.Navigator>
    );
  }

  function Example() {
    return <Box w="100%" alignItems="end" padding={5}>
      <Menu w="190" trigger={triggerProps => {
        return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
          <ThreeDotsIcon color="emerald.500"  />
        </Pressable>;
      }}>
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
        <Menu.Item>Poppins</Menu.Item>
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
        <Menu.Item isDisabled>Sofia</Menu.Item>
        <Menu.Item>Cookie</Menu.Item>
      </Menu>
    </Box>;
  }


  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={TabNav} options={{ headerShown: false }} />
          <Stack.Screen name="Example" component={Example} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

