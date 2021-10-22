import { useDarkMode as useDarkModeFuselage } from '@rocket.chat/fuselage-hooks';
import { createContext, ReactElement, ReactNode, useContext } from 'react';

const DarkModeContext = createContext(true);

type DarkModeProviderProps = {
  children?: ReactNode;
  forcedDarkMode?: boolean;
};

const DarkModeProvider = ({
  children,
  forcedDarkMode,
}: DarkModeProviderProps): ReactElement => {
  const value = useDarkModeFuselage(forcedDarkMode);
  return <DarkModeContext.Provider children={children} value={value} />;
};

export default DarkModeProvider;

export const useDarkMode = (): boolean => useContext(DarkModeContext);
