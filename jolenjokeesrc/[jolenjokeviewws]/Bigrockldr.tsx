import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { WebView } from 'react-native-webview';
import { bigrockldrhtml } from '../../bigrockldrhtml';

const STAR_COUNT = 28;
const STAR_SIZES = [2, 3, 4];

const STAR_POSITIONS = Array.from({ length: STAR_COUNT }, (_, i) => ({
  left: (i * 13.7 + 5) % 92,
  top: (i * 17.3 + 10) % 85,
  size: STAR_SIZES[i % STAR_SIZES.length],
  duration: 800 + (i % 5) * 400,
  delay: (i % 7) * 200,
}));

function TwinklingStar({
  left,
  top,
  size,
  duration,
  delay,
}: {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}) {
  const opacity = useRef(new Animated.Value(0.2)).current;

  useEffect(() => {
    const flash = Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(opacity, {
          toValue: 1,
          duration: duration / 2,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.15,
          duration: duration / 2,
          useNativeDriver: true,
        }),
      ]),
      { resetBeforeIteration: false },
    );
    flash.start();
    return () => flash.stop();
  }, [opacity, duration, delay]);

  return (
    <Animated.View
      style={[
        sparkleStyles.star,
        {
          left: `${left}%`,
          top: `${top}%`,
          width: size,
          height: size,
          borderRadius: size / 2,
          opacity,
        },
      ]}
    />
  );
}

function SparklesOverlay() {
  return (
    <View style={sparkleStyles.overlay} pointerEvents="none">
      {STAR_POSITIONS.map((p, i) => (
        <TwinklingStar
          key={i}
          left={p.left}
          top={p.top}
          size={p.size}
          duration={p.duration}
          delay={p.delay}
        />
      ))}
    </View>
  );
}

const sparkleStyles = {
  overlay: {
    position: 'absolute' as const,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  star: {
    position: 'absolute' as const,
    backgroundColor: '#FFFFFF',
    shadowColor: '#FFFFFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 3,
    elevation: 2,
  },
};

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
      <SparklesOverlay />
      <ScrollView
        contentContainerStyle={jokeRollScrollContent}
        showsVerticalScrollIndicator={false}
        style={jokeRollScrollWrap}
      >
        {showImageJokeRoll && (
          <View style={jokeRollCenter}>
            {Platform.OS === 'ios' ? (
              <Image
                source={require('../../assets/images/bigjokeloaderic.png')}
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

const jokeRollScrollWrap = { flex: 1, zIndex: 2 };

const jokeRollCenter = {
  flex: 1,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
  height: 650,
};

const jokeRollImage = {
  width: 250,
  height: 250,
  resizeMode: 'contain' as const,
};

const jokeRollWebWrap = {
  flex: 1,
  alignItems: 'center' as const,
  paddingBottom: 20,
  alignSelf: 'center' as const,
};

const jokeRollWebView = {
  width: 360,
  height: 110,
  backgroundColor: 'transparent' as const,
};

export default Bigrockldr;
