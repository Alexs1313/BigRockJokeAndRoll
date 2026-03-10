import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Vibration,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { useStore } from '../jolenjokeestorr/Bigrockcnstscntxt';

const Bigrocksttngscrn: React.FC = () => {
  const navigation = useNavigation();
  const { height: heightJokeRoll } = useWindowDimensions();

  const handleBackJokeRoll = () => navigation.goBack();

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

  const toggleVibrationJokeRoll = async (valueJokeRoll: boolean) => {
    if (isEnabledVibrationJokeRoll) Vibration.vibrate(150);

    try {
      await AsyncStorage.setItem(
        'toggleVibrations',
        JSON.stringify(valueJokeRoll),
      );
      setIsEnabledVibrationJokeRoll(valueJokeRoll);
    } catch (errorJokeRoll) {
      console.log('vibr err', errorJokeRoll);
    }
  };

  const toggleMusicJokeRoll = async (valueJokeRoll: boolean) => {
    if (isEnabledVibrationJokeRoll) Vibration.vibrate(150);

    try {
      await AsyncStorage.setItem('toggleSound', JSON.stringify(valueJokeRoll));
      setIsEnabledSoundJokeRoll(valueJokeRoll);
    } catch (errorJokeRoll) {
      console.log('mus err', errorJokeRoll);
    }
  };

  const handleShareAppJokeRoll = async () => {
    Linking.openURL(
      'https://apps.apple.com/us/app/%D0%B2lgr%D0%BE%D0%BEk-j0k%D0%B7-%D0%B0nd-b%D0%B0s%D0%B5/id6758626360',
    );
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bigrockbg.png')}
      style={jokeRollBg}
    >
      <ScrollView
        contentContainerStyle={jokeRollScrollContent}
        bounces={false}
        showsVerticalScrollIndicator={false}
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
              <Image
                source={require('../../assets/images/bigjokelsback.png')}
              />
            </TouchableOpacity>

            <Text style={jokeRollTopTitle}>Settings</Text>
          </View>

          <View style={jokeRollContent}>
            <View style={jokeRollCard}>
              <View style={jokeRollRow}>
                <Text style={jokeRollRowLabel}>Vibration</Text>
                <Switch
                  value={isEnabledVibrationJokeRoll}
                  onValueChange={toggleVibrationJokeRoll}
                  trackColor={{ false: '#CCCCCC', true: '#34C759' }}
                  thumbColor={'#DA39F2'}
                  ios_backgroundColor={'#CCCCCC'}
                />
              </View>
              {Platform.OS === 'ios' && (
                <>
                  <View style={jokeRollDivider} />

                  <View style={jokeRollRow}>
                    <Text style={jokeRollRowLabel}>Music</Text>
                    <Switch
                      value={isEnabledSoundJokeRoll}
                      onValueChange={toggleMusicJokeRoll}
                      trackColor={{ false: '#CCCCCC', true: '#34C759' }}
                      thumbColor={'#DA39F2'}
                      ios_backgroundColor={'#CCCCCC'}
                    />
                  </View>
                </>
              )}
            </View>
            {Platform.OS === 'ios' && (
              <View style={jokeRollBottom}>
                <TouchableOpacity
                  activeOpacity={0.75}
                  onPress={handleShareAppJokeRoll}
                  style={jokeRollShareBorder}
                >
                  <LinearGradient
                    colors={['#FD7DFC', '#D42DF0']}
                    style={jokeRollShareInner}
                  >
                    <Text style={jokeRollShareText}>Share the app</Text>
                    <Image
                      source={require('../../assets/images/bigrockshric.png')}
                      style={jokeRollShareIcon}
                    />
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

/** styles as objects */
const jokeRollBg = { flex: 1 };

const jokeRollScrollContent = { flexGrow: 1 };

const jokeRollFull = { flex: 1 };

const jokeRollTopWrap = {
  backgroundColor: '#2A0030',
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
  backgroundColor: '#DA39F2',
  borderWidth: 5,
  borderColor: '#fff',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollContent = {
  flex: 1,
  paddingTop: 22,
  paddingHorizontal: 30,
};

const jokeRollCard = {
  width: '100%',
  backgroundColor: '#671074',
  borderRadius: 30,
  paddingVertical: 16,
  paddingHorizontal: 18,
  alignSelf: 'center' as const,
};

const jokeRollRow = {
  height: 42,
  flexDirection: 'row' as const,
  alignItems: 'center' as const,
  justifyContent: 'space-between' as const,
};

const jokeRollRowLabel = {
  fontSize: 20,
  fontWeight: '400' as const,
  color: '#fff',
};

const jokeRollDivider = {
  height: 1,
  backgroundColor: '#fff',
  marginVertical: 8,
};

const jokeRollBottom = {
  flex: 1,
  justifyContent: 'flex-end' as const,
  marginBottom: 110,
};

const jokeRollShareBorder = {
  marginTop: 26,
  width: '100%',
  borderWidth: 6,
  borderColor: '#FFFFFF',
  borderRadius: 26,
};

const jokeRollShareInner = {
  height: 70,
  borderRadius: 20,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  flexDirection: 'row' as const,
  gap: 14,
};

const jokeRollShareText = {
  color: '#FFFFFF',
  fontSize: 20,
  fontWeight: '700' as const,
};

const jokeRollShareIcon = {
  width: 30,
  height: 30,
  resizeMode: 'contain' as const,
};

export default Bigrocksttngscrn;
