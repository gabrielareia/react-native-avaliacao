import { useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { useTime } from './context/time';
import { useDebug } from './context/debug';
import { newVector } from './models/engine/vector';
import CircleRigidbody from './models/objects/rigidbody/circleRigidbody';
import Circle from './models/objects/primitives/circle';

const Application = () => {
  const time = useRef(new Date().getTime());
  const { deltaTime, setDeltaTime } = useTime();
  const { debugText, setDebugText, debugTextStyle } = useDebug();

  useEffect(() => {
    setDebugText(`FPS: ${Math.floor(1.0 / deltaTime)} 
      \nDelta time: ${deltaTime}`
    );

    const newTime = new Date().getTime();
    if (newTime > time.current) {
      setDeltaTime((newTime - time.current) / 1000.0);
      time.current = newTime;
    }
  });

  const circles = [
    {
      color: "blue",
      size: 75,
      initialPosition: newVector(0, -100),
      initialAcceleration: newVector(2, 0),
      constrainedToScreen: true,
      rigidbody: false,
    },
    {
      color: 'red',
      size: 50,
      initialPosition: newVector(0, 150),
      constrainedToScreen: true,
      rigidbody: true,
    },
  ]

  return (
    <>
      <Text style={debugTextStyle}>
        {debugText}
      </Text>
      {
        circles.map((c, i) => (
          c.rigidbody
            ? (
              <CircleRigidbody
                key={i}
                color={c.color}
                size={c.size}
                initialPosition={c.initialPosition}
                initialAcceleration={c.initialAcceleration}
                constrainedToScreen={c.constrainedToScreen}
              />
            )
            : (
              <Circle
                key={i}
                color={c.color}
                size={c.size}
                position={c.initialPosition}
              />
            )
        ))
      }
    </>
  );
};

export default Application;
