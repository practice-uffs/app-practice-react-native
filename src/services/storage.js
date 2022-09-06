import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {}
Storage.storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value)
	} catch (e) {
		console.log(e);
		return false;
	}
};

Storage.getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			return value;
		}
	} catch (e) {
		console.log(e);
		return false;
	}
};

Storage.setUserData = async (data) => {
	await Storage.storeData('user_data', JSON.stringify(data));
};

Storage.getUserData = async () => {
	return JSON.parse(await Storage.getData('user_data'));
};

Storage.setUserToken = async (data) => {
	await Storage.storeData('user_token', JSON.stringify(data));
};

Storage.getUserToken = async () => {
	return JSON.parse(await Storage.getData('user_token'));
};

export default Storage;