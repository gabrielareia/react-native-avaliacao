import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useTime } from '../context/time';
import {
  gravityForce,
  applyForce,
  slowAcceleration,
  applyAcceleration,
  checkBounds,
} from '../engine';
import { newVector } from '../models/engine/vector';

const withRigidbody = (WrappedComponent) => ({ ...props }) => {
  const {
    size,
    initialPosition,
    initialAcceleration,
    initialForce,
    constrainedToScreen,
  } = { ...props };

  const dimension = Dimensions.get('window');

  const position = useRef(initialPosition || newVector(0, 0));
  const force = useRef(initialForce || newVector(0, 0));
  const acceleration = useRef(initialAcceleration || newVector(0, 0));

  const { deltaTime } = useTime();

  useEffect(() => {
    acceleration.current = slowAcceleration(acceleration.current, deltaTime);

    force.current = applyAcceleration(force.current, acceleration.current, deltaTime);

    force.current = gravityForce(force.current, deltaTime);

    position.current = applyForce(position.current, force.current);

    if (constrainedToScreen) [position.current, force.current, acceleration.current] = checkBounds(
      position.current,
      force.current,
      acceleration.current,
      size,
      dimension);
  });

  return <WrappedComponent
    {...props}
    position={position.current}
    rotation={0.0}
  />;
};

withRigidbody.propTypes = {
  initialPosition: PropTypes.object.isRequired,
  initialAcceleration: PropTypes.object.isRequired,
  initialForce: PropTypes.object.isRequired,
  constrainedToScreen: PropTypes.bool.isRequired,
};

export default withRigidbody;