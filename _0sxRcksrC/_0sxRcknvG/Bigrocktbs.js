import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, View } from 'react-native';
import Bigrockhmscrn from '../_0sxRckscrns/Bigrockhmscrn';
import Bigrockstrsscrn from '../_0sxRckscrns/Bigrockstrsscrn';
import Bigrocksvdscrn from '../_0sxRckscrns/Bigrocksvdscrn';
import Bigrocksttngscrn from '../_0sxRckscrns/Bigrocksttngscrn';

const Tab = createBottomTabNavigator();

const Bigrocktbs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.besttraintab,
        tabBarActiveTintColor: '#DA39F2',
        tabBarInactiveTintColor: '#F6BCFF',
      }}
    >
      <Tab.Screen
        name="Bigrockhmscrn"
        component={Bigrockhmscrn}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={[
                  styles.bigrockfocuseddot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('../../assets/images/bigrockhm.png')}
                style={{ tintColor: color }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Bigrockstrsscrn"
        component={Bigrockstrsscrn}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={[
                  styles.bigrockfocuseddot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('../../assets/images/bigrockstrs.png')}
                style={{ tintColor: color }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Bigrocksvdscrn"
        component={Bigrocksvdscrn}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={[
                  styles.bigrockfocuseddot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('../../assets/images/bigrocksvd.png')}
                style={{ tintColor: color }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Bigrocksttngscrn"
        component={Bigrocksttngscrn}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={[
                  styles.bigrockfocuseddot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('../../assets/images/bigrocksttn.png')}
                style={{ tintColor: color }}
              />
            </>
          ),
          unmountOnBlur: true,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  besttraintab: {
    position: 'absolute',
    elevation: 0,
    bottom: 20,
    marginHorizontal: 27,
    backgroundColor: '#000000B2',
    borderRadius: 100,
    paddingTop: 8,
    height: 70,
    borderWidth: 2,
    borderColor: '#DA39F2',
    borderTopWidth: 2,
    shadowColor: '#DA39F2',
  },
  bigrockfocuseddot: {
    width: 6,
    height: 6,
    backgroundColor: '#DA39F2',
    borderRadius: 3,
    marginBottom: 5,
    alignSelf: 'center',
  },
});

export default Bigrocktbs;
