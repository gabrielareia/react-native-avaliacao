import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useLocalization } from "../../context/localization";
import useRandomColorPalette from "../../hooks/useRandomColorPalette";
import { Background, Paragraph, Title } from "../../styles/styles";
import CustomButton from "../shared/button";

const HomeScreen = (props) => {
  const {
    navigation,
    changeTheme,
  } = props;

  const { localization } = useLocalization();

  return (
    <Background>
      {/* <Title>{localization.homeScreen.title}</Title> */}
      <Paragraph>{localization.homeScreen.body}</Paragraph>
      <CustomButton
        onPress={() => navigation.navigate('Game')}
      >
        {localization.homeScreen.playButton}
      </CustomButton>
      <CustomButton
        onPress={changeTheme}
      >
        Random theme
      </CustomButton>
    </Background>
  );
};

HomeScreen.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  navigation: PropTypes.any.isRequired,
}

export default HomeScreen;