import React from 'react';
import { Image,ImageBackground, StyleSheet, View, Text} from 'react-native';

import AppTextInput from '../components/AppTextInput';
import Button from '../components/Button';
import HairLine from '../components/HairLine';
import color from '../config/colors';

function LoginScreen() {
    return(
        <ImageBackground
            style={styles.background}
        >
            <Image
                style={styles.img}
                source={require("../assets/images/logo.png")}
            />
            <View style={styles.input}>
                <AppTextInput content="Username" style={styles.textInput}/>
                <AppTextInput content="Password" security={true}/>
            </View>
            <View style={styles.buttonContainer}>
                <Button 
                    title="Log in"
                />
                <HairLine content="Or"/>
                <Button 
                    title="Sig in"
                />
            </View>
        </ImageBackground>
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
        height: 100,
        flexGrow: 2,
        marginTop: 120,
        marginBottom: 50
    },
    input: {
        width: "100%",
        padding: 40,
        flexGrow: 1
    },
    textInput: {
        marginBottom: 20
    },
    buttonContainer: {
        width: "100%",
        padding: 40,
        flexGrow: 1
    }
});

export default LoginScreen;