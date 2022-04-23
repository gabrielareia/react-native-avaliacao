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
    <TouchableOpacity ref={forwardRef} {...props} >
      <StyledIcon
        {...props}
        icon={icon}
        size={size}
      />
    </TouchableOpacity>
  );  
};

IconButton.defaultProps = {
  size: 14,
};

IconButton.propTypes = {
  icon: PropTypes.any.isRequired,
  size: PropTypes.number,
};

export default IconButton;
