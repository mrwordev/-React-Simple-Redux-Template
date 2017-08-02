import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
let storage;
if (!storage) {
    storage = new Storage({
        size: 1000,
        storageBackend: AsyncStorage,
        defaultExpires: 1000 * 3600 * 24,
        enableCache: true,
    });
}
export default storage;
