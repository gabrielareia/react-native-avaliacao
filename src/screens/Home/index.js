import React from "react";
import PropTypes from 'prop-types';
import { useLocalization } from "../../context/localization";
import {
  Background,
  Paragraph,
  Separator,
  StyledScroll,
  Title,
} from "../../styles/styles";
import CustomButton from "../shared/button";

const HomeScreen = (props) => {
  const {
    navigation,
  } = props;

  const { localization } = useLocalization();

  return (
    <StyledScroll>
      <Background>

        <Separator spacing={20} />

        <Title centered underlined>{localization.homeScreen.welcomeTitle}</Title>

        <Separator spacing={20} />

        <Paragraph>{localization.homeScreen.introduction}</Paragraph>

        <Separator spacing={20} />

        <CustomButton
          onPress={() => navigation.navigate('Playground')}
        >
          {localization.homeScreen.goToPlaygroundButton}
        </CustomButton>
      </Background>
    </StyledScroll>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired,
}

export default HomeScreen;