import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { View, StyleSheet, TouchableHighlight} from 'react-native';
import color from '../../config/colors'

function ListItemDelete({onPress}) {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons
                    style={styles.icon}
                    name="trash-can-outline"
                />
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        width: 70,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontSize: 30,
        color: color.white
    }
})

export default ListItemDelete;