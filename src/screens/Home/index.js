import React from "react";
import { useLocalization } from "../../context/localization";
import { Background, Paragraph, Title } from "../../styles/styles";
import CustomButton from "../shared/button";

const HomeScreen = (props) => {
  const {
    navigation,
  } = props;

  const { localization } = useLocalization();

  return (
    <Background>
      <Title>{localization.homeScreen.title}</Title>
      <Paragraph>{localization.homeScreen.body}</Paragraph>
      <CustomButton
        onPress={() => navigation.navigate('Game')}
      >
        {localization.homeScreen.playButton}
      </CustomButton>
    </Background>
  );
}

export default HomeScreen;