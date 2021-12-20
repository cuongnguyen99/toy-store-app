import React, {useState, useEffect} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import { TextInput } from 'react-native';
import Screen from './Screen';
import { Product } from '../components/lists';

import product from '../api/product';
import color from '../config/colors';

function SearchScreen({navigation}) {
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);

    const getProducts = async () => {
        const result = await product.getProducts();
        
        if(!result.ok) {
            console.log("Error when getting products!");
            return;
        }

        setProducts(result.data.products);
        setFilterProducts(result.data.products);
    }
    
    const handleTextChange = (text) => {
        if(text) {
            const list = products.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;            
            })
            setFilterProducts(list);
            setSearch(text);
        }
        else {
            setFilterProducts(products);
            setSearch(text);
        }
    }

    const handleProductPress = (item) => {
        navigation.navigate("DetailProduct", item);
    }

    useEffect(()=> {
        getProducts();
    }, []);

    return (
        <Screen
            style={styles.container}
        >
            <TextInput 
                style={styles.input}
                placeholder='Tìm kiếm'
                onChangeText={(text) => handleTextChange(text)}
                underlineColorAndroid="transparent"
                selectionColor={color.text}
                value={search}
            />
            <FlatList
                style={{paddingBottom: 10}}
                numColumns={2}
                data={filterProducts}
                keyExtractor={item => item._id}
                renderItem={ ({item}) => 
                    <Product
                        image = {item.mainimg.url}
                        title = {item.title}
                        price = {item.price}
                        onPress = {() => handleProductPress(item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        marginTop: 20,
        borderRadius: 10,
        fontSize: 16
    },

})

export default SearchScreen;