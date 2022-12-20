import AsyncStorage from '@react-native-async-storage/async-storage';

export class StorageService {

    static async getItem(name: string): Promise<any> {
        try {
            return await AsyncStorage.getItem(name);
        } catch (error) {
            console.log("Get AsyncStorage", error);
            return '';
        }
    }

    static async setItem(key: string, val: string) {
        try {
            await AsyncStorage.setItem(key, val);
        } catch (error) {
            console.log("Set AsyncStorage", error);
        }
    }

    static async clearItem(key: string) {
        try {
            await AsyncStorage.removeItem(key);
            return true;
        } catch (error) {
            console.log("Clear AsyncStorage", error);
            return false;
        }
    }
}