import React from 'react';
import {View, StyleSheet} from 'react-native';
import color from '../../config/colors';

// import colors from '';

function ListItemSeparator() {
    return (
        <View style={styles.separator}/>
    );
}

const styles = StyleSheet.create({
    separator: {
        backgroundColor: color.sub_text,
        width: "95%",
        height: 1,
        marginLeft: "2.5%"
    }
})

export default ListItemSeparator;