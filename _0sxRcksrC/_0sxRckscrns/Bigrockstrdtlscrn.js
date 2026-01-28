import {
  useNavigation as _uNavZpQ9rT7mLxA,
  useRoute as _uRteQm9LxA7ZpTr,
} from '@react-navigation/native';
import React from 'react';
import {
  Image as _iMgQm9LxA7ZpTr,
  ImageBackground as _iBgQp9LmA7ZrT,
  ScrollView as _sCvQm9LxA7ZpTr,
  Share as _sHrQp9LmA7ZrT,
  StyleSheet as _sSyQm9LxA7ZpTr,
  Text as _tXtQp9LmA7ZrT,
  TouchableOpacity as _tOpQm9LxA7ZpTr,
  useWindowDimensions as _uWdQp9LmA7ZrT,
  View as _vWQm9LxA7ZpTr,
} from 'react-native';

const Bigrockstrdtlscrn = () => {
  const _nVQp9LmA7ZrT = _uNavZpQ9rT7mLxA();
  const _rTQm9LxA7ZpTr = _uRteQm9LxA7ZpTr();
  const { height: _hGtQp9LmA7ZrT } = _uWdQp9LmA7ZrT();

  const _sTyQm9LxA7ZpTr = _rTQm9LxA7ZpTr?.params?.story || {
    title: 'Story',
    body: '',
  };

  const _gBkQp9LmA7ZrT = () => _nVQp9LmA7ZrT.goBack();

  const _shR9Qm9LxA7Zp = async () => {
    _sHrQp9LmA7ZrT.share({
      message: `${_sTyQm9LxA7ZpTr.title}\n\n${_sTyQm9LxA7ZpTr.body}`,
    });
  };

  return (
    <_iBgQp9LmA7ZrT
      source={require('../../assets/images/bigrockbg.png')}
      style={{ flex: 1 }}
    >
      <_vWQm9LxA7ZpTr style={{ flex: 1 }}>
        <_vWQm9LxA7ZpTr
          style={[
            _q$.pT7mLxA9QpZrG,
            { minHeight: 130, paddingTop: _hGtQp9LmA7ZrT * 0.06 },
          ]}
        >
          <_tOpQm9LxA7ZpTr
            activeOpacity={0.75}
            onPress={_gBkQp9LmA7ZrT}
            style={_q$.bKQm9LxA7ZpTrX}
          >
            <_iMgQm9LxA7ZpTr
              source={require('../../assets/images/bigrockback.png')}
            />
          </_tOpQm9LxA7ZpTr>

          <_tXtQp9LmA7ZrT style={_q$.tTlQm9LxA7ZpTr}>Stories</_tXtQp9LmA7ZrT>
        </_vWQm9LxA7ZpTr>

        <_sCvQm9LxA7ZpTr
          contentContainerStyle={_q$.sCrQm9LxA7ZpTrN}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <_vWQm9LxA7ZpTr style={_q$.cRdQm9LxA7ZpTrY}>
            <_tXtQp9LmA7ZrT style={_q$.sTtQm9LxA7ZpTrL}>
              {_sTyQm9LxA7ZpTr.title}
            </_tXtQp9LmA7ZrT>
            <_tXtQp9LmA7ZrT style={_q$.sTbQm9LxA7ZpTrP}>
              {_sTyQm9LxA7ZpTr.body}
            </_tXtQp9LmA7ZrT>
          </_vWQm9LxA7ZpTr>

          <_tOpQm9LxA7ZpTr
            activeOpacity={0.7}
            onPress={_shR9Qm9LxA7Zp}
            style={_q$.sHbQm9LxA7ZpTrD}
          >
            <_tXtQp9LmA7ZrT style={_q$.sHtQm9LxA7ZpTrF}>Share</_tXtQp9LmA7ZrT>
            <_iMgQm9LxA7ZpTr
              source={require('../../assets/images/bigrockshr.png')}
              style={_q$.sHiQm9LxA7ZpTrW}
            />
          </_tOpQm9LxA7ZpTr>

          <_vWQm9LxA7ZpTr style={{ height: 30 }} />
        </_sCvQm9LxA7ZpTr>
      </_vWQm9LxA7ZpTr>
    </_iBgQp9LmA7ZrT>
  );
};

const _q$ = _sSyQm9LxA7ZpTr.create({
  pT7mLxA9QpZrG: {
    backgroundColor: '#F6BCFF',
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tTlQm9LxA7ZpTr: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DA39F2',
  },
  bKQm9LxA7ZpTrX: {
    position: 'absolute',
    left: 18,
    bottom: 14,
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    borderWidth: 5,
    borderColor: '#DA39F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sCrQm9LxA7ZpTrN: {
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  cRdQm9LxA7ZpTrY: {
    width: '100%',
    backgroundColor: '#F6BCFF',
    borderRadius: 30,
    paddingHorizontal: 18,
    paddingVertical: 18,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.18,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 5,
  },
  sTtQm9LxA7ZpTrL: {
    fontSize: 16,
    fontWeight: '600',
    color: '#BA0281',
    textAlign: 'center',
    marginBottom: 14,
  },
  sTbQm9LxA7ZpTrP: {
    fontSize: 16,
    fontWeight: '300',
    color: '#BA0281',
    textAlign: 'center',
    lineHeight: 24,
  },
  sHbQm9LxA7ZpTrD: {
    marginTop: 10,
    width: '100%',
    height: 70,
    borderRadius: 22,
    backgroundColor: '#DA39F2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
    borderWidth: 5,
    borderColor: '#F6BCFF',
  },
  sHtQm9LxA7ZpTrF: {
    color: '#F6BCFF',
    fontSize: 22,
    fontWeight: '700',
  },
  sHiQm9LxA7ZpTrW: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Bigrockstrdtlscrn;
