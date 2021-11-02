import React, {useState} from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {Product } from '../components/lists';
import color from '../config/colors';
import Screen from './Screen';

function ListProductScreen({route}) {
    const {isLoading, setLoading} = useState(true);
    const listings = route.params.item;

    return (
        <View style={styles.listProducts}>
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