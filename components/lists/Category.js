import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import color from '../../config/colors';

function Category({title, image, onPress}) {
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <ImageBackground
            source= {{uri: image}}
            style = {styles.background}
            >
            <View style= {styles.view}>
            </View>
            <Text style={styles.text}>{title}</Text>
            </ImageBackground>
        </TouchableOpacity> 
    );
    
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 0
    }
    ,
    background: {
        width: "100%",
        height: 170,
        resizeMode: 'center',
        borderRadius: 20,
        overflow: 'hidden',
        textAlignVertical: "center",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    view: {
        position: 'absolute',
        backgroundColor: color.black,
        width: "100%",
        height: "100%",
        opacity: 0.3,
    },
    touch:{
        resizeMode: 'contain'
    },
    text: {
        position: 'absolute',
        color: color.white,
        fontSize: 35,
    }
})

export default Category;