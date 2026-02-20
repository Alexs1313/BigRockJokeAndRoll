import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Vibration,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useFocusEffect,
  useNavigation,
  NavigationProp,
} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Sound from 'react-native-sound';

import { useStore } from '../store/Bigrockcnstscntxt';
import { ALL_QUESTIONS } from '../data/bigrockquizqst';

const ASYNC_Key = 'BIGROCK_LAST_QUIZ_RESULT';

type RootStackParamListJokeRoll = {
  Bigrockjokesscrn: { category: string; categoryTitle: string };
};

type answeroptions = 'A' | 'B' | 'C' | 'D';

type JokeRollQuestion = {
  q: string;
  a: { key: answeroptions; text: string }[];
};

type JokeRollResult = { id: string; title: string };

const pick5JokeRoll = <T,>(arr: T[]) => {
  const copyJokeRoll = [...arr];
  const outJokeRoll: T[] = [];

  while (outJokeRoll.length < 5 && copyJokeRoll.length) {
    const indexJokeRoll = Math.floor(Math.random() * copyJokeRoll.length);
    outJokeRoll.push(copyJokeRoll.splice(indexJokeRoll, 1)[0]);
  }

  return outJokeRoll;
};

const mapCategoryJokeRoll = (keyJokeRoll: answeroptions): JokeRollResult => {
  if (keyJokeRoll === 'A')
    return { id: 'everyday', title: 'Everyday Life Jokes' };
  if (keyJokeRoll === 'B')
    return { id: 'relationships', title: 'Relationships & Dating Jokes' };
  if (keyJokeRoll === 'C')
    return { id: 'dark', title: 'Dark (But Light) Humor' };
  return { id: 'oneliners', title: 'Stand-Up Friendly One-Liners' };
};

const JokeRollHomeScreen: React.FC = () => {
  const navigationJokeRoll =
    useNavigation<NavigationProp<RootStackParamListJokeRoll>>();

  const { height: heightJokeRoll } = useWindowDimensions();

  const questionsJokeRoll = useMemo(
    () => pick5JokeRoll(ALL_QUESTIONS as JokeRollQuestion[]),
    [],
  );

  const [stepJokeRoll, setStepJokeRoll] = useState<number>(0);
  const [answersJokeRoll, setAnswersJokeRoll] = useState<
    Record<number, answeroptions>
  >({});

  const [musicIndexJokeRoll, setMusicIndexJokeRoll] = useState<number>(0);
  const [soundJokeRoll, setSoundJokeRoll] = useState<Sound | null>(null);

  const tracksJokeRoll = ['fun-comedy-126302.mp3', 'fun-comedy-126302.mp3'];

  const {
    bigRockBgMusic: isEnabledSoundJokeRoll,
    setBigRockBgMusic: setIsEnabledSoundJokeRoll,
    bigRockVibration: isEnabledVibrationJokeRoll,
    setBigRockVibration: setIsEnabledVibrationJokeRoll,
  } = useStore() as {
    bigRockBgMusic: boolean;
    setBigRockBgMusic: (v: boolean) => void;
    bigRockVibration: boolean;
    setBigRockVibration: (v: boolean) => void;
  };

  useFocusEffect(
    useCallback(() => {
      loadSettingsJokeRoll();
    }, []),
  );

  const loadSettingsJokeRoll = async () => {
    try {
      const rawVibrationJokeRoll = await AsyncStorage.getItem(
        'toggleVibrations',
      );
      const rawSoundJokeRoll = await AsyncStorage.getItem('toggleSound');

      const parsedVibrationJokeRoll = rawVibrationJokeRoll
        ? JSON.parse(rawVibrationJokeRoll)
        : null;

      const parsedSoundJokeRoll = rawSoundJokeRoll
        ? JSON.parse(rawSoundJokeRoll)
        : null;

      if (typeof parsedVibrationJokeRoll === 'boolean') {
        setIsEnabledVibrationJokeRoll(parsedVibrationJokeRoll);
      }

      if (typeof parsedSoundJokeRoll === 'boolean') {
        setIsEnabledSoundJokeRoll(parsedSoundJokeRoll);
      }
    } catch (errorJokeRoll) {
      console.log('Error get settings', errorJokeRoll);
    }
  };

  useEffect(() => {
    playMusicJokeRoll(musicIndexJokeRoll);

    return () => {
      if (soundJokeRoll) {
        soundJokeRoll.stop(() => {
          soundJokeRoll.release();
        });
      }
    };
  }, [musicIndexJokeRoll]);

  const playMusicJokeRoll = (indexJokeRoll: number) => {
    if (soundJokeRoll) {
      soundJokeRoll.stop(() => {
        soundJokeRoll.release();
      });
    }

    const trackPathJokeRoll = tracksJokeRoll[indexJokeRoll];

    const newSoundJokeRoll = new Sound(
      trackPathJokeRoll,
      Sound.MAIN_BUNDLE,
      errorJokeRoll => {
        if (errorJokeRoll) {
          console.log('Error', errorJokeRoll);
          return;
        }

        newSoundJokeRoll.play(successJokeRoll => {
          if (successJokeRoll) {
            setMusicIndexJokeRoll(
              prevIndexJokeRoll =>
                (prevIndexJokeRoll + 1) % tracksJokeRoll.length,
            );
          } else {
            console.log('Error');
          }
        });

        setSoundJokeRoll(newSoundJokeRoll);
      },
    );
  };

  useEffect(() => {
    const syncVolumeFromStorageJokeRoll = async () => {
      try {
        const rawSoundJokeRoll = await AsyncStorage.getItem('toggleSound');
        const parsedJokeRoll = rawSoundJokeRoll
          ? JSON.parse(rawSoundJokeRoll)
          : null;

        if (typeof parsedJokeRoll === 'boolean') {
          setIsEnabledSoundJokeRoll(parsedJokeRoll);

          if (soundJokeRoll) {
            soundJokeRoll.setVolume(parsedJokeRoll ? 1 : 0);
          }
        }
      } catch (errorJokeRoll) {
        console.error('Error =>', errorJokeRoll);
      }
    };

    syncVolumeFromStorageJokeRoll();
  }, [soundJokeRoll]);

  useEffect(() => {
    if (soundJokeRoll) {
      soundJokeRoll.setVolume(isEnabledSoundJokeRoll ? 1 : 0);
    }
  }, [isEnabledSoundJokeRoll, soundJokeRoll]);

  const currentQuestionJokeRoll = questionsJokeRoll[stepJokeRoll];
  const selectedKeyJokeRoll = answersJokeRoll[stepJokeRoll];

  const pickAnswerJokeRoll = (keyJokeRoll: answeroptions) => {
    setAnswersJokeRoll(prevJokeRoll => ({
      ...prevJokeRoll,
      [stepJokeRoll]: keyJokeRoll,
    }));
  };

  const calculateResultJokeRoll = (): JokeRollResult => {
    const totalsJokeRoll: Record<answeroptions, number> = {
      A: 0,
      B: 0,
      C: 0,
      D: 0,
    };

    Object.values(answersJokeRoll).forEach(keyJokeRoll => {
      totalsJokeRoll[keyJokeRoll] += 1;
    });

    let winnerJokeRoll: answeroptions = 'A';
    let maxJokeRoll = -1;

    (['A', 'B', 'C', 'D'] as answeroptions[]).forEach(keyJokeRoll => {
      if (totalsJokeRoll[keyJokeRoll] > maxJokeRoll) {
        maxJokeRoll = totalsJokeRoll[keyJokeRoll];
        winnerJokeRoll = keyJokeRoll;
      }
    });

    const maxKeysJokeRoll = (['A', 'B', 'C', 'D'] as answeroptions[]).filter(
      keyJokeRoll => totalsJokeRoll[keyJokeRoll] === maxJokeRoll,
    );

    if (maxKeysJokeRoll.length > 1) {
      const lastAnswerJokeRoll =
        answersJokeRoll[4] ??
        answersJokeRoll[3] ??
        answersJokeRoll[2] ??
        answersJokeRoll[1] ??
        answersJokeRoll[0];

      if (lastAnswerJokeRoll && maxKeysJokeRoll.includes(lastAnswerJokeRoll)) {
        winnerJokeRoll = lastAnswerJokeRoll;
      }
    }

    return mapCategoryJokeRoll(winnerJokeRoll);
  };

  const handleNextJokeRoll = async () => {
    if (!selectedKeyJokeRoll) return;

    if (isEnabledVibrationJokeRoll) {
      Vibration.vibrate(250);
    }

    if (stepJokeRoll < 4) {
      setStepJokeRoll(prevJokeRoll => prevJokeRoll + 1);
      return;
    }

    const resultJokeRoll = calculateResultJokeRoll();

    await AsyncStorage.setItem(
      ASYNC_Key,
      JSON.stringify({
        result: resultJokeRoll,
        answers: answersJokeRoll,
        createdAt: Date.now(),
      }),
    );

    setStepJokeRoll(0);
    setAnswersJokeRoll({});

    navigationJokeRoll.navigate('Bigrockjokesscrn', {
      category: resultJokeRoll.id,
      categoryTitle: resultJokeRoll.title,
    });
  };

  const isNextDisabledJokeRoll = !selectedKeyJokeRoll;

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
            <Text style={jokeRollTopTitle}>Main menu</Text>
          </View>

          <View style={jokeRollCenter}>
            <Text style={jokeRollStep}>{`${stepJokeRoll + 1}/5`}</Text>

            <View style={jokeRollCard}>
              <Text style={jokeRollQuestion}>
                {currentQuestionJokeRoll?.q || ''}
              </Text>

              <View style={jokeRollAnswersGrid}>
                {currentQuestionJokeRoll?.a?.map(itemJokeRoll => {
                  const isActiveJokeRoll =
                    selectedKeyJokeRoll === itemJokeRoll.key;

                  return (
                    <TouchableOpacity
                      key={itemJokeRoll.key}
                      activeOpacity={0.78}
                      onPress={() => pickAnswerJokeRoll(itemJokeRoll.key)}
                      style={[
                        jokeRollAnswerBtn,
                        isActiveJokeRoll && jokeRollAnswerBtnActive,
                      ]}
                    >
                      <Text
                        style={[
                          jokeRollAnswerText,
                          isActiveJokeRoll && jokeRollAnswerTextActive,
                        ]}
                      >
                        {itemJokeRoll.text}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>

            <View
              style={[jokeRollNextWrap, { marginTop: heightJokeRoll * 0.1 }]}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleNextJokeRoll}
                disabled={isNextDisabledJokeRoll}
                style={[
                  jokeRollNextBorder,
                  isNextDisabledJokeRoll && { opacity: 0.8 },
                ]}
              >
                <LinearGradient
                  colors={['#FFFFFF', '#FFFFFF']}
                  style={jokeRollNextInner}
                >
                  <Text style={jokeRollNextText}>
                    {stepJokeRoll === 4 ? 'Start the Show' : 'Next'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const jokeRollBg = { flex: 1 };

const jokeRollScrollContent = { flexGrow: 1 };

const jokeRollMainWrap = { flex: 1, paddingBottom: 90 };

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

const jokeRollCenter = {
  flex: 1,
  alignItems: 'center' as const,
  paddingTop: 9,
  paddingHorizontal: 18,
};

const jokeRollStep = {
  fontSize: 40,
  fontWeight: '900' as const,
  color: '#FFFFFF',
  marginBottom: 30,
};

const jokeRollCard = {
  width: '90%',
  backgroundColor: '#F6BCFF',
  borderRadius: 30,
  paddingVertical: 20,
  paddingHorizontal: 18,
  alignItems: 'center' as const,
  paddingTop: 34,
};

const jokeRollQuestion = {
  fontSize: 20,
  fontWeight: '500' as const,
  color: '#BA0281',
  textAlign: 'center' as const,
  marginBottom: 28,
  lineHeight: 32,
};

const jokeRollAnswersGrid = {
  width: '100%',
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  gap: 12,
  justifyContent: 'space-between' as const,
};

const jokeRollAnswerBtn = {
  width: '44%',
  minHeight: 56,
  borderRadius: 20,
  backgroundColor: '#FFFFFF',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 10,
  borderWidth: 3,
  borderColor: '#FFFFFF',
  paddingVertical: 4,
};

const jokeRollAnswerBtnActive = {
  borderColor: '#DA39F2',
  borderWidth: 5,
};

const jokeRollAnswerText = {
  fontSize: 14,
  fontWeight: '400' as const,
  color: '#DA39F2',
  textAlign: 'center' as const,
};

const jokeRollAnswerTextActive = { color: '#BA0281' };

const jokeRollNextWrap = {
  alignItems: 'center' as const,
};

const jokeRollNextBorder = {
  marginTop: 18,
  width: 236,
  borderWidth: 5,
  borderColor: '#DA39F2',
  borderRadius: 20,
};

const jokeRollNextInner = {
  height: 70,
  borderRadius: 16,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollNextText = {
  color: '#DA39F2',
  fontSize: 20,
  fontWeight: '700' as const,
};

export default JokeRollHomeScreen;
