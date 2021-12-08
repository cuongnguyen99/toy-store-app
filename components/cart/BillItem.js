import React from 'react';
import {StyleSheet, View} from 'react-native';

import { AppText } from '../common';
import color from '../../config/colors';

function BillItem({billId, totalPrice, status}) {
    return (
        <View style={styles.container}>
            <View style={styles.billInner}>
                <AppText style={styles.billId}>Mã hóa đơn: {billId}</AppText>
                <AppText style={styles.totalPrice}>Tổng tiền: ${totalPrice}</AppText>
            </View>
            <AppText style={styles.status}>{status}</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: color.sub_background,
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 5
    },
    billInner: {
        flex: 1
    },
    billId: {
        marginBottom: 20,
        fontSize: 20,
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