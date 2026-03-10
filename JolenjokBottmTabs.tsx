import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef } from 'react';
import { Animated, Image, Pressable, View } from 'react-native';
import Main from './jolenjokeesrc/[jolenjokeviewws]/Main';
import Bigrockstrsscrn from './jolenjokeesrc/[jolenjokeviewws]/Bigrockstrsscrn';
import Bigrocksvdscrn from './jolenjokeesrc/[jolenjokeviewws]/Bigrocksvdscrn';
import Bigrockhmscrn from './jolenjokeesrc/[jolenjokeviewws]/Bigrockhmscrn';
import Notebook from './jolenjokeesrc/[jolenjokeviewws]/Notebook';

const Tab = createBottomTabNavigator();

const PRESS_SCALE = 0.88;
const PRESS_DURATION = 100;

function AnimatedTabButton(
  props: Record<string, unknown> & { children: React.ReactNode },
) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scaleAnim, {
      toValue: PRESS_SCALE,
      duration: PRESS_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: PRESS_DURATION,
      useNativeDriver: true,
    }).start();
  };

  const { style, children, onPress, onLongPress, ...rest } = props;

  return (
    <Pressable
      {...rest}
      style={style as object}
      onPress={onPress as (() => void) | undefined}
      onLongPress={onLongPress as (() => void) | undefined}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View
        style={[animatedTabIconWrap, { transform: [{ scale: scaleAnim }] }]}
      >
        {children}
      </Animated.View>
    </Pressable>
  );
}

const JolenjokBottmTabs: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: jokeRollTabBar,
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#671074',
        tabBarButton: props => <AnimatedTabButton {...props} />,
      }}
    >
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={[
                  jokeRollFocusedDot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('./assets/images/bigrockhm.png')}
                style={[jokeRollTabIcon, { tintColor: color }]}
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
                  jokeRollFocusedDot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('./assets/images/bigrockstrs.png')}
                style={[jokeRollTabIcon, { tintColor: color }]}
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
                  jokeRollFocusedDot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('./assets/images/bigrocksvd.png')}
                style={[jokeRollTabIcon, { tintColor: color }]}
              />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Bigrockhmscrn"
        component={Bigrockhmscrn}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={[
                  jokeRollFocusedDot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('./assets/images/bigjokelshow.png')}
                style={[jokeRollTabIcon, { tintColor: color }]}
              />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Notebook"
        component={Notebook}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <>
              <View
                style={[
                  jokeRollFocusedDot,
                  !focused && { backgroundColor: 'transparent' },
                ]}
              />
              <Image
                source={require('./assets/images/bigjokelonotebook.png')}
                style={[jokeRollTabIcon, { tintColor: color }]}
              />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const animatedTabIconWrap = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollTabBar = {
  position: 'absolute' as const,
  elevation: 0,
  bottom: 40,
  marginHorizontal: 27,
  backgroundColor: '#2A0030',
  borderRadius: 100,
  paddingTop: 22,
  height: 70,
  borderWidth: 2,
  borderColor: '#FFFFFF',
  borderTopWidth: 2,
  shadowColor: '#FFFFFF',
};

const jokeRollFocusedDot = {
  width: 6,
  height: 6,
  backgroundColor: '#FFFFFF',
  borderRadius: 3,
  marginBottom: 5,
  alignSelf: 'center' as const,
};

const jokeRollTabIcon = {
  // width: 24,
  // height: 24,
};

export default JolenjokBottmTabs;
