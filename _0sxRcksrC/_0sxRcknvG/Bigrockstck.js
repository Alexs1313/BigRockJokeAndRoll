import { createStackNavigator } from '@react-navigation/stack';

import Bigrocktbs from './Bigrocktbs';
import Bigrockwlcm from '../_0sxRckscrns/Bigrockwlcm';
import Bigrockstrdtlscrn from '../_0sxRckscrns/Bigrockstrdtlscrn';
import Bigrockjokesscrn from '../_0sxRckscrns/Bigrockjokesscrn';
import Bigrocksvddtlscrn from '../_0sxRckscrns/Bigrocksvddtlscrn';

const Stack = createStackNavigator();

const Bigrockstck = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bigrockwlcm" component={Bigrockwlcm} />
      <Stack.Screen name="Bigrocktbs" component={Bigrocktbs} />
      <Stack.Screen name="Bigrockstrdtlscrn" component={Bigrockstrdtlscrn} />
      <Stack.Screen name="Bigrockjokesscrn" component={Bigrockjokesscrn} />
      <Stack.Screen name="Bigrocksvddtlscrn" component={Bigrocksvddtlscrn} />
    </Stack.Navigator>
  );
};

export default Bigrockstck;
