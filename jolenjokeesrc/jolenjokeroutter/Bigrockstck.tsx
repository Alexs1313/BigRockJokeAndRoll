import Bigrockwlcm from '../[jolenjokeviewws]/Bigrockwlcm';
import Bigrockstrdtlscrn from '../[jolenjokeviewws]/Bigrockstrdtlscrn';
import Bigrockjokesscrn from '../[jolenjokeviewws]/Bigrockjokesscrn';
import Bigrocksvddtlscrn from '../[jolenjokeviewws]/Bigrocksvddtlscrn';
import Bigrocksttngscrn from '../[jolenjokeviewws]/Bigrocksttngscrn';

import { createStackNavigator } from '@react-navigation/stack';
import JolenjokBottmTabs from '../../JolenjokBottmTabs';

const Stack = createStackNavigator();

const Bigrockstck = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Bigrockwlcm" component={Bigrockwlcm} />
      <Stack.Screen name="JolenjokBottmTabs" component={JolenjokBottmTabs} />
      <Stack.Screen name="Bigrockstrdtlscrn" component={Bigrockstrdtlscrn} />
      <Stack.Screen name="Bigrockjokesscrn" component={Bigrockjokesscrn} />
      <Stack.Screen name="Bigrocksvddtlscrn" component={Bigrocksvddtlscrn} />
      <Stack.Screen name="Bigrocksttngscrn" component={Bigrocksttngscrn} />
    </Stack.Navigator>
  );
};

export default Bigrockstck;
