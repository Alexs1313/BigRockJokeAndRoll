import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';

const BIGROCK_NOTEBOOK_KEY = 'BIGROCK_NOTEBOOK_ITEMS';

const JOKE_PROMPTS: string[] = [
  "What's something normal in everyday life that actually makes no sense?",
  "What's a small thing that annoys you way more than it should?",
  "What's a modern habit people would struggle to explain 50 years ago?",
  "What's something people pretend to enjoy but secretly hate?",
  "What's the weirdest part about being an adult?",
  "What's something that always goes wrong no matter how simple it is?",
  "What's a situation where people suddenly act completely different?",
  "What's something people take way too seriously?",
  "What's something that used to be exciting but now feels exhausting?",
  "What's something that should be easy but somehow isn't?",
  "What's a moment where technology made life more complicated instead of easier?",
  "What's a rule everyone pretends to follow but doesn't?",
  "What's something people always say but never actually mean?",
  "What's something that feels illegal but isn't?",
  "What's something you thought adults understood when you were a kid?",
  "What's something people do when they're alone but never admit?",
  "What's something that instantly ruins your mood?",
  "What's something people exaggerate about their lives?",
  "What's a situation where everyone pretends to know what they're doing?",
  "What's something that makes you question humanity?",
  "What's the weirdest social situation people just accept?",
  "What's something people do in public that feels strange when you think about it?",
  "What's something that always feels awkward no matter what?",
  "What's something people complain about but never fix?",
  "What's something that always happens at the worst possible time?",
  "What's something that sounds impressive but actually isn't?",
  "What's a daily routine that slowly destroys your motivation?",
  "What's something that always starts as a good idea but ends badly?",
  "What's something people say during arguments that makes no sense?",
  "What's a life lesson you learned the hard way?",
  "What's something that feels like a scam but everyone accepts?",
  "What's something that feels different when you're older?",
  "What's something people do to look cool but fail miserably?",
  "What's something that becomes stressful for no reason?",
  "What's something that always happens when you're in a hurry?",
  "What's something that's supposed to relax you but does the opposite?",
  "What's something people lie about all the time?",
  "What's something that would sound insane if you described it literally?",
  "What's something people secretly judge others for?",
  "What's something that feels unfair in everyday life?",
  "What's something that never goes according to plan?",
  "What's something people always underestimate?",
  "What's something that instantly makes a situation awkward?",
  "What's something people expect you to understand without explanation?",
  "What's something that feels much harder than it should be?",
  "What's something people say when they don't know what to say?",
  "What's something that sounds simple but becomes complicated fast?",
  "What's something people pretend to care about?",
  "What's something that always leads to unnecessary drama?",
  "What's something about modern life that would confuse someone from the past?",
];

function pickRandomPrompt(): string {
  return JOKE_PROMPTS[Math.floor(Math.random() * JOKE_PROMPTS.length)];
}

type NotebookItem = {
  id: string;
  name: string;
  text: string;
  createdAt: number;
};

const Notebook: React.FC = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { height } = useWindowDimensions();

  const [items, setItems] = useState<NotebookItem[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [nameInput, setNameInput] = useState('');
  const [textInput, setTextInput] = useState('');
  const [randomPrompt, setRandomPrompt] = useState<string>(() =>
    pickRandomPrompt(),
  );

  const loadItems = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(BIGROCK_NOTEBOOK_KEY);
      const parsed: NotebookItem[] = raw ? JSON.parse(raw) : [];
      parsed.sort((a, b) => b.createdAt - a.createdAt);
      setItems(parsed);
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    if (isFocused) loadItems();
  }, [isFocused, loadItems]);

  const handleBack = useCallback(() => {
    if (showAddForm) {
      setShowAddForm(false);
      setNameInput('');
      setTextInput('');
    } else {
      navigation.goBack();
    }
  }, [showAddForm, navigation]);

  const saveItems = useCallback(async (next: NotebookItem[]) => {
    setItems(next);
    await AsyncStorage.setItem(BIGROCK_NOTEBOOK_KEY, JSON.stringify(next));
  }, []);

  const handleAddJoke = useCallback(() => {
    const name = nameInput.trim() || 'Joke';
    const text = textInput.trim() || '';
    if (!text) return;

    const newItem: NotebookItem = {
      id: `nb_${Date.now()}`,
      name,
      text,
      createdAt: Date.now(),
    };
    saveItems([newItem, ...items]);
    setNameInput('');
    setTextInput('');
    setShowAddForm(false);
  }, [nameInput, textInput, items, saveItems]);

  const handleGenerateIdea = useCallback(() => {
    setShowAddForm(true);
    setNameInput('');
    setTextInput('');
    setRandomPrompt(pickRandomPrompt());
  }, []);

  const handleGenerateAnotherPrompt = useCallback(() => {
    setRandomPrompt(pickRandomPrompt());
  }, []);

  return (
    <ImageBackground
      source={require('../../assets/images/bigrockbg.png')}
      style={styles.bg}
    >
      <View style={styles.full}>
        <View
          style={[
            styles.headerWrap,
            { minHeight: 130, paddingTop: height * 0.06 },
          ]}
        >
          {showAddForm && (
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={handleBack}
              style={styles.backBtn}
            >
              <Image source={require('../../assets/images/bigrockback.png')} />
            </TouchableOpacity>
          )}
          <Text style={styles.headerTitle}>Notebook</Text>
        </View>

        {showAddForm ? (
          <ScrollView
            contentContainerStyle={styles.formScroll}
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled"
          >
            <Text style={styles.label}>Joke Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter the joke name..."
              placeholderTextColor="rgba(255,255,255,0.5)"
              value={nameInput}
              onChangeText={setNameInput}
            />
            <Text style={styles.label}>Joke</Text>
            <TextInput
              style={[styles.input, styles.inputMultiline]}
              placeholder="Enter joke..."
              placeholderTextColor="rgba(255,255,255,0.5)"
              value={textInput}
              onChangeText={setTextInput}
              multiline
            />
            <View style={styles.jokeDisplay}>
              <Text style={styles.jokeDisplayText}>{randomPrompt}</Text>
            </View>
            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={handleAddJoke}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryBtnText}>Add Joke</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryBtn}
              onPress={handleGenerateAnotherPrompt}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryBtnText}>Generate another one</Text>
            </TouchableOpacity>
            <View style={{ height: 120 }} />
          </ScrollView>
        ) : items.length === 0 ? (
          <View style={styles.emptyWrap}>
            <Text style={styles.emptyText}>
              You don't have any jokes recorded yet.
            </Text>
            <View style={styles.characterWrap}></View>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={styles.listScroll}
            showsVerticalScrollIndicator={false}
          >
            {items.map(item => (
              <View key={item.id} style={styles.card}>
                <Text style={styles.cardName}>{item.name}</Text>
                <Text style={styles.cardText} numberOfLines={2}>
                  {item.text}
                </Text>
              </View>
            ))}

            <View style={{ height: 120 }} />
          </ScrollView>
        )}

        {items.length === 0 && !showAddForm && (
          <Image
            source={require('../../assets/images/bigjokelemptyjokes.png')}
            style={styles.characterImg}
          />
        )}

        {!showAddForm && items.length === 0 && (
          <TouchableOpacity
            style={[
              styles.primaryBtn,
              {
                position: 'absolute' as const,
                bottom: 120,
                width: '90%',
                alignSelf: 'center',
              },
            ]}
            onPress={handleGenerateIdea}
            activeOpacity={0.8}
          >
            <Text style={styles.primaryBtnText}>Generate an idea</Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = {
  bg: { flex: 1 } as const,
  full: { flex: 1 } as const,
  headerWrap: {
    backgroundColor: '#2A0030',
    paddingBottom: 18,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  backBtn: {
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
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700' as const,
    color: '#FFFFFF',
  },
  emptyWrap: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    alignItems: 'center' as const,
  },
  emptyText: {
    textAlign: 'center' as const,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700' as const,
    marginBottom: 20,
    marginTop: 40,
    width: '80%',
  },
  characterWrap: {
    flex: 1,
    minHeight: 200,
    marginVertical: 16,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },
  characterImg: {
    position: 'absolute' as const,
    bottom: 0,
  },
  primaryBtn: {
    alignSelf: 'center' as const,
    backgroundColor: '#DA39F2',
    width: '100%',
    height: 70,
    borderRadius: 20,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    borderWidth: 4,
    borderColor: '#FFFFFF',
    minWidth: 260,
    zIndex: 1,
  },
  primaryBtnText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700' as const,
  },
  secondaryBtn: {
    alignSelf: 'center' as const,
    backgroundColor: '#DA39F2',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    marginTop: 12,
    minWidth: 260,
    alignItems: 'center' as const,
  },
  listScroll: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  card: {
    backgroundColor: '#671074',
    borderRadius: 24,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 16,
    alignItems: 'center' as const,
  },
  cardName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700' as const,
    marginBottom: 12,
  },
  cardText: {
    color: 'rgba(255,255,255,0.95)',
    fontSize: 15,
    fontWeight: '400' as const,
    lineHeight: 22,
  },
  formScroll: {
    paddingHorizontal: 24,
    paddingTop: 24,

    paddingBottom: 150,
  },
  label: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600' as const,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#2A0030',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 18,
    color: '#FFFFFF',
    fontSize: 16,
    marginBottom: 20,
    fontStyle: 'italic',
  },
  inputMultiline: {
    minHeight: 180,
    textAlignVertical: 'top' as const,
  },
  jokeDisplay: {
    backgroundColor: '#671074',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 38,
    marginBottom: 24,
    borderWidth: 0,
    minHeight: 110,
    justifyContent: 'center' as const,
  },
  jokeDisplayText: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center' as const,
  },
};

export default Notebook;
