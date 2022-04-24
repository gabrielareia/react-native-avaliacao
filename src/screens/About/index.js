import React from "react";
import { Linking } from "react-native";
import { useLocalization } from "../../context/localization";
import { Background, FlexView, Paragraph, Separator, StyledScroll, Title } from "../../styles/styles";
import IconButton from "../components/iconButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import CustomButton from "../shared/button";

const AboutScreen = () => {

  const { localization } = useLocalization();

  return (
    <StyledScroll>
      <Background>

        <Title>{localization.aboutScreen.aboutAppTitle}</Title>

        <Separator spacing={10} />

        <Paragraph>{localization.aboutScreen.aboutThisApp}</Paragraph>
        <CustomButton
          onPress={() => Linking.openURL('https://github.com/gabrielareia/react-native-avaliacao')}
        >
          {localization.aboutScreen.sourceCodeButton}
        </CustomButton>

        <Separator spacing={10} />

        <Title>
          {localization.aboutScreen.aboutMeTitle}
        </Title>

        <Separator spacing={10} />

        <Paragraph>
          {localization.aboutScreen.aboutMe}
        </Paragraph>

        <Separator spacing={30} />

        <FlexView>
          <IconButton
            icon={faGithub}
            size={28}
            onPress={() => Linking.openURL('https://github.com/gabrielareia')}
          />
          <IconButton
            icon={faLinkedin}
            size={28}
            onPress={() => Linking.openURL('https://br.linkedin.com/in/gabriel-areia')}
          />
        </FlexView>

      </Background>
    </StyledScroll>
  );
}

export default AboutScreen;