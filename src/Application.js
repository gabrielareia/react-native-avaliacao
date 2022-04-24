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
import { hexToRgb, rgbToHex } from './utils/colorUtils';

const Application = () => {

  const deviceTheme = useColorScheme();

  const [state, setState] = useAppState();
  const { colors, setRandomPalette } = useRandomColorPalette();

  const [appTheme, setAppTheme] = useState({ light: themes.light, dark: themes.dark });

  const applyColors = (arr) => {
    const clampColor = (c) => Math.min(Math.max(Math.floor(c), 0), 255);

    const bgColor = hexToRgb(arr[1]);
    const avgColor = (bgColor.r + bgColor.g + bgColor.b) / 3;
    const oldColor = hexToRgb(arr[3]);
    const darkFactor = 0.25;
    const lightFactor = 8;
    const newColor = avgColor >= 172
      ? {
        r: clampColor(oldColor.r * darkFactor),
        g: clampColor(oldColor.g * darkFactor),
        b: clampColor(oldColor.b * darkFactor),
      }
      : {
        r: clampColor(oldColor.r * lightFactor),
        g: clampColor(oldColor.g * lightFactor),
        b: clampColor(oldColor.b * lightFactor),
      };

    const newColorHex = rgbToHex(newColor.r,newColor.g, newColor.b);

    return {
      headerBackground: arr[0],
      sideMenuBackground: arr[0],
      background: arr[1],
      sideMenuItemBackground: arr[1],
      statusBarColor: arr[1],
      sideMenuItemColor: newColorHex,
      titleColor: newColorHex,
      color: newColorHex,
      iconsColor: newColorHex,
      buttonText: newColorHex,
      separatorColor: arr[4],
      border: arr[4],
      buttonBackground: arr[4],
    }
  };

  useEffect(() => {
    if (colors.lightColors && colors.darkColors && colors.lightColors.length && colors.darkColors.length) {
      setAppTheme({
        light: {
          ...appTheme.light,
          ...applyColors(colors.lightColors),
        },
        dark: {
          ...appTheme.dark,
          ...applyColors(colors.darkColors),
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
