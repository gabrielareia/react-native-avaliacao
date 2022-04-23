import { useState } from 'react';
import { faFlag, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import Popover from "react-native-popover-view";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, TouchableOpacity } from "react-native";
import { useAppState } from "../../context/state";
import IconButton from "../components/iconButton";
import { StyledIcon } from "../../styles/styles";

const SideMenuScreen = (props) => {
  const {
    backgroundColor,
  } = props;

  const [state, setState] = useAppState();
  const [showPopover, setShowPopover] = useState(false);

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
      <View style={{ flexDirection: 'row', flexWrap: 'nowrap', justifyContent: 'space-between' }} >
        <Popover
          from={(sourceRef, showPopover) => (
            <DrawerItem
              label={() => (
                <IconButton
                  icon={faFlag}
                  forwardRef={sourceRef}
                />
              )}
              pressColor="#888"
              onPress={showPopover}
            />

          )}
        >
          <Text>Option 1</Text>
          <Text>Option 2</Text>
        </Popover>
        <DrawerItem
          label={() => (
            <IconButton
              icon={faLightbulb}
            />)}
          pressColor="#888"
          onPress={changeMode}
        />
      </View>
    </DrawerContentScrollView>
  );
}

SideMenuScreen.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default SideMenuScreen;