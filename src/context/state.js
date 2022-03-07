import React, { createContext, useState, useContext } from 'react';
import initialState from '../actions/initialState';

const StateContext = createContext();

const StateProvider = ({ children }) => {

  const [state, setState] = useState(initialState);

  return (
    <StateContext.Provider
      value={{
        state,
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
