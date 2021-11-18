import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {Category} from '../components/lists';
import color from '../config/colors';

function CategoryListScreen({route, navigation}) {
    const categoryListing = route.params.item;

    return (
        <View style={styles.container}>
            <FlatList
                data={categoryListing}
                keyExtractor={categorie => categorie.name}
                renderItem={ ({item}) =>
                    <Category
                        title={item.name}
                        image= {item.image}
                        onPress={() => navigation.navigate("Product", item.product)}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: color.background,
    }
})

export default CategoryListScreen;