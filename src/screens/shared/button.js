import { Text, TouchableOpacity } from "react-native";

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
