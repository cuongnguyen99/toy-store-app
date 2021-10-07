import React from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import color from '../config/colors';

function Category({title,image}) {
    return(
        <TouchableOpacity 
            style={styles.container}
            activeOpacity={0.7}
        >
            <ImageBackground
            source={image}
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
        marginBottom: 15,
        marginLeft: 20,
        marginRight: 20
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
        alignItems: "center"
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