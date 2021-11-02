import React from 'react';

function WelcomeLoading({visible = false}) {
    if (!visible) return null;
    
    return (
        <LottieView
            autoPlay
            loop
            source={require("../../assets/animations/lf30_editor_xkewjcrv.json")}
        />
    );
}

export default WelcomeLoading;