import React from 'react';
import { StyleSheet, Text, View } from "react-native";

import Avatar from './Avatar';

const ChatItem = (props) => {
    return (
        <View style={styles.componentContainer}><Avatar imgUrl={props.imgUrl}></Avatar><Text>{props.msg}</Text></View>
    );
};

const styles = StyleSheet.create({
    componentContainer: {
        flexDirection: 'row',
        width: '80%'
    }
});

export default ChatItem;