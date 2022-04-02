import React from "react";
import { Background, StyledButton, Title } from "../../styles/styles";

const HomeScreen = (props) => {
  const {
    navigation,
  } = props;

  return (
    <Background>
      <Title>Home</Title>
      <StyledButton
        onPress={() => navigation.navigate('About')}
      >
        About
      </StyledButton>
    </Background>
  );
}

export default HomeScreen;