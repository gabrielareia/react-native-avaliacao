import 'react-native-gesture-handler';
import Application from './src/Application';
import LocalizationProvider from './src/context/localization';
import StateProvider from './src/context/state';
// import Games from './src/games';

export default function App() {
  return (
    // <Games />
    <StateProvider>
      <LocalizationProvider>
        <Application />
      </LocalizationProvider>
    </StateProvider>
  );
}
