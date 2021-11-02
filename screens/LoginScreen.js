import React, { useState, useEffect } from 'react';
import { Image,ImageBackground, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-simple-toast';

import {AppTextInput, Button, AppText} from '../components/common';
import { HairLine } from '../components/lists';
import Screen from './Screen';
import color from '../config/colors';
import WelcomeLoading from '../components/lists/WelcomeLoading';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter the username'),
    password: Yup.string().required('Please enter the password')
})

function LoginScreen({ navigation }) {
    const apiUrl = "https://6171698bc20f3a001705fcb1.mockapi.io/api/users";
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        try {
            const res = await fetch(apiUrl);
            const datas = await res.json();

            setUsers(datas);
          } catch (error) {
            console.error(error);
          } finally {
            setTimeout(function() {
                setLoading(false);
            }, 2000);
          }
    }
    // On Press Sign In Button
    const onSubmit = async (user) => {
        // var check = users.some(item => {
        //     if(item.username == user.username)
        //     {
        //         if(item.password == user.password)
        //         {
        //             return true;
        //         }
        //         return false;
        //     }
        //     return false;
        // })
        
        // if(check) {
        //     Toast.showWithGravity("Xác thực tài khoản thành công!", Toast.LONG, Toast.TOP);
        //     navigation.navigate("Main");
        // }
        // else {
        //     Toast.showWithGravity("Tài khoản hoặc mật khẩu chưa chính xác!", Toast.LONG, Toast.TOP);
        // }

        navigation.navigate("Main");
    }

    // When click on register text
    const onRegisterPress = () => {
        navigation.navigate("Register");
    }

    // When click on forget password text
    const onForgetPasswordPress = () => {
        console.log("Forget password button");
    }

    useEffect(() => {
        getUsers();
    }, []);

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
                onSubmit={values => onSubmit(values)}
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