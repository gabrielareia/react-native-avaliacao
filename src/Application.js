import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { ThemeProvider } from 'styled-components';
import Home from '../src/Home';
import themes from '../src/styles/themes';
import { useAppState } from './context/state';

const Application = () => {

  const deviceTheme = useColorScheme();

  const [state, setState] = useAppState();

  useEffect(() => {
    if (state.deviceTheme && state.theme) return;

    const theme = themes[deviceTheme];

    setState({
      ...state,
      theme,
    });
  }, [deviceTheme]);

  useEffect(() => {
    const theme = themes[state.deviceTheme];
    setState({
      ...state,
      theme,
    });
  }, [state.deviceTheme]);

  return (
    <ThemeProvider theme={state.theme || themes.light} >
      <Home />
    </ThemeProvider>
  );
};

export default Application;
