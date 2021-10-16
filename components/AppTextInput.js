import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import color from '../config/colors';


function AppTextInput({style, content, security = false}) {
    return (
        <TextInput 
            style={[styles.input, style]}
            placeholder={content && content}
            placeholderTextColor={color.sub_text}
            numberOfLines={1}
            secureTextEntry={security}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderColor: color.sub_text,
        paddingLeft: 20,
        borderRadius: 30,
        color: color.text,
        fontSize: 16
    }
})

export default AppTextInput;