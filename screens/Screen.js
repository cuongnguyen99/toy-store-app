import React from 'react';
import {SafeAreaView,View, StyleSheet} from 'react-native'
import Constants from 'expo-constants';
import color from '../config/colors';


function Screen({children, style}) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={[style]}>
                {children}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: color.background,
    },
})

export default Screen;