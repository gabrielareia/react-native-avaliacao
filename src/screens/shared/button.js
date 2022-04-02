import { Text, TouchableOpacity } from "react-native";
// import { CenteredText } from "../../styles/styles";

const CustomButton = (props) => {
  const { children } = props;
  return (
    <TouchableOpacity {...props} >
      <Text>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

export default CustomButton;
