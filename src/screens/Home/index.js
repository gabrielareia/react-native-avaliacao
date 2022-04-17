import React from "react";
import { useLocalization } from "../../context/localization";
import { Background, StyledButton, Title } from "../../styles/styles";

const HomeScreen = (props) => {
  const {
    navigation,
  } = props;
  
  const {localization} = useLocalization();

  return (
    <Background>
      <Title>{localization.homeScreenTitle}</Title>
      <Title>{localization.test}</Title>
      <StyledButton
        onPress={() => navigation.navigate('Profile')}
      >
        Profile
      </StyledButton>
    </Background>
  );
}

export default HomeScreen;