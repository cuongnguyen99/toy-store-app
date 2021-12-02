import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import BillItem from '../components/cart/BillItem';
import color from '../config/colors';

import AuthContext from '../auth/context';
import paymentApi from '../api/payment';

function BillScreen(props) {
    const {user, setUser} = useContext(AuthContext);
    const [listBill, setListBill] = useState([]);

    const getListBill = async () => {
        const result = await paymentApi.getBill(user.email);
        if(!result.ok) {
            console.log("Get list bill error!");
        }
        setListBill(result.data);
    }

    useEffect(() => {
        getListBill();
    },[])

    return (
        <View style={styles.container}>
            <FlatList
                data={listBill}
                keyExtractor={bill => bill.id}
                renderItem={({item}) => (
                    <BillItem 
                        billId={item.id}
                        totalPrice={item.total}
                        status={item.billstatus}
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