import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View} from 'react-native';
import CartItem from '../components/cart/CartItem';
import { AppText, Button } from '../components/common';
import ListItemDelete from '../components/lists/ListItemDelete';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import color from '../config/colors';

import Screen from './Screen';

const initProducts = [
    {
        id: 1,
        title: "Đồ chơi 4 xe công trình NÔNG NGHIỆP lắp ráp ốc vít chạy trớn XY01-1",
        price: 1200000,
        image: "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
        quantity: 1
    },
    {
        id: 2,
        title: "Đồ chơi 4 xe công trình NÔNG NGHIỆP lắp ráp ốc vít chạy trớn XY01-1",
        price: 1200000,
        image: "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
        quantity: 1
    },
    {
        id: 3,
        title: "Đồ chơi 4 xe công trình NÔNG NGHIỆP lắp ráp ốc vít chạy trớn XY01-1",
        price: 1200000,
        image: "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
        quantity: 1
    },
    {
        id: 4,
        title: "Đồ chơi 4 xe công trình NÔNG NGHIỆP lắp ráp ốc vít chạy trớn XY01-1",
        price: 1200000,
        image: "https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-de-thuong.jpg",
        quantity: 1
    }
];

function CartScreen(props) {
    const [products, setProducts] = useState(initProducts);
    const [total, setTotal] = useState(0);

    const totalPrice = () => {
        const total = products.reduce((total, item) => {
            return total += (item.price * item.quantity);
        }, 0);
        setTotal(total);
    }
    
    const handleDelete = (product) => {
        const newProducts = products.filter( (m) => m.id != product.id);
        setProducts(newProducts);
    }

    const handleAddPress = (product) => {
        const newProducts = [...products];
        const index = newProducts.indexOf(product);

        newProducts[index] = {...product};
        newProducts[index].quantity++;
        setProducts(newProducts);
    }

    const handleSubtractPress = (product) => {
        const newProducts = [...products];
        const index = newProducts.indexOf(product);

        newProducts[index] = {...product};
        if(newProducts[index].quantity > 1 ){
            newProducts[index].quantity--;
        }
        setProducts(newProducts);
    }

    useEffect( () => {
        totalPrice(); 
     }, [products] )

    return (
        <Screen style={styles.container}>
            <FlatList
                data={products}
                keyExtractor={(product) => product.id}
                renderItem={({item}) => (
                    <CartItem
                        title={item.title}
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
                <Button title="Đặt hàng" style={styles.submit}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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