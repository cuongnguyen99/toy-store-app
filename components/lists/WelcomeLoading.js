import React from 'react';
import LottieView from 'lottie-react-native';

function WelcomeLoading({visible = false}) {
    if (!visible) return null;
    
    return (
        <LottieView
            autoPlay
            loop = {false}
            source={require("../../assets/animations/lf30_editor_7o8iekre.json")}
        />
    );
}

export default WelcomeLoading;