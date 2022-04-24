import React from "react";
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from "./drawer";
import { getHeaderTitle } from '@react-navigation/elements';
import { HeaderBackground, HeaderTitle } from "../styles/styles";
import IconButton from "../screens/components/iconButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Games from '../games';
import PlaygroundScreen from "../screens/Playground";
import { useLocalization } from "../context/localization";

const HomeStack = (props) => {
  const {
    changeTheme,
  } = props;

  const Stack = createNativeStackNavigator();
  const { localization } = useLocalization();

  return (
    <Stack.Navigator
      initialRouteName='Root'
      screenOptions={{
        header: ({ navigation, route, options }) => {
          const title = getHeaderTitle(options, route.name);

          return (
            <HeaderBackground>
              <IconButton
                icon={faArrowLeft}
                size={12}
                onPress={() => navigation.pop()}
              />
              <HeaderTitle>
                {title}
              </HeaderTitle>
            </HeaderBackground>
          );
        },
      }}
    >
      <Stack.Screen
        name="Root"
        options={{ headerShown: false }}
        component={DrawerNavigation} />
      <Stack.Screen
        name="Playground"
        options={{
          title: localization.playgroundScreen.title,
        }}
      >
        {(props) => <PlaygroundScreen {...props} changeTheme={changeTheme} />}
      </Stack.Screen>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Game"
        component={Games}
      />
    </Stack.Navigator>
  );
};

HomeStack.propTypes = {
  changeTheme: PropTypes.func.isRequired,
}

export default HomeStack;