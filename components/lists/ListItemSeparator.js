import React from 'react';
import {View, StyleSheet} from 'react-native';
import color from '../../config/colors';

// import colors from '';

function ListItemSeparator({style}) {
    return (
        <View style={[styles.separator, style]}/>
    );
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: color.sub_text,
        width: "93%",
        height: 1,
        marginLeft: "4%"
    }
})

export default ListItemSeparator;