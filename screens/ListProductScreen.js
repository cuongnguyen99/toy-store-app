import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Product from '../components/Product';
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

function ListProductScreen()
{
    return (
        <Screen style={styles.listProducts}>
            {/* <Product image={require("../assets/images/lego2.jpg")} title="Bộ lego tàu chiến" price="500$" onSale={350}></Product>
            <Product image={require("../assets/images/lego2.jpg")} title="Bộ lego hình súng ngắn cầm tay" price="500$"></Product> */}
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={product => product.id}
                renderItem={({item}) => 
                    <Product
                        image = {item.image}
                        title = {item.title}
                        price = {item.price}
                        onSale = {item.onSale}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({   
    listProducts: {
        padding: 5,
        width:"100%",
        flex:1,
        flexDirection: 'column',
        flexWrap: 'wrap',
    }
})

export default ListProductScreen;