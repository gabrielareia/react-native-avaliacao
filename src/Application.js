import { useEffect } from 'react';
import { useColorScheme, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import HomeScreen from './screens/Home';
import themes from '../src/styles/themes';
import { useAppState } from './context/state';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AboutScreen from './screens/About';
import { HeaderBackground, HeaderTitle } from './styles/styles';
import Header from './screens/shared/header';

const Application = () => {

  const deviceTheme = useColorScheme();

  const [state, setState] = useAppState();

  const Stack = createNativeStackNavigator();

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
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='Home'
          screenOptions={{
            header: (props) => <Header {...props} />
          }}
        >
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='About' component={AboutScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider >
  );
};

export default Application;
