import {
  useIsFocused as _uIsF9xQmL7A,
  useNavigation as _uNvQm9LxA7Z,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  useEffect as _uEfQ9mLxA7Z,
  useState as _uStQm9LxA7Z,
} from 'react';
import {
  ImageBackground as _iBgQ9mLxA7Z,
  ScrollView as _sCvQm9LxA7Z,
  StyleSheet as _sSyQ9mLxA7Z,
  Text as _tXtQm9LxA7Z,
  TouchableOpacity as _tOpQm9LxA7Z,
  useWindowDimensions as _uWdQm9LxA7Z,
  View as _vWQm9LxA7Z,
} from 'react-native';

const BIGROCK_SAVED_KEY = 'BIGROCK_SAVED_JOKES';

const Bigrocksvdscrn = () => {
  const _nVQm9LxA7Z = _uNvQm9LxA7Z();
  const _iFsQm9LxA7Z = _uIsF9xQmL7A();
  const { height: _hGtQm9LxA7Z } = _uWdQm9LxA7Z();

  const [_sVdQm9LxA7Z, _sSVQm9LxA7Z] = _uStQm9LxA7Z([]);

  const _lBdQm9LxA7Z = async () => {
    try {
      const _rAwQm9LxA7Z = await AsyncStorage.getItem(BIGROCK_SAVED_KEY);
      const _pRsQm9LxA7Z = _rAwQm9LxA7Z ? JSON.parse(_rAwQm9LxA7Z) : [];

      _pRsQm9LxA7Z.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      _sSVQm9LxA7Z(_pRsQm9LxA7Z);
    } catch {
      _sSVQm9LxA7Z([]);
    }
  };

  _uEfQ9mLxA7Z(() => {
    if (_iFsQm9LxA7Z) _lBdQm9LxA7Z();
  }, [_iFsQm9LxA7Z]);

  const _oPnQm9LxA7Z = _iDxQm9LxA7Z => {
    _nVQm9LxA7Z.navigate('Bigrocksvddtlscrn', {
      startIndex: _iDxQm9LxA7Z,
    });
  };

  return (
    <_iBgQ9mLxA7Z
      source={require('../../assets/images/bigrockbg.png')}
      style={{ flex: 1 }}
    >
      <_sCvQm9LxA7Z
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <_vWQm9LxA7Z style={_q$.mNvQm9LxA7Z}>
          <_vWQm9LxA7Z
            style={[
              _q$.tPvQm9LxA7Z,
              { minHeight: 130, paddingTop: _hGtQm9LxA7Z * 0.06 },
            ]}
          >
            <_tXtQm9LxA7Z style={_q$.tTlQm9LxA7Z}>Saved</_tXtQm9LxA7Z>
          </_vWQm9LxA7Z>

          <_vWQm9LxA7Z style={_q$.lStQm9LxA7Z}>
            {_sVdQm9LxA7Z.length === 0 ? (
              <_tXtQm9LxA7Z style={_q$.eMpQm9LxA7Z}>
                No saved jokes yet.
              </_tXtQm9LxA7Z>
            ) : (
              _sVdQm9LxA7Z.map((_cRdQm9LxA7Z, _iDxQm9LxA7Z) => (
                <_tOpQm9LxA7Z
                  key={_cRdQm9LxA7Z.id}
                  activeOpacity={0.8}
                  onPress={() => _oPnQm9LxA7Z(_iDxQm9LxA7Z)}
                  style={_q$.pLlQm9LxA7Z}
                >
                  <_tXtQm9LxA7Z style={_q$.pTxQm9LxA7Z}>
                    {_cRdQm9LxA7Z.text}
                  </_tXtQm9LxA7Z>
                </_tOpQm9LxA7Z>
              ))
            )}
          </_vWQm9LxA7Z>
        </_vWQm9LxA7Z>
      </_sCvQm9LxA7Z>
    </_iBgQ9mLxA7Z>
  );
};

const _q$ = _sSyQ9mLxA7Z.create({
  mNvQm9LxA7Z: { flex: 1, paddingBottom: 110 },
  tPvQm9LxA7Z: {
    backgroundColor: '#F6BCFF',
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tTlQm9LxA7Z: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DA39F2',
  },
  lStQm9LxA7Z: {
    flex: 1,
    paddingTop: 18,
    paddingBottom: 20,
    alignItems: 'center',
    gap: 16,
  },
  pLlQm9LxA7Z: {
    width: '90%',
    borderRadius: 40,
    backgroundColor: '#F6BCFF',
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pTxQm9LxA7Z: {
    color: '#BA0281',
    fontSize: 22,
    fontWeight: '800',
    textAlign: 'center',
    lineHeight: 30,
  },
  eMpQm9LxA7Z: {
    marginTop: 60,
    width: '86%',
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Bigrocksvdscrn;
