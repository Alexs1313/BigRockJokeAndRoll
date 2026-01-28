import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import Bigrockstck from './_0sxRcksrC/_0sxRcknvG/Bigrockstck';
import Bigrockldr from './_0sxRcksrC/_0sxRckscrns/Bigrockldr';
import { ContextProvider } from './_0sxRcksrC/_0sxRckstrG/Bigrockcnstscntxt';

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
