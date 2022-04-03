import React from "react";
import { Background, StyledButton, Title } from "../../styles/styles";

const ProfileScreen = (props) => {
  const {
    navigation,
  } = props;

  return (
    <Background>
      <Title>Profile</Title>
      <StyledButton
        onPress={() => navigation.navigate('Friends')}
      >
        Friends
      </StyledButton>
    </Background>
  );
}

export default ProfileScreen;