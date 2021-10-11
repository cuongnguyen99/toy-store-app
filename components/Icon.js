import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet} from 'react-native';
import color from '../config/colors';



function Icon({
        name,
        size = 50,
        background = color.icon_background,
        iconColor = color.text
    }) {
    return(
        <View styles={[styles.icon, {with: size, height: size, borderRadius: size/2, backgroundColor: background}]}>
            <MaterialCommunityIcons name={name} size={size/2} color={iconColor}></MaterialCommunityIcons>
        </View>
    );
}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Icon;