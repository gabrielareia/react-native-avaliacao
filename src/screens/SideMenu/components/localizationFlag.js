import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native";
import { Flag } from 'react-native-svg-flagkit';

const LocalizationFlag = (props) => {
  const {
    id,
    size,
    forwardRef,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      ref={forwardRef}
      style={{
        marginVertical: 4,
        marginHorizontal: 4,
      }}
    >
      <Flag
        id={id}
        size={size || 0.18}
      />
    </TouchableOpacity>
  );
};

LocalizationFlag.defaultProps = {
  size: null,
};

LocalizationFlag.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default LocalizationFlag;
