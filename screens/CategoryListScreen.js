import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import {Category} from '../components/lists';
import color from '../config/colors';

const categories = [
    {
        title: "Thể Thao",
        image: require("../assets/images/sport.jpg")
    },
    {
        title: "Thẻ Bài",
        image: require("../assets/images/sport.jpg")
    },
    {
        title: "Xếp Hình",
        image: require("../assets/images/sport.jpg")
    },
    {
        title: "Trí Tuệ",
        image: require("../assets/images/sport.jpg")
    },
    {
        title: "Mô Phỏng",
        image: require("../assets/images/sport.jpg")
    }
];

function CategoryListScreen(props) {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={categorie => categorie.title}
                renderItem={ ({item}) =>
                    <Category
                        title={item.title}
                        image={item.image}
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