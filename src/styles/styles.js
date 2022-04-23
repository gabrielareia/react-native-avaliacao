import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styled from "styled-components/native";
import CustomButton from "../screens/shared/button";

export const Background = styled.View`
  background: ${(props) => props.theme.background};
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.color};
  font-size: 44px;
`;

export const Paragraph = styled.Text`
  color: ${(props) => props.theme.color};
  font-size: 16px;
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
  margin: 15px;
  padding: 10px;
  max-height: ${(props) => props.maxHeight || '60px'};
  max-width: ${(props) => props.maxWidth || '90px'};
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: ${(props) => props.theme.iconsColor}; 
  margin: 2px 5px;
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: ${(props) => props.theme.iconsColor};
  padding: ${(props) => props.size || 14}px;
  margin: ${(props) => (props.verticalPadding && `${props.verticalPadding}px`) || 'auto'} ${(props) => (props.horizontalPadding && `${props.horizontalPadding}px`) || 0};
`;
