import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Toast from 'react-native-simple-toast';

import {Button, AppTextInput, AppText} from '../components/common'
import ErrorMessage from '../components/common/ErrorMessage';
import Screen from './Screen';
import color from '../config/colors';

import userApi from '../api/users';
import UploadScreen from './UploadScreen';

const registerSchema = Yup.object().shape({
    username: Yup.string().required("Vui lòng điền tên người dùng!").label("Username"),
    password: Yup.string().required("Vui lòng điền mật khẩu!").min(6, "Mật khẩu phải >6 ký tự!").max(16, "Mật khẩu không được vượt quá 16 ký tự!"),
    passwordConfirm: Yup.string().oneOf([Yup.ref("password")], "Mật khẩu không khớp!").required("Vui lòng xác nhận lại mật khẩu"),
    // fullname: Yup.string().required("Vui lòng điền họ tên người dùng!"),
    email: Yup.string().email("Vui lòng nhập đúng định dạng email!").required("Vui lòng nhập email!"),
    // phonenumber: Yup.string().required("Vui lòng nhập số điện thoại!"),
});

function RegisterScreen() {
    // const apiUrl = "https://pbl6-toystores.herokuapp.com/user/register";
    const [isLoading, setLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [err, setErr] = useState(false);
    const [errMess, setErrMess] = useState("");
    const [uploadVisible, setUploadVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    // const loadingUsers = async () => {
    //     setLoading(true);
    //     const res = await userApi.getUsers();

    //     if(!res.ok) return setErr(true);

    //     setErr(false);
    //     setUsers(res.data);
    // }

    // useEffect(() => {
    //     loadingUsers();
    // }, []);

    // On Press Sign In Button
    const handleSubmit= async (user, {resetForm}) => {
        setProgress(0);
        setUploadVisible(true);
        const result = await userApi.addUser(user, progress => setProgress(progress));

        if(!result.ok) {
            setUploadVisible(false);
            return Toast.showWithGravity("Đã xảy ra lỗi! Vui lòng thử lại!", Toast.LONG, Toast.CENTER);
        }
        resetForm({});
        setErr(false);
        
        // var check = users.every(item => {
        //     return item.username != user.username; 
        // })
        // if(check) {
        //     
        // }
        // else {
        //     setErr(true);
        //     setErrMess("Tài khoản đã tồn tại!");
        // }
    }

    return (
        <Screen style={styles.register}>
            <UploadScreen 
                onDone={() => {
                    setUploadVisible(false);
                }} 
                progress={progress} 
                visible={uploadVisible}
            />
            <Image
                style={styles.img}
                source={require("../assets/images/logo.png")}
            />
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                    passwordConfirm: "",
                    // fullname: "",
                    email: "",
                    // phonenumber: ""
                }}
                validationSchema = {registerSchema}
                onSubmit={handleSubmit}
            >
                { ({handleChange, handleSubmit, setFieldTouched, setFieldValue, touched, errors, values}) => (
                    <>
                        <View style={styles.registerForm}>
                        <AppTextInput 
                                content="Email" 
                                style={styles.textInput}
                                keyboardType="email-address"
                                onChangeText={text => setFieldValue("email", text)}
                                value = {values["email"]}
                                onBlur={() => setFieldTouched("email")}
                            />
                            <AppText style={styles.warning}>{touched.email && errors.email ? errors.email : null}</AppText>

                            <AppTextInput 
                                content="Password" 
                                style={styles.textInput} 
                                secureTextEntry={true}
                                onChangeText={text => setFieldValue("password", text)}
                                value = {values["password"]}
                                onBlur={() => setFieldTouched("password")}
                            />
                            <AppText style={styles.warning}>{touched.password && errors.password ? errors.password : null}</AppText>

                            <AppTextInput 
                                content="Confirm Password" 
                                style={styles.textInput} 
                                secureTextEntry={true}
                                onChangeText={text => setFieldValue("passwordConfirm", text)}
                                value = {values["passwordConfirm"]}
                                onBlur={() => setFieldTouched("passwordConfirm")}
                            />
                            <AppText style={styles.warning}>{touched.passwordConfirm && errors.passwordConfirm ? errors.passwordConfirm : null}</AppText>
                            
                            <AppTextInput 
                                content="Username" 
                                style={styles.textInput}
                                onChangeText={text => setFieldValue("username", text)}
                                value={values["username"]}
                                onBlur={() => setFieldTouched("username")}
                            />
                            <AppText style={styles.warning}>
                                {touched.username && errors.username ? errors.username : null}
                                {touched.username && err ? errMess : null}
                            </AppText>
                        </View>
                        <View style={styles.registerButton}>
                            <Button title="Đăng ký" onPress={handleSubmit}></Button>
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
        paddingLeft: 10,
        fontSize: 14
    },
    label: {
        fontSize : 16,
        color: color.text,
        marginLeft: 10,
        marginBottom: 1,
        fontWeight: '700',
        lineHeight: 16
    },
    
})

export default RegisterScreen;