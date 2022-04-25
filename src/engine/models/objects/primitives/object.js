import PropTypes from 'prop-types';
import { View } from "react-native";
import withTransform from '../../../hoc/withTransform';
import { newVector } from '../../engine/vector';

const Object = (props) => {
  const {
    position,
    rotation,
    size,
    restStyle,
    ...rest
  } = props;

  const length = size / 2.0;

  const style = {
    ...restStyle,
    width: size,
    height: size,
    borderRadius: size,
    position: 'absolute',
    left: position.x - length,
    top: position.y - length,
    transform: [{ rotate: `${rotation}deg` }],
  };

  return (
    <View {...rest} style={style} />
  );
};

Object.defaultProps = {
  color: 'white',
  position: newVector(0, 0),
  rotation: 0,
  size: 0,
  restStyle: {},
};

Object.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.object,
  rotation: PropTypes.number,
  size: PropTypes.number.isRequired,
  restStyle: PropTypes.object.isRequired,
};

export default withTransform(Object);
