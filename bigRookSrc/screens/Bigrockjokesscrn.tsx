import React, { useEffect, useMemo, useState } from 'react';
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
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
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
} as const;

type JokeRollCategory = keyof typeof BIGROCK_JOKES;

type RootStackParamListJokeRoll = {
  Bigrockjokesscrn: { category?: JokeRollCategory; categoryTitle?: string };
};

const makeJokeIdJokeRoll = (categoryJokeRoll: string, indexJokeRoll: number) =>
  `${categoryJokeRoll}_${indexJokeRoll}`;

type SavedJokeJokeRoll = {
  id: string;
  category: JokeRollCategory;
  text: string;
  createdAt: number;
};

const JokeRollJokesScreen: React.FC = () => {
  const navigationJokeRoll =
    useNavigation<NavigationProp<RootStackParamListJokeRoll>>();
  const routeJokeRoll =
    useRoute<RouteProp<RootStackParamListJokeRoll, 'Bigrockjokesscrn'>>();

  const { height: heightJokeRoll } = useWindowDimensions();

  const categoryJokeRoll: JokeRollCategory =
    (routeJokeRoll?.params?.category as JokeRollCategory) || 'everyday';

  const jokesListJokeRoll = useMemo(() => {
    return BIGROCK_JOKES[categoryJokeRoll] || BIGROCK_JOKES.everyday;
  }, [categoryJokeRoll]);

  const [indexJokeRoll, setIndexJokeRoll] = useState<number>(0);
  const [savedJokesJokeRoll, setSavedJokesJokeRoll] = useState<
    SavedJokeJokeRoll[]
  >([]);

  const currentJokeTextJokeRoll = jokesListJokeRoll[indexJokeRoll] || '';
  const currentJokeIdJokeRoll = makeJokeIdJokeRoll(
    categoryJokeRoll,
    indexJokeRoll,
  );

  const isSavedJokeRoll = savedJokesJokeRoll.some(
    itemJokeRoll => itemJokeRoll.id === currentJokeIdJokeRoll,
  );

  useEffect(() => {
    const loadSavedJokesJokeRoll = async () => {
      try {
        const rawJokeRoll = await AsyncStorage.getItem(BIGROCK_SAVED_KEY);
        setSavedJokesJokeRoll(rawJokeRoll ? JSON.parse(rawJokeRoll) : []);
      } catch {
        setSavedJokesJokeRoll([]);
      }
    };

    loadSavedJokesJokeRoll();
  }, []);

  const persistSavedJokesJokeRoll = async (
    nextJokeRoll: SavedJokeJokeRoll[],
  ) => {
    setSavedJokesJokeRoll(nextJokeRoll);
    await AsyncStorage.setItem(BIGROCK_SAVED_KEY, JSON.stringify(nextJokeRoll));
  };

  const handleBackJokeRoll = () => navigationJokeRoll.goBack();

  const handlePrevJokeRoll = () => {
    setIndexJokeRoll(
      prevJokeRoll =>
        (prevJokeRoll - 1 + jokesListJokeRoll.length) %
        jokesListJokeRoll.length,
    );
  };

  const handleNextJokeRoll = () => {
    setIndexJokeRoll(
      prevJokeRoll => (prevJokeRoll + 1) % jokesListJokeRoll.length,
    );
  };

  const handleToggleSaveJokeRoll = async () => {
    if (!currentJokeTextJokeRoll) return;

    if (isSavedJokeRoll) {
      const nextJokeRoll = savedJokesJokeRoll.filter(
        itemJokeRoll => itemJokeRoll.id !== currentJokeIdJokeRoll,
      );
      await persistSavedJokesJokeRoll(nextJokeRoll);
      return;
    }

    const nextJokeRoll: SavedJokeJokeRoll[] = [
      ...savedJokesJokeRoll,
      {
        id: currentJokeIdJokeRoll,
        category: categoryJokeRoll,
        text: currentJokeTextJokeRoll,
        createdAt: Date.now(),
      },
    ];

    await persistSavedJokesJokeRoll(nextJokeRoll);
  };

  const handleShareJokeRoll = async () => {
    await Share.share({ message: currentJokeTextJokeRoll });
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
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={handleBackJokeRoll}
              style={jokeRollBackBtn}
            >
              <Image source={require('../../assets/images/bigrockback.png')} />
            </TouchableOpacity>

            <Text style={jokeRollTopTitle}>Main menu</Text>
          </View>

          <View style={jokeRollCenter}>
            <Text
              style={[jokeRollHeader, { marginBottom: heightJokeRoll * 0.06 }]}
            >
              Here are some jokes you might like.
            </Text>

            <View style={jokeRollJokeWrap}>
              <View style={jokeRollJokeCard}>
                <Text style={jokeRollJokeText}>{currentJokeTextJokeRoll}</Text>
              </View>
            </View>

            <View style={jokeRollControlsRow}>
              <TouchableOpacity
                activeOpacity={0.78}
                onPress={handlePrevJokeRoll}
                style={jokeRollControlBtn}
              >
                <Image source={require('../../assets/images/bigrockrig.png')} />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.78}
                onPress={handleToggleSaveJokeRoll}
                style={[
                  jokeRollSaveBtn,
                  isSavedJokeRoll && jokeRollSaveBtnActive,
                ]}
              >
                {isSavedJokeRoll ? (
                  <Image
                    source={require('../../assets/images/bigrocksaved.png')}
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/bigrocksave.png')}
                  />
                )}
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.78}
                onPress={handleNextJokeRoll}
                style={jokeRollControlBtn}
              >
                <Image
                  source={require('../../assets/images/bigrockleft.png')}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              activeOpacity={0.78}
              onPress={handleShareJokeRoll}
              style={jokeRollShareBorder}
            >
              <LinearGradient
                colors={['#FD7DFC', '#D42DF0']}
                style={jokeRollShareInner}
              >
                <Text style={jokeRollShareText}>Share</Text>
                <Image
                  source={require('../../assets/images/bigrockshr.png')}
                  style={jokeRollShareIcon}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const jokeRollBg = { flex: 1 };

const jokeRollScrollContent = { flexGrow: 1 };

const jokeRollMainWrap = { flex: 1, paddingBottom: 30 };

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

const jokeRollCenter = {
  flex: 1,
  alignItems: 'center' as const,
  paddingTop: 18,
  paddingHorizontal: 18,
};

const jokeRollHeader = {
  marginTop: 6,
  fontSize: 32,
  fontWeight: '900' as const,
  color: '#FFFFFF',
  textAlign: 'center' as const,
  textShadowColor: '#BA0281',
  textShadowOffset: { width: 0, height: 3 },
  textShadowRadius: 6,
};

const jokeRollJokeWrap = {
  marginTop: 26,
  width: '90%',
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: 14,
};

const jokeRollJokeCard = {
  flex: 1,
  minHeight: 120,
  borderRadius: 30,
  backgroundColor: '#F6BCFF',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  paddingHorizontal: 20,
  paddingVertical: 10,
};

const jokeRollJokeText = {
  color: '#BA0281',
  fontSize: 20,
  fontWeight: '500' as const,
  textAlign: 'center' as const,
};

const jokeRollControlsRow = {
  width: '90%',
  marginTop: 18,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  gap: 16,
};

const jokeRollControlBtn = {
  width: 70,
  height: 70,
  borderRadius: 20,
  backgroundColor: '#DA39F2',
  borderWidth: 5,
  borderColor: '#FFFFFF',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollSaveBtn = {
  flex: 1,
  height: 70,
  borderRadius: 20,
  backgroundColor: '#DA39F2',
  borderWidth: 5,
  borderColor: '#fff',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollSaveBtnActive = {
  borderColor: '#DA39F2',
  backgroundColor: '#fff',
};

const jokeRollShareBorder = {
  marginTop: 10,
  width: '90%',
  borderWidth: 5,
  borderColor: '#FFFFFF',
  borderRadius: 20,
};

const jokeRollShareInner = {
  height: 70,
  borderRadius: 15,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  flexDirection: 'row' as const,
  gap: 12,
};

const jokeRollShareText = {
  color: '#FFFFFF',
  fontSize: 22,
  fontWeight: '700' as const,
};

const jokeRollShareIcon = {
  width: 28,
  height: 28,
  resizeMode: 'contain' as const,
};

export default JokeRollJokesScreen;
