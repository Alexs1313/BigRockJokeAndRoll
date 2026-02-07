import React, { useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  ImageBackground,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  useIsFocused,
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';

const BIGROCK_SAVED_KEY = 'BIGROCK_SAVED_JOKES';

type JokeRollSavedJoke = {
  id: string;
  text: string;
  createdAt?: number;
  category?: string;
};

type RootStackParamListJokeRoll = {
  Bigrocksvddtlscrn: { startIndex?: number };
};

const Bigrocksvddtlscrn: React.FC = () => {
  const navigationJokeRoll =
    useNavigation<NavigationProp<RootStackParamListJokeRoll>>();
  const routeJokeRoll =
    useRoute<RouteProp<RootStackParamListJokeRoll, 'Bigrocksvddtlscrn'>>();
  const isFocusedJokeRoll = useIsFocused();

  const { height: heightJokeRoll } = useWindowDimensions();

  const startIndexJokeRoll = routeJokeRoll?.params?.startIndex ?? 0;

  const [savedJokesJokeRoll, setSavedJokesJokeRoll] = useState<
    JokeRollSavedJoke[]
  >([]);
  const [currentIndexJokeRoll, setCurrentIndexJokeRoll] = useState<number>(0);

  const currentJokeJokeRoll = useMemo(() => {
    return savedJokesJokeRoll[currentIndexJokeRoll] || null;
  }, [savedJokesJokeRoll, currentIndexJokeRoll]);

  const loadSavedJokesJokeRoll = async () => {
    try {
      const rawJokeRoll = await AsyncStorage.getItem(BIGROCK_SAVED_KEY);
      const parsedJokeRoll: JokeRollSavedJoke[] = rawJokeRoll
        ? JSON.parse(rawJokeRoll)
        : [];

      parsedJokeRoll.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setSavedJokesJokeRoll(parsedJokeRoll);

      const safeIndexJokeRoll = Math.max(
        0,
        Math.min(startIndexJokeRoll, Math.max(parsedJokeRoll.length - 1, 0)),
      );
      setCurrentIndexJokeRoll(safeIndexJokeRoll);
    } catch {
      setSavedJokesJokeRoll([]);
      setCurrentIndexJokeRoll(0);
    }
  };

  useEffect(() => {
    if (isFocusedJokeRoll) loadSavedJokesJokeRoll();
  }, [isFocusedJokeRoll]);

  const handleBackJokeRoll = () => navigationJokeRoll.goBack();

  const handlePrevJokeRoll = () => {
    if (savedJokesJokeRoll.length <= 1) return;
    setCurrentIndexJokeRoll(
      indexJokeRoll =>
        (indexJokeRoll - 1 + savedJokesJokeRoll.length) %
        savedJokesJokeRoll.length,
    );
  };

  const handleNextJokeRoll = () => {
    if (savedJokesJokeRoll.length <= 1) return;
    setCurrentIndexJokeRoll(
      indexJokeRoll => (indexJokeRoll + 1) % savedJokesJokeRoll.length,
    );
  };

  const persistSavedJokesJokeRoll = async (
    nextJokeRoll: JokeRollSavedJoke[],
  ) => {
    setSavedJokesJokeRoll(nextJokeRoll);
    await AsyncStorage.setItem(BIGROCK_SAVED_KEY, JSON.stringify(nextJokeRoll));
  };

  const handleRemoveJokeRoll = async () => {
    if (!currentJokeJokeRoll) return;

    const nextJokeRoll = savedJokesJokeRoll.filter(
      itemJokeRoll => itemJokeRoll.id !== currentJokeJokeRoll.id,
    );
    await persistSavedJokesJokeRoll(nextJokeRoll);

    if (nextJokeRoll.length === 0) {
      navigationJokeRoll.goBack();
      return;
    }

    setCurrentIndexJokeRoll(indexJokeRoll =>
      Math.min(indexJokeRoll, nextJokeRoll.length - 1),
    );
  };

  const handleShareJokeRoll = async () => {
    if (!currentJokeJokeRoll?.text) return;
    await Share.share({ message: currentJokeJokeRoll.text });
  };

  const isControlsDisabledJokeRoll = savedJokesJokeRoll.length <= 1;
  const isActionDisabledJokeRoll = !currentJokeJokeRoll;

  return (
    <ImageBackground
      source={require('../../assets/images/bigrockbg.png')}
      style={jokeRollBg}
    >
      <View style={jokeRollFull}>
        <View
          style={[
            jokeRollTopWrap,
            { minHeight: 130, paddingTop: heightJokeRoll * 0.06 },
          ]}
        >
          <TouchableOpacity
            activeOpacity={0.75}
            onPress={handleBackJokeRoll}
            style={jokeRollBackBtn}
          >
            <Image source={require('../../assets/images/bigrockback.png')} />
          </TouchableOpacity>

          <Text style={jokeRollTopTitle}>Saved</Text>
        </View>

        <ScrollView
          contentContainerStyle={jokeRollScrollPad}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={[jokeRollCard, { marginTop: heightJokeRoll * 0.1 }]}>
            <Text style={jokeRollCardText}>
              {currentJokeJokeRoll?.text || 'No saved jokes yet.'}
            </Text>
          </View>

          <View style={jokeRollControlsRow}>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={handlePrevJokeRoll}
              style={jokeRollControlBtn}
              disabled={isControlsDisabledJokeRoll}
            >
              <Image
                source={require('../../assets/images/bigrockrig.png')}
                style={jokeRollIconSmall}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={handleRemoveJokeRoll}
              style={jokeRollRemoveBtn}
              disabled={isActionDisabledJokeRoll}
            >
              <Image
                source={require('../../assets/images/bigrocksaved.png')}
                style={jokeRollIconSmall}
              />
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.75}
              onPress={handleNextJokeRoll}
              style={jokeRollControlBtn}
              disabled={isControlsDisabledJokeRoll}
            >
              <Image
                source={require('../../assets/images/bigrockleft.png')}
                style={jokeRollIconSmall}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleShareJokeRoll}
            style={jokeRollShareBtn}
            disabled={isActionDisabledJokeRoll}
          >
            <Text style={jokeRollShareText}>Share</Text>
            <Image
              source={require('../../assets/images/bigrockshr.png')}
              style={jokeRollShareIcon}
            />
          </TouchableOpacity>

          <View style={{ height: 30 }} />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

/** styles as objects */
const jokeRollBg = { flex: 1 };

const jokeRollFull = { flex: 1 };

const jokeRollTopWrap = {
  backgroundColor: '#F6BCFF',
  paddingBottom: 18,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollTopTitle = {
  fontSize: 24,
  fontWeight: '700' as const,
  color: '#DA39F2',
};

const jokeRollBackBtn = {
  position: 'absolute' as const,
  left: 18,
  bottom: 14,
  width: 70,
  height: 70,
  borderRadius: 20,
  backgroundColor: '#FFFFFF',
  borderWidth: 5,
  borderColor: '#DA39F2',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollScrollPad = {
  paddingTop: 30,
  paddingHorizontal: 25,
};

const jokeRollCard = {
  width: '90%',
  backgroundColor: '#F6BCFF',
  borderRadius: 30,
  paddingHorizontal: 18,
  paddingVertical: 18,
  alignSelf: 'center' as const,
  shadowColor: '#000',
  shadowOpacity: 0.18,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 6 },
  elevation: 5,
  minHeight: 120,
  justifyContent: 'center' as const,
};

const jokeRollCardText = {
  fontSize: 20,
  fontWeight: '500' as const,
  color: '#BA0281',
  textAlign: 'center' as const,
  lineHeight: 24,
};

const jokeRollControlsRow = {
  marginTop: 16,
  width: '90%',
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  gap: 14,
  alignSelf: 'center' as const,
};

const jokeRollControlBtn = {
  width: 70,
  height: 70,
  borderRadius: 22,
  backgroundColor: '#DA39F2',
  borderWidth: 5,
  borderColor: '#FFFFFF',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollIconSmall = {
  width: 26,
  height: 26,
  resizeMode: 'contain' as const,
};

const jokeRollRemoveBtn = {
  flex: 1,
  height: 70,
  borderRadius: 22,
  backgroundColor: '#F6BCFF',
  borderWidth: 5,
  borderColor: '#DA39F2',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollShareBtn = {
  marginTop: 10,
  width: '90%',
  height: 70,
  borderRadius: 22,
  backgroundColor: '#DA39F2',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  flexDirection: 'row' as const,
  gap: 12,
  borderWidth: 5,
  borderColor: '#F6BCFF',
  alignSelf: 'center' as const,
};

const jokeRollShareText = {
  color: '#F6BCFF',
  fontSize: 22,
  fontWeight: '700' as const,
};

const jokeRollShareIcon = {
  width: 24,
  height: 24,
  resizeMode: 'contain' as const,
};

export default Bigrocksvddtlscrn;
