import { useEffect, useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import BouncingBall from '../games/bouncingBall';
import DebugProvider from '../engine/context/debug';
import TimeProvider from '../engine/context/time';
import config from '../engine/config';
import { newVector } from '../engine/models/engine/vector';

const Games = () => {

  const [render, setRender] = useState(false);
  const touchPosition = useRef(newVector(0, 0));

  const startCounter = () => {
    setRender(!render);
  };

  const onTouchEvent = (ev) => {
    touchPosition.current = newVector(ev.nativeEvent.pageX, ev.nativeEvent.pageY);
  };

  useEffect(() => {
    setTimeout(startCounter, 1000.0 / config.FPS);
  }, [render]);

  return (
    <TimeProvider>
      <DebugProvider>
        <View
          onTouchMove={onTouchEvent}
          style={styles.container}
        >
          <StatusBar style="auto" />
          <BouncingBall
            touchPosition={touchPosition.current}
          />
        </View>
      </DebugProvider>
    </TimeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#303c40',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Games;
