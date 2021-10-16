import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HairLine({content}) {
    return (
        <View style={styles.hairline}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                <View>
                    <Text style={{width: 50, textAlign: 'center'}}>{content && content}</Text>
                </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    hairline:{
        flexDirection: 'row', 
        alignItems: 'center', 
        width: "90%",
        alignSelf: 'center',
        marginBottom: 20,
        marginTop: 20
    }
})

export default HairLine;