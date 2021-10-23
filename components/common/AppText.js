import React from "react";
import { Text } from 'react-native';

import styles from "../../config/styles";

function AppText({children, style, ...otherProps}) {
    return (
        <Text 
            style={[styles.text, style]} 
            ellipsizeMode="head" 
            numberOfLines={1}
            {...otherProps}
        >
            {children}
        </Text>
    );
}

export default AppText;