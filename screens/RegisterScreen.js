import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../components/Button';
import Screen from './Screen';
import AppTextInput from '../components/AppTextInput';
import AppText from '../components/AppText';
import color from '../config/colors';

const registerSchema = Yup.object().shape({
    username: Yup.string().required("Vui lòng nhập tài khoản!").min(4, "Vui lòng nhập tài khoản có độ dài >4 ký tự!").label("Username"),
    password: Yup.string().required("Vui lòng điền mật khẩu!").min(6, "Mật khẩu phải >6 ký tự!").max(16, "Mật khẩu không được vượt quá 16 ký tự!"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không khớp!").required("Vui lòng xác nhận lại mật khẩu"),
    fullname: Yup.string().required("Vui lòng điền họ tên người dùng!"),
    email: Yup.string().email("Vui lòng nhập đúng định dạng email!").required("Vui lòng nhập email!"),
    phonenumber: Yup.string().required("Vui lòng nhập số điện thoại!"),
});

function RegisterScreen() {
    // On Press Sign In Button
    const onSubmit = async (params) => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json');
            const json = await response.json();

            console.log(json);
          } catch (error) {
            console.error(error);
          } //finally {
        //     setLoading(false);
        //   }
    }

    return (
        <Screen style={styles.register}>
            <Image
                style={styles.img}
                source={require("../assets/images/logo.png")}
            />
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    passwordConfirm: "",
                    fullname: "",
                    email: "",
                    phonenumber: ""
                }}
                validationSchema = {registerSchema}
                onSubmit={values => onSubmit(values)}
            >
                { ({handleChange, handleSubmit, setFieldTouched, touched, errors}) => (
                    <>
                        <View style={styles.registerForm}>
                            <AppText style={styles.label}>Username</AppText>
                            <AppTextInput 
                                content="Username" 
                                style={styles.textInput}
                                onChangeText={handleChange("username")}
                                onBlur={() => setFieldTouched("username")}
                            />
                            <AppText style={styles.warning}>{touched.username && errors.username ? errors.username : null}</AppText>

                            <AppText style={styles.label}>Password</AppText>
                            <AppTextInput 
                                content="Password" 
                                style={styles.textInput} 
                                security={true}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched("password")}
                            />
                            <AppText style={styles.warning}>{touched.password && errors.password ? errors.password : null}</AppText>

                            <AppText style={styles.label}>Confirm Password</AppText>
                            <AppTextInput 
                                content="Confirm Password" 
                                style={styles.textInput} 
                                security={true}
                                onChangeText={handleChange("passwordConfirm")}
                                onBlur={() => setFieldTouched("passwordConfirm")}
                            />
                            <AppText style={styles.warning}>{touched.passwordConfirm && errors.passwordConfirm ? errors.passwordConfirm : null}</AppText>

                            <AppText style={styles.label}>Full Name</AppText>
                            <AppTextInput 
                                content="Full Name" 
                                style={styles.textInput}
                                onChangeText={handleChange("fullname")}
                                onBlur={() => setFieldTouched("fullname")}
                            />
                            <AppText style={styles.warning}>{touched.fullname && errors.fullname ? errors.fullname : null}</AppText>

                            <AppText style={styles.label}>Email</AppText>
                            <AppTextInput 
                                content="Email" 
                                style={styles.textInput}
                                onChangeText={handleChange("email")}
                                onBlur={() => setFieldTouched("email")}
                            />
                            <AppText style={styles.warning}>{touched.email && errors.email ? errors.email : null}</AppText>

                            <AppText style={styles.label}>Phone Number</AppText>
                            <AppTextInput 
                                content="Phone Number" 
                                style={styles.textInput} 
                                keyboard="number-pad"
                                onChangeText={handleChange("phonenumber")}
                                onBlur={() => setFieldTouched("phonenumber")}
                            />
                            <AppText style={styles.warning}>{touched.phonenumber && errors.phonenumber ? errors.phonenumber : null}</AppText>
                            
                        </View>
                        <View style={styles.registerButton}>
                            <Button title="Register" onPress={handleSubmit}></Button>
                        </View>
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    register: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        resizeMode: 'contain',
        height: 150,
        width: "100%",
        flexGrow: 1,
    },
    registerForm: {
        width: "100%",
        padding: 20,
        flexGrow: 2,
        justifyContent: 'flex-end',
    },
    textInput: {
        marginTop: 0,
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
        marginBottom: 2,
        paddingLeft: 10,
        fontSize: 15
    },
    label: {
        fontSize : 16,
        color: color.text,
        marginLeft: 10,
        marginBottom: 1,
        fontWeight: '700',
        lineHeight: 14
    },
    
})

export default RegisterScreen;