import PropTypes from 'prop-types';
import { StyleSheet, View } from "react-native";
import withTransform from '../../../hoc/withTransform';

const Circle = (props) => {
  const {
    color,
    position,
    rotation,
    size,
    ...rest
  } = props;

  const radius = size / 2.0;

  const styles = StyleSheet.create({
    element: {
      backgroundColor: color,
      borderTopColor: 'black',
      borderTopWidth: 2,
      width: size,
      height: size,
      borderRadius: size,
      position: 'absolute',
      left: position.x - radius,
      top: position.y - radius,
      transform: [{rotate: `${rotation}deg`}],
    },
  });

  return (
    <View {...rest} style={styles.element}>
    </View>
  );

};

Circle.defaultProps = {
  color: 'white',
  position: {
    x: 0,
    y: 0,
  },
  rotation: 0,
  size: 0,
};

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  position: PropTypes.object,
  rotation: PropTypes.number,
  size: PropTypes.number.isRequired,
};

export default withTransform(Circle);
