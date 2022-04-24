import React, { useEffect } from "react";
import { Linking } from "react-native";
import PropTypes from 'prop-types';
import { useLocalization } from "../../context/localization";
import { Background, Hyperlink, Paragraph, Separator, StyledScroll, Title } from "../../styles/styles";
import CustomButton from "../shared/button";

const PlaygroundScreen = (props) => {
  const {
    navigation,
    changeTheme,
  } = props;

  const { localization } = useLocalization();

  return (
    <StyledScroll>
      <Background>

        <Title>{localization.playgroundScreen.changeTheme.randomColorTitle}</Title>
        <Separator spacing={15} />
        <Paragraph>{localization.playgroundScreen.changeTheme.randomColorParagraph}</Paragraph>
        <CustomButton
          onPress={changeTheme}
        >
          {localization.playgroundScreen.changeTheme.changeColorButton}
        </CustomButton>

        <Separator spacing={60} />

        <Title>{localization.playgroundScreen.game.gameTitle}</Title>
        <Separator spacing={15} />
        <Paragraph>{localization.playgroundScreen.game.gameParagraph}</Paragraph>
        <CustomButton
          onPress={() => navigation.navigate('Game')}
        >
          {localization.playgroundScreen.game.playButton}
        </CustomButton>

      </Background>
    </StyledScroll>
  );
};

PlaygroundScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
  changeTheme: PropTypes.func.isRequired,
}

export default PlaygroundScreen;