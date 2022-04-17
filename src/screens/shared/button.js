import { ButtonText, StyledButton } from "../../styles/styles";

const CustomButton = (props) => {
  const { children } = props;
  return (
    <StyledButton {...props} >
      <ButtonText>
        {children}
      </ButtonText>
    </StyledButton>
  );
}

export default CustomButton;
