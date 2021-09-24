import { createContext, useState } from 'react';

export const NiceFlagContext = createContext({});

export const NiceFlagProvider = (props) => {
  const { children } = props;
  const [isNice, setIsNice] = useState();
  return (
    <NiceFlagContext.Provider value={{ isNice, setIsNice }}>
      {children}
    </NiceFlagContext.Provider>
  );
};
