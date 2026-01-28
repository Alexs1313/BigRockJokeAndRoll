import {
  useIsFocused as _uIsF9qLmA7Xz,
  useNavigation as _uNavQ3mL8xZp,
  useRoute as _uRteP9xLmQ7a,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  useEffect as _uEfP3xLmQ9aZ,
  useMemo as _uMmA7xQpL9mZ,
  useState as _uStQ9mL3xAzP,
} from 'react';
import {
  Image as _iMgQ7xLmP9aZ,
  ImageBackground as _iBgQ9mL7xAzP,
  ScrollView as _sCvQ3mL9xAzP,
  Share as _sHrQ9xLmA7pZ,
  StyleSheet as _sSyQ7mL9xAzP,
  Text as _tXtQ9mL7xAzP,
  TouchableOpacity as _tOpQ3mL9xAzP,
  useWindowDimensions as _uWdQ9mL7xAzP,
  View as _vWqQ7mL9xAzP,
} from 'react-native';

const _0xBK = 'BIGROCK_SAVED_JOKES';

const Bigrocksvddtlscrn = () => {
  const _nVgQ9mL7xAzP = _uNavQ3mL8xZp();
  const _rTeQ7mL9xAzP = _uRteP9xLmQ7a();
  const _iFsQ9mL7xAzP = _uIsF9qLmA7Xz();
  const { height: _hGtQ9mL7xAzP } = _uWdQ9mL7xAzP();

  const _sIxQ9mL7xAzP = _rTeQ7mL9xAzP?.params?.startIndex ?? 0;

  const [_sVdQ9mL7xAzP, _sSVQ3mL9xAzP] = _uStQ9mL3xAzP([]);
  const [_jIxQ7mL9xAzP, _sJxQ9mL7xAzP] = _uStQ9mL3xAzP(0);

  const _cUrQ9mL7xAzP = _uMmA7xQpL9mZ(
    () => _sVdQ9mL7xAzP[_jIxQ7mL9xAzP] || null,
    [_sVdQ9mL7xAzP, _jIxQ7mL9xAzP],
  );

  const _lSjQ9mL7xAzP = async () => {
    try {
      const _rAwQ9mL7xAzP = await AsyncStorage.getItem(_0xBK);
      const _pRsQ3mL9xAzP = _rAwQ9mL7xAzP ? JSON.parse(_rAwQ9mL7xAzP) : [];

      _pRsQ3mL9xAzP.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      _sSVQ3mL9xAzP(_pRsQ3mL9xAzP);

      const _sFeQ9mL7xAzP = Math.max(
        0,
        Math.min(_sIxQ9mL7xAzP, Math.max(_pRsQ3mL9xAzP.length - 1, 0)),
      );
      _sJxQ9mL7xAzP(_sFeQ9mL7xAzP);
    } catch {
      _sSVQ3mL9xAzP([]);
      _sJxQ9mL7xAzP(0);
    }
  };

  _uEfP3xLmQ9aZ(() => {
    if (_iFsQ9mL7xAzP) _lSjQ9mL7xAzP();
  }, [_iFsQ9mL7xAzP]);

  const _gBkQ9mL7xAzP = () => _nVgQ9mL7xAzP.goBack();

  const _pRvQ9mL7xAzP = () => {
    if (_sVdQ9mL7xAzP.length <= 1) return;
    _sJxQ9mL7xAzP(i => (i - 1 + _sVdQ9mL7xAzP.length) % _sVdQ9mL7xAzP.length);
  };

  const _nXtQ9mL7xAzP = () => {
    if (_sVdQ9mL7xAzP.length <= 1) return;
    _sJxQ9mL7xAzP(i => (i + 1) % _sVdQ9mL7xAzP.length);
  };

  const _pStQ9mL7xAzP = async _nxQ9mL7xAzP => {
    _sSVQ3mL9xAzP(_nxQ9mL7xAzP);
    await AsyncStorage.setItem(_0xBK, JSON.stringify(_nxQ9mL7xAzP));
  };

  const _rMvQ9mL7xAzP = async () => {
    if (!_cUrQ9mL7xAzP) return;

    const _nxQ9mL7xAzP = _sVdQ9mL7xAzP.filter(x => x.id !== _cUrQ9mL7xAzP.id);
    await _pStQ9mL7xAzP(_nxQ9mL7xAzP);

    if (_nxQ9mL7xAzP.length === 0) {
      _nVgQ9mL7xAzP.goBack();
      return;
    }
    _sJxQ9mL7xAzP(i => Math.min(i, _nxQ9mL7xAzP.length - 1));
  };

  const _sHrQ9mL7xAzP = async () => {
    if (!_cUrQ9mL7xAzP?.text) return;

    _sHrQ9xLmA7pZ.share({
      message: _cUrQ9mL7xAzP.text,
    });
  };

  return (
    <_iBgQ9mL7xAzP
      source={require('../../assets/images/bigrockbg.png')}
      style={{ flex: 1 }}
    >
      <_vWqQ7mL9xAzP style={{ flex: 1 }}>
        <_vWqQ7mL9xAzP
          style={[
            _q$.CwQ9mL7xAzP,
            { minHeight: 130, paddingTop: _hGtQ9mL7xAzP * 0.06 },
          ]}
        >
          <_tOpQ3mL9xAzP
            activeOpacity={0.75}
            onPress={_gBkQ9mL7xAzP}
            style={_q$.QpL9mAx7ZrQp}
          >
            <_iMgQ7xLmP9aZ
              source={require('../../assets/images/bigrockback.png')}
            />
          </_tOpQ3mL9xAzP>

          <_tXtQ9mL7xAzP style={_q$.ZxQ9mL7pAzQm}>Saved</_tXtQ9mL7xAzP>
        </_vWqQ7mL9xAzP>

        <_sCvQ3mL9xAzP
          contentContainerStyle={_q$.LxQmA9pZ3QmL}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <_vWqQ7mL9xAzP
            style={[_q$.PqL9mAx7ZQm2, { marginTop: _hGtQ9mL7xAzP * 0.1 }]}
          >
            <_tXtQ9mL7xAzP style={_q$.mQ9pL7xAzQm2}>
              {_cUrQ9mL7xAzP?.text || 'No saved jokes yet.'}
            </_tXtQ9mL7xAzP>
          </_vWqQ7mL9xAzP>

          <_vWqQ7mL9xAzP style={_q$.aZQ9mL7xP2Qm}>
            <_tOpQ3mL9xAzP
              activeOpacity={0.75}
              onPress={_pRvQ9mL7xAzP}
              style={_q$.bQm9LxAzP2Qm}
              disabled={_sVdQ9mL7xAzP.length <= 1}
            >
              <_iMgQ7xLmP9aZ
                source={require('../../assets/images/bigrockrig.png')}
                style={_q$.cP2Qm9LxAzQm}
              />
            </_tOpQ3mL9xAzP>

            <_tOpQ3mL9xAzP
              activeOpacity={0.75}
              onPress={_rMvQ9mL7xAzP}
              style={_q$.dQm9LxAzP2Qm}
              disabled={!_cUrQ9mL7xAzP}
            >
              <_iMgQ7xLmP9aZ
                source={require('../../assets/images/bigrocksaved.png')}
                style={_q$.eQm9LxAzP2Qm}
              />
            </_tOpQ3mL9xAzP>

            <_tOpQ3mL9xAzP
              activeOpacity={0.75}
              onPress={_nXtQ9mL7xAzP}
              style={_q$.bQm9LxAzP2Qm}
              disabled={_sVdQ9mL7xAzP.length <= 1}
            >
              <_iMgQ7xLmP9aZ
                source={require('../../assets/images/bigrockleft.png')}
                style={_q$.cP2Qm9LxAzQm}
              />
            </_tOpQ3mL9xAzP>
          </_vWqQ7mL9xAzP>

          <_tOpQ3mL9xAzP
            activeOpacity={0.7}
            onPress={_sHrQ9mL7xAzP}
            style={_q$.fQm9LxAzP2Qm}
            disabled={!_cUrQ9mL7xAzP}
          >
            <_tXtQ9mL7xAzP style={_q$.gQm9LxAzP2Qm}>Share</_tXtQ9mL7xAzP>
            <_iMgQ7xLmP9aZ
              source={require('../../assets/images/bigrockshr.png')}
              style={_q$.hQm9LxAzP2Qm}
            />
          </_tOpQ3mL9xAzP>

          <_vWqQ7mL9xAzP style={{ height: 30 }} />
        </_sCvQ3mL9xAzP>
      </_vWqQ7mL9xAzP>
    </_iBgQ9mL7xAzP>
  );
};

const _q$ = _sSyQ7mL9xAzP.create({
  CwQ9mL7xAzP: {
    backgroundColor: '#F6BCFF',
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ZxQ9mL7pAzQm: {
    fontSize: 24,
    fontWeight: '700',
    color: '#DA39F2',
  },
  QpL9mAx7ZrQp: {
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
  LxQmA9pZ3QmL: {
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  PqL9mAx7ZQm2: {
    width: '90%',
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
    minHeight: 120,
    justifyContent: 'center',
  },
  mQ9pL7xAzQm2: {
    fontSize: 20,
    fontWeight: '500',
    color: '#BA0281',
    textAlign: 'center',
    lineHeight: 24,
  },
  fQm9LxAzP2Qm: {
    marginTop: 10,
    width: '90%',
    height: 70,
    borderRadius: 22,
    backgroundColor: '#DA39F2',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
    borderWidth: 5,
    borderColor: '#F6BCFF',
    alignSelf: 'center',
  },
  gQm9LxAzP2Qm: {
    color: '#F6BCFF',
    fontSize: 22,
    fontWeight: '700',
  },
  aZQ9mL7xP2Qm: {
    marginTop: 16,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    alignSelf: 'center',
  },
  bQm9LxAzP2Qm: {
    width: 70,
    height: 70,
    borderRadius: 22,
    backgroundColor: '#DA39F2',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cP2Qm9LxAzQm: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  dQm9LxAzP2Qm: {
    flex: 1,
    height: 70,
    borderRadius: 22,
    backgroundColor: '#F6BCFF',
    borderWidth: 5,
    borderColor: '#DA39F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eQm9LxAzP2Qm: {
    width: 26,
    height: 26,
    resizeMode: 'contain',
  },
  hQm9LxAzP2Qm: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default Bigrocksvddtlscrn;
