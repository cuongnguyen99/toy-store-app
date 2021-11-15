import AsyncStorage from '@react-native-async-storage/async-storage';
import moment, { now } from 'moment';

const prefix = 'cache';

const isExpired = (item) => {
    const now = moment(Date.now());
    const storedTime = moment(item.timestamp);
    return now.diff(storedTime, 'days') > 3;
};
const store = async (key, value) => {
    try {
        const item = {
            value,
            timestamp: Date.now(),
        }
        await AsyncStorage.setItem(prefix+key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    }
}
const get = async (key) => {
    try {
        const value = AsyncStorage.getItem(prefix+key);
        const item = JSON.parse(value);

        if(!item) return null;

        if(isExpired(item)){
            await AsyncStorage.removeItem(prefix+key);
            return null;
        }

        return item.value;
    } catch (error) {
        console.log(error);
    }
}

export default {store, get};