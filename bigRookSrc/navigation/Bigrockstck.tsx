import { createStackNavigator } from '@react-navigation/stack';

import Bigrocktbs from './Bigrocktbs';
import Bigrockwlcm from '../screens/Bigrockwlcm';
import Bigrockstrdtlscrn from '../screens/Bigrockstrdtlscrn';
import Bigrockjokesscrn from '../screens/Bigrockjokesscrn';
import Bigrocksvddtlscrn from '../screens/Bigrocksvddtlscrn';

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
