import React from 'react';
import { StyleSheet, View, Text, Touchable, TouchableOpacity } from 'react-native';
import color from '../config/colors';

function Button({title, color}){
    return(
        <TouchableOpacity 
            activeOpacity = {0.7}
            style = {[styles.button, {backgroundColor: color}]}
        >
            <Text
                style={styles.text}
            >{title}</Text>
        </TouchableOpacity>
    );
    
    
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 50,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 18,
        color: color.white,
        fontWeight: "bold"
    }
})

export default Button;