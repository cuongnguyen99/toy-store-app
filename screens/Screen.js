import React from 'react';
import {SafeAreaView,View, StyleSheet} from 'react-native'
import Constants from 'expo-constants';
import color from '../config/colors';


function Screen({children, style}) {
    return (
        <SafeAreaView style={styles.screen}>
            <View style={[style, styles.inner]}>
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
    inner: {
        padding: 5,
        width:"100%",
        flex:1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

export default Screen;