import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AboutScreen from '../screens/About';
import HomeScreen from "../screens/Home";
import { HeaderBackground, HeaderTitle } from "../styles/styles";
import { useAppState } from "../context/state";
import { getHeaderTitle } from '@react-navigation/elements';
import IconButton from "../screens/components/iconButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import SideMenuScreen from "../screens/SideMenu/sideMenu";
import sideMenuStyle from "../screens/SideMenu/styles/sideMenuStyle";

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();

  const [state] = useAppState();

  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => (
        <SideMenuScreen
          backgroundColor={state.theme.sideMenuBackground}
          {...props}
        />
      )}
      screenOptions={{
        drawerLabelStyle: sideMenuStyle(state).drawerLabelStyle,
        drawerItemStyle: sideMenuStyle(state).drawerItemStyle,
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <HeaderBackground>
              <IconButton
                icon={faBars}
                onPress={() => navigation.toggleDrawer()}
              />
              <HeaderTitle>
                {title}
              </HeaderTitle>
            </HeaderBackground>
          );
        },
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;