import React from 'react';
import { Button, FlatList, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from "react-native";

import ChatItem from './ChatItem';
import Compose from './Compose';
import { mockMessages } from '../services/api';

const ChatViewScreen = (props) => {

  const tempImg = (id) => {
    const tempImgSender = 'https://img.favpng.com/22/12/3/stewie-griffin-image-miui-xiaomi-photograph-png-favpng-FzbdRVAfwhAGJnUwcFQ0YmCtV.jpg';
    const tempImgReciever = 'http://southparkstudios.mtvnimages.com/shared/characters/alter-egos/identities-cop-cartman.png';
    return (id === 1 ? tempImgReciever : tempImgSender);
  }


  return (
    <>
      <View style={styles.messagesContainer}>
        <FlatList data = {mockMessages} keyExtractor = {(msg, index) => index} renderItem={({item}) =>  (<View style={[styles.message, item.userId === 1 ? styles.messageSelf: null]}><ChatItem imgUrl={tempImg(item.userId)} msg={item.msg}/></View>)}/>
      </View>
      <Compose/>
    </>
  );
}

const styles = StyleSheet.create({
  messagesContainer: {
    height: 550
  },
  message: {
    backgroundColor: "white",
    borderWidth: 1,
    margin: 5,
    padding: 10,
    width: '70%'
  },
  messageSelf: {
    alignSelf: 'flex-end',
    backgroundColor: 'lightgreen'
  }
});

export default ChatViewScreen;