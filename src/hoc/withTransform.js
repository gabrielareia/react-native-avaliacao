import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useTime } from '../context/time';
import { gravityForce, applyForce, slowAcceleration, applyAcceleration } from '../engine';
import { toScreenCoordinates } from '../utils/screenUtils';

const withTransform = (WrappedComponent) => ({ ...props }) => {
  const {
    size,
    onTransform,
    checkBounds,
    // debugText,
  } = { ...props };

  const dimension = Dimensions.get('window');
  const initialPos = { x: 0, y: 0 };
  const initialForce = { x: 0, y: 0 };
  const initialAcceleration = { x: 1, y: 0 };

  const position = useRef(initialPos);
  const force = useRef(initialForce);
  const acceleration = useRef(initialAcceleration);
  
  const { deltaTime } = useTime();

  useEffect(() => {
    // debugText.current = 
    // `Acceleration: x: ${acceleration.current.x}, y: ${acceleration.current.y}
    // \nForce: x: ${force.current.x}, y: ${force.current.y}
    // \nPosition: x: ${position.current.x}, y: ${position.current.y}
    // \nDelta time: ${deltaTime}`;

    acceleration.current = slowAcceleration(acceleration.current, deltaTime);

    force.current = applyAcceleration(force.current, acceleration.current, deltaTime);

    force.current = gravityForce(force.current, deltaTime);

    position.current = applyForce(position.current, force.current);

    if (checkBounds) [position.current, force.current, acceleration.current] = checkBounds(
      position.current,
      force.current,
      acceleration.current,
      size,
      dimension);
  });

  return <WrappedComponent {...props} position={toScreenCoordinates(position.current, dimension)} />;
};

withTransform.defaultProps = {
  onTransform: null,
  checkBounds: null,
};

withTransform.propTypes = {
  onTransform: PropTypes.func.isRequired,
  checkBounds: PropTypes.func.isRequired,
};

export default withTransform;