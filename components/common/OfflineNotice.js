import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AppText } from '.';
import color from '../../config/colors';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

function OfflineNotice(props) {
    const netInfor = useNetInfo();

    if(netInfor.type !== "unknown" && netInfor.isInternetReachable === false){
        return (
            <View style={styles.container}>
                <AppText style={styles.text}>No Internet Connection</AppText>
            </View>
        );
    }
    return null;
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: 70,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.primary,
        top: Constants.statusBarHeight,
        elevation: 1
    },
    text: {
        color: color.white
    }
})

export default OfflineNotice;