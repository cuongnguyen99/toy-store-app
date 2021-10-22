import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableHighlight } from 'react-native';

import { AppText } from '../common';
import color from '../../config/colors';

const heightProduct = 320;
const heightImg = (320/100)*70;

function Product({image, title, price, onSale=null}) {
    return (
        <View style={styles.product}>
            <TouchableHighlight 
                style={styles.productBox} 
                activeOpacity={0.78}  
                onPress={() => console.log(onSale)}
            >
                <View style={styles.productInner}>
                    <ImageBackground 
                        source={image} 
                        style={styles.productImage} 
                        resizeMode='stretch'
                    >
                    </ImageBackground>
                    <View style={styles.productContent}>
                        <AppText style={styles.productTitle} lineNumber={2}>{title}</AppText>
                        <AppText 
                            style={[
                                styles.productPrice,
                                onSale ? {textDecorationLine: 'line-through'} : {textDecorationLine: 'none'}
                            ]}
                        >
                            {price}$
                        </AppText>
                    </View>
                </View>
            </TouchableHighlight>
            {onSale ? (
                <View style={[styles.sale, {zIndex: 1}]}>
                    <AppText style={styles.sale_price}>{onSale}$</AppText>
                    <View style={styles.sale_child}/>
                </View>) : null
            }
            
        </View>
    );
}

const styles = StyleSheet.create({
    product:{
        backgroundColor: color.background,
        width: "50%",
        height: heightProduct,
        padding: 5,
    },
    productBox:{
        backgroundColor: color.sub_background,
        flex:1,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 1
    },
    productImage: {
        width: "100%",
        height: heightImg,
    },
    productContent: {
        backgroundColor: color.sub_background,
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    productTitle: {
        position: 'absolute',
        textAlign: 'center',
        width:"100%",
        top: 4
    },
    productPrice: {
        color: color.primary,
        position: 'absolute',
        bottom: 0,
        marginBottom: 10,
        
    },
    productInner: {
        backgroundColor: color.sub_background,
        flex: 1,
    },
    sale: {
        position: 'absolute',
        backgroundColor: color.sale,
        bottom: 110,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        zIndex: 1,
        elevation: 2,
        minWidth: 65
    },
    sale_price: {
        fontSize: 16,
        color: color.sub_background
    },
    sale_child: {
        position:'absolute',
        top: -7,
        left: 0,
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 5,
        borderTopWidth: 7,
        borderRightColor: "transparent",
        borderTopColor: color.sale,
        transform: [{ rotate: "180deg" }],
    }
})

export default Product;