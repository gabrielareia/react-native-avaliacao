import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Text } from 'react-native';
import { useTime } from '../engine/context/time';
import { newVector } from '../engine/models/engine/vector';
import CircleRigidbody from '../engine/models/objects/rigidbody/circleRigidbody';
import Circle from '../engine/models/objects/primitives/circle';
import { toWorldPosition } from '../engine/utils/screenUtils';
import { v4 as newUuid } from 'uuid';
import { handleCircleCollisions } from '../engine';
import { useLocalization } from '../context/localization';

const dimensions = Dimensions.get('window');

let time;
let pointsTimeout;

const BouncingBall = (props) => {
  const {
    touchPosition,
  } = props;

  const touchToWorldPosition = () => {
    const worldPosition = toWorldPosition(touchPosition, dimensions);
    return worldPosition;
  };

  const { localization } = useLocalization();

  const renderableCircles = useRef([]);
  const touchWorldPosition = useRef(touchToWorldPosition());
  const { setDeltaTime } = useTime();
  const hitWallRef = useRef(false);
  const points = useRef(0);
  const highScore = useRef(0);

  const circles = [
    {
      id: newUuid(),
      color: "#2244af",
      size: 75,
      initialPosition: touchWorldPosition.current,
      initialAcceleration: newVector(0, 0),
      position: newVector(0, 0),
      constrainedToScreen: false,
      rigidbody: false,
    },
    {
      id: newUuid(),
      color: '#d3c835',
      size: 50,
      initialPosition: newVector(0, 200),
      initialAcceleration: newVector(0, 0),
      position: newVector(0, 0),
      constrainedToScreen: true,
      rigidbody: true,
    },
  ];

  const increasePoints = () => {
    points.current++;
  };

  useEffect(() => {
    time = Date.now();

    if (pointsTimeout) {
      clearTimeout(pointsTimeout);
    }

    pointsTimeout = setTimeout(increasePoints, 500);
  }, [points.current]);

  useEffect(() => {
    touchWorldPosition.current = touchToWorldPosition();
  }, [touchPosition]);

  useEffect(() => {
    const newTime = Date.now();
    if (newTime > time) {
      setDeltaTime((newTime - time) / 1000.0);
      time = newTime;
    }
  });

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
          handleCollision={handleCircleCollisions(circles)}
          hitWallRef={hitWallRef}
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

  if (hitWallRef.current) {
    if (points.current > highScore.current) {
      highScore.current = points.current;
    }

    points.current = 0;
  }

  return (
    <>
      {renderableCircles.current}
      <Text style={{
        marginTop: 40,
        marginLeft: 10,
        alignSelf: 'flex-start',
        fontSize: 20,
        color: 'white',
      }}>
        {localization.gameScreen.highScore} {highScore.current}
      </Text>
      <Text style={{
        marginTop: 10,
        alignSelf: 'center',
        fontSize: 48,
        color: 'white',
      }}>
        {points.current}
      </Text>
    </>
  );
};

BouncingBall.propTypes = {
  touchPosition: PropTypes.object.isRequired,
};

export default BouncingBall;
