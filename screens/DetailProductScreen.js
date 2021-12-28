import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import {StyleSheet, ImageBackground, View, TouchableOpacity} from 'react-native';
import SimpleToast from 'react-native-simple-toast';

import { AppText, Button, Icon } from '../components/common';
import color from '../config/colors';
import Screen from './Screen';
import CartContext from '../auth/CartContext';
import ListItemSeparator from '../components/lists/ListItemSeparator';

import userApi from "../api/users";
import cache from '../utility/cache';

function DetailProductScreen({title, price, desception, route, navigation}) {
    const product = route.params;
    const {cart, setCart} = useContext(CartContext);

    const handleGoBack = () => {
        navigation.goBack(null);
    }

    const handleAddToCart = async (product) => {
        const checkExist = cart.some(item => {
            return item._id === product._id;
        })

        if(checkExist){
            return SimpleToast.showWithGravity('Sản phẩm đã có trong giỏ hàng!', SimpleToast.SHORT, SimpleToast.CENTER);
        }

        const newProduct = {...product, quantity: 1}
        const newCart = [...cart, newProduct];

        setCart(newCart);
        userApi.addToCart(newCart, await cache.get("AccessToken"));
        SimpleToast.showWithGravity('Thêm vào giỏ hàng thành công!', SimpleToast.SHORT, SimpleToast.CENTER);
    }

    return (
        <Screen style={styles.container}>
            <ImageBackground style={styles.image} source={{uri: product.mainimg.url}}>
                <TouchableOpacity activeOpacity={0.1} onPress={handleGoBack} style={styles.backBtn}>
                    <MaterialCommunityIcons name="keyboard-backspace" size={30} color={color.black}/>
                </TouchableOpacity>
            </ImageBackground>
            <View style={styles.displayInner}>
                <AppText style={styles.title} numberOfLines={2} ellipsizeMode='clip'>{product.title}</AppText>
                <View style={styles.priceInner}>
                    <AppText style={{fontSize: 24}}>Giá : </AppText>
                    <AppText style={styles.price}>${product.price}</AppText>
                </View>

                <ListItemSeparator style={styles.listing}/>
                <View style={styles.descriptionInner}>
                    <AppText style={{marginBottom: 10}}>Mô tả sản phẩm : </AppText>
                    <AppText style={styles.desception}>{product.description}</AppText>
                </View>

                <ListItemSeparator style={styles.listing}/>
                <View style={styles.descriptionInner}>
                    <AppText style={{marginBottom: 10}}>Chi tiết sản phẩm:</AppText>
                    <View style={[styles.boxDetail, {marginBottom: 4}]}>
                        <AppText style={[styles.desception, {flex: 0.3}]}>Kích thước:</AppText>
                        <AppText style={[styles.desception, {flex: 0.7}]}>{product.dimensions}</AppText>
                    </View>
                    <View style={[styles.boxDetail, {marginBottom: 4}]}>
                        <AppText style={[styles.desception, {flex: 0.3}]}>Độ tuổi:</AppText>
                        <AppText style={[styles.desception, {flex: 0.7}]}>{product.age}</AppText>
                    </View>
                    <View style={[styles.boxDetail, {marginBottom: 4}]}>
                        <AppText style={[styles.desception, {flex: 0.3}]}>Chất liệu:</AppText>
                        <AppText style={[styles.desception, {flex: 0.7}]}>{product.material}</AppText>
                    </View>
                    <View style={[styles.boxDetail, {marginBottom: 4}]}>
                        <AppText style={[styles.desception, {flex: 0.3}]}>Xuất xứ:</AppText>
                        <AppText style={[styles.desception, {flex: 0.7}]}>{product.origin}</AppText>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonInner} activeOpacity={0.7} onPress={() => handleAddToCart(product)}>
                <MaterialCommunityIcons name="cart-plus" size={35} color={color.sub_background}/>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 300
    },
    displayInner: {
        paddingTop: 5,
        paddingRight: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'normal',
        marginLeft: 10
    },
    priceInner: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginLeft: 10
    },
    price:{
        fontSize: 24,
        color: color.primary
    },
    descriptionInner: {
        marginTop: 20,
        marginLeft: 10
    },
    desception: {
        fontSize: 14,
        color: color.sub_text
    },
    buttonInner:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 0,
        height: 50
    },
    backBtn: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: "#c5c6d0",
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    listing: {
        backgroundColor: "#efefef",
        height: 10,
        width: "120%",
        marginLeft: 0,
        marginTop: 20
    }, 
    boxDetail: {
        flexDirection: 'row'
    }
})

export default DetailProductScreen;