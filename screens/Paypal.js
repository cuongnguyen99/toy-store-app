import React, {useState} from 'react';
import {Modal, StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

function Paypal({visible, pay, handleLoadEnd}) {
  return (
    <Modal 
      visible={visible}
    >
      <WebView
        source={{uri: `http://192.168.1.4:4000/api/paypal/${pay}`}}
        onLoadEnd={handleLoadEnd}
      />
    </Modal>
  );
}

export default Paypal;