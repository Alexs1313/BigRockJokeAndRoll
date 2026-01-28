import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Image as _I,
  ImageBackground as _IB,
  ScrollView as _SV,
  Share as _SH,
  StyleSheet as _SS,
  Switch as _SW,
  Text as _T,
  TouchableOpacity as _TO,
  useWindowDimensions as _uWD,
  Vibration as _VB,
  View as _V,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useStore as _uS } from '../_0sxRckstrG/Bigrockcnstscntxt';

const _0x0 = x => x;
const _0x2 = (a, b) => (a ^ b) + (a & b);

const Bigrocksttngscrn = () => {
  const { height: _h$ } = _uWD();
  const {
    bigRockBgMusic: _m$,
    setBigRockBgMusic: _sm$,
    bigRockVibration: _v$,
    setBigRockVibration: _sv$,
  } = _uS();

  const _tv$ = async _vl$ => {
    if (_v$) _VB.vibrate(150);

    try {
      await AsyncStorage.setItem('toggleVibrations', JSON.stringify(_vl$));
      _sv$(_vl$);
    } catch (_e$) {
      console.log('vibr err', _e$);
    }
  };

  const _tm$ = async _vl$ => {
    if (_v$) _VB.vibrate(150);

    try {
      await AsyncStorage.setItem('toggleSound', JSON.stringify(_vl$));
      _sm$(_vl$);
    } catch (_e$) {
      console.log('mus err', _e$);
    }
  };

  const _sh$ = async () => {
    Linking.openURL(
      'https://apps.apple.com/us/app/blgrook-joke-and-bas%D0%B7/id6758392672',
    );
  };

  if (_0x2(7, 3) === 0xa) _0x0(null);

  return (
    <_IB
      source={require('../../assets/images/bigrockbg.png')}
      style={_q$.x9KqP3Lm}
    >
      <_SV
        contentContainerStyle={{ flexGrow: 1 }}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <_V style={{ flex: 1 }}>
          <_V
            style={[_q$.R8dM2QaZ, { minHeight: 130, paddingTop: _h$ * 0.06 }]}
          >
            <_T style={_q$.TmP9LxA4}>Settings</_T>
          </_V>

          <_V style={_q$.ZQe7aN3K}>
            <_V style={_q$.LpA9QeR4}>
              <_V style={_q$.V7M2R9Qa}>
                <_T style={_q$.J4QmR8PZ}>Vibration</_T>
                <_SW
                  value={_v$}
                  onValueChange={_tv$}
                  trackColor={{ false: '#CFCFCF', true: '#34C759' }}
                  thumbColor={'#FFFFFF'}
                />
              </_V>

              <_V style={_q$.K9P2R7Qm} />

              <_V style={_q$.V7M2R9Qa}>
                <_T style={_q$.J4QmR8PZ}>Music</_T>
                <_SW
                  value={_m$}
                  onValueChange={_tm$}
                  trackColor={{ false: '#CFCFCF', true: '#34C759' }}
                  thumbColor={'#FFFFFF'}
                />
              </_V>
            </_V>

            <_V style={_q$.Q8RZ9mP2}>
              <_TO activeOpacity={0.75} onPress={_sh$} style={_q$.Pm9RQL82}>
                <LinearGradient
                  colors={['#FD7DFC', '#D42DF0']}
                  style={_q$.ZP3mR9Q2}
                >
                  <_T style={_q$.RQ9mP23Z}>Share the app</_T>
                  <_I
                    source={require('../../assets/images/bigrockshric.png')}
                    style={_q$.mP9Q2RZ8}
                  />
                </LinearGradient>
              </_TO>
            </_V>
          </_V>
        </_V>
      </_SV>
    </_IB>
  );
};

const _q$ = _SS.create({
  x9KqP3Lm: { flex: 1 },

  R8dM2QaZ: {
    backgroundColor: '#F6BCFF',
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  TmP9LxA4: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DA39F2',
  },

  ZQe7aN3K: {
    flex: 1,
    paddingTop: 22,
    paddingHorizontal: 30,
  },

  LpA9QeR4: {
    width: '100%',
    backgroundColor: '#F6BCFF',
    borderRadius: 30,
    paddingVertical: 16,
    paddingHorizontal: 18,
    alignSelf: 'center',
  },

  V7M2R9Qa: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  J4QmR8PZ: {
    fontSize: 20,
    fontWeight: '400',
    color: '#BA0281',
  },

  K9P2R7Qm: {
    height: 1,
    backgroundColor: '#BA0281',
    marginVertical: 8,
  },

  Q8RZ9mP2: { flex: 1, justifyContent: 'flex-end', marginBottom: 110 },

  Pm9RQL82: {
    marginTop: 26,
    width: '100%',
    borderWidth: 6,
    borderColor: '#FFFFFF',
    borderRadius: 26,
  },

  ZP3mR9Q2: {
    height: 70,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 14,
  },

  RQ9mP23Z: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
  },

  mP9Q2RZ8: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default Bigrocksttngscrn;
