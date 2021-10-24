import React from 'react';
import {StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import color from '../../config/colors';

function Icon({
        name,
        size = 50,
        backgroundColor = color.sub_background,
        iconColor = "#000",
        style
    }) {
    return(
        <View style={[styles.icon, {width: size, height: size, borderRadius: size/2, backgroundColor}, style]}>
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