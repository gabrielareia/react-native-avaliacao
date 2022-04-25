import PropTypes from 'prop-types';
import { Dimensions } from 'react-native';
import { toScreenCoordinates } from '../utils/screenUtils';

const dimension = Dimensions.get('window');

const withTransform = (WrappedComponent) => ({ ...props }) => {
  const {
    position,
    rotation,
  } = { ...props };

  return (
    <WrappedComponent
      {...props}
      position={toScreenCoordinates(position, dimension)}
      rotation={rotation}
    />
  );
};

withTransform.defaultProps = {
  position: {},
  rotation: 0.0,
};

withTransform.propTypes = {
  position: PropTypes.object.isRequired,
  rotation: PropTypes.number.isRequired,
};

export default withTransform;