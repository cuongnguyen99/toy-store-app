import React from 'react';
import { Text, StyleSheet } from 'react-native';

import st from '../../config/styles'

function ErrorMessage({children, ...otherProps}) {
    return (
        <Text 
            style={[st.text, styles.err]} 
            {...otherProps}
        >
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
  err: {
    color: 'red',
    paddingLeft: 10,
    fontSize: 14,
    alignSelf: 'center',
    marginBottom: 10
  }  
})

export default ErrorMessage;