import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import Application from './src/Application';
import LocalizationProvider from './src/context/localization';
import StateProvider from './src/context/state';
import { QueryClient, QueryClientProvider } from 'react-query'


export default function App() {
  const queryClient = new QueryClient();
  LogBox.ignoreAllLogs();
  return (
    <QueryClientProvider client={queryClient}>
      <StateProvider>
        <LocalizationProvider>
          <Application />
        </LocalizationProvider>
      </StateProvider>
    </QueryClientProvider>
  );
}
