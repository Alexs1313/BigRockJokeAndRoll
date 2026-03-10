import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {
  useIsFocused,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';

const BIGROCK_SAVED_KEY = 'BIGROCK_SAVED_JOKES';

type JokeRollSavedJoke = {
  id: string;
  text: string;
  createdAt?: number;
  category?: string;
};

type RootStackParamListJokeRoll = {
  Bigrocksvdscrn: undefined;
  Bigrocksvddtlscrn: { startIndex?: number };
};

const Bigrocksvdscrn: React.FC = () => {
  const navigationJokeRoll =
    useNavigation<NavigationProp<RootStackParamListJokeRoll>>();
  const isFocusedJokeRoll = useIsFocused();
  const { height: heightJokeRoll } = useWindowDimensions();

  const [savedJokesJokeRoll, setSavedJokesJokeRoll] = useState<
    JokeRollSavedJoke[]
  >([]);

  const loadSavedJokesJokeRoll = async () => {
    try {
      const rawJokeRoll = await AsyncStorage.getItem(BIGROCK_SAVED_KEY);
      const parsedJokeRoll: JokeRollSavedJoke[] = rawJokeRoll
        ? JSON.parse(rawJokeRoll)
        : [];

      parsedJokeRoll.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      setSavedJokesJokeRoll(parsedJokeRoll);
    } catch {
      setSavedJokesJokeRoll([]);
    }
  };

  useEffect(() => {
    if (isFocusedJokeRoll) loadSavedJokesJokeRoll();
  }, [isFocusedJokeRoll]);

  const openSavedDetailsJokeRoll = (indexJokeRoll: number) => {
    navigationJokeRoll.navigate('Bigrocksvddtlscrn', {
      startIndex: indexJokeRoll,
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bigrockbg.png')}
      style={jokeRollBg}
    >
      <ScrollView
        contentContainerStyle={jokeRollScrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <View style={jokeRollMainWrap}>
          <View
            style={[
              jokeRollTopWrap,
              { minHeight: 130, paddingTop: heightJokeRoll * 0.06 },
            ]}
          >
            <Text style={jokeRollTopTitle}>Saved</Text>
          </View>

          <View style={jokeRollListWrap}>
            {savedJokesJokeRoll.length === 0 ? (
              <>
                <Text style={jokeRollEmptyText}>
                  You don't have any saved stories yet.
                </Text>
              </>
            ) : (
              savedJokesJokeRoll.map((itemJokeRoll, indexJokeRoll) => (
                <TouchableOpacity
                  key={itemJokeRoll.id}
                  activeOpacity={0.8}
                  onPress={() => openSavedDetailsJokeRoll(indexJokeRoll)}
                  style={jokeRollPill}
                >
                  <Text style={jokeRollPillText}>{itemJokeRoll.text}</Text>
                </TouchableOpacity>
              ))
            )}
          </View>
        </View>

        {savedJokesJokeRoll.length === 0 && (
          <Image
            source={require('../../assets/images/bigjokelemptyjokes.png')}
            style={{}}
          />
        )}
      </ScrollView>
    </ImageBackground>
  );
};

/** styles as objects */
const jokeRollBg = { flex: 1 };

const jokeRollScrollContent = { flexGrow: 1 };

const jokeRollMainWrap = { flex: 1, paddingBottom: 110 };

const jokeRollTopWrap = {
  backgroundColor: '#2A0030',
  paddingBottom: 18,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
};

const jokeRollTopTitle = {
  fontSize: 24,
  fontWeight: '700' as const,
  color: '#fff',
};

const jokeRollListWrap = {
  flex: 1,
  paddingTop: 18,
  paddingBottom: 20,
  alignItems: 'center' as const,
  gap: 16,
};

const jokeRollPill = {
  width: '90%',
  borderRadius: 40,
  backgroundColor: '#671074',
  paddingVertical: 20,
  paddingHorizontal: 18,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollPillText = {
  color: '#fff',
  fontSize: 22,
  fontWeight: '800' as const,
  textAlign: 'center' as const,
  lineHeight: 30,
};

const jokeRollEmptyText = {
  marginTop: 60,
  width: '70%',
  textAlign: 'center' as const,
  color: '#FFFFFF',
  fontSize: 24,
  fontWeight: '700' as const,
};

export default Bigrocksvdscrn;
