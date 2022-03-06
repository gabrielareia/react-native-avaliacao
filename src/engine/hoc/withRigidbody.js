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
} from '../';
import { newVector } from '../models/engine/vector';
import 'react-native-get-random-values';
import { v4 as newUuid } from 'uuid';

const withRigidbody = (WrappedComponent) => ({ ...props }) => {
  const {
    id,
    size,
    initialPosition,
    initialAcceleration,
    initialForce,
    positionRef,
    constrainedToScreen,
    handleCollision,
  } = { ...props };

  const dimension = Dimensions.get('window');

  
  const position = useRef(initialPosition || newVector(0, 0));
  const force = useRef(initialForce || newVector(0, 0));
  const acceleration = useRef(initialAcceleration || newVector(0, 0));
  
  const { deltaTime } = useTime();

  useEffect(() => {
    id.current = newUuid();
  }, []);

  useEffect(() => {
    force.current = gravityForce(force.current, deltaTime);

    acceleration.current = slowAcceleration(acceleration.current, deltaTime);

    force.current = applyAcceleration(force.current, acceleration.current, deltaTime);

    position.current = applyForce(position.current, force.current);

    if (handleCollision) {
      [position.current, force.current, acceleration.current] = handleCollision(
        position.current,
        force.current,
        acceleration.current,
        size,
        id.current,
      );
    }

    if (constrainedToScreen) {
      [position.current, force.current, acceleration.current] = checkBounds(
        position.current,
        force.current,
        acceleration.current,
        size,
        dimension);
    }

    if (positionRef) positionRef.current = position.current;
  });

  return <WrappedComponent
    {...props}
    position={position.current}
    rotation={0.0}
  />;
};

withRigidbody.propTypes = {
  id: PropTypes.object.isRequired,
  initialPosition: PropTypes.object.isRequired,
  initialAcceleration: PropTypes.object.isRequired,
  initialForce: PropTypes.object.isRequired,
  positionRef: PropTypes.object.isRequired,
  constrainedToScreen: PropTypes.bool.isRequired,
  handleCollision: PropTypes.func.isRequired,
};

export default withRigidbody;