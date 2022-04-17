import React, { createContext, useState, useContext } from 'react';
import initialState from '../actions/initialState';
import * as Localization from 'expo-localization';

const StateContext = createContext();

const StateProvider = ({ children }) => {

  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider
      value={{
        state: {
          ...state,
          locale: !state.locale ? Localization.locale.substring(0, 2) : state.locale,
        },
        setState,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(StateContext);

  const { state, setState } = context;
  return [state, setState];
};

export default StateProvider;
