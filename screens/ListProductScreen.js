import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {Product } from '../components/lists';
import color from '../config/colors';
import Screen from './Screen';

const products = [
    {   
        id: 1,
        image: require('../assets/images/lego.jpg'),
        title: "Bộ lego tàu chiến",
        price: "500",
        onSale: null
    },
    {
        id: 2,
        image: require('../assets/images/lego.jpg'),
        title: "Bộ lego tàu chiến onsale",
        price: "500",
        onSale: "300"
    },
    {
        id: 3,
        image: require('../assets/images/lego2.jpg'),
        title: "Bộ lego hình súng ngắn cầm tay",
        price: "200",
        onSale: null
    },
    {
        id: 4,
        image: require('../assets/images/lego.jpg'),
        title: "Súng",
        price: "1000",
        onSale: "500"
    },
    {
        id: 5,
        image: require('../assets/images/lego2.jpg'),
        title: "Tên lung tung",
        price: "1000",
        onSale: null
    },
]

function ListProductScreen({route}) {
    const listings = route.params.item;
    
    return (
        <View style={styles.listProducts}>
            {/* <Product image={require("../assets/images/lego2.jpg")} title="Bộ lego tàu chiến" price="500$" onSale={350}></Product>
            <Product image={require("../assets/images/lego2.jpg")} title="Bộ lego hình súng ngắn cầm tay" price="500$"></Product> */}
            <FlatList
                numColumns={2}
                data={listings}
                keyExtractor={listing => listing.name}
                renderItem={({item}) => 
                    <Product
                        image = {item.image}
                        title = {item.name}
                        price = {item.price}
                        onSale = {item.onSale}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({   
    listProducts: {
        padding: 5,
        width:"100%",
        flex:1,
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginTop: 0
    }
})

export default ListProductScreen;