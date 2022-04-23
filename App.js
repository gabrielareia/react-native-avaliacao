import 'react-native-gesture-handler';
import Application from './src/Application';
import LocalizationProvider from './src/context/localization';
import StateProvider from './src/context/state';

export default function App() {
  return (
    <StateProvider>
      <LocalizationProvider>
        <Application />
      </LocalizationProvider>
    </StateProvider>
  );
}
