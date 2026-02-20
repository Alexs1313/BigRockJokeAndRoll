import React, { useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { bigrockldrhtml } from '../constants/bigrockldrhtml';

const Bigrockldr: React.FC = () => {
  const [showLoaderJokeRoll, setShowLoaderJokeRoll] = useState<boolean>(true);
  const [showImageJokeRoll, setShowImageJokeRoll] = useState<boolean>(false);

  useEffect(() => {
    const timeoutJokeRoll = setTimeout(() => {
      setShowLoaderJokeRoll(false);
      setShowImageJokeRoll(true);
    }, 4500);

    return () => clearTimeout(timeoutJokeRoll);
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/bigrockldrbg.png')}
      style={jokeRollBg}
    >
      <ScrollView
        contentContainerStyle={jokeRollScrollContent}
        showsVerticalScrollIndicator={false}
      >
        {showImageJokeRoll && (
          <View style={jokeRollCenter}>
            {Platform.OS === 'ios' ? (
              <Image
                source={require('../../assets/images/bigrockldr.png')}
                style={jokeRollImage}
              />
            ) : (
              <Image
                source={require('../../assets/images/icon.png')}
                style={[{ borderRadius: 22, width: 250, height: 250 }]}
                resizeMode="contain"
              />
            )}
          </View>
        )}

        {showLoaderJokeRoll && (
          <View style={jokeRollWebWrap}>
            <WebView
              originWhitelist={['*']}
              source={{ html: bigrockldrhtml }}
              style={jokeRollWebView}
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

/** styles as objects */
const jokeRollBg = { flex: 1 };

const jokeRollScrollContent = { flexGrow: 1 };

const jokeRollCenter = {
  flex: 1,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  height: 650,
};

const jokeRollImage = {
  width: 350,
  height: 300,
  resizeMode: 'contain' as const,
};

const jokeRollWebWrap = {
  flex: 1,
  justifyContent: 'flex-end' as const,
  alignItems: 'center' as const,
  paddingBottom: 20,
  position: 'absolute' as const,
  bottom: 0,
  alignSelf: 'center' as const,
};

const jokeRollWebView = {
  width: 360,
  height: 110,
  backgroundColor: 'transparent' as const,
};

export default Bigrockldr;
