import React from 'react';
import { Image,ImageBackground, StyleSheet, View, Text} from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';
import HairLine from '../components/HairLine';
import Screen from './Screen';
import color from '../config/colors';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
    username: Yup.string().required('Please enter the username'),
    password: Yup.string().required('Please enter the password')
})

function LoginScreen() {
    // On Press Sign In Button
    const onSubmit = (params) => {
        console.log(params);
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
                            <AppText style={styles.label}>Username</AppText>
                            <AppTextInput 
                                content="Username" 
                                onChangeText={handleChange("username")}
                                onBlur={() => setFieldTouched("username")}
                            />
                            <AppText style={styles.warning}>{touched.username && errors.username ? errors.username : null}</AppText>

                            <AppText style={styles.label}>Password</AppText>
                            <AppTextInput 
                                content="Password" 
                                security={true}
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched("password")}
                            />
                            <AppText style={styles.warning}>{touched.password && errors.password ? errors.password : null}</AppText>
                        </View>
                        <View style={styles.buttonContainer}>
                            <Button 
                                title="Sign in"
                                onPress={handleSubmit}
                            />
                            <HairLine content="Or"/>
                            <Button 
                                title="Sign in with Google"
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
        marginLeft: 10,
        marginBottom: 2,
        fontWeight: '700'
    },
    warning: {
        color: 'red',
        marginBottom: 0,
        paddingLeft: 10,
        fontSize: 15
    }
});

export default LoginScreen;