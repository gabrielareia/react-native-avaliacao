import React, { Children, createContext, useContext, useState } from "react";

const TimeContext = createContext();

const TimeProvider = ({ children }) => {

  const [deltaTime, setDeltaTime] = useState(0.0);

  return (
    <TimeContext.Provider value={{
      deltaTime,
      setDeltaTime,
    }}>
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