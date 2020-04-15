import * as React from 'react';
import { Button, ImageBackground, Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';

import ChatViewScreen from './src/components/ChatViewScreen';
import Conversations from './src/components/Conversations';

const Stack = createStackNavigator();
const backgroundUrl = 'https://st4.depositphotos.com/3146979/20504/v/600/depositphotos_205041434-stock-video-abstract-animated-stained-background-seamless.jpg';

export default function App(props) {
  const [screen, setScreen] = React.useState('chatview');
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  switchScreen = (updatedScreen) => {
    setScreen(updatedScreen);
  }

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
  return (
    <View>
      <StatusBar barStyle='dark-content' style={styles.statusBar}/>
      <SafeAreaView>
      <ImageBackground style={styles.backgroundImg} source={{uri: backgroundUrl}}>
        {screen === 'conversations' && <Conversations/>}
        {screen === 'chatview' && <ChatViewScreen/>}
        {screen !== 'conversations' &&
        <Button
          onPress={() => {switchScreen('conversations')}}
          title="Go To Conversations"
          accessibilityLabel="Conversations"
        />
        }
        {screen !== 'chatview' && 
          <Button
            onPress={() => {switchScreen('chatview')}}
            title="Go To Chat View"
            accessibilityLabel="Chat View"
          />
        }
        </ImageBackground>
      </SafeAreaView>
  </View>
  );
  }
}

const styles = StyleSheet.create({
  backgroundImg: {
    height: '100%',
    width: '100%'
  },
  statusBar: {
    backgroundColor: 'black',
  },
});
