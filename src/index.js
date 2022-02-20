import { useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { checkBounds } from './engine';
import { useTime } from './context/time';
import Circle from './models/objects/primitives/circle';

const Application = () => {
  // const textoDebug = useRef('');

  const time = useRef(new Date().getTime());
  const { setDeltaTime } = useTime();

  useEffect(() => {
    const newTime = new Date().getTime();
    if (newTime > time.current) {
      setDeltaTime((newTime - time.current) / 1000.0)
      time.current = newTime;
    }
  });

  return (
    <>
      {/* <Text
        style={{ marginVertical: 20 }}>
        {textoDebug.current}
      </Text> */}
      <Circle
        color="red"
        size={50}
        checkBounds={checkBounds}
        // debugText={textoDebug}
      />
    </>
  );
};

export default Application;
