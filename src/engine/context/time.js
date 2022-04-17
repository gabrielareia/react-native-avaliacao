import React, { createContext, useContext, useRef } from "react";

const TimeContext = createContext();

const TimeProvider = ({ children }) => {

  const deltaTime = useRef(0.0);

  const setDeltaTime = (value) => {
    deltaTime.current = value;
  };

  return (
    <TimeContext.Provider
      value={{
        deltaTime: deltaTime.current,
        setDeltaTime,
      }}
    >
      {children}
    </TimeContext.Provider>
  );
};

export const useTime = () => {
  const context = useContext(TimeContext);

  const { deltaTime, setDeltaTime } = context;
  return { deltaTime, setDeltaTime };
};

export default TimeProvider;