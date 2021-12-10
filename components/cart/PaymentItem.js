import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import color from '../../config/colors';
import {AppText} from '../common';

function PaymentItem({title, price, image, quantity}) {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: image}}/>
            <View style={styles.infor}>
                <AppText style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{title}</AppText>
                <AppText style={styles.price}>${price}</AppText>
            </View>
            <AppText style={styles.quantity}>x{quantity}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
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
        flex: 0.7,
        marginLeft: 10
    },
    title: {
        marginBottom: 7,
        fontSize: 16
    },
    price: {
        fontSize: 16,
        color: color.primary
    },
    quantity: {
        flex: 0.1,
        fontSize: 14,
    }
})

export default PaymentItem;