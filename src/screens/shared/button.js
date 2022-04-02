import { TouchableOpacity } from "react-native";
import { CenteredText } from "../../styles/styles";

const CustomButton = (props) => {
  const { children } = props;
  return (
    <TouchableOpacity {...props} >
      <CenteredText>
        {children}
      </CenteredText>
    </TouchableOpacity>
  );
}

export default CustomButton;
