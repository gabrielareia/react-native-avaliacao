import styled from "styled-components/native";
import CustomButton from "../screens/shared/button";

export const Background = styled.View`
  background: ${(props) => props.theme.background};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.color};
  font-size: 44px;
`;

export const HeaderTitle = styled.Text`
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: bold;
  margin: auto 0;
`;

export const HeaderBackground = styled.View`
  background: ${(props) => props.theme.background};
  margin: 25px 0 0 0;
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.border};
  padding: 0 15px;
  flex-direction: row;
  justify-content: space-between;
`;

export const CenteredText = styled.Text`
  color: ${(props) => props.theme.color};
  margin: auto;
  font-size: 16px;
  line-height: 20px;
`;

export const StyledButton = styled(CustomButton)`
  background: ${(props) => props.theme.buttonBackground};
  margin: 5px;
  padding: 10px;
  max-height: ${(props) => props.maxHeight || '60px'};
  max-width: ${(props) => props.maxWidth || '90px'};
  border-radius: 5px;
`;
