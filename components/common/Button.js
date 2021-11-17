import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text,TouchableOpacity } from 'react-native';

import color from '../../config/colors';

function Button({title, background, icon, onPress, style}){
    return(
        <TouchableOpacity onPress={onPress}
            activeOpacity = {0.7}
            style = {[
                styles.button, 
                background ? {backgroundColor: background} : {backgroundColor: color.primary},
                style 
            ]}>
            {/* {icon && <MaterialCommunityIcons icon={icon} size={40} color={color.white}/>} */}
            <MaterialCommunityIcons style={styles.icon} name={icon} size={40} color={color.white}/>
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
        flexDirection: 'row'
    },
    text: {
        fontSize: 18,
        color: color.white,
        fontWeight: "bold",
    },
    icon: {
        position: 'absolute',
        left: 20
    }
})

export default Button;