import React from "react";
import { useAppState } from "../context/state";
import { Background, Title } from "../styles/styles";

const Home = () => {

  const [state, setState] = useAppState();

  const changeMode = () => {
    setState({
      ...state,
      deviceTheme: state.deviceTheme === 'dark' ? 'light' : 'dark',
    });
  };

  return (
    <Background
      onTouchStart={changeMode}
    >
      <Title>Home</Title>
    </Background>
  );
}

export default Home;