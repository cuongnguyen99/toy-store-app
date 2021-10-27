import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {Category} from '../components/lists';
import color from '../config/colors';

function CategoryListScreen({route}) {
    let categoryListing = route.params.item;

    return (
        <View style={styles.container}>
            <FlatList
                data={categoryListing}
                keyExtractor={categorie => categorie.name}
                renderItem={ ({item}) =>
                    <Category
                        title={item.name}
                        image= {item.image}
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