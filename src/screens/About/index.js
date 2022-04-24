import React from "react";
import { Linking } from "react-native";
import { useLocalization } from "../../context/localization";
import { Background, FlexView, Paragraph, StyledScroll, Subtitle } from "../../styles/styles";
import IconButton from "../components/iconButton";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const AboutScreen = () => {

  const { localization } = useLocalization();

  return (
    <StyledScroll>
      <Background>
        <Subtitle>
          {localization.aboutScreen.aboutMeSubtitle}
        </Subtitle>
        <Paragraph>
          {localization.aboutScreen.aboutMe}
        </Paragraph>
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