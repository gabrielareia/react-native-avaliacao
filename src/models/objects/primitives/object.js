import PropTypes from 'prop-types';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import withTransform from '../../../hoc/withTransform';
import { toWorldPosition } from '../../../utils/screenUtils';
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

  const styles = StyleSheet.create({
    element: {
      ...restStyle,
      width: size,
      height: size,
      borderRadius: size,
      position: 'absolute',
      left: position.x - length,
      top: position.y - length,
      transform: [{ rotate: `${rotation}deg` }],
    },
  });

  const worldPosition = toWorldPosition(position, Dimensions.get('window'));

  return (
    <>
      <View {...rest} style={styles.element}>
      </View>
      <Text
        style={{ 
          position: 'absolute', 
          left: position.x - length, 
          top: position.y - length - 25, 
          width: 'auto' ,
        }}
      >
        {`x: ${worldPosition.x.toFixed(2)}, y: ${worldPosition.y.toFixed(2)}`}
      </Text>
    </>
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
