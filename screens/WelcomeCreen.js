import React from 'react';
import { Image,ImageBackground, StyleSheet } from 'react-native';

function WelcomeScreen() {
    return(
        <ImageBackground
            style={styles.background}
        >
            <Image
                style={styles.img}
                source={require("../assets/images/logo.png")}
            />
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        resizeMode: 'contain',
        width: 250,
    }
});

export default WelcomeScreen;