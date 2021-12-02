import React from 'react';
import { Modal, View, StyleSheet, Text} from 'react-native';

import * as Progress from 'react-native-progress';
import color from '../config/colors';
import LottieView from 'lottie-react-native';

function UploadScreen({progress = 0, visible = false, onDone}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {progress < 1 ?
                    (<Progress.Bar progress={progress} width={200} color={color.primary} />)
                    :
                    (<LottieView
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require("../assets/animations/lf30_editor_wx4dgj51.json")}
                    />)
                }
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    animation: {
        width: 200
    }
});

export default UploadScreen;