import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Application from './src';
import TimeProvider from './src/context/time';
import config from './src/engine/config';

export default function App() {

  const [render, setRender] = useState(false);

  const startCounter = () => {
    setRender(!render);
  };

  useEffect(() => {
    setTimeout(startCounter, 1000.0 / config.FPS);
  }, [render])

  return (
    <TimeProvider>
      <View
        // onTouchStart={startCounter}
        // onTouchMove={startCounter}
        style={styles.container}
      >
        <StatusBar style="auto" />
        <Application />
      </View>
    </TimeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#448',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
