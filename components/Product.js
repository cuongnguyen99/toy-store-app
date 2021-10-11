import React from 'react';
import { View, StyleSheet, Image, ImageBackground, TouchableHighlight } from 'react-native';

import color from '../config/colors';
import AppText from './AppText';

const heightProduct = 320;
const heightImg = (320/100)*70;

function Product({image, title, price}) {
    return (
        <View style={styles.product}>
            <TouchableHighlight 
                style={styles.productBox} 
                activeOpacity={0.78}  
                onPress={() => console.log("")}
            >
                <View style={styles.productInner}>
                <ImageBackground 
                    source={image} 
                    style={styles.productImage} 
                    resizeMode='stretch'
                />
                <View style={styles.productContent}>
                    <AppText style={styles.productTitle} lineNumber={2}>{title}</AppText>
                    <AppText style={styles.productPrice}>{price}</AppText>
                </View>
                </View>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    product:{
        backgroundColor: color.background,
        width: "50%",
        height: heightProduct,
        padding: 5,
        borderRadius: 10,
        overflow: 'hidden'
    },
    productBox:{
        backgroundColor: color.sub_background,
        flex:1,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
    },
    productImage: {
        width: "100%",
        height: heightImg,
    },
    productContent: {
        backgroundColor: color.background,
        width: "100%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
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
        marginBottom: 10
    },
    productInner: {
        backgroundColor: color.sub_background,
        flex:1,
    }
})

export default Product;