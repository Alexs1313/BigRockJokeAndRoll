import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Bigrockstck from './bigRookSrc/navigation/Bigrockstck';
import Bigrockldr from './bigRookSrc/screens/Bigrockldr';
import { ContextProvider } from './bigRookSrc/store/Bigrockcnstscntxt';

const App = () => {
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

export default App;
