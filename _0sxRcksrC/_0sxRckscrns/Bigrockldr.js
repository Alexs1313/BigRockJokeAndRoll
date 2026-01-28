import React, {
  useEffect as _uEfQm9LxA7ZpTr,
  useState as _uStQp9LmA7ZrT,
} from 'react';
import {
  View as _vWQm9LxA7ZpTr,
  StyleSheet as _sSyQp9LmA7ZrT,
  Image as _iMgQm9LxA7ZpTr,
  ScrollView as _sCvQp9LmA7ZrT,
  ImageBackground as _iBgQm9LxA7ZpTr,
} from 'react-native';
import { WebView as _wVQp9LmA7ZrT } from 'react-native-webview';
import { bigrockldrhtml as _bHxQm9LxA7ZpTr } from '../_0sxRckcnsts/bigrockldrhtml';

const Bigrockldr = () => {
  const [_shLQp9LmA7ZrT, _sShLQm9LxA7ZpTr] = _uStQp9LmA7ZrT(true);
  const [_shIQm9LxA7ZpTr, _sShIQp9LmA7ZrT] = _uStQp9LmA7ZrT(false);

  _uEfQm9LxA7ZpTr(() => {
    const _tRQp9LmA7ZrT = setTimeout(() => {
      _sShLQm9LxA7ZpTr(false);
      _sShIQp9LmA7ZrT(true);
    }, 3500);

    return () => clearTimeout(_tRQp9LmA7ZrT);
  }, []);

  return (
    <_iBgQm9LxA7ZpTr
      source={require('../../assets/images/bigrockldrbg.png')}
      style={{ flex: 1 }}
    >
      <_sCvQp9LmA7ZrT
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {_shIQm9LxA7ZpTr && (
          <_vWQm9LxA7ZpTr
            style={_q$.vW9LmA7ZpTrQm}
            accessibilityLabel="loader-screen"
          >
            <_iMgQm9LxA7ZpTr
              source={require('../../assets/images/bigrockldr.png')}
              style={{ width: 350, height: 300 }}
            />
          </_vWQm9LxA7ZpTr>
        )}

        {_shLQp9LmA7ZrT && (
          <_vWQm9LxA7ZpTr style={_q$.wWrQp9LmA7ZrT}>
            <_wVQp9LmA7ZrT
              originWhitelist={['*']}
              source={{ html: _bHxQm9LxA7ZpTr }}
              style={_q$.wVwQm9LxA7ZpTr}
              scrollEnabled={false}
            />
          </_vWQm9LxA7ZpTr>
        )}
      </_sCvQp9LmA7ZrT>
    </_iBgQm9LxA7ZpTr>
  );
};

const _q$ = _sSyQp9LmA7ZrT.create({
  vW9LmA7ZpTrQm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 650,
  },
  wWrQp9LmA7ZrT: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  wVwQm9LxA7ZpTr: {
    width: 360,
    height: 110,
    backgroundColor: 'transparent',
  },
});

export default Bigrockldr;
