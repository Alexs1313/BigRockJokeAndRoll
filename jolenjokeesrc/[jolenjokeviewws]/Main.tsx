import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  Animated,
  Image,
  ImageBackground,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DEFAULT_JOKE = "I'm not lazy. I'm on energy-saving mode.";

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

const Main: React.FC = () => {
  const navigation = useNavigation();
  const { height } = useWindowDimensions();
  const [joke] = useState(DEFAULT_JOKE);

  const handleShare = useCallback(async () => {
    try {
      await Share.share({
        message: joke,
        title: "Today's joke",
      });
    } catch {
      // ignore
    }
  }, [joke]);

  const openSettings = useCallback(() => {
    navigation.navigate('Bigrocksttngscrn' as never);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../assets/images/bigrockbg.png')}
      style={styles.background}
    >
      <SparklesOverlay />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.contentScroll}
      >
        <View style={[styles.header, { paddingTop: height * 0.06 }]}>
          <TouchableOpacity
            style={styles.settingsButton}
            onPress={openSettings}
            activeOpacity={0.8}
          >
            <Image
              source={require('../../assets/images/bigjokelemptsett.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View style={styles.characterPlaceholder}>
            <Image
              source={require('../../assets/images/bigjokelemphomee.png')}
              style={styles.characterImage}
            />
          </View>

          <View style={styles.jokeCard}>
            <Text style={styles.jokeLabel}>Today's joke</Text>
            <Text style={styles.jokeText}>{joke}</Text>
            <TouchableOpacity
              style={styles.shareButton}
              onPress={handleShare}
              activeOpacity={0.8}
            >
              <Text style={styles.shareButtonText}>Share</Text>
              <Image
                source={require('../../assets/images/bigrockshr.png')}
                style={styles.shareIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = {
  background: {
    flex: 1,
  } as const,
  contentScroll: {
    flex: 1,
    zIndex: 2,
  } as const,
  header: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
    alignItems: 'flex-end' as const,
    zIndex: 10,
  },
  settingsButton: {
    width: 68,
    height: 68,
    borderRadius: 20,
    backgroundColor: '#DA39F2',
    borderWidth: 5,
    borderColor: '#FFFFFF',
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  settingsIcon: {
    fontSize: 22,
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingBottom: 140,
    justifyContent: 'space-between' as const,
  },
  characterPlaceholder: {
    alignItems: 'center' as const,

    top: 160,
  },
  characterImage: {},
  jokeCard: {
    backgroundColor: '#671074',
    borderRadius: 30,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderWidth: 0,
    minHeight: 160,
  },
  jokeLabel: {
    fontSize: 14,
    color: 'rgba(255,255,255,1)',
    marginBottom: 12,
    fontWeight: '500' as const,
  },
  jokeText: {
    fontSize: 20,
    color: '#FFFFFF',
    lineHeight: 28,
    marginBottom: 20,
    fontWeight: '600' as const,
  },
  shareButton: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    alignSelf: 'center' as const,
    backgroundColor: '#DA39F2',
    width: '100%',
    height: 56,
    borderRadius: 20,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    gap: 8,
  },
  shareButtonText: {
    fontSize: 18,
    fontWeight: '700' as const,
    color: '#FFFFFF',
  },
  shareIcon: {
    width: 20,
    height: 24,
    tintColor: '#FFFFFF',
  },
};

export default Main;
