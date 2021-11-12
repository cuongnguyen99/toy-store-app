import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useContext } from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';
import AuthContext from '../auth/context';
import { AppText, Button, Icon } from '../components/common';
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

function ProfileScreen({ navigation }) {
    const {user, setUser} = useContext(AuthContext);

    // Handle when touch Logout button
    const handleLogout = () => {
        navigation.navigate("Auth");
        // console.log("Log out");
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Icon style={styles.icon} name="account" backgroundColor={color.shadow} size={120} iconColor="#ecf0f1"/>
                <AppText style={styles.name}>{user.username}</AppText>
                <AppText style={styles.email}>{user.email}</AppText>
                <View style={styles.listing}>
                    <ListItem style={styles.listingItem} title="Thông tin cá nhân" iconComponent={<MaterialCommunityIcons size={32} name="account-edit" color="#2980b9"/>}/>
                    <ListItemSeparator/>
                    
                    <ListItem style={styles.listingItem} title="Giỏ hàng" iconComponent={<MaterialCommunityIcons size={32} name="cart" color="#2ed573"/>}/>
                    <ListItemSeparator/>

                    <ListItem style={styles.listingItem} title="Đơn mua" iconComponent={<MaterialCommunityIcons size={32} name="clipboard-text" color="#d63031"/>}/>
                    <ListItemSeparator/>

                    <ListItem style={styles.listingItem} title="Đổi mật khẩu" iconComponent={<MaterialCommunityIcons size={32} name="key-variant" color="#2f3542"/>}/>
                </View>
            </View>
            <View style={styles.logoutBtn}>
                <Button  title="Đăng xuất" background={color.shadow} onPress={handleLogout}/>
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
        paddingBottom: 20,
        paddingTop: 80
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
        padding: 8,
        paddingLeft: 15
    },
    logoutBtn: {
        position: "absolute",
        bottom: 100,
        width: "80%",
        alignSelf: 'center'
    }
})

export default ProfileScreen;