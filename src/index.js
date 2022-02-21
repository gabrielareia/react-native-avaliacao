import { useEffect, useRef } from 'react';
import { Text } from 'react-native';
import { useTime } from './context/time';
import { useDebug } from './context/debug';
import { addVectors, newVector, normalizeVector, scaleVector, vectorMagnitude } from './models/engine/vector';
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
      id: useRef(),
      color: "blue",
      size: 75,
      initialPosition: newVector(0, -100),
      initialAcceleration: newVector(2, 0),
      position: useRef(newVector(0, 0)),
      constrainedToScreen: true,
      rigidbody: false,
    },
    {
      id: useRef(),
      color: 'red',
      size: 50,
      initialPosition: newVector(20, 150),
      initialAcceleration: newVector(0, 0),
      position: useRef(newVector(0, 0)),
      constrainedToScreen: true,
      rigidbody: true,
    },
  ];

  const handleCircleCollisions = (position, force, acceleration, size, id) => {
    const radius = size / 2.0;

    const validCircles = circles.filter((c) => c.id.current !== id);

    for (let i = 0; i < validCircles.length; i++) {
      const c = circles[i];
      const cRadius = c.size / 2.0;
      const dx = position.x - c.position.current.x;
      const dy = position.y - c.position.current.y;
      const difference = newVector(dx, dy);
      const distance = vectorMagnitude(difference);

      // setDebugText(`DX: ${dx}
      // \nDY: ${dy}
      // \nDistance: ${distance}
      // \nRadius: ${radius}
      // \ncRadius: ${cRadius}
      // \nsoma: ${radius + cRadius}`)

      if (distance <= radius + cRadius) {
        // const flipX = dx < size;
        // const flipY = dy < size;
        // const newForce = newVector(flipX ? -force.x : force.x, flipY ? -force.y : force.y);
        // const newAcceleration = newVector(flipX ? -acceleration.x : acceleration.x, flipY ? -acceleration.y : acceleration.y);

        const normalVector = normalizeVector(difference, distance);
        const scaledVector = scaleVector(normalVector, cRadius + radius);

        const newPosition = addVectors(c.position.current, scaledVector);

        const forceMagnitude = vectorMagnitude(force);
        const accelerationMagnitude = vectorMagnitude(acceleration);

        const newForce = scaleVector(normalVector, forceMagnitude);
        const newAcceleration = scaleVector(normalVector, accelerationMagnitude);

        return [newPosition, newForce, newAcceleration];
      }
    };

    return [position, force, acceleration];
  };

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
                id={c.id}
                color={c.color}
                size={c.size}
                positionRef={c.position}
                initialPosition={c.initialPosition}
                initialAcceleration={c.initialAcceleration}
                constrainedToScreen={c.constrainedToScreen}
                handleCollision={handleCircleCollisions}
              />
            )
            : (
              <Circle
                key={i}
                id={c.id}
                color={c.color}
                size={c.size}
                position={c.initialPosition}
                positionRef={c.position}
              />
            )
        ))
      }
    </>
  );
};

export default Application;
