import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import CartItem from '../components/cart/CartItem';
import { AppText, Button } from '../components/common';
import ListItemDelete from '../components/lists/ListItemDelete';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import color from '../config/colors';

import Screen from './Screen';
import CartContext from '../auth/CartContext';

function CartScreen({route, navigation}) {
    const {cart, setCart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const totalPrice = () => {
        const total = cart.reduce((total, item) => {
            return total += (item.price * item.quantity);
        }, 0);
        setTotal(total);
    }
    
    const handleDelete = (product) => {
        const newProducts = cart.filter( (m) => m.name != product.name);
        setCart(newProducts);
    }

    const handleAddPress = (product) => {
        const newProducts = [...cart];
        const index = newProducts.indexOf(product);

        newProducts[index] = {...product};
        newProducts[index].quantity++;
        setCart(newProducts);
    }

    const handleSubtractPress = (product) => {
        const newProducts = [...cart];
        const index = newProducts.indexOf(product);

        newProducts[index] = {...product};
        if(newProducts[index].quantity > 1 ){
            newProducts[index].quantity--;
        }
        setCart(newProducts);
    }

    const handlePress = () => {
        navigation.navigate("Payment", {total: total});
    }

    useEffect( () => {
        totalPrice(); 
     }, [cart] )

    return (
        <View style={styles.container}>
            <FlatList
                data={cart}
                keyExtractor={(cartitem) => cartitem.name}
                renderItem={({item}) => (
                    <CartItem
                        title={item.name}
                        price={item.price}
                        image={item.image}
                        quantity={item.quantity}
                        onAddPress={() => handleAddPress(item)}
                        onSubtractPress={() => handleSubtractPress(item)}
                        renderRightActions={
                            () => <ListItemDelete  onPress={() =>handleDelete(item)}/>
                        }
                    />
                )}
                ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator}/>}
            />
            <View style={styles.bottom}>
                <View style={styles.bottom_price}>
                    <AppText style={styles.total_title}>Tổng tiền:</AppText>
                    <AppText style={styles.total_price}>{total}đ</AppText>
                </View>
                <Button title="Đặt hàng" style={styles.submit} onPress={handlePress}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 130,
        paddingTop: 0,
        backgroundColor: color.background
    },
    separator: {
        width: '100%',
        marginLeft: 0
    },
    bottom: {
        backgroundColor: color.sub_background,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 10
    },
    bottom_price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    total_title: {
        fontSize: 24
    },
    total_price: {
        fontSize: 24
    },
    submit: {
        width: '60%',
        alignSelf: 'center'
    }
})

export default CartScreen;