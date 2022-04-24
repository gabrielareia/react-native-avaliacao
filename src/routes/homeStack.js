import React from "react";
import PropTypes from 'prop-types';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigation from "./drawer";
import { getHeaderTitle } from '@react-navigation/elements';
import { HeaderBackground, HeaderTitle } from "../styles/styles";
import IconButton from "../screens/components/iconButton";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Games from '../games';

const HomeStack = (props) => {
  const {
    changeTheme,
  } = props;

  const Stack = createNativeStackNavigator();

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
      >
        {(props) => <DrawerNavigation {...props} changeTheme={changeTheme} />}
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