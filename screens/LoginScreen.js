import React, { useState, useEffect, useContext } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {AppTextInput, Button, AppText} from '../components/common';
import { HairLine } from '../components/lists';
import Screen from './Screen';
import color from '../config/colors';
import WelcomeLoading from '../components/lists/WelcomeLoading';
import ErrorMessage from '../components/common/ErrorMessage';

import userApi from '../api/users';
import AuthContext from '../auth/context';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Please enter the username'),
    password: Yup.string().required('Please enter the password')
})

function LoginScreen({ navigation }) {
    const authContext = useContext(AuthContext);
    const [loginFail, setloginFail] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    // const [isLoading, setLoading] = useState(true);

    // On Press SignIn Button
    const handleLogin = async ({email, password}) => {
        const result = await userApi.login(email, password);
        if(!result.ok) {
            setErrMessage("Tài khoản hoặc mật khẩu không chính xác!!!");
            return setloginFail(true);
        }

        setloginFail(false);
        const accessToken = result.data.accesstoken;

        const res = await userApi.getUserInfor(accessToken);
        if(!res.ok) {
            setErrMessage("Lỗi kết nối tới máy chủ. Vui lòng thử lại sau!");
            return setloginFail(true);
        }
        setloginFail(false);
        const user = res.data;
        authContext.setUser(user);
    }

    // When click on register text
    const onRegisterPress = () => {       
        console.log("Forget password button");
    }

    // When click on forget password text
    const onForgetPasswordPress = () => {
        console.log("Forget password button");
    }

    return(
        <Screen
            style={styles.background}
        >
            <Image
                style={styles.img}
                source={require("../assets/images/logo.png")}
            />
            <Formik
                initialValues={{email: "", password: ""}}
                validationSchema = {validationSchema}
                onSubmit={handleLogin}
            >
                { ({handleChange, handleSubmit, setFieldTouched, touched,errors}) => (
                    <>
                        <View style={styles.input}>
                            <AppTextInput 
                                content="Username" 
                                onChangeText={handleChange("email")}
                                onBlur={() => setFieldTouched("email")}
                            />
                            <AppText style={styles.warning}>{touched.email && errors.email ? errors.email : null}</AppText>

                            <AppTextInput 
                                content="Password" 
                                secureTextEntry={true}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched("password")}
                            />
                            <AppText style={styles.warning}>{touched.password && errors.password ? errors.password : null}</AppText>

                            <ErrorMessage visible={loginFail}>{"Tài khoản hoặc mật khẩu không chính xác!"}</ErrorMessage>

                            <View style={styles.passAndRegister}>
                                <TouchableOpacity activeOpacity={0.5} onPress={onRegisterPress}>
                                    <AppText style={styles.pnrInner}>Đăng ký</AppText>
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={0.5} onPress={onForgetPasswordPress}>
                                    <AppText style={styles.pnrInner}>Quên mật khẩu?</AppText>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Đăng nhập"
                                onPress={handleSubmit}
                            />
                            <HairLine content="Or"/>
                            <Button 
                                title="Đăng nhập với Google"
                                icon="google-plus"
                                background={color.google}
                            />
                        </View>
                    </>
                )}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
        resizeMode: 'contain',
        height: 150,
        width: "100%",
        flexGrow: 1,
        marginTop: 80,
        marginBottom: 50
    },
    input: {
        width: "100%",
        padding: 40,
        flexGrow: 1
    },
    buttonContainer: {
        width: "100%",
        padding: 40,
        flexGrow: 1
    },
    label: {
        fontSize : 16,
        color: color.text,
        margin: 0,
        marginLeft: 10,
        marginBottom: 2,
        fontWeight: '700',
        lineHeight: 16
    },
    warning: {
        color: 'red',
        paddingLeft: 10,
        fontSize: 14
    },
    passAndRegister: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 15,
    },
    pnrInner: {
        color: color.google,
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default LoginScreen;