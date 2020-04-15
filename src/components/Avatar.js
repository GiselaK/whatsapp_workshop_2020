import React from 'react';

import { Image, StyleSheet, Text, View } from "react-native";

const Avatar = (props) => {
    return (
     <Image
        style={styles.img}
        source={{uri: props.imgUrl}}></Image>
    );
}

const styles = StyleSheet.create({
    img: {
        height: 45, 
        marginRight: 10,
        width: 45
    }
});

export default Avatar;