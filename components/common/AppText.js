import React from "react";
import { Text } from 'react-native';

import styles from "../../config/styles";

function AppText({children, style, lineNumber=null}) {
    return (
        <Text style={[styles.text, style]} numberOfLines={lineNumber} ellipsizeMode="head">
            {children}
        </Text>
    );
}

export default AppText;