import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutScreen from '../screens/About';
import HomeScreen from "../screens/Home";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;