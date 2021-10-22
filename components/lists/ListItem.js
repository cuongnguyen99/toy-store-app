import React from 'react';
import {StyleSheet} from 'react-native';

function ListItem(props) {
    return (
        <TouchableHighlight
            underlayColor= {color.white}
            onPress={() => console.log()}    
        >
            <View style={styles.container}>
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
        paddingBottom: 5
    },
    image:{
        width: 70,
        height: 70,
        borderRadius: 50
    },
    content_view:{
        paddingLeft: 10,
        justifyContent: 'center'        
    }
    ,
    title:{
        fontSize: 16,
        fontWeight: "bold"
    },
    subtitle:{
        fontSize: 15,
        opacity: 0.5,
        marginTop: 2
    }
})

export default ListItem;