import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {Category} from '../components/lists';
import color from '../config/colors';

import category from '../api/category';
import cache from '../utility/cache';

function CategoryListScreen({route, navigation}) {
    const [categories, setCategories] = useState([]);
    
    const getCart = async () => {
        const accessToken = await cache.get("AccessToken");
        console.log(accessToken);
    }

    const getCategory = async () => {
        const result = await category.getCategory();

        if(!result.ok){
            console.log("Have an error when get Category");
        }
        const data = result.data;
        setCategories(data);
    }

    useEffect(()=>{
        getCategory();
    }, []);
    
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={category => category._id}
                renderItem={ ({item}) =>
                    <Category
                        title={item.name}
                        image={item.image}
                        onPress={() => navigation.navigate("Product", item._id)}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background
    }
})

export default CategoryListScreen;