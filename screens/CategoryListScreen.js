import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Category from '../components/Category';

import Screen from './Screen';

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
        <Screen style={styles.container}>
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
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
    }
})

export default CategoryListScreen;