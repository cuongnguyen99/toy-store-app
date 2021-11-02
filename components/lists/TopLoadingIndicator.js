import React from 'react';
import LottieView from 'lottie-react-native';

function TopLoadingIndicator({visible = false, ...otherProps}) {
    if (!visible) return null;

    return (
        <LottieView
            autoPlay
            source={require("../../assets/animations/lf30_editor_jou4jyqx.json")}
            {...otherProps}
        />
    );
}

export default TopLoadingIndicator;