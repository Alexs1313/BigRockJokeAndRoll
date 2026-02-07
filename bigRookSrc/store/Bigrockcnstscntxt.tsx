import React, { createContext, useContext, useState } from 'react';

export const StoreContext = createContext(undefined);

export const useStore = () => {
  return useContext(StoreContext);
};

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [bigRockBgMusic, setBigRockBgMusic] = useState(false);
  const [bigRockVibration, setBigRockVibration] = useState(false);

  const contextValues = {
    bigRockBgMusic,
    setBigRockBgMusic,
    bigRockVibration,
    setBigRockVibration,
  };

  return (
    <StoreContext.Provider value={contextValues}>
      {children}
    </StoreContext.Provider>
  );
};
