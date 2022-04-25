import { createContext, useContext } from 'react';
import localization from '../localization';
import { useAppState } from './state';

const LocalizationContext = createContext();

const LocalizationProvider = (props) => {
  const {
    children,
  } = props;

  const [state] = useAppState();
  const { locale } = state;

  const appLocaliztion = localization[locale || 'en'] ||  localization['en'];

  return (
    <LocalizationContext.Provider
      value={{
        localization: appLocaliztion,
      }}
    >
      {children}
    </LocalizationContext.Provider>
  )
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);

  const { localization } = context;

  return { localization };
};

export default LocalizationProvider;
