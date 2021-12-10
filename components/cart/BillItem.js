import React from 'react';
import {StyleSheet, View} from 'react-native';

import { AppText } from '../common';
import color from '../../config/colors';

function BillItem({billId, totalPrice, status}) {
    return (
        <View style={styles.container}>
            <AppText style={styles.billId} numberOfLines={1} ellipsizeMode='tail'>Mã hóa đơn: {billId}</AppText>
            <View style={styles.billInner}>
                <AppText style={styles.totalPrice}>Tổng tiền: ${totalPrice}</AppText>
                <AppText style={styles.status}>{status}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.sub_background,
        padding: 10,
        marginTop: 5
    },
    billInner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    billId: {
        marginBottom: 20,
        fontSize: 18,
    },
    totalPrice: {
        fontSize: 16,
    },
    status: {
        textAlignVertical: 'bottom',
        color: color.primary,
        fontSize: 14,
    }
})

export default BillItem;