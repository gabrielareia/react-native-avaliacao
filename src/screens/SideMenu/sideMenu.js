import { useState } from 'react';
import { faFlag, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import PropTypes from 'prop-types';
import Popover from "react-native-popover-view";
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { View } from "react-native";
import { useAppState } from "../../context/state";
import IconButton from "../components/iconButton";
import LocalizationFlag from './components/localizationFlag';

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

  const changeLocalization = (selectedLocale = 'en') => {
    setState({
      ...state,
      locale: selectedLocale,
    });
    setShowPopover(false);
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
          isVisible={showPopover}
          onRequestClose={() => setShowPopover(false)}
          from={(sourceRef) => (
            <DrawerItem
              label={() => (
                <IconButton
                  icon={faFlag}
                  forwardRef={sourceRef}
                />
              )}
              pressColor="#888"
              onPress={() => setShowPopover(true)}
            />
          )}
        >
          <LocalizationFlag
            id={'BR'}
            onPress={() => changeLocalization('pt')}
          />
          <LocalizationFlag
            id={'US'}
            onPress={() => changeLocalization('en')}
          />
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