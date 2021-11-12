import React, { useState, useEffect, useContext } from 'react';
import { Image,ImageBackground, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import jwtDecode from 'jwt-decode';

import Toast from 'react-native-simple-toast';

import {AppTextInput, Button, AppText} from '../components/common';
import { HairLine } from '../components/lists';
import Screen from './Screen';
import color from '../config/colors';
import WelcomeLoading from '../components/lists/WelcomeLoading';
import ErrorMessage from '../components/common/ErrorMessage';

import userApi from '../api/users';
import AuthContext from '../auth/context';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter the username'),
    password: Yup.string().required('Please enter the password')
})

function LoginScreen({ navigation }) {
    const authContext = useContext(AuthContext);
    const [isLoading, setLoading] = useState(true);
    const [loginFail, setloginFail] = useState(false);
    const [errMess, setErrMess] = useState("");

    // On Press Sign In Button
    const handleLogin = async ({username, password}) => {
        const result = await userApi.login(username, password);
        if(!result.ok) {
            return setloginFail(true);
        }

        setloginFail(false);
        const user = jwtDecode(result.data);
        console.log(user);
        // authContext.setUser(user);
    }

    // When click on register text
    const onRegisterPress = () => {       
        console.log("Forget password button");
    }

    // When click on forget password text
    const onForgetPasswordPress = () => {
        console.log("Forget password button");
    }

    if(isLoading == true) {
        return (
            <WelcomeLoading visible={isLoading}/>
        );
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
                initialValues={{username: "", password: ""}}
                validationSchema = {validationSchema}
                onSubmit={handleLogin}
            >
                { ({handleChange, handleSubmit, setFieldTouched, touched,errors}) => (
                    <>
                        <View style={styles.input}>
                            <AppTextInput 
                                content="Username" 
                                onChangeText={handleChange("username")}
                                onBlur={() => setFieldTouched("username")}
                            />
                            <AppText style={styles.warning}>{touched.username && errors.username ? errors.username : null}</AppText>

                            <AppTextInput 
                                content="Password" 
                                secureTextEntry={true}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched("password")}
                            />
                            <AppText style={styles.warning}>{touched.password && errors.password ? errors.password : null}</AppText>

                            <ErrorMessage visible={loginFail}>{errMess}</ErrorMessage>

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