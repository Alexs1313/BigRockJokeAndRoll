import {
  useFocusEffect as _uFE_7qPzLxVnT3mA9rKb,
  useNavigation as _uNV_9xQmTrL7pZaVnK4s,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ImageBackground as _iBg_4pLxQnZ8tVmR2aKs,
  ScrollView as _sCv_6mQpZtLxV8nR3aKs,
  StyleSheet as _sSy_8tVmQpLxZ7nR3aKs,
  Text as _tXt_3aKsQpLxVnZ8tRm2,
  TouchableOpacity as _tOp_7nR3aKsQpLxV8tZm,
  useWindowDimensions as _uWD_2Rm9xQpLzT7nVaKs,
  Vibration as _vBR_5pZtLxQnV8aKsR3m,
  View as _vW_9tVmQpLxZ7nR3aKs,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useStore as _uST_8nR3aKsQpLxV9tZm } from '../_0sxRckstrG/Bigrockcnstscntxt';
import Sound from 'react-native-sound';
import { ALL_QUESTIONS as _aLQ_3pZtLxQnV8aKsR9m } from '../_0sxRckdta/bigrockquizqst';

const BIGROCK_QUIZ_KEY = 'BIGROCK_LAST_QUIZ_RESULT';

const _pkB5_9mZ2tVmQpLxR7nVaKs = arr => {
  const _cp_7nR3aKsQpLxV8tZm = [...arr];
  const _ot_4pLxQnZ8tVmR2aKs = [];
  while (_ot_4pLxQnZ8tVmR2aKs.length < 5 && _cp_7nR3aKsQpLxV8tZm.length) {
    const _i_6mQpZtLxV8nR3aKs = Math.floor(
      Math.random() * _cp_7nR3aKsQpLxV8tZm.length,
    );
    _ot_4pLxQnZ8tVmR2aKs.push(
      _cp_7nR3aKsQpLxV8tZm.splice(_i_6mQpZtLxV8nR3aKs, 1)[0],
    );
  }
  return _ot_4pLxQnZ8tVmR2aKs;
};

const _mpCt_2Rm9xQpLzT7nVaKs = key => {
  if (key === 'A') return { id: 'everyday', title: 'Everyday Life Jokes' };
  if (key === 'B')
    return { id: 'relationships', title: 'Relationships & Dating Jokes' };
  if (key === 'C') return { id: 'dark', title: 'Dark (But Light) Humor' };
  return { id: 'oneliners', title: 'Stand-Up Friendly One-Liners' };
};

const Bigrockhmscrn = () => {
  const _nv_9xQmTrL7pZaVnK4s = _uNV_9xQmTrL7pZaVnK4s();
  const { height: _ht_2Rm9xQpLzT7nVaKs } = _uWD_2Rm9xQpLzT7nVaKs();

  const _qz_6mQpZtLxV8nR3aKs = useMemo(
    () => _pkB5_9mZ2tVmQpLxR7nVaKs(_aLQ_3pZtLxQnV8aKsR9m),
    [],
  );
  const [_st_4pLxQnZ8tVmR2aKs, _sSt_7nR3aKsQpLxV8tZm] = useState(0);
  const [_an_3aKsQpLxVnZ8tRm2, _sAn_9tVmQpLxZ7nR3aKs] = useState({});

  const {
    bigRockBgMusic,
    setBigRockBgMusic,
    setBigRockVibration,
    bigRockVibration,
  } = _uST_8nR3aKsQpLxV9tZm();

  const [_ms_1VaKsQpLxT7nR9mZ2, _sMs_6tVmQpLxZ7nR3aKs] = useState(0);
  const [_sd_8tVmQpLxZ7nR3aKs, _sSd_4pLxQnZ8tVmR2aKs] = useState(null);

  const _tr_7nR3aKsQpLxV8tZm = [
    'fun-comedy-126302.mp3',
    'fun-comedy-126302.mp3',
  ];

  _uFE_7qPzLxVnT3mA9rKb(
    useCallback(() => {
      _ldSt_2Rm9xQpLzT7nVaKs();
    }, []),
  );

  const _ldSt_2Rm9xQpLzT7nVaKs = async () => {
    try {
      const _vb_9tVmQpLxZ7nR3aKs = await AsyncStorage.getItem(
        'toggleVibrations',
      );
      const _sb_4pLxQnZ8tVmR2aKs = await AsyncStorage.getItem('toggleSound');

      if (_vb_9tVmQpLxZ7nR3aKs !== null) {
        JSON.parse(_vb_9tVmQpLxZ7nR3aKs);
      }
      setBigRockVibration(JSON.parse(_vb_9tVmQpLxZ7nR3aKs));
      if (_sb_4pLxQnZ8tVmR2aKs !== null) {
        setBigRockBgMusic(JSON.parse(_sb_4pLxQnZ8tVmR2aKs));
      }
    } catch (error) {
      console.log('Errorget settings', error);
    }
  };

  useEffect(() => {
    _plMs_3aKsQpLxVnZ8tRm2(_ms_1VaKsQpLxT7nR9mZ2);

    return () => {
      if (_sd_8tVmQpLxZ7nR3aKs) {
        _sd_8tVmQpLxZ7nR3aKs.stop(() => {
          _sd_8tVmQpLxZ7nR3aKs.release();
        });
      }
    };
  }, [_ms_1VaKsQpLxT7nR9mZ2]);

  const _plMs_3aKsQpLxVnZ8tRm2 = index => {
    if (_sd_8tVmQpLxZ7nR3aKs) {
      _sd_8tVmQpLxZ7nR3aKs.stop(() => {
        _sd_8tVmQpLxZ7nR3aKs.release();
      });
    }

    const _pth_7qPzLxVnT3mA9rKb = _tr_7nR3aKsQpLxV8tZm[index];

    const _nw_9xQmTrL7pZaVnK4s = new Sound(
      _pth_7qPzLxVnT3mA9rKb,
      Sound.MAIN_BUNDLE,
      error => {
        if (error) {
          console.log('Error', error);
          return;
        }

        _nw_9xQmTrL7pZaVnK4s.play(success => {
          if (success) {
            _sMs_6tVmQpLxZ7nR3aKs(
              prev => (prev + 1) % _tr_7nR3aKsQpLxV8tZm.length,
            );
          } else {
            console.log('Error');
          }
        });

        _sSd_4pLxQnZ8tVmR2aKs(_nw_9xQmTrL7pZaVnK4s);
      },
    );
  };

  useEffect(() => {
    const _svVol_6mQpZtLxV8nR3aKs = async () => {
      try {
        const _raw_2Rm9xQpLzT7nVaKs = await AsyncStorage.getItem('toggleSound');
        const _on_7nR3aKsQpLxV8tZm = JSON.parse(_raw_2Rm9xQpLzT7nVaKs);

        setBigRockBgMusic(_on_7nR3aKsQpLxV8tZm);
        if (_sd_8tVmQpLxZ7nR3aKs) {
          _sd_8tVmQpLxZ7nR3aKs.setVolume(_on_7nR3aKsQpLxV8tZm ? 1 : 0);
        }
      } catch (error) {
        console.error('Error =>', error);
      }
    };

    _svVol_6mQpZtLxV8nR3aKs();
  }, [_sd_8tVmQpLxZ7nR3aKs]);

  useEffect(() => {
    if (_sd_8tVmQpLxZ7nR3aKs) {
      _sd_8tVmQpLxZ7nR3aKs.setVolume(bigRockBgMusic ? 1 : 0);
    }
  }, [bigRockBgMusic]);

  const _cr_4pLxQnZ8tVmR2aKs = _qz_6mQpZtLxV8nR3aKs[_st_4pLxQnZ8tVmR2aKs];
  const _sl_3aKsQpLxVnZ8tRm2 = _an_3aKsQpLxVnZ8tRm2[_st_4pLxQnZ8tVmR2aKs];

  const _pk_9tVmQpLxZ7nR3aKs = k => {
    _sAn_9tVmQpLxZ7nR3aKs(p => ({ ...p, [_st_4pLxQnZ8tVmR2aKs]: k }));
  };

  const _clRs_7qPzLxVnT3mA9rKb = () => {
    const _tl_6mQpZtLxV8nR3aKs = { A: 0, B: 0, C: 0, D: 0 };
    Object.values(_an_3aKsQpLxVnZ8tRm2).forEach(k => {
      if (_tl_6mQpZtLxV8nR3aKs[k] !== undefined) _tl_6mQpZtLxV8nR3aKs[k] += 1;
    });

    let _wn_2Rm9xQpLzT7nVaKs = 'A';
    let _mx_7nR3aKsQpLxV8tZm = -1;

    ['A', 'B', 'C', 'D'].forEach(k => {
      if (_tl_6mQpZtLxV8nR3aKs[k] > _mx_7nR3aKsQpLxV8tZm) {
        _mx_7nR3aKsQpLxV8tZm = _tl_6mQpZtLxV8nR3aKs[k];
        _wn_2Rm9xQpLzT7nVaKs = k;
      }
    });

    const _mxKs_4pLxQnZ8tVmR2aKs = Object.keys(_tl_6mQpZtLxV8nR3aKs).filter(
      k => _tl_6mQpZtLxV8nR3aKs[k] === _mx_7nR3aKsQpLxV8tZm,
    );

    if (_mxKs_4pLxQnZ8tVmR2aKs.length > 1) {
      const _ls_9tVmQpLxZ7nR3aKs =
        _an_3aKsQpLxVnZ8tRm2[4] ||
        _an_3aKsQpLxVnZ8tRm2[3] ||
        _an_3aKsQpLxVnZ8tRm2[2] ||
        _an_3aKsQpLxVnZ8tRm2[1] ||
        _an_3aKsQpLxVnZ8tRm2[0];

      if (
        _ls_9tVmQpLxZ7nR3aKs &&
        _mxKs_4pLxQnZ8tVmR2aKs.includes(_ls_9tVmQpLxZ7nR3aKs)
      ) {
        _wn_2Rm9xQpLzT7nVaKs = _ls_9tVmQpLxZ7nR3aKs;
      }
    }

    return _mpCt_2Rm9xQpLzT7nVaKs(_wn_2Rm9xQpLzT7nVaKs);
  };

  const _nx_6tVmQpLxZ7nR3aKs = async () => {
    if (!_sl_3aKsQpLxVnZ8tRm2) return;

    if (bigRockVibration) {
      _vBR_5pZtLxQnV8aKsR3m.vibrate(250);
    }

    if (_st_4pLxQnZ8tVmR2aKs < 4) {
      _sSt_7nR3aKsQpLxV8tZm(s => s + 1);
      return;
    }

    const _rs_7qPzLxVnT3mA9rKb = _clRs_7qPzLxVnT3mA9rKb();
    await AsyncStorage.setItem(
      BIGROCK_QUIZ_KEY,
      JSON.stringify({
        result: _rs_7qPzLxVnT3mA9rKb,
        answers: _an_3aKsQpLxVnZ8tRm2,
        createdAt: Date.now(),
      }),
    );

    _sSt_7nR3aKsQpLxV8tZm(0);
    _sAn_9tVmQpLxZ7nR3aKs({});

    _nv_9xQmTrL7pZaVnK4s.navigate('Bigrockjokesscrn', {
      category: _rs_7qPzLxVnT3mA9rKb.id,
      categoryTitle: _rs_7qPzLxVnT3mA9rKb.title,
    });
  };

  const _dn_4pLxQnZ8tVmR2aKs = !!_sl_3aKsQpLxVnZ8tRm2;

  return (
    <_iBg_4pLxQnZ8tVmR2aKs
      source={require('../../assets/images/bigrockbg.png')}
      style={{ flex: 1 }}
    >
      <_sCv_6mQpZtLxV8nR3aKs
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <_vW_9tVmQpLxZ7nR3aKs style={_q$.mV_7qPzLxVnT3mA9rKb}>
          <_vW_9tVmQpLxZ7nR3aKs
            style={[
              _q$.tV_9xQmTrL7pZaVnK4s,
              { minHeight: 130, paddingTop: _ht_2Rm9xQpLzT7nVaKs * 0.06 },
            ]}
          >
            <_tXt_3aKsQpLxVnZ8tRm2 style={_q$.tT_6mQpZtLxV8nR3aKs}>
              Main menu
            </_tXt_3aKsQpLxVnZ8tRm2>
          </_vW_9tVmQpLxZ7nR3aKs>

          <_vW_9tVmQpLxZ7nR3aKs style={_q$.cN_2Rm9xQpLzT7nVaKs}>
            <_tXt_3aKsQpLxVnZ8tRm2 style={_q$.sT_4pLxQnZ8tVmR2aKs}>{`${
              _st_4pLxQnZ8tVmR2aKs + 1
            }/5`}</_tXt_3aKsQpLxVnZ8tRm2>

            <_vW_9tVmQpLxZ7nR3aKs style={_q$.cD_7nR3aKsQpLxV8tZm}>
              <_tXt_3aKsQpLxVnZ8tRm2 style={_q$.qT_9tVmQpLxZ7nR3aKs}>
                {_cr_4pLxQnZ8tVmR2aKs?.q || ''}
              </_tXt_3aKsQpLxVnZ8tRm2>

              <_vW_9tVmQpLxZ7nR3aKs style={_q$.gD_6tVmQpLxZ7nR3aKs}>
                {_cr_4pLxQnZ8tVmR2aKs?.a?.map(it => {
                  const _ac_7qPzLxVnT3mA9rKb = _sl_3aKsQpLxVnZ8tRm2 === it.key;

                  return (
                    <_tOp_7nR3aKsQpLxV8tZm
                      key={it.key}
                      activeOpacity={0.78}
                      onPress={() => _pk_9tVmQpLxZ7nR3aKs(it.key)}
                      style={[
                        _q$.aB_9xQmTrL7pZaVnK4s,
                        _ac_7qPzLxVnT3mA9rKb && _q$.aBA_6mQpZtLxV8nR3aKs,
                      ]}
                    >
                      <_tXt_3aKsQpLxVnZ8tRm2
                        style={[
                          _q$.aTx_2Rm9xQpLzT7nVaKs,
                          _ac_7qPzLxVnT3mA9rKb && _q$.aTxA_4pLxQnZ8tVmR2aKs,
                        ]}
                      >
                        {it.text}
                      </_tXt_3aKsQpLxVnZ8tRm2>
                    </_tOp_7nR3aKsQpLxV8tZm>
                  );
                })}
              </_vW_9tVmQpLxZ7nR3aKs>
            </_vW_9tVmQpLxZ7nR3aKs>

            <_vW_9tVmQpLxZ7nR3aKs
              style={{
                marginTop: _ht_2Rm9xQpLzT7nVaKs * 0.1,
                alignItems: 'center',
              }}
            >
              <_tOp_7nR3aKsQpLxV8tZm
                activeOpacity={0.8}
                onPress={_nx_6tVmQpLxZ7nR3aKs}
                disabled={!_dn_4pLxQnZ8tVmR2aKs}
                style={[
                  _q$.sBr_7qPzLxVnT3mA9rKb,
                  !_dn_4pLxQnZ8tVmR2aKs && { opacity: 0.8 },
                ]}
              >
                <LinearGradient
                  colors={['#FFFFFF', '#FFFFFF']}
                  style={_q$.sBn_9xQmTrL7pZaVnK4s}
                >
                  <_tXt_3aKsQpLxVnZ8tRm2 style={_q$.sTx_6mQpZtLxV8nR3aKs}>
                    {_st_4pLxQnZ8tVmR2aKs === 4 ? 'Start the Show' : 'Next'}
                  </_tXt_3aKsQpLxVnZ8tRm2>
                </LinearGradient>
              </_tOp_7nR3aKsQpLxV8tZm>
            </_vW_9tVmQpLxZ7nR3aKs>
          </_vW_9tVmQpLxZ7nR3aKs>
        </_vW_9tVmQpLxZ7nR3aKs>
      </_sCv_6mQpZtLxV8nR3aKs>
    </_iBg_4pLxQnZ8tVmR2aKs>
  );
};

const _q$ = _sSy_8tVmQpLxZ7nR3aKs.create({
  mV_7qPzLxVnT3mA9rKb: { flex: 1, paddingBottom: 90 },

  tV_9xQmTrL7pZaVnK4s: {
    backgroundColor: '#F6BCFF',
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tT_6mQpZtLxV8nR3aKs: { fontSize: 24, fontWeight: '700', color: '#DA39F2' },

  cN_2Rm9xQpLzT7nVaKs: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 9,
    paddingHorizontal: 18,
  },

  sT_4pLxQnZ8tVmR2aKs: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: 30,
  },

  cD_7nR3aKsQpLxV8tZm: {
    width: '90%',
    backgroundColor: '#F6BCFF',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 18,
    alignItems: 'center',
    paddingTop: 34,
  },

  qT_9tVmQpLxZ7nR3aKs: {
    fontSize: 20,
    fontWeight: '500',
    color: '#BA0281',
    textAlign: 'center',
    marginBottom: 28,
    lineHeight: 32,
  },

  gD_6tVmQpLxZ7nR3aKs: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    justifyContent: 'space-between',
  },

  aB_9xQmTrL7pZaVnK4s: {
    width: '48%',
    minHeight: 56,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    paddingVertical: 4,
  },

  aBA_6mQpZtLxV8nR3aKs: {
    borderColor: '#DA39F2',
    borderWidth: 5,
  },

  aTx_2Rm9xQpLzT7nVaKs: {
    fontSize: 15,
    fontWeight: '400',
    color: '#DA39F2',
    textAlign: 'center',
  },

  aTxA_4pLxQnZ8tVmR2aKs: { color: '#BA0281' },

  sBr_7qPzLxVnT3mA9rKb: {
    marginTop: 18,
    width: 236,
    borderWidth: 5,
    borderColor: '#DA39F2',
    borderRadius: 20,
  },

  sBn_9xQmTrL7pZaVnK4s: {
    height: 70,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  sTx_6mQpZtLxV8nR3aKs: { color: '#DA39F2', fontSize: 20, fontWeight: '700' },
});

export default Bigrockhmscrn;
