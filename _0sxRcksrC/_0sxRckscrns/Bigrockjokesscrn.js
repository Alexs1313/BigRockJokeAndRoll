import {
  useNavigation as _uNvQm9LxA7ZpTrVw8,
  useRoute as _uRtPq8LmZ7TrAxVw9,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useMemo, useState, useEffect } from 'react';
import {
  Image as _iMgQp9LmA7ZrT8VwX,
  ImageBackground as _iBgQm9LxA7ZpTrVw8,
  ScrollView as _sCvPq8LmZ7TrAxVw9,
  Share as _sHrQm9LxA7ZpTrVw8,
  StyleSheet as _sSyPq8LmZ7TrAxVw9,
  Text as _tXtQm9LxA7ZpTrVw8,
  TouchableOpacity as _tOpPq8LmZ7TrAxVw9,
  useWindowDimensions as _uWdQm9LxA7ZpTrVw8,
  View as _vWQp8LmZ7TrAxVw9,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BIGROCK_SAVED_KEY = 'BIGROCK_SAVED_JOKES';

const BIGROCK_JOKES = {
  everyday: [
    `I don’t need a life coach, I need someone to remind me why I walked into the kitchen.`,
    `My phone battery lasts longer than my motivation.`,
    `I started exercising… by stretching the truth about it.`,
    `Adulting is just Googling things and hoping for the best.`,
    `I thought growing up meant freedom. Turns out it means emails.`,
    `I’m not lazy, I’m in energy-saving mode.`,
    `I clean my house before guests come over so they know I can.`,
    `My wallet and I are in a toxic relationship.`,
    `I go to bed early so I can overthink longer.`,
    `I don’t procrastinate, I strategically delay success.`,
    `My job description is mostly “figure it out.”`,
    `I wake up tired just to stay consistent.`,
    `I thought multitasking meant doing many things badly — turns out I was right.`,
    `I buy healthy food and then emotionally ignore it.`,
    `Every plan sounds great until it involves leaving the house.`,
    `I’m great at starting things. Finishing is premium content.`,
    `My calendar and my energy level never agree.`,
    `I don’t lose things, I create mystery.`,
    `I’m on a diet — I just haven’t started it today.`,
    `Being an adult is saying “next week will be better” every week.`,
  ],
  relationships: [
    `Dating apps are just people saying “trust me” with photos.`,
    `Love is sharing food. Real love is not touching my fries.`,
    `My love language is “don’t ask me what’s wrong.”`,
    `Dating taught me that red flags look like normal flags when you’re lonely.`,
    `Relationships are about compromise — mostly me choosing food.`,
    `I don’t argue, I passionately explain why I’m right.`,
    `We’re not fighting, we’re just aggressively communicating.`,
    `Dating is wild. You meet someone and immediately decide your future trauma.`,
    `I like long walks… away from emotional responsibility.`,
    `Relationships are teamwork — I stress, you ignore it.`,
    `I don’t need space, I need silence.`,
    `My relationship status is “explaining myself.”`,
    `Love is blind. That’s how most couples survive.`,
    `Dating someone new feels like updating software with bugs.`,
    `I knew it was serious when we argued about groceries.`,
    `My type is “emotionally unavailable but charming.”`,
    `Relationships teach patience. Mostly mine.`,
    `Love means asking “are you mad?” and getting silence.`,
    `We don’t fight often, but when we do — it’s about nothing.`,
    `Dating is just two people pretending they’re normal.`,
  ],
  dark: [
    `I’m not okay, but I’m funny — so it balances out.`,
    `My sense of humor is a coping mechanism.`,
    `I laugh so I don’t scream.`,
    `Everything happens for a reason. Usually a bad one.`,
    `I trust the universe, but I double-check anyway.`,
    `Life has taught me nothing gently.`,
    `I’m fine. This is just my face now.`,
    `My optimism left without saying goodbye.`,
    `I don’t fear failure — I expect it.`,
    `Happiness is temporary, screenshots are forever.`,
    `I’m not dramatic, reality is just aggressive.`,
    `I plan for the worst so I’m rarely surprised.`,
    `I believe in karma, but it’s taking its time.`,
    `I don’t overthink, I relive everything.`,
    `My comfort zone is mild disappointment.`,
    `I tried positive thinking. It ghosted me.`,
    `I trust people until they talk.`,
    `Life builds character, but I’m overqualified.`,
    `I don’t need therapy, I need sleep and money.`,
    `If stress burned calories, I’d be unstoppable.`,
  ],
  oneliners: [
    `I’m not late — I arrive dramatically.`,
    `I have commitment issues with plans I made myself.`,
    `My brain has too many tabs open.`,
    `I don’t need advice, I need snacks.`,
    `I work well under pressure — emotionally collapsing pressure.`,
    `I don’t forget names, I just respect privacy.`,
    `My hobbies include starting things and abandoning them.`,
    `I’m calm — this is my loud calm.`,
    `I don’t hate mornings, I hate being awake.`,
    `I make jokes because silence is terrifying.`,
    `I’m not awkward, I’m just unscripted.`,
    `My confidence arrives after I leave the room.`,
    `I’m on time spiritually.`,
    `I have goals, I just don’t chase them aggressively.`,
    `I don’t have trust issues, I have experience.`,
    `I listen to my gut. It’s usually wrong.`,
    `I’m busy doing nothing, very seriously.`,
    `My personality is caffeine-based.`,
    `I don’t argue, I perform.`,
    `I’m funny because therapy is expensive.`,
  ],
};

const _mJdQm9LxA7ZpTrVw8 = (category, index) => `${category}_${index}`;

const Bigrockjokesscrn = () => {
  const _nvQp8LmZ7TrAxVw9 = _uNvQm9LxA7ZpTrVw8();
  const _rtQm9LxA7ZpTrVw8 = _uRtPq8LmZ7TrAxVw9();
  const { height: _hQp8LmZ7TrAxVw9 } = _uWdQm9LxA7ZpTrVw8();

  const _ctQm9LxA7ZpTrVw8 = _rtQm9LxA7ZpTrVw8?.params?.category || 'everyday';

  const _lsQp8LmZ7TrAxVw9 = useMemo(() => {
    return BIGROCK_JOKES[_ctQm9LxA7ZpTrVw8] || BIGROCK_JOKES.everyday;
  }, [_ctQm9LxA7ZpTrVw8]);

  const [_ixQm9LxA7ZpTrVw8, _sIxPq8LmZ7TrAxVw9] = useState(0);
  const [_svQp8LmZ7TrAxVw9, _sSvQm9LxA7ZpTrVw8] = useState([]);

  const _txQm9LxA7ZpTrVw8 = _lsQp8LmZ7TrAxVw9[_ixQm9LxA7ZpTrVw8] || '';
  const _idQp8LmZ7TrAxVw9 = _mJdQm9LxA7ZpTrVw8(
    _ctQm9LxA7ZpTrVw8,
    _ixQm9LxA7ZpTrVw8,
  );
  const _isQm9LxA7ZpTrVw8 = _svQp8LmZ7TrAxVw9.some(
    x => x.id === _idQp8LmZ7TrAxVw9,
  );

  useEffect(() => {
    (async () => {
      try {
        const _rwQm9LxA7ZpTrVw8 = await AsyncStorage.getItem(BIGROCK_SAVED_KEY);
        _sSvQm9LxA7ZpTrVw8(
          _rwQm9LxA7ZpTrVw8 ? JSON.parse(_rwQm9LxA7ZpTrVw8) : [],
        );
      } catch {
        _sSvQm9LxA7ZpTrVw8([]);
      }
    })();
  }, []);

  const _psQp8LmZ7TrAxVw9 = async next => {
    _sSvQm9LxA7ZpTrVw8(next);
    await AsyncStorage.setItem(BIGROCK_SAVED_KEY, JSON.stringify(next));
  };

  const _bkQm9LxA7ZpTrVw8 = () => _nvQp8LmZ7TrAxVw9.goBack();

  const _pvQp8LmZ7TrAxVw9 = () =>
    _sIxPq8LmZ7TrAxVw9(
      i => (i - 1 + _lsQp8LmZ7TrAxVw9.length) % _lsQp8LmZ7TrAxVw9.length,
    );

  const _nxQm9LxA7ZpTrVw8 = () =>
    _sIxPq8LmZ7TrAxVw9(i => (i + 1) % _lsQp8LmZ7TrAxVw9.length);

  const _tgQp8LmZ7TrAxVw9 = async () => {
    if (!_txQm9LxA7ZpTrVw8) return;

    if (_isQm9LxA7ZpTrVw8) {
      const next = _svQp8LmZ7TrAxVw9.filter(x => x.id !== _idQp8LmZ7TrAxVw9);
      await _psQp8LmZ7TrAxVw9(next);
      return;
    }

    const next = [
      ..._svQp8LmZ7TrAxVw9,
      {
        id: _idQp8LmZ7TrAxVw9,
        category: _ctQm9LxA7ZpTrVw8,
        text: _txQm9LxA7ZpTrVw8,
        createdAt: Date.now(),
      },
    ];
    await _psQp8LmZ7TrAxVw9(next);
  };

  const _shQm9LxA7ZpTrVw8 = async () => {
    await _sHrQm9LxA7ZpTrVw8.share({ message: _txQm9LxA7ZpTrVw8 });
  };

  return (
    <_iBgQm9LxA7ZpTrVw8
      source={require('../../assets/images/bigrockbg.png')}
      style={{ flex: 1 }}
    >
      <_sCvPq8LmZ7TrAxVw9
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <_vWQp8LmZ7TrAxVw9 style={_q$.mVq9LmZ7TrAxVw}>
          <_vWQp8LmZ7TrAxVw9
            style={[
              _q$.tPv9LmZ7TrAxVw,
              { minHeight: 130, paddingTop: _hQp8LmZ7TrAxVw9 * 0.06 },
            ]}
          >
            <_tOpPq8LmZ7TrAxVw9
              activeOpacity={0.75}
              onPress={_bkQm9LxA7ZpTrVw8}
              style={_q$.bKb9LmZ7TrAxVw}
            >
              <_iMgQp9LmA7ZrT8VwX
                source={require('../../assets/images/bigrockback.png')}
              />
            </_tOpPq8LmZ7TrAxVw9>

            <_tXtQm9LxA7ZpTrVw8 style={_q$.tTl9LmZ7TrAxVw}>
              Main menu
            </_tXtQm9LxA7ZpTrVw8>
          </_vWQp8LmZ7TrAxVw9>

          <_vWQp8LmZ7TrAxVw9 style={_q$.cNt9LmZ7TrAxVw}>
            <_tXtQm9LxA7ZpTrVw8
              style={[
                _q$.hEd9LmZ7TrAxVw,
                { marginBottom: _hQp8LmZ7TrAxVw9 * 0.06 },
              ]}
            >
              Here are some jokes you might like.
            </_tXtQm9LxA7ZpTrVw8>

            <_vWQp8LmZ7TrAxVw9 style={_q$.jWp9LmZ7TrAxVw}>
              <_vWQp8LmZ7TrAxVw9 style={_q$.jCd9LmZ7TrAxVw}>
                <_tXtQm9LxA7ZpTrVw8 style={_q$.jTx9LmZ7TrAxVw}>
                  {_txQm9LxA7ZpTrVw8}
                </_tXtQm9LxA7ZpTrVw8>
              </_vWQp8LmZ7TrAxVw9>
            </_vWQp8LmZ7TrAxVw9>

            <_vWQp8LmZ7TrAxVw9 style={_q$.cRw9LmZ7TrAxVw}>
              <_tOpPq8LmZ7TrAxVw9
                activeOpacity={0.78}
                onPress={_pvQp8LmZ7TrAxVw9}
                style={_q$.cBt9LmZ7TrAxVw}
              >
                <_iMgQp9LmA7ZrT8VwX
                  source={require('../../assets/images/bigrockrig.png')}
                />
              </_tOpPq8LmZ7TrAxVw9>

              <_tOpPq8LmZ7TrAxVw9
                activeOpacity={0.78}
                onPress={_tgQp8LmZ7TrAxVw9}
                style={[
                  _q$.sVb9LmZ7TrAxVw,
                  _isQm9LxA7ZpTrVw8 && {
                    borderColor: '#DA39F2',
                    backgroundColor: '#fff',
                  },
                ]}
              >
                {_isQm9LxA7ZpTrVw8 ? (
                  <_iMgQp9LmA7ZrT8VwX
                    source={require('../../assets/images/bigrocksaved.png')}
                  />
                ) : (
                  <_iMgQp9LmA7ZrT8VwX
                    source={require('../../assets/images/bigrocksave.png')}
                  />
                )}
              </_tOpPq8LmZ7TrAxVw9>

              <_tOpPq8LmZ7TrAxVw9
                activeOpacity={0.78}
                onPress={_nxQm9LxA7ZpTrVw8}
                style={_q$.cBt9LmZ7TrAxVw}
              >
                <_iMgQp9LmA7ZrT8VwX
                  source={require('../../assets/images/bigrockleft.png')}
                />
              </_tOpPq8LmZ7TrAxVw9>
            </_vWQp8LmZ7TrAxVw9>

            <_tOpPq8LmZ7TrAxVw9
              activeOpacity={0.78}
              onPress={_shQm9LxA7ZpTrVw8}
              style={_q$.sBr9LmZ7TrAxVw}
            >
              <LinearGradient
                colors={['#FD7DFC', '#D42DF0']}
                style={_q$.sBn9LmZ7TrAxVw}
              >
                <_tXtQm9LxA7ZpTrVw8 style={_q$.sTx9LmZ7TrAxVw}>
                  Share
                </_tXtQm9LxA7ZpTrVw8>
                <_iMgQp9LmA7ZrT8VwX
                  source={require('../../assets/images/bigrockshr.png')}
                  style={_q$.sIc9LmZ7TrAxVw}
                />
              </LinearGradient>
            </_tOpPq8LmZ7TrAxVw9>
          </_vWQp8LmZ7TrAxVw9>
        </_vWQp8LmZ7TrAxVw9>
      </_sCvPq8LmZ7TrAxVw9>
    </_iBgQm9LxA7ZpTrVw8>
  );
};

const _q$ = _sSyPq8LmZ7TrAxVw9.create({
  mVq9LmZ7TrAxVw: { flex: 1, paddingBottom: 30 },

  tPv9LmZ7TrAxVw: {
    backgroundColor: '#F6BCFF',
    paddingBottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  tTl9LmZ7TrAxVw: { fontSize: 24, fontWeight: '700', color: '#DA39F2' },

  bKb9LmZ7TrAxVw: {
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

  cNt9LmZ7TrAxVw: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 18,
    paddingHorizontal: 18,
  },

  hEd9LmZ7TrAxVw: {
    marginTop: 6,
    fontSize: 32,
    fontWeight: '900',
    color: '#FFFFFF',
    textAlign: 'center',
    textShadowColor: '#BA0281',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },

  jWp9LmZ7TrAxVw: {
    marginTop: 26,
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },

  jCd9LmZ7TrAxVw: {
    flex: 1,
    minHeight: 120,
    borderRadius: 30,
    backgroundColor: '#F6BCFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  jTx9LmZ7TrAxVw: {
    color: '#BA0281',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },

  cRw9LmZ7TrAxVw: {
    width: '90%',
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },

  cBt9LmZ7TrAxVw: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#DA39F2',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sVb9LmZ7TrAxVw: {
    flex: 1,
    height: 70,
    borderRadius: 20,
    backgroundColor: '#DA39F2',
    borderWidth: 5,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  sBr9LmZ7TrAxVw: {
    marginTop: 10,
    width: '90%',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    borderRadius: 20,
  },

  sBn9LmZ7TrAxVw: {
    height: 70,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 12,
  },

  sTx9LmZ7TrAxVw: { color: '#FFFFFF', fontSize: 22, fontWeight: '700' },

  sIc9LmZ7TrAxVw: { width: 28, height: 28, resizeMode: 'contain' },
});

export default Bigrockjokesscrn;
