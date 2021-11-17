import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import color from '../../config/colors';
import { AppText } from '../common';

function CartItem({title, price, image, quantity ,renderRightActions, onAddPress, onSubtractPress}) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri: image}}/>
                <View style={styles.infor}>
                    <AppText style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</AppText>
                    <AppText style={styles.price}>{price}đ</AppText>
                </View>
                <View style={styles.control_quantity}>
                    <Text onPress={onSubtractPress} style={styles.subtract}>-</Text>
                    <AppText style={styles.quantity}>{quantity}</AppText>
                    <Text onPress={onAddPress} style={styles.add}>+</Text>
                </View>
            </View>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 10,
        flexDirection: 'row',
        backgroundColor: color.sub_background,
        alignItems: 'center',
        padding: 5
    },
    image: {
        flex: 0.2,
        width: 80,
        height: 80,
        resizeMode: 'stretch',
    },
    infor: {
        flex: 0.55,
        marginLeft: 10
    },
    title: {
        marginBottom: 7
    },
    price: {
        fontSize: 15,
    },
    control_quantity: {
        flexDirection: 'row',
        flex: 0.25,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: color.sub_text,
        marginLeft: 10,
    },
    add: {
        fontSize: 18,
        borderColor: color.sub_text,
        borderLeftWidth: 1,
        paddingLeft: 8,
        paddingRight: 8
    },
    subtract: {
        fontSize: 18,
        borderColor: color.sub_text,
        borderRightWidth: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    quantity: {
        fontSize: 14
    }
})

export default CartItem;