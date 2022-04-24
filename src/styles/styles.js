import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styled from "styled-components/native";

export const Background = styled.View`
  background:  ${(props) => props.theme.background};
  padding: 10px 20px;
`;

export const FlexView = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

export const StyledScroll = styled.ScrollView`
  background:  ${(props) => props.theme.background};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.titleColor};
  margin: ${(props) => props.centered ? '0 auto' : '0'};
  ${(props) => props.underlined && 'text-decoration: underline'};
  font-weight: 600;
  font-family: serif;
  font-size: 24px;
`;

export const Paragraph = styled.Text`
  color: ${(props) => props.theme.color};
  font-family: serif;
  font-size: 15px;
`;

export const Separator = styled.View`
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) => props.theme.separatorColor};
  height: ${(props) => props.height || 0}px;
  margin: ${(props) => props.spacing / 2}px auto;
`;

export const HeaderTitle = styled.Text`
  color: ${(props) => props.theme.color};
  font-size: 22px;
  font-weight: 700;
  margin: auto 22px;
`;

export const HeaderBackground = styled.View`
  background: ${(props) => props.theme.headerBackground};
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.border};
  padding: 0 15px;
  flex-direction: row;
`;

export const StyledButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.buttonBackground};
  margin: 25px auto;
  padding: 10px;
  align-items: center;
  max-width: ${(props) => props.maxWidth || '180px'};
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.buttonText};
  font-family: serif;
  font-weight: bold;
  margin: 4px 5px;
  text-align: center;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.iconsColor};
  padding: ${(props) => props.size || 14}px;
  margin: ${(props) => (props.verticalPadding && `${props.verticalPadding}px`) || 'auto'} ${(props) => (props.horizontalPadding && `${props.horizontalPadding}px`) || 0};
`;
