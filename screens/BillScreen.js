import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import BillItem from '../components/cart/BillItem';
import color from '../config/colors';

const initData = [
    {
        billID: '0123456789PH',
        totalPrice: 1000000,
        status: [
            'Chưa xác nhận',
            'Đã xác nhận',
            'Đang vận chuyển',
            'Đã giao hàng'
        ]
    },
    {
        billID: '1123456789PH',
        totalPrice: 1000000,
        status: [
            'Chưa xác nhận'
        ]
    },
    {
        billID: '2123456789PH',
        totalPrice: 1000000,
        status: [
            'Chưa xác nhận',
            'Đã xác nhận',
            'Đang vận chuyển'
        ]
    },
];

function BillScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={initData}
                keyExtractor={(billItem) => billItem.billID}
                renderItem={({item}) => (
                    <BillItem 
                        billId={item.billID}
                        totalPrice={item.totalPrice}
                        status={item.status}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: color.background
    }
})

export default BillScreen;