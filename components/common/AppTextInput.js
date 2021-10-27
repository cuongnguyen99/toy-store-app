import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import color from '../../config/colors';


function AppTextInput({style, content, ...otherProps}) {
    return (
        <TextInput 
            style={[styles.input, style]}
            placeholder={content && content}
            placeholderTextColor={color.sub_text}
            selectionColor={color.text}
            numberOfLines={1}
            disableFullscreenUI={true}
            {...otherProps}
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
        fontSize: 16,
        paddingRight: 15
    }
})

export default AppTextInput;