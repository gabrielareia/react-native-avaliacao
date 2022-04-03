import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ProfileScreen from "../screens/test/profile";
import FriendsScreen from "../screens/test/friends";
import DrawerNavigation from "./drawer";

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName='Root'
    >
      <Stack.Screen name="Root" component={DrawerNavigation} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Friends" component={FriendsScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;