import { useEffect, useState } from 'react';
import {
  useColorScheme,
  StatusBar,
} from 'react-native';
import { ThemeProvider } from 'styled-components';
import themes from '../src/styles/themes';
import { useAppState } from './context/state';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/homeStack';
import useRandomColorPalette from './hooks/useRandomColorPalette';

const Application = () => {

  const deviceTheme = useColorScheme();

  const [state, setState] = useAppState();
  const { colors, setRandomPalette } = useRandomColorPalette();

  const [appTheme, setAppTheme] = useState({ light: themes.light, dark: themes.dark });

  useEffect(() => {
    if (colors.lightColors && colors.darkColors && colors.lightColors.length && colors.darkColors.length) {
      setAppTheme({
        light: {
          ...appTheme.light,
          background: colors.lightColors[0],
          statusBarColor: colors.lightColors[1],
          buttonBackground: colors.lightColors[2],
          sideMenuItemBackground: colors.lightColors[3],
          sideMenuItemColor: colors.lightColors[4],
        },
        dark: {
          ...appTheme.dark,
          background: colors.darkColors[0],
          statusBarColor: colors.darkColors[1],
          buttonBackground: colors.darkColors[2],
          sideMenuItemBackground: colors.darkColors[3],
          sideMenuItemColor: colors.darkColors[4],
        },
      });
    }
  }, [colors]);

  useEffect(() => {
    setState({
      ...state,
      theme: appTheme[state.deviceTheme],
    });
  }, [appTheme]);

  useEffect(() => {
    if (state.deviceTheme && state.theme) return;

    const theme = appTheme[deviceTheme];

    setState({
      ...state,
      deviceTheme,
      theme,
    });
  }, [deviceTheme]);

  useEffect(() => {
    if (!state.deviceTheme) return;

    const theme = appTheme[state.deviceTheme];
    setState({
      ...state,
      theme,
    });
  }, [state.deviceTheme]);

  return (
    <ThemeProvider theme={state.theme || appTheme.light} >
      <StatusBar
        animated={true}
        backgroundColor={state.theme.statusBarColor || '#888888'}
        hidden={false}
      />
      <NavigationContainer>
        <HomeStack
          changeTheme={setRandomPalette}
        />
      </NavigationContainer>
    </ThemeProvider >
  );
};

export default Application;
