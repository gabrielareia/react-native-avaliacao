import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Text } from 'react-native';
import { useTime } from '../engine/context/time';
import { useDebug } from '../engine/context/debug';
import {
  addVectors,
  newVector,
  normalizeVector,
  scaleVector,
  vectorMagnitude,
} from '../engine/models/engine/vector';
import CircleRigidbody from '../engine/models/objects/rigidbody/circleRigidbody';
import Circle from '../engine/models/objects/primitives/circle';
import { toWorldPosition } from '../engine/utils/screenUtils';

const BouncingBall = (props) => {
  const {
    touchPosition,
  } = props;

  const touchToWorldPosition = () => {
    const worldPosition = toWorldPosition(touchPosition, Dimensions.get('window'));
    return worldPosition;
  };

  const renderableCircles = useRef([]);
  const time = useRef(new Date().getTime());
  const touchWorldPosition = useRef(touchToWorldPosition());
  const { deltaTime, setDeltaTime } = useTime();
  const { debugText, setDebugText, debugTextStyle } = useDebug();

  const circles = [
    {
      id: useRef(),
      color: "blue",
      size: 75,
      initialPosition: touchWorldPosition.current,
      initialAcceleration: newVector(2, 0),
      position: useRef(newVector(0, 0)),
      constrainedToScreen: false,
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

  useEffect(() => {
    touchWorldPosition.current = touchToWorldPosition();
  }, [touchPosition]);

  useEffect(() => {
    setDebugText(`FPS: ${Math.floor(1.0 / deltaTime)} 
      \nDelta time: ${deltaTime}
      \nTouch position: (x: ${touchPosition.x.toFixed(2)}, y: ${touchPosition.y.toFixed(2)})
      \nTouch world position: (x: ${touchWorldPosition.current.x.toFixed(2)}, y: ${touchWorldPosition.current.y.toFixed(2)})`
    );

    const newTime = new Date().getTime();
    if (newTime > time.current) {
      setDeltaTime((newTime - time.current) / 1000.0);
      time.current = newTime;
    }
  });

  const filterCircles = (id) => {
    const validCircles = [];

    for (let i = 0; i < circles.length; i++) {
      if (circles[i].id.current !== id) {
        validCircles.push(circles[i]);
      }
    }

    return validCircles;
  };

  const isThisCircle = (id) => {
    for (let i = 0; i < circles.length; i++) {
      if (circles[i].id.current === id) {
        return true;
      }
    }
    return false;
  };

  const handleCircleCollisions = (position, force, acceleration, size, id) => {
    if (circles && !isThisCircle(id)) {
      return [position, force, acceleration];
    }
    const radius = size / 2.0;

    const validCircles = filterCircles(id);

    for (let i = 0; i < validCircles.length; i++) {
      const c = circles[i];
      const cRadius = c.size / 2.0;
      const dx = position.x - c.position.current.x;
      const dy = position.y - c.position.current.y;
      const difference = newVector(dx, dy);
      const distance = vectorMagnitude(difference);

      if (distance <= radius + cRadius) {
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

  renderableCircles.current = new Array(circles.length);

  for (let i = 0; i < circles.length; i++) {
    const circle = circles[i];
    renderableCircles.current[i] = circle.rigidbody
      ? (
        <CircleRigidbody
          key={i}
          id={circle.id}
          color={circle.color}
          size={circle.size}
          positionRef={circle.position}
          initialPosition={circle.initialPosition}
          initialAcceleration={circle.initialAcceleration}
          constrainedToScreen={circle.constrainedToScreen}
          handleCollision={handleCircleCollisions}
        />
      )
      : (
        <Circle
          key={i}
          id={circle.id}
          color={circle.color}
          size={circle.size}
          position={circle.initialPosition}
          positionRef={circle.position}
        />
      );
  }

  return (
    <>
      <Text style={debugTextStyle}>
        {debugText}
      </Text>
      {renderableCircles.current}
    </>
  );
};

BouncingBall.propTypes = {
  touchPosition: PropTypes.object.isRequired,
};

export default BouncingBall;
