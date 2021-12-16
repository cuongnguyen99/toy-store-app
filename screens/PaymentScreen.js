import React, { useContext, useState } from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Toast from 'react-native-simple-toast';

import Screen from './Screen';
import { AppText, AppTextInput, Button } from '../components/common';
import color from '../config/colors';
import PaymentItem from '../components/cart/PaymentItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';

import paymentApi from '../api/payment';
import CartContext from '../auth/CartContext';
import AuthContext from '../auth/context';
import UploadScreen from './UploadScreen';

import cache from '../utility/cache';
import usersApi from '../api/users';

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Vui lòng điền họ tên người nhận!'),
    province: Yup.string().required('Vui lòng điền thông tin tỉnh/thành phố người nhận!'),
    district: Yup.string().required('Vui lòng điền thông tin quận/huyện người nhận!'),
    state: Yup.string().required('Vui lòng điền thông tin xã/phường người nhận!'),
    phone: Yup.string().required('Vui lòng điền số điện thoại người nhận!'),
})

function PaymentScreen({route, navigation}) {
    const {cart, setCart} = useContext(CartContext);
    const {user, setUser} = useContext(AuthContext);
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);
    const totalPay = route.params.total;
    const prePay = 0;

    const handleSubmit = async (data) => {
        setProgress(0);
        setUploadVisible(true);

        const accessToken = await cache.get("AccessToken");

        const result = await paymentApi.createBill(accessToken ,cart, data, prePay, totalPay, progress => setProgress(progress));

        if(!result.ok) {
            console.log(result.originalError);
            setUploadVisible(false);
            return Toast.showWithGravity("Đã xảy ra lỗi! Vui lòng thử lại!", Toast.LONG, Toast.CENTER);
        }
    }

    return (
    <View style={styles.container}>
        <UploadScreen
            onDone={async () => {
                const accessToken = await cache.get("AccessToken");
                
                setUploadVisible(false);
                setCart([]);
                usersApi.addToCart([], accessToken);

                navigation.goBack();
            }}
            progress={progress}
            visible={uploadVisible}
        />
        <Formik
            initialValues={{
                fullname: "",
                province: "",
                district: "",
                state: "",
                phone: ""
            }}
            validationSchema = {validationSchema}
            onSubmit={handleSubmit}
        >
            {({handleSubmit, setFieldTouched, setFieldValue, touched, errors, values}) => (
                <>
                    <View style={styles.paymentForm}>
                        <AppTextInput
                            style={styles.textInput}
                            content="Họ và tên"
                            onChangeText={text => setFieldValue("fullname", text)}
                            value={values["fullname"]}
                            onBlur={() => setFieldTouched("fullname")}
                        />
                        <AppText style={styles.warning}>
                            {touched.fullname && errors.fullname ? errors.fullname : null}
                        </AppText>

                        <AppTextInput
                            style={styles.textInput}
                            content="Tỉnh thành"
                            onChangeText={text => setFieldValue("province", text)}
                            value={values["province"]}
                            onBlur={() => setFieldTouched("province")}
                        />
                        <AppText style={styles.warning}>
                            {touched.province && errors.province ? errors.province : null}
                        </AppText>

                        <AppTextInput
                            style={styles.textInput}
                            content="Quận huyện"
                            onChangeText={text => setFieldValue("district", text)}
                            value={values["district"]}
                            onBlur={() => setFieldTouched("district")}
                        />
                        <AppText style={styles.warning}>
                            {touched.district && errors.district ? errors.district : null}
                        </AppText>

                        <AppTextInput
                            style={styles.textInput}
                            content="Xã phường"
                            onChangeText={text => setFieldValue("state", text)}
                            value={values["state"]}
                            onBlur={() => setFieldTouched("state")}
                        />
                        <AppText style={styles.warning}>
                            {touched.state && errors.state ? errors.state : null}
                        </AppText>

                        <AppTextInput
                            style={styles.textInput}
                            content="Số điện thoại"
                            onChangeText={text => setFieldValue("phone", text)}
                            value={values["phone"]}
                            onBlur={() => setFieldTouched("phone")}
                        />
                        <AppText style={styles.warning}>
                            {touched.phone && errors.phone ? errors.phone : null}
                        </AppText>
                    </View>

                    <View style={styles.paymentList}>
                        <AppText style={styles.listTitle}>Danh sách sản phẩm:</AppText>
                        <FlatList
                            data={cart}
                            keyExtractor = {(cartitem) => cartitem._id}
                            renderItem = {({item}) => (
                                <PaymentItem
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                    image={item.mainimg.url}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator}/>}
                        />
                    </View>

                    <View style={styles.bottom}>
                        <View style={styles.bottom_price}>
                            <AppText style={styles.total_title}>Tổng thanh toán:</AppText>
                            <AppText style={styles.total_price}>${route.params.total}</AppText>
                        </View>
                        <View style={styles.bottom_price}>
                            <AppText style={styles.total_title}>Trả trước:</AppText>
                            <AppText style={styles.total_price}>${prePay}</AppText>
                        </View>
                        <Button title="Thanh toán" style={styles.submit} onPress={handleSubmit}/>
                    </View>
                </>
            )}
        </Formik>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.white,
        width: '100%',
        paddingBottom: 500
    },
    paymentForm: {
        width: '100%',
        padding: 20,
        paddingBottom: 0
    },
    textInput: {
        marginTop: 2,
    },
    registerButton: {
        width: "100%",
        padding: 20,
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginBottom: 50
    },
    warning: {
        color: 'red',
        paddingLeft: 10,
        fontSize: 14,
    },
    paymentList: {

    },
    listTitle: {
        marginBottom: 10,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: 'bold'
    },
    bottom: {
        backgroundColor: color.white,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    bottom_price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    total_title: {
        fontSize: 18,
        
    },
    total_price: {
        fontSize: 18,
        color: color.primary
    },
    submit: {
        width: '60%',
        alignSelf: 'center'
    },
    separator: {
        width: '100%',
        marginLeft: 0
    },
})

export default PaymentScreen;