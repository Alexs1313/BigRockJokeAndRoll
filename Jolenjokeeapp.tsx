import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Bigrockstck from './jolenjokeesrc/jolenjokeroutter/Bigrockstck';
import Bigrockldr from './jolenjokeesrc/[jolenjokeviewws]/Bigrockldr';
import { ContextProvider } from './jolenjokeesrc/jolenjokeestorr/Bigrockcnstscntxt';

const Jolenjokeeapp = () => {
  const [isBigRockLoading, setIsBigRockLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsBigRockLoading(false);
    }, 6000);
  }, []);

  return (
    <NavigationContainer>
      <ContextProvider>
        {isBigRockLoading ? <Bigrockldr /> : <Bigrockstck />}
      </ContextProvider>
    </NavigationContainer>
  );
};

export default Jolenjokeeapp;
