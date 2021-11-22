import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';

import Screen from './Screen';
import { AppText, AppTextInput, Button } from '../components/common';
import color from '../config/colors';
import PaymentItem from '../components/cart/PaymentItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Vui lòng điền họ tên người nhận!'),
    province: Yup.string().required('Vui lòng điền thông tin tỉnh/thành phố người nhận!'),
    district: Yup.string().required('Vui lòng điền thông tin quận/huyện người nhận!'),
    state: Yup.string().required('Vui lòng điền thông tin xã/phường người nhận!'),
    phone: Yup.string().required('Vui lòng điền số điện thoại người nhận!'),
})

const initialData = [
    {
        title: 'Đồ chơi 1',
        price: 100000,
        quantity: 2,
        image: "https://csfood.vn/wp-content/uploads/2016/04/Bia-Heineken-Lon.jpg"
    },
    {
        title: 'Đồ chơi 2',
        price: 100000,
        quantity: 2,
        image: "https://csfood.vn/wp-content/uploads/2016/04/Bia-Heineken-Lon.jpg"
    },
    {
        title: 'Đồ chơi 3',
        price: 100000,
        quantity: 2,
        image: "https://csfood.vn/wp-content/uploads/2016/04/Bia-Heineken-Lon.jpg"
    },
    {
        title: 'Đồ chơi 4',
        price: 100000,
        quantity: 2,
        image: "https://csfood.vn/wp-content/uploads/2016/04/Bia-Heineken-Lon.jpg"
    },
    {
        title: 'Đồ chơi 5',
        price: 100000,
        quantity: 2,
        image: "https://csfood.vn/wp-content/uploads/2016/04/Bia-Heineken-Lon.jpg"
    },
    {
        title: 'Đồ chơi 6',
        price: 100000,
        quantity: 2,
        image: "https://csfood.vn/wp-content/uploads/2016/04/Bia-Heineken-Lon.jpg"
    },
]

function PaymentScreen({route}) {
    const totalPay = route.params.total;
    const prePay = totalPay/2;

    const handleSubmit = () => {
        return;
    }

    return (
    <View style={styles.container}>
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
                            data={initialData}
                            keyExtractor= {(data) => data.title}
                            renderItem={({item}) => (
                                <PaymentItem
                                    title={item.title}
                                    price={item.price}
                                    quantity={item.quantity}
                                    image={item.image}
                                />
                            )}
                            ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator}/>}
                        />
                    </View>

                    <View style={styles.bottom}>
                        <View style={styles.bottom_price}>
                            <AppText style={styles.total_title}>Tổng thanh toán:</AppText>
                            <AppText style={styles.total_price}>{route.params.total}đ</AppText>
                        </View>
                        <View style={styles.bottom_price}>
                            <AppText style={styles.total_title}>Trả trước:</AppText>
                            <AppText style={styles.total_price}>{prePay}đ</AppText>
                        </View>
                        <Button title="Thanh toán với Paypal" style={styles.submit}/>
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
    },
    bottom_price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    total_title: {
        fontSize: 18
    },
    total_price: {
        fontSize: 18
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