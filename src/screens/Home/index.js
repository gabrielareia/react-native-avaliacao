import React, { useEffect } from "react";
import { Linking } from "react-native";
import PropTypes from 'prop-types';
import { useLocalization } from "../../context/localization";
import { Background, Hyperlink, Paragraph, StyledScroll, Title } from "../../styles/styles";
import CustomButton from "../shared/button";

const HomeScreen = (props) => {
  const {
    navigation,
    changeTheme,
  } = props;

  const { localization } = useLocalization();

  return (
    <StyledScroll>
      <Background>

        <Paragraph>{localization.homeScreen.introduction}</Paragraph>
        <CustomButton
          onPress={() => Linking.openURL('https://github.com/gabrielareia/react-native-avaliacao')}
        >
          {localization.homeScreen.sourceCodeButton}
        </CustomButton>
        <Paragraph>{localization.homeScreen.randomColorParagraph}</Paragraph>
        <CustomButton
          onPress={changeTheme}
        >
          {localization.homeScreen.changeColorButton}
        </CustomButton>

        <Paragraph>{localization.homeScreen.body}</Paragraph>
        <Paragraph>{localization.homeScreen.gameText}</Paragraph>
        <CustomButton
          onPress={() => navigation.navigate('Game')}
        >
          {localization.homeScreen.playButton}
        </CustomButton>

      </Background>
    </StyledScroll>
  );
};

HomeScreen.propTypes = {
  changeTheme: PropTypes.func.isRequired,
  navigation: PropTypes.any.isRequired,
}

export default HomeScreen;