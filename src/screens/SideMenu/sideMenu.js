import { faFlag, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import { useAppState } from "../../context/state";
import IconButton from "../components/iconButton";
import sideMenuStyle from "./styles/sideMenuStyle";

const SideMenuScreen = (props) => {
  const {
    backgroundColor,
  } = props;

  const [state, setState] = useAppState();

  const changeMode = () => {
    setState({
      ...state,
      deviceTheme: state.deviceTheme === 'dark' ? 'light' : 'dark',
    });
  };

  const changeLocalization = () => {
    setState({
      ...state,
      locale: state.locale === 'en' ? 'pt' : 'en',
    });
  };

  return (
    <DrawerContentScrollView
      style={{
        backgroundColor: backgroundColor,
      }}
      contentContainerStyle={{
        height: '100%',
      }}
      {...props}
    >
      <DrawerItemList {...props} />
      <View style={{ marginTop: 'auto' }} />
      <DrawerItem
        style={sideMenuStyle(state).lightbulbStyle}
        label={(props) => (
          <IconButton
            icon={faLightbulb}
            {...props}
          />
        )}
        pressColor="#888"
        onPress={changeMode}
      />
      <DrawerItem
        style={sideMenuStyle(state).lightbulbStyle}
        label={(props) => (
          <IconButton
            icon={faFlag}
            {...props}
          />
        )}
        pressColor="#888"
        onPress={changeLocalization}
      />
    </DrawerContentScrollView>
  );
}

SideMenuScreen.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default SideMenuScreen;