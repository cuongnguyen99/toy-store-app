import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {Product } from '../components/lists';
import color from '../config/colors';
import Screen from './Screen';

import product from '../api/product';

function ListProductScreen({route, navigation}) {
    const {isLoading, setLoading} = useState(true);
    const [products, setProducts] = useState([]);
    const categoryId = route.params.item;

    const getProducts = async () => {
        const result = await product.getProductByCategory(categoryId);

        if(!result.ok){
            console.log("Have an error with Product List!");
        }

        const data = result.data.products;
        // console.log(data);
        setProducts(data);
    }

    const handleProductPress = (item) => {
        navigation.navigate("DetailProduct", item);
    }

    useEffect(()=>{
        getProducts();
    }, []);

    return (
        <View style={styles.listProducts}>
            <FlatList
                numColumns={2}
                data={products}
                keyExtractor={product=> product._id}
                renderItem={({item}) => 
                    <Product
                        image = {item.images[0].url}
                        title = {item.title}
                        price = {item.price}
                        // onSale = {item.onSale}
                        onPress = {() => handleProductPress(item)}
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