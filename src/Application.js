import { useEffect } from 'react';
import {
  useColorScheme,
  StatusBar,
} from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from '../src/styles/themes';
import { useAppState } from './context/state';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/Home';
import AboutScreen from './screens/About';
import { HeaderBackground, HeaderTitle } from './styles/styles';
import Header from './screens/shared/header';
import SideMenuScreen from './screens/SideMenu/sideMenu';
import DrawerNavigation from './routes/drawer';
import HomeStack from './routes/homeStack';

const Application = () => {

  const deviceTheme = useColorScheme();

  const [state, setState] = useAppState();


  useEffect(() => {
    if (state.deviceTheme && state.theme) return;

    const theme = themes[deviceTheme];

    setState({
      ...state,
      deviceTheme,
      theme,
    });
  }, [deviceTheme]);

  useEffect(() => {
    if (!state.deviceTheme) return;

    const theme = themes[state.deviceTheme];
    setState({
      ...state,
      theme,
    });
  }, [state.deviceTheme]);

  return (
    <ThemeProvider theme={state.theme || themes.light} >
      <StatusBar
        animated={true}
        backgroundColor={state.theme.statusBarColor || '#888888'}
        hidden={false}
      />
      <NavigationContainer>
        <HomeStack />
      </NavigationContainer>
    </ThemeProvider >
  );
};

export default Application;
