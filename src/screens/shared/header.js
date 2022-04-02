import { Text } from "react-native";
import { HeaderBackground, HeaderTitle, StyledButton } from "../../styles/styles";
import { getHeaderTitle } from '@react-navigation/elements';
import { useAppState } from "../../context/state";

const Header = (props) => {
  const {
    route,
    options,
  } = props;

  const [state, setState] = useAppState();

  const changeMode = () => {
    setState({
      ...state,
      deviceTheme: state.deviceTheme === 'dark' ? 'light' : 'dark',
    });
  };

  const title = getHeaderTitle(options, route.name);
  return (
    <HeaderBackground>
      <HeaderTitle>
        {title}
      </HeaderTitle>
      <StyledButton
        onPress={changeMode}
      >
        Modo luz
      </StyledButton>
    </HeaderBackground>
  );
}

export default Header;
