import PropTypes from 'prop-types';
import { StyleSheet } from "react-native";
import { newVector } from '../../engine/vector';
import Object from './object';

const Circle = (props) => {
  const {
    color,
    position,
    rotation,
    size,
    ...rest
  } = props;

  const styles = StyleSheet.create({
    element: {
      backgroundColor: color,
      borderTopColor: 'black',
      borderTopWidth: 2,
    },
  });

  return (
    <Object
      position={position}
      rotation={rotation}
      size={size}
      restStyle={styles.element}
      {...rest}
    />
  );
};

Circle.defaultProps = {
  color: 'white',
  position: newVector(0, 0),
  rotation: 0,
  size: 0,
};

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.object.isRequired,
  rotation: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
};

export default Circle;
