import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

import { postMessage } from '../services/api';

const Compose = () => {
  const [newText, updateText] = useState('');

  return (
      <View style={styles.componentContainer}>
      <TextInput style={styles.textInput} onChangeText={(txt) => {updateText(txt)}} value={newText}/>
      <View style={styles.sendButton}>
      <Button
        accessibilityLabel="Send"
        onPress={() => {postMessage(newText); updateText('');}}
        title="Send">
      </Button>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  componentContainer: { flexDirection: 'row', backgroundColor: 'white'},
  sendButton: { paddingLeft: 10 },
  textInput: {
    backgroundColor: 'lightgray',
    borderColor: 'gray',
    borderWidth: 1,
    height: 40,
    marginLeft: 10,
    marginTop: 5,
    padding: 5,
    width: '75%'
  }
})

export default Compose;