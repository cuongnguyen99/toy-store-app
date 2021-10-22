import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import color from '../../config/colors';


function AppTextInput({style, content, security = false, keyboard = "default", onChangeText, onBlur}) {
    return (
        <TextInput 
            style={[styles.input, style]}
            placeholder={content && content}
            placeholderTextColor={color.sub_text}
            numberOfLines={1}
            disableFullscreenUI={true}
            keyboardType={keyboard}
            secureTextEntry={security}
            onChangeText={onChangeText}
            onBlur={onBlur}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: "100%",
        borderWidth: 1,
        borderColor: color.sub_text,
        paddingLeft: 15,
        borderRadius: 30,
        color: color.text,
        fontSize: 16
    }
})

export default AppTextInput;