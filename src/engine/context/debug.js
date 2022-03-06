import React, { createContext, useRef, useContext } from 'react';
import { StyleSheet } from 'react-native';

export const DebugContext = createContext();

export const DebugProvider = ({ children }) => {

  const debugText = useRef('');

  const setDebugText = (value) => {
    debugText.current = value;
  };

  const debugTextStyle = StyleSheet.create({
    text: {
      marginTop: 40,
      paddingTop:10,
      marginLeft: 10,
      lineHeight: 10
    }
  });

  return (
    <DebugContext.Provider
      value={{
        debugText: debugText.current,
        setDebugText,
        debugTextStyle: debugTextStyle.text,
      }}
    >
      {children}
    </DebugContext.Provider>
  );
};

export const useDebug = () => {
  const {
    debugText,
    setDebugText,
    debugTextStyle,
  } = useContext(DebugContext);

  return {
    debugText,
    setDebugText,
    debugTextStyle,
  };
};

export default DebugProvider;
