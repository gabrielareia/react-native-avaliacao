import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { TouchableOpacity } from "react-native";
import { useAppState } from "../../../context/state";

const LightbulbIcon = (props) => {
  const {
    style,    
  } = props;

  const [state, setState] = useAppState();

  const changeMode = () => {
    setState({
      ...state,
      deviceTheme: state.deviceTheme === 'dark' ? 'light' : 'dark',
    });
  };

  return (
    <TouchableOpacity
    onPress={changeMode}
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'flex-end',
      paddingRight: 5,
    }}>
      <FontAwesomeIcon
        icon={faLightbulb}
        style={style}
      />
    </TouchableOpacity>
  );
}

export default LightbulbIcon;