import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

type RootStackParamListJokeRoll = {
  Bigrocktbs: undefined;
};

const Bigrockwlcm: React.FC = () => {
  const { height: heightJokeRoll } = useWindowDimensions();
  const [currentIndexJokeRoll, setCurrentIndexJokeRoll] = useState<number>(0);

  const navigationJokeRoll =
    useNavigation<NavigationProp<RootStackParamListJokeRoll>>();

  const handleNextJokeRoll = () => {
    if (currentIndexJokeRoll < 3) {
      setCurrentIndexJokeRoll(prevJokeRoll => prevJokeRoll + 1);
      return;
    }

    navigationJokeRoll.replace('JolenjokBottmTabs');
  };

  const isLastScreenJokeRoll = currentIndexJokeRoll >= 3;

  return (
    <ImageBackground
      source={require('../../assets/images/bigrockldrbg.png')}
      style={jokeRollBg}
    >
      <ScrollView
        contentContainerStyle={jokeRollScrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        {!isLastScreenJokeRoll ? (
          <View style={jokeRollMain}>
            <View
              style={[jokeRollTopBoard, { paddingTop: heightJokeRoll * 0.06 }]}
            >
              <Text style={jokeRollDesc}>
                {currentIndexJokeRoll === 0
                  ? `Discover jokes that actually fit your vibe. A few questions — and you’re ready to rock the laughs.`
                  : currentIndexJokeRoll === 1
                  ? `Answer a quick personality quiz. We’ll match you with joke styles that suit you best.`
                  : `Save your favorite jokes, rate them, and use them to feel confident on stage or with friends.`}
              </Text>

              {currentIndexJokeRoll === 1 && (
                <View style={jokeRollMiniImagesRow}>
                  <Image
                    source={require('../../assets/images/bigrockonbim1.png')}
                    style={jokeRollMiniImgLeft1}
                  />
                  <Image
                    source={require('../../assets/images/bigrockonbim2.png')}
                    style={jokeRollMiniImgRight1}
                  />
                </View>
              )}

              {currentIndexJokeRoll === 2 && (
                <View style={jokeRollMiniImagesRow}>
                  <Image
                    source={require('../../assets/images/bigrockonbim3.png')}
                    style={jokeRollMiniImgLeft2}
                  />
                  <Image
                    source={require('../../assets/images/bigrockonbim4.png')}
                    style={jokeRollMiniImgRight2}
                  />
                </View>
              )}
            </View>

            <Image
              source={
                currentIndexJokeRoll === 0
                  ? require('../../assets/images/bigrockon3.png')
                  : currentIndexJokeRoll === 1
                  ? require('../../assets/images/bigrockon2.png')
                  : require('../../assets/images/bigrockon1.png')
              }
              style={jokeRollBottomHero}
            />

            <View style={jokeRollBottomArea}>
              <TouchableOpacity
                style={jokeRollCtaBorder}
                activeOpacity={0.72}
                onPress={handleNextJokeRoll}
              >
                <LinearGradient
                  colors={['#FD7DFC', '#D42DF0']}
                  style={jokeRollCtaInner}
                >
                  <Text style={jokeRollCtaText}>
                    {currentIndexJokeRoll === 0
                      ? 'Start the Show'
                      : currentIndexJokeRoll === 1
                      ? 'Take the Quiz'
                      : 'Save Your First Joke'}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <ImageBackground
            source={require('../../assets/images/bigrockldrbg.png')}
            style={jokeRollBg}
          >
            <ScrollView
              contentContainerStyle={jokeRollFinalContent}
              showsVerticalScrollIndicator={false}
              bounces={false}
            >
              <View style={jokeRollFinalWrap}>
                {Platform.OS === 'ios' ? (
                  <Image
                    source={require('../../assets/images/bigjokeloaderic.png')}
                    style={jokeRollFinalImage}
                  />
                ) : (
                  <Image
                    source={require('../../assets/images/intrologo.png')}
                    style={jokeRollFinalImage}
                    resizeMode="contain"
                  />
                )}

                <Text style={jokeRollFinalTitle}>
                  You’re Ready to Joke and Roll
                </Text>

                <Text style={jokeRollFinalSub}>
                  Explore jokes, boost your confidence, and enjoy comedy made
                  just for you.
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginBottom: 45,
                }}
              >
                <TouchableOpacity
                  style={jokeRollCtaBorder}
                  activeOpacity={0.72}
                  onPress={handleNextJokeRoll}
                >
                  <LinearGradient
                    colors={['#FD7DFC', '#D42DF0']}
                    style={jokeRollCtaInner}
                  >
                    <Text style={jokeRollCtaText}>Let’s Rock</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </ImageBackground>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

/** styles as objects */
const jokeRollBg = { flex: 1 };

const jokeRollScrollContent = { flexGrow: 1, height: 800 };

const jokeRollMain = {
  flex: 1,
  alignItems: 'center' as const,
  paddingBottom: 45,
};

const jokeRollFinalWrap = {
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  backgroundColor: '#2A0030',
  padding: 45,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  minHeight: '70%',
};

const jokeRollTopBoard = {
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  minHeight: 250,
  backgroundColor: '#2A0030',
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  padding: 5,
};

const jokeRollDesc = {
  fontSize: 20,
  color: '#fff',
  textAlign: 'center' as const,
  marginHorizontal: 30,
  fontWeight: '400' as const,
  lineHeight: 26,
  paddingHorizontal: 20,
  marginTop: 20,
  marginBottom: 10,
};

const jokeRollMiniImagesRow = { flexDirection: 'row' as const, marginTop: 50 };

const jokeRollMiniImgLeft1 = { left: 40, zIndex: 1 };

const jokeRollMiniImgRight1 = { right: 20, bottom: 30 };

const jokeRollMiniImgLeft2 = { left: 30 };

const jokeRollMiniImgRight2 = { right: 20, bottom: 50 };

const jokeRollBottomHero = { position: 'absolute' as const, bottom: 0 };

const jokeRollBottomArea = {
  flex: 1,
  alignItems: 'center' as const,
  justifyContent: 'flex-end' as const,
};

const jokeRollCtaBorder = {
  alignSelf: 'center' as const,
  borderWidth: 5,
  borderColor: '#fff',
  borderRadius: 20,
};

const jokeRollCtaInner = {
  width: 236,
  height: 70,
  borderRadius: 15,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
};

const jokeRollCtaText = {
  color: '#FFFFFF',
  fontSize: 19,
  fontWeight: '700' as const,
};

const jokeRollFinalContent = {
  flexGrow: 1,
};

const jokeRollFinalImage = {
  width: 250,
  height: 190,
  resizeMode: 'contain' as const,
};

const jokeRollFinalTitle = {
  fontSize: 24,
  color: '#fff',
  fontWeight: '900' as const,
  marginTop: 20,
  textAlign: 'center' as const,
  marginHorizontal: 40,
};

const jokeRollFinalSub = {
  fontSize: 20,
  color: '#fff',
  fontWeight: '500' as const,
  marginTop: 30,
  textAlign: 'center' as const,
  marginHorizontal: 40,
};

export default Bigrockwlcm;
