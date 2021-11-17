import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import {StyleSheet, ImageBackground, View, TouchableOpacity} from 'react-native';
import { AppText, Button } from '../components/common';
import color from '../config/colors';
import Screen from './Screen';

function DetailProductScreen({title, price, desception}) {
    return (
        <Screen style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/sport.jpg')}/>

            <View style={styles.displayInner}>
                <AppText style={styles.title} numberOfLines={2} ellipsizeMode='clip'>{"Đồ chơi 4 xe công trình NÔNG NGHIỆP lắp ráp ốc vít chạy trớn XY01-1"}</AppText>
                <View style={styles.priceInner}>
                    <AppText style={{fontSize: 24}}>Giá : </AppText>
                    <AppText style={styles.price}>{"12000000"}đ</AppText>
                </View>
                <View style={styles.descriptionInner}>
                    <AppText style={{}}>Mô tả sản phẩm : </AppText>
                    <AppText style={styles.desception}>{"Khách hàng thường không quan tâm sản phẩm của bạn là gì, làm từ gì. Họ chỉ quan tâm đến công dụng của nó là gì và nó có thể giúp ích như thế nào cho họ. Đó là chưa kể đến kết quả nghiên cứu chỉ ra rằng mọi người chỉ đọc trung bình khoảng 16% nội dung trên một trang web thông thường. Vì vậy, bạn cần làm nổi bật những lợi ích của sản phẩm ngay từ đầu. Đưa những lợi ích quan trọng nhất của sản phẩm đặt lên trước tiên và thứ kém quan trọng nhất ở cuối cùng."}</AppText>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonInner} activeOpacity={0.7}>
                <MaterialCommunityIcons name="cart-plus" size={35} color={color.sub_background}/>
            </TouchableOpacity>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        resizeMode: 'cover',
        width: '100%',
        height: 300
    },
    displayInner: {
        paddingTop: 5,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'normal'
    },
    priceInner: {
        marginTop: 30,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    price:{
        fontSize: 28,
        color: color.primary
    },
    descriptionInner: {
        marginTop: 30
    },
    desception: {
        fontSize: 14,
        color: color.sub_text
    },
    buttonInner:{
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 70,
        height: 70,
        borderRadius: 50,
        backgroundColor: color.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        borderRadius: 0,
        height: 50
    }
})

export default DetailProductScreen;