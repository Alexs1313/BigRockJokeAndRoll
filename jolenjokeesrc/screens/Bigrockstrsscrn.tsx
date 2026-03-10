import React, { useMemo } from 'react';
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  Vibration,
  View,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useStore } from '../jolenjokeestorr/Bigrockcnstscntxt';

type JokeRollStory = {
  id: string;
  title: string;
  body: string;
};

type RootStackParamListJokeRoll = {
  Bigrockstrsscrn: undefined;
  Bigrockstrdtlscrn: { story: JokeRollStory };
};

const Bigrockstrsscrn: React.FC = () => {
  const navigationJokeRoll =
    useNavigation<NavigationProp<RootStackParamListJokeRoll>>();
  const { height: heightJokeRoll } = useWindowDimensions();

  const { bigRockVibration: isEnabledVibrationJokeRoll } = useStore() as {
    bigRockVibration: boolean;
  };

  const storiesJokeRoll = useMemo<JokeRollStory[]>(
    () => [
      {
        id: '1',
        title: 'The First Silence',
        body: `The first time I walked on stage, I thought confidence would magically appear the moment I grabbed the microphone. It didn’t.
The lights were too bright. My mouth went dry. My hands felt heavier than usual. I told my opening joke — the one I practiced a hundred times — and then it happened.
Nothing.
No laughter. No reaction. Just silence.
In that silence, my mind went wild.
They hate me.
This was a mistake.
Everyone can tell I don’t belong here.
But something unexpected happened while I stood there, frozen in that quiet moment.
Nothing bad actually happened.
No one booed.
No one stood up to leave.
The audience just… waited.
That silence wasn’t rejection.
It was possibility.
I finished the set. It wasn’t good. But it was honest.
Later, I realized something important: confidence isn’t the absence of silence. It’s the ability to stand inside it without running away.
Every confident performer you admire has faced silence.
They just learned not to fear it.`,
      },
      {
        id: '2',
        title: 'Nobody Knows Your Script',
        body: `Before every show, I obsessed over remembering every word.
I treated my set like a fragile script that could shatter if I forgot one line.
Then, one night, I forgot a joke.
Completely blank.
I panicked — until I noticed something strange.
The audience didn’t react. They didn’t know.
They weren’t waiting for that joke.
They were waiting for me.
That’s when I understood something powerful:
The audience has no idea what your plan is.
If you pause, they think you’re building tension.
If you skip something, they assume it wasn’t important.
If you change direction, they believe it’s intentional.
Confidence on stage isn’t about control.
It’s about ownership.
You own every moment — even the mistakes.`,
      },
      {
        id: '3',
        title: 'The Worst Set That Saved Me',
        body: `There was a night where everything went wrong.
Not one joke landed. Not even close.
I could feel the room slipping away from me.
Every sentence felt heavier than the last.
I wanted to escape.
Instead, I stayed.
I finished the set with dignity I didn’t feel.
When I got off stage, I felt empty.
But something incredible happened afterward.
The fear disappeared.
I had already experienced my worst nightmare — and survived.
From that night on, I realized confidence isn’t built from winning.
It’s built from knowing you can lose and still return.
Nothing gives you freedom like realizing failure isn’t fatal.`,
      },
      {
        id: '4',
        title: 'The Audience Is Not Your Enemy',
        body: `For years, I treated the audience like a judge.
Every laugh was approval.
Every silence was rejection.
That mindset drained me.
One night, I changed my perspective.
I looked at the audience and thought:
“These people chose to be here.”
They didn’t come to measure my worth.
They came to escape their own day.
The moment I stopped fighting for approval and started sharing my point of view, everything shifted.
Confidence grows when you stop performing at people and start talking with them.`,
      },
      {
        id: '5',
        title: 'Confidence Is Borrowed at First',
        body: `Early confidence is always borrowed.
From jokes that once worked.
From performers you admire.
From moments when you felt strong.
That’s not fake confidence.
That’s training wheels.
Over time, those borrowed moments blend into your own voice.
Your posture changes.
Your timing improves.
Confidence is built quietly — without announcing itself.
Don’t wait to feel confident.
Act first. Feeling follows.`,
      },
      {
        id: '6',
        title: 'Your Voice Is Enough',
        body: `I spent years trying to sound louder, sharper, faster.
I thought confidence meant domination.
Then I tried something risky.
I slowed down.
I spoke like myself.
The audience leaned in.
Confidence isn’t about volume.
It’s about comfort.
Your natural voice is not a flaw — it’s your signature.`,
      },
      {
        id: '7',
        title: 'One Person Is Enough',
        body: `I used to scan the room, searching for approval everywhere.
It never worked.
Then I focused on one person.
One laugh. One smile.
That was enough.
Confidence doesn’t require the whole room.
It grows from connection — one moment at a time.`,
      },
      {
        id: '8',
        title: 'The Pause Is Power',
        body: `I used to rush because silence scared me.
Then I learned silence is power.
A pause says:
“I’m in control.”
You don’t rush because you trust the moment.
Confidence lives between the words.`,
      },
      {
        id: '9',
        title: 'You Belong on Stage Because You’re There',
        body: `I used to wonder if I deserved the stage.
Then I realized: no one accidentally ends up there.
If you’re holding the microphone, you belong.
The stage doesn’t demand perfection.
It rewards presence.`,
      },
      {
        id: '10',
        title: 'Confidence Is Built After the Show',
        body: `Confidence doesn’t arrive before the performance.
It arrives after.
After you didn’t quit.
After you stayed honest.
After you tried.
Every show adds a layer.
Confidence is memory.
And you’re building it.`,
      },
    ],
    [],
  );

  const openStoryJokeRoll = (storyJokeRoll: JokeRollStory) => {
    navigationJokeRoll.navigate('Bigrockstrdtlscrn', { story: storyJokeRoll });
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
              {
                minHeight: heightJokeRoll * 0.13,
                paddingTop: heightJokeRoll * 0.06,
              },
            ]}
          >
            <Text style={jokeRollTopTitle}>Stories</Text>
          </View>

          <View style={jokeRollListWrap}>
            {storiesJokeRoll.map(storyJokeRoll => (
              <TouchableOpacity
                key={storyJokeRoll.id}
                activeOpacity={0.75}
                onPress={() => {
                  openStoryJokeRoll(storyJokeRoll);
                  if (isEnabledVibrationJokeRoll) Vibration.vibrate(250);
                }}
                style={jokeRollPillBtn}
              >
                <Text style={jokeRollPillText}>{storyJokeRoll.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

/** styles as objects */
const jokeRollBg = { flex: 1 };

const jokeRollScrollContent = { flexGrow: 1 };

const jokeRollMainWrap = { flex: 1, paddingBottom: 80 };

const jokeRollTopWrap = {
  backgroundColor: '#2A0030',
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  paddingBottom: 18,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
};

const jokeRollTopTitle = {
  fontSize: 24,
  fontWeight: '700' as const,
  color: '#fff',
};

const jokeRollListWrap = {
  flex: 1,
  paddingTop: 18,
  paddingBottom: 28,
  alignItems: 'center' as const,
  gap: 16,
};

const jokeRollPillBtn = {
  minHeight: 64,
  width: '90%',
  borderRadius: 999,
  backgroundColor: '#671074',
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  padding: 8,

  shadowColor: '#000',
  shadowOpacity: 0.18,
  shadowRadius: 10,
  shadowOffset: { width: 0, height: 6 },
  elevation: 5,
};

const jokeRollPillText = {
  color: '#fff',
  fontSize: 18,
  fontWeight: '500' as const,
  textAlign: 'center' as const,
};

export default Bigrockstrsscrn;
