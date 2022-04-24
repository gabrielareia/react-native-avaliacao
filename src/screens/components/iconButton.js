import PropTypes from 'prop-types';
import { TouchableOpacity } from "react-native";
import { StyledIcon } from "../../styles/styles";

const IconButton = (props) => {
  const {
    icon,
    size,
    forwardRef,
  } = props;
  return (
    <TouchableOpacity
      {...props}
      ref={forwardRef}
    >
      <StyledIcon
        icon={icon}
        size={size}
      />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  size: 14,
  onPress: null,
};

IconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  size: PropTypes.number,
  onPress: PropTypes.func,
};

export default IconButton;
