import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Button from '../components/Button';
import Screen from './Screen';
import AppTextInput from '../components/AppTextInput';
import HairLine from '../components/HairLine';

function RegisterScreen() {
    return (
        <Screen style={styles.register}>
            <Image
                style={styles.img}
                source={require("../assets/images/logo.png")}
            />
            <View style={styles.registerForm}>
                <AppTextInput content="Username" style={styles.textInput}/>
                <AppTextInput content="Password" style={styles.textInput} security={true}/>
                <AppTextInput content="Confirm Password" style={styles.textInput} security={true}/>
                <AppTextInput content="Full Name" style={styles.textInput}/>
                <AppTextInput content="Email" style={styles.textInput}/>
                <AppTextInput content="Phone Number" style={styles.textInput} keyboard="number-pad"/>
            </View>
            <View style={styles.registerButton}>
                <Button title="Register"></Button>
            </View>
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
        flexGrow: 1,
        justifyContent: 'center'
    },
    registerForm: {
        width: "100%",
        padding: 20,
        flexGrow: 2,
        justifyContent: 'flex-end',
    },
    textInput: {
        marginTop: 15,
    },
    registerButton: {
        width: "100%",
        padding: 20,
        flexGrow: 1,
        justifyContent: 'flex-end',
        marginBottom: 50
    }
})

export default RegisterScreen;