import { useNavigation as _uNavXq9LmA7PzR } from '@react-navigation/native';
import { useState as _uStmQ8pLxA9ZrT } from 'react';
import {
  Image as _iMgQp9LxA7ZrT2,
  ImageBackground as _iBgQ9LmAx7PzR,
  ScrollView as _sCvQ8pLxA9ZrT,
  StyleSheet as _sSyQp9LxA7ZrT,
  Text as _tXtQ9LmAx7PzR,
  TouchableOpacity as _tOpQ8pLxA9ZrT,
  useWindowDimensions as _uWdQp9LxA7ZrT,
  View as _vWQ9LmAx7PzR,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Bigrockwlcm = () => {
  const { height: _hGtQp9LxA7ZrT } = _uWdQp9LxA7ZrT();
  const [_cIxQ9LmAx7PzR, _sCxQ8pLxA9ZrT] = _uStmQ8pLxA9ZrT(0);
  const _nVgQp9LxA7ZrT = _uNavXq9LmA7PzR();

  const _nXtQ8pLxA9ZrT = () => {
    if (_cIxQ9LmAx7PzR < 3) {
      _sCxQ8pLxA9ZrT(_cIxQ9LmAx7PzR + 1);
    } else {
      _nVgQp9LxA7ZrT.replace('Bigrocktbs');
    }
  };

  return (
    <_iBgQ9LmAx7PzR
      source={require('../../assets/images/bigrockldrbg.png')}
      style={{ flex: 1 }}
    >
      <_sCvQ8pLxA9ZrT
        contentContainerStyle={{ flexGrow: 1, height: 800 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {_cIxQ9LmAx7PzR < 3 ? (
          <_vWQ9LmAx7PzR style={_q$.QpLxA9ZrT8mNv}>
            <_vWQ9LmAx7PzR
              style={[_q$.LmAx7PzR9tPvQ, { paddingTop: _hGtQp9LxA7ZrT * 0.06 }]}
            >
              <_iMgQp9LxA7ZrT2
                source={require('../../assets/images/bigrocktoplog.png')}
                style={{ width: 190, height: 70 }}
              />
              <_tXtQ9LmAx7PzR style={_q$.ZrT2Qp9LxAwTx}>
                {_cIxQ9LmAx7PzR === 0
                  ? `Discover jokes that actually fit your vibe. A few questions — and you’re ready to rock the laughs.`
                  : _cIxQ9LmAx7PzR === 1
                  ? `Answer a quick personality quiz. We’ll match you with joke styles that suit you best.`
                  : `Save your favorite jokes, rate them, and use them to feel confident on stage or with friends.`}
              </_tXtQ9LmAx7PzR>

              {_cIxQ9LmAx7PzR === 1 && (
                <_vWQ9LmAx7PzR style={_q$.pLxA7ZrTQv1mG}>
                  <_iMgQp9LxA7ZrT2
                    source={require('../../assets/images/bigrockonbim1.png')}
                    style={{ left: 40, zIndex: 1 }}
                  />
                  <_iMgQp9LxA7ZrT2
                    source={require('../../assets/images/bigrockonbim2.png')}
                    style={{ right: 20, bottom: 30 }}
                  />
                </_vWQ9LmAx7PzR>
              )}

              {_cIxQ9LmAx7PzR === 2 && (
                <_vWQ9LmAx7PzR style={_q$.pLxA7ZrTQv1mG}>
                  <_iMgQp9LxA7ZrT2
                    source={require('../../assets/images/bigrockonbim3.png')}
                    style={{ left: 30 }}
                  />
                  <_iMgQp9LxA7ZrT2
                    source={require('../../assets/images/bigrockonbim4.png')}
                    style={{ right: 20, bottom: 50 }}
                  />
                </_vWQ9LmAx7PzR>
              )}
            </_vWQ9LmAx7PzR>

            <_iMgQp9LxA7ZrT2
              source={
                _cIxQ9LmAx7PzR === 0
                  ? require('../../assets/images/bigrockon1.png')
                  : _cIxQ9LmAx7PzR === 1
                  ? require('../../assets/images/bigrockon2.png')
                  : require('../../assets/images/bigrockon3.png')
              }
              style={{ position: 'absolute', bottom: 0 }}
            />

            <_vWQ9LmAx7PzR style={_q$.xA9ZrTQpLmC3nT}>
              <_tOpQ8pLxA9ZrT
                style={_q$.mQp9LxA7ZrTBrD}
                activeOpacity={0.72}
                onPress={_nXtQ8pLxA9ZrT}
              >
                <LinearGradient
                  colors={['#FD7DFC', '#D42DF0']}
                  style={_q$.PzR9tQpLxA7Btn}
                >
                  <_tXtQ9LmAx7PzR style={_q$.tQp9LxA7ZrTtx}>
                    {_cIxQ9LmAx7PzR === 0
                      ? 'Start the Show'
                      : _cIxQ9LmAx7PzR === 1
                      ? 'Take the Quiz'
                      : 'Save Your First Joke'}
                  </_tXtQ9LmAx7PzR>
                </LinearGradient>
              </_tOpQ8pLxA9ZrT>
            </_vWQ9LmAx7PzR>
          </_vWQ9LmAx7PzR>
        ) : (
          <_vWQ9LmAx7PzR style={_q$.rTQp9LxA7ZlCnT}>
            <_sCvQ8pLxA9ZrT
              contentContainerStyle={{
                flexGrow: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              <_iMgQp9LxA7ZrT2
                source={require('../../assets/images/bigrockldr.png')}
                style={{ width: 300, height: 280 }}
              />
              <_tXtQ9LmAx7PzR style={_q$.A7ZrTQp9LxATtl}>
                You’re Ready to Joke and Roll
              </_tXtQ9LmAx7PzR>
              <_tXtQ9LmAx7PzR style={_q$.LxA7ZrTQp9SbT}>
                Explore jokes, boost your confidence, and enjoy comedy made just
                for you.
              </_tXtQ9LmAx7PzR>

              <_vWQ9LmAx7PzR style={{ marginTop: _hGtQp9LxA7ZrT * 0.12 }}>
                <_tOpQ8pLxA9ZrT
                  style={[_q$.mQp9LxA7ZrTBrD, { borderColor: '#DA39F2' }]}
                  activeOpacity={0.7}
                  onPress={_nXtQ8pLxA9ZrT}
                >
                  <LinearGradient
                    colors={['#fff', '#fff']}
                    style={_q$.PzR9tQpLxA7Btn}
                  >
                    <_tXtQ9LmAx7PzR
                      style={[_q$.tQp9LxA7ZrTtx, { color: '#BA0281' }]}
                    >
                      Let’s Rock
                    </_tXtQ9LmAx7PzR>
                  </LinearGradient>
                </_tOpQ8pLxA9ZrT>
              </_vWQ9LmAx7PzR>
            </_sCvQ8pLxA9ZrT>
          </_vWQ9LmAx7PzR>
        )}
      </_sCvQ8pLxA9ZrT>
    </_iBgQ9LmAx7PzR>
  );
};

const _q$ = _sSyQp9LxA7ZrT.create({
  QpLxA9ZrT8mNv: { flex: 1, alignItems: 'center', paddingBottom: 45 },
  rTQp9LxA7ZlCnT: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6BCFF',
    paddingBottom: 45,
  },
  LmAx7PzR9tPvQ: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 300,
    backgroundColor: '#F6BCFF',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    padding: 5,
  },
  ZrT2Qp9LxAwTx: {
    marginTop: 20,
    fontSize: 20,
    color: '#BA0281',
    textAlign: 'center',
    marginHorizontal: 30,
    fontWeight: '500',
  },
  tQp9LxA7ZrTtx: { color: '#FFFFFF', fontSize: 19, fontWeight: '700' },
  mQp9LxA7ZrTBrD: {
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 20,
  },
  PzR9tQpLxA7Btn: {
    width: 236,
    height: 70,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pLxA7ZrTQv1mG: { flexDirection: 'row', marginTop: 50 },
  A7ZrTQp9LxATtl: {
    fontSize: 24,
    color: '#BA0281',
    fontWeight: '900',
    marginTop: 20,
    textAlign: 'center',
    marginHorizontal: 40,
  },
  LxA7ZrTQp9SbT: {
    fontSize: 20,
    color: '#BA0281',
    fontWeight: '500',
    marginTop: 30,
    textAlign: 'center',
    marginHorizontal: 40,
  },
  xA9ZrTQpLmC3nT: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default Bigrockwlcm;
