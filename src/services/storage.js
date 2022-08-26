import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {}
Storage.storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value)
	} catch (e) {
		console.log(e);
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
	}
};

Storage.setUserData = async (data) => {
	await this.storeData('user_data', JSON.stringify(data));
};

Storage.getUserData = async () => {
	return JSON.parse(await this.getData('user_data'));
};

Storage.setUserToken = async (data) => {
	await this.storeData('user_token', JSON.stringify(data));
};

Storage.getUserToken = async () => {
	return JSON.parse(await this.getData('user_token'));
};

Storage.setIsSignedIn = async (data) => {
	await this.storeData('is_signed_in', data);
};

Storage.isSignedIn = async () => {
	console.log(await this.getData('is_signed_in'));
	return this.getData('is_signed_in') || false;
};


export default Storage;