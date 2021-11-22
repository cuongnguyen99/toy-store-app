import React from 'react';
import {StyleSheet, TouchableHighlight, View, Text} from 'react-native';
import color from '../../config/colors';

function ListItem({title, subtitle, image, iconComponent, style, onPress}) {
    return (
        <TouchableHighlight
            underlayColor= "#f1f1f1"
            onPress={onPress}
            style={style}   
        >
            <View style={[styles.container]}>
                {iconComponent}
                {image && <Image style={styles.image} source={image}/>}
                <View style={styles.content_view}>
                    <Text style={styles.title}>{title}</Text>
                    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
                </View>
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20,
        paddingTop: 0,
        paddingBottom: 5,
        paddingLeft: 0,
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 50
    },
    content_view:{
        paddingLeft: 20,
        justifyContent: 'center'        
    }
    ,
    title:{
        fontSize: 19,
        color: color.text
    },
    subtitle:{
        fontSize: 15,
        opacity: 0.5,
        marginTop: 2
    }
})

export default ListItem;