import { Platform } from 'react-native';
import color from './colors';

export default {
    text: {
        color: color.text,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
}