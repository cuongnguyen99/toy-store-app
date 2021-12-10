import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import BillItem from '../components/cart/BillItem';
import color from '../config/colors';

import AuthContext from '../auth/context';
import cache from '../utility/cache';
import payment from '../api/payment';

function BillScreen(props) {
    const {user, setUser} = useContext(AuthContext);
    const [listBill, setListBill] = useState([]);

    const getListBill = async () => {
        
        const accessToken = await cache.get("AccessToken");
        const result = await payment.getBill(accessToken);

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
                keyExtractor={bill => bill._id}
                renderItem={({item}) => (
                    <BillItem 
                        billId={item.paymentID}
                        totalPrice={item.total}
                        status={item.shippingstatus}
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