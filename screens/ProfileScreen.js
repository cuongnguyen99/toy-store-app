import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import { AppText, Icon } from '../components/common';
import { ListItem } from '../components/lists';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import color from '../config/colors';

import Screen from './Screen';

const menus = [
    {
        title: "Thông tin cá nhân",
        icon: {
            name:"account-edit",
            backgroundColor:"#fff"
        }
    },
    {
        title: "Giỏ hàng",
        icon: {
            name:"cart",
            backgroundColor:"#fff"
        }
    },
    {
        title: "Đơn mua",
        icon: {
            name:"clipboard-text",
            backgroundColor:"#fff"
        }
    },
    {
        title: "Đăng xuất",
        icon: {
            name:"logout",
            backgroundColor:"#fff"
        }
    }
];

function ProfileScreen() {
    return (
        <Screen style={styles.screen}>
            <TouchableOpacity style={styles.backBtn}>
                <Icon name="arrow-left" size={70} iconColor={color.black} backgroundColor={color.background}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Icon style={styles.icon} name="account" backgroundColor={color.shadow} size={120} iconColor="#ecf0f1"/>
                <AppText style={styles.name}>Cương Nguyễn</AppText>
                <AppText style={styles.email}>kugayuma231@gmail.com</AppText>
                <View style={styles.listing}>
                    <ListItem style={styles.listingItem} title="Thông tin cá nhân" iconComponent={<MaterialCommunityIcons size={32} name="account-edit" color="#2980b9"/>}/>
                    <ListItemSeparator/>
                    
                    <ListItem style={styles.listingItem} title="Giỏ hàng" iconComponent={<MaterialCommunityIcons size={32} name="cart" color="#d63031"/>}/>
                    <ListItemSeparator/>

                    <ListItem style={styles.listingItem} title="Đơn mua" iconComponent={<MaterialCommunityIcons size={32} name="clipboard-text" iconColor="#f9ca24"/>}/>
                    <ListItemSeparator/>

                    <ListItem style={styles.listingItem} title="Đăng xuất" iconComponent={<MaterialCommunityIcons size={32} name="logout" iconColor="#4834d4"/>}/>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
    },
    container: {
        width: "100%",
        backgroundColor: color.sub_background,
        alignItems: 'center',
        borderRadius: 20,
        elevation: 1,
        paddingBottom: 40,
        paddingTop: 80
    },
    backBtn: {
        position: 'absolute',
        top: 10,
        left: 0
    },
    icon: {
        position: 'absolute',
        top: -60
    },
    name: {
        fontSize: 25
    },
    email: {
        color: color.sub_text
    },
    listing: {
        marginTop: 50,
        width: "100%",
    },
    listingItem: {
        width: "100%",
        padding: 7,
        paddingLeft: 10
    }
})

export default ProfileScreen;