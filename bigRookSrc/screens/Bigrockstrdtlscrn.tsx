import React from 'react';
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
  useNavigation,
  useRoute,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';

type JokeRollStory = {
  title: string;
  body: string;
};

type RootStackParamListJokeRoll = {
  Bigrockstrdtlscrn: { story?: JokeRollStory };
};

const Bigrockstrdtlscrn: React.FC = () => {
  const navigationJokeRoll =
    useNavigation<NavigationProp<RootStackParamListJokeRoll>>();
  const routeJokeRoll =
    useRoute<RouteProp<RootStackParamListJokeRoll, 'Bigrockstrdtlscrn'>>();

  const { height: heightJokeRoll } = useWindowDimensions();

  const storyJokeRoll: JokeRollStory = routeJokeRoll?.params?.story || {
    title: 'Story',
    body: '',
  };

  const handleBackJokeRoll = () => navigationJokeRoll.goBack();

  const handleShareJokeRoll = async () => {
    await Share.share({
      message: `${storyJokeRoll.title}\n\n${storyJokeRoll.body}`,
    });
  };

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

          <Text style={jokeRollTopTitle}>Stories</Text>
        </View>

        <ScrollView
          contentContainerStyle={jokeRollScrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          <View style={jokeRollCard}>
            <Text style={jokeRollStoryTitle}>{storyJokeRoll.title}</Text>
            <Text style={jokeRollStoryBody}>{storyJokeRoll.body}</Text>
          </View>

          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleShareJokeRoll}
            style={jokeRollShareBtn}
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

const jokeRollScrollContent = {
  paddingTop: 30,
  paddingHorizontal: 25,
};

const jokeRollCard = {
  width: '100%',
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
};

const jokeRollStoryTitle = {
  fontSize: 16,
  fontWeight: '600' as const,
  color: '#BA0281',
  textAlign: 'center' as const,
  marginBottom: 14,
};

const jokeRollStoryBody = {
  fontSize: 16,
  fontWeight: '300' as const,
  color: '#BA0281',
  textAlign: 'center' as const,
  lineHeight: 24,
};

const jokeRollShareBtn = {
  marginTop: 10,
  width: '100%',
  height: 70,
  borderRadius: 22,
  backgroundColor: '#DA39F2',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  flexDirection: 'row' as const,
  gap: 12,
  borderWidth: 5,
  borderColor: '#F6BCFF',
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

export default Bigrockstrdtlscrn;
